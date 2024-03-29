import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

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
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          source={{
            uri: "https://www.freetogame.com/assets/images/freetogame-logo.png",
          }}
          style={{
            width: Dimensions.get("window").width - 10,
            height: Dimensions.get("window").height / 4,
            borderRadius: 10,
            marginTop: 10,
          }}
          resizeMode="contain"
        />
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
    backgroundColor: "black",
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
    color: "white",
    marginTop: 50,
  },
});
