export interface Game {
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
}

export interface DetailedGame {
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
}

export interface CardProps {
  game: Game;
  key: number;
  isMiniCard: boolean;
}

export interface GameContextProps {
  gamesState: Game[];
  setGamesState: React.Dispatch<React.SetStateAction<Game[]>>;
}

export interface CustomSearchBarProps {
  handleOnChange: (text: string) => void;
  setInputText: (value: React.SetStateAction<string>) => void;
  inputText: string;
  placeholder: string;
}

export interface ScreenShots {
  id: number;
  image: string;
}

export interface CarouselProps {
  data: Game[];
  navigation: any;
}

export interface PicturesCarouselProps {
  data: ScreenShots[];
}
