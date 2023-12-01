import React from "react";
import {
  Container,
  HorizontalContainer,
  Label,
  LinkButton,
  ProfileImage,
  VerticalContainer,
} from "./styles";
import { Header } from "@/application/components/header";
import { useRepository } from "@/application/hooks/useRepository";
import { StackRootProps } from "@/application/routes/stack-navigator/StackRootProps";
import { RepositoryList } from "@/application/components/repository-list";
import { RepositoryCard } from "@/application/components/repository-card";
import { IRepository } from "@/application/models/IRepository";
import { Linking, Text } from "react-native";
import { useTranslation } from "react-i18next";

export const RepositoryDetails = ({
  route,
}: StackRootProps<"RepositoryDetails">) => {
  const { t } = useTranslation();
  const { repositories } = useRepository();

  const repository = repositories.find(
    (item) => item.owner === route.params.owner
  );

  const openGitHubProfile = () => {
    Linking.openURL(repository.repositories[0].owner.html_url);
  };

  return (
    <Container header={<Header title="Detalhes" />}>
      <HorizontalContainer>
        <ProfileImage uri={repository.repositories[0].owner.avatar_url} />

        <VerticalContainer>
          <Label>{repository.owner}</Label>

          <Label secondary>
            {repository.repositories.length.toString() + t("repositories")}
          </Label>

          <LinkButton onPress={openGitHubProfile}>{t('github profile')}</LinkButton>
        </VerticalContainer>
      </HorizontalContainer>

      <RepositoryList
        data={repository.repositories}
        renderItem={({ item }) => <RepositoryCard data={item as IRepository} />}
      />
    </Container>
  );
};
