import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";

export const Container = styled(Layout).attrs({
  paddingTopEnabled: true,
})`
  padding: 16px;
`;

export const Label = styled(Text)`
  flex: 1;
`;

export const HorizontalContainer = styled.View`
  gap: 16px;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
