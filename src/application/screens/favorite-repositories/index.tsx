import { Container } from "./styles";
import { TextInput } from "react-native";
import { useRepository } from "@/application/hooks/useRepository";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StackRootProps } from "@/application/routes/stack-navigator/StackRootProps";

// COMPONENTS
import { Header } from "@/application/components/header-app";
import { RepositoryList } from "@/application/components/repository-list";
import { RepositoryOwnerCard } from "@/application/components/repository-owner-card";

export const FavoriteRepositories = ({
  navigation,
}: StackRootProps<"RepositoryDetails">) => {
  const { repositories, handleFavoriteRepository } = useRepository();

  const favoriteList = useMemo(
    () => repositories.filter((repo) => repo.isFavorite),
    [repositories]
  );

  const searchBarRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState("");

  const filteredList = useMemo(
    () =>
      searchValue?.length > 0
        ? favoriteList.filter((item) =>
            item.owner.toLowerCase().includes(searchValue.toLowerCase())
          )
        : favoriteList,
    [repositories]
  );

  const resetSearchValueInput = useCallback(() => {
    setSearchValue("");
    searchBarRef.current?.clear();
  }, [searchValue]);

  const searchBarConfig = {
    ref: searchBarRef,
    value: searchValue,
    reset: resetSearchValueInput,
    onChangeText: setSearchValue,
  };

  return (
    <Container header={<Header searchBarProps={searchBarConfig} />}>
      <RepositoryList
        data={filteredList}
        renderItem={({ item }) => (
          <RepositoryOwnerCard
            data={item}
            onFavorite={handleFavoriteRepository}
            navigate={(owner) =>
              navigation.navigate("RepositoryDetails", { owner })
            }
          />
        )}
      />
    </Container>
  );
};
