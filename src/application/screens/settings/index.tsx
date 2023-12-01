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

export const Settings = () => {
  const { t } = useTranslation();

  const { themeType, toggleTheme } = useTheme();
  const isDarkMode = themeType === "dark";

  const selectedLanguage = {
    en: { label: "Inglês", value: "en" },
    es: { label: "Espanhol", value: "es" },
    pt: { label: "Português", value: "pt" },
  }[i18n.language];

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
          data={[
            { label: "Inglês", value: "en" },
            { label: "Português", value: "pt" },
            { label: "Espanhol", value: "es" },
          ]}
          value={selectedLanguage}
          onChange={({ value }) => i18n.changeLanguage(value)}
        />
      </HorizontalContainer>
    </Container>
  );
};
