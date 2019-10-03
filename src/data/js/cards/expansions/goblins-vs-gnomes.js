export const goblinsVsGlomes = [
  {
    name: "Flamecannon",
    artist: "Mauricio Herrera",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 1927,
    flavor:
      "Calling something a flamecannon really doesn't do much to distinguish it from other goblin devices.",
    id: "GVG_001",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 1 },
    rarity: "COMMON",
    set: 2,
    rating: 4,
    text: "Deal $4 damage to a random enemy minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "12192.png",
    tile: "GVG_001.png"
  },
  {
    name: "Snowchugger",
    artist: "Gabor Szikszai",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 1928,
    flavor: "Do the slow chant when he waddles by: 'Chug! Chug! Chug!'",
    health: 3,
    id: "GVG_002",
    mechanics: ["FREEZE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Freeze any character damaged by this minion.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12230.png",
    tile: "GVG_002.png"
  },
  {
    name: "Unstable Portal",
    artist: "Sean O'Daniels",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 1929,
    flavor:
      "The denizens of Azeroth have no idea how much work goes into stabilizing portals.  We spend like 30% of GDP on portal upkeep.",
    id: "GVG_003",
    rarity: "RARE",
    set: 2,
    rating: 4,
    text: "Add a random minion to your hand. It costs (3) less.",
    type: "SPELL",
    extra: ["TEMPO"],
    imageUrl: "12178.png",
    tile: "GVG_003.png"
  },
  {
    name: "Goblin Blastmage",
    artist: "Glenn Rane",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 1934,
    flavor:
      "If you can't find a bomb to throw, just pick up any goblin invention and throw that.",
    health: 4,
    id: "GVG_004",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 2,
    rating: 2,
    text:
      "Battlecry: If you have a Mech, deal 4 damage randomly split among all enemies.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12195.png",
    tile: "GVG_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f0332902-b1f9-43d1-8f65-d756c8fd725f",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Echo of Medivh",
    artist: "Alex Garner",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 1941,
    flavor:
      "Medivh's echo haunts Karazhan, eternally cheating at chess and <i>Hearthstone</i>.",
    id: "GVG_005",
    rarity: "EPIC",
    set: 2,
    rating: 3,
    text: "Put a copy of each friendly minion into your hand.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "12300.png",
    tile: "GVG_005.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6163b1ac-95b5-4b69-bc8a-4dd93a9160ad",
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
    name: "Mechwarper",
    artist: "Phil Saunders",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1940,
    flavor:
      "Mechs that summon mechs? What's next? Donuts that summon donuts? Mmmmm.",
    health: 3,
    id: "GVG_006",
    mechanics: ["AURA"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Your Mechs cost (1) less.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12188.png",
    tile: "GVG_006.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "442e691e-621a-4dd0-a2ee-f61a8a0c66aa",
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
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "dc4b5f10-3e70-4925-bc14-19aa19c6843f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "mech"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Flame Leviathan",
    artist: "Aleksi Briclot",
    attack: 7,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 1939,
    elite: true,
    flavor:
      "Mimiron likes to take the Flame Leviathan out on some sweet joyrides.",
    health: 7,
    id: "GVG_007",
    mechanics: ["TOPDECK"],
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text: "When you draw this, deal 2 damage to all characters.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "12290.png",
    tile: "GVG_007.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "c6a25f88-5745-449e-ac41-358eee8588d5",
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
    name: "Lightbomb",
    artist: "Luca Zontini",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 1938,
    flavor: "This is what happens when you allow goblins to be priests.",
    id: "GVG_008",
    rarity: "EPIC",
    set: 2,
    rating: 3,
    text: "Deal damage to each minion equal to its Attack.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "12301.png",
    tile: "GVG_008.png"
  },
  {
    name: "Shadowbomber",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 1937,
    flavor:
      "Shadowbomber does her job, but she's kind of phoning it in at this point.",
    health: 1,
    id: "GVG_009",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 2,
    rating: 2,
    text: "Battlecry: Deal 3 damage to each hero.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "12278.png",
    tile: "GVG_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "db2e5b93-717b-45e7-824f-44537fea9cab",
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
    name: "Velen's Chosen",
    artist: "Alex Horley Orlandelli",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 1935,
    flavor:
      "Velen wrote a 'Lovely Card' for Tyrande with a picture of the Deeprun Tram that said 'I Choo-Choo-Choose you!'",
    id: "GVG_010",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["SPELLPOWER"],
    set: 2,
    rating: 3,
    text: "Give a minion +2/+4 and Spell Damage +1.",
    type: "SPELL",
    extra: ["BUFF", "TEMPO"],
    imageUrl: "12174.png",
    tile: "GVG_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "efae7556-dded-4da8-affc-4d2aaa225bae",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    name: "Shrinkmeister",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 1936,
    flavor:
      "After the debacle of the Gnomish World Enlarger, gnomes are wary of size-changing inventions.",
    health: 2,
    id: "GVG_011",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 2,
    rating: 3,
    targetingArrowText: "Give -2 Attack this turn.",
    text: "Battlecry: Give a minion -2 Attack this turn.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12197.png",
    tile: "GVG_011.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "394b55e0-5c7f-4536-a9e6-c92d8607ed5f",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "TEMPO"
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
    name: "Light of the Naaru",
    artist: "Jesper Ejsing",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 1933,
    flavor:
      "'Light it up!' - Command given to both Lightwardens and Goblins holding Flamecannons.",
    id: "GVG_012",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 2,
    rating: 3,
    text:
      "Restore #3 Health. If the target is still damaged, summon a Lightwarden.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "12297.png",
    tile: "GVG_012.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "4b63c2b7-b974-4d87-bd63-a1edb900e4d3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "healed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cogmaster",
    artist: "Trent Kaniuga",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1932,
    flavor:
      "After a while, you don't see the cogs and sprockets. All you see is a robot, a spider tank, a deathray...",
    health: 2,
    id: "GVG_013",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "Has +2 Attack while you have a Mech.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12179.png",
    tile: "GVG_013.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "b741ac82-23f6-4f06-bf39-bc67f24183be",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Vol'jin",
    artist: "Raymond Swanland",
    attack: 6,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 1931,
    elite: true,
    flavor:
      "Vol'jin is a shadow hunter, which is like a shadow priest except more voodoo.",
    health: 2,
    id: "GVG_014",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "LEGENDARY",
    set: 2,
    rating: 3,
    targetingArrowText: "Swap Health.",
    text: "Battlecry: Swap Health with another minion.",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL"],
    imageUrl: "12296.png",
    tile: "GVG_014.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "41e7dab3-3ce4-438c-a9bc-79eb8626af98",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Holy Smite"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Darkbomb",
    artist: "Jeff Haynie",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2093,
    flavor: "If you're looking to make an 'Emo' deck, this card is perfect!",
    id: "GVG_015",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 2,
    rating: 4,
    text: "Deal $3 damage.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "12299.png",
    tile: "GVG_015.png"
  },
  {
    name: "Fel Reaver",
    artist: "Zoltan & Gabor",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1982,
    flavor: "So reaver. Much fel. Wow.",
    health: 8,
    id: "GVG_016",
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 2,
    rating: 3,
    text:
      "Whenever your opponent plays a card, remove the top 3 cards of your deck.",
    type: "MINION",
    extra: ["DAMAGE", "TEMPO", "FAST"],
    imageUrl: "12264.png",
    tile: "GVG_016.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "19b2acee-7292-4087-bda3-028851cec03e",
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
                minValue: "Fel Reaver"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Call Pet",
    artist: "E.M. Gist",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2094,
    flavor: "Real hunters tame hungry crabs.",
    id: "GVG_017",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "Draw a card. If it's a Beast, it costs (4) less.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "12224.png",
    tile: "GVG_017.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 15,
            id: "91a7d9e5-4992-4125-bdc2-930065f12e13",
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
    name: "Mistress of Pain",
    artist: "Carl Critchlow",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2172,
    flavor:
      "Her sister is the Mistress of Pane who sells windows and shower doors.",
    health: 4,
    id: "GVG_018",
    mechanics: ["LIFESTEAL"],
    race: "DEMON",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "Lifesteal",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12283.png",
    tile: "GVG_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "0625d062-2a34-4794-bb53-a02ec2e22044",
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
    name: "Demonheart",
    artist: "Kerem Beyit",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 1985,
    flavor:
      "Virtually every member of the pro demon lobby is a warlock. Weird.",
    id: "GVG_019",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text:
      "Deal $5 damage to a minion.  If it's a friendly Demon, give it +5/+5 instead.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "12237.png",
    tile: "GVG_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "94fda80c-e978-47e4-a4de-d516469f5285",
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
    name: "Fel Cannon",
    artist: "Matt Gaser",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 1997,
    flavor: "The box says, 'New and improved, with 200% more fel!'",
    health: 5,
    id: "GVG_020",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "At the end of your turn, deal 2 damage to a non-Mech minion.",
    type: "MINION",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "12221.png",
    tile: "GVG_020.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "268fd2fc-b871-4761-a8e2-6f2d22bb04fb",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mal'Ganis",
    artist: "Wayne Reynolds",
    attack: 9,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 9,
    dbfId: 1986,
    elite: true,
    flavor:
      "Mal'Ganis doesn't like being betrayed, so if you discard him, watch out.",
    health: 7,
    id: "GVG_021",
    mechanics: ["AURA"],
    race: "DEMON",
    rarity: "LEGENDARY",
    referencedTags: ["IMMUNE"],
    set: 2,
    rating: 2,
    text: "Your other Demons have +2/+2. Your hero is Immune.",
    type: "MINION",
    extra: ["BUFF"],
    imageUrl: "12294.png",
    tile: "GVG_021.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "39fb5e99-e01e-4329-b664-345392a80e9d",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Voidcaller"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 10,
            id: "ea154f90-baf0-4cb6-b754-535470e8996f",
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
    name: "Tinker's Sharpsword Oil",
    artist: "Den",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 2095,
    flavor: "'Get ready to strike oil!' - Super-cheesy battle cry",
    id: "GVG_022",
    mechanics: ["COMBO"],
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text:
      "Give your weapon +3 Attack. Combo: Give a random friendly minion +3 Attack.",
    type: "SPELL",
    extra: ["DAMAGE", "BUFF", "SMALL_REMOVAL"],
    imageUrl: "12276.png",
    tile: "GVG_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "8a0db6b6-d8a6-4fa6-8aff-67f55169939d",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "CHARGE"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "cb678e1b-3782-4dad-b03c-c53c04c5708b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Preparation"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Goblin Auto-Barber",
    artist: "Zolton Boros",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 1988,
    flavor: "This guy is excellent at adjusting your haircut and/or height.",
    health: 2,
    id: "GVG_023",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Battlecry: Give your weapon +1 Attack.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12212.png",
    tile: "GVG_023.png"
  },
  {
    name: "Cogmaster's Wrench",
    artist: "Richard Wright",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 1989,
    durability: 3,
    flavor: "For tightening cogs and smashin' troggs!",
    id: "GVG_024",
    mechanics: ["AURA"],
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Has +2 Attack while you have a Mech.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "12265.png",
    tile: "GVG_024.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "6641c05e-fd91-4027-bca1-a8c471f45750",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "One-eyed Cheat",
    artist: "Danny Beck",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 1990,
    flavor:
      "When pirates say there is no 'Eye' in 'team,' they are very literal about it.",
    health: 1,
    id: "GVG_025",
    race: "PIRATE",
    rarity: "RARE",
    referencedTags: ["STEALTH"],
    set: 2,
    rating: 1,
    text: "Whenever you summon a Pirate, gain Stealth.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12255.png",
    tile: "GVG_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "602c9fb0-0c28-493e-9847-347c8dc15bef",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "PIRATE"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "63fcb006-df00-4817-a88b-750c6c2cb538",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["WEAPON", "HERO_POWER"]
              },
              {
                property: "attack",
                operation: "GREATER_THAN",
                minValue: 0
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Feign Death",
    artist: "Luca Zontini",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 1991,
    flavor:
      "The hardest part about doing a 'Feign Death' convincingly is learning how to make the right smell. It takes a lot of commitment.",
    id: "GVG_026",
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    set: 2,
    rating: 1,
    text: "Trigger all Deathrattles on your minions.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "12238.png",
    tile: "GVG_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "44fe5389-dff5-4e04-952f-88d028dd89c7",
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
    name: "Iron Sensei",
    artist: "Brian Despain",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 1992,
    flavor:
      "Mechs like learning from him because he really speaks their language. 0110100001101001",
    health: 2,
    id: "GVG_027",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "At the end of your turn, give another friendly Mech +2/+2.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12229.png",
    tile: "GVG_027.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "b7f378e2-529b-4358-9ae6-c7c735f35c6b",
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
                property: "cost",
                operation: "LESS_THAN",
                minValue: "6"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Iron Sensei"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Trade Prince Gallywix",
    artist: "Wei Wang",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 1993,
    elite: true,
    flavor:
      "Gallywix believes in supply and demand. He supplies the beatings and demands you pay up!",
    health: 8,
    id: "GVG_028",
    rarity: "LEGENDARY",
    set: 2,
    rating: 2,
    text:
      "Whenever your opponent casts a spell, gain a copy of it and give them a Coin.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12291.png",
    tile: "GVG_028.png"
  },
  {
    name: "Ancestor's Call",
    artist: "Dan Scott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 1998,
    flavor: "'Hey! Ancestors!' - Ancestor's call",
    id: "GVG_029",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Put a random minion from each player's hand into the battlefield.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "12218.png",
    tile: "GVG_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "580042cc-5488-43ff-8a83-d83d608732c4",
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
                minValue: 7
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Anodized Robo Cub",
    artist: "Eva Widermann",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 2096,
    flavor: "It's adorable! AND OH MY GOODNESS WHY IS IT EATING MY FACE",
    health: 2,
    id: "GVG_030",
    mechanics: ["CHOOSE_ONE", "TAUNT"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Taunt. Choose One - +1 Attack; or +1 Health.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12219.png",
    tile: "GVG_030.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "ac79fc4d-a181-4107-bef7-3d73c04893da",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Recycle",
    artist: "Efrem Palacios",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 1995,
    flavor:
      "Druidic recycling involves putting plastics in one bin and enemy minions in another bin.",
    id: "GVG_031",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 2,
    rating: 3,
    text: "Shuffle an enemy minion into your opponent's deck.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "12279.png",
    tile: "GVG_031.png"
  },
  {
    name: "Grove Tender",
    artist: "Chris Rahn",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 2225,
    flavor:
      "Likes: Hiking and the great outdoors. Dislikes: Goblin shredders and sandals. (Can’t find any that fit!).",
    health: 4,
    id: "GVG_032",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    set: 2,
    rating: 2,
    text:
      "Choose One - Give each player a Mana Crystal; or Each player draws a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "TEMPO", "FAST"],
    imageUrl: "12273.png",
    tile: "GVG_032.png"
  },
  {
    name: "Tree of Life",
    artist: "Steve Prescott",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 9,
    dbfId: 2001,
    flavor: "Healing: It grows on trees!",
    id: "GVG_033",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Restore all characters to full Health.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "12270.png",
    tile: "GVG_033.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "f16b800b-7db0-497f-b1de-db109c84a4bd",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "health",
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
    name: "Mech-Bear-Cat",
    artist: "Trent Kaniuga",
    attack: 7,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 2002,
    entourage: [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    flavor: "Crushes buildings with his BEAR hands.",
    health: 6,
    id: "GVG_034",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    text:
      "Whenever this minion takes damage, add a Spare Part card to your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12226.png",
    tile: "GVG_034.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "f174128d-91de-465b-981c-f6b4b3293fcf",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Malorne",
    artist: "Oliver Chipping",
    attack: 9,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 2003,
    elite: true,
    flavor:
      "When Malorne isn't mauling hordes of demons, he enjoys attending parties, though he prefers to go stag.",
    health: 7,
    id: "GVG_035",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 2,
    rating: 2,
    text: "Deathrattle: Shuffle this minion into your deck.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "12293.png",
    tile: "GVG_035.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "ee781112-ccf0-4f42-8d6e-e53b745e02c9",
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
    name: "Powermace",
    artist: "Zoltan & Gabor",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 2004,
    durability: 2,
    flavor:
      "People assume that shamans control the elements, but really, they have to ask them stuff and the elements are like, 'Yeah ok, sure.'",
    id: "GVG_036",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 2,
    rating: 4,
    text: "Deathrattle: Give a random friendly Mech +2/+2.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "12269.png",
    tile: "GVG_036.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9ec8a601-b676-47a3-a3e2-4dbd26ff8397",
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
    name: "Whirling Zap-o-matic",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2005,
    flavor: "If you pay a little extra, you can get it in 'candy-apple red.'",
    health: 2,
    id: "GVG_037",
    mechanics: ["WINDFURY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Windfury",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12231.png",
    tile: "GVG_037.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1baff6e4-c578-4454-a187-c4149fe98ed9",
            filters: [
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
    name: "Crackle",
    artist: "Warren Mahy",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2006,
    flavor: "Snap! This card! Pop!",
    id: "GVG_038",
    mechanics: ["OVERLOAD"],
    overload: 1,
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Deal $3-$6 damage. Overload: (1)",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "12241.png",
    tile: "GVG_038.png"
  },
  {
    name: "Vitality Totem",
    artist: "Guangjian Huang",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2007,
    flavor: "You can usually find these at the totemist's market on Saturdays.",
    health: 3,
    id: "GVG_039",
    race: "TOTEM",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "At the end of your turn, restore 4 Health to your hero.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12259.png",
    tile: "GVG_039.png"
  },
  {
    name: "Siltfin Spiritwalker",
    artist: "Clint Langley",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2008,
    flavor:
      "The elements respond to anyone who calls them for a worthy cause, even if you call them by yelling, 'MRGHRGLGLGL!'",
    health: 5,
    id: "GVG_040",
    mechanics: ["OVERLOAD"],
    overload: 1,
    race: "MURLOC",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Whenever another friendly Murloc dies, draw a card. Overload: (1)",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12277.png",
    tile: "GVG_040.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "1be95e51-fb76-49e2-88f8-c7ad7695e2f7",
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
            minCards: 6,
            maxCards: 8,
            id: "281e4120-4288-45b1-9fa9-5ad56c91f800",
            filters: [
              {
                property: "text",
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
    name: "Dark Wispers",
    artist: "Trent Kaniuga",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 2009,
    flavor: "Don't worry; we fired the person who named this card.",
    id: "GVG_041",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    referencedTags: ["TAUNT"],
    set: 2,
    rating: 1,
    text: "Choose One - Summon 5 Wisps; or Give a minion +5/+5 and Taunt.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "12298.png",
    tile: "GVG_041.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "fd4f7992-b1d5-4a1b-a748-44ecf122cee9",
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
    name: "Neptulon",
    artist: "Ruan Jia",
    attack: 7,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 7,
    dbfId: 2010,
    elite: true,
    flavor:
      "Neptulon is 'The Tidehunter'. He’s one of the four elemental lords. And he and Ragnaros get together and make really amazing saunas.",
    health: 7,
    id: "GVG_042",
    mechanics: ["BATTLECRY", "OVERLOAD"],
    overload: 3,
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 3,
    text: "Battlecry: Add 4 random Murlocs to your hand. Overload: (3)",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "12292.png",
    tile: "GVG_042.png"
  },
  {
    name: "Glaivezooka",
    artist: "Gino Whitehall",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2011,
    durability: 2,
    flavor: "For the times when a regular bazooka just isn't enough.",
    id: "GVG_043",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 2,
    rating: 4,
    text: "Battlecry: Give a random friendly minion +1 Attack.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "12267.png",
    tile: "GVG_043.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9e6a44f8-3377-4a2b-8f25-66a041ddd1a0",
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
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spider Tank",
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2012,
    flavor:
      "'What if we put guns on it?' -Fizzblitz, staring at the spider-transportation-machine",
    health: 4,
    id: "GVG_044",
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 4,
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12184.png",
    tile: "GVG_044.png"
  },
  {
    name: "Imp-losion",
    artist: "Jaemin Kim",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 2013,
    flavor: "The shrapnel is waaaaay worse than the explosion.",
    id: "GVG_045",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 2,
    rating: 4,
    text:
      "Deal $2-$4 damage to a minion. Summon a 1/1 Imp for each damage dealt.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "MIN_GEN", "TEMPO"],
    imageUrl: "12302.png",
    tile: "GVG_045.png"
  },
  {
    name: "King of Beasts",
    artist: "Seamus Gallagher",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 2014,
    flavor: "He never sleeps.  Not even in the mighty jungle.",
    health: 6,
    id: "GVG_046",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "BEAST",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "Taunt. Battlecry: Gain +1 Attack for each other Beast you have.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12285.png",
    tile: "GVG_046.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6b276636-13dd-4ad3-9524-b19b3eab48dc",
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
    name: "Sabotage",
    artist: "Dave Allsop",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 2015,
    flavor:
      "Rogues can't stand it. They know you planned it! They are going to set you straight!",
    id: "GVG_047",
    mechanics: ["COMBO"],
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_MINION_TARGET: 0 },
    rarity: "EPIC",
    set: 2,
    rating: 2,
    text: "Destroy a random enemy minion. Combo: And your opponent's weapon.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "TEMPO"],
    imageUrl: "12236.png",
    tile: "GVG_047.png"
  },
  {
    name: "Metaltooth Leaper",
    artist: "Hideaki Takamura",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 2016,
    flavor:
      "Don't leave them out in the rain. In Un'Goro Crater there is a whole colony of rust-tooth leapers.",
    health: 3,
    id: "GVG_048",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Battlecry: Give your other Mechs +2 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12254.png",
    tile: "GVG_048.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a1900ab0-d6c3-4167-b3bf-93108b5906f0",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gahz'rilla",
    artist: "Raymond Swanland",
    attack: 6,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 2017,
    elite: true,
    flavor: "The Sen'jin High football team is The Gahz'rillas.",
    health: 9,
    id: "GVG_049",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 2,
    rating: 2,
    text: "Whenever this minion takes damage, double its Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12232.png",
    tile: "GVG_049.png"
  },
  {
    name: "Bouncing Blade",
    artist: "Andrew Hou",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2018,
    flavor:
      "Only goblins would think this was a good idea. Even they are starting to have their doubts.",
    id: "GVG_050",
    playRequirements: { REQ_MINIMUM_TOTAL_MINIONS: 1 },
    rarity: "EPIC",
    set: 2,
    rating: 2,
    text: "Deal $1 damage to a random minion. Repeat until a minion dies.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "12203.png",
    tile: "GVG_050.png"
  },
  {
    name: "Warbot",
    artist: "Tyler Walpole",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 2019,
    flavor:
      "Mass production of warbots was halted when it was discovered that they were accidentally being produced at 'sample size.'",
    health: 3,
    id: "GVG_051",
    mechanics: ["ENRAGED"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Enrage: +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12260.png",
    tile: "GVG_051.png"
  },
  {
    name: "Crush",
    artist: "Michael Sutfin",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 2020,
    flavor:
      "Using this card on your enemies is one of the best things in life, according to some barbarians.",
    id: "GVG_052",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text:
      "Destroy a minion. If you have a damaged minion, this costs (4) less.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "12303.png",
    tile: "GVG_052.png"
  },
  {
    name: "Shieldmaiden",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 2021,
    flavor:
      "She has three shieldbearers in her party to supply her with back ups when she gets low on durability.",
    health: 5,
    id: "GVG_053",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 2,
    rating: 3,
    text: "Battlecry: Gain 5 Armor.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "12215.png",
    tile: "GVG_053.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "79468c2e-3286-4f54-aafa-d46827c0ddd6",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "armor"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Plated Beetle"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Gluttonous Ooze"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shieldmaiden"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Ogre Warmaul",
    artist: "Richard Wright",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2022,
    durability: 2,
    flavor:
      "Simple, misguided, and incredibly dangerous. You know, like most things ogre.",
    id: "GVG_054",
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "50% chance to attack the wrong enemy.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "12211.png",
    tile: "GVG_054.png"
  },
  {
    name: "Screwjank Clunker",
    artist: "Jesper Ejsing",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 2023,
    flavor:
      "If it breaks, just kick it a couple of times while yelling 'Durn thing!'",
    health: 5,
    id: "GVG_055",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 1,
    targetingArrowText: "Give +2/+2.",
    text: "Battlecry: Give a friendly Mech +2/+2.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12220.png",
    tile: "GVG_055.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "c686833d-f49f-4346-a342-8a9063a07f2c",
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
                minValue: "Screwjank Clunker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Iron Juggernaut",
    artist: "Raymond Swanland",
    attack: 6,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 2024,
    elite: true,
    flavor:
      "The Iron Juggernaut guards Orgrimmar and has just earned the 'Employee of the Month' award!",
    health: 5,
    id: "GVG_056",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text:
      "Battlecry: Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.",
    type: "MINION",
    extra: ["DAMAGE"],
    imageUrl: "12295.png",
    tile: "GVG_056.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "05cbb5b9-f1ee-487d-8c67-fc7b43b2a768",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Coldlight Oracle"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 3,
            id: "83bd0c3e-57d8-49fc-8647-c75cd031beea",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "friendly minion.*hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Seal of Light",
    artist: "Jason Chan",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 2025,
    flavor: "The walrus of Light restores EIGHT Health.",
    id: "GVG_057",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Restore #4 Health to your hero and gain +2 Attack this turn.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "12305.png",
    tile: "GVG_057.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "50cd1682-aeac-45d3-9ecc-0a32255fb613",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Blackguard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shielded Minibot",
    artist: "Raymond Swanland",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 2026,
    flavor: "He chooses to believe what he is programmed to believe!",
    health: 2,
    id: "GVG_058",
    mechanics: ["DIVINE_SHIELD"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 4,
    text: "Divine Shield",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12257.png",
    tile: "GVG_058.png"
  },
  {
    name: "Coghammer",
    artist: "Dany Orizio",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 2027,
    durability: 3,
    flavor:
      "So you ripped this out of a machine, carved some runes on it, stuck it on a handle, and now it's a weapon of great divine power? Seems legit.",
    id: "GVG_059",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    set: 2,
    rating: 4,
    text: "Battlecry: Give a random friendly minion Divine Shield and Taunt.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "12228.png",
    tile: "GVG_059.png"
  },
  {
    name: "Quartermaster",
    artist: "Phroilan Gardner",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2028,
    flavor: "His specialty? Dividing things into four pieces.",
    health: 5,
    id: "GVG_060",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 2,
    rating: 3,
    text: "Battlecry: Give your Silver Hand Recruits +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "12280.png",
    tile: "GVG_060.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "f1f4e182-0678-496a-9f79-92a05e82fbfe",
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
    name: "Muster for Battle",
    artist: "Mike Hayes",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 2029,
    flavor:
      "'I'm bringing the guacamole!' – One of the most successful (yet rare) Silver Hand rallying cries",
    id: "GVG_061",
    rarity: "RARE",
    set: 2,
    rating: 4,
    text: "Summon three 1/1 Silver Hand Recruits. Equip a 1/4 Weapon.",
    type: "SPELL",
    extra: ["MIN_GEN", "TEMPO"],
    imageUrl: "12223.png",
    tile: "GVG_061.png"
  },
  {
    name: "Cobalt Guardian",
    artist: "Jim Nelson",
    attack: 6,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2030,
    flavor:
      "Guardians used to be built out of Adamantium, but production got moved to Gadgetzan and Cobalt was cheap.",
    health: 3,
    id: "GVG_062",
    race: "MECHANICAL",
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 2,
    rating: 1,
    text: "Whenever you summon a Mech, gain Divine Shield.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12222.png",
    tile: "GVG_062.png"
  },
  {
    name: "Bolvar Fordragon",
    artist: "Tooth",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2031,
    elite: true,
    flavor:
      "Spoiler alert: Bolvar gets melted and then sits on an ice throne and everyone forgets about him.",
    health: 7,
    id: "GVG_063",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text:
      "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12244.png",
    tile: "GVG_063.png"
  },
  {
    name: "Puddlestomper",
    artist: "Jaemin Kim",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2032,
    flavor: "He pays homage to Morgl, the great murloc oracle! (Who doesn't??)",
    health: 2,
    id: "GVG_064",
    race: "MURLOC",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12274.png",
    tile: "GVG_064.png"
  },
  {
    name: "Ogre Brute",
    artist: "Vinod Rams",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2033,
    flavor: "Ogres have really terrible short-term chocolate.",
    health: 4,
    id: "GVG_065",
    mechanics: ["FORGETFUL"],
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "50% chance to attack the wrong enemy.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12281.png",
    tile: "GVG_065.png"
  },
  {
    name: "Dunemaul Shaman",
    artist: "José Ladrönn",
    attack: 5,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2034,
    flavor: "He just closes his eyes and goes for it. Raarararrrarar!",
    health: 4,
    id: "GVG_066",
    mechanics: ["FORGETFUL", "OVERLOAD", "WINDFURY"],
    overload: 1,
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Windfury, Overload: (1) 50% chance to attack the wrong enemy.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12234.png",
    tile: "GVG_066.png"
  },
  {
    name: "Stonesplinter Trogg",
    artist: "Peet Cooper",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2035,
    flavor:
      "The only thing worse than smelling troggs is listening to their poetry.",
    health: 3,
    id: "GVG_067",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Whenever your opponent casts a spell, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12266.png",
    tile: "GVG_067.png"
  },
  {
    name: "Burly Rockjaw Trogg",
    artist: "Aleksi Briclot",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2036,
    flavor: "He's burly because he does CrossFit.",
    health: 5,
    id: "GVG_068",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Whenever your opponent casts a spell, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12233.png",
    tile: "GVG_068.png"
  },
  {
    name: "Antique Healbot",
    artist: "Jesper Ejsing",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2037,
    flavor:
      "They don't make 'em like they used to! (Because of explosions, mostly.)",
    health: 3,
    id: "GVG_069",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Battlecry: Restore 8 Health to your hero.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "12227.png",
    tile: "GVG_069.png"
  },
  {
    name: "Salty Dog",
    artist: "Alex Horley Orlandelli",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2038,
    flavor: "He's recently recovered from being a 'scurvy dog.'",
    health: 4,
    id: "GVG_070",
    race: "PIRATE",
    rarity: "COMMON",
    set: 2,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12263.png",
    tile: "GVG_070.png"
  },
  {
    name: "Lost Tallstrider",
    artist: "Benjamin Zhang",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2039,
    flavor:
      "The message, 'If found, please return to Mulgore,' is tattooed on his rear.",
    health: 4,
    id: "GVG_071",
    race: "BEAST",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12284.png",
    tile: "GVG_071.png"
  },
  {
    name: "Shadowboxer",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2040,
    flavor: "Punching is its primary function. Also, its secondary function.",
    health: 3,
    id: "GVG_072",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Whenever a character is healed, deal 1 damage to a random enemy.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12256.png",
    tile: "GVG_072.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "18379b06-2292-43a4-9053-0e048226a8fe",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "restore"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Auchenai Soulpriest"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cobra Shot",
    artist: "Howard Lyon",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 2041,
    flavor: "'Cobra Shot' hurts way, way, way more than 'Cobra Cuddle.'",
    id: "GVG_073",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "Deal $3 damage to a minion and the enemy hero.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "12304.png",
    tile: "GVG_073.png"
  },
  {
    name: "Kezan Mystic",
    artist: "Jakub Kasper",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2042,
    flavor:
      "They pretend to be wise and enlightened, but they mostly just hate to be left out of a secret.",
    health: 3,
    id: "GVG_074",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 2,
    rating: 2,
    text: "Battlecry: Take control of a random enemy Secret.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12252.png",
    tile: "GVG_074.png"
  },
  {
    name: "Ship's Cannon",
    artist: "Warren Mahy",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2043,
    flavor:
      "If you hear someone yell, 'Cannonball!' you're about to get wet. Or crushed.",
    health: 3,
    id: "GVG_075",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "After you summon a Pirate, deal 2 damage to a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12258.png",
    tile: "GVG_075.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "b8aff1d5-21db-4d26-baa3-13fff816cf49",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "PIRATE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Explosive Sheep",
    artist: "Ralph Horsley",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2044,
    flavor:
      "How is this supposed to work?  Your enemies think, '<i>Hey!</i> Cute sheep!' and run over to cuddle it?",
    health: 1,
    id: "GVG_076",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Deathrattle: Deal 2 damage to all minions.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "12180.png",
    tile: "GVG_076.png"
  },
  {
    name: "Anima Golem",
    artist: "Josh Harris",
    attack: 9,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 2045,
    flavor:
      "The Dark Animus is evil and mysterious and huge and unable to write sentences that utilize proper grammar.",
    health: 9,
    id: "GVG_077",
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "At the end of each turn, destroy this minion if it's your only one.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12245.png",
    tile: "GVG_077.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "1adaff32-f676-4eb2-b31c-c1925d0e522b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Dreadsteed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mechanical Yeti",
    artist: "Chris Seaman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2046,
    entourage: [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    flavor:
      "The yetis of Chillwind Point are a source of both inspiration and savage beatings.",
    health: 5,
    id: "GVG_078",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Deathrattle: Give each player a Spare Part.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12253.png",
    tile: "GVG_078.png"
  },
  {
    name: "Force-Tank MAX",
    artist: "Nutchapol Thitinunthakorn",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2047,
    flavor:
      "There is a factory in Tanaris for crafting force-tanks, but it only ever made two, because of cost overruns.",
    health: 7,
    id: "GVG_079",
    mechanics: ["DIVINE_SHIELD"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Divine Shield",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12248.png",
    tile: "GVG_079.png"
  },
  {
    name: "Druid of the Fang",
    artist: "Brandon Kitkouski",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 2048,
    flavor:
      "The Druids of the Fang live in the Wailing Caverns. They wear cool snake shirts and tell snake jokes and say 'bro' a lot.",
    health: 4,
    id: "GVG_080",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "Battlecry: If you have a Beast, transform this minion into a 7/7.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12243.png",
    tile: "GVG_080.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f00d9a59-6b1e-4a56-9e56-986fe911f08d",
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
    name: "Gilblin Stalker",
    artist: "Seamus Gallagher",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2049,
    flavor:
      "'Shhh, I think I hear something.' 'Ah, it's probably nothing.' - Every Henchman",
    health: 3,
    id: "GVG_081",
    mechanics: ["STEALTH"],
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Stealth",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12249.png",
    tile: "GVG_081.png"
  },
  {
    name: "Clockwork Gnome",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2050,
    entourage: [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    flavor: "Clockwork gnomes are always asking what time it is.",
    health: 1,
    id: "GVG_082",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Deathrattle: Add a Spare Part card to your hand.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12200.png",
    tile: "GVG_082.png"
  },
  {
    name: "Upgraded Repair Bot",
    artist: "Nutchapol Thitinunthakorn",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 2051,
    flavor:
      "It's the same as the previous generation but they slapped the word 'upgraded' on it to sell it for double.",
    health: 5,
    id: "GVG_083",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    targetingArrowText: "Give a Mech +4 Health.",
    text: "Battlecry: Give a friendly Mech +4 Health.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12185.png",
    tile: "GVG_083.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6f4cedf8-da49-4a76-a143-59e846710358",
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
                minValue: "Upgraded Repair Bot"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Flying Machine",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2052,
    flavor:
      "To operate, this contraption needs a hula doll on the dashboard. Otherwise it's just a “falling machine.”",
    health: 4,
    id: "GVG_084",
    mechanics: ["WINDFURY"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12247.png",
    tile: "GVG_084.png"
  },
  {
    name: "Annoy-o-Tron",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2053,
    flavor:
      "The inventor of the Annoy-o-Tron was immediately expelled from Tinkerschool, Tinkertown, and was eventually exiled from the Eastern Kingdoms altogether.",
    health: 2,
    id: "GVG_085",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 3,
    text: "Taunt Divine Shield",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12181.png",
    tile: "GVG_085.png"
  },
  {
    name: "Siege Engine",
    artist: "Zero Yue",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 2054,
    flavor: "Wintergrasp Keep's only weakness!",
    health: 5,
    id: "GVG_086",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Whenever you gain Armor, give this minion +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12275.png",
    tile: "GVG_086.png"
  },
  {
    name: "Steamwheedle Sniper",
    artist: "Jun Kang",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2055,
    flavor:
      "Goblins seldom have the patience for sniping. Most prefer lobbing explosives.",
    health: 3,
    id: "GVG_087",
    rarity: "EPIC",
    set: 2,
    rating: 2,
    text: "Your Hero Power can target minions.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "12242.png",
    tile: "GVG_087.png"
  },
  {
    name: "Ogre Ninja",
    artist: "Samwise",
    attack: 6,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 2056,
    flavor:
      "He didn't have the grades to get into ninja school, but his dad pulled some strings.",
    health: 6,
    id: "GVG_088",
    mechanics: ["FORGETFUL", "STEALTH"],
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Stealth 50% chance to attack the wrong enemy.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "12235.png",
    tile: "GVG_088.png"
  },
  {
    name: "Illuminator",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2057,
    flavor:
      "'LUMOS!' is not what they yell. What do you think this is, Hogwarts?",
    health: 4,
    id: "GVG_089",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 2,
    rating: 2,
    text:
      "If you control a Secret at the end of your turn, restore 4 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12214.png",
    tile: "GVG_089.png"
  },
  {
    name: "Madder Bomber",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2058,
    flavor: "Dang, Bomber, calm down.",
    health: 4,
    id: "GVG_090",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 2,
    rating: 2,
    text:
      "Battlecry: Deal 6 damage randomly split between all other characters.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "12177.png",
    tile: "GVG_090.png"
  },
  {
    name: "Arcane Nullifier X-21",
    artist: "Zero Yue",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2059,
    flavor:
      "There was some hard talk between gnome magi and engineers about inventing this mech.",
    health: 5,
    id: "GVG_091",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "TAUNT"
    ],
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    text: "Taunt Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12246.png",
    tile: "GVG_091.png"
  },
  {
    name: "Gnomish Experimenter",
    artist: "Jesper Ejsing",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2060,
    flavor:
      "He's legitimately surprised every time he turns himself into a chicken.",
    health: 2,
    id: "GVG_092",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 2,
    rating: 2,
    text:
      "Battlecry: Draw a card. If it's a minion, transform it into a Chicken.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "12199.png",
    tile: "GVG_092.png"
  },
  {
    name: "Target Dummy",
    artist: "Matt Dixon",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 0,
    dbfId: 2061,
    flavor: "The engineering equivalent of a 'Kick Me' sticker.",
    health: 2,
    id: "GVG_093",
    mechanics: ["TAUNT"],
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12288.png",
    tile: "GVG_093.png"
  },
  {
    name: "Jeeves",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2062,
    flavor: "This robot is a lean, mean, butlerin' machine.",
    health: 4,
    id: "GVG_094",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 1,
    text:
      "At the end of each player's turn, that player draws until they have 3 cards.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12216.png",
    tile: "GVG_094.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "b760a95f-e1c9-44e4-9bc2-3f99b0f42900",
            filters: [
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
    name: "Goblin Sapper",
    artist: "Jesper Ejsing",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2063,
    flavor:
      "He’s not such a binge exploder anymore. These days, he only explodes socially.",
    health: 4,
    id: "GVG_095",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 2,
    rating: 1,
    text: "Has +4 Attack while your opponent has 6 or more cards in hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12213.png",
    tile: "GVG_095.png"
  },
  {
    name: "Piloted Shredder",
    artist: "Dan Scott",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2064,
    flavor:
      "Once upon a time, only goblins piloted shredders. These days, everyone from Doomsayer to Lorewalker Cho seems to ride one.",
    health: 3,
    id: "GVG_096",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 4,
    text: "Deathrattle: Summon a random 2-Cost minion.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12191.png",
    tile: "GVG_096.png"
  },
  {
    name: "Lil' Exorcist",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2065,
    flavor:
      "Warlocks have the town exorcist on speed dial in case they unleash the wrong demon.",
    health: 3,
    id: "GVG_097",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 2,
    rating: 1,
    text: "Taunt Battlecry: Gain +1/+1 for each enemy Deathrattle minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12239.png",
    tile: "GVG_097.png"
  },
  {
    name: "Gnomeregan Infantry",
    artist: "Zoltan & Gabor",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2066,
    flavor:
      "The gnomes are valiant and ready to return to their irradiated, poorly ventilated homeland!",
    health: 4,
    id: "GVG_098",
    mechanics: ["CHARGE", "TAUNT"],
    rarity: "COMMON",
    set: 2,
    rating: 1,
    text: "Charge Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12286.png",
    tile: "GVG_098.png"
  },
  {
    name: "Bomb Lobber",
    artist: "Luca Zontini",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2067,
    flavor: "He lobbies Orgrimmar daily on behalf of bombs.",
    health: 3,
    id: "GVG_099",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 2,
    rating: 3,
    text: "Battlecry: Deal 4 damage to a random enemy minion.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "12193.png",
    tile: "GVG_099.png"
  },
  {
    name: "Floating Watcher",
    artist: "Todd Lockwood",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 2068,
    flavor:
      "'Evil Eye Watcher of Doom' was the original name, but marketing felt it was a bit too aggressive.",
    health: 4,
    id: "GVG_100",
    race: "DEMON",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "Whenever your hero takes damage on your turn, gain +2/+2.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12271.png",
    tile: "GVG_100.png"
  },
  {
    name: "Scarlet Purifier",
    artist: "Anton Zemskov",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 2069,
    flavor:
      "The Scarlet Crusade is doing market research to find out if the 'Mauve Crusade' would be better received.",
    health: 3,
    id: "GVG_101",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 2,
    rating: 2,
    text: "Battlecry: Deal 2 damage to all minions with Deathrattle.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12240.png",
    tile: "GVG_101.png"
  },
  {
    name: "Tinkertown Technician",
    artist: "Gabor Szikszai",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2070,
    entourage: [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    flavor: "Won't you take me to... Tinkertown?",
    health: 3,
    id: "GVG_102",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text:
      "Battlecry: If you have a Mech, gain +1/+1 and add a Spare Part to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12202.png",
    tile: "GVG_102.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ca866045-3e32-4fae-8383-3b221b33bbf9",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Micro Machine",
    artist: "Skan Srisuwan",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2071,
    flavor: "This card is the real thing.",
    health: 2,
    id: "GVG_103",
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 2,
    rating: 2,
    text: "At the start of each turn, gain +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "12189.png",
    tile: "GVG_103.png"
  },
  {
    name: "Hobgoblin",
    artist: "Laurel D. Austin",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2072,
    flavor:
      "Hobgoblins are meeting next week to discuss union benefits.  First on the list: dental plan.",
    health: 3,
    id: "GVG_104",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Whenever you play a 1-Attack minion, give it +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "12250.png",
    tile: "GVG_104.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "cbb46355-eeac-4b1a-9eb4-850ccaf5d010",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
                operation: "EQUALS",
                minValue: 1
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
    name: "Piloted Sky Golem",
    artist: "Michael Phillippi",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2073,
    flavor:
      "The pinnacle of goblin engineering. Includes an espresso machine and foot massager.",
    health: 4,
    id: "GVG_105",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 2,
    rating: 3,
    text: "Deathrattle: Summon a random 4-Cost minion.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "12175.png",
    tile: "GVG_105.png"
  },
  {
    name: "Junkbot",
    artist: "Zoltan Boros",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2074,
    flavor: "One bot's junk is another bot's AWESOME UPGRADE!",
    health: 5,
    id: "GVG_106",
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Whenever a friendly Mech dies, gain +2/+2.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12251.png",
    tile: "GVG_106.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "a65d28d2-9882-43dc-95a5-4f65f0f91b71",
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
                minValue: "Junkbot"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Enhance-o Mechano",
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2075,
    flavor: "His enhancements are gluten free!",
    health: 2,
    id: "GVG_107",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD", "TAUNT", "WINDFURY"],
    set: 2,
    rating: 3,
    text:
      "Battlecry: Give your other minions Windfury, Taunt, or Divine Shield <i>(at random)</i>.",
    type: "MINION",
    extra: ["BUFF", "FAST"],
    imageUrl: "12176.png",
    tile: "GVG_107.png"
  },
  {
    name: "Recombobulator",
    artist: "Ben Olson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2076,
    flavor:
      "For when you didn’t combobulate quite right the first time around.",
    health: 2,
    id: "GVG_108",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 2,
    rating: 2,
    targetingArrowText: "Transform!",
    text:
      "Battlecry: Transform a friendly minion into a random minion with the same Cost.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12198.png",
    tile: "GVG_108.png"
  },
  {
    name: "Mini-Mage",
    artist: "Ben Olson",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2077,
    flavor:
      "He is sometimes found hiding in the treasure chest in the Gurubashi Arena.",
    health: 1,
    id: "GVG_109",
    mechanics: ["SPELLPOWER", "STEALTH"],
    rarity: "EPIC",
    set: 2,
    rating: 1,
    spellDamage: 1,
    text: "Stealth Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12262.png",
    tile: "GVG_109.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "efa27c3c-2a03-45ff-b5fb-99c82f80391c",
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
    name: "Dr. Boom",
    artist: "Alex Garner",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2078,
    elite: true,
    flavor: "MARVEL AT HIS MIGHT!",
    health: 7,
    id: "GVG_110",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 2,
    rating: 4,
    text:
      "Battlecry: Summon two 1/1 Boom Bots. <i>WARNING: Bots may explode.</i>",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "TEMPO", "FAST"],
    imageUrl: "12182.png",
    tile: "GVG_110.png"
  },
  {
    name: "Mimiron's Head",
    artist: "Trent Kaniuga",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2079,
    elite: true,
    flavor: "Do not push the big red button!",
    health: 5,
    id: "GVG_111",
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text:
      "At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12190.png",
    tile: "GVG_111.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "c03b136f-3995-4c82-af6b-e6ef648afc93",
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
                minValue: "Junkbot"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mogor the Ogre",
    artist: "Michal Ivan",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2080,
    elite: true,
    flavor:
      "Mogor helped reopen the Dark Portal once. You know you're in trouble when you have to rely on an ogre.",
    health: 6,
    id: "GVG_112",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text: "All minions have a 50% chance to attack the wrong enemy.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12282.png",
    tile: "GVG_112.png"
  },
  {
    name: "Foe Reaper 4000",
    artist: "James Ryman",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2081,
    elite: true,
    flavor:
      "Foe reaping is really not so different from harvest reaping, at the end of the day.",
    health: 9,
    id: "GVG_113",
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text: "Also damages the minions next to whomever it attacks.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12217.png",
    tile: "GVG_113.png"
  },
  {
    name: "Sneed's Old Shredder",
    artist: "Christopher Moeller",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2082,
    elite: true,
    flavor:
      "When Sneed was defeated in the Deadmines, his shredder was sold at auction to an anonymous buyer. (Probably Hogger.)",
    health: 7,
    id: "GVG_114",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 4,
    text: "Deathrattle: Summon a random Legendary minion.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "12187.png",
    tile: "GVG_114.png"
  },
  {
    name: "Toshley",
    artist: "Zoltan & Gabor",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2083,
    elite: true,
    entourage: [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_003",
      "PART_002",
      "PART_001",
      "PART_004"
    ],
    flavor: "Something about power converters.",
    health: 7,
    id: "GVG_115",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 2,
    rating: 3,
    text: "Battlecry and Deathrattle: Add a Spare Part card to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12225.png",
    tile: "GVG_115.png"
  },
  {
    name: "Mekgineer Thermaplugg",
    artist: "Trent Kaniuga",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2084,
    elite: true,
    flavor:
      "He was obsessed with explosives until he discovered knitting. Now he yells, “SWEATERS! MORE SWEATERS!”",
    health: 7,
    id: "GVG_116",
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 2,
    text: "Whenever an enemy minion dies, summon a Leper Gnome.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12196.png",
    tile: "GVG_116.png"
  },
  {
    name: "Gazlowe",
    artist: "Luke Mancini",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2085,
    elite: true,
    flavor: "Gazlowe was voted 'Most Likely to Explode' in high school.",
    health: 6,
    id: "GVG_117",
    rarity: "LEGENDARY",
    set: 2,
    rating: 2,
    text: "Whenever you cast a 1-mana spell, add a random Mech to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12287.png",
    tile: "GVG_117.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "c4759730-4c3f-4d00-b9fe-3798e5a2af66",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Troggzor the Earthinator",
    artist: "Mike Sass",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2086,
    elite: true,
    flavor:
      "He keeps earthinating the countryside despite attempts to stop him.",
    health: 6,
    id: "GVG_118",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text: "Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12272.png",
    tile: "GVG_118.png"
  },
  {
    name: "Blingtron 3000",
    artist: "Jomaro Kindred",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2087,
    elite: true,
    flavor: "PREPARE PARTY SERVOS FOR IMMEDIATE DEPLOYMENT.",
    health: 4,
    id: "GVG_119",
    mechanics: ["BATTLECRY"],
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    text: "Battlecry: Equip a random weapon for each player.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12183.png",
    tile: "GVG_119.png"
  },
  {
    name: "Hemet Nesingwary",
    artist: "Ralph Horsley",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2088,
    elite: true,
    flavor:
      "It's hard to make a living as a hunter in a world where beasts instantly reappear minutes after you kill them.",
    health: 3,
    id: "GVG_120",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "LEGENDARY",
    set: 2,
    rating: 1,
    targetingArrowText: "Destroy a Beast.",
    text: "Battlecry: Destroy a Beast.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12268.png",
    tile: "GVG_120.png"
  },
  {
    name: "Clockwork Giant",
    artist: "Dan Scott",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 12,
    dbfId: 2233,
    flavor: "He and Mountain Giant don't get along.",
    health: 8,
    id: "GVG_121",
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Costs (1) less for each card in your opponent's hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12201.png",
    tile: "GVG_121.png"
  },
  {
    name: "Wee Spellstopper",
    artist: "Jonboy Meyers",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 2234,
    flavor: "Bane of spellcasters and spelling bees everywhere.",
    health: 5,
    id: "GVG_122",
    mechanics: ["AURA"],
    rarity: "EPIC",
    set: 2,
    rating: 1,
    text: "Adjacent minions can't be targeted by spells or Hero Powers.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "12261.png",
    tile: "GVG_122.png"
  },
  {
    name: "Soot Spewer",
    artist: "Phil Saunders",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2249,
    flavor:
      "The inventor of the goblin shredder is involved in several patent disputes with the inventor of the soot spewer.",
    health: 3,
    id: "GVG_123",
    mechanics: ["SPELLPOWER"],
    race: "MECHANICAL",
    rarity: "RARE",
    set: 2,
    rating: 2,
    spellDamage: 1,
    targetingArrowText: "Give Spell Damage +2.",
    text: "Spell Damage +1",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "12306.png",
    tile: "GVG_123.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e17985ea-80a2-4060-b265-4391469977e5",
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
  }
];
