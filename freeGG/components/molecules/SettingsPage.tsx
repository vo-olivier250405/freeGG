import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export const SettingsPage = ({ navigation }: { navigation: any }) => {
  const [filter, setFilter] = useState("");
  return (
    <ScrollView>
      <Text>SETTINGS</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home", { filter: filter });
        }}
      >
        <Text>Change filter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
