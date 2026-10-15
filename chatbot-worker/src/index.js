const MAX_MESSAGE_LENGTH = 1000;
const MAX_CONTEXT_LENGTH = 8000;

const SYSTEM_PROMPTS = {
  pt: "Você é um assistente virtual para um portfólio pessoal. Responda em português brasileiro de forma amigável, profissional e concisa (no máximo 3 parágrafos curtos). Use as informações do contexto para responder sobre certificados, projetos, experiências e formação. Se não tiver informação específica, seja honesto sobre isso e sugira entrar em contato diretamente. Não responda perguntas sem relação com o portfólio.",
  en: "You are a virtual assistant for a personal portfolio. Respond in English in a friendly, professional and concise manner (at most 3 short paragraphs). Use the context information to answer about certificates, projects, experiences and education. If you don't have specific information, be honest about it and suggest contacting directly. Do not answer questions unrelated to the portfolio.",
};

const ERROR_MESSAGES = {
  pt: "Desculpe, ocorreu um erro interno. Tente novamente.",
  en: "Sorry, an internal error occurred. Please try again.",
};

const getAllowedOrigin = (request, env) => {
  const origin = request.headers.get("Origin");
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  return origin && allowed.includes(origin) ? origin : null;
};

const corsHeaders = (origin) => ({
  ...(origin && { "Access-Control-Allow-Origin": origin }),
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
});

const json = (data, status, origin) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });

const buildContext = (context) =>
  (context?.sections || [])
    .map((s) => `${s.section}: ${s.content}`)
    .join("\n\n")
    .substring(0, MAX_CONTEXT_LENGTH);

const askGemini = async (env, systemPrompt, message) => {
  if (!env.GEMINI_API_KEY?.trim()) {
    throw new Error("GEMINI_API_KEY secret is missing or empty");
  }

  const model = env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: "user", parts: [{ text: message }] }],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts
    ?.map((p) => p.text || "")
    .join("")
    .trim();
};

export default {
  async fetch(request, env) {
    const origin = getAllowedOrigin(request, env);
    const { pathname } = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (pathname === "/health" && request.method === "GET") {
      return json({ status: "OK", timestamp: new Date().toISOString() }, 200, origin);
    }

    if (pathname !== "/api/chat" || request.method !== "POST") {
      return json({ error: "Not found" }, 404, origin);
    }

    if (!origin) {
      return json({ error: "Origin not allowed" }, 403, null);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, origin);
    }

    const language = body.language === "en" ? "en" : "pt";
    const message = String(body.message || "").trim();

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      return json({ error: "Invalid message" }, 400, origin);
    }

    try {
      const contextInfo = buildContext(body.context);
      const systemPrompt =
        SYSTEM_PROMPTS[language] +
        (contextInfo ? `\n\nContexto do portfólio:\n${contextInfo}` : "");

      const reply = await askGemini(env, systemPrompt, message);

      if (!reply) {
        throw new Error("Empty response from Gemini");
      }

      return json({ response: reply }, 200, origin);
    } catch (error) {
      console.error(error);
      return json({ message: ERROR_MESSAGES[language] }, 500, origin);
    }
  },
};
