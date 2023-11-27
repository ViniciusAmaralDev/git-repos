import styled from "styled-components/native";
import { Text } from "../base/text";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  gap: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalContainer = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const RightContainer = styled.View`
  gap: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.text,
}))``;
