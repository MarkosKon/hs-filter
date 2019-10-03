import union from "lodash.union";
import intersection from "lodash.intersection";
import { setLessThan9 } from "./compare";

// getClass, this needs tests BADLY.
const calculateClasses = (totalClasses, nextCard) => {
  const cardClasses = nextCard.card.cardClass;
  if (cardClasses.includes("NEUTRAL")) return totalClasses;
  if (
    cardClasses.length > 1 &&
    intersection(totalClasses, cardClasses).length > 0
  ) {
    return totalClasses;
  }
  return union(totalClasses, cardClasses);
};
export const getClass = cards => cards && cards.reduce(calculateClasses, []);

// getFormat
const WILD = "WILD";
const STANDARD = "STANDARD";
const calculateFormat = (format, nextCard) => {
  if (format === WILD || setLessThan9(nextCard.card)) return WILD;
  return STANDARD;
};
export const getFormat = cards =>
  cards && cards.reduce(calculateFormat, STANDARD);

// getSize
const calculateQuantity = (sum, card) => sum + card.quantity;
export const getSize = cards => cards && cards.reduce(calculateQuantity, 0);

// cardHassName
export const cardHasName = name => ({ card }) => card.name === name;

// isLegendary
export const isLegendary = ({ card }) => (card.rarity === "LEGENDARY" ? 1 : 2);
