import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsPage } from "./molecules";
import { Home } from "./molecules";

const Navigator = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
      <Navigator.Screen name="Home" component={Home} />
      <Navigator.Screen name="Details" component={DetailsPage} />
    </Navigator.Navigator>
  );
};
