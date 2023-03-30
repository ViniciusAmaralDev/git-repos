import React from "react";
import { Repository } from "@hooks/repository/types";
import {
  Container,
  VerticalContainer,
  HorizontalContainer,
  Label,
  GitHubIcon,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type RepositoryCardProps = TouchableOpacityProps & {
  data: Repository;
};

const RepositoryCard = ({ data, ...rest }: RepositoryCardProps) => {
  return (
    <Container {...rest}>
      <HorizontalContainer>
        <GitHubIcon />

        <VerticalContainer>
          <Label>{data.name}</Label>
          <Label light>Forks: {data.forks}</Label>
        </VerticalContainer>
      </HorizontalContainer>

      {data.description && <Label light>{data.description}</Label>}
    </Container>
  );
};

export default RepositoryCard;
