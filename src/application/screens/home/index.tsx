import React from "react";
import { Container, Label } from "./styles";
import { useTheme } from "@/application/contexts/ThemeContext";

export const Home = () => {
  const { themeType } = useTheme();

  return (
    <Container>
      <Label>{themeType}</Label>
    </Container>
  );
};
