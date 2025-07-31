const name = "Augusto Seabra";

export const messages = {
  pt: {
    portfolio: "Meu Portfólio",
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
        "Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e soluções inovadoras. Bem-vindo ao meu portfólio!",
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
      education: "Formação",
      educationText:
        "Formado em Tecnologia em Sistemas para Internet pela FIAP (Faculdade de Informática e Administração Paulista) em 16 de dezembro de 2022. Título obtido: Tecnólogo em Sistemas para Internet.",
      downloadDiploma: "Baixar Diploma Digital",
      mainProjects: "Principais Projetos",
      mainProjectsText: `Possuo experiência profissional no desenvolvimento de landing pages como freelancer, utilizando principalmente React e Vue. Atuei na criação de um sistema de atendimento humano para a empresa Konecta Brazil, amplamente utilizado por seus clientes, desenvolvido com Vue, API em PHP e integração via WebSocket. Também participei da integração de sistemas de atendimento médico para a Sami Saúde, utilizando a biblioteca da Twilio.
      Em projetos pessoais, alguns destaques que desenvolvi:
      - Um e-commerce simples (Vue + Node.js + PHP);
      - Um aplicativo de gerenciamento para oficinas de funilaria e pintura (React Native com Expo + backend em Python);
      Modelos de inteligência artificial com visão computacional para:
      - Classificação de modelos de carros;
      - Classificação do nível de avarias em veículos colididos;
      - Identificação de peças automotivas.
      Também desenvolvo chatbots com IA e agentes com bases de conhecimento personalizadas sobre diversos temas.`,
      interests: "Áreas de Interesse",
      interestsText:
        "Tenho grande interesse e experiência em desenvolvimento web fullstack, atuando com diversas tecnologias no frontend e backend. Também me interesso por desenvolvimento mobile, criação de APIs e inteligência artificial, com sólida base em Python, Langchain e integração com a API da OpenAI. Além disso, sou entusiasta de Arduino e gosto de desenvolver soluções físicas com componentes eletrônicos.",
      plus: "Informações adicionais",
      plusText:
        "Possuo experiência em gestão de pessoas, atuando no acompanhamento de equipes de desenvolvimento, promovendo code reviews com foco em qualidade de código e boas práticas. Familiaridade com metodologias ágeis, especialmente Scrum e Kanban, participando ativamente de sprints, plannings e dailies.",
    },
    projects: [
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
        title: "🤖 Bot do Telegram - Sobre Augusto",
        description:
          "Bot simples criado para responder perguntas pessoais sobre mim (Augusto), utilizando LangChain e a API Groq. Possui fallback com busca dinâmica via SerpAPI caso a resposta não esteja na base local.",
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
      {
        title: "🛍️ E-commerce Fullstack",
        description:
          "Plataforma de e-commerce desenvolvida com Vue 3 no frontend, Node.js no backend e integração com serviços em PHP. Conta com funcionalidades completas de catálogo de produtos, carrinho de compras, sistema de login, painel administrativo e gerenciamento de pedidos. O projeto está pronto para integração com meios de pagamento, restando apenas a inclusão dessa etapa para ser totalmente funcional.",
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
  },
  en: {
    portfolio: "My Portfolio",
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
        "Developer passionate about technology, always looking for new challenges and innovative solutions. Welcome to my portfolio!",
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
      education: "Education",
      educationText:
        "Graduated in Internet Systems Technology from FIAP (Faculdade de Informática e Administração Paulista) on December 16, 2022. Degree earned: Technologist in Internet Systems.",
      downloadDiploma: "Download Digital Diploma",
      mainProjects: "Main Projects",
      mainProjectsText: `I have professional experience developing landing pages as a freelancer, mainly using React and Vue. I helped create a human customer service system for Konecta Brazil, widely used by their clients, built with Vue, a PHP API, and WebSocket integration. I also worked on the integration of medical service systems for Sami Saúde, using the Twilio library.
      In personal projects, some highlights I developed:
      - A simple e-commerce platform (Vue + Node.js + PHP);
      - A management app for auto body and paint shops (React Native with Expo + Python backend);
      Computer vision AI models for:
      - Car model classification;
      - Damage severity classification on crashed vehicles;
      - Auto parts identification.
      I also build AI-powered chatbots and agents with custom knowledge bases on various topics.`,
      interests: "Areas of Interest",
      interestsText:
        "I have strong interest and experience in fullstack web development, working with a wide range of frontend and backend technologies. I'm also interested in mobile development, API design, and artificial intelligence, with a solid background in Python, Langchain, and OpenAI API integration. Additionally, I'm an Arduino enthusiast and enjoy building physical devices with electronic components.",
      plus: "Additional Information",
      plusText:
        "I have experience in people management, supporting development teams and conducting code reviews focused on code quality and best practices. I'm familiar with agile methodologies, especially Scrum and Kanban, actively participating in sprints, plannings, and daily meetings.",
    },
    projects: [
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
        title: "🤖 Telegram Bot – About Augusto",
        description:
          "A simple Telegram bot designed to answer personal questions about me (Augusto), using LangChain and the Groq API. Includes fallback search functionality with SerpAPI if no answer is found locally.",
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
      {
        title: "🛍️ Fullstack E-commerce",
        description:
          "E-commerce platform built with Vue 3 on the frontend, Node.js on the backend, and additional services in PHP. Includes full product catalog, shopping cart, user authentication, admin panel, and order management system. The platform is ready for payment gateway integration, with only that step remaining to make it fully operational.",
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
  },
};
