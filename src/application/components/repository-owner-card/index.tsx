import React from "react";
import { useTheme } from "@/application/contexts/ThemeContext";
import { IconButton } from "@/application/components/icon-button";
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";
import {
  Label,
  StarIcon,
  Container,
  TrashIcon,
  ArrowIcon,
  ProfileImage,
  ButtonsContainer,
  VerticalContainer,
} from "./styles";

interface RepositoryOwnerCardProps {
  data: IRepositoryOwner;
  navigate?: (owner: string) => void;
}

export const RepositoryOwnerCard = ({
  data,
  navigate,
}: RepositoryOwnerCardProps) => {
  const { theme } = useTheme();

  return (
    <Container onPress={() => navigate(data.owner)}>
      <ProfileImage uri={data.repositories[0].owner.avatar_url} />

      <VerticalContainer>
        <Label>{data.owner}</Label>
        <Label secondary>
          {data.repositories.length.toString()} repositórios
        </Label>
      </VerticalContainer>

      <ButtonsContainer>
        <IconButton
          icon={<StarIcon name="staro" color={theme.colors.border} />}
          onPress={() => {}}
        />
        <IconButton icon={<TrashIcon />} onPress={() => {}} />
        <ArrowIcon />
      </ButtonsContainer>
    </Container>
  );
};
