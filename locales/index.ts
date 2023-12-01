import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  compatibilityJSON: "v3",
  resources: languageResources,
});

export default i18n;
