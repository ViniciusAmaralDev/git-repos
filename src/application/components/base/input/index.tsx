import { TextInput } from "./styles";
import React, { forwardRef } from "react";
import { TextInputProps } from "react-native";

export const Input = forwardRef<any, TextInputProps>(({ ...rest }, ref) => (
  <TextInput ref={ref} autoCapitalize="none" {...rest} />
));
