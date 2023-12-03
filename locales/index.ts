import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";
import { languageService } from "@/infrastructure/services/language";

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  lng: languageService.get() ?? "pt",
  fallbackLng: languageService.get() ?? "pt",
  compatibilityJSON: "v3",
  resources: languageResources,
});

export default i18n;
