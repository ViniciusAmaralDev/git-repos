import React, { ReactNode } from "react";
import { Text } from "../base/text";
import { Button } from "../base/button";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

export interface ITextButtonProps extends TouchableOpacityProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export const TextButton = ({
  endIcon,
  children,
  startIcon,
  textStyle,
  ...rest
}: ITextButtonProps) => (
  <Button style={{ gap: 16 }} {...rest}>
    {startIcon && <>{startIcon}</>}
    <Text style={textStyle}>{children}</Text>
    {endIcon && <>{endIcon}</>}
  </Button>
);
