import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";

export const Container = styled(Layout).attrs({
  paddingTopEnabled: true,
})`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled(Text)`
  font-size: 50px;
`;

export const ErrorIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  name: "error",
  color: theme.colors.warning,
}))``;
