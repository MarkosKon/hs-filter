import { createContext } from "react";

export const initialDeck = {
  cards: [],
  name: "",
  format: "STANDARD",
  hero: "ANY",
  size: 0,
  ignoreSize: false
};
export const DeckContext = createContext(initialDeck);
