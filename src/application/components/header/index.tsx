import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderTitle,
  Content,
  ButtonContainer,
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
        <ButtonContainer>
          <ArrowButton
            onPress={() => (goBack ? goBack() : navigation.goBack())}
          >
            <ArrowLeftIcon />
          </ArrowButton>
        </ButtonContainer>
      )}

      <HeaderTitle>{title}</HeaderTitle>

      <Content>{rightContainer}</Content>
    </Container>
  );
};

export default Header;
