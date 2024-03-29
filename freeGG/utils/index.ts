import { api } from "../services/api";
import { Game } from "../interfaces";
import { faComputer, faGlobe } from "@fortawesome/free-solid-svg-icons";

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

export const fetchGamesByCategory = async (category: string) => {
  return await api.get(`/games?category=${category}`).then((response) => {
    return response.data;
  });
};

export const fetchDataFromSpecificGame = async (id: number) => {
  return await api.get(`/game?id=${id}`).then((response) => {
    return response.data;
  });
};

export const get10Games = (allGames: Game[]): Game[] => {
  if (allGames.length <= 10) {
    return allGames;
  }

  const uniqueSet = new Set();

  while (uniqueSet.size < 10) {
    const randomIndex = Math.floor(Math.random() * allGames.length);
    uniqueSet.add(allGames[randomIndex]);
  }

  return Array.from(uniqueSet) as Game[];
};

export const fetchSortedData = async (
  filter: "alphabetical" | "relevance" | "popularity" | "release-date"
) => {
  return await api.get(`/games?sort-by=${filter}`).then((response) => {
    return response.data;
  });
};

export const categories = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];
