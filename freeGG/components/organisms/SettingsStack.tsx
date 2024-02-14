import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsPage } from "../molecules";

type LoginProps = {
  navigation: any;
};

const Navigator = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
      <Navigator.Screen name="SettingsPage" component={SettingsPage} />
    </Navigator.Navigator>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
