import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack.routes";

export default function MainRoute() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
