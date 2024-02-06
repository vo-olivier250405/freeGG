import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type LoginProps = {
  navigation: any;
};

export const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ceci est la page de paramètres</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
