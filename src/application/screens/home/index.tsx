import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { useTheme } from "@/application/contexts/ThemeContext";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Label = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Home = () => {
  const { themeType } = useTheme();

  return (
    <Container>
      <Label>{themeType}</Label>
      <StatusBar style="auto" />
    </Container>
  );
};
