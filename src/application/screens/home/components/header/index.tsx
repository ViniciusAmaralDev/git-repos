import React from "react";
import { TextInput } from "react-native";
import { Container, HorizontalContainer, Icon, Title } from "./styles";

// COMPONENTS
import { images } from "@/application/assets/images";
import { SearchBar } from "@/application/components/search-bar";

interface HeaderProps {
  searchBarProps: {
    value: string;
    ref: React.MutableRefObject<TextInput>;
    reset: () => void;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const Header = ({ searchBarProps }: HeaderProps) => {
  const { ref, value, reset, onChangeText } = searchBarProps;

  return (
    <Container>
      <HorizontalContainer>
        <Icon source={images.appIcon.light} />
        <Title>Git Repos</Title>
      </HorizontalContainer>

      <SearchBar
        ref={ref}
        value={value}
        placeholder="Pesquisar"
        clear={reset}
        onChangeText={onChangeText}
      />
    </Container>
  );
};
