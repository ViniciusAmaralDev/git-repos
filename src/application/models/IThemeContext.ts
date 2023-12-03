import { lightTheme } from "../styles/LightTheme";
import { EAppTheme } from "@/infrastructure/services/app-settings/enums/EAppTheme";

export interface IThemeContext {
  themeType: EAppTheme;
  theme: typeof lightTheme;
  toggleTheme: (theme: EAppTheme) => void;
}
