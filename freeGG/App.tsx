import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./components/organisms";
import { GameContext } from "./context";
import { Game } from "./interfaces";
import { fetchSortedData } from "./utils";

export default function App() {
  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchSortedData("alphabetical").then((data) => {
      setAllGames(data);
    });
  }, []);

  return (
    <GameContext.Provider
      value={{ gamesState: allGames, setGamesState: setAllGames }}
    >
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GameContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function setAllGames(data: any) {
  throw new Error("Function not implemented.");
}
