import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { BottomTabParamList } from "./BottomTabParamList";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

// SCREENS
import { Home } from "../../screens/home";
import { Settings } from "@/application/screens/settings";
import { FavoriteRepositories } from "@/application/screens/favorite-repositories";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { theme } = useTheme();

  const bottomTabConfig: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: theme.colors.secondary,
    tabBarInactiveTintColor: theme.colors.placeholder,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: theme.colors.border,
    },
  };

  return (
    <BottomTab.Navigator screenOptions={bottomTabConfig}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={FavoriteRepositories}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name={focused ? "star" : "staro"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
