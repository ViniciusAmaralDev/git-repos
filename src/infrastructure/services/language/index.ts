import { getLocales } from "expo-localization";
import { ILanguageService } from "./models/ILanguageService";
import { mmkvDatabase } from "@/infrastructure/database/mmkv";

const deviceLanguage = getLocales()[0].languageCode;
const languages = ["en", "pt", "es"];
const language = languages.includes(deviceLanguage) ? deviceLanguage : "en";
const parsedLanguage = JSON.stringify(language);

export const languageService: ILanguageService = {
  get: () => JSON.parse(mmkvDatabase.getString("language") ?? parsedLanguage),
  set: (value) => mmkvDatabase.set("language", JSON.stringify(value)),
};
