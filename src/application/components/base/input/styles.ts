import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.BLACK};
`;
