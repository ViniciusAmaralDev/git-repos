import React from "react";
import { Label } from "./styles";
import { TextProps } from "react-native";

const Text = ({ children, ...rest }: TextProps) => (
  <Label {...rest}>{children}</Label>
);

export default Text;
