// import { encode as enc, decode as dec, FormatType } from 'deckstrings';
import { encode as enc, decode as dec } from "deckstrings";
import sortBy from "lodash.sortby";

const toCodes = {
  DRUID: 274,
  HUNTER: 31,
  MAGE: 637,
  PALADIN: 671,
  PRIEST: 813,
  ROGUE: 930,
  SHAMAN: 1066,
  WARLOCK: 893,
  WARRIOR: 7
};

const toHeroes = {
  274: "DRUID",
  31: "HUNTER",
  637: "MAGE",
  671: "PALADIN",
  813: "PRIEST",
  930: "ROGUE",
  1066: "SHAMAN",
  893: "WARLOCK",
  7: "WARRIOR"
};

// In case we import an in-game deck.
const extractDataFromComments = string => {
  if (!string.includes("#")) return { code: string };
  const pieces = string.split("#");
  const { length } = pieces;
  const code = pieces[length - 3];
  const name = pieces[3];
  const extractHero = pieces[4].match(/ Class: (\w+) /);
  const hero = extractHero && extractHero[1].toUpperCase();
  return { code, name, hero };
};

// exports
export const decode = allCards => initialCode => {
  const { code, name, hero } = extractDataFromComments(initialCode);
  const toOurDeck = ({ cards, format, heroes }) => ({
    cards: sortBy(
      cards.map(([dbfId, quantity]) => ({
        card: allCards.find(c => c.dbfId === dbfId),
        quantity
      })),
      ["card.cost", "card.name"]
    ),
    format: format === 1 ? "WILD" : "STANDARD",
    hero: hero || toHeroes[heroes[0]],
    size: 30,
    name: name || "",
    ignoreSize: false
  });
  const theirDeck = dec(code);
  return toOurDeck(theirDeck);
};
export const encode = deck => {
  const toTheirDeck = ({ cards, format, hero }) => ({
    cards: cards.map(c => [c.card.dbfId, c.quantity]),
    format: format === "WILD" ? 1 : 2,
    heroes: [toCodes[hero]]
  });
  return enc(toTheirDeck(deck));
};
