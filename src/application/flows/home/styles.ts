import Layout from "@components/layout";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";
import CustomSearchBar from "@components/searchBar";
import CustomButton from "@components/base/button";

export const Container = styled(Layout)`
  flex: 1;
  padding: 16px;
`;

export const SearchBar = styled(CustomSearchBar).attrs({
  containerStyle: { marginBottom: 16 },
})``;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Button = styled(CustomButton)`
  align-self: flex-end;
`;

export const TrashIcon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 15,
  name: "trash",
  color: theme.colors.RED,
}))``;

export const GitHubIcon = styled(Entypo).attrs(({ theme }) => ({
  size: 24,
  name: "github",
  color: theme.colors.BLACK,
}))``;
