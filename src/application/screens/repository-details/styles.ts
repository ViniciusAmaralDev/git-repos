import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Image } from "@/application/components/base/image";
import { TextButton } from "@/application/components/text-button";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  paddingTopEnabled: true,
})``;

export const HorizontalContainer = styled.View`
  gap: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const VerticalContainer = styled.View``;

export const ProfileImage = styled(Image).attrs({
  imageStyle: { borderRadius: 50 },
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Label = styled(Text)<LabelProps>`
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.medium};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.border : theme.colors.text};
`;

export const LinkButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.secondary,
    fontSize: 12,
    textDecorationLine: "underline",
  },
}))`
  margin-top: 8px;
`;
