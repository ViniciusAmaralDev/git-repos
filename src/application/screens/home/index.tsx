import { Container } from "./styles";
import { TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";
import { StackRootProps } from "@/application/routes/stack-navigator/StackRootProps";

// HOOKS
import { useMutation } from "react-query";
import { useRepository } from "@/application/hooks/useRepository";

// COMPONENTS
import { Header } from "./components/header";
import { RepositoryList } from "../../components/repository-list";
import { RepositoryOwnerCard } from "@/application/components/repository-owner-card";

export const Home = ({ navigation }: StackRootProps<"RepositoryDetails">) => {
  const {
    repositories,
    fetchRepository,
    deleteRepository,
    handleFavoriteRepository,
  } = useRepository();

  const addRepository = async (owner: string) => {
    resetSearchValueInput();
    await fetchRepository(owner);
  };

  const mutation = useMutation(addRepository);

  const searchBarRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState("");

  const resetSearchValueInput = () => {
    setSearchValue("");
    searchBarRef.current?.clear();
  };

  const searchRepository = () => mutation.mutateAsync(searchValue);

  const searchBarConfig = {
    ref: searchBarRef,
    value: searchValue,
    isLoading: mutation.isLoading,
    onSearch: searchRepository,
    reset: resetSearchValueInput,
    onChangeText: setSearchValue,
  };

  return (
    <Container header={<Header searchBarProps={searchBarConfig} />}>
      <RepositoryList
        data={repositories}
        renderItem={({ item }) => (
          <RepositoryOwnerCard
            data={item}
            onDelete={deleteRepository}
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
