import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Game } from "../../interfaces";
import { fetchGamesByCategory } from "../../utils";
import { Card } from "../atoms";

interface DetailsPageProps {
  route: any;
  navigation: any;
}

export const GameSortedByCategory = (props: DetailsPageProps) => {
  const { category } = props.route.params;
  const [sortedGames, setSortedGames] = useState<Game[]>();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetchGamesByCategory(category).then((data) => {
      if (isMounted.current) {
        setSortedGames(data);
      }
    });

    return () => {};
  }, [category]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {sortedGames && (
        <View style={styles.columnContainer}>
          {sortedGames.map((game: Game, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                props.navigation.navigate("Details", { id: game.id })
              }
              style={styles.card}
            >
              <Card game={game} key={index} isMiniCard={true} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    backgroundColor: "#410303",
  },
  columnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Vous pouvez ajuster cela selon vos préférences
  },
  card: {
    width: "48%", // Pour assurer qu'il y a un espace entre les cartes
    marginVertical: 10,
  },
});
