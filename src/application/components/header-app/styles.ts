import styled from "styled-components/native";
import { Text } from "@/application/components/base/text";

export const Container = styled.View`
  gap: 16px;
  padding: 16px;
`;

export const HorizontalContainer = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;
