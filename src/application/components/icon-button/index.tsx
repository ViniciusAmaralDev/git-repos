import { Button } from "../base/button";
import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

interface IconButtonProps extends TouchableOpacityProps {
  icon: ReactNode;
}

export const IconButton = ({ icon, ...rest }: IconButtonProps) => (
  <Button {...rest}>{icon}</Button>
);
