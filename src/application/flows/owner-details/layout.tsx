import React from "react";
import Header from "@components/header";
import { Owner } from "@hooks/owner/types";
import {
  Container,
  ScrollView,
  Content,
  VerticalContainer,
  HorizontalContainer,
  Card,
  Image,
  Label,
  LinkButton,
  TextButton,
  Load,
  ButtonsContainer,
} from "./styles";
import { Linking } from "react-native";
import { Repository } from "@hooks/repository/types";
import RepositoryCard from "./components/repositoryCard";

type Props = { loading: boolean; owner: Owner; repositories: Repository[] };

const OwnerDetailsLayout = ({ loading, owner, repositories }: Props) => {
  const details = [
    { label: "Tipo da conta", value: owner.type },
    { label: "Email", value: owner.email },
    { label: "Localização", value: owner.location },
    { label: "Twitter", value: owner.twitter_username },
  ];

  return (
    <Container header={<Header title="Detalhes" />}>
      <HorizontalContainer>
        <Image source={{ uri: owner.avatar_url }} />

        <VerticalContainer>
          <Label showMarginBottom>{owner.login}</Label>
          <Label light>{owner.bio ?? owner.email ?? owner.type}</Label>
        </VerticalContainer>
      </HorizontalContainer>

      <Content>
        <Label showMarginBottom>Detalhes</Label>
        {details.map((item, index) => (
          <Card key={index}>
            <Label secondary>{item.label}</Label>
            <Label light>{item.value ?? "-"}</Label>
          </Card>
        ))}
      </Content>

      <Content>
        <HorizontalContainer>
          <Label>Repositórios</Label>
          {loading && <Load />}
        </HorizontalContainer>

        {!loading && (
          <>
            {repositories.length <= 0 ? (
              <Label light>
                Não foi possível obter os repositórios deste usuário
              </Label>
            ) : (
              <ScrollView>
                {repositories.map((repo, index) => (
                  <RepositoryCard
                    key={index}
                    data={repo}
                    onPress={() => Linking.openURL(repo.html_url)}
                  />
                ))}
              </ScrollView>
            )}
          </>
        )}
      </Content>

      <Content>
        <Label>Links</Label>
        <ButtonsContainer>
          <LinkButton onPress={() => Linking.openURL(owner.html_url)}>
            <TextButton>GitHub</TextButton>
          </LinkButton>

          {owner.blog && (
            <LinkButton onPress={() => Linking.openURL(owner.blog)}>
              <TextButton>Blog</TextButton>
            </LinkButton>
          )}
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default OwnerDetailsLayout;
