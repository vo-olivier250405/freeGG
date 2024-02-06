export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: "PC (Windows)" | "Web Browser";
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type DetailedGame = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: "Windows" | "Web Browser";
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  } | null;
  screenshots: { id: number; image: string }[];
};

export type CardProps = {
  game: Game;
  key: number;
};
