import React from "react";
import { Linking } from "react-native";
import { IRepository } from "@/application/models/IRepository";
import { useTheme } from "@/application/contexts/ThemeContext";
import { IconButton } from "@/application/components/icon-button";
import {
  Label,
  Container,
  ArrowIcon,
  ButtonsContainer,
  VerticalContainer,
} from "./styles";

interface RepositoryCardProps {
  data: IRepository;
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const { theme, themeType } = useTheme();

  const isDarkMode = themeType === "dark";
  const iconColor = isDarkMode ? theme.colors.border : theme.colors.placeholder

  return (
    <Container onPress={() => Linking.openURL(data.html_url)}>
      <VerticalContainer>
        <Label isDarkMode={isDarkMode}>{data.name}</Label>

        {data.description && (
          <Label secondary isDarkMode={isDarkMode}>
            {data.description}
          </Label>
        )}
      </VerticalContainer>

      <ButtonsContainer>
        <IconButton icon={<ArrowIcon color={iconColor} />} onPress={() => {}} />
      </ButtonsContainer>
    </Container>
  );
};
