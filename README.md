# Portfólio Vue 3

Um portfólio pessoal moderno e responsivo desenvolvido com Vue 3 e Vite.

## 🚀 Funcionalidades

- **Apresentação Inicial**: Foto de perfil e descrição pessoal
- **Certificados**: Cards com links para certificados obtidos
- **Sobre Mim**: Seção detalhada sobre formação, projetos e interesses
- **Projetos**: Showcase de projetos desenvolvidos com links
- **Contato**: Links diretos para email, WhatsApp, LinkedIn e GitHub

## 🛠️ Tecnologias Utilizadas

- Vue 3
- Vue Router 4
- Vite
- CSS3 com Grid e Flexbox
- Font Awesome (ícones)

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

## 🎨 Personalização

### 1. Informações Pessoais

Edite o arquivo `src/views/Home.vue` e altere:

- **Foto de perfil**: Substitua `/placeholder-photo.jpg` por sua foto
- **Nome**: Altere "[Seu Nome]" pelo seu nome
- **Descrição**: Personalize a descrição na seção hero

### 2. Certificados

No arquivo `src/views/Home.vue`, edite o array `certificados`:

```javascript
certificados: [
  {
    id: 1,
    titulo: "Seu Certificado",
    descricao: "Descrição do certificado",
    link: "https://link-do-certificado.com",
  },
];
```

### 3. Projetos

Edite o array `projetos` no mesmo arquivo:

```javascript
projetos: [
  {
    id: 1,
    titulo: "Nome do Projeto",
    descricao: "Descrição do projeto",
    link: "https://github.com/seu-usuario/projeto",
  },
];
```

### 4. Informações de Contato

Altere o objeto `contato`:

```javascript
contato: {
  email: 'seu@email.com',
  whatsapp: '5511999999999', // Código país + DDD + número
  linkedin: 'https://linkedin.com/in/seu-usuario',
  github: 'https://github.com/seu-usuario'
}
```

### 5. Seção "Sobre Mim"

Edite diretamente no template a seção com id "sobre" com suas informações de:

- Formação acadêmica
- Principais projetos e experiências
- Áreas de interesse

## 📱 Responsividade

O projeto foi desenvolvido com design responsivo e se adapta a diferentes tamanhos de tela.

## 🎨 Cores do Tema

O projeto usa um gradiente roxo/azul como tema principal:

- Primária: `#667eea` → `#764ba2`
- Fundo: `#f8f9fa`
- Texto: `#333`

Para alterar as cores, edite o arquivo `src/style.css`.

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📄 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.vue      # Navegação
│   └── Footer.vue      # Rodapé
├── views/
│   └── Home.vue        # Página principal
├── App.vue             # Componente raiz
├── main.js             # Entrada da aplicação
└── style.css           # Estilos globais
```

## 🤝 Contribuição

Sinta-se à vontade para personalizar e adaptar este portfólio às suas necessidades!
