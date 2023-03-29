import React from "react";
import { Owner } from "@hooks/owner/types";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  HorizontalContainer,
  VerticalContainer,
  Image,
  Label,
  ArrowRightIcon,
} from "./styles";

type Props = TouchableOpacityProps & { owner: Owner };

const Card = ({ owner, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <HorizontalContainer>
        <Image source={{ uri: owner.avatar_url }} />

        <VerticalContainer>
          <Label>{owner.login}</Label>
          <Label light>{owner.bio ?? owner.location ?? owner.type}</Label>
        </VerticalContainer>
      </HorizontalContainer>

      <ArrowRightIcon />
    </Container>
  );
};

export default Card;
