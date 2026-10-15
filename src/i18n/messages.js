const name = "Augusto Seabra";

export const messages = {
  pt: {
    portfolio: "AS - Portfólio",
    backToTop: "Voltar ao topo",
    name,
    nav: {
      home: "Início",
      certificates: "Certificados",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      description:
        "Desenvolvedor FullStack e de IA com mais de 7 anos de experiência em web, mobile e integrações com LLMs.",
      contactMe: "Entre em Contato",
      viewProjects: "Ver Projetos",
      profileAlt: "Foto de perfil de Augusto Seabra",
      viewProjectsLabel: "Ver Projetos",
      contactLabel: "Entre em contato",
    },
    sections: {
      certificates: "Certificados",
      about: "Sobre Mim",
      projects: "Projetos",
      contact: "Contato",
    },
    certificates: {
      title: "Certificados",
      verify: "Verificar",
      previous: "Anterior",
      next: "Próximo",
      goToSlide: "Ir para slide",
      icon: "Ícone do certificado",
    },
    about: {
      downloadDiplomaLabel: "Baixar Diploma Digital",
      education: "Formação",
      educationText:
        "Formado em Tecnologia em Sistemas para Internet pela FIAP (Faculdade de Informática e Administração Paulista) em 16 de dezembro de 2022. Título obtido: Tecnólogo em Sistemas para Internet.",
      downloadDiploma: "Baixar Diploma Digital",
      mainProjects: "Experiência Profissional",
      mainProjectsText: `Mais de 7 anos como desenvolvedor web, com foco em saúde, telecom e educação.

Konecta Brazil: sistemas de atendimento em PHP e Vue, com chat em tempo real e integrações omnichannel. Reescrevi o k-assist, gateway de IA da empresa, que atende cerca de 50 mil chamadas por dia.

Vitalis Saúde Mental (2026): desenvolvi a API, o back-office web e o app mobile da plataforma, entregue em produção.

Sami Saúde: frontend em React e TypeScript, com chamadas de vídeo via Twilio.

Freelancer: projetos completos direto com o cliente e landing pages para agências de marketing.`,
      interests: "Áreas de Interesse",
      interestsText:
        "Desenvolvimento fullstack com React, Vue, Node.js e Python, apps mobile com React Native e IA aplicada: agentes, RAG e integração com OpenAI, Gemini e Claude. Nas horas vagas, projetos com Arduino.",
      plus: "Informações adicionais",
      plusText:
        "Experiência liderando pequenas equipes de frontend e conduzindo code reviews. Trabalho com Scrum, Kanban e desenvolvimento orientado a especificação.",
    },
    projects: [
      {
        title: "🧠 Vitalis Saúde Mental",
        description:
          "Plataforma de saúde mental com API, back-office web e app mobile, desenvolvida sozinho e entregue em produção. Node.js, TypeScript, PostgreSQL, React e React Native, com pagamentos via Stripe, prescrição digital (Memed) e BI em Metabase.",
      },
      {
        title: "⚡ k-assist: Gateway de IA",
        description:
          "Gateway de IA da Konecta, reescrito por mim. Atende cerca de 50 mil chamadas por dia em 90 serviços, com roteamento entre OpenAI, Gemini e Claude, streaming e tool calling.",
      },
      {
        title: "🎓 BNCC App (Fatec Cotia)",
        description:
          "Plataforma de questionários educacionais baseados na BNCC, feita para a Fatec Cotia. App em React Native (Expo), API em FastAPI com MongoDB e um gerador de questões com IA (LangChain e OpenAI) a partir das habilidades da BNCC.",
      },
      {
        title: "🛡️ Clash of Clans Insights",
        description:
          "Assistente inteligente voltado para jogadores de Clash of Clans, com conhecimento detalhado sobre tropas, defesas, heróis, feitiços, estratégias de ataque e atualizações do jogo. Desenvolvido com LangChain, OpenAI GPT-4o, Streamlit e uma base de conhecimento estruturada por web scraping.",
      },
      {
        title: "🔊 Sonix Aparelhos Auditivos",
        description:
          "Landing page institucional para uma empresa especializada na venda de aparelhos auditivos. Projeto focado em performance, clareza e acessibilidade.",
      },
      {
        title: "🚗 Identificação de Carros",
        description:
          "Modelo de visão computacional que identifica marca e modelo de carros a partir de fotos. ResNet50 ajustada com PyTorch sobre o Stanford Cars Dataset, ampliado com carros populares no Brasil coletados por crawler, e interface em Streamlit.",
      },
      {
        title: "🛹 Skate Dice",
        description:
          "Aplicativo web que gera manobras aleatórias de skate, com controle de tentativas, histórico de execuções e marcação de acertos/erros. Projeto voltado para praticantes e entusiastas.",
      },
      {
        title: "🏢 JAC Grupo",
        description:
          "Landing page desenvolvida para uma empresa de gestão de condomínios, com foco em identidade visual corporativa e experiência do usuário.",
      },
    ],
    contact: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Enviar Email",
      sendMessage: "Enviar Mensagem",
      viewProfile: "Ver Perfil",
      viewRepositories: "Ver Repositórios",
    },
    buttons: {
      viewCertificate: "Ver Certificado",
      viewProject: "Ver Projeto",
    },
    footer: {
      copyright: "Portfólio de Augusto Seabra",
    },
    chatbot: {
      title: "Assistente Virtual",
      welcome:
        "Olá! Sou seu assistente virtual. Posso responder dúvidas sobre o portfólio, projetos, certificados e experiências. Como posso ajudar?",
      placeholder: "Digite sua pergunta...",
      error: "Desculpe, ocorreu um erro. Tente novamente.",
      timeout: "Tempo limite esgotado. Tente novamente.",
      send: "Enviar mensagem",
      close: "Fechar chat",
      open: "Abrir chat",
      you: "Você",
      assistant: "Assistente",
    },
    errors: {
      loading: "Carregando...",
      failed: "Falha ao carregar",
      tryAgain: "Tentar novamente",
      downloadFailed: "Falha no download do arquivo",
    },
    accessibility: {
      profileImage: "Foto de perfil de {name}",
      logoAlt: "Logo do {name}",
      openInNewTab: "Abre em uma nova aba",
    },
  },
  en: {
    portfolio: "AS - Portfolio",
    backToTop: "Back to top",
    name,
    nav: {
      home: "Home",
      certificates: "Certificates",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      description:
        "FullStack and AI developer with 7+ years of experience in web, mobile and LLM integrations.",
      contactMe: "Contact Me",
      viewProjects: "View Projects",
      profileAlt: "Profile picture of Augusto Seabra",
      viewProjectsLabel: "View Projects",
      contactLabel: "Contact",
    },
    sections: {
      certificates: "Certificates",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
    },
    certificates: {
      title: "Certificates",
      verify: "Verify",
      previous: "Previous",
      next: "Next",
      goToSlide: "Go to slide",
      icon: "Certificate icon",
    },
    about: {
      downloadDiplomaLabel: "Download Digital Diploma",
      education: "Education",
      educationText:
        "Graduated in Internet Systems Technology from FIAP (Faculdade de Informática e Administração Paulista) on December 16, 2022. Degree earned: Technologist in Internet Systems.",
      downloadDiploma: "Download Digital Diploma",
      mainProjects: "Professional Experience",
      mainProjectsText: `7+ years as a web developer, mostly in healthcare, telecom and education.

Konecta Brazil: customer service systems in PHP and Vue, with real-time chat and omnichannel integrations. I rewrote k-assist, the company's AI gateway, which handles around 50k calls per day.

Vitalis Saúde Mental (2026): I built the platform's API, web back-office and mobile app on my own and delivered it to production.

Sami Saúde: React and TypeScript frontend, with video calls via Twilio.

Freelance: full projects directly with clients and landing pages for marketing agencies.`,
      interests: "Areas of Interest",
      interestsText:
        "Fullstack development with React, Vue, Node.js and Python, mobile apps with React Native and applied AI: agents, RAG and integrations with OpenAI, Gemini and Claude. In my spare time, Arduino projects.",
      plus: "Additional Information",
      plusText:
        "Experience leading small frontend teams and running code reviews. I work with Scrum, Kanban and spec-driven development.",
    },
    projects: [
      {
        title: "🧠 Vitalis Saúde Mental",
        description:
          "Mental health platform with an API, web back-office and mobile app, built on my own and delivered in production. Node.js, TypeScript, PostgreSQL, React and React Native, with Stripe payments, digital prescriptions (Memed) and BI on Metabase.",
      },
      {
        title: "⚡ k-assist: AI Gateway",
        description:
          "Konecta's AI gateway, which I rewrote. Handles around 50k calls per day across 90 services, with routing between OpenAI, Gemini and Claude, streaming and tool calling.",
      },
      {
        title: "🎓 BNCC App (Fatec Cotia)",
        description:
          "Educational quiz platform based on Brazil's national curriculum (BNCC), built for Fatec Cotia. React Native (Expo) app, FastAPI API with MongoDB and an AI question generator (LangChain and OpenAI) driven by BNCC skills.",
      },
      {
        title: "🛡️ Clash of Clans Insights",
        description:
          "An intelligent assistant for Clash of Clans players, offering detailed knowledge on troops, defenses, heroes, spells, attack strategies, and game updates. Built with LangChain, OpenAI GPT-4o, Streamlit, and a custom knowledge base created via web scraping.",
      },
      {
        title: "🔊 Sonix Hearing Aids",
        description:
          "Institutional landing page for a company specializing in hearing aid sales. The project focuses on performance, clarity, and accessibility.",
      },
      {
        title: "🚗 Car Identification",
        description:
          "Computer vision model that identifies car make and model from photos. ResNet50 fine-tuned with PyTorch on the Stanford Cars Dataset, extended with popular Brazilian cars collected by a crawler, and a Streamlit interface.",
      },
      {
        title: "🛹 Skate Dice",
        description:
          "Web app that generates random skate tricks, tracks attempts, and allows users to mark successful or failed executions. A fun tool for skaters and enthusiasts.",
      },
      {
        title: "🏢 JAC Group",
        description:
          "Landing page for a condominium management company, designed with a strong corporate visual identity and user-friendly layout.",
      },
    ],
    contact: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Send Email",
      sendMessage: "Send Message",
      viewProfile: "View Profile",
      viewRepositories: "View Repositories",
    },
    buttons: {
      viewCertificate: "View Certificate",
      viewProject: "View Project",
    },
    footer: {
      copyright: "Portfolio of Augusto Seabra",
    },
    chatbot: {
      title: "Virtual Assistant",
      welcome:
        "Hello! I am your virtual assistant. I can answer questions about the portfolio, projects, certificates and experiences. How can I help?",
      placeholder: "Type your question...",
      error: "Sorry, an error occurred. Please try again.",
      timeout: "Request timeout. Please try again.",
      send: "Send message",
      close: "Close chat",
      open: "Open chat",
      you: "You",
      assistant: "Assistant",
    },
    errors: {
      loading: "Loading...",
      failed: "Failed to load",
      tryAgain: "Try again",
      downloadFailed: "File download failed",
    },
    accessibility: {
      profileImage: "Profile picture of {name}",
      logoAlt: "{name}'s logo",
      openInNewTab: "Opens in a new tab",
    },
  },
};
