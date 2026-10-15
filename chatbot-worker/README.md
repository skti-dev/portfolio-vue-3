# Chatbot Worker (Cloudflare Workers + Gemini)

Backend gratuito do chatbot do portfólio. Recebe `POST /api/chat` do site e responde usando a API do Google Gemini.

## 1. Chave do Gemini

1. Acesse https://aistudio.google.com/apikey e crie uma chave.
2. Em **Google Cloud Console → APIs e serviços → Credenciais**, restrinja a chave à **Generative Language API**. O Google recusa chaves sem restrição.

## 2. Deploy na Cloudflare

```bash
cd chatbot-worker
npm install
npx wrangler login
npx wrangler secret put GEMINI_API_KEY
npx wrangler deploy
```

O deploy imprime a URL do Worker, ex.: `https://portfolio-chatbot.<sua-conta>.workers.dev`.

Teste: abra `<url>/health` no navegador e veja `{"status":"OK",...}`.

## 3. Apontar o site para o Worker

No GitHub: **Settings → Secrets and variables → Actions → Variables → New repository variable**

- Nome: `VITE_CHATBOT_API_URL`
- Valor: a URL do Worker (sem `/` no final)

Depois rode o workflow de deploy de novo (ou faça um push na `main`).

## Desenvolvimento local

```bash
cp .dev.vars.example .dev.vars   # coloque sua chave aqui
npm run dev                      # Worker em http://localhost:8787
```

O `.env` do site deve ter `VITE_CHATBOT_API_URL=http://localhost:8787` e o site deve rodar na porta 3000.

## Configuração

Em `wrangler.toml`:

- `ALLOWED_ORIGINS`: domínios que podem chamar o Worker (separados por vírgula).
- `GEMINI_MODEL`: modelo usado. Os limites do plano gratuito variam por modelo; veja https://ai.google.dev/gemini-api/docs/rate-limits.
