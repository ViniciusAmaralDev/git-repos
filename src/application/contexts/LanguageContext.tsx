import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import React, { PropsWithChildren, createContext, useEffect } from "react";
import { languageService } from "@/infrastructure/services/language";

// TRANSLATIONS
import en from "../../../locales/en.json";
import pt from "../../../locales/pt.json";
import es from "../../../locales/es.json";

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: languageService.get(),
  resources: languageResources,
  fallbackLng: languageService.get(),
});

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    i18n.changeLanguage(languageService.get());
  }, []);

  return (
    <LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>
  );
};
