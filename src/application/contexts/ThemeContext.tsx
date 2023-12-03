import { themes } from "@/application/styles";
import { useColorScheme } from "react-native";
import { IThemeContext } from "../models/IThemeContext";
import { useAppSettings } from "../hooks/useAppSettings";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import { AppTheme } from "@/infrastructure/services/app-settings/models/AppTheme";
import { EAppTheme } from "@/infrastructure/services/app-settings/enums/EAppTheme";
import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

interface ISelectedTheme {
  type: EAppTheme;
  value: typeof themes.light;
}

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { getSettings, updateAppSettings } = useAppSettings();

  const deviceTheme = (useColorScheme() as EAppTheme) ?? EAppTheme.LIGHT;
  const appSettings = useMemo(() => getSettings(), [deviceTheme]);

  const themeTypeOptions: Record<EAppTheme, ISelectedTheme> = {
    [EAppTheme.DARK]: { type: EAppTheme.DARK, value: themes.dark },
    [EAppTheme.LIGHT]: { type: EAppTheme.LIGHT, value: themes.light },
    [EAppTheme.SYSTEM]: { type: deviceTheme, value: themes[deviceTheme] },
  };

  const selectedTheme = themeTypeOptions[appSettings?.theme ?? deviceTheme];

  const [theme, setTheme] = useState(selectedTheme.value);

  const [themeType, setThemeType] = useState<AppTheme>(
    appSettings?.theme ?? EAppTheme.SYSTEM
  );

  const toggleTheme = (theme: EAppTheme) => {
    const { type, value } = themeTypeOptions[theme];
    setTheme(value);
    setThemeType(type);
    updateAppSettings({ theme: type });
  };

  useEffect(() => {
    if (!appSettings?.theme) updateAppSettings({ theme: selectedTheme.type });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      <ScThemeProvider theme={theme}>{children}</ScThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
