import sortBy from "lodash.sortby";

import {
  getSize,
  getFormat,
  getClass,
  cardHasName,
  isLegendary
} from "../utils/card";
import { inDeck } from "../utils/deck";
import { initialDeck } from "../context/deck-context";

// Constants
const ADD_CARD = "hs-filters/deck/ADD_CARD";
const REMOVE_CARD = "hs-filters/deck/REMOVE_CARD";
const CLEAR = "hs-filters/deck/CLEAR";
const REPLACE = "hs-filters/deck/REPLACE";
const TOGGLE_IGNORE_SIZE = "hs-filters/deck/TOGGLE_IGNORE_SIZE";

// Action Creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });
export const clear = () => ({ type: CLEAR });
export const replace = payload => ({ type: REPLACE, payload });
export const toggleIgnoreSize = () => ({ type: TOGGLE_IGNORE_SIZE });

// Reducer
export default (state = {}, action = {}) => {
  const { type, payload } = action;

  // ADD_CARD
  if (type === ADD_CARD) {
    const { card } = payload;
    const cards = inDeck(state, card)
      ? state.cards.map(c => {
          if (cardHasName(card.name)(c))
            return { ...c, quantity: isLegendary(c) };
          return c;
        })
      : state.cards.concat([{ card, quantity: 1 }]);
    const classes = getClass(cards);
    return {
      ...state,
      name: "",
      cards: sortBy(cards, ["card.cost", "card.name"]),
      format: getFormat(cards),
      hero: classes.length === 0 ? "ANY" : classes[0],
      size: getSize(cards)
    };
  }
  // REMOVE_CARD
  if (type === REMOVE_CARD) {
    const { card } = payload;
    // We re-create the object here, similar to a mutation.
    // The alternative needs sorting.
    const cards = state.cards.reduce((acc, c) => {
      if (cardHasName(card.name)(c)) {
        return c.quantity === 1 ? acc : [...acc, { ...c, quantity: 1 }];
      }
      return [...acc, c];
    }, []);
    const classes = getClass(cards);
    return {
      ...state,
      name: "",
      cards,
      format: getFormat(cards),
      hero: classes.length === 0 ? "ANY" : classes[0],
      size: getSize(cards)
    };
  }
  // CLEAR
  if (type === CLEAR) return initialDeck;
  // REPLACE
  if (type === REPLACE) return payload;
  // TOGGLE_IGNORE_SIZE
  if (type === TOGGLE_IGNORE_SIZE) {
    return { ...state, ignoreSize: !state.ignoreSize };
  }
  return state;
};
