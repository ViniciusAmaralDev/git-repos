import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderTitle,
  Content,
  ArrowButton,
  ArrowLeftIcon,
} from "./styles";

type Props = {
  title: string;
  goBack?: () => void;
  leftContainer?: JSX.Element;
  rightContainer?: JSX.Element;
};

const Header = ({ title, leftContainer, rightContainer, goBack }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      {leftContainer ? (
        <Content>{leftContainer}</Content>
      ) : (
        <ArrowButton onPress={() => (goBack ? goBack() : navigation.goBack())}>
          <ArrowLeftIcon />
        </ArrowButton>
      )}

      <HeaderTitle>{title}</HeaderTitle>

      <Content>{rightContainer}</Content>
    </Container>
  );
};

export default Header;
