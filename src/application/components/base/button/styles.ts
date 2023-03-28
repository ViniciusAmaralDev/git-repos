import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity``;

export const LoadingIcon = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "small",
  color: theme.colors.BACKGROUND,
}))``;
