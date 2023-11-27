import { themes } from "@/application/styles";
import { useColorScheme } from "react-native";
import { IThemeContext } from "../models/IThemeContext";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
} from "react";

// THEMES
import { darkTheme } from "../styles/DarkTheme";
import { lightTheme } from "../styles/LightTheme";

export type ThemeType = "light" | "dark";

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const deviceTheme = useColorScheme() as ThemeType;
  const selectedTheme = themes[deviceTheme ?? "light"];

  const [theme, setTheme] = useState(selectedTheme);
  const [themeType, setThemeType] = useState(deviceTheme);

  const toggleTheme = () => {
    setTheme({ light: darkTheme, dark: lightTheme }[themeType]);
    setThemeType({ light: "dark", dark: "light" }[themeType] as ThemeType);
  };

  useEffect(() => {
    setTheme(selectedTheme);
    setThemeType(deviceTheme);
  }, [deviceTheme]);

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      <ScThemeProvider theme={theme}>{children}</ScThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
