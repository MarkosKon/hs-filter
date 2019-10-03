import cloneDeep from "lodash.clonedeep";

import { getClass, getSize, cardHasName } from "./card";

// inDeck
export const inDeck = (deck, card) => deck.cards.find(cardHasName(card.name));

const messages = {
  tooFewCards: "The deck has less than 30 cards.",
  deckIsFull: "The deck is full.",
  noClass: `You haven't added any class specific cards. Please add one (in the
    future you'll be allowed to create a deck with only neutrals).`,
  multipleClasses: `You're attempting to add cards from 2 different classes. You
  can add a filter for cardClass to display cards for a specific class.`
};

// validate
export const validateAdd = (deck, ignoreSize = false) => {
  const size = getSize(deck.cards);
  const deckClass = getClass(deck.cards);
  if (size > 30 && !ignoreSize) throw Error(messages.deckIsFull);
  else if (deckClass.length > 1) throw Error(messages.multipleClasses);
};

export const validateCopy = deck => {
  const size = getSize(deck.cards);
  const deckClass = getClass(deck.cards);
  if (size < 30) throw Error(messages.tooFewCards);
  else if (size > 30) throw Error(messages.deckIsFull);
  else if (deckClass.length > 1) throw Error(messages.multipleClasses);
  else if (deckClass.length === 0) throw Error(messages.noClass);
};

// addUnconditionally
export const addUnconditionally = (deck, card) => {
  const copy = cloneDeep(deck);
  const cards = inDeck(copy, card)
    ? copy.cards.map(c => {
        if (cardHasName(card.name)(c))
          return { ...c, quantity: c.quantity + 1 };
        return c;
      })
    : copy.cards.concat([{ card, quantity: 1 }]);
  return { ...copy, cards };
};
