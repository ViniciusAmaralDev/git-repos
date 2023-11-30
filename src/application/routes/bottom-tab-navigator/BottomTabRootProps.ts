import { BottomTabParamList } from "./BottomTabParamList";
import { StackScreenProps } from "@react-navigation/stack";

export type BottomTabRootProps<T extends keyof BottomTabParamList> =
  StackScreenProps<BottomTabParamList, T>;
