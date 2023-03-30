import Card from "./components/card";
import React, { useState } from "react";
import Header from "@components/header";
import Divider from "@components/divider";
import { Owner } from "@hooks/owner/types";
import EmptyCard from "./components/emptyCard";
import {
  Container,
  SearchBar,
  FlatList,
  Button,
  GitHubIcon,
  TrashIcon,
} from "./styles";

type Props = {
  owners: Owner[];
  isConnected: boolean;
  openDeleteModal: () => void;
  handleSearch: (value: string) => Promise<void>;
  navigateToOwnerDetailsScreen: (owner: Owner) => void;
};

const HomeLayout = ({
  owners,
  isConnected,
  handleSearch,
  openDeleteModal,
  navigateToOwnerDetailsScreen,
}: Props) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const filtered = owners.filter((owner) =>
    owner?.login?.toLowerCase()?.includes(searchInputValue)
  );

  const ownerListIsEmpty = owners.length === 0;
  const showSearchButton =
    isConnected && filtered?.length === 0 && searchInputValue.length >= 5;

  return (
    <Container
      header={
        <Header
          title="Git Repos"
          leftContainer={<GitHubIcon />}
          rightContainer={
            filtered.length > 1 ? (
              <Button onPress={openDeleteModal}>
                <TrashIcon />
              </Button>
            ) : undefined
          }
        />
      }
    >
      <SearchBar
        placeholder="Buscar usuário"
        onChangeText={setSearchInputValue}
        handleClear={() => setSearchInputValue("")}
      />

      <FlatList
        data={filtered}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            owner={item as Owner}
            onPress={() => navigateToOwnerDetailsScreen(item as Owner)}
          />
        )}
        ListEmptyComponent={
          <EmptyCard
            ownerListIsEmpty={ownerListIsEmpty}
            showSearchButton={showSearchButton}
            onPressSearchButton={() => handleSearch(searchInputValue)}
          />
        }
      />
    </Container>
  );
};

export default HomeLayout;
