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
        tabBarActiveTintColor: "#f36e6e",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          borderColor: "#610101",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          backgroundColor: "#610101",
          shadowColor: "#f36e6e",
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
