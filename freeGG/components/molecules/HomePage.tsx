import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Game } from "../../types";
import { fetchSortedData, get10Games } from "../../utils";
import { Card } from "../atoms";

export const Home = ({ navigation }: { navigation: any }) => {
  // const [allGames, setAllGames] = useState<Game[]>([]);
  const [homeGames, setHomeGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchSortedData("alphabetical").then((data) => {
      // setAllGames(data);
      setHomeGames(get10Games(data));
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>FREE GG</Text>
      <ScrollView horizontal={true} style={styles.scrollBar}>
        {homeGames &&
          homeGames.map((game: Game, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Details", { game: game })}
              >
                <View>
                  <Text>
                    <Card game={game} key={index} />
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
  },
  scrollBar: {
    flexDirection: "row",
  },
});
