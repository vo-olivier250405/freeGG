import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { DetailsPage, CategoryPage, GameSortedByCategory } from "../molecules";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigator = createNativeStackNavigator();
export const CategoryStack = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
      <Navigator.Screen name="CategoryPage" component={CategoryPage} />
      <Navigator.Screen
        name="GamesSortedByCategory"
        component={GameSortedByCategory}
      />
      <Navigator.Screen name="Details" component={DetailsPage} />
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
