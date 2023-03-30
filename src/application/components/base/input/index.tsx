import React, { forwardRef } from "react";
import { TextInput } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

const Input = forwardRef(({ ...rest }: TextInputProps, ref: any) => {
  const theme = useTheme();

  return (
    <TextInput
      ref={ref}
      autoCorrect={false}
      autoCapitalize="none"
      placeholderTextColor={theme.colors.GRAY}
      {...rest}
    />
  );
});

export default Input;
