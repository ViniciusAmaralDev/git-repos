import { BottomTabParamList } from "./BottomTabParamList";
import { StackScreenProps } from "@react-navigation/stack";

export type BottomTabProps<T extends keyof BottomTabParamList> =
  StackScreenProps<BottomTabParamList, T>;
