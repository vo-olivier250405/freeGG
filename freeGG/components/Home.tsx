import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Game } from "../types";
import { fetchSortedData, get10Games } from "../utils";
import { Image } from "react-native";
import { Card } from "./atoms";

export const Home = () => {
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
      <Text>Ceci est la page d'accueil</Text>
      <ScrollView horizontal={true} style={styles.scrollBar}>
        {homeGames &&
          homeGames.map((game: Game, index: number) => {
            return <Card game={game} key={index} />;
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
