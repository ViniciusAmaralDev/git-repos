import Layout from "@components/layout";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import CustomSearchBar from "@components/searchBar";

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

export const GitHubIcon = styled(Entypo).attrs(({ theme }) => ({
  size: 24,
  name: "github",
  color: theme.colors.BLACK,
}))``;
