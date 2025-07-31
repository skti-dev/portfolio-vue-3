import { ref, readonly } from "vue";
import profilePicture from "@/assets/images/Foto perfil - recortada.jpg";
import diplomaPdf from "@/assets/docs/RepresentacaoVisualDiplomaDigital-FIAP.pdf";

const projects = ref([
  {
    id: 0,
    link: "https://github.com/skti-dev/coc-insights",
    tech: ["Python", "Data Analysis"],
    category: "analytics",
  },
  {
    id: 1,
    link: "https://sonix.com.br/",
    tech: ["Web Development", "Landing Page"],
    category: "website",
  },
  {
    id: 2,
    link: "https://github.com/skti-dev/python-telegram-bot",
    tech: ["Python", "Bot Development"],
    category: "automation",
  },
  {
    id: 3,
    link: "https://skate-dice.vercel.app/",
    tech: ["Game Development"],
    category: "game",
  },
  {
    id: 4,
    link: "https://jacgruporj.com.br/",
    tech: ["Web Development", "Landing Page"],
    category: "website",
  },
  {
    id: 5,
    link: "https://github.com/skti-dev",
    tech: ["Web Development"],
    category: "product",
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
