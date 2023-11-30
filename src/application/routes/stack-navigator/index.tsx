import React from "react";
import { StackParamList } from "./StackParamList";
import BottomTabNavigator from "../bottom-tab-navigator";
import { createStackNavigator } from "@react-navigation/stack";
import { RepositoryDetails } from "@/application/screens/repository-details";

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RepositoryDetails" component={RepositoryDetails} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
