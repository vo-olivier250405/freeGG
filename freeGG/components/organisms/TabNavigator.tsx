import React from "react";
import { faHome, faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CategoryStack } from "./CategoryStack";
import { HomeStack } from "./HomeStack";
import { SettingsStack } from "./SettingsStack";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = faHome;
          } else if (route.name === "Settings") {
            iconName = faGear;
          } else {
            iconName = faGamepad;
          }

          // You can return any component that you like here!
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0080F8",
        tabBarInactiveTintColor: "#A0B4C7",
        tabBarStyle: {
          borderColor: "black",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          backgroundColor: "black",
          shadowColor: "#f36e6e",
        },
        tabBarOptions: {
          keyboardHidesTabBar: true,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        initialParams={{ filter: null }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryStack}
        initialParams={{ platform: "all" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        initialParams={{ filter: null }}
      />
    </Tab.Navigator>
  );
};
