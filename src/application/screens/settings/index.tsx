import React from "react";
import { Container, HorizontalContainer } from "./styles";
import { useTheme } from "@/application/contexts/ThemeContext";

// COMPONENTS
import { Header } from "@/application/components/header";
import { Text } from "@/application/components/base/text";
import { Divider } from "@/application/components/divider";
import { SwitchButton } from "@/application/components/switch-button";

export const Settings = () => {
  const { themeType, toggleTheme } = useTheme();
  const isDarkMode = themeType === "dark";

  return (
    <Container header={<Header hideArrowButton title="Configurações" />}>
      <HorizontalContainer>
        <Text>Modo escuro</Text>
        <SwitchButton isActive={isDarkMode} onPress={toggleTheme} />
      </HorizontalContainer>

      <Divider />

      <HorizontalContainer>
        <Text>Idioma do app</Text>
      </HorizontalContainer>
    </Container>
  );
};
