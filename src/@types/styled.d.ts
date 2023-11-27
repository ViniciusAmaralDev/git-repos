import "styled-components";
import { lightTheme } from "../application/styles/LightTheme";

declare module "styled-components" {
  type ThemeType = typeof lightTheme;
  export interface DefaultTheme extends ThemeType {}
}
