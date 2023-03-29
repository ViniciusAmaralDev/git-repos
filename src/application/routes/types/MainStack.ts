import { Owner } from "@hooks/owner/types";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackScreensEnum } from "../enums/MainStackEnum";

export type MainStackParamList = {
  [MainStackScreensEnum.HOME]: undefined;
  [MainStackScreensEnum.OWNER_DETAILS]: { owner: Owner };
};

export type MainStackRootProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
