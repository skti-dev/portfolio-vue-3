# Portfólio Vue 3 - Mobile First com Chatbot

Um portfólio pessoal moderno, responsivo e multilíngue desenvolvido com Vue 3, Vite e Vue I18n, com design mobile-first e chatbot integrado.

## 🚀 Funcionalidades

- **Design Mobile-First**: Otimizado para dispositivos móveis com responsividade para desktop
- **Multilíngue**: Suporte completo para Português e Inglês com vue-i18n
- **Chatbot Inteligente**: Assistente virtual via ngrok para responder dúvidas sobre o portfólio
- **Apresentação Inicial**: Foto de perfil e descrição pessoal
- **Certificados**: Cards com links para certificados obtidos
- **Sobre Mim**: Seção detalhada sobre formação, projetos e interesses
- **Projetos**: Showcase de projetos desenvolvidos com links
- **Contato**: Links diretos para email, WhatsApp, LinkedIn e GitHub

## 🛠️ Tecnologias Utilizadas

- Vue 3 (Composition API)
- Vue Router 4
- Vue I18n 9 (Internacionalização)
- Vite (Build tool)
- CSS3 com Grid e Flexbox (Mobile-first)
- Font Awesome (Ícones)
- OpenAI API (Chatbot)

## 📦 Instalação

1. Clone o repositório ou use este projeto
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse http://localhost:3000

## 🤖 Configuração do Chatbot

Para ativar o chatbot, siga os passos no arquivo `chatbot-server-example.md`:

1. Configure o servidor Node.js com OpenAI
2. Execute com ngrok para exposição pública
3. Configure a variável de ambiente no projeto Vue:

```env
# .env
VUE_APP_NGROK_URL=https://sua-url-ngrok.ngrok.io
```

## 🌐 Suporte Multilíngue

O projeto suporta português e inglês automaticamente:

- Detecção automática do idioma preferido do usuário
- Persistência da escolha no localStorage
- Toggle de idioma no header
- Chatbot respondem no idioma selecionado

## 🎨 Personalização

### 1. Informações Pessoais

Edite as traduções em `src/i18n/messages.js`:

```javascript
// Para português
hero: {
  greeting: 'Olá, eu sou [Seu Nome]',
  description: 'Sua descrição aqui'
}

// Para inglês
hero: {
  greeting: 'Hello, I am [Your Name]',
  description: 'Your description here'
}
```

### 2. Foto de Perfil

Substitua `/placeholder-photo.jpg` na pasta `public/` por sua foto.

### 3. Certificados

Edite as traduções e links em `src/i18n/messages.js` e `src/views/Home.vue`:

```javascript
// messages.js - traduções
certificates: [
  {
    title: "Nome do Certificado",
    description: "Descrição do certificado",
  },
];

// Home.vue - links
certificados: [
  {
    link: "https://link-do-certificado.com",
  },
];
```

### 4. Projetos

Similar aos certificados, edite tanto as traduções quanto os links.

### 5. Informações de Contato

Edite em `src/views/Home.vue`:

```javascript
contato: {
  email: 'seu@email.com',
  whatsapp: '5511999999999', // Código país + DDD + número
  linkedin: 'https://linkedin.com/in/seu-usuario',
  github: 'https://github.com/seu-usuario'
}
```

### 6. Seção "Sobre Mim"

Edite as traduções em `src/i18n/messages.js` nas chaves `about.*`.

## 📱 Design Mobile-First

O projeto foi desenvolvido seguindo a metodologia mobile-first:

- **Breakpoints**:

  - Mobile: < 768px (design base)
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

- **Características**:
  - Navegação adaptativa
  - Cards responsivos
  - Chatbot otimizado para mobile
  - Typography escalável
  - Touch-friendly interfaces

## 🎨 Personalização de Cores

Edite as variáveis CSS em `src/style.css`:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores base */
--primary-color: #667eea;
--secondary-color: #764ba2;
--background-color: #f8f9fa;
--text-color: #333;
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📄 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.vue          # Navegação com toggle de idioma
│   ├── Footer.vue          # Rodapé
│   └── Chatbot.vue         # Componente do chatbot
├── views/
│   └── Home.vue            # Página principal
├── i18n/
│   ├── index.js            # Configuração do vue-i18n
│   └── messages.js         # Traduções PT/EN
├── App.vue                 # Componente raiz
├── main.js                 # Entrada da aplicação
└── style.css               # Estilos globais mobile-first
```

## 🚀 Deploy

### Netlify/Vercel

1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist/`
3. Configure redirects para SPA se necessário

### GitHub Pages

1. Configure o `vite.config.js` com a base correta
2. Use GitHub Actions para deploy automático

## 🤝 Contribuição

Sinta-se à vontade para:

- Personalizar o design
- Adicionar novas seções
- Melhorar a responsividade
- Expandir o sistema de traduções
- Otimizar o chatbot

## 📝 Licença

Este projeto é de código aberto. Use e modifique como desejar para criar seu portfólio único!
