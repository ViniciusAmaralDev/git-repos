import { ELanguage } from "./enums/ELanguage";
import { getLocales } from "expo-localization";
import { mmkvDatabase } from "@/infrastructure/database/mmkv";

// MODELS
import { IAppSettings } from "./models/IAppSettings";
import { IAppSettingsService } from "./models/IAppSettingsService";

export const appSettingsService: IAppSettingsService = {
  get: () => {
    const availableLanguages = [ELanguage.EN, ELanguage.PT, ELanguage.ES];

    const deviceLanguage = getLocales()[0].languageCode as ELanguage;

    const language = availableLanguages[deviceLanguage] ?? ELanguage.PT;

    const settings = mmkvDatabase.getString("settings");
    const data = JSON.parse(settings ?? "{}") as IAppSettings;

    return { ...data, language: data?.language ?? language };
  },
  set: (values) => mmkvDatabase.set("settings", JSON.stringify(values)),
};
