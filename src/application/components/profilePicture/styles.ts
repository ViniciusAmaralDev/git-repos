import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import Button from "../base/button";

export const ImageBackground = styled.ImageBackground`
  background-color: ${({ theme }) => theme.colors.GRAY_LIGHT};
`;

export const ChangeButton = styled(Button)`
  right: 8px;
  bottom: 0px;
  padding: 6px;
  position: absolute;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const CameraIcon = styled(Feather).attrs(({ theme }) => ({
  size: 15,
  name: "camera",
  color: theme.colors.BLACK,
}))``;
