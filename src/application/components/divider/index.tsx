import React from "react";
import { Container } from "./styles";
import { ViewProps } from "react-native";

const Divider = ({ ...rest }: ViewProps) => <Container {...rest} />;

export default Divider;
