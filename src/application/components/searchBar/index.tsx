import React from "react";
import Input from "@components/base/input";
import { useTheme } from "styled-components";
import { Container, SearchIcon } from "./styles";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

type Props = TextInputProps & { containerStyle?: StyleProp<ViewStyle> };

const SearchBar = ({ containerStyle, ...rest }: Props) => {
  const theme = useTheme();

  const shadow = {
    shadowColor: theme.colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  };

  return (
    <Container style={[{ ...shadow }, containerStyle]}>
      <SearchIcon />
      <Input {...rest} />
    </Container>
  );
};

export default SearchBar;
