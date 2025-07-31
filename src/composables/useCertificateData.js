import { ref } from "vue";

const certificates = ref([
  {
    id: "0049aa12-2d4f-492e-9957-86254c66bb3c",
    title: "Aplicações IA: Criação de Agents com LangChain",
    type: "Trilha",
    institution: "Asimov Academy",
    hours: 70,
    date: "29/05/2025",
    url: "https://hub.asimov.academy/validar-certificado/0049aa12-2d4f-492e-9957-86254c66bb3c/",
  },
  {
    id: "0a724ce3-f374-45de-9a84-829a2f3961d6",
    title: "Engenharia de Prompts",
    type: "Curso",
    institution: "Asimov Academy",
    hours: 5,
    date: "20/05/2025",
    url: "https://hub.asimov.academy/validar-certificado/0a724ce3-f374-45de-9a84-829a2f3961d6/",
  },
  {
    id: "42ba4c8d-209a-4c04-956d-e9b621733abb",
    title: "Criando Multi Agent Systems com CrewAI",
    type: "Curso",
    institution: "Asimov Academy",
    hours: 7,
    date: "09/07/2025",
    url: "https://hub.asimov.academy/validar-certificado/42ba4c8d-209a-4c04-956d-e9b621733abb/",
  },
  {
    id: "d55c88f4-5393-4c0d-9075-bac6cceb524a",
    title: "Aplicações de IA com LangChain",
    type: "Curso",
    institution: "Asimov Academy",
    hours: 16,
    date: "22/05/2025",
    url: "https://hub.asimov.academy/validar-certificado/d55c88f4-5393-4c0d-9075-bac6cceb524a/",
  },
  {
    id: "052debca-7fa6-4837-bcab-074f786364b1",
    title: "Agents de IA com Python e LangChain",
    type: "Curso",
    institution: "Asimov Academy",
    hours: 13,
    date: "29/05/2025",
    url: "https://hub.asimov.academy/validar-certificado/052debca-7fa6-4837-bcab-074f786364b1/",
  },
  {
    id: "31941565-cfc0-44b0-8dbb-0a9f545471da",
    title: "React: Abstraindo seu CSS com Styled Components",
    type: "Curso",
    institution: "Alura",
    hours: 6,
    date: "17/11/2022",
    url: "https://cursos.alura.com.br/certificate/31941565-cfc0-44b0-8dbb-0a9f545471da",
  },
  {
    id: "UC-W7TP88QP",
    title: "Desenvolvimento Web Completo",
    type: "Curso",
    institution: "Udemy",
    hours: 108,
    date: "16/04/2019",
    url: "https://www.udemy.com/certificate/UC-W7TP88QP/",
  },
  {
    id: "UC-7d96b532-259e-4002-ba9e-51b217734e53",
    title: "Angular 2 (v15+)",
    type: "Curso",
    institution: "Udemy",
    hours: 29,
    date: "12/11/2023",
    url: "https://www.udemy.com/certificate/UC-7d96b532-259e-4002-ba9e-51b217734e53/",
  },
  {
    id: "UC-31d08543-9b6a-45e1-b2ad-518f1ee353aa",
    title: "VueJS 2",
    type: "Curso",
    institution: "Udemy",
    hours: 43,
    date: "13/08/2021",
    url: "https://www.udemy.com/certificate/UC-31d08543-9b6a-45e1-b2ad-518f1ee353aa/",
  },
]);

export function useCertificateData() {
  return {
    certificates,
  };
}
