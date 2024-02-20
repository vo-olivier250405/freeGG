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
      {/* <View>
        <Text className="text-4xl">SETTINGS</Text>
      </View>

      <View className="flex-column">
        <CustomButton icon={faGlobe} filterName="PC (Windows)" />
        <CustomButton icon={faComputer} filterName="Web Browser" />
        <CustomButton icon={faXmark} filterName="Reset" />
      </View> */}
      <View className="flex-column m-auto">
        <Text>Vous n'obtiendrez que des jeux sur PC</Text>
        <Text>Vous n'obtiendrez que des jeux sur Web Browser</Text>
        <Text>Reset Filters</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#410303",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
