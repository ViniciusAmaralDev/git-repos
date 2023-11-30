import React from "react";
import StackNavigator from "./stack-navigator";
import { NavigationContainer } from "@react-navigation/native";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
