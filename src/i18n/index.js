import { createI18n } from "vue-i18n";
import { messages } from "./messages.js";

// Get saved language preference or default to Portuguese
const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";

export const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: "pt",
  messages,
  legacy: false,
  globalInjection: true,
});
