export const archetypes = [
  {
    name: "Control",
    description:
      "In this archetype you'll most likely want to take the role of the defender and        control the pace of the game. You will want to remove efficiently your opponent's        threats without taking too much damage in the early game and out-value them with        your big threats in the late-game. Some real deck examples are Control        warrior and Control priest.",
    priorities: [
      {
        minCards: 3,
        maxCards: 6,
        id: "3626327b-3ea4-4e36-99dd-ff9be9963ef9",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "AOE"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "806ca50c-1425-49cc-ad9f-befa725e92dd",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HARD_REMOVAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "beca84f6-70f1-4c9b-b860-67038377d9d5",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "SMALL_REMOVAL"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "849a2bc3-8937-466a-bde8-208bcf808dfb",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "VALUE"
          }
        ]
      },
      {
        minCards: 3,
        maxCards: 5,
        id: "14c7d9e9-f232-4480-a332-ae58736d2cfc",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      },
      {
        minCards: 1,
        maxCards: 2,
        id: "b29884bb-427c-4f08-8ae5-d6abbb15d929",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HEAL"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 5,
        id: "c5e05df6-ee03-4237-9f49-f632b1183a1d",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 2 }
        ]
      },
      {
        minCards: 4,
        maxCards: 5,
        id: "9d81257f-c2de-4ec9-bd61-66cdb2af4e35",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 3 }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "8f67da18-7c1c-4294-8c0b-50d51fff20e6",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 4 }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "76e36594-343e-46c4-a0dc-3b4865c9cada",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 5 }
        ]
      }
    ]
  },
  {
    name: "Mid-Range",
    description:
      "A mid-range deck usually has as little early game as possible, mainly for defense        purposes. It develops threats in the mid-game and in the late-game tries to end the        game with burst, or by cycling through the deck for new threats, or by developing a        limited number of big threats. Some real deck examples are mid-range Hunter        and mid-range Paladin.",
    priorities: [
      {
        minCards: 2,
        maxCards: 4,
        id: "556a2869-f72e-4e54-8fc7-9b39ed0131af",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "SMALL_REMOVAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "93131a13-8b75-4d28-82ed-cb0927c7acb2",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HARD_REMOVAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "848636a4-e035-4f65-ae5f-5c661fcf6155",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "AOE"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "a602712f-0c82-4dee-955b-6ebea5033d1a",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 2 }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "1a83de73-6481-4a2e-9f1c-d0bdd34485ec",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 3 }
        ]
      },
      {
        minCards: 3,
        maxCards: 5,
        id: "06f4d81f-0ce3-4998-8c65-7268a86d8c38",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "1e93309c-ebc7-4d66-aeb1-b0e0c2e10b23",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "VALUE"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "c76c5189-0f86-442f-b8b9-99acaeaa66f1",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 4 }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "78606994-a948-42e4-ab90-f10c3ba05562",
        filters: [
          {
            property: "type",
            operation: "IS_INCLUDED_IN",
            minValue: ["MINION", "SPELL", "WEAPON", "HERO"]
          },
          { property: "cost", operation: "EQUALS", minValue: 5 }
        ]
      }
    ]
  },
  {
    name: "Aggro",
    description:
      "An aggro archetype favors early board development with high damage minions.        You'll most likely have the board in the early - mid game, so you can take some        efficient trades. Later you'll want to prioritize face damage because you want        to end the game quickly. You kill your opponent with minion damage        (if you still have a board) and most frequently with burst spells / weapons or        charge minions. Some real deck examples are Face Hunter, Aggro Paladin,        Backspace Rogue and some Zoolock Warlock variations.",
    priorities: [
      {
        minCards: 4,
        maxCards: 6,
        id: "4a442164-ed6f-4c80-9c42-9b68e541d870",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 1 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "5172ef2f-8b0e-4f36-8cf6-d696fd330efd",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 2 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 8,
        maxCards: 10,
        id: "fba37dc1-e9d1-4f33-bc18-23e372d611fd",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "DAMAGE"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 2,
        id: "b0081118-2541-447e-9b93-4b2b8f051b11",
        filters: [
          {
            property: "name",
            operation: "EQUALS",
            minValue: "Spellbreaker"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "e24262ea-003c-4141-b4dc-2d9aec17d047",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 3 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "731286f8-fb62-450f-bb3a-a8ba68b4970e",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "f8b8e0a8-4ff2-4ed7-9c8b-29c1b3b1214d",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 4 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "330bdb46-ed17-4f2e-93df-e303fa0c0908",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 5 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      }
    ]
  },
  {
    name: "Tempo",
    description:
      "A tempo deck emphasizes on using all the available mana every single turn.        You will want to develop early - mid game threats and clear your opponent's        minions with efficient removal mana wise(e.g Hex an Emperor Thaurissan.        You spent 4 mana for their 6 mana card). You finish the game with minion damage,        burn or by developing a big threat. Some real deck examples are Tempo mage and        Tempo Rogue. ",
    priorities: [
      {
        minCards: 8,
        maxCards: 10,
        id: "72d905a5-9396-4828-a88d-36727abd39ca",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "TEMPO"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "389b1c03-08c9-424b-a185-f1b8e6c599d7",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 1 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 5,
        maxCards: 7,
        id: "6ce4f29a-ec17-4c1b-bdba-6e1bce16cdae",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 2 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 3,
        maxCards: 5,
        id: "9f786ceb-9819-4000-8c56-e704c2cc0cad",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "SMALL_REMOVAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 2,
        id: "b0081118-2541-447e-9b93-4b2b8f051b11",
        filters: [
          {
            property: "name",
            operation: "EQUALS",
            minValue: "Spellbreaker"
          }
        ]
      },
      {
        minCards: 1,
        maxCards: 2,
        id: "fc1a2072-5da4-46a5-9369-fc03925d3d3d",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HARD_REMOVAL"
          }
        ]
      },
      {
        minCards: 3,
        maxCards: 5,
        id: "8fc50560-12ab-4745-97cf-d747f0f89bc9",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 3 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "27ede61b-0552-41ec-8a34-4a206bc3375a",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 4 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "63383e6e-d146-4ba7-bf37-3ad3d1f084ef",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 5 }
        ]
      },
      {
        minCards: 1,
        maxCards: 3,
        id: "93c4d035-8f30-431c-ac0a-0bec5067e412",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 6 }
        ]
      }
    ]
  },
  {
    name: "Mill",
    description:
      "In a mill archetype your main focus is to destroy your opponent's cards by overdrawing        them. You' ll most likely deal the final blow by drawing them into fatigue. ",
    priorities: [
      {
        minCards: 2,
        maxCards: 2,
        id: "2d0a1e0b-9532-45f2-8a75-d1171663f194",
        filters: [
          {
            property: "name",
            operation: "EQUALS",
            minValue: "Coldlight Oracle"
          }
        ]
      },
      {
        minCards: 3,
        maxCards: 5,
        id: "3de6edc5-a6cc-4e60-a2e4-0b91b746b1c7",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "AOE"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "af570455-bdd8-4a15-8a3d-be9c28664e6f",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "STALL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "14985ac9-16c9-4e28-98ef-e04caf5c4a73",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HEAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "b1a36c14-17af-4c1a-a697-00d94ade342c",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "SMALL_REMOVAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "6ea90454-8e48-4ae9-9f14-275bf46070c3",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "87969e86-2505-4d61-ac10-a34f0ca56b18",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HARD_REMOVAL"
          }
        ]
      }
    ]
  },
  {
    name: "Fatigue - Grinder",
    description:
      "This archetype is the epitome of a control deck. Your goal is to remove all        your opponent's threats efficiently (card advantage wise) and have the last        minion standing. You most often win with fatigue damage after a long game.        Some real deck examples are Fatigue mage, Warrior and Priest.",
    priorities: [
      {
        minCards: 3,
        maxCards: 6,
        id: "e169ee70-4341-4986-b4c1-eeace24472c1",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "AOE"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "351fb551-0cca-43ec-8bc5-58b4d94147c7",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "STALL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "5859fb7e-e168-44a1-b07b-581e925f53e4",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "SMALL_REMOVAL"
          }
        ]
      },
      {
        minCards: 3,
        maxCards: 6,
        id: "4273d0c8-1300-4fd3-9252-e4553ecd5cb7",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HARD_REMOVAL"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "28d24019-33be-45dc-9400-77cba554604f",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "VALUE"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "dffe736c-9a13-4d9d-bfd0-a2abc50c7821",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "HEAL"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "c9953fd0-df9c-4e75-85e4-d1a84bf45136",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      }
    ]
  },
  {
    name: "Flood",
    description:
      "A flood deck wants to flood the board with cheap and strong minions as soon as possible.        By having the board you can take efficient trades or play synergistic cards in the mid-game.        Some real deck examples could be Zoolock Warlock and Flood mage. ",
    priorities: [
      {
        minCards: 4,
        maxCards: 6,
        id: "4d22ef24-0d80-4862-8135-28730fb00a1f",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 1 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 5,
        maxCards: 7,
        id: "ce613867-d300-47fb-958c-f2fc88137098",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 2 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "decb33e9-6f5c-48dd-83c2-867eb17d7d9c",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 3 },
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "FAST"
          }
        ]
      },
      {
        minCards: 6,
        maxCards: 10,
        id: "978fd440-4a5e-4358-9c5a-44fc1a486445",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "BUFF"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 2,
        id: "b0081118-2541-447e-9b93-4b2b8f051b11",
        filters: [
          {
            property: "name",
            operation: "EQUALS",
            minValue: "Spellbreaker"
          }
        ]
      },
      {
        minCards: 2,
        maxCards: 4,
        id: "b53a6e7e-d6ce-4373-9ecd-c5a4d87fbb05",
        filters: [
          {
            property: "extra",
            operation: "INCLUDES",
            minValue: "CARD_DRAW"
          }
        ]
      },
      {
        minCards: 4,
        maxCards: 6,
        id: "c2ed50ba-f345-44dd-ae42-8efe5009f527",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 4 }
        ]
      },
      {
        minCards: 2,
        maxCards: 3,
        id: "ad831dd5-e2d0-4821-8ae7-4610f1f5b9b6",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 5 }
        ]
      },
      {
        minCards: 1,
        maxCards: 2,
        id: "5b0da4b9-5134-4194-91c9-b23c9d234a20",
        filters: [
          {
            property: "type",
            operation: "EQUALS",
            minValue: "MINION"
          },
          { property: "cost", operation: "EQUALS", minValue: 6 }
        ]
      }
    ]
  }
];
