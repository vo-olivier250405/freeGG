import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Game } from "../../interfaces";
import { fetchSortedData, get10Games } from "../../utils";
import { Carousel } from "../atoms/Carousel";

export const HomePage = ({ navigation }: { navigation: any }) => {
  // const [allGames, setAllGames] = useState<Game[]>([]);

  const [homeGames, setHomeGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchSortedData("alphabetical").then((data) => {
      // setAllGames(data);
      setHomeGames(get10Games(data));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FREE GG</Text>
      {homeGames && <Carousel allGames={homeGames} navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#410303",
  },
  buttons: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
  },
  scrollBar: {
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 50,
    padding: 30,
    color: "#f36e6e",
  },
});
