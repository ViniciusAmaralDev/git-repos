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
  onDelete?: (owner: string) => void;
  onFavorite?: (owner: string) => void;
}

export const RepositoryOwnerCard = ({
  data,
  navigate,
  onDelete,
  onFavorite,
}: RepositoryOwnerCardProps) => {
  const { theme } = useTheme();
  const iconName = data.isFavorite ? "star" : "staro";
  const iconColor = data.isFavorite
    ? theme.colors.warning
    : theme.colors.border;

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
        {!!onFavorite && (
          <IconButton
            icon={<StarIcon name={iconName} color={iconColor} />}
            onPress={() => onFavorite(data.owner)}
          />
        )}

        {!!onDelete && (
          <IconButton
            icon={<TrashIcon />}
            onPress={() => onDelete(data.owner)}
          />
        )}

        <ArrowIcon />
      </ButtonsContainer>
    </Container>
  );
};
