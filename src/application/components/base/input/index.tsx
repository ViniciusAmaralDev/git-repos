import React from "react";
import { TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

const Input = ({ ...rest }: TextInputProps) => {
  const theme = useTheme();

  return (
    <TextInput
      autoCorrect={false}
      autoCapitalize="none"
      placeholderTextColor={theme.colors.GRAY}
      {...rest}
    />
  );
};

export default Input;
