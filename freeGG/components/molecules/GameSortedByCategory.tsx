import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import { Game } from "../../interfaces";
import { fetchGamesByCategory } from "../../utils";
import { Card } from "../atoms";
import { RefreshControl } from "react-native";
import { CustomSearchBar } from "../atoms";

interface DetailsPageProps {
  route: any;
  navigation: any;
}

export const GameSortedByCategory = (props: DetailsPageProps) => {
  const { category } = props.route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [sortedGames, setSortedGames] = useState<Game[]>([]);
  const [inputText, setInputText] = useState("");
  const isMounted = useRef(true);

  let temp: Game[] = Array.from(sortedGames!);
  if (inputText) {
    temp = sortedGames!.filter((element: Game) => {
      return element.title.toUpperCase().includes(inputText.toUpperCase());
    });
  }

  const handleOnChange = (text: string) => {
    setInputText(text);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <CustomSearchBar
        handleOnChange={handleOnChange}
        inputText={inputText}
        setInputText={() => setInputText("")}
        placeholder="Search game"
      />

      {temp && (
        <View style={styles.columnContainer}>
          {temp.map((game: Game, index: number) => (
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  columnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginVertical: 10,
  },
});
