import Text from "@components/base/text";
import styled from "styled-components/native";
import CustomButton from "@components/base/button";

type LabelProps = { secondary?: boolean };

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(CustomButton)`
  padding: 4px 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const Label = styled(Text)<LabelProps>`
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.MEDIUM : theme.fonts.REGULAR};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.WHITE : theme.colors.BLACK};
`;
