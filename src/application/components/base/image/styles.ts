import styled from "styled-components/native";

export const ImageBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: "small",
})``;
