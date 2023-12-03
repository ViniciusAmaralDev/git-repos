import { i18next } from "@/application/contexts/AppSettingsContext";
import { appSettingsService } from "@/infrastructure/services/app-settings";
import { ELanguage } from "@/infrastructure/services/app-settings/enums/ELanguage";
import { IAppSettings } from "@/infrastructure/services/app-settings/models/IAppSettings";

export const useAppSettings = () => {
  const getSettings = () => appSettingsService.get();

  const updateAppSettings = (values: IAppSettings) => {
    const appSettings = appSettingsService.get();
    appSettingsService.set({ ...appSettings, ...values });
  };

  const changeLanguage = (value: ELanguage) => {
    console.log({ value });
    i18next.changeLanguage(value);

    const settings = appSettingsService.get();
    appSettingsService.set({ ...settings, language: value });
  };

  return { getSettings, changeLanguage, updateAppSettings };
};
