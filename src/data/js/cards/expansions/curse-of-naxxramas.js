export const curseOfNaxxramas = [
  {
    name: "Zombie Chow",
    artist: "E. M. Gist",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1753,
    flavor: "Zombie.  It's what's for dinner.",
    health: 3,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_001",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 1,
    rating: 3,
    text: "Deathrattle: Restore 5 Health to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "683.png",
    tile: "FP1_001.png"
  },
  {
    name: "Haunted Creeper",
    artist: "Jeremy Cranford",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1781,
    flavor: "Arachnofauxbia: Fear of fake spiders.",
    health: 2,
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_002",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 1,
    rating: 4,
    text: "Deathrattle: Summon two 1/1 Spectral Spiders.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "7756.png",
    tile: "FP1_002.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1bb40c14-227d-4192-b66a-d27457239f86",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Echoing Ooze",
    artist: "Eric Browning",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1858,
    flavor: "OOZE... Ooze... Ooze... (ooze...)",
    health: 2,
    howToEarn: "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    id: "FP1_003",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 1,
    rating: 2,
    text:
      "Battlecry: Summon an exact copy of this minion at the end of the turn.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "7754.png",
    tile: "FP1_003.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4b913ba4-2317-456e-8bfb-7469e258a71e",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "minion"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "adjacent|turn"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mad Scientist",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1783,
    flavor:
      "His mother wanted him to be a mage or a warlock, but noooooooo, he had to go and be a scientist like his father.",
    health: 2,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_004",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    referencedTags: ["SECRET"],
    set: 1,
    rating: 1,
    text: "Deathrattle: Put a Secret from your deck into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7748.png",
    tile: "FP1_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0f3dc8bd-d07c-4ec6-a63a-59d3dbccbe0a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "SECRET"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shade of Naxxramas",
    artist: "Ittoku",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1784,
    flavor:
      "The Shades of Naxxramas <i>hate</i> the living. They even have a slur they use to refer them: <i>Livers</i>.",
    health: 2,
    howToEarn: "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    id: "FP1_005",
    mechanics: ["STEALTH"],
    rarity: "EPIC",
    set: 1,
    rating: 3,
    text: "Stealth. At the start of your turn, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7730.png",
    tile: "FP1_005.png"
  },
  {
    name: "Nerubian Egg",
    artist: "Justin Thavirat",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1786,
    flavor: "Eggs are a good source of protein and Nerubians.",
    health: 2,
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_007",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 1,
    rating: 1,
    text: "Deathrattle: Summon a 4/4 Nerubian.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7738.png",
    tile: "FP1_007.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "13c72a28-6fb6-4588-9b26-fbc7b71b7b08",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "minion"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spectral Knight",
    artist: "Chris Rahn",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1789,
    flavor:
      "What do Faerie Dragons and Spectral Knights have in common?  They both love pasta!",
    health: 6,
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_008",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    rarity: "COMMON",
    set: 1,
    rating: 2,
    text: "Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "7751.png",
    tile: "FP1_008.png"
  },
  {
    name: "Deathlord",
    artist: "Ben Olson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1790,
    flavor: "'Rise from your grave!' - Kel'Thuzad",
    health: 8,
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_009",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "RARE",
    set: 1,
    rating: 2,
    text:
      "Taunt. Deathrattle: Your opponent puts a minion from their deck into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "7753.png",
    tile: "FP1_009.png"
  },
  {
    name: "Maexxna",
    artist: "Howard Lyon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 1791,
    elite: true,
    flavor:
      "Maexxna gets super mad when people introduce her as 'Maxina' or 'Maxxy'.",
    health: 8,
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_010",
    mechanics: ["POISONOUS"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 1,
    rating: 1,
    text: "Poisonous",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "7747.png",
    tile: "FP1_010.png"
  },
  {
    name: "Webspinner",
    artist: "Dan Brereton",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 1860,
    flavor: "Spider cocoons are like little piñatas!",
    health: 1,
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_011",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 1,
    rating: 4,
    text: "Deathrattle: Add a random Beast card to your hand.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "7741.png",
    tile: "FP1_011.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "c5ee42c3-90df-4ca6-8cb2-b5074535bb5f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "beast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sludge Belcher",
    artist: "Nate Bowden",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1793,
    flavor: "DO NOT GIVE HIM A ROOT BEER.",
    health: 5,
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_012",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "RARE",
    set: 1,
    rating: 4,
    text: "Taunt Deathrattle: Summon a 1/2 Slime with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "7749.png",
    tile: "FP1_012.png"
  },
  {
    name: "Kel'Thuzad",
    artist: "Chris Robinson",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 1794,
    elite: true,
    flavor:
      "Kel'Thuzad could not resist the call of the Lich King. Even when it's just a robo-call extolling the Lich King's virtues.",
    health: 8,
    howToEarn: "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    id: "FP1_013",
    rarity: "LEGENDARY",
    set: 1,
    rating: 4,
    text:
      "At the end of each turn, summon all friendly minions that died this turn.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "7742.png",
    tile: "FP1_013.png"
  },
  {
    name: "Stalagg",
    artist: "Dany Orizio",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1796,
    elite: true,
    flavor: "Stalagg want to write own flavor text.  'STALAGG AWESOME!'",
    health: 4,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_014",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 1,
    rating: 2,
    text: "Deathrattle: If Feugen also died this game, summon Thaddius.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7744.png",
    tile: "FP1_014.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "34e680a7-103c-46b1-bc6d-300b47c23dc4",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Feugen"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "5218aa69-6896-4ba0-9282-b62e9bf377e8",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Carnivorous Cube"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Feugen",
    artist: "Dany Orizio",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1797,
    elite: true,
    flavor: "Feugen is sad because everyone likes Stalagg better.",
    health: 7,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_015",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 1,
    rating: 1,
    text: "Deathrattle: If Stalagg also died this game, summon Thaddius.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7745.png",
    tile: "FP1_015.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "b17c4df5-ea73-4e4d-9390-00888ef67f70",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Stalagg"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "996ef7b9-5045-45d0-887b-e62820a669e6",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Carnivorous Cube"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Wailing Soul",
    artist: "Glenn Rane",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 1799,
    flavor: "This soul just <i>wails</i> on you. Dang, soul, let up already.",
    health: 5,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_016",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SILENCE"],
    set: 1,
    rating: 1,
    text: "Battlecry: Silence your other minions.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7758.png",
    tile: "FP1_016.png"
  },
  {
    name: "Nerub'ar Weblord",
    artist: "Alex Horley Orlandelli",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1800,
    flavor: "Weblords spend all day making giant trampoline parks.",
    health: 4,
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_017",
    mechanics: ["AURA"],
    rarity: "COMMON",
    referencedTags: ["BATTLECRY"],
    set: 1,
    rating: 1,
    text: "Minions with Battlecry cost (2) more.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "7755.png",
    tile: "FP1_017.png"
  },
  {
    name: "Duplicate",
    artist: "Alex Garner",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 1801,
    flavor: "The one time when duping cards won't get your account banned!",
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_018",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 1,
    rating: 3,
    text:
      "Secret: When a friendly minion dies, put 2 copies of it into your hand.",
    type: "SPELL",
    extra: ["SECRET", "VALUE"],
    imageUrl: "7732.png",
    tile: "FP1_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "738fc3e-0728-4736-9048-7fa9b9fb4802",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "VALUE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Poison Seeds",
    artist: "Brian Despain",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 1802,
    flavor:
      "'Poisonseed Bagel' is the least popular bagel at McTiggin's Druidic Bagel Emporium.",
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_019",
    rarity: "COMMON",
    set: 1,
    rating: 1,
    text: "Destroy all minions and summon 2/2 Treants to replace them.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "AOE"],
    imageUrl: "7726.png",
    tile: "FP1_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "271025ab-dec1-4e84-89b0-5e2891c7a5ef",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "MIN_GEN"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "1bf6d804-d39d-434a-b854-d60928b2f306",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Avenge",
    artist: "Zoltan & Gabor",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 1804,
    flavor:
      "Several paladins have joined together to deliver justice under the name 'Justice Force'.  Their lawyer talked them out of calling themselves the Justice League.",
    howToEarn: "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    id: "FP1_020",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 1,
    rating: 4,
    text:
      "Secret: When one of your minions dies, give a random friendly minion +3/+2.",
    type: "SPELL",
    extra: ["SECRET", "TEMPO"],
    imageUrl: "7729.png",
    tile: "FP1_020.png"
  },
  {
    name: "Death's Bite",
    artist: "Jim Nelson",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 1805,
    durability: 2,
    flavor: "'Take a bite outta Death.' - McScruff the Deathlord",
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_021",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 1,
    rating: 4,
    text: "Deathrattle: Deal 1 damage to all minions.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "AOE", "TEMPO"],
    imageUrl: "7734.png",
    tile: "FP1_021.png"
  },
  {
    name: "Voidcaller",
    artist: "Robb Shoberg",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 1806,
    flavor: "'Void!  Here, void!  Here, buddy!'",
    health: 4,
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_022",
    mechanics: ["DEATHRATTLE"],
    race: "DEMON",
    rarity: "COMMON",
    set: 1,
    rating: 3,
    text:
      "Deathrattle: Put a random Demon from your hand into the battlefield.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "7733.png",
    tile: "FP1_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "e8cbf886-8e60-45e2-b1f0-b6cf557cedbd",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DEMON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dark Cultist",
    artist: "Phroilan Gardner",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 1807,
    flavor:
      "The Cult of the Damned has found it's best not to mention their name when recruiting new cultists.",
    health: 4,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_023",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 1,
    rating: 4,
    text: "Deathrattle: Give a random friendly minion +3 Health.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "TEMPO", "FAST"],
    imageUrl: "7735.png",
    tile: "FP1_023.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "fdb833f3-14a2-4263-a694-334a67c09b67",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "FAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dark Cultist"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unstable Ghoul",
    artist: "Mike Nicholson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1808,
    flavor:
      "Filling your Ghouls with Rocket Fuel is all the rage at Necromancer school.",
    health: 3,
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_024",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "COMMON",
    set: 1,
    rating: 3,
    text: "Taunt. Deathrattle: Deal 1 damage to all minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE", "STALL"],
    imageUrl: "7757.png",
    tile: "FP1_024.png"
  },
  {
    name: "Reincarnate",
    artist: "Dan Scott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 1809,
    flavor:
      "It's like birth, except you're an adult and you were just dead a second ago.",
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_025",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 1,
    rating: 1,
    text: "Destroy a minion, then return it to life with full Health.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "7731.png",
    tile: "FP1_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "01519c9c-0774-4aaa-bc89-833907f39d46",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Anub'ar Ambusher",
    artist: "Nate Bowden",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 1810,
    flavor:
      "Originally he was called 'Anub'ar Guy who bounces a guy back to your hand', but it lacked a certain zing.",
    health: 5,
    howToEarn: "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    id: "FP1_026",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 1,
    rating: 2,
    text: "Deathrattle: Return a random friendly minion to your hand.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "7728.png",
    tile: "FP1_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f6ef536d-e9ae-4ca9-af7b-2ec990ba362b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "BATTLECRY"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Stoneskin Gargoyle",
    artist: "Matt Smith",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1861,
    flavor: "Stoneskin Gargoyles love freeze tag.",
    health: 4,
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_027",
    rarity: "COMMON",
    set: 1,
    rating: 1,
    text: "At the start of your turn, restore this minion to full Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7750.png",
    tile: "FP1_027.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "61e780fe-497e-4d44-89a6-ede450b42473",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "minion"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Undertaker",
    artist: "Jonboy Meyers",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1910,
    flavor:
      "In a world where you can run to a spirit healer and resurrect yourself, Undertakers do pretty light business.",
    health: 2,
    howToEarn: "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    id: "FP1_028",
    rarity: "COMMON",
    referencedTags: ["DEATHRATTLE"],
    set: 1,
    rating: 1,
    text: "Whenever you summon a minion with Deathrattle, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "7737.png",
    tile: "FP1_028.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "1e4c81df-1837-422f-9b7a-9a21e3286a87",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dancing Swords",
    artist: "Jon McConnell",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1913,
    flavor: "They like to dance to reggae.",
    health: 4,
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_029",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 1,
    rating: 2,
    text: "Deathrattle: Your opponent draws a card.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "7736.png",
    tile: "FP1_029.png"
  },
  {
    name: "Loatheb",
    artist: "Samwise",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1914,
    elite: true,
    flavor:
      "Loatheb used to be a simple Bog Beast.  This is why we need stricter regulations on mining and agriculture.",
    health: 5,
    howToEarn: "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    id: "FP1_030",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 1,
    rating: 4,
    text: "Battlecry: Enemy spells cost (5) more next turn.",
    type: "MINION",
    race: " ",
    extra: ["STALL", "TEMPO", "FAST"],
    imageUrl: "7746.png",
    tile: "FP1_030.png"
  },
  {
    name: "Baron Rivendare",
    artist: "Ralph Horsley",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 1915,
    elite: true,
    flavor:
      "There used to be five Horsemen but one of them left because a job opened up in the deadmines and the benefits were better.",
    health: 7,
    howToEarn: "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    id: "FP1_031",
    mechanics: ["AURA"],
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 1,
    rating: 1,
    text: "Your minions trigger their Deathrattles twice.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "7740.png",
    tile: "FP1_031.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "f014431f-7e6d-4bdb-b7ee-794f65ecd4ee",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              }
            ]
          }
        ]
      }
    ]
  }
];
