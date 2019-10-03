export const journeyToUngoro = [
  {
    name: "Pterrordax Hatchling",
    artist: "Arthur Bozonnet",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41076,
    flavor: "Aww.  So cute.  Want to feed him another finger?",
    health: 2,
    id: "UNG_001",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: Adapt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55591.png",
    tile: "UNG_001.png"
  },
  {
    name: "Volcanosaur",
    artist: "Daren Bader",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 41120,
    flavor: "Always fun to say out loud 'VOL-CA-NO-SAUUUR!'",
    health: 6,
    id: "UNG_002",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 3,
    text: "Battlecry: Adapt, then Adapt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55487.png",
    tile: "UNG_002.png"
  },
  {
    name: "Dinosize",
    artist: "Andrew Hou",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 8,
    dbfId: 41130,
    flavor: "Comes with fries and a drink.",
    id: "UNG_004",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 9,
    rating: 2,
    text: "Set a minion's Attack and Health to 10.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "55455.png",
    tile: "UNG_004.png"
  },
  {
    name: "Ravasaur Runt",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41137,
    flavor:
      "Doesn't like to adapt unless others are watching. Some minions are such show-offs.",
    health: 2,
    id: "UNG_009",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: If you control at least 2 other minions, Adapt.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55521.png",
    tile: "UNG_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3d0b39df-2903-484d-937a-9e534625b999",
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
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "bb0a5818-1187-4f26-8e39-839b2e54a951",
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
                minValue: 4
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "summon"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sated Threshadon",
    artist: "James Ryman",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 41138,
    flavor: "Bet you can't eat just one murloc!",
    health: 7,
    id: "UNG_010",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 1,
    text: "Deathrattle: Summon three 1/1 Murlocs.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55534.png",
    tile: "UNG_010.png"
  },
  {
    name: "Hydrologist",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 41139,
    flavor:
      "Murloc hydrologists are pretty rare.  Most murloc undergrads pick computer science.",
    health: 2,
    id: "UNG_011",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "COMMON",
    referencedTags: ["DISCOVER", "SECRET"],
    set: 9,
    rating: 3,
    text: "Battlecry: Discover a Secret.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55479.png",
    tile: "UNG_011.png"
  },
  {
    name: "Sunkeeper Tarim",
    artist: "Mike Azevedo",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 41145,
    elite: true,
    flavor: "Ironically, his favorite number is 4.",
    health: 7,
    id: "UNG_015",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 4,
    text: "Taunt Battlecry: Set all other minions' Attack and Health to 3.",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL", "BUFF", "FAST"],
    imageUrl: "55462.png",
    tile: "UNG_015.png"
  },
  {
    name: "Flame Geyser",
    artist: "Chris Seaman",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 41151,
    flavor: "Oh, a wise geyser eh?",
    id: "UNG_018",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deal $2 damage. Add a 1/2 Elemental to your hand.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "55465.png",
    tile: "UNG_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "92632587-def5-4dc8-92ec-646274cd4d74",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Air Elemental",
    artist: "Evgeniy Dlinnov",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 41152,
    faction: "HORDE",
    flavor: "Makes a mean puff pastry.",
    health: 1,
    id: "UNG_019",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55549.png",
    tile: "UNG_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "fcbc1e28-f979-4d3d-8663-07bc5f106407",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "elemental"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Arcanologist",
    artist: "Eva Widermann",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 41153,
    flavor: "What did you draw? Shhhh… it’s a secret.",
    health: 3,
    id: "UNG_020",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["SECRET"],
    set: 9,
    rating: 3,
    text: "Battlecry: Draw a Secret from your deck.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "55450.png",
    tile: "UNG_020.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cb74a42a-7d88-4775-b199-a8b855099007",
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
    name: "Steam Surger",
    artist: "Jakub Kasber",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 41154,
    flavor: "Explorers nicknamed him the Teapot Elemental.",
    health: 4,
    id: "UNG_021",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 9,
    rating: 1,
    text:
      "Battlecry: If you played an Elemental last turn, add a 'Flame Geyser' to your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55585.png",
    tile: "UNG_021.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "34e0c36d-c7be-4f71-8766-950608901f86",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Steam Surger"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mirage Caller",
    artist: "Hideaki Takamura",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 41155,
    flavor: "Mirage is actually the name of its long-lost cat.",
    health: 3,
    id: "UNG_022",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 9,
    rating: 2,
    text: "Battlecry: Choose a friendly minion. Summon a 1/1 copy of it.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "55492.png",
    tile: "UNG_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "29500911-5516-4a81-b5ab-01e917134cd6",
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
    name: "Mana Bind",
    artist: "Izzy Hoover",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 41158,
    flavor: "Nice spell.  YOINK!",
    id: "UNG_024",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text:
      "Secret: When your opponent casts a spell, add a copy to your hand that costs (0).",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "55489.png",
    tile: "UNG_024.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "29a3843b-0bb4-408a-b833-c9cd2ba5adfd",
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
    name: "Volcano",
    artist: "Gustav Schmidt",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 41159,
    flavor: "Many young shaman summon a volcano as their first school project.",
    id: "UNG_025",
    mechanics: ["OVERLOAD", "ImmuneToSpellpower"],
    overload: 2,
    rarity: "RARE",
    set: 9,
    rating: 3,
    text: "Deal $15 damage randomly split among all minions. Overload: (2)",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "52581.png",
    tile: "UNG_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "a7b66845-3206-4afd-9707-019780b0b68e",
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
    name: "Pyros",
    artist: "Mike Sass",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 41162,
    elite: true,
    flavor:
      "If you strike her down, she shall become more powerful than you can possibly… well, she'll become a 6/6 anyways.",
    health: 2,
    id: "UNG_027",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 9,
    rating: 3,
    text: "Deathrattle: Return this to your hand as a 6/6 that costs (6).",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "52582.png",
    tile: "UNG_027.png"
  },
  {
    name: "Open the Waygate",
    artist: "Rafael Zanchetin",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 41168,
    elite: true,
    flavor:
      "Although powerful, the incantation is simple. It’s just a jump to the left, and then a step to the right.",
    id: "UNG_028",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text:
      "Quest: Cast 6 spells that didn't start in your deck. Reward: Time Warp.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55551.png",
    tile: "UNG_028.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "8baef031-513c-4f05-86e4-1adfe34994c6",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "add.*random.*spell|add a.*spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadow Visions",
    artist: "Nutchapol Thitinunthakorn",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 41169,
    flavor: "This one’s a bird. And here’s a bunny!",
    id: "UNG_029",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 4,
    text: "Discover a copy of a spell in your deck.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "55463.png",
    tile: "UNG_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "2052cdf6-b1fa-4c06-8846-ec5a0750452f",
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
    name: "Binding Heal",
    artist: "Tyler Walpole",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 41170,
    flavor: "By accepting this healing, you agree to the following terms…",
    id: "UNG_030",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Restore #5 Health to a minion and your hero.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "55540.png",
    tile: "UNG_030.png"
  },
  {
    name: "Crystalline Oracle",
    artist: "Arthur Bozonnet",
    attack: 1,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 41173,
    faction: "HORDE",
    flavor:
      "Being made of light has its disadvantages, but at least it's always looking on the bright side.",
    health: 1,
    id: "UNG_032",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 9,
    rating: 3,
    text:
      "Deathrattle: Copy a card from your opponent's deck  and add it to your hand.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55461.png",
    tile: "UNG_032.png"
  },
  {
    name: "Radiant Elemental",
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 41176,
    flavor: "It's a literal lava lamp!",
    health: 3,
    id: "UNG_034",
    mechanics: ["AURA"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 4,
    text: "Your spells cost (1) less.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "55543.png",
    tile: "UNG_034.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d324bfec-ed91-4099-8f70-3dab9d3f5a84",
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
          }
        ]
      }
    ]
  },
  {
    name: "Curious Glimmerroot",
    artist: "Servando Lupini",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 41177,
    flavor:
      "George promised to be good. But it's easy for little Glimmerroots to forget.",
    health: 3,
    id: "UNG_035",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "EPIC",
    set: 9,
    rating: 4,
    text:
      "Battlecry: Look at 3 cards. Guess which one started in your opponent's deck to get a copy of it.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "55486.png",
    tile: "UNG_035.png"
  },
  {
    name: "Tortollan Shellraiser",
    artist: "Garrett Hanna",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 41180,
    flavor: "A hero... In a half-shell.",
    health: 6,
    id: "UNG_037",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt Deathrattle: Give a random  friendly minion +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55446.png",
    tile: "UNG_037.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9d19dc16-c3a8-4aee-b3fa-a3b394d6f7b9",
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
    name: "Ravenous Pterrordax",
    artist: "Slawomir Maniak",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 41191,
    flavor:
      "For better results, feed your pterrordax low-fat, high-fiber minions.",
    health: 4,
    id: "UNG_047",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: Destroy a friendly minion to Adapt twice.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "55510.png",
    tile: "UNG_047.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f33fc8b4-49de-4679-89d4-722e9250a226",
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
                minValue: 5
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "summon"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tar Lurker",
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 41194,
    flavor: "Hi, Tar here. Long time lurking, first time taunting…",
    health: 7,
    id: "UNG_049",
    mechanics: ["TAUNT"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt Has +3 Attack during your opponent's turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55578.png",
    tile: "UNG_049.png"
  },
  {
    name: "Razorpetal Volley",
    artist: "Chanchai Luechaiwattanasopon",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 41207,
    flavor:
      "The result of a fundamental misunderstanding of the phrase 'flower power'.",
    id: "UNG_057",
    rarity: "COMMON",
    set: 9,
    rating: 1,
    text: "Add two Razorpetals to your hand that deal 1 damage.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "55580.png",
    tile: "UNG_057.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9fbc3fd7-3b7c-45ab-a2c6-bb3b3f1d690b",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "whenever.*cast.*spell"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Burgly Bully"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Razorpetal Lasher",
    artist: "Sojin Hwang",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 41208,
    flavor: "The reason why there are no zombies in Un'goro.",
    health: 2,
    id: "UNG_058",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Battlecry: Add a Razorpetal to your hand that deals 1 damage.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55579.png",
    tile: "UNG_058.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e2e3a26c-6147-4523-86c0-408ac2d4da6b",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "whenever.*cast.*spell"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Burgly Bully"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mimic Pod",
    artist: "Zoltan Boros",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 41212,
    flavor: "Jinx!",
    id: "UNG_060",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 9,
    rating: 3,
    text: "Draw a card, then add a copy of it to your hand.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "55483.png",
    tile: "UNG_060.png"
  },
  {
    name: "Obsidian Shard",
    artist: "Konstantin Turovec",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 41213,
    durability: 3,
    flavor:
      "You know you’re a Rogue when a sharp rock makes you go “Ooh!  Dagger!”",
    id: "UNG_061",
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Costs (1) less for each card you've played from another class.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "55587.png",
    tile: "UNG_061.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0cdc9c43-7654-4aa6-8fe9-bc5b50b0cc0f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "opponent's class"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "0305e024-62f9-40b1-84c5-d95432c9e3fe",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Ethereal Peddler"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "efcc5daa-7663-4752-b961-7cc3a966bd1c",
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
    name: "Biteweed",
    artist: "Craig Elliot",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 41216,
    flavor: "AKA Edwin VanLeaf.",
    health: 1,
    id: "UNG_063",
    mechanics: ["COMBO"],
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "Combo: Gain +1/+1 for each other card you've played this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55576.png",
    tile: "UNG_063.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "08afea7b-211a-4e39-9b8b-ba799d196f9d",
            filters: [
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Biteweed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Vilespine Slayer",
    artist: "Efrem Palacios",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 41217,
    flavor: "'Cause slayers gonna slay, slay, slay, slay, slay.",
    health: 4,
    id: "UNG_064",
    mechanics: ["COMBO"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_FOR_COMBO: 0
    },
    rarity: "EPIC",
    set: 9,
    rating: 4,
    text: "Combo: Destroy a minion.",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL", "SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "55490.png",
    tile: "UNG_064.png"
  },
  {
    name: "Sherazin, Corpse Flower",
    artist: "Matt Dixon",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 41218,
    elite: true,
    flavor: "A Tortollan gardener's worst nightmare.",
    health: 3,
    id: "UNG_065",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 2,
    text:
      "Deathrattle: Go dormant. Play 4 cards in a turn to revive this minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55457.png",
    tile: "UNG_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "03caaee2-aa37-42ef-b426-d23878982b57",
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
          }
        ]
      }
    ]
  },
  {
    name: "The Caverns Below",
    artist: "James Ryman",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 41222,
    elite: true,
    flavor: "Why can't it ever be The Taverns Below?",
    id: "UNG_067",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Play five minions with the same name. Reward: Crystal Core.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55481.png",
    tile: "UNG_067.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "5fde1880-8895-48ea-ae54-ee108ecd4fe3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "BATTLECRY"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 3,
            id: "941a32fb-f0ab-492b-855a-664932029e0d",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "ECHO"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "55465517-7d23-46c4-8526-9753099da0c3",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Sonya Shadowdancer"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "7e6af4ec-6a84-4b04-957f-cc4cfc5df89f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Shadowstep"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tol'vir Stoneshaper",
    artist: "Mike Azevedo",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41241,
    flavor: "He spends a lot of time keeping himself in stoneshape.",
    health: 5,
    id: "UNG_070",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    set: 9,
    rating: 2,
    text:
      "Battlecry: If you played an Elemental last turn, gain  Taunt and Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55478.png",
    tile: "UNG_070.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "c733c599-4723-4b74-b8d0-fdaa084b863d",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Giant Mastodon",
    artist: "Chanchai Luechaiwattanasopon",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 41242,
    flavor: "Still salty about it not being the 'Year of the Mastodon.'",
    health: 10,
    id: "UNG_071",
    mechanics: ["TAUNT"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55593.png",
    tile: "UNG_071.png"
  },
  {
    name: "Stonehill Defender",
    artist: "Mark Gibbons",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41243,
    flavor:
      "Briefly tried stand-up comedy under the name 'Stonehill Offender', but turtles are just too thin-skinned.",
    health: 4,
    id: "UNG_072",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 4,
    text: "Taunt Battlecry: Discover a Taunt minion.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "55529.png",
    tile: "UNG_072.png"
  },
  {
    name: "Rockpool Hunter",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41245,
    flavor: "Loves crab meat. Fears crabs.",
    health: 3,
    id: "UNG_073",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 14
    },
    race: "MURLOC",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Battlecry: Give a friendly Murloc +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55574.png",
    tile: "UNG_073.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "46eab11f-3c51-4031-9bcb-46aa93a963b0",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MURLOC"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Rockpool Hunter"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Vicious Fledgling",
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41247,
    flavor: "A youngster who is truly hungry for self-improvement.",
    health: 3,
    id: "UNG_075",
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 3,
    text: "After this minion attacks a hero, Adapt.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55584.png",
    tile: "UNG_075.png"
  },
  {
    name: "Eggnapper",
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41249,
    flavor:
      "Often misunderstood, it's just that he likes to use the eggs as pillows.",
    health: 1,
    id: "UNG_076",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deathrattle: Summon two 1/1 Raptors.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "55595.png",
    tile: "UNG_076.png"
  },
  {
    name: "Tortollan Forager",
    artist: "Jerry Mascho",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 41252,
    flavor:
      "In the Tortollan tongue, Un’goro is known as the “Land of the Lost and Found.”",
    health: 2,
    id: "UNG_078",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Battlecry: Add a random minion with 5 or more Attack to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "55547.png",
    tile: "UNG_078.png"
  },
  {
    name: "Frozen Crusher",
    artist: "Konstantin Turovec",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 41253,
    flavor: "Goes by the online handle 'KoolKrusher99.'",
    health: 8,
    id: "UNG_079",
    race: "ELEMENTAL",
    rarity: "RARE",
    referencedTags: ["FREEZE"],
    set: 9,
    rating: 2,
    text: "After this minion attacks, Freeze it.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55560.png",
    tile: "UNG_079.png"
  },
  {
    name: "Thunder Lizard",
    artist: "Hideaki Takamura",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41257,
    flavor: "What? THUNDER LIZARD is adapting!",
    health: 3,
    id: "UNG_082",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: If you played an Elemental last turn, Adapt.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55506.png",
    tile: "UNG_082.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1bc1b475-a545-444e-8955-1b89837fefa5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Devilsaur Egg",
    artist: "Arthur Bozonnet",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41259,
    flavor: "A key ingredient in all discerning Funnel Cake recipes.",
    health: 3,
    id: "UNG_083",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Deathrattle: Summon a 5/5 Devilsaur.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "55567.png",
    tile: "UNG_083.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "3eb400d8-5b31-41f7-86fa-a81a4f9ead92",
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
    name: "Fire Plume Phoenix",
    artist: "Dan Scott",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41260,
    flavor: "This is what happens when you use a volcano as a bird bath.",
    health: 3,
    id: "UNG_084",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Battlecry: Deal 2 damage.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55563.png",
    tile: "UNG_084.png"
  },
  {
    name: "Emerald Hive Queen",
    artist: "Rafael Zanchetin",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 41261,
    faction: "HORDE",
    flavor: "She rules the emerald hive at the end of the yellow brick trail.",
    health: 3,
    id: "UNG_085",
    mechanics: ["AURA"],
    race: "BEAST",
    rarity: "EPIC",
    set: 9,
    rating: 2,
    text: "Your minions cost (2) more.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55575.png",
    tile: "UNG_085.png"
  },
  {
    name: "Giant Anaconda",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 41262,
    flavor: "Must be something it ate.",
    health: 3,
    id: "UNG_086",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "Deathrattle: Summon a minion from your hand with 5 or more Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55546.png",
    tile: "UNG_086.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "071328ef-4840-42d8-8bbf-162c705d501c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
                operation: "GREATER_THAN",
                minValue: 4
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Giant Anaconda"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bittertide Hydra",
    artist: "Mark Gibbons",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 41263,
    flavor:
      "It's actually only the middle head that's bitter. The others are sweet and spicy.",
    health: 8,
    id: "UNG_087",
    race: "BEAST",
    rarity: "EPIC",
    set: 9,
    rating: 3,
    text: "Whenever this minion takes damage, deal 3 damage to your hero.",
    type: "MINION",
    extra: ["DAMAGE", "TEMPO", "FAST"],
    imageUrl: "55570.png",
    tile: "UNG_087.png"
  },
  {
    name: "Tortollan Primalist",
    artist: "Zoltan Boros",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 41264,
    flavor: "I see pizza in my future.",
    health: 4,
    id: "UNG_088",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 1,
    text: "Battlecry: Discover a spell and cast it with random targets.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55515.png",
    tile: "UNG_088.png"
  },
  {
    name: "Gentle Megasaur",
    artist: "Brian Despain",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41265,
    flavor:
      "'Low, low rents! Must enjoy a nomadic lifestyle. Quasi-sentient, bipedal, amphibious humanoids ONLY!'",
    health: 4,
    id: "UNG_089",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "EPIC",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: Adapt your Murlocs.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "52595.png",
    tile: "UNG_089.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "28ad0033-5dd4-4456-9328-1e6d15111439",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MURLOC"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Charged Devilsaur",
    artist: "Luke Mancini",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 41286,
    flavor: "What happens when a dinosaur mixes soda and pop rocks.",
    health: 7,
    id: "UNG_099",
    mechanics: ["BATTLECRY", "CHARGE"],
    race: "BEAST",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "Charge Battlecry: Can't attack heroes this turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55537.png",
    tile: "UNG_099.png"
  },
  {
    name: "Verdant Longneck",
    artist: "Zoltan Boros",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 40971,
    flavor: "Always sticking its neck into other people’s business.",
    health: 4,
    id: "UNG_100",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: Adapt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "52583.png",
    tile: "UNG_100.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "21a6e3d8-2026-4f11-b6d0-813e5b0d3ee8",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Verdant Longneck"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 3,
            id: "8131add0-0af3-49bc-a494-0a946a3e29bc",
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
    name: "Shellshifter",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 40973,
    flavor: "Master of the Three Shell Monte.",
    health: 3,
    id: "UNG_101",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    referencedTags: ["STEALTH", "TAUNT"],
    set: 9,
    rating: 3,
    text:
      "Choose One - Transform into a 5/3 with Stealth; or a 3/5 with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55544.png",
    tile: "UNG_101.png"
  },
  {
    name: "Evolving Spores",
    artist: "Grace Liu",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 40991,
    flavor:
      "The most powerful mushrooms are commonly found in boxes marked with '?'.",
    id: "UNG_103",
    rarity: "RARE",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Adapt your minions.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "55513.png",
    tile: "UNG_103.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "63340360-47da-478a-b8ab-8a9316f7c480",
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
    name: "Earthen Scales",
    artist: "Mike Azevedo",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 41081,
    flavor:
      "You can make your own Earthen Scales at home. Step 1: Roll around in the dirt. Step 2: Magic.",
    id: "UNG_108",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 9,
    rating: 2,
    targetingArrowText: "Give +1/+1.",
    text: "Give a friendly minion +1/+1, then gain Armor equal to its Attack.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "55548.png",
    tile: "UNG_108.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "b591e2a8-3e1b-4897-bc05-ff2d0c8ec369",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
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
    name: "Elder Longneck",
    artist: "Trent Kaniuga",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 41086,
    entourage: [
      "UNG_999t10",
      "UNG_999t2",
      "UNG_999t3",
      "UNG_999t4",
      "UNG_999t5",
      "UNG_999t6",
      "UNG_999t7",
      "UNG_999t8",
      "UNG_999t13",
      "UNG_999t14"
    ],
    flavor: "And so the bartender says, “Why the long neck?”",
    health: 1,
    id: "UNG_109",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 1,
    text: "Battlecry: If you're holding a minion with 5 or more Attack, Adapt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55541.png",
    tile: "UNG_109.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8af0c43b-2857-4b9d-a7ca-6a18cd2fe911",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
                operation: "GREATER_THAN",
                minValue: 4
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Elder Longneck"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Living Mana",
    artist: "Matt Gaser",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 41094,
    flavor: "If you truly love your mana, set it free.",
    id: "UNG_111",
    rarity: "EPIC",
    set: 9,
    rating: 3,
    text:
      "Transform your Mana Crystals into 2/2 minions. Recover the mana when they die.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "55491.png",
    tile: "UNG_111.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "61155275-334d-4c17-b63a-9e7fb13021ed",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
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
    name: "Bright-Eyed Scout",
    artist: "Trent Kaniuga",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41096,
    flavor: "Also inordinately excited for cupcakes.",
    health: 4,
    id: "UNG_113",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 9,
    rating: 2,
    text: "Battlecry: Draw a card. Change its Cost to (5).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55590.png",
    tile: "UNG_113.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "add8f11e-00fc-4b35-ae91-b56b2ea89b09",
            filters: [
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 6
              }
            ]
          }
        ]
      },
      {
        name: "Slightly less minions",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "66130ae4-822f-499c-a963-81711640b675",
            filters: [
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Jungle Giants",
    artist: "Konstantin Turovec",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 41099,
    elite: true,
    flavor:
      "Forming the Golakka Crater was the end of Barnabus' disastrous career as a dancer.",
    id: "UNG_116",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Summon 5 minions with 5 or more Attack. Reward: Barnabus.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55538.png",
    tile: "UNG_116.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "9510e0a3-8645-4c9d-bb13-da9c023b8860",
            filters: [
              {
                property: "name",
                operation: "MATCH",
                minValue: "oaken summons|cursed disciple"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 6,
            id: "84bff91e-644b-41e7-8012-28e51e17c1a2",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
                operation: "GREATER_THAN",
                minValue: 4
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "c246a843-a6e3-472f-82af-879360e09e83",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "CARD_DRAW"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Primalfin Totem",
    artist: "Jakub Kasber",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 41105,
    flavor:
      "Emits a sound only murlocs can hear, which is good because it’s REALLY annoying.",
    health: 3,
    id: "UNG_201",
    race: "TOTEM",
    rarity: "RARE",
    set: 9,
    rating: 3,
    text: "At the end of your turn, summon a 1/1 Murloc.",
    type: "MINION",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "55596.png",
    tile: "UNG_201.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "daf946e4-3e2e-41eb-82a8-52f5d422032b",
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
    name: "Fire Plume Harbinger",
    artist: "Mike Azevedo",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 41107,
    flavor: "Good for summoning elementals. Great for making s'mores.",
    health: 1,
    id: "UNG_202",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Battlecry: Reduce the Cost of Elementals in your hand by (1).",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55557.png",
    tile: "UNG_202.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e5c197f0-0a70-49ce-b9a4-9b7051cc05f5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Glacial Shard",
    artist: "Paul Mafayon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 41111,
    flavor: "Ice, ice, baby!",
    health: 1,
    id: "UNG_205",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "ELEMENTAL",
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 9,
    rating: 3,
    targetingArrowText: "Freeze an enemy.",
    text: "Battlecry: Freeze an enemy.",
    type: "MINION",
    extra: ["STALL", "FAST"],
    imageUrl: "55485.png",
    tile: "UNG_205.png"
  },
  {
    name: "Stone Sentinel",
    artist: "Rudy Siswanto",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 7,
    dbfId: 41116,
    flavor: "He and his friends just want to rock out.",
    health: 4,
    id: "UNG_208",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    race: "ELEMENTAL",
    rarity: "EPIC",
    referencedTags: ["TAUNT"],
    set: 9,
    rating: 1,
    text:
      "Battlecry: If you played an Elemental last turn, summon two 2/3 Elementals with Taunt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55467.png",
    tile: "UNG_208.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d3e1638a-a0c8-4ba6-861e-e395a7bf6cdc",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Stone Sentinel"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 8
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kalimos, Primal Lord",
    artist: "James Ryman",
    attack: 7,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 8,
    dbfId: 41331,
    elite: true,
    flavor: "All that's missing is a little heart.",
    health: 7,
    id: "UNG_211",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 9,
    rating: 2,
    text:
      "Battlecry: If you played an Elemental last turn, cast an Elemental Invocation.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55473.png",
    tile: "UNG_211.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "2a8c90bf-e29a-4f1a-ac6d-811794ea03dd",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Terrorscale Stalker",
    artist: "Chris Seaman",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 41304,
    flavor: "Likes to scare his friends half to death.",
    health: 3,
    id: "UNG_800",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 9,
    rating: 2,
    text: "Battlecry: Trigger a friendly minion's Deathrattle.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "55505.png",
    tile: "UNG_800.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d691648b-1ceb-484a-bf57-1b20f8291c42",
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
                minValue: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Nesting Roc",
    artist: "Paul Mafayon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 41305,
    flavor:
      "Roc eggs are great in omelettes, sandwiches, and as bait to turn poachers into bird food.",
    health: 7,
    id: "UNG_801",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 9,
    rating: 2,
    text: "Battlecry: If you control at least 2 other minions, gain Taunt.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55573.png",
    tile: "UNG_801.png"
  },
  {
    name: "Emerald Reaver",
    artist: "Rafael Zanchetin",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 41309,
    flavor: "Not to be confused with clubbing enthusiast Emerald Raver.",
    health: 1,
    id: "UNG_803",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Battlecry: Deal 1 damage to each hero.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55568.png",
    tile: "UNG_803.png"
  },
  {
    name: "Ultrasaur",
    artist: "Laurel Austin",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 41315,
    flavor: "Evolved the really long neck to spy on its neighbors.",
    health: 14,
    id: "UNG_806",
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 1,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55583.png",
    tile: "UNG_806.png"
  },
  {
    name: "Golakka Crawler",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41316,
    flavor: "Universally adored by both control decks and ninjas.",
    health: 3,
    id: "UNG_807",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 23
    },
    race: "BEAST",
    rarity: "RARE",
    set: 9,
    rating: 3,
    text: "Battlecry: Destroy a Pirate and gain +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55453.png",
    tile: "UNG_807.png"
  },
  {
    name: "Stubborn Gastropod",
    artist: "Aaron Miller",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41318,
    flavor: "Stubbornly pursuing its dream to become Azeroth's fastest animal!",
    health: 2,
    id: "UNG_808",
    mechanics: ["POISONOUS", "TAUNT"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt   Poisonous",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55532.png",
    tile: "UNG_808.png"
  },
  {
    name: "Fire Fly",
    artist: "Evgeniy Dlinnov",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 41323,
    faction: "ALLIANCE",
    flavor: "Archnemeses: small children with glass jars.",
    health: 2,
    id: "UNG_809",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Battlecry: Add a 1/2 Elemental to your hand.",
    type: "MINION",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "55466.png",
    tile: "UNG_809.png"
  },
  {
    name: "Stegodon",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41324,
    flavor:
      "Level 40 Tortollan Paladins quest to tame a Stegodon.  There are no level 41 Tortollan Paladins.",
    health: 6,
    id: "UNG_810",
    mechanics: ["TAUNT"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55519.png",
    tile: "UNG_810.png"
  },
  {
    name: "Sabretooth Stalker",
    artist: "Alex Horley Orlandelli",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 41415,
    flavor: "It's gotten a bit long in the tooth.",
    health: 2,
    id: "UNG_812",
    mechanics: ["STEALTH"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 1,
    text: "Stealth",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55586.png",
    tile: "UNG_812.png"
  },
  {
    name: "Stormwatcher",
    artist: "Arthur Gimaldinov",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 41327,
    flavor: "Aspiring meteorologist!",
    health: 8,
    id: "UNG_813",
    mechanics: ["WINDFURY"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55562.png",
    tile: "UNG_813.png"
  },
  {
    name: "Giant Wasp",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41328,
    flavor: "Float like a butterfly, sting like a giant wasp!",
    health: 2,
    id: "UNG_814",
    mechanics: ["POISONOUS", "STEALTH"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Stealth  Poisonous",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55525.png",
    tile: "UNG_814.png"
  },
  {
    name: "Servant of Kalimos",
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 41410,
    flavor:
      "He's doing his best, but his mom thinks that if he had just applied himself in school Kalimos would be working for HIM.",
    health: 5,
    id: "UNG_816",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    race: "ELEMENTAL",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 3,
    text:
      "Battlecry: If you played an Elemental last turn,  Discover an Elemental.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "55511.png",
    tile: "UNG_816.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "047feb18-033b-41ba-8fd8-c05d6638b643",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Servant of Kalimos"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tidal Surge",
    artist: "Max Grecke",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 41521,
    flavor: "Also good for removing pesky stains.",
    id: "UNG_817",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deal $4 damage to a minion. Restore #4 Health to your hero.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HEAL"],
    imageUrl: "55555.png",
    tile: "UNG_817.png"
  },
  {
    name: "Volatile Elemental",
    artist: "Nicola Saviori",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41524,
    flavor:
      "Currently in an anger management class with Raging Worgen, Grommash Hellscream, and The Angry Chicken. It isn't helping.",
    health: 1,
    id: "UNG_818",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deathrattle: Deal 3 damage to a random enemy minion.",
    type: "MINION",
    extra: ["STALL"],
    imageUrl: "55550.png",
    tile: "UNG_818.png"
  },
  {
    name: "Envenom Weapon",
    artist: "Mauricio Herrera",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 41834,
    flavor: "Like Deadly Poison, but deadlier.",
    id: "UNG_823",
    playRequirements: { REQ_WEAPON_EQUIPPED: 0 },
    rarity: "RARE",
    referencedTags: ["POISONOUS"],
    set: 9,
    rating: 1,
    text: "Give your weapon Poisonous.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "55588.png",
    tile: "UNG_823.png"
  },
  {
    name: "Lakkari Sacrifice",
    artist: "Konstantin Turovec",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 41856,
    elite: true,
    flavor:
      "They asked, “And what must we give in return?” Gul’dan lowered his hood and answered: “Six… cards…”",
    id: "UNG_829",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Discard 6 cards. Reward: Nether Portal.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55447.png",
    tile: "UNG_829.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "6652ff60-a972-4d5e-97ca-5739d922558a",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cruel Dinomancer",
    artist: "Dany Orizio",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 41869,
    flavor:
      "As that old saying goes: 'you don't get into dinomancing to make friends.'",
    health: 5,
    id: "UNG_830",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Deathrattle: Summon a random minion you discarded this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55569.png",
    tile: "UNG_830.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "f343abee-7969-4457-93f3-bc811089265a",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Corrupting Mist",
    artist: "Zoltan Boros",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 41871,
    flavor: "The most terrifying of Un’goro magics is both silent… AND deadly.",
    id: "UNG_831",
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Corrupt every minion. Destroy them at the start of your next turn.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55493.png",
    tile: "UNG_831.png"
  },
  {
    name: "Bloodbloom",
    artist: "Tyler Walpole",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 41872,
    entourage: [
      "UNG_999t10",
      "UNG_999t2",
      "UNG_999t3",
      "UNG_999t4",
      "UNG_999t5",
      "UNG_999t6",
      "UNG_999t7",
      "UNG_999t8",
      "UNG_999t13",
      "UNG_999t14"
    ],
    flavor: "Help save mana.  Donate blood today!",
    id: "UNG_832",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "The next spell you cast this turn costs Health instead of Mana.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55594.png",
    tile: "UNG_832.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ff9957d8-06a3-4ab9-a725-b5f14455f6e4",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 3
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "c273ff2e-b7fd-44d5-8f11-ec46eff9a9db",
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
    name: "Lakkari Felhound",
    artist: "Dave Allsop",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 41873,
    flavor: "Guaranteed to track tar all over your carpet.",
    health: 8,
    id: "UNG_833",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "DEMON",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt Battlecry: Discard two random cards.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "55449.png",
    tile: "UNG_833.png"
  },
  {
    name: "Feeding Time",
    artist: "Jaemin Kim",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 41874,
    flavor: "True, they're only 1/1s, but they eat as much as most 4/4s!",
    id: "UNG_834",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 9,
    rating: 2,
    text: "Deal $3 damage to a minion. Summon three 1/1 Pterrordaxes.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "MIN_GEN"],
    imageUrl: "55589.png",
    tile: "UNG_834.png"
  },
  {
    name: "Chittering Tunneler",
    artist: "Slawomir Maniak",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 41875,
    flavor:
      "Ear to the ground, he carefully interpreted the chittering noises: “You wanna cast a spell? I wanna cast a spell!”",
    health: 3,
    id: "UNG_835",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 2,
    text:
      "Battlecry: Discover a spell. Deal damage to your hero equal to its Cost.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "55571.png",
    tile: "UNG_835.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "9a2eb50a-9b21-41cb-9fef-5169f38cc6ff",
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
    name: "Clutchmother Zavas",
    artist: "Anton Zemskov",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 41876,
    elite: true,
    flavor:
      "A bit of a snob: still refuses to drive anything with automatic transmission.",
    health: 2,
    id: "UNG_836",
    mechanics: ["InvisibleDeathrattle"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text:
      "Whenever you discard this, give it +2/+2 and return it to your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55464.png",
    tile: "UNG_836.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "e03f9b06-6a6a-4d43-8c08-c09d91dcaad2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tar Lord",
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 41881,
    flavor: "Tar Lord, man... legendary monster? Aw, forget it.",
    health: 11,
    id: "UNG_838",
    mechanics: ["TAUNT"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Taunt Has +4 Attack during your opponent’s turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55535.png",
    tile: "UNG_838.png"
  },
  {
    name: "Hemet, Jungle Hunter",
    artist: "Sam Nielson",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 41885,
    elite: true,
    flavor:
      "The goblin travel agency lost his luggage, but he's still having a great vacation!",
    health: 6,
    id: "UNG_840",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 2,
    text: "Battlecry: Destroy all cards in your deck that cost (3) or less.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55508.png",
    tile: "UNG_840.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "4578422c-67e3-4d9d-99d6-135e8731cd0a",
            filters: [
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "The Voraxx",
    artist: "Jimmy Lo",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41913,
    elite: true,
    flavor: "I am the Voraxx.  I speak for the weeds.",
    health: 3,
    id: "UNG_843",
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text:
      "After you cast a spell on this minion, summon a 1/1 Plant and cast another copy on it.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55556.png",
    tile: "UNG_843.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "4da6ad20-76de-4d3a-9416-18fbc7bf6d18",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "playRequirements.REQ_TARGET_TO_PLAY",
                operation: "EQUALS",
                minValue: 0
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "demon|beast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Humongous Razorleaf",
    artist: "Tooth",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41925,
    faction: "ALLIANCE",
    flavor: "Loves goblins.  In a light cream sauce.",
    health: 8,
    id: "UNG_844",
    mechanics: ["CANT_ATTACK"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Can't attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55582.png",
    tile: "UNG_844.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "66b0b075-d114-434f-ab17-3360b65e9efd",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "silence"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Igneous Elemental",
    artist: "Tyler West Studio",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41926,
    flavor:
      "We wanted to name him 'Ingenious Elemental', but he just wasn't that bright.",
    health: 3,
    id: "UNG_845",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deathrattle: Add two 1/2 Elementals to your hand.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55559.png",
    tile: "UNG_845.png"
  },
  {
    name: "Shimmering Tempest",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 41927,
    flavor: "HATES being summoned for Kirin Tor party lighting.",
    health: 1,
    id: "UNG_846",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Deathrattle: Add a random Mage spell to your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "55561.png",
    tile: "UNG_846.png"
  },
  {
    name: "Blazecaller",
    artist: "Dave Allsop",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 41928,
    flavor: "For when a flamecaller just won't do.",
    health: 6,
    id: "UNG_847",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABE_AND_ELEMENTAL_PLAYED_LAST_TURN: 0
    },
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 9,
    rating: 3,
    text: "Battlecry: If you played an Elemental last turn, deal 5 damage.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55509.png",
    tile: "UNG_847.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "8d92de3f-15a1-4166-9dde-5436c0494f62",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Blazecaller"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 8,
            id: "3bf06835-c91f-49e3-b35e-3f6d47aec033",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "elemental"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Primordial Drake",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 41929,
    flavor: "Before he became a rap artist.",
    health: 8,
    id: "UNG_848",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "DRAGON",
    rarity: "EPIC",
    set: 9,
    rating: 3,
    text: "Taunt Battlecry: Deal 2 damage to all other minions.",
    type: "MINION",
    extra: ["AOE", "VALUE"],
    imageUrl: "55533.png",
    tile: "UNG_848.png"
  },
  {
    name: "Elise the Trailblazer",
    artist: "Luke Mancini",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 41935,
    elite: true,
    flavor:
      "Reno taught her that blazing her own trail is a lot more fun than following someone else's map.",
    health: 5,
    id: "UNG_851",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 4,
    text: "Battlecry: Shuffle a sealed Un'Goro pack into your deck.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "55451.png",
    tile: "UNG_851.png"
  },
  {
    name: "Tyrantus",
    artist: "Chris Rahn",
    attack: 12,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 10,
    dbfId: 41954,
    elite: true,
    flavor:
      "Millennia of evolutionary pressures turned his species into the Faerie Dragons we know today.",
    health: 12,
    id: "UNG_852",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 9,
    rating: 2,
    text: "Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55520.png",
    tile: "UNG_852.png"
  },
  {
    name: "Free From Amber",
    artist: "Anton Magdalina",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 8,
    dbfId: 42009,
    flavor: "Bingo! Minion DNA!",
    id: "UNG_854",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 4,
    text: "Discover a minion that costs (8) or more. Summon it.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "55542.png",
    tile: "UNG_854.png"
  },
  {
    name: "Hallucination",
    artist: "Daria Tuzova",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 42011,
    flavor: "It's the good kind of hallucination.",
    id: "UNG_856",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 4,
    text: "Discover a card from your opponent's class.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "55592.png",
    tile: "UNG_856.png"
  },
  {
    name: "Spiritsinger Umbra",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 41289,
    elite: true,
    flavor:
      "She sees the fate of anyone she meets, but it's always the same: dinosaur attack.",
    health: 4,
    id: "UNG_900",
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 9,
    rating: 1,
    text: "After you summon a minion, trigger its Deathrattle effect.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55522.png",
    tile: "UNG_900.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "261c28ac-4077-4c5f-9120-005ef5c2a0f0",
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
    name: "Ozruk",
    artist: "Tooth",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 41294,
    elite: true,
    flavor: "Between you and me, Ozruk is a bit obsessed with his body.",
    health: 5,
    id: "UNG_907",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text:
      "Taunt Battlecry: Gain +5 Health for each Elemental you played last turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55468.png",
    tile: "UNG_907.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 7,
            maxCards: 8,
            id: "f8ec6a99-ce2b-4b79-b8d5-bd3cd39a32c3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grievous Bite",
    artist: "Slawomir Maniak",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 41350,
    flavor: "Ooh.  I'll have a bite of this, and of this, and of this...",
    id: "UNG_910",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Deal $2 damage to a minion and $1 damage to adjacent ones.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "55527.png",
    tile: "UNG_910.png"
  },
  {
    name: "Jeweled Macaw",
    artist: "James Ryman",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 41353,
    flavor:
      "It’s not LITERALLY jeweled. The goblins were terribly disappointed.",
    health: 1,
    id: "UNG_912",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Battlecry: Add a random Beast to your hand.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55528.png",
    tile: "UNG_912.png"
  },
  {
    name: "Tol'vir Warden",
    artist: "Mike Azevedo",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 41354,
    flavor: "Ferocious in combat… and even more terrifying in pet battles.",
    health: 5,
    id: "UNG_913",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Battlecry: Draw two 1-Cost minions from your deck.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "55484.png",
    tile: "UNG_913.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "c1905958-e6e3-47e0-825d-b41534202cf7",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Raptor Hatchling",
    artist: "Jaemin Kim",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 41357,
    flavor: "They’re just baby teeth. Lots and lots of baby teeth.",
    health: 1,
    id: "UNG_914",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "RARE",
    set: 9,
    rating: 2,
    text: "Deathrattle: Shuffle a 4/3 Raptor into your deck.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55502.png",
    tile: "UNG_914.png"
  },
  {
    name: "Crackling Razormaw",
    artist: "L. Lullabi & K. Turovec",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 41358,
    flavor: "Wasn't clever enough to go AROUND the electric fence.",
    health: 2,
    id: "UNG_915",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 3,
    text: "Battlecry: Adapt a friendly Beast.",
    type: "MINION",
    extra: ["BUFF", "FAST"],
    imageUrl: "55500.png",
    tile: "UNG_915.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "681dd156-0ecf-4561-8fa7-e49033244f11",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Crackling Razormaw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Stampede",
    artist: "Daren Bader",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 41360,
    flavor: "Many hunters long for the pitter-patter of enormous feet.",
    id: "UNG_916",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text:
      "Each time you play a Beast this turn, add a random Beast to your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55536.png",
    tile: "UNG_916.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e2c1cdd5-488b-4709-bbc0-1c6ae8f45f17",
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
    name: "Dinomancy",
    artist: "Arthur Bozonnet",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 41363,
    flavor:
      "Anyone can dinomance. Just put your lips together and RAAWWWAARGGGH.",
    id: "UNG_917",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "Your Hero Power becomes 'Give a Beast +2/+2.'",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55526.png",
    tile: "UNG_917.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "741513fc-8b8f-4748-a727-581fe0c47b0c",
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
              },
              {
                property: "mechanics",
                operation: "NOT_INCLUDES",
                minValue: "CANT_BE_TARGETED_BY_HERO_POWERS"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Swamp King Dred",
    artist: "Alex Horley Orlandelli",
    attack: 9,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 41366,
    elite: true,
    flavor: "Swamp King Dred, more like Swamp King Dead, amiright?",
    health: 9,
    id: "UNG_919",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 9,
    rating: 3,
    text: "After your opponent plays a minion, attack it.",
    type: "MINION",
    extra: ["STALL"],
    imageUrl: "55454.png",
    tile: "UNG_919.png"
  },
  {
    name: "The Marsh Queen",
    artist: "A.J. Nazzaro",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 41368,
    elite: true,
    flavor:
      "Question: What's scarier, one giant angry dinosaur or 15 smaller vicious ones? Answer: AHHHHHHH THEY FOUND MEEEEEE",
    id: "UNG_920",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Play seven 1-Cost minions. Reward: Queen Carnassa.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55497.png",
    tile: "UNG_920.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 10,
            id: "f1f643ba-cf76-40c5-834c-3a8e890634e5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "4797f9cb-1acc-4031-bbc8-629a1fcb0cb8",
            filters: [
              {
                property: "name",
                operation: "MATCH",
                minValue: "Tundra Rhino|Tol'vir Warden"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Explore Un'Goro",
    artist: "Jerry Mascho",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 41400,
    flavor: "It turns out cards DO grow on trees!",
    id: "UNG_922",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 1,
    text: "Replace your deck with copies of 'Discover a card.'",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55445.png",
    tile: "UNG_922.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "17da9e9a-099c-4871-b98a-5b472a84ce35",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "CARD_DRAW"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Iron Hide",
    artist: "Phil Saunders",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 41401,
    flavor:
      "Week 6. I remain covered head to toe with scales. They do not yet realize that I am not a dinosaur.",
    id: "UNG_923",
    rarity: "COMMON",
    set: 9,
    rating: 2,
    text: "Gain 5 Armor.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "55572.png",
    tile: "UNG_923.png"
  },
  {
    name: "Ornery Direhorn",
    artist: "Luca Zontini",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 41404,
    flavor:
      "'It's an herbivore.  How dangerous can it be?'  - Famous last words",
    health: 5,
    id: "UNG_925",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 3,
    text: "Taunt Battlecry: Adapt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55530.png",
    tile: "UNG_925.png"
  },
  {
    name: "Cornered Sentry",
    artist: "Jomaro Kindred",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 41406,
    flavor:
      "The Draenei are seriously considering cancelling 'Bring Your Murderous Pet to Work Day.'",
    health: 6,
    id: "UNG_926",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Taunt. Battlecry: Summon three 1/1 Raptors for your opponent.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "55517.png",
    tile: "UNG_926.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "1e10b104-ff99-4eb5-b0de-9517a9c4a0ca",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1.*damage.*all"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sudden Genesis",
    artist: "Zoltan Boros",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 41407,
    flavor: "Being hurt can make you another person.",
    id: "UNG_927",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text: "Summon copies of your damaged minions.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55577.png",
    tile: "UNG_927.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "86d9df23-3a25-4f35-a1da-13c629b177a2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1.*damage.*all"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tar Creeper",
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41418,
    flavor: "If you won't come to the tar pits, we'll bring them to you!",
    health: 5,
    id: "UNG_928",
    mechanics: ["TAUNT"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Taunt Has +2 Attack during your opponent's turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55456.png",
    tile: "UNG_928.png"
  },
  {
    name: "Molten Blade",
    artist: "James Ryman",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 41420,
    durability: 1,
    flavor: "It’s a sword! It’s a knife! It’s a swizzle-stick!",
    id: "UNG_929",
    rarity: "RARE",
    set: 9,
    rating: 2,
    text: "Each turn this is in your hand, transform it into a new weapon.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "55496.png",
    tile: "UNG_929.png"
  },
  {
    name: "King Mosh",
    artist: "James Ryman",
    attack: 9,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 9,
    dbfId: 41425,
    elite: true,
    flavor: "He's a terror at concerts.",
    health: 7,
    id: "UNG_933",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 9,
    rating: 2,
    text: "Battlecry: Destroy all damaged minions.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "55501.png",
    tile: "UNG_933.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "0a547982-50c0-4f1c-9290-4719e647ef3e",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1.*damage.*all"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fire Plume's Heart",
    artist: "Nate Bowden",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 41427,
    elite: true,
    flavor: "Why does an active volcano need to be defended? To save its ash.",
    id: "UNG_934",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 9,
    rating: 1,
    text: "Quest: Play 7 Taunt minions. Reward: Sulfuras.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55523.png",
    tile: "UNG_934.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9b092044-036a-47bf-ab52-154cf445405e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "TAUNT"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "87203b26-22dc-4e7a-b4bc-43ccc1007dfa",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "ECHO"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "TAUNT"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Primalfin Lookout",
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41478,
    flavor:
      "Lookout is a self-appointed title that's mostly an excuse to beat things up.",
    health: 2,
    id: "UNG_937",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 1,
    text: "Battlecry: If you control another Murloc, Discover a Murloc.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55471.png",
    tile: "UNG_937.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "f0e87060-f853-4046-9365-8e19ec0a1604",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MURLOC"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Primalfin Lookout"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hot Spring Guardian",
    artist: "Gustav Schmidt",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 41479,
    flavor: "NONE SHALL PASS until at least an hour after eating.",
    health: 4,
    id: "UNG_938",
    mechanics: ["BATTLECRY", "TAUNT"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 9,
    rating: 3,
    text: "Taunt Battlecry: Restore 3 Health.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "55564.png",
    tile: "UNG_938.png"
  },
  {
    name: "Awaken the Makers",
    artist: "Konstantin Turovec",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 41494,
    elite: true,
    flavor: "They keep hitting the Snooze button.",
    id: "UNG_940",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 9,
    rating: 1,
    text: "Quest: Summon 7 Deathrattle minions. Reward: Amara, Warden of Hope.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "52588.png",
    tile: "UNG_940.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "1cfe3ef0-0568-4d56-8d65-7a589f918736",
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
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "ce1b4d30-0ad0-4bc8-a8b6-44eb29d3a70b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Twilight's Call"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Primordial Glyph",
    artist: "Matthew O'Connor",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 41496,
    flavor: "It's the Ancient Tol'vir symbol for 'Whoops!'",
    id: "UNG_941",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 9,
    rating: 4,
    text: "Discover a spell. Reduce its Cost by (2).",
    type: "SPELL",
    extra: ["CARD_DRAW", "DAMAGE"],
    imageUrl: "55552.png",
    tile: "UNG_941.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "0fbc9bf8-7769-4f57-aa60-acd0de5e7fc9",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "you cast .* spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unite the Murlocs",
    artist: "Steve Prescott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 41499,
    elite: true,
    flavor:
      "Form feet and legs!  Form arms and body!  Oh.  Sorry.  I was thinking about Mechafin.",
    id: "UNG_942",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Summon 10 Murlocs. Reward: Megafin.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55470.png",
    tile: "UNG_942.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "223ce43d-0ba7-4ec0-9259-a940f86231d9",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Ghost Light Angler"
              }
            ]
          },
          {
            minCards: 12,
            maxCards: 14,
            id: "01a5c473-bc2e-46e5-9291-ab8f6cdf4417",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MURLOC"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "5eac78e6-f5f3-444a-bce6-4c6a7bfa8f0a",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Call in the Finishers"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gluttonous Ooze",
    artist: "A.J. Nazzaro",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41683,
    flavor: "Three time winner of the Un'Goro weapon eating contest.",
    health: 3,
    id: "UNG_946",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "EPIC",
    set: 9,
    rating: 3,
    text:
      "Battlecry: Destroy your opponent's weapon and gain Armor equal to its Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "55488.png",
    tile: "UNG_946.png"
  },
  {
    name: "Molten Reflection",
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 41690,
    flavor: "Dang, I'm looking pretty hot!",
    id: "UNG_948",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 9,
    rating: 1,
    text: "Choose a friendly minion. Summon a copy of it.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55553.png",
    tile: "UNG_948.png"
  },
  {
    name: "Vinecleaver",
    artist: "Joe Wilson",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 41859,
    durability: 3,
    flavor: "George and Karl!  Thank the Light we found you!",
    id: "UNG_950",
    rarity: "RARE",
    set: 9,
    rating: 2,
    text: "After your hero attacks, summon two 1/1 Silver Hand Recruits.",
    type: "WEAPON",
    extra: ["MIN_GEN"],
    imageUrl: "55581.png",
    tile: "UNG_950.png"
  },
  {
    name: "Spikeridged Steed",
    artist: "Jim Nelson",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 41864,
    flavor: "What beats cavalry? Dinosaur cavalry.",
    id: "UNG_952",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 9,
    rating: 4,
    text: "Give a minion +2/+6 and Taunt. When it dies, summon a Stegodon.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "55516.png",
    tile: "UNG_952.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "9f25a382-3014-479e-8edd-76785e168093",
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
    name: "Primalfin Champion",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 41866,
    flavor: "Sure, he'll return your stuff.  OVER HIS DEAD BODY!",
    health: 2,
    id: "UNG_953",
    mechanics: ["DEATHRATTLE"],
    race: "MURLOC",
    rarity: "EPIC",
    set: 9,
    rating: 1,
    text:
      "Deathrattle: Return any spells you cast on this minion to your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55565.png",
    tile: "UNG_953.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ae9911c3-583d-40af-9ca3-ec80fe776d57",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
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
    name: "The Last Kaleidosaur",
    artist: "Arthur Gimaldinov",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 41868,
    elite: true,
    flavor:
      "“Impossible!” exclaimed the Silver Hand Recruit, his eyes filled with fear. Uther shook his head, turning the crystal until it caught the light: “Life finds a way.”",
    id: "UNG_954",
    mechanics: ["QUEST"],
    rarity: "LEGENDARY",
    set: 9,
    rating: 1,
    text: "Quest: Cast 6 spells on your minions. Reward: Galvadon.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "55512.png",
    tile: "UNG_954.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "a8bad06c-b16e-4dc0-8c90-5d64f7595e3f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Sound the Bells!"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 10,
            id: "8ec689a6-ca8a-4aab-bc99-6e5dd8e46e69",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 7
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Smuggler's Run"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Meteor",
    artist: "Matt Gaser",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 41878,
    flavor: "When you absolutely, positively have to kill all the dinosaurs.",
    id: "UNG_955",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 9,
    rating: 4,
    text: "Deal $15 damage to a minion and $3 damage to adjacent ones.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "AOE"],
    imageUrl: "55558.png",
    tile: "UNG_955.png"
  },
  {
    name: "Spirit Echo",
    artist: "Hideaki Takamura",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 41879,
    flavor: "I guess you can say they’re… “soul survivors.”",
    id: "UNG_956",
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    set: 9,
    rating: 2,
    text: "Give your minions 'Deathrattle: Return  this to your hand.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "55514.png",
    tile: "UNG_956.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "ee338d4b-5b76-4b29-944b-f21dec17999d",
            filters: [
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
    name: "Direhorn Hatchling",
    artist: "Peter Stapleton",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 41890,
    flavor: "His mom could beat up your mom.",
    health: 6,
    id: "UNG_957",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    race: "BEAST",
    rarity: "RARE",
    set: 9,
    rating: 3,
    text:
      "Taunt Deathrattle: Shuffle a 6/9 Direhorn with Taunt into your deck.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "55524.png",
    tile: "UNG_957.png"
  },
  {
    name: "Lost in the Jungle",
    artist: "Zoltan Boros",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 41912,
    faction: "ALLIANCE",
    flavor: "George and Karl were never heard from again.",
    id: "UNG_960",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    set: 9,
    rating: 4,
    text: "Summon two 1/1 Silver Hand Recruits.",
    type: "SPELL",
    extra: ["FAST"],
    imageUrl: "55495.png",
    tile: "UNG_960.png"
  },
  {
    name: "Adaptation",
    artist: "Hideaki Takamura",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 41944,
    flavor:
      "Pray for salvation. If that fails, pray for extra horns or bigger teeth.",
    id: "UNG_961",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 1,
    text: "Adapt a friendly minion.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "55566.png",
    tile: "UNG_961.png"
  },
  {
    name: "Lightfused Stegodon",
    artist: "Dan Scott",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 41945,
    flavor:
      "“Come now, Johnston. I think those horns are quite fetching on you.”",
    health: 4,
    id: "UNG_962",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["ADAPT"],
    set: 9,
    rating: 2,
    text: "Battlecry: Adapt your Silver Hand Recruits.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55507.png",
    tile: "UNG_962.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "6518c77d-ac87-49f4-88a5-936b7afb083f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "silver hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lyra the Sunshard",
    artist: "Phil Saunders",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 42046,
    elite: true,
    flavor:
      "Arise, fair sun, and kill my envious foes. They don't have a legendary as beautiful as you.",
    health: 5,
    id: "UNG_963",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 9,
    rating: 4,
    text: "Whenever you cast a spell, add a random Priest spell to your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "55545.png",
    tile: "UNG_963.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7994dbcf-8680-448b-8013-12b6b75becb1",
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
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "e932a6cf-60ba-4a24-b0c1-4617b8908778",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Radiant Elemental"
              }
            ]
          }
        ]
      }
    ]
  }
];
