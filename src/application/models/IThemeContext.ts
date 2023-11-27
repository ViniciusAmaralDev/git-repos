import { lightTheme } from "../styles/LightTheme";
import { ThemeType } from "../contexts/ThemeContext";

export interface IThemeContext {
  theme: typeof lightTheme;
  themeType: ThemeType;
  toggleTheme: () => void;
}
