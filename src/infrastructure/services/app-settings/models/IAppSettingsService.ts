import { IAppSettings } from "./IAppSettings";

export interface IAppSettingsService {
  get: () => IAppSettings;
  set: (values: IAppSettings) => void;
}
