import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 16px;
  height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const SearchIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.placeholder,
}))``;

export const CloseIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.placeholder,
}))``;
