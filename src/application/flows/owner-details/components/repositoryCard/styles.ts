import Text from "@components/base/text";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Button from "@components/base/button";

const { width } = Dimensions.get("window");

type LabelProps = {
  light?: boolean;
  secondary?: boolean;
  showMarginBottom?: boolean;
};

export const Container = styled(Button)`
  padding: 16px;
  margin-right: 8px;
  border-radius: 8px;
  align-self: flex-start;
  width: ${width - 90}px;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const VerticalContainer = styled.View`
  margin-left: 8px;
`;

export const Label = styled(Text)<LabelProps>`
  margin-bottom: ${({ showMarginBottom }) => (showMarginBottom ? 4 : 0)}px;
  font-size: ${({ light, secondary }) => (light || secondary ? 14 : 16)}px;
  font-family: ${({ theme, light }) =>
    light ? theme.fonts.REGULAR : theme.fonts.MEDIUM};
  color: ${({ theme, light, secondary }) =>
    light || secondary ? theme.colors.GRAY_LIGHT : theme.colors.WHITE};
`;

export const GitHubIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 40,
  name: "github",
  color: theme.colors.WHITE,
}))`
  margin-right: 8px;
`;
