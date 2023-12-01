import React from "react";
import { IconButton } from "@/application/components/icon-button";
import { IRepository } from "@/application/models/IRepository";
import {
  Label,
  Container,
  ArrowIcon,
  ButtonsContainer,
  VerticalContainer,
} from "./styles";
import { Linking } from "react-native";

interface RepositoryCardProps {
  data: IRepository;
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  return (
    <Container onPress={() => Linking.openURL(data.html_url)}>
      <VerticalContainer>
        <Label>{data.name}</Label>
        {data.description && <Label secondary>{data.description}</Label>}
      </VerticalContainer>

      <ButtonsContainer>
        <IconButton icon={<ArrowIcon />} onPress={() => {}} />
      </ButtonsContainer>
    </Container>
  );
};
