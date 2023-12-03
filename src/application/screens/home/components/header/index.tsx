import React from "react";
import { TextInput } from "react-native";
import { Container, HorizontalContainer, Icon, Title } from "./styles";

// COMPONENTS
import { images } from "@/application/assets/images";
import { SearchBar } from "@/application/components/search-bar";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/application/contexts/ThemeContext";

interface HeaderProps {
  searchBarProps: {
    value: string;
    ref: React.MutableRefObject<TextInput>;
    reset: () => void;
    onSearch: () => void;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const Header = ({ searchBarProps }: HeaderProps) => {
  const { t } = useTranslation();
  const { themeType } = useTheme();
  const { ref, value, reset, onSearch, onChangeText } = searchBarProps;

  const icon =
    themeType === "dark" ? images.appIcon.light : images.appIcon.dark;

  return (
    <Container>
      <HorizontalContainer>
        <Icon source={icon} />
        <Title>Git Repos</Title>
      </HorizontalContainer>

      <SearchBar
        ref={ref}
        value={value}
        placeholder={t("search")}
        clear={reset}
        onSearch={onSearch}
        onChangeText={onChangeText}
      />
    </Container>
  );
};
