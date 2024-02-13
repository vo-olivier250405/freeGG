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
import { Card } from "../atoms";

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
      <ScrollView horizontal={true} style={styles.scrollBar}>
        {homeGames &&
          homeGames.map((game: Game, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Details", { id: game.id })}
              >
                <Text>
                  <Card game={game} key={index} isMiniCard={false} />
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
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
