import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./components/organisms";
import { GameContext } from "./context";
import { Game } from "./interfaces";
import { fetchSortedData } from "./utils";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchSortedData("popularity").then((data) => {
      setAllGames(data);
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        gamesState: allGames,
        setGamesState: setAllGames,
      }}
    >
      <StatusBar animated={true} backgroundColor="#610101" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GameContext.Provider>
  );
}
