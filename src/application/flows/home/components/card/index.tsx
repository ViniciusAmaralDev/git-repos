import React from "react";
import { Owner } from "@hooks/owner/types";
import { TouchableOpacityProps } from "react-native";
import {
  Image,
  Label,
  Container,
  ArrowRightIcon,
  VerticalContainer,
} from "./styles";

type Props = TouchableOpacityProps & { owner: Owner };

const Card = ({ owner, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Image source={{ uri: owner.avatar_url }} />

      <VerticalContainer>
        <Label>{owner.login}</Label>
        <Label light>{owner.bio ?? owner.location ?? owner.type}</Label>
      </VerticalContainer>

      <ArrowRightIcon />
    </Container>
  );
};

export default Card;
