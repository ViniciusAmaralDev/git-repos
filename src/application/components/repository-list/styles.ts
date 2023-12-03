import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import emptyAnimation from "@/application/assets/animations/empty-animation.json";

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 16 },
})``;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmptyAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  source: emptyAnimation,
})`
  width: 300px;
  height: 300px;
`;
