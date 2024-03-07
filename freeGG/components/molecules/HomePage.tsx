import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import { get10Games } from "../../utils";
import { Carousel } from "../atoms/Carousel";
import { GameContext } from "../../context";
import { LinearGradient } from "expo-linear-gradient";

export const HomePage = ({ navigation }: { navigation: any }) => {
  // const [allGames, setAllGames] = useState<Game[]>([]);
  const homeGames = get10Games(useContext(GameContext)!.gamesState);
  const mostPopularGames = useContext(GameContext)!.gamesState.slice(0, 10);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={["#000000", "#151313", "#474646"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={styles.textStyle}>FREE GG</Text>
        <Text className="text-white p-4 italic">Our selection</Text>
        {homeGames && <Carousel data={homeGames} navigation={navigation} />}
        <Text className="text-white p-4 italic">Most popular</Text>
        {mostPopularGames && (
          <Carousel data={mostPopularGames} navigation={navigation} />
        )}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 20,
    color: "#f36e6e",
  },
});
