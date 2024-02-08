import { api } from "../services/api";
import { Game } from "../types";

export const getRandint = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const bubbleSort = (tab: any[]) => {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - i - 1; j++) {
      const temp = tab[j + 1];
      tab[j + 1] = tab[j];
      tab[j] = temp;
    }
  }
  return tab;
};

export const fetchGameData = async () => {
  return await api.get("/games").then((response) => {
    return response.data;
  });
};

export const fetchGameDataByPlatform = async (platform: string) => {
  return await api.get(`/game?platform=${platform}`).then((response) => {
    return response.data;
  });
};

export const fetchDataFromSpecificGame = async (id: number) => {
  return await api.get(`/game?id=${id}`).then((response) => {
    return response.data;
  });
};

export const get10Games = (allGames: Game[]): Game[] => {
  let randomGames: Game[] = [];
  for (let i = 0; i <= 10; i++) {
    randomGames.push(allGames[getRandint(0, allGames.length - 1)]);
  }
  return randomGames;
};

export const fetchSortedData = async (
  filter: "alphabetical" | "relevance" | "popularity" | "release-date"
) => {
  return await api.get(`/games?sort-by=${filter}`).then((response) => {
    return response.data;
  });
};
