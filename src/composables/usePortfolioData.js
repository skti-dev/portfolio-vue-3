import { ref, readonly } from "vue";
import profilePicture from "@/assets/images/Foto perfil - recortada.jpg";
import diplomaPdf from "@/assets/docs/RepresentacaoVisualDiplomaDigital-FIAP.pdf";

const projects = ref([
  {
    id: 0,
    link: null,
    tech: ["Node.js", "TypeScript", "React", "React Native", "PostgreSQL", "Stripe"],
    category: "product",
  },
  {
    id: 8,
    link: "https://cofre-demo.pages.dev/",
    tech: ["Python", "FastAPI", "Claude API", "PWA", "PostgreSQL", "Cloudflare"],
    category: "ai",
  },
  {
    id: 1,
    link: null,
    tech: ["Python", "PHP", "LLMs", "MCP"],
    category: "ai",
  },
  {
    id: 2,
    link: "https://github.com/skti-dev/bncc-frontend",
    tech: ["React Native", "Python", "FastAPI", "MongoDB", "LangChain"],
    category: "education",
  },
  {
    id: 3,
    link: "https://github.com/skti-dev/coc-insights",
    tech: ["Python", "Data Analysis"],
    category: "analytics",
  },
  {
    id: 4,
    link: null,
    tech: ["Web Development", "Landing Page"],
    category: "website",
  },
  {
    id: 5,
    link: "https://github.com/skti-dev/identificacao-de-carros",
    tech: ["Python", "PyTorch", "Computer Vision"],
    category: "ai",
  },
  {
    id: 6,
    link: "https://skate-dice.vercel.app/",
    tech: ["Game Development"],
    category: "game",
  },
  {
    id: 7,
    link: null,
    tech: ["Web Development", "Landing Page"],
    category: "website",
  },
]);

const contact = ref({
  email: "augusto.seabra00@gmail.com",
  whatsapp: "5511951507441",
  linkedin: "https://www.linkedin.com/in/augusto-seabra-desenvolvedor/",
  github: "https://github.com/skti-dev",
});

const assets = ref({
  profilePicture,
  diplomaPdf,
});

export function usePortfolioData() {
  return {
    projects: readonly(projects),
    contact: readonly(contact),
    assets: readonly(assets),
  };
}
