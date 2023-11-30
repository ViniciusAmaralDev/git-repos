import React from "react";
import { Circle, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface SwitchButtonProps extends TouchableOpacityProps {
  isActive?: boolean;
}

export const SwitchButton = ({ isActive, ...rest }: SwitchButtonProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Circle isActive={isActive} />
    </Container>
  );
};
