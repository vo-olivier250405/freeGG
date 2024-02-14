import { createContext } from "react";
import { Game } from "../interfaces";

export const GameContext = createContext<Game[]>([]);
