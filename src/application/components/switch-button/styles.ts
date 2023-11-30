import styled from "styled-components/native";
import { Button } from "../base/button";

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled(Button)<ContainerProps>`
  width: 55px;
  height: 30px;
  padding: 4px;
  border-radius: 100px;
  justify-content: center;
  align-items: ${({ isActive }) => (isActive ? "flex-end" : "flex-start")};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.border};
`;

export const Circle = styled.View<ContainerProps>`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text : theme.colors.primary};
`;
