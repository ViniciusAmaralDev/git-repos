import { TextInput } from "react-native";
import { Label, Container } from "./styles";
import { Header } from "./components/header";
import React, { useRef, useState } from "react";
import { useTheme } from "@/application/contexts/ThemeContext";

export const Home = () => {
  const { themeType } = useTheme();
  const searchBarRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState("");

  const resetSearchValueInput = () => {
    setSearchValue("");
    searchBarRef.current?.clear();
  };

  const searchBarConfig = {
    ref: searchBarRef,
    value: searchValue,
    reset: resetSearchValueInput,
    onChangeText: setSearchValue,
  };

  return (
    <Container header={<Header searchBarProps={searchBarConfig} />}>
      <Label>{themeType}</Label>
    </Container>
  );
};
