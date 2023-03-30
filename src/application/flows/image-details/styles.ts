import Layout from "@components/layout";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import CustomButton from "@components/base/button";
import ProfilePicture from "@components/profilePicture";

export const Container = styled(Layout)`
  flex: 1;
`;

export const Image = styled(ProfilePicture).attrs(({ theme }) => ({
  resizeMode: "contain",
  loadProps: { size: "large", color: theme.colors.BACKGROUND },
}))`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Button = styled(CustomButton)`
  align-self: flex-end;
`;

export const ShareIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  name: "share",
  color: theme.colors.BLACK,
}))``;
