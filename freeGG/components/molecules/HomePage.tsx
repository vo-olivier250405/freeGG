import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { get10Games } from "../../utils";
import { Carousel } from "../atoms/Carousel";
import { GameContext } from "../../context";

export const HomePage = ({ navigation }: { navigation: any }) => {
  // const [allGames, setAllGames] = useState<Game[]>([]);
  const homeGames = get10Games(useContext(GameContext)!.gamesState);
  const mostPopularGames = useContext(GameContext)!.gamesState.slice(0, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FREE GG</Text>
      {homeGames && <Carousel data={homeGames} navigation={navigation} />}
      {mostPopularGames && (
        <Carousel data={mostPopularGames} navigation={navigation} />
      )}
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
