import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./components/organisms";
import { GameContext } from "./context";
import { Game } from "./interfaces";
import { fetchSortedData } from "./utils";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";

export default function App() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const animation = useRef(null) as any;

  useEffect(() => {
    fetchSortedData("popularity").then((data) => {
      setAllGames(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 4,
          backgroundColor: "#000",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/blueLoading.json")}
      />
    </View>
  ) : (
    <GameContext.Provider
      value={{ gamesState: allGames, setGamesState: setAllGames }}
    >
      <StatusBar animated={true} backgroundColor="black" style="light" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GameContext.Provider>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
