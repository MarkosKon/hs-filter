export const oneNightInKarazhan = [
  {
    name: "Cat Trick",
    artist: "Mike Sass",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 39160,
    flavor:
      "'I know some new tricks, a lot of good tricks. I will show them to you. Medivh will not mind at all if I do.'",
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_004",
    mechanics: ["SECRET"],
    rarity: "RARE",
    referencedTags: ["STEALTH"],
    set: 7,
    rating: 3,
    text:
      "Secret: After your opponent casts a spell, summon a 4/2 Panther with Stealth.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "42051.png",
    tile: "KAR_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "bcae2637-93d2-4b08-bf01-0511f7c2a52a",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "secret"
              },
              {
                property: "name",
                operation: "NOT_INCLUDED_IN",
                minValue: [
                  "Kezan Mystic",
                  "Eater of Secrets",
                  "Chief Inspector"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kindly Grandmother",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 39481,
    flavor: "'Goodness! What… abundant drool you have.'",
    health: 1,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_005",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 7,
    rating: 4,
    text: "Deathrattle: Summon a 3/2 Big Bad Wolf.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "42020.png",
    tile: "KAR_005.png"
  },
  {
    name: "Cloaked Huntress",
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 39492,
    flavor: "She's practically GIVING your secrets away!",
    health: 4,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_006",
    rarity: "COMMON",
    referencedTags: ["SECRET"],
    set: 7,
    rating: 3,
    text: "Your Secrets cost (0).",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "42050.png",
    tile: "KAR_006.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4abf813c-63fe-40bf-b8b6-0c99bcf62032",
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
    name: "Babbling Book",
    artist: "A.J. Nazzaro",
    attack: 1,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 39169,
    flavor:
      "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
    health: 1,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_009",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 7,
    rating: 4,
    text: "Battlecry: Add a random Mage spell to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42028.png",
    tile: "KAR_009.png"
  },
  {
    name: "Nightbane Templar",
    artist: "Luke Mancini",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 39477,
    flavor:
      "Originally joined to be Arcanagos’ Templar, but has to admit that ordering pizza has become waaaay easier.",
    health: 3,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_010",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 7,
    rating: 1,
    text: "Battlecry: If you're holding a Dragon, summon two 1/1 Whelps.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "42052.png",
    tile: "KAR_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8feaf85d-2d52-4dab-8d7e-99140bae28e1",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Pompous Thespian",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 39476,
    flavor:
      "Alas poor Annoy-o-Tron! A fellow of infinite jest, of most excellent fancy!",
    health: 2,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_011",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "42034.png",
    tile: "KAR_011.png"
  },
  {
    name: "Purify",
    artist: "Rafael Zanchetin",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 39468,
    flavor: "Even better than a hot shower with vigorous scrubbing!",
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_013",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    referencedTags: ["SILENCE"],
    set: 7,
    rating: 1,
    text: "Silence a friendly minion. Draw a card.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "42061.png",
    tile: "KAR_013.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "e554096d-643a-489b-8795-2a4d01931c8e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "can't attack"
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
    name: "Wicked Witchdoctor",
    artist: "Rafael Zanchetin",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 39190,
    flavor:
      "You can easily defeat her by either dealing 4 damage, or dropping a house on her.",
    health: 4,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_021",
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Whenever you cast a spell, summon a random basic Totem.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "42047.png",
    tile: "KAR_021.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "2c6bee34-75a7-4444-866e-8333971e0f4f",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 4
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "0af8d35a-931d-431b-bc31-668878a2660d",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "totem"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kara Kazham!",
    artist: "Jakub Kasper",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 39197,
    flavor: "This is what happens when you tell Khadgar to set the table.",
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_025",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Summon a 1/1 Candle, 2/2 Broom, and 3/3 Teapot.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "42033.png",
    tile: "KAR_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "dd9d317f-2c47-4b02-a71c-8a9fff8a265e",
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
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Protect the King!",
    artist: "Jim Nelson",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 39495,
    flavor: "Form ranks! Everyone into the King's Tuskarr Defense!",
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_026",
    playRequirements: {
      REQ_MINIMUM_ENEMY_MINIONS: 1,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 7,
    rating: 1,
    text: "For each enemy minion, summon a 1/1 Pawn with Taunt.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "42032.png",
    tile: "KAR_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "dc79a630-5660-45c9-8526-b0f48c8421bd",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Bolster"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fool's Bane",
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 39417,
    durability: 4,
    flavor: "A fool and his bane are soon parted.",
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_028",
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Unlimited attacks each turn. Can't attack heroes.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "42041.png",
    tile: "KAR_028.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "1ea5257b-e9be-425f-ad97-3eb8f4f4dca5",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "HEAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Runic Egg",
    artist: "A.J. Nazzaro",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 39433,
    flavor: "Oh man! Runic omelettes are the best!",
    health: 2,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_029",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 7,
    rating: 1,
    text: "Deathrattle: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "42065.png",
    tile: "KAR_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "bfcfb231-271a-48a2-b726-5a54c5e69311",
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
    name: "Pantry Spider",
    artist: "Dave Allsop",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 39207,
    flavor: "You have to admit, they make a cute couple.",
    health: 3,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_030a",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Battlecry: Summon a 1/3 Spider.",
    type: "MINION",
    extra: ["MIN_GEN"],
    imageUrl: "42053.png",
    tile: "KAR_030a.png"
  },
  {
    name: "Book Wyrm",
    artist: "Dave Allsop",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 39210,
    flavor:
      "His favorites are classic tragedies like 'The Hobbit' and 'Grendel'.",
    health: 6,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_033",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0,
      REQ_TARGET_MAX_ATTACK: 3
    },
    race: "DRAGON",
    rarity: "RARE",
    set: 7,
    rating: 1,
    text:
      "Battlecry: If you're holding a Dragon, destroy an enemy minion with 3 or less Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "42029.png",
    tile: "KAR_033.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e8e3a1c9-1273-445e-bee7-e3c2a955dedb",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Book Wyrm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Priest of the Feast",
    artist: "Paul Mafayon",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 39442,
    flavor: "Now that's a world champion cheesecake!",
    health: 6,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_035",
    rarity: "COMMON",
    set: 7,
    rating: 3,
    text: "Whenever you cast a spell, restore 3 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "42056.png",
    tile: "KAR_035.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "c3587542-4c65-4738-a5ae-c76315c64816",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Arcane Anomaly",
    artist: "Alex Aleksandrov",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 39215,
    flavor:
      "He used to get work as a Spatial Anomaly, but he got tired of having his polarity reversed.",
    health: 1,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_036",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 7,
    rating: 3,
    text: "Whenever you cast a spell, give this minion +1 Health.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "42043.png",
    tile: "KAR_036.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "0d86bcaa-1a78-4458-97d6-4ad807153a92",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Avian Watcher",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 39489,
    flavor: "He mostly watches light romantic comedies.",
    health: 6,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_037",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SECRET", "TAUNT"],
    set: 7,
    rating: 1,
    text: "Battlecry: If you control a Secret, gain +1/+1 and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42044.png",
    tile: "KAR_037.png"
  },
  {
    name: "Moat Lurker",
    artist: "Jerry Mascho",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 39465,
    flavor:
      "He really enjoys lurking and gets a lot of job satisfaction out of it.",
    health: 3,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_041",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 7,
    rating: 1,
    text: "Battlecry: Destroy a minion. Deathrattle: Resummon it.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42063.png",
    tile: "KAR_041.png"
  },
  {
    name: "Moroes",
    artist: "Sean McNally",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 39453,
    elite: true,
    flavor:
      "Moroes runs an army of stewards, but still ends up inflating the balloons himself.",
    health: 1,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_044",
    mechanics: ["STEALTH"],
    rarity: "LEGENDARY",
    set: 7,
    rating: 2,
    text: "Stealth At the end of your turn, summon a 1/1 Steward.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "42030.png",
    tile: "KAR_044.png"
  },
  {
    name: "Ivory Knight",
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 39439,
    flavor: "Do <i>NOT</i> call it a 'horse'.",
    health: 4,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_057",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 7,
    rating: 3,
    text:
      "Battlecry: Discover a spell. Restore Health to your hero equal to its Cost.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "42019.png",
    tile: "KAR_057.png"
  },
  {
    name: "The Curator",
    artist: "Wei Wang",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 39225,
    elite: true,
    flavor:
      "The Curator guards Azeroth’s deadliest creatures, but it’s secretly terrified of squirrels.",
    health: 6,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_061",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 7,
    rating: 1,
    text: "Taunt Battlecry: Draw a Beast, Dragon, and Murloc from your deck.",
    type: "MINION",
    extra: ["CARD_DRAW"],
    imageUrl: "42022.png",
    tile: "KAR_061.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "979c82a1-9430-4a6f-822f-4177805206a9",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "dragon"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "36046d71-9097-4886-979e-50a018f50f9c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "beast"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "7ee063b3-e198-437e-8bd8-ac901ff8e24f",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "murloc"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Netherspite Historian",
    artist: "Ralph Horsley",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 39554,
    flavor:
      "She can tell you all about the history of people not STANDING IN THE GREEN BEAM!",
    health: 3,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_062",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 7,
    rating: 1,
    text: "Battlecry: If you're holding a Dragon, Discover a Dragon.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42039.png",
    tile: "KAR_062.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ce59b471-d237-45dc-a4db-2552cbeab54e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spirit Claws",
    artist: "Ralph Horsley",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 39694,
    durability: 3,
    flavor:
      "They'll be MUCH easier to use once they add the spirit<i>thumb</i>.",
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_063",
    rarity: "COMMON",
    referencedTags: ["SPELLPOWER"],
    set: 7,
    rating: 1,
    text: "Has +2 Attack while you have Spell Damage.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "42042.png",
    tile: "KAR_063.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7e757783-ffb0-4f7e-a9ff-732a74049144",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "SPELLPOWER"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Menagerie Warden",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 39696,
    flavor:
      "Please? Can I keep him? I promise to clean his cage <i>every day</i>.",
    health: 5,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_065",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "COMMON",
    set: 7,
    rating: 1,
    text: "Battlecry: Choose a friendly Beast. Summon a copy of it.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "42059.png",
    tile: "KAR_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f0660609-ffe8-406c-b111-2c5ff6fafb4f",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Swashburglar",
    artist: "Zoltan Boros",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 39698,
    flavor: "Was almost named 'Swashb-AAAARRHHH-gler'",
    health: 1,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_069",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 7,
    rating: 4,
    text:
      "Battlecry: Add a random class card to your hand <i>(from your opponent's class).</i>",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "42046.png",
    tile: "KAR_069.png"
  },
  {
    name: "Ethereal Peddler",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 39700,
    flavor: "Yeah, sure. That Ragnaros 'fell off the back of a truck'.",
    health: 6,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_070",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 7,
    rating: 3,
    text:
      "Battlecry: If you're holding any non-Rogue class cards,  reduce their Cost by (2).",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "42023.png",
    tile: "KAR_070.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cd6d6325-160b-49bf-81e1-ab95d9da56e7",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "opponent's class"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "623cf168-bbc1-4573-94f8-0eb8bb739f93",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "another class"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Maelstrom Portal",
    artist: "Daria Tuzova",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 39712,
    flavor:
      "They bill this as a popular resort attraction, but they try and get your money up front.",
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_073",
    rarity: "RARE",
    set: 7,
    rating: 4,
    text: "Deal $1 damage to all enemy minions. Summon a random 1-Cost minion.",
    type: "SPELL",
    extra: ["AOE", "TEMPO"],
    imageUrl: "42045.png",
    tile: "KAR_073.png"
  },
  {
    name: "Moonglade Portal",
    artist: "Evgeniy Zaqumyenny",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 39714,
    flavor:
      "Ain't no party like a Moonglade party ‘cause a Moonglade party got bears.",
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_075",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 7,
    rating: 3,
    text: "Restore #6 Health. Summon a random 6-Cost minion.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "42040.png",
    tile: "KAR_075.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "e9083890-5388-4212-9d09-6e286260e92d",
            filters: [
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
    name: "Firelands Portal",
    artist: "Gustav Schmidt",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 39715,
    flavor:
      "Come to beautiful Firelands! Where it's <i>'Way nicer than the Abyssal Maw!'</i>",
    howToEarn: "Unlocked in the Prologue, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Prologue, in One Night in Karazhan.",
    id: "KAR_076",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 7,
    rating: 4,
    text: "Deal $5 damage. Summon a random 5-Cost minion.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "42025.png",
    tile: "KAR_076.png"
  },
  {
    name: "Silvermoon Portal",
    artist: "Jimmy Lo",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 39716,
    flavor: "What's Millhouse Manastorm doing in Silvermoon?",
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_077",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Give a minion +2/+2. Summon a random 2-Cost minion.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "42054.png",
    tile: "KAR_077.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "381f0f9f-7f01-41f7-915e-47eb51a38ae3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Malchezaar's Imp",
    artist: "Peter Stapleton",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 39740,
    flavor:
      "Malchezaar used to have an imp named Dobby working for him, but there was a tragic accident.",
    health: 3,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_089",
    race: "DEMON",
    rarity: "COMMON",
    set: 7,
    rating: 3,
    text: "Whenever you discard a card, draw a card.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "42027.png",
    tile: "KAR_089.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "f181f0d7-bba1-4f26-9fa2-e34626bbf0f2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Malchezaar's Imp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Ironforge Portal",
    artist: "Nate Bowden",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 39747,
    flavor:
      "Come to beautiful Ironforge! Where irons are forged and the forges are iron!",
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_091",
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Gain 4 Armor. Summon a random 4-Cost minion.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "42064.png",
    tile: "KAR_091.png"
  },
  {
    name: "Medivh's Valet",
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 39767,
    flavor:
      "'Magus Medivh sir, I've brought the flaming balloons, as you requested.'",
    health: 3,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_092",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_SECRETS: 1
    },
    rarity: "COMMON",
    referencedTags: ["SECRET"],
    set: 7,
    rating: 3,
    text: "Battlecry: If you control a Secret, deal 3 damage.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "42048.png",
    tile: "KAR_092.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "8a9f13b8-ffe1-4857-9297-b24a53593c95",
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
    name: "Deadly Fork",
    artist: "Konstantin Turovec",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 39822,
    flavor:
      "For a proper setting, place the deadly fork <i>after</i> the salad fork, but <i>before</i> the dinner fork.",
    health: 2,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_094",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Deathrattle: Add a 3/2 weapon to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42057.png",
    tile: "KAR_094.png"
  },
  {
    name: "Zoobot",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 39839,
    flavor: "The Murloc is taking the picture.",
    health: 3,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_095",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 7,
    rating: 2,
    text: "Battlecry: Give a random friendly Beast, Dragon, and Murloc +1/+1.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "42035.png",
    tile: "KAR_095.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "0780dd93-28a3-4f11-bd77-a24a0c3860f8",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "dragon"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "5d6f7554-caf4-49ef-a877-d01e616abe1c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "beast"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "63d5c08c-c366-45f2-9016-5c1bfd24126e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "murloc"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Prince Malchezaar",
    artist: "Joe Madureira & Grace Liu",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 39840,
    elite: true,
    flavor:
      "He was super excited to acquire Gorehowl at a garage sale!  Then super disappointed to find out it was a foam reproduction.",
    health: 6,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_096",
    race: "DEMON",
    rarity: "LEGENDARY",
    set: 7,
    rating: 2,
    text: "When the game starts, add 5 extra Legendary minions to your deck.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "42031.png",
    tile: "KAR_096.png"
  },
  {
    name: "Medivh, the Guardian",
    artist: "James Ryman",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 39841,
    elite: true,
    flavor:
      "If you think the party's great now, just wait 'til he invites the orcs over!",
    health: 7,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_097",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 7,
    rating: 4,
    text: "Battlecry: Equip Atiesh, Greatstaff of the Guardian.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "42036.png",
    tile: "KAR_097.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "0c013a70-016f-47b1-a5a5-17ef9803bdd9",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Barnes",
    artist: "Garrett Hanna",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 39941,
    elite: true,
    flavor:
      "He used to play every part, until Moroes confiscated his Orb of Deception.",
    health: 4,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_114",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 7,
    rating: 3,
    text: "Battlecry: Summon a 1/1 copy of a random minion in your deck.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "42021.png",
    tile: "KAR_114.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "db7ef304-795d-4126-a48d-2547ffc6ec86",
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
    name: "Onyx Bishop",
    artist: "Arthur Gimaldinov",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 39374,
    flavor: "B4 is a nice place to visit, but he wouldn't want to live there.",
    health: 4,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_204",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 7,
    rating: 1,
    text: "Battlecry: Summon a friendly minion that died this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42058.png",
    tile: "KAR_204.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "98f1f367-aca3-4c09-9322-9ad407b4e954",
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
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Silverware Golem",
    artist: "Daren Bader",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 39380,
    flavor: "From the secret research labs of the Swiss Army.",
    health: 3,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_205",
    mechanics: ["InvisibleDeathrattle"],
    rarity: "RARE",
    set: 7,
    rating: 2,
    text: "If you discard this minion, summon it.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "42037.png",
    tile: "KAR_205.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "3fb6e48b-2982-47a7-8eab-895a1f2c6eca",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Silverware Golem"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Enchanted Raven",
    artist: "Daria Tuzova",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 39350,
    flavor: "Once upon a midnight restive, Medivh pondered, feeling festive!",
    health: 2,
    howToEarn: "Unlocked in the Prologue, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Prologue, in One Night in Karazhan.",
    id: "KAR_300",
    race: "BEAST",
    rarity: "COMMON",
    set: 7,
    rating: 3,
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "42024.png",
    tile: "KAR_300.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a0b2792d-bda3-4f48-b2dc-0321a7e54bf5",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Menagerie Magician",
    artist: "Garrett Hanna",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 39269,
    flavor:
      "Just between us, if things get tight the Menagerie Magician position will probably be the first to go.",
    health: 4,
    howToEarn: "Unlocked in the Menagerie, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    id: "KAR_702",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 7,
    rating: 1,
    text: "Battlecry: Give a random friendly Beast, Dragon, and Murloc +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "42055.png",
    tile: "KAR_702.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "5793e008-c243-476a-90cc-ef39e3a45051",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "dragon"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "663c655d-522a-4bbb-ae56-f39bb27be6e0",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "beast"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "79dd8f9e-5afd-4f2b-b718-ffea78f7566a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "MATCH",
                minValue: "murloc"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Arcanosmith",
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 39491,
    flavor:
      "He’s really just a Blacksmith, but he thought the fancy title would bring in more business.",
    health: 2,
    howToEarn: "Unlocked in the Parlor, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    id: "KAR_710",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 7,
    rating: 1,
    text: "Battlecry: Summon a 0/5 minion with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42062.png",
    tile: "KAR_710.png"
  },
  {
    name: "Arcane Giant",
    artist: "Dan Scott",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 12,
    dbfId: 39426,
    flavor:
      "Claims to be drawn to Karazhan because of the ley lines. Actually, just loves Moroes’ cooking.",
    health: 8,
    howToEarn: "Unlocked in the Opera, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Opera, in One Night in Karazhan.",
    id: "KAR_711",
    rarity: "EPIC",
    set: 7,
    rating: 2,
    text: "Costs (1) less for each spell you've cast this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "42049.png",
    tile: "KAR_711.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "e2179c0d-9c7d-495a-9e23-260b9a37a57a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Violet Illusionist",
    artist: "Eric Braddock",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 39313,
    flavor: "She’s much more cheerful after losing the ‘n’ in her name.",
    health: 3,
    howToEarn: "Unlocked in the Spire, in One Night in Karazhan.",
    howToEarnGolden:
      "Crafting unlocked in the Spire, in One Night in Karazhan.",
    id: "KAR_712",
    mechanics: ["AURA"],
    rarity: "COMMON",
    referencedTags: ["IMMUNE"],
    set: 7,
    rating: 2,
    text: "During your turn, your hero is Immune.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "42060.png",
    tile: "KAR_712.png"
  }
];
