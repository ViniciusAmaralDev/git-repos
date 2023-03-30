import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity, LoadingIcon } from "./styles";

type Props = TouchableOpacityProps & { loading?: boolean };

const Button = ({ children, loading, ...rest }: Props) => (
  <TouchableOpacity activeOpacity={1} {...rest}>
    {loading ? <LoadingIcon /> : <>{children}</>}
  </TouchableOpacity>
);

export default Button;
