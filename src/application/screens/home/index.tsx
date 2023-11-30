import React, { useRef, useState } from "react";
import { Container, ErrorIcon } from "./styles";
import { Keyboard, TextInput } from "react-native";
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";

// HOOKS
import { useMutation } from "react-query";
import { useToast } from "react-native-toast-notifications";
import { useRepository } from "@/application/hooks/useRepository";

// COMPONENTS
import { Header } from "./components/header";
import { RepositoryList } from "../../components/repository-list";
import { RepositoryOwnerCard } from "@/application/components/repository-owner-card";
import { BottomTabRootProps } from "@/application/routes/bottom-tab-navigator/BottomTabRootProps";
import { StackRootProps } from "@/application/routes/stack-navigator/StackRootProps";

export const Home = ({ navigation }: StackRootProps<"RepositoryDetails">) => {
  const toast = useToast();
  const { repositories, saveRepository, fetchRepository } = useRepository();

  const onErrorMutation = () => {
    Keyboard.dismiss();
    resetSearchValueInput();
    toast.show("Usuário não encontrado!", { icon: <ErrorIcon /> });
  };

  const onSuccessMutation = (value: IRepositoryOwner) => {
    resetSearchValueInput();
    saveRepository(value);
  };

  const mutation = useMutation({
    mutationFn: fetchRepository,
    onSuccess: onSuccessMutation,
    onError: onErrorMutation,
  });

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
            navigate={(owner) =>
              navigation.navigate("RepositoryDetails", { owner })
            }
          />
        )}
      />
    </Container>
  );
};
