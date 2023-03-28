import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderTitle,
  RightContainer,
  ArrowButton,
  ArrowLeftIcon,
} from "./styles";

type Props = {
  title: string;
  goBack?: () => void;
  rightContainer?: JSX.Element;
};

const Header = ({ title, rightContainer, goBack }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ArrowButton onPress={() => (goBack ? goBack() : navigation.goBack())}>
        <ArrowLeftIcon />
      </ArrowButton>

      <HeaderTitle>{title}</HeaderTitle>

      <RightContainer>{rightContainer}</RightContainer>
    </Container>
  );
};

export default Header;
