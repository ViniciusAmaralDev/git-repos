import { IconButton } from "../icon-button";
import styled from "styled-components/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface SearchButtonProps {
  isActive?: boolean;
}

export const Container = styled.View`
  gap: 16px;
  height: 40px;
  padding-left: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const SearchButton = styled(IconButton)<SearchButtonProps>`
  height: 100%;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.placeholder};
`;

export const SearchIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 20,
}))``;

export const CloseIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text,
}))``;
