export const theLeagueOfExplorers = [
  {
    name: "Forgotten Torch",
    artist: "Richard Wright",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2874,
    flavor:
      "Why does a forgotten torch turn into a roaring torch with no provocation?  It's one of life's many mysteries.",
    howToEarn: "Unlocked by starting the League of Explorers adventure.",
    howToEarnGolden:
      "Can be crafted after starting the League of Explorers adventure.",
    id: "LOE_002",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 5,
    rating: 4,
    text:
      "Deal $3 damage. Shuffle a 'Roaring Torch' into your deck that deals 6 damage.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "27216.png",
    tile: "LOE_002.png"
  },
  {
    name: "Ethereal Conjurer",
    artist: "Benjamin Zhang",
    attack: 6,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 2875,
    flavor: "Despite the name, he's a solid conjurer.",
    health: 3,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_003",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 3,
    text: "Battlecry: Discover a spell.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "27249.png",
    tile: "LOE_003.png"
  },
  {
    name: "Museum Curator",
    artist: "Steve Prescott",
    attack: 1,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2878,
    flavor:
      "He is forever cursing the kids who climb on the rails and the evil archeologists who animate the exhibits.",
    health: 2,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_006",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["DEATHRATTLE", "DISCOVER"],
    set: 5,
    rating: 3,
    text: "Battlecry: Discover a Deathrattle card.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "27250.png",
    tile: "LOE_006.png"
  },
  {
    name: "Curse of Rafaam",
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2879,
    flavor: "This is what happens when Rafaam stubs his toe unexpectedly.",
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_007",
    rarity: "COMMON",
    set: 5,
    rating: 1,
    text:
      "Give your opponent a 'Cursed!' card. While they hold it, they take 2 damage on their turn.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "27232.png",
    tile: "LOE_007.png"
  },
  {
    name: "Obsidian Destroyer",
    artist: "Anton Zemskov",
    attack: 7,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 2881,
    flavor: "No obsidian is safe around the Obsidian Destroyer!",
    health: 7,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_009",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 5,
    rating: 2,
    text: "At the end of your turn, summon a 1/1 Scarab with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27222.png",
    tile: "LOE_009.png"
  },
  {
    name: "Pit Snake",
    artist: "Bernie Kang",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 2882,
    flavor: "It could be worse.  It could be a Snake Pit.",
    health: 1,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_010",
    mechanics: ["POISONOUS"],
    race: "BEAST",
    rarity: "COMMON",
    set: 5,
    rating: 2,
    text: "Poisonous",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "27221.png",
    tile: "LOE_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7fa7ef88-7978-4297-96ee-0f8c264b09cf",
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
                property: "cost",
                operation: "LESS_THAN",
                minValue: 5
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Pit Snake"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Reno Jackson",
    artist: "Tyson Murphy",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2883,
    elite: true,
    flavor:
      "Reno is a four-time winner of the 'Best Accessorized Explorer' award.",
    health: 6,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_011",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 5,
    rating: 1,
    text: "Battlecry: If your deck has no duplicates, fully heal your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "27228.png",
    tile: "LOE_011.png",
    deckFilters: [
      {
        id: "b73048e2-3204-4d72-8bff-1ba988361a89",
        property: "cost",
        operation: "HIGHLANDER"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1ce6f657-90d9-4c14-8aba-fd36f6653175",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "duplicates"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tomb Pillager",
    artist: "Dave Allsop",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 2884,
    flavor: "After the guild broke up, he could no longer raid the tombs.",
    health: 4,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_012",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 5,
    rating: 4,
    text: "Deathrattle: Add a Coin to your hand.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "27229.png",
    tile: "LOE_012.png"
  },
  {
    name: "Rumbling Elemental",
    artist: "Cole Eastburn",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2888,
    flavor: "He's a very hungry elemental.",
    health: 6,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_016",
    race: "ELEMENTAL",
    rarity: "COMMON",
    referencedTags: ["BATTLECRY"],
    set: 5,
    rating: 1,
    text: "After you play a Battlecry minion, deal 2 damage to a random enemy.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "27244.png",
    tile: "LOE_016.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "57177c7a-35f8-448f-ba30-6d68a75a7e74",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    name: "Keeper of Uldaman",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 2889,
    flavor: "U da man!  No, U da man!",
    health: 4,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_017",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 5,
    rating: 4,
    targetingArrowText: "Change to 3/3.",
    text: "Battlecry: Set a minion's Attack and Health to 3.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "HARD_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "27260.png",
    tile: "LOE_017.png"
  },
  {
    name: "Tunnel Trogg",
    artist: "Andrew Hou",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 2890,
    flavor:
      "Sure, they're ugly, but they live in tunnels.  You try your beauty routine without natural light.",
    health: 3,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_018",
    rarity: "COMMON",
    referencedTags: ["OVERLOAD"],
    set: 5,
    rating: 4,
    text: "Whenever you Overload, gain +1 Attack per locked Mana Crystal.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "27246.png",
    tile: "LOE_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "86945862-5cf4-4c77-b496-b6c4a326bc38",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "overload"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unearthed Raptor",
    artist: "Trent Kaniuga",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 2891,
    flavor: "Still hunting for the ones who earthed him.",
    health: 4,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_019",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 5,
    rating: 3,
    text:
      "Battlecry: Choose a friendly minion. Gain a copy of its Deathrattle.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "27220.png",
    tile: "LOE_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "77c84123-4000-4920-940e-40541ab3f38e",
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
    name: "Desert Camel",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 2892,
    flavor: "Dang.  This card is sweet.  Almost as sweet as Dessert Camel.",
    health: 4,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_020",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 5,
    rating: 2,
    text: "Battlecry: Put a 1-Cost minion from each deck into the battlefield.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "27251.png",
    tile: "LOE_020.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "ca6144ba-f5b4-4e9e-852c-165a56b02e95",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Injured Kvaldir"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "7468144f-440a-4894-a59b-fa718290314a",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Zombie Chow"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dart Trap",
    artist: "Zoltan Boros",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2893,
    flavor: "Five years of tap-dancing lessons are FINALLY going to pay off!",
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_021",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 5,
    rating: 1,
    text:
      "Secret: After an opposing Hero Power is used, deal $5 damage to a random enemy.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "27227.png",
    tile: "LOE_021.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "6d2809db-714a-4251-85e0-3fee3371a5d7",
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
    name: "Fierce Monkey",
    artist: "Peter Stapleton",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2894,
    flavor: "Fierce monkey.  That funky monkey.",
    health: 4,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_022",
    mechanics: ["TAUNT"],
    race: "BEAST",
    rarity: "COMMON",
    set: 5,
    rating: 3,
    text: "Taunt",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "27255.png",
    tile: "LOE_022.png"
  },
  {
    name: "Dark Peddler",
    artist: "George Davis",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2895,
    flavor:
      "I'm offering you a bargain here!  This amazing vacuum cleaner for your soul!",
    health: 2,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_023",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 4,
    text: "Battlecry: Discover a 1-Cost card.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "27243.png",
    tile: "LOE_023.png"
  },
  {
    name: "Anyfin Can Happen",
    artist: "Ryan Metcalf",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 10,
    dbfId: 2898,
    flavor: "Theme song by Ellie Goldfin and Blagghghlrlrl Harris.",
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_026",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Summon 7 Murlocs that died this game.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "27240.png",
    tile: "LOE_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "6e2b28c9-d393-44ce-bd65-645158ca0250",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "murloc"
              },
              {
                property: "race",
                operation: "NOT_EQUALS",
                minValue: "MURLOC"
              }
            ]
          },
          {
            minCards: 12,
            maxCards: 14,
            id: "282131a8-209b-4627-915a-8ef600e4e47e",
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
    name: "Sacred Trial",
    artist: "Zoltan Boros",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 2899,
    flavor: "You have chosen poorly.",
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_027",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 5,
    rating: 1,
    text:
      "Secret: After your opponent has at least 3 minions and plays another, destroy it.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "27217.png",
    tile: "LOE_027.png"
  },
  {
    name: "Jeweled Scarab",
    artist: "Jaemin Kim",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2901,
    flavor: "It's amazing what you can do with super glue!",
    health: 1,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_029",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 2,
    text: "Battlecry: Discover a 3-Cost card.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "27211.png",
    tile: "LOE_029.png"
  },
  {
    name: "Naga Sea Witch",
    artist: "Benjamin Zhang",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2910,
    flavor: "If she had studied harder, she would have been a C+ witch.",
    health: 5,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_038",
    mechanics: ["AURA"],
    rarity: "EPIC",
    set: 5,
    rating: 1,
    text: "Your cards cost (5).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27231.png",
    tile: "LOE_038.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "43a28896-0b60-477d-a3b8-ea25a93a1298",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Molten Giant"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "f8d3dece-2f59-49ed-953c-438810ff91ac",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Mountain Giant"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "b108779d-5a32-4fc8-b7c7-093d8cbd7a38",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Sea Giant"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gorillabot A-3",
    artist: "Skan Srisuwan",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2911,
    flavor: "A-1 and A-2 went nuts, when they should have gone bolts.",
    health: 4,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_039",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 1,
    text: "Battlecry: If you control another Mech, Discover a Mech.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "27237.png",
    tile: "LOE_039.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "96112a35-e410-45d8-9811-9838618cf7d5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Gorillabot A-3"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Huge Toad",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2918,
    flavor: "Deals damage when he croaks.",
    health: 2,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_046",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 5,
    rating: 2,
    text: "Deathrattle: Deal 1 damage to a random enemy.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "27219.png",
    tile: "LOE_046.png"
  },
  {
    name: "Tomb Spider",
    artist: "Turovec Konstantin",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2919,
    flavor: "Less serious than its cousin, the Grave Spider.",
    health: 3,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_047",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 2,
    text: "Battlecry: Discover a Beast.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "27226.png",
    tile: "LOE_047.png"
  },
  {
    name: "Mounted Raptor",
    artist: "Benjamin Zhang",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 2922,
    flavor: "Clever girl!",
    health: 2,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_050",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 5,
    rating: 3,
    text: "Deathrattle: Summon a random 1-Cost minion.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "27253.png",
    tile: "LOE_050.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7578172c-013c-4a24-be7c-74789c4b19f6",
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
    name: "Jungle Moonkin",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 2923,
    flavor: "The REAL angry chicken!",
    health: 4,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_051",
    mechanics: ["SPELLPOWER"],
    race: "BEAST",
    rarity: "RARE",
    set: 5,
    rating: 1,
    spellDamage: 2,
    text: "Both players have Spell Damage +2.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "27236.png",
    tile: "LOE_051.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a1892231-1146-457a-8c34-f879af30c797",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 5
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "deal \\$[0-9]* damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Djinni of Zephyrs",
    artist: "Jakub Kasper",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2925,
    flavor: "If you want your wish granted, don't rub him the wrong way.",
    health: 6,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_053",
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 5,
    rating: 2,
    text:
      "After you cast a spell on another friendly minion, cast a copy of it on this one.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "27234.png",
    tile: "LOE_053.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "a06bbd01-3d11-444b-84a7-74d746b3b8b9",
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
                minValue: "beast"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "demon"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Anubisath Sentinel",
    artist: "Paul Mafayon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2933,
    flavor: "He's actually a 1/1 who picked up the hammer from the last guy.",
    health: 4,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_061",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 5,
    rating: 1,
    text: "Deathrattle: Give a random friendly minion +3/+3.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "27241.png",
    tile: "LOE_061.png"
  },
  {
    name: "Fossilized Devilsaur",
    artist: "Trent Kaniuga",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2945,
    flavor:
      "This was the only job he could get after the dinosaur theme park debacle.",
    health: 8,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_073",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 5,
    rating: 1,
    text: "Battlecry: If you control a Beast, gain Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27235.png",
    tile: "LOE_073.png"
  },
  {
    name: "Sir Finley Mrrgglton",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2948,
    elite: true,
    flavor:
      "In addition to fluent Common, he also speaks fourteen dialects of 'mrgl'.",
    health: 3,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_076",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "LEGENDARY",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 4,
    text: "Battlecry: Discover a new basic Hero Power.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "27215.png",
    tile: "LOE_076.png"
  },
  {
    name: "Brann Bronzebeard",
    artist: "Sam Nielson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2949,
    elite: true,
    flavor: "Contains 75% more fiber than his brother Magni!",
    health: 4,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_077",
    mechanics: ["AURA"],
    rarity: "LEGENDARY",
    referencedTags: ["BATTLECRY"],
    set: 5,
    rating: 4,
    text: "Your Battlecries trigger twice.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27214.png",
    tile: "LOE_077.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "32416b37-4f0a-4737-b69e-d1cfe5c9d067",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "BATTLECRY"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 8
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Spellbreaker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Elise Starseeker",
    artist: "Luke Mancini",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2951,
    elite: true,
    flavor:
      "A large part of her job entails not mixing up the Map to the Golden Monkey with the Map to Monkey Island.",
    health: 5,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_079",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "LEGENDARY",
    set: 5,
    rating: 3,
    text: "Battlecry: Shuffle the 'Map to the Golden Monkey'   into your deck.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "27210.png",
    tile: "LOE_079.png"
  },
  {
    name: "Summoning Stone",
    artist: "Jason Kang",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2958,
    flavor:
      "Sometimes it feels like it's always the same slackers that are waiting for a summon.",
    health: 6,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_086",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Whenever you cast a spell, summon a random minion of the same Cost.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27239.png",
    tile: "LOE_086.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "faea7caf-f281-459f-b85f-0fc9a9276fb1",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Wobbling Runts",
    artist: "Sam Nielson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2961,
    flavor:
      "The fourth one fell off in a tragic accident.  They don't talk about it.",
    health: 6,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_089",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 5,
    rating: 2,
    text: "Deathrattle: Summon three 2/2 Runts.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "27223.png",
    tile: "LOE_089.png"
  },
  {
    name: "Arch-Thief Rafaam",
    artist: "Alex Horley Orlandelli",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2964,
    elite: true,
    flavor:
      "He's very good at retrieving artifacts.  From other people's museums.",
    health: 8,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_092",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 2,
    text: "Battlecry: Discover a powerful Artifact.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "27254.png",
    tile: "LOE_092.png"
  },
  {
    name: "Entomb",
    artist: "Alex Konstad",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 3015,
    flavor: "It's perfectly safe as long as you remember to put in air holes.",
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_104",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 5,
    rating: 4,
    text: "Choose an enemy minion. Shuffle it into your deck.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "27238.png",
    tile: "LOE_104.png"
  },
  {
    name: "Explorer's Hat",
    artist: "Joe Wilson",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 3001,
    flavor:
      "Harrison Jones was disappointed that he didn't get to be part of the League of Explorers, but his hat did.",
    howToEarn: "Unlocked by starting the League of Explorers adventure.",
    howToEarnGolden:
      "Can be crafted after starting the League of Explorers adventure.",
    id: "LOE_105",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 5,
    rating: 1,
    text:
      "Give a minion +1/+1 and 'Deathrattle: Add an Explorer's Hat to your hand.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "27209.png",
    tile: "LOE_105.png"
  },
  {
    name: "Eerie Statue",
    artist: "Jim Nelson",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 9107,
    flavor:
      "Don't blink!  Don't turn your back, don't look away, and DON'T BLINK.",
    health: 7,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_107",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Can’t attack unless it’s the only minion in the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27233.png",
    tile: "LOE_107.png"
  },
  {
    name: "Ancient Shade",
    artist: "Slawomir Maniak",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 9081,
    flavor: "Warning: Do not expose to direct sunlight.",
    health: 4,
    howToEarn:
      "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    id: "LOE_110",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 5,
    rating: 1,
    text:
      "Battlecry: Shuffle an 'Ancient Curse' into your deck that deals 7 damage to you when drawn.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "27245.png",
    tile: "LOE_110.png"
  },
  {
    name: "Excavated Evil",
    artist: "Raymond Swanland",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 2999,
    flavor: "MOM! DAD! DON'T TOUCH IT! IT'S EVIL!!!!!!",
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_111",
    rarity: "RARE",
    set: 5,
    rating: 3,
    text:
      "Deal $3 damage to all minions. Shuffle this card into your opponent's deck.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "27242.png",
    tile: "LOE_111.png"
  },
  {
    name: "Everyfin is Awesome",
    artist: "Andrius Matijoshius",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 7,
    dbfId: 3007,
    flavor: "Everyfin is cool when you're part of a murloc team!",
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOE_113",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text:
      "Give your minions +2/+2. Costs (1) less for each Murloc you control.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "27224.png",
    tile: "LOE_113.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "fae4868e-518b-477b-97a3-4b8177aaf3d5",
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
    name: "Raven Idol",
    artist: "A.J. Nazzaro",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 13335,
    flavor:
      "Was petrified when it found out it didn't make the cut for Azerothian Idol.",
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_115",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 5,
    rating: 3,
    text: "Choose One - Discover a minion; or Discover a spell.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "27230.png",
    tile: "LOE_115.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "16692b6d-1920-4511-a36a-63f5a9cc5523",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Fandral Staghelm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Reliquary Seeker",
    artist: "Wayne Reynolds",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 13334,
    flavor:
      "The Reliquary considers itself the equal of the League of Explorers.  The League of Explorers doesn't.",
    health: 1,
    howToEarn: "Unlocked in Uldaman, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    id: "LOE_116",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Battlecry: If you have 6 other minions, gain +4/+4.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "27256.png",
    tile: "LOE_116.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "606d6e03-dfc5-435c-b33d-b0893143f5ea",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "MIN_GEN"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "72016ec5-a042-4e9d-aff2-644312570c0c",
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
                property: "text",
                operation: "MATCH",
                minValue: "summon"
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
    name: "Cursed Blade",
    artist: "Craig Mullins",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 35025,
    durability: 3,
    flavor: "The Curse is that you have to listen to 'MMMBop' on repeat.",
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_118",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Double all damage dealt to your hero.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "27248.png",
    tile: "LOE_118.png"
  },
  {
    name: "Animated Armor",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 36111,
    flavor: "Try putting it on.  Wait, let me get my camera.",
    health: 4,
    howToEarn:
      "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    id: "LOE_119",
    rarity: "RARE",
    set: 5,
    rating: 1,
    text: "Your hero can only take 1 damage at a time.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27252.png",
    tile: "LOE_119.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "518fe1fc-f800-42fe-bf9f-f9698ee3c796",
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
    name: "Murloc Tinyfin",
    artist: "Oliver Chipping",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 0,
    dbfId: 13879,
    flavor: "High mortality rate, from often being hugged to death.",
    health: 1,
    howToEarn:
      "Unlocked in The Ruined City, in the League of Explorers adventure.",
    howToEarnGolden:
      "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    id: "LOEA10_3",
    race: "MURLOC",
    rarity: "COMMON",
    set: 5,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "27225.png",
    tile: "LOEA10_3.png"
  }
];
