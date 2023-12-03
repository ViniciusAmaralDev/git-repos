import React from "react";
import i18n from "../../../../locales";
import { useTranslation } from "react-i18next";
import { Container, HorizontalContainer } from "./styles";
import { useTheme } from "@/application/contexts/ThemeContext";

// COMPONENTS
import { Header } from "@/application/components/header";
import { Text } from "@/application/components/base/text";
import { Divider } from "@/application/components/divider";
import { SwitchButton } from "@/application/components/switch-button";
import { SelectInput } from "@/application/components/select-input";
import { languageService } from "@/infrastructure/services/language";

export const Settings = () => {
  const { t } = useTranslation();

  const { themeType, toggleTheme } = useTheme();
  const isDarkMode = themeType === "dark";

  const languages = [
    { label: t("english"), value: "en" },
    { label: t("portuguese"), value: "pt" },
    { label: t("spanish"), value: "es" },
  ];

  const selectedLanguage = {
    en: languages[0],
    pt: languages[1],
    es: languages[2],
  }[i18n.language];

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    languageService.set(value);
  };

  return (
    <Container header={<Header hideArrowButton title="Configurações" />}>
      <HorizontalContainer>
        <Text>{t("dark mode")}</Text>
        <SwitchButton isActive={isDarkMode} onPress={toggleTheme} />
      </HorizontalContainer>

      <Divider />

      <HorizontalContainer>
        <Text>{t("app language")}</Text>
        <SelectInput
          data={languages}
          value={selectedLanguage}
          onChange={({ value }) => changeLanguage(value)}
        />
      </HorizontalContainer>
    </Container>
  );
};
