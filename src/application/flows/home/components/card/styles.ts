import Text from "@components/base/text";
import Button from "@components/base/button";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "@components/profilePicture";

type LabelProps = { light?: boolean };

export const VerticalContainer = styled.View`
  flex: 1;
`;

export const Container = styled(Button)`
  flex: 1;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled(ProfilePicture).attrs(({ theme }) => ({
  imageStyle: { borderRadius: 20 },
  loadProps: { size: "small", color: theme.colors.GRAY },
}))`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Label = styled(Text)<LabelProps>`
  margin-left: 8px;
  font-size: ${({ light }) => (light ? 12 : 14)}px;
  font-family: ${({ theme, light }) =>
    light ? theme.fonts.REGULAR : theme.fonts.MEDIUM};
  color: ${({ theme, light }) =>
    light ? theme.colors.GRAY : theme.colors.BLACK};
`;

export const ArrowRightIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  name: "arrowright",
  color: theme.colors.BLACK,
}))`
  margin-left: 16px;
`;
