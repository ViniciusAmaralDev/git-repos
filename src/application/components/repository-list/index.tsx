import React from "react";
import { FlatListProps } from "react-native";
import { EmptyAnimation, EmptyContainer, FlatList } from "./styles";
import { Divider } from "@/application/components/divider";

interface RepositoryListProps extends FlatListProps<any> {
  navigate?: (owner: string) => void;
}

export const RepositoryList = ({
  data,
  navigate,
  ...rest
}: RepositoryListProps) => {
  if (data.length > 0) {
    return (
      <FlatList
        {...rest}
        data={data}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => <EmptyAnimation />}
      />
    );
  } else
    return (
      <EmptyContainer>
        <EmptyAnimation />
      </EmptyContainer>
    );
};
