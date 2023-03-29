import Card from "./components/card";
import React, { useState } from "react";
import Header from "@components/header";
import Divider from "@components/divider";
import { Owner } from "@hooks/owner/types";
import EmptyCard from "./components/emptyCard";
import { Container, SearchBar, FlatList, GitHubIcon } from "./styles";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";

type Props = {
  owners: Owner[];
  handleSearch: (value: string) => Promise<void>;
  navigateToOwnerDetailsScreen: (owner: Owner) => void;
};

const HomeLayout = ({
  owners,
  handleSearch,
  navigateToOwnerDetailsScreen,
}: Props) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const filtered = owners.filter((owner) =>
    owner.login.toLowerCase().includes(searchInputValue)
  );

  const ownerListIsEmpty = owners.length === 0;
  const showSearchButton =
    filtered?.length === 0 && searchInputValue.length >= 5;

  return (
    <Container
      header={<Header title="Git Repos" leftContainer={<GitHubIcon />} />}
    >
      <SearchBar
        placeholder="Buscar"
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
