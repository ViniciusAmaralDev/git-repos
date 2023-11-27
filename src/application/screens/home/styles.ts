import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";

export const Container = styled(Layout).attrs({
  paddingTopEnabled: true,
})`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled(Text)`
  font-size: 50px;
`;
