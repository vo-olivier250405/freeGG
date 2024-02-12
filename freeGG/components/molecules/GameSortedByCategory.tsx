import { useEffect, useState, useRef } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
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
    <ScrollView>
      {sortedGames && (
        <View>
          {sortedGames.map((game: Game, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate("Details", { id: game.id })
                }
              >
                <Text>
                  <Card game={game} key={index} />
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};
