import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { BottomTabParamList } from "./BottomTabParamList";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

// SCREENS
import { Home } from "../../screens/home";
import { FavoriteRepositories } from "@/application/screens/favorite-repositories";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { theme } = useTheme();

  const bottomTabConfig: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: theme.colors.secondary,
    tabBarInactiveTintColor: theme.colors.border,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.colors.placeholder,
    },
  };

  return (
    <BottomTab.Navigator screenOptions={bottomTabConfig}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={FavoriteRepositories}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="staro" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
