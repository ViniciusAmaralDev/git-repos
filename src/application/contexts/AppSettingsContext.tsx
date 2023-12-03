import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import React, { PropsWithChildren, createContext } from "react";
import { appSettingsService } from "@/infrastructure/services/app-settings";

// TRANSLATIONS
import en from "../../../locales/en.json";
import pt from "../../../locales/pt.json";
import es from "../../../locales/es.json";

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: appSettingsService.get().language,
  resources: languageResources,
  fallbackLng: appSettingsService.get().language,
});

const AppSettingsContext = createContext({});

export const AppSettingsProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppSettingsContext.Provider value={{}}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export { i18next };
