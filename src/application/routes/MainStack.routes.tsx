import "react-native-gesture-handler";
import React from "react";
import { MainStackParamList } from "./types/MainStack";
import { MainStackScreensEnum } from "./enums/MainStackEnum";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Home from "@flows/home";
import OwnerDetails from "@flows/owner-details";

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainStackScreensEnum.HOME} component={Home} />
      <Stack.Screen
        name={MainStackScreensEnum.OWNER_DETAILS}
        component={OwnerDetails}
      />
    </Stack.Navigator>
  );
}
