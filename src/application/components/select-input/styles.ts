import styled from "styled-components/native";
import { Dropdown as CustomDropdown } from "react-native-element-dropdown";

export const Container = styled.View`
  flex-grow: 1;
  height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const Dropdown = styled(CustomDropdown).attrs(({ theme }) => ({
  maxHeight: 300,
  labelField: "label",
  valueField: "value",
  placeholderStyle: { color: theme.colors.border },
  selectedTextStyle: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
  },
}))``;
