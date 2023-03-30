import Text from "@components/base/text";
import Button from "@components/base/button";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Content = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const ArrowButton = styled(Button)`
  align-self: flex-start;
`;

export const ArrowLeftIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  name: "arrowleft",
  color: theme.colors.BLACK,
}))``;
