import { createContext } from "react";
import { GameContextProps } from "../interfaces";

export const GameContext = createContext<GameContextProps | null>(null);
