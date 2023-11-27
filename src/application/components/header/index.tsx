import React, { ReactNode } from "react";
import {
  Container,
  Title,
  ArrowIcon,
  RightContainer,
  HorizontalContainer,
} from "./styles";
import { ViewProps } from "react-native";
import { IconButton } from "../icon-button";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps extends ViewProps {
  title: string;
  right?: ReactNode;
  goBack?: () => void;
}

export const Header = ({ title, right, goBack, ...rest }: HeaderProps) => {
  const navigation = useNavigation();
  const handleGoBack = goBack ?? navigation.goBack;

  return (
    <Container {...rest}>
      <HorizontalContainer>
        <IconButton
          icon={<ArrowIcon name="arrowleft" />}
          onPress={handleGoBack}
        />
        <Title>{title}</Title>
      </HorizontalContainer>

      {right && <RightContainer>{right}</RightContainer>}
    </Container>
  );
};
