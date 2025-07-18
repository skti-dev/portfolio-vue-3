# Servidor Chatbot para Portfólio

Este é um exemplo de servidor Node.js para o chatbot que pode ser usado com ngrok.

## Configuração

1. Crie um novo projeto Node.js:

```bash
mkdir portfolio-chatbot-server
cd portfolio-chatbot-server
npm init -y
```

2. Instale as dependências:

```bash
npm install express cors dotenv openai
```

3. Crie um arquivo `.env` com sua chave da OpenAI:

```env
OPENAI_API_KEY=sua_chave_openai_aqui
PORT=3001
```

4. Crie um arquivo `server.js`:

```javascript
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Configurar CORS
app.use(cors());
app.use(express.json());

// Configurar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint do chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language, context } = req.body;

    // Criar prompt baseado no contexto do portfólio
    const systemPrompt =
      language === "pt"
        ? `Você é um assistente virtual para um portfólio pessoal. Responda em português brasileiro de forma amigável e profissional. Use as informações do contexto para responder sobre certificados, projetos, experiências e formação. Se não tiver informação específica, seja honesto sobre isso e sugira entrar em contato diretamente.`
        : `You are a virtual assistant for a personal portfolio. Respond in English in a friendly and professional manner. Use the context information to answer about certificates, projects, experiences and education. If you don't have specific information, be honest about it and suggest contacting directly.`;

    const contextInfo =
      context.sections
        ?.map((section) => `${section.section}: ${section.content}`)
        .join("\n\n") || "";

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt + `\n\nContexto do portfólio:\n${contextInfo}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content ||
      (language === "pt"
        ? "Desculpe, não consegui processar sua pergunta."
        : "Sorry, I couldn't process your question.");

    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage =
      req.body.language === "pt"
        ? "Desculpe, ocorreu um erro interno. Tente novamente."
        : "Sorry, an internal error occurred. Please try again.";

    res.status(500).json({ error: errorMessage });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

5. Execute o servidor:

```bash
node server.js
```

6. Em outro terminal, configure o ngrok:

```bash
# Instale o ngrok se ainda não tiver
npm install -g ngrok

# Exponha o servidor na porta 3001
ngrok http 3001
```

7. Copie a URL do ngrok (ex: `https://abc123.ngrok.io`) e configure no arquivo `.env` do projeto Vue:

Crie um arquivo `.env` na raiz do projeto Vue:

```env
VUE_APP_NGROK_URL=https://sua-url-ngrok.ngrok.io
```

## Funcionalidades

- Responde perguntas sobre o portfólio em português e inglês
- Usa o contexto da página atual para fornecer respostas relevantes
- Integração com OpenAI GPT-3.5-turbo
- Suporte a CORS para requisições do frontend
- Health check endpoint

## Segurança

Para produção, considere adicionar:

- Rate limiting
- Autenticação
- Validação de dados mais robusta
- Logs estruturados
- Monitoramento
