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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { fetchSortedData } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const SettingsPage = () => {
  const setGames = useContext(GameContext)?.setGamesState!;
  const games = useContext(GameContext)?.gamesState!;

  return (
    <View style={styles.container}>
      <View>
        <Text onPress={() => console.log(games.length)} className="text-4xl">
          SETTINGS
        </Text>
      </View>

      <View>
        <Text className="italic text-white m-4 text-xl">
          Click to active filters
        </Text>
      </View>
      <View className="flex-column">
        <View className="flex-row">
          <CustomButton icon={faGlobe} filterName="PC (Windows)" />
          <CustomButton icon={faComputer} filterName="Web Browser" />
        </View>
        <View className="m-auto">
          <CustomButton icon={faXmark} filterName="Reset" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#410303",
    justifyContent: "center",
    alignItems: "center",
  },
});
