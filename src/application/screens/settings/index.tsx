import React from "react";
import { Container, HorizontalContainer, Label } from "./styles";
import { i18next } from "@/application/contexts/AppSettingsContext";

// HOOKS
import { useTranslation } from "react-i18next";
import { useTheme } from "@/application/contexts/ThemeContext";
import { useAppSettings } from "@/application/hooks/useAppSettings";

// COMPONENTS
import { Header } from "@/application/components/header";
import { Divider } from "@/application/components/divider";
import { SelectInput } from "@/application/components/select-input";
import { EAppTheme } from "@/infrastructure/services/app-settings/enums/EAppTheme";
import { ELanguage } from "@/infrastructure/services/app-settings/enums/ELanguage";

export const Settings = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useAppSettings();
  const { themeType, toggleTheme } = useTheme();

  const languages = [
    { label: t("english"), value: "en" },
    { label: t("portuguese"), value: "pt" },
    { label: t("spanish"), value: "es" },
  ];

  const selectedLanguage = {
    en: languages[0],
    pt: languages[1],
    es: languages[2],
  }[i18next.language];

  const themeTypes = [
    { label: t("dark"), value: EAppTheme.DARK },
    { label: t("light"), value: EAppTheme.LIGHT },
    { label: t("system"), value: EAppTheme.SYSTEM },
  ];

  const selectedTheme = {
    [EAppTheme.DARK]: { label: t(EAppTheme.DARK), value: EAppTheme.DARK },
    [EAppTheme.LIGHT]: { label: t(EAppTheme.LIGHT), value: EAppTheme.LIGHT },
    [EAppTheme.SYSTEM]: { label: t(EAppTheme.SYSTEM), value: EAppTheme.SYSTEM },
  };

  return (
    <Container header={<Header hideArrowButton title={t("settings")} />}>
      <HorizontalContainer>
        <Label>{t("theme")}</Label>
        <SelectInput
          data={themeTypes}
          value={selectedTheme[themeType]}
          onChange={({ value }) => toggleTheme(value as EAppTheme)}
        />
      </HorizontalContainer>

      <Divider />

      <HorizontalContainer>
        <Label>{t("app language")}</Label>
        <SelectInput
          data={languages}
          value={selectedLanguage}
          onChange={({ value }) => changeLanguage(value as ELanguage)}
        />
      </HorizontalContainer>
    </Container>
  );
};
