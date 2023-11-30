import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";

export const Container = styled(Layout).attrs({
  paddingTopEnabled: true,
})`
  padding: 16px;
`;

export const HorizontalContainer = styled.View`
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
