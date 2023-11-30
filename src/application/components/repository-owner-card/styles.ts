import styled from "styled-components/native";
import { Text } from "@/application/components/base/text";
import { Button } from "@/application/components/base/button";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "@/application/components/base/image";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Button)`
  gap: 16px;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
`;

export const VerticalContainer = styled.View`
  flex: 1;
`;

export const ButtonsContainer = styled.View`
  gap: 24px;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled(Image).attrs({
  imageStyle: { borderRadius: 25 },
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Label = styled(Text)<LabelProps>`
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.medium};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.border : theme.colors.text};
`;

export const TrashIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  name: "trash-2",
  color: theme.colors.alert,
}))``;

export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  name: "arrowright",
  color: theme.colors.border,
}))``;

export const StarIcon = styled(AntDesign).attrs({
  size: 20,
})``;
