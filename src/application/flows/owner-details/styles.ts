import Layout from "@components/layout";
import styled from "styled-components/native";
import ProfilePicture from "@components/profilePicture";
import Text from "@components/base/text";
import CustomButton from "@components/base/button";
import { FontAwesome5 } from "@expo/vector-icons";

type LabelProps = {
  light?: boolean;
  secondary?: boolean;
  showMarginBottom?: boolean;
};

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  contentContainerStyle: { padding: 16 },
})``;

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 16px;
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const VerticalContainer = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const Card = styled.View`
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_LIGHT};
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(Text)<LabelProps>`
  margin-bottom: ${({ showMarginBottom }) => (showMarginBottom ? 4 : 0)}px;
  font-size: ${({ light, secondary }) => (light || secondary ? 14 : 16)}px;
  font-family: ${({ theme, light }) =>
    light ? theme.fonts.REGULAR : theme.fonts.MEDIUM};
  color: ${({ theme, light, secondary }) =>
    light || secondary ? theme.colors.GRAY : theme.colors.BLACK};
`;

export const Image = styled(ProfilePicture).attrs(({ theme }) => ({
  loadProps: { size: "large", color: theme.colors.GRAY },
  imageStyle: { borderRadius: 50 },
}))`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const ButtonsContainer = styled.View`
  flex-wrap: wrap;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const LinkButton = styled(CustomButton)`
  margin: 0px 8px 8px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.BLUE};
`;

export const TextButton = styled(Text)`
  color: ${({ theme }) => theme.colors.BLUE};
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "small",
  color: theme.colors.BLUE,
}))`
  margin-left: 8px;
`;

export const Button = styled(CustomButton)`
  align-self: flex-end;
`;

export const TrashIcon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 15,
  name: "trash",
  color: theme.colors.RED,
}))``;
