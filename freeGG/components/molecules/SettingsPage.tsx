import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { GameContext } from "../../context";
import { CustomButton } from "../atoms";
import {
  faComputer,
  faGlobe,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { fetchSortedData } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";

export const SettingsPage = () => {
  const setGames = useContext(GameContext)?.setGamesState!;
  const games = useContext(GameContext)?.gamesState!;

  return (
    <LinearGradient
      colors={["#000000", "#151313", "#474646"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.container}>
        {/* <View>
        <Text className="text-4xl">SETTINGS</Text>
      </View>

      <View className="flex-column">
        <CustomButton icon={faGlobe} filterName="PC (Windows)" />
        <CustomButton icon={faComputer} filterName="Web Browser" />
        <CustomButton icon={faXmark} filterName="Reset" />
      </View> */}
        <View className="flex-column m-auto">
          <CustomButton icon={faComputer} filterName="PC (Windows)" />
          <CustomButton icon={faGlobe} filterName="Web Browser" />
          <CustomButton icon={faX} filterName="All" />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
});
