export const theBoomsdayProject = [
  {
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 47775,
    flavor: "'See you later bot' - Jaina",
    health: 1,
    id: "BOT_020",
    mechanics: ["MODULAR", "RUSH"],
    name: "Skaterbot",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Magnetic Rush",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688323961728335.png",
    tile: "BOT_020.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "d755764e-26c5-483c-8df5-9fffcae9f900",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Skaterbot"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "5e6a3367-f2cf-401d-bffd-b62d5f49c864",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Skaterbot"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Ursula dorada",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47781,
    flavor: "'You have my shield! And the rest of me too.'",
    health: 5,
    id: "BOT_021",
    mechanics: ["MODULAR", "TAUNT"],
    name: "Bronze Gatekeeper",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Magnetic Taunt",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324044505350.png",
    tile: "BOT_021.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "d665d7d2-1f04-4704-b9e7-8550c263e15e",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Skaterbot"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "cb89bcdc-7350-4785-8eba-cec5d2963fae",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Skaterbot"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Matt Dixon",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 47837,
    flavor: "They're Dr. Boom's babies. His baby boomers.",
    health: 2,
    id: "BOT_031",
    mechanics: ["DEATHRATTLE"],
    name: "Goblin Bomb",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Deathrattle: Deal 2 damage to the enemy hero.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["DAMAGE"],
    imageUrl: "636688324097279964.png",
    tile: "BOT_031.png"
  },
  {
    artist: "Alex Horley Orlandelli",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 47840,
    flavor: "Me throw face.",
    id: "BOT_033",
    mechanics: ["AFFECTED_BY_SPELL_POWER"],
    name: "Bomb Toss",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    text: "Deal $2 damage. Summon a 0/2 Goblin Bomb.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["DAMAGE"],
    imageUrl: "636688324178717093.png",
    tile: "BOT_033.png"
  },
  {
    artist: "Jomaro Kindred",
    attack: 5,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 47841,
    elite: true,
    flavor:
      "Every good plan requires a bit of patience. And a lot of explosives.",
    health: 5,
    id: "BOT_034",
    mechanics: ["BATTLECRY"],
    name: "Boommaster Flark",
    rarity: "LEGENDARY",
    text: "Battlecry: Summon four 0/2 Goblin Bombs.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636688324263834353.png",
    tile: "BOT_034.png"
  },
  {
    artist: "Tyler Walpole",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 47842,
    flavor: "Keeps getting banned for toxic behavior.",
    health: 2,
    id: "BOT_035",
    mechanics: ["MODULAR", "POISONOUS"],
    name: "Venomizer",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Magnetic Poisonous",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688324337280856.png",
    tile: "BOT_035.png"
  },
  {
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 47855,
    flavor: "She learns by trial and error.  Mostly error.",
    health: 1,
    id: "BOT_038",
    mechanics: ["BATTLECRY"],
    name: "Fireworks Tech",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    text:
      "Battlecry: Give a friendly Mech +1/+1. If it has Deathrattle, trigger it.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324378184438.png",
    tile: "BOT_038.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "021e6d23-359f-4b6f-be48-a10eabac6285",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "fd016088-7907-407a-b8d1-e65f27c6c480",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Fireworks Tech"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "f9a33f07-3a21-46d6-8e5d-3378c98e7e1a",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Fireworks Tech"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 47856,
    flavor: "If at first you don't succeed, die, die again.",
    health: 6,
    id: "BOT_039",
    mechanics: ["AURA"],
    name: "Necromechanic",
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    text: "Your Deathrattles trigger twice.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324422838440.png",
    tile: "BOT_039.png",
    versions: [
      {
        name: "Deathrattles",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "5f593141-af7f-4b64-ba4a-cfbbde5b8a18",
            filters: [
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
    artist: "J. Paick & K. Turovec",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 47860,
    flavor: "Harrison Jones was kicked off this project.",
    id: "BOT_042",
    name: "Weapons Project",
    rarity: "COMMON",
    text: "Each player equips a 2/3 Weapon and gains 6 Armor.",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["HEAL", "SMALL_REMOVAL"],
    imageUrl: "636688324471522661.png",
    tile: "BOT_042.png"
  },
  {
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47888,
    flavor: "Ironic. It could recycle others, but not itself.",
    health: 6,
    id: "BOT_050",
    mechanics: ["LIFESTEAL", "TAUNT"],
    name: "Rusty Recycler",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Taunt Lifesteal",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324607734375.png",
    tile: "BOT_050.png",
    versions: [
      {
        name: "Magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "6c355163-c8ab-4d16-8e5f-5c762f17e27e",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "J. Paick & K. Turovec",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 47887,
    flavor:
      "Step 1: Grow giant evil strawberry. Step 2: ???? Step 3: Rule Azeroth!",
    id: "BOT_054",
    name: "Biology Project",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "COMMON",
    text: "Each player gains 2 Mana Crystals.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688324659858961.png",
    tile: "BOT_054.png"
  },
  {
    artist: "Vladimir Kafanov",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 48691,
    flavor:
      "He's all beeps and smiles but you're just a walking pile of armor to him.",
    health: 3,
    id: "BOT_059",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Eternium Rover",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Whenever this minion takes damage, gain 2 Armor.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["FAST", "HEAL"],
    imageUrl: "636688324706062888.png",
    tile: "BOT_059.png",
    versions: [
      {
        name: "Damage this",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "42670af7-d1d7-4b1f-8262-daad9f8558d5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1.*damage.*all"
              }
            ]
          }
        ]
      },
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3493118c-cd30-479a-846b-f3a9b812f00b",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "3f372f50-146b-4202-9385-151b459f559f",
            filters: [
              {
                property: "race",
                operation: "NOT_EQUALS",
                minValue: "MECHANICAL"
              },
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
    artist: "Jiajun Tian",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 47924,
    flavor:
      "'Well if I didn't build the whelp and YOU didn't build the whelp…'",
    health: 2,
    id: "BOT_066",
    mechanics: ["DEATHRATTLE"],
    name: "Mechanical Whelp",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Deathrattle: Summon a 7/7 Mechanical Dragon.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688324760617745.png",
    tile: "BOT_066.png"
  },
  {
    artist: "Steve Prescott",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 47925,
    flavor: "This is the happiest moment of Grik's life. We'll miss him.",
    id: "BOT_067",
    name: "Rocket Boots",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    referencedTags: ["RUSH"],
    text: "Give a minion Rush. Draw a card.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["CARD_DRAW"],
    imageUrl: "636688324852275792.png",
    tile: "BOT_067.png"
  },
  {
    artist: "Zoltan Boros",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 9,
    dbfId: 47928,
    elite: true,
    flavor: "Dr. Boom ends his motivational speeches by dropping the mechs.",
    id: "BOT_069",
    name: "The Boomship",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "LEGENDARY",
    referencedTags: ["RUSH"],
    text: "Summon 3 random minions from your hand. Give them Rush.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324900739973.png",
    tile: "BOT_069.png",
    versions: [
      {
        name: "Finisher",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "bea564bc-920a-41b6-ac01-20cd8487114f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Charged Devilsaur"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "9c7e63eb-a4da-4924-a289-29ce84deeb23",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Grommash Hellscream"
              }
            ]
          }
        ]
      },
      {
        name: "Big recruit warrior",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9219f460-7b5f-4be7-a630-a324bec17906",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 7
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "fc57af45-51f3-41ff-a60f-844625b10a99",
            filters: [
              {
                property: "referencedTags",
                operation: "INCLUDES",
                minValue: "RECRUIT"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Zero",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 48025,
    flavor: "They're a little light-headed.",
    health: 1,
    id: "BOT_079",
    mechanics: ["BATTLECRY"],
    name: "Faithful Lumi",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    race: "MECHANICAL",
    rarity: "COMMON",
    targetingArrowText: "Give +1/+1.",
    text: "Battlecry: Give a friendly Mech +1/+1.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688324988327527.png",
    tile: "BOT_079.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "611a3327-2be6-48fe-803e-67ad9151002d",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Faithful Lumi"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Brian Despain",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48034,
    flavor: "Double-majoring in culinary sciences was definitely a mistake.",
    health: 2,
    id: "BOT_083",
    mechanics: ["BATTLECRY"],
    name: "Toxicologist",
    rarity: "COMMON",
    text: "Battlecry: Give your weapon +1 Attack.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688325031071294.png",
    tile: "BOT_083.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "f2f23666-4b11-474b-9f87-962ed92eeac3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "WEAPON"
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
    artist: "Alex Horley Orlandelli",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 48035,
    flavor: "Elite Tauren Chieftain's next hit single.",
    id: "BOT_084",
    name: "Violet Haze",
    rarity: "COMMON",
    referencedTags: ["DEATHRATTLE"],
    text: "Add 2 random Deathrattle cards to your hand.",
    type: "SPELL",
    set: 13,
    rating: 1,
    extra: ["VALUE"],
    imageUrl: "636688325076545184.png",
    tile: "BOT_084.png"
  },
  {
    artist: "Konstantin Turovec",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 48040,
    flavor: "The tenth Pyroblast really felt like overkill.",
    id: "BOT_087",
    name: "Academic Espionage",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "EPIC",
    text:
      "Shuffle 10 cards from your opponent's class into your deck. They cost (1).",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636688325116948662.png",
    tile: "BOT_087.png"
  },
  {
    artist: "Wayne Wu",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 48051,
    flavor: "It's just a Tempest Tantrum.",
    id: "BOT_093",
    name: "Elementary Reaction",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "COMMON",
    text: "Draw a card. Copy it if you played an Elemental last turn.",
    type: "SPELL",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688325165362865.png",
    tile: "BOT_093.png",
    versions: [
      {
        name: "Elementals",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "667833da-6516-4950-9c34-f71de86bc881",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
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
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48060,
    flavor: "After a stressful work day it really needs an outlet.",
    health: 4,
    id: "BOT_098",
    name: "Unpowered Mauler",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Can only attack if you cast a spell this turn.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688325208686688.png",
    tile: "BOT_098.png"
  },
  {
    artist: "Peter Stapleton",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 48799,
    flavor: "Genius is 1% inspiration, and 99% drawing your Deathwing.",
    id: "BOT_099",
    name: "Eureka!",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    text: "Summon a copy of a random minion from your hand.",
    type: "SPELL",
    set: 13,
    rating: 1,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688325259860760.png",
    tile: "BOT_099.png",
    versions: [
      {
        name: "Big shaman",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "2324fcf3-2446-4d3f-bbe7-6c0e42fd6ce8",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    artist: "A.J. Nazzaro",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 47978,
    flavor: "Let's see what's behind rift number one!",
    id: "BOT_101",
    name: "Astral Rift",
    rarity: "RARE",
    text: "Add 2 random minions to your hand.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688325300804315.png",
    tile: "BOT_101.png"
  },
  {
    artist: "Ivan Fomin",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 47979,
    flavor: "Preferred weapon of Dr. Boom's orthodontist.",
    health: 1,
    id: "BOT_102",
    mechanics: ["DEATHRATTLE", "RUSH"],
    name: "Spark Drill",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Rush Deathrattle: Add two 1/1 Sparks with Rush to your hand.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688325347248704.png",
    tile: "BOT_102.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 47982,
    elite: true,
    flavor: "She's Dr. Boom's right-hand mage.",
    health: 4,
    id: "BOT_103",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Stargazer Luna",
    rarity: "LEGENDARY",
    text: "After you play the right-most card in your hand, draw a card.",
    type: "MINION",
    set: 13,
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636688325429725940.png",
    tile: "BOT_103.png"
  },
  {
    artist: "Mauricio Herrera",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 48542,
    flavor: "Star player on the inter-office Boomball team.",
    health: 4,
    id: "BOT_104",
    mechanics: ["BATTLECRY"],
    name: "Dyn-o-matic",
    race: "MECHANICAL",
    rarity: "RARE",
    text:
      "Battlecry: Deal 5 damage randomly split among all minions except Mechs.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688325468459337.png",
    tile: "BOT_104.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "869a1f97-fb02-44a6-99a0-9aae2d2a322e",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dyn-o-matic"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "400be6fd-6108-4608-9c28-cba265ffd52d",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dyn-o-matic"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dan Scott",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 48552,
    flavor: "We asked, 'Where do the missiles go?' and he answered, 'Yes.'",
    health: 4,
    id: "BOT_107",
    mechanics: ["MODULAR", "TRIGGER_VISUAL"],
    name: "Missile Launcher",
    race: "MECHANICAL",
    rarity: "RARE",
    text:
      "Magnetic At the end of your turn, deal 1 damage to all other characters.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["AOE"],
    imageUrl: "636688325512373259.png",
    tile: "BOT_107.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "2cf6efb6-58c6-4afc-8c51-822bb1a939cb",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Missile Launcher"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "James Ryman",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 48099,
    flavor: "She feels waiting for healing makes you appreciate it more.",
    health: 4,
    id: "BOT_216",
    mechanics: ["BATTLECRY"],
    name: "Omega Medic",
    rarity: "RARE",
    text:
      "Battlecry: If you have 10 Mana Crystals, restore #10 Health to your hero.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["FAST", "HEAL"],
    imageUrl: "636688325551336565.png",
    tile: "BOT_216.png"
  },
  {
    artist: "Adam Byrne",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 48100,
    flavor: "Insecurity detected. Alerting hugbots.",
    health: 5,
    id: "BOT_218",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Security Rover",
    race: "MECHANICAL",
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    text: "Whenever this minion takes damage, summon a 2/3 Mech with Taunt.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688325603361158.png",
    tile: "BOT_218.png",
    versions: [
      {
        name: "Damage this",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "e536c1b5-c505-42fc-8853-054119f993fd",
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
    artist: "Nicola Saviori",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 48101,
    flavor: "All the better to hug you with!",
    id: "BOT_219",
    name: "Extra Arms",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    text:
      "Give a minion +2/+2. Add 'More Arms!' to your hand that gives +2/+2.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["BUFF"],
    imageUrl: "636688325708850212.png",
    tile: "BOT_219.png"
  },
  {
    artist: "Zoltan Boros",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 48113,
    flavor: "Might take a few episodes to power up.",
    id: "BOT_222",
    name: "Spirit Bomb",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    text: "Deal $4 damage to a minion and your hero.",
    type: "SPELL",
    set: 13,
    rating: 1,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688325792377565.png",
    tile: "BOT_222.png"
  },
  {
    artist: "Dave Allsop",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 48116,
    flavor:
      "What's worse than finding two imps in your lab? Only finding one of them.",
    health: 2,
    id: "BOT_224",
    mechanics: ["BATTLECRY"],
    name: "Doubling Imp",
    race: "DEMON",
    rarity: "COMMON",
    text: "Battlecry: Summon a copy of this minion.",
    type: "MINION",
    set: 13,
    rating: 3,
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "636688325829090692.png",
    tile: "BOT_224.png"
  },
  {
    artist: "Nicola Saviori",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 48298,
    flavor: "Why did the demon cross the streams? To get to The Other Side.",
    health: 5,
    id: "BOT_226",
    mechanics: ["BATTLECRY"],
    name: "Nethersoul Buster",
    race: "DEMON",
    rarity: "RARE",
    text:
      "Battlecry: Gain +1 Attack for each damage your hero has taken this turn.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688325871084380.png",
    tile: "BOT_226.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "bad81c32-fa18-4da6-b84b-7d0e84cf339d",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage .* your hero"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Nethersoul Buster"
              },
              {
                property: "cardClass",
                operation: "INCLUDES",
                minValue: "WARLOCK"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "4b00f515-6c1b-457b-8488-8e0fc81ec51a",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Lesser Amethyst Spellstone", "Deathweb Spider"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jiajun Tian",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 48644,
    flavor: "Actually works by enlarging the rest of the world.",
    id: "BOT_234",
    name: "Shrink Ray",
    rarity: "RARE",
    text: "Set the Attack and Health of all minions to 1.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["STALL"],
    imageUrl: "636688325950411280.png",
    tile: "BOT_234.png"
  },
  {
    artist: "James Ryman",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 48637,
    elite: true,
    flavor: "He wants to tank, but Boom always makes him play support.",
    health: 2,
    id: "BOT_236",
    mechanics: ["DIVINE_SHIELD", "LIFESTEAL"],
    name: "Crystalsmith Kangor",
    rarity: "LEGENDARY",
    text: "Divine Shield, Lifesteal Your healing is doubled.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["HEAL"],
    imageUrl: "636688325992824932.png",
    tile: "BOT_236.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "76a33599-f8f4-4d7a-af47-dfa72d99cd27",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "HEAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Crystalsmith Kangor"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "980438c7-e32c-4533-b966-c469320d4a8f",
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
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 48142,
    flavor: "Why Beryllium? Because it's hard to spell.",
    health: 8,
    id: "BOT_237",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "MODULAR"
    ],
    name: "Beryllium Nullifier",
    race: "MECHANICAL",
    rarity: "EPIC",
    text: "Magnetic Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["BUFF"],
    imageUrl: "636688326054670205.png",
    tile: "BOT_237.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "c445f41e-1f1b-49c8-8ac5-e7550846dc38",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "f243ff5d-ad3d-4c13-a887-dcd4aa74c552",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    armor: 7,
    artist: "Matt Dixon",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 48146,
    elite: true,
    flavor:
      "'Of course I've gone mad with power. Ever try going mad without it?'",
    health: 30,
    id: "BOT_238",
    mechanics: ["BATTLECRY"],
    name: "Dr. Boom, Mad Genius",
    rarity: "LEGENDARY",
    referencedTags: ["RUSH"],
    text: "Battlecry: For the rest of the game, your Mechs have Rush.",
    type: "HERO",
    set: 13,
    rating: 4,
    activeVersion: 0,
    extra: ["HEAL", "VALUE", "SMALL_REMOVAL"],
    imageUrl: "636688443628537623.png",
    tile: "BOT_238.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "bb55f9d1-5629-4ff5-88c1-0a29122ee498",
            filters: [
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
    artist: "Arthur Gimaldinov",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 48487,
    elite: true,
    flavor: "What could go wrong?",
    id: "BOT_242",
    name: "Myra's Unstable Element",
    rarity: "LEGENDARY",
    text: "Draw the rest of your deck.",
    type: "SPELL",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "636688326286270378.png",
    tile: "BOT_242.png",
    versions: [
      {
        name: "Dollmaster Dorian",
        priorities: [
          {
            minCards: 3,
            maxCards: 3,
            id: "7cdcf512-82f8-4ff0-a75a-fd57fe9c258e",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Dollmaster Dorian", "Preparation"]
              }
            ]
          }
        ]
      },
      {
        name: "Fast deck",
        priorities: [
          {
            minCards: 10,
            maxCards: 10,
            id: "c6c3e269-d797-4925-a749-fb504f3f9458",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "FAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Myra's Unstable Element"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Slawomir Maniak",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 48159,
    elite: true,
    flavor: "On her first day on the job, Myra removed the smoke detectors.",
    health: 2,
    id: "BOT_243",
    mechanics: ["BATTLECRY"],
    name: "Myra Rotspring",
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE", "DISCOVER"],
    text:
      "Battlecry: Discover a Deathrattle minion. Also gain its Deathrattle.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636688326336114734.png",
    tile: "BOT_243.png"
  },
  {
    artist: "J. Paick & K. Turovec",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 7,
    dbfId: 48161,
    elite: true,
    flavor: "Finally, Electra can work from home.",
    id: "BOT_245",
    name: "The Storm Bringer",
    rarity: "LEGENDARY",
    text: "Transform your minions into random Legendary minions.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["BUFF"],
    imageUrl: "636688326378958520.png",
    tile: "BOT_245.png",
    versions: [
      {
        name: "Buff your aggro / mid-range minions",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "a854e0c1-ebb5-4d01-9d22-78874baf1ac9",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Storm Chaser"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "7595db0f-43a3-42f0-bafc-171b8b317c39",
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
    artist: "Evgeniy Dlinnov",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 0,
    dbfId: 48798,
    flavor: "Working in a shaman's lab, it's important to be well-grounded.",
    id: "BOT_246",
    mechanics: ["OVERLOAD"],
    name: "Beakered Lightning",
    overload: 2,
    rarity: "COMMON",
    text: "Deal $1 damage to all minions. Overload: (2)",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["AOE"],
    imageUrl: "636688326419232024.png",
    tile: "BOT_246.png"
  },
  {
    artist: "Nicola Saviori",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 48185,
    flavor:
      "Wrecks a dude, any size. Catches thieves, eats those guys. Look out! Here comes a Spider Bomb!",
    health: 2,
    id: "BOT_251",
    mechanics: ["DEATHRATTLE", "MODULAR"],
    name: "Spider Bomb",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Magnetic Deathrattle: Destroy a random enemy minion.",
    type: "MINION",
    set: 13,
    rating: 4,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688326474816746.png",
    tile: "BOT_251.png",
    versions: [
      {
        name: "Mechs and magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "93f3f063-a240-45c7-a1a5-29c9c6f006dd",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Spider Bomb"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "a587cb48-0c6d-4bf2-830b-00e338fa5c93",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Spider Bomb"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jakub Kasper",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 48803,
    flavor:
      "Sometimes science is more art than science. A lot of people don’t get that.",
    id: "BOT_254",
    name: "Unexpected Results",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "EPIC",
    text:
      "Summon two random $2-Cost minions <i>(improved by Spell Damage)</i>.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["TEMPO"],
    imageUrl: "636688326533332051.png",
    tile: "BOT_254.png",
    versions: [
      {
        name: "Spell damage and apprentices",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "1d89409e-e7c9-409b-9e34-20e084f60781",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Sorcerer's Apprentice"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "7d436c71-9d9c-4419-b8aa-e5993ca98085",
            filters: [
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
    artist: "Gonzalo Ordonez",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 48195,
    flavor: "All signs point to Antonidas.",
    health: 5,
    id: "BOT_256",
    mechanics: ["BATTLECRY"],
    name: "Astromancer",
    rarity: "EPIC",
    text:
      "Battlecry: Summon a random minion with Cost equal to your hand size.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["MIN_GEN"],
    imageUrl: "636688326622049760.png",
    tile: "BOT_256.png",
    versions: [
      {
        name: "Hand size",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8fa2df97-e929-4910-8b56-d5b4034c431b",
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
            maxCards: 4,
            id: "4cecbae8-5846-4c43-9fc9-27983246dcf2",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Meteorologist", "Mountain Giant"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jakub Kasper",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 48198,
    elite: true,
    flavor:
      "Luna became head of the astronomy department when her boss invented the Pocket Black Hole.",
    id: "BOT_257",
    name: "Luna's Pocket Galaxy",
    rarity: "LEGENDARY",
    text: "Change the Cost of minions in your deck to (1).",
    type: "SPELL",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688326666053416.png",
    tile: "BOT_257.png",
    versions: [
      {
        name: "Big Mage",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "5827d4da-d87b-4e81-931f-ab6154d125d8",
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
                minValue: 6
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "eb1a08cc-380f-4ca5-920b-5e41654f538a",
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
    artist: "James Ryman",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 48203,
    elite: true,
    flavor:
      "His original name was Aerek. Then the first clone was Berek. They went evil around Merek.",
    health: 5,
    id: "BOT_258",
    mechanics: ["DEATHRATTLE"],
    name: "Zerek, Master Cloner",
    rarity: "LEGENDARY",
    text: "Deathrattle: If you've cast any spells on this minion, resummon it.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688326709987397.png",
    tile: "BOT_258.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "03da4bb8-b0b2-4a61-8ed7-e3db08ccde60",
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
    artist: "Garrett Hanna",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 48211,
    flavor:
      "People called him a soulless monster. We're not sure this is better.",
    id: "BOT_263",
    name: "Soul Infusion",
    rarity: "RARE",
    text: "Give the left-most minion in your hand +2/+2.",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636688326749970841.png",
    tile: "BOT_263.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 48223,
    flavor:
      "New facial recognition systems keep out the Lorewalkers and Doomsayers.",
    health: 3,
    id: "BOT_267",
    mechanics: ["DEATHRATTLE"],
    name: "Piloted Reaper",
    race: "MECHANICAL",
    rarity: "COMMON",
    text:
      "Deathrattle: Summon a random minion from your hand that costs (2) or less.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688326798474994.png",
    tile: "BOT_267.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "a8207b97-679b-45d8-a6ca-ee175d2808a3",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 48226,
    flavor:
      "'I shall build a mighty golden paladin! And he will GREET the WORLD!'",
    health: 1,
    id: "BOT_270",
    mechanics: ["BATTLECRY"],
    name: "Giggling Inventor",
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    text: "Battlecry: Summon two 1/2 Mechs with Taunt and Divine Shield.",
    type: "MINION",
    set: 13,
    rating: 1,
    activeVersion: 0,
    extra: ["MIN_GEN", "STALL"],
    imageUrl: "636688326838648551.png",
    tile: "BOT_270.png",
    versions: [
      {
        name: "Some buffs",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "68362ddd-4b6a-4692-b3ce-9c5a448cf4f3",
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
    artist: "J. Axer",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 48415,
    flavor: "Help me, worthy opponent. You're my only hope.",
    health: 3,
    id: "BOT_280",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Holomancer",
    rarity: "EPIC",
    text: "After your opponent plays a minion, summon a 1/1 copy of it.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688326888722890.png",
    tile: "BOT_280.png"
  },
  {
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 48471,
    flavor: "Once you hop, you just can't stop!",
    health: 1,
    id: "BOT_283",
    mechanics: ["BATTLECRY"],
    name: "Pogo-Hopper",
    race: "MECHANICAL",
    rarity: "RARE",
    text:
      "Battlecry: Gain +2/+2 for each other Pogo-Hopper you played this game.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688326971000096.png",
    tile: "BOT_283.png",
    versions: [
      {
        name: "Bounce and shuffle",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "e1473368-0b53-42ab-ba7c-7e191cd78b23",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Lab Recruiter", "Shadowstep"]
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "90f54364-3f25-42d4-bfe1-081ad2b41599",
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
    artist: "Vlad Botos",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 48478,
    durability: 2,
    flavor: "Grab death by the handle.",
    id: "BOT_286",
    mechanics: ["DEATHRATTLE"],
    name: "Necrium Blade",
    rarity: "RARE",
    text: "Deathrattle: Trigger the Deathrattle of a random friendly minion.",
    type: "WEAPON",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688327016483922.png",
    tile: "BOT_286.png",
    versions: [
      {
        name: "Some deathrattles",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "76fdcf2f-cd6a-4b36-8d5d-9c3ec616a8b1",
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
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 48480,
    flavor: "Join the chemistry lab! We've got all the solutions.",
    health: 2,
    id: "BOT_288",
    mechanics: ["BATTLECRY"],
    name: "Lab Recruiter",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    text: "Battlecry: Shuffle 3 copies of a friendly minion into your deck.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688327088410234.png",
    tile: "BOT_288.png",
    versions: [
      {
        name: "Myra's",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "82eef3f4-894b-44a6-b156-8b5abfcac171",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Myra's Unstable Element"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Luca Zontini",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 48490,
    flavor: "Best drank after a stiff gale.",
    health: 4,
    id: "BOT_291",
    mechanics: ["BATTLECRY"],
    name: "Storm Chaser",
    race: "ELEMENTAL",
    rarity: "RARE",
    text: "Battlecry: Draw a spell from your deck that costs (5) or more.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["VALUE"],
    imageUrl: "636688327173247726.png",
    tile: "BOT_291.png",
    versions: [
      {
        name: "Draw big spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9b44fc9d-3b1f-4f0a-b290-6a214f9ba2ec",
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
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 48508,
    flavor: "'Surrender. You have 10 mana to comply.'",
    health: 6,
    id: "BOT_296",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Omega Defender",
    rarity: "EPIC",
    text: "Taunt Battlecry: If you have 10 Mana Crystals, gain +10 Attack.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688327221321852.png",
    tile: "BOT_296.png"
  },
  {
    artist: "Daren Bader",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 48515,
    flavor: "They told Dr. Boom he could only pick one. He disagreed.",
    id: "BOT_299",
    mechanics: ["DISCOVER"],
    name: "Omega Assembly",
    rarity: "RARE",
    referencedTags: ["GEARS"],
    text: "Discover a Mech. If you have 10 Mana Crystals, keep all 3 cards.",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636688327310449627.png",
    tile: "BOT_299.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 48505,
    flavor: "Proper grammar would be 'sprung rocket.'",
    health: 1,
    id: "BOT_308",
    mechanics: ["BATTLECRY"],
    name: "Spring Rocket",
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    race: "MECHANICAL",
    rarity: "COMMON",
    targetingArrowText: "Deal 2 damage.",
    text: "Battlecry: Deal 2 damage.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688327356103172.png",
    tile: "BOT_308.png"
  },
  {
    artist: "Dan Scott",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48529,
    flavor: "*Awesome arm not included.",
    health: 5,
    id: "BOT_309",
    name: "Upgradeable Framebot",
    race: "MECHANICAL",
    rarity: "COMMON",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688327447041449.png",
    tile: "BOT_309.png",
    versions: [
      {
        name: "Some magnetic mechs",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e92131de-4787-49fe-b7a5-461678a2cd77",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Vladimir Kafanov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 48536,
    flavor:
      "It's a car! *Whomp whomp whomp* It's a robot! *Whomp whom-CRUNCH* It's… three.. smaller robots!",
    health: 1,
    id: "BOT_312",
    mechanics: ["DEATHRATTLE", "MODULAR"],
    name: "Replicating Menace",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Magnetic Deathrattle: Summon three 1/1 Microbots.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["MIN_GEN"],
    imageUrl: "636688327522398103.png",
    tile: "BOT_312.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ab585be5-ee91-4a69-8a67-112ba660401d",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Replicating Menace"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 48518,
    flavor: "It'll be fine.  It's not like they have any reason to hate us.",
    health: 3,
    id: "BOT_401",
    mechanics: ["DEATHRATTLE"],
    name: "Weaponized Piñata",
    race: "MECHANICAL",
    rarity: "EPIC",
    text: "Deathrattle: Add a random Legendary minion to your hand.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636688327666000442.png",
    tile: "BOT_401.png"
  },
  {
    artist: "Anton Zemskov",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 48519,
    flavor: "The secret is... There is no plan!",
    id: "BOT_402",
    name: "Secret Plan",
    rarity: "COMMON",
    referencedTags: ["DISCOVER", "SECRET"],
    text: "Discover a Secret.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688327710904443.png",
    tile: "BOT_402.png"
  },
  {
    artist: "Jason Kang",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 48524,
    flavor: "It's not juicy at all. IT'S JUST MESSING WITH YOUR HEAD.",
    id: "BOT_404",
    name: "Juicy Psychmelon",
    rarity: "EPIC",
    text: "Draw a 7, 8, 9, and 10-Cost minion  from your deck.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["CARD_DRAW"],
    imageUrl: "636688327753478236.png",
    tile: "BOT_404.png",
    versions: [
      {
        name: "Draw your big minions",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "eea523cf-3cc1-40bd-a41a-c4fdd46d3f13",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    artist: "Jason Kang",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 48526,
    durability: 3,
    flavor: "Boom's Second Law of Motion: HIT IT VERY HARD!",
    id: "BOT_406",
    mechanics: ["FINISH_ATTACK_SPELL_ON_DAMAGE", "TRIGGER_VISUAL"],
    name: "Supercollider",
    rarity: "EPIC",
    text: "After you attack a minion, force it to attack one of its neighbors.",
    type: "WEAPON",
    set: 13,
    rating: 3,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688327797441949.png",
    tile: "BOT_406.png"
  },
  {
    artist: "Mike Sass",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 48527,
    flavor: "Most of his friends are still Metalheads.",
    health: 5,
    id: "BOT_407",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Thunderhead",
    race: "ELEMENTAL",
    rarity: "EPIC",
    referencedTags: ["OVERLOAD", "RUSH"],
    text:
      "After you play a card with Overload, summon two 1/1 Sparks with Rush.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688327847166238.png",
    tile: "BOT_407.png",
    versions: [
      {
        name: "Overload",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "e8400049-c163-48c7-8120-cee0648c6856",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "OVERLOAD"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "686be835-c77f-47ac-a843-87a1547cde80",
            filters: [
              {
                property: "referencedTags",
                operation: "INCLUDES",
                minValue: "OVERLOAD"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Thunderhead"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 48537,
    elite: true,
    flavor: "'The coin? You used me for THE COIN!?'",
    health: 3,
    id: "BOT_411",
    mechanics: ["BATTLECRY"],
    name: "Electra Stormsurge",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    text: "Battlecry: Your next spell this turn casts twice.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688327900100894.png",
    tile: "BOT_411.png",
    versions: [
      {
        name: "Some spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "5da0ca55-c4c6-4650-965f-75adb293b553",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
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
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 48544,
    flavor: "Her hair was always like that.",
    health: 1,
    id: "BOT_413",
    mechanics: ["BATTLECRY"],
    name: "Brainstormer",
    rarity: "COMMON",
    text: "Battlecry: Gain +1 Health for each spell in your hand.",
    type: "MINION",
    set: 13,
    rating: 1,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688327968836862.png",
    tile: "BOT_413.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9c83d3a1-87b0-4fbb-a5bd-73f8a18fe7c8",
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
    artist: "Mauricio Herrera",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48566,
    flavor: "Her suit was fitted using a scale model.",
    health: 2,
    id: "BOT_414",
    mechanics: ["DIVINE_SHIELD", "STEALTH"],
    name: "Cloakscale Chemist",
    rarity: "COMMON",
    text: "Stealth Divine Shield",
    type: "MINION",
    set: 13,
    rating: 1,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328016950963.png",
    tile: "BOT_414.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a7d06a1d-e1ab-4b92-a6a0-e6142ea84ab9",
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
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 49621,
    flavor:
      "He's teaching his little buddy to talk, but all it says is, 'I am Gloop.'",
    health: 3,
    id: "BOT_419",
    mechanics: ["BATTLECRY"],
    name: "Dendrologist",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    text: "Battlecry: If you control a Treant, Discover a spell.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328056694422.png",
    tile: "BOT_419.png",
    versions: [
      {
        name: "Treants",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b949fdef-6008-4be4-83fb-2e22277dd34c",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "treant"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dendrologist"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "04ad51ce-93b2-4928-916e-2ff630407622",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Living Mana"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Sam Hogg",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 48607,
    flavor:
      "We'll put a happy tree right here... and give him a little friend.",
    id: "BOT_420",
    name: "Landscaping",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    text: "Summon two 2/2 Treants.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636688328096907928.png",
    tile: "BOT_420.png"
  },
  {
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 48609,
    flavor: "That racial bonus to Herbalism finally paid off.",
    health: 4,
    id: "BOT_422",
    mechanics: ["CHOOSE_ONE"],
    name: "Tending Tauren",
    rarity: "RARE",
    text:
      "Choose One - Give your other minions +1/+1; or Summon two 2/2 Treants.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["BUFF", "MIN_GEN"],
    imageUrl: "636688328135411249.png",
    tile: "BOT_422.png"
  },
  {
    artist: "Adam Byrne",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 48612,
    flavor: "Unlike gnomes, dreampetals grow more than 3 feet tall.",
    health: 4,
    id: "BOT_423",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Dreampetal Florist",
    rarity: "EPIC",
    text:
      "At the end of your turn, reduce the Cost of a random minion in your hand by (7).",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328180505301.png",
    tile: "BOT_423.png",
    versions: [
      {
        name: "Big minions",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c17748bb-7974-4694-a9dc-92162d84f753",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 6
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dreampetal Florist"
              }
            ]
          }
        ]
      },
      {
        name: "Malygos",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "b2beb735-d767-44a8-a375-b7277c3e558f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Malygos"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "James Ryman",
    attack: 10,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 48625,
    elite: true,
    flavor:
      "'Your software will fail. Your users will abandon you. You are already obsolete.'",
    health: 10,
    id: "BOT_424",
    mechanics: ["DEATHRATTLE"],
    name: "Mecha'thun",
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    text:
      "Deathrattle: If you have no cards in your deck, hand, and battlefield, destroy the enemy hero.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688328235189935.png",
    tile: "BOT_424.png"
  },
  {
    artist: "Jim Nelson",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 8,
    dbfId: 48670,
    elite: true,
    flavor: "It used to be a Ba-zooka but we ran out of sheep.",
    id: "BOT_429",
    name: "Flark's Boom-Zooka",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "LEGENDARY",
    text:
      "Summon 3 minions from your deck. They attack enemy minions, then die.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328278993833.png",
    tile: "BOT_429.png",
    versions: [
      {
        name: "Big deathrattles",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "76c4040f-89f7-40d1-89e9-edf3061591b1",
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
                operation: "GREATER_THAN",
                minValue: 5
              }
            ]
          },
          {
            minCards: 3,
            maxCards: 3,
            id: "d65ccb89-974f-4c18-acab-7b6ca7fa2ac2",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Necromechanic", "Kathrena Winterwisp"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48700,
    flavor: "She's on a bomb voyage.",
    health: 1,
    id: "BOT_431",
    mechanics: ["BATTLECRY"],
    name: "Whirliglider",
    rarity: "COMMON",
    text: "Battlecry: Summon a 0/2 Goblin Bomb.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636688328352800373.png",
    tile: "BOT_431.png"
  },
  {
    artist: "Slawomir Maniak",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 8,
    dbfId: 48717,
    elite: true,
    flavor: "She will NOT STOP until she gets tenure.",
    health: 5,
    id: "BOT_433",
    mechanics: ["DEATHRATTLE"],
    name: "Dr. Morrigan",
    rarity: "LEGENDARY",
    text: "Deathrattle: Swap this with a minion from your deck.",
    type: "MINION",
    set: 13,
    rating: 1,
    activeVersion: 0,
    extra: ["VALUE"],
    imageUrl: "636688328406504907.png",
    tile: "BOT_433.png",
    versions: [
      {
        name: "Big minions",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "bf9d7361-c804-4239-a4cd-387f21b3722c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
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
    artist: "Max Greck",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 48757,
    elite: true,
    flavor:
      "Of all the scientists, he has the most knowledge (when measured in volume).",
    health: 4,
    id: "BOT_434",
    name: "Flobbidinous Floop",
    rarity: "LEGENDARY",
    text:
      "While in your hand, this is a 3/4 copy of the last minion you played.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328502463347.png",
    tile: "BOT_434.png",
    versions: [
      {
        name: "Malygos",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "971be45b-7c89-46a7-a8ad-6f6edc4bcca7",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Malygos"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "dfbfb91e-364c-4da1-89ec-d118ec7ad16e",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Twig of the World Tree"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "59f72a41-9184-4349-b849-76c9a28bdbe6",
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
  },
  {
    artist: "Anton Zemskov",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 48759,
    flavor: "Zerek got sick of fighting over the remote.",
    id: "BOT_435",
    name: "Cloning Device",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    text: "Discover a copy of a minion in your opponent's deck.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688328551667609.png",
    tile: "BOT_435.png"
  },
  {
    artist: "Cicily He",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 48764,
    flavor: "Mined exclusively from the dark side of the moon.",
    id: "BOT_436",
    name: "Prismatic Lens",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "EPIC",
    text: "Draw a minion and a spell from your deck. Swap their Costs.",
    type: "SPELL",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["CARD_DRAW"],
    imageUrl: "636688328595281245.png",
    tile: "BOT_436.png",
    versions: [
      {
        name: "Big minions, cheap spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "28f540e4-b0ff-4197-9b4e-6d99252b6254",
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
            minCards: 4,
            maxCards: 6,
            id: "d2fba0e7-1d30-4c34-af8e-e7f5f5ff7887",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    artist: "Mike Azevedo",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 48770,
    flavor: "'Ha ha! Glork looks ridiculous! ...Glork? Glork?'",
    id: "BOT_437",
    name: "Goblin Prank",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    referencedTags: ["RUSH"],
    text: "Give a friendly minion +3/+3 and Rush. It dies at end of turn.",
    type: "SPELL",
    set: 13,
    rating: 1,
    extra: ["BUFF"],
    imageUrl: "636688328641005373.png",
    tile: "BOT_437.png"
  },
  {
    artist: "Garrett Hanna",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 48772,
    flavor: "Goes great with Cyber-Salsa.",
    id: "BOT_438",
    name: "Cybertech Chip",
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    text: "Give your minions 'Deathrattle: Add a random Mech to your hand.'",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636688328680758842.png",
    tile: "BOT_438.png"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 48835,
    flavor: "Conclusion: Nothing there.",
    health: 2,
    id: "BOT_443",
    mechanics: ["DEATHRATTLE"],
    name: "Void Analyst",
    race: "DEMON",
    rarity: "RARE",
    text: "Deathrattle: Give all Demons in your hand +1/+1.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688328732233354.png",
    tile: "BOT_443.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "397f82a5-0dc4-4b0a-a8e3-abc2971e90e7",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DEMON"
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
    artist: "Arthur Bozonnet",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 48837,
    elite: true,
    flavor:
      "How much gloop could Floop's Gloop gloop if Floop's Gloop could gloop gloop?",
    id: "BOT_444",
    name: "Floop's Glorious Gloop",
    rarity: "LEGENDARY",
    text:
      "Whenever a minion dies this turn, gain 1 Mana Crystal this turn only.",
    type: "SPELL",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["MIN_GEN"],
    imageUrl: "636688328786837970.png",
    tile: "BOT_444.png",
    versions: [
      {
        name: "Token",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "35505eb8-a97c-4d42-b9f9-dbfe20fbcb2e",
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
    artist: "Eva Widermann",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 48886,
    flavor: "Its project name was KAN-GA. The little one was R-00.",
    health: 1,
    id: "BOT_445",
    mechanics: ["DEATHRATTLE"],
    name: "Mecharoo",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Deathrattle: Summon a 1/1 Jo-E Bot.",
    type: "MINION",
    set: 13,
    rating: 3,
    extra: ["MIN_GEN"],
    imageUrl: "636688328837612404.png",
    tile: "BOT_445.png"
  },
  {
    artist: "David Kegg",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 49018,
    flavor: "This elf's winning the arms race.",
    health: 3,
    id: "BOT_447",
    mechanics: ["BATTLECRY"],
    name: "Crystallizer",
    rarity: "EPIC",
    text: "Battlecry: Deal 5 damage to your hero. Gain 5 Armor.",
    type: "MINION",
    set: 13,
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636688328961513265.png",
    tile: "BOT_447.png"
  },
  {
    artist: "Daria Tuzova",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 49019,
    faction: "HORDE",
    flavor: "Sadly the warranty does not cover fireballs or acts of Boom.",
    health: 12,
    id: "BOT_448",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Damaged Stegotron",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Taunt Battlecry: Deal 6 damage to this minion.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688329051641170.png",
    tile: "BOT_448.png"
  },
  {
    artist: "Zoltan Boros",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 49052,
    flavor: "Batteries have three components: Cathode, Anode, and Overload.",
    id: "BOT_451",
    mechanics: ["OVERLOAD"],
    name: "Voltaic Burst",
    overload: 1,
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    referencedTags: ["RUSH"],
    text: "Summon two 1/1 Sparks with Rush. Overload: (1)",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["SMALL_REMOVAL", "MIN_GEN"],
    imageUrl: "636688329103495726.png",
    tile: "BOT_451.png"
  },
  {
    artist: "Konstantin Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 49081,
    flavor: "Literally starstruck.",
    id: "BOT_453",
    name: "Shooting Star",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    text: "Deal $1 damage to a minion and the minions next to it.",
    type: "SPELL",
    set: 13,
    rating: 3,
    extra: ["AOE"],
    imageUrl: "636688329145369136.png",
    tile: "BOT_453.png"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 8,
    dbfId: 48744,
    flavor: "'Are you sure that's enough gloop?' 'Hold on.'",
    health: 4,
    id: "BOT_507",
    mechanics: ["BATTLECRY"],
    name: "Gloop Sprayer",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "COMMON",
    text: "Battlecry: Summon a copy of each adjacent minion.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688329202944300.png",
    tile: "BOT_507.png"
  },
  {
    artist: "Vlad Botos",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 48748,
    flavor: "Two near-death experiences for the price of one!",
    id: "BOT_508",
    name: "Necrium Vial",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    text: "Trigger a friendly minion's Deathrattle twice.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329275090410.png",
    tile: "BOT_508.png",
    versions: [
      {
        name: "Deathrattles",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "7af6e273-4c28-4517-8440-4f5fb69c9228",
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
    artist: "Dave Allsop",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 48929,
    flavor: "Shortstop on N'zoth's softball team.",
    health: 1,
    id: "BOT_509",
    mechanics: ["DEATHRATTLE"],
    name: "Dead Ringer",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Deathrattle: Draw a Deathrattle minion from your deck.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329369718737.png",
    tile: "BOT_509.png",
    versions: [
      {
        name: "Some deathrattles",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "26564d74-75a5-4f0d-a133-c21f076eee77",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dead Ringer"
              }
            ]
          }
        ]
      },
      {
        name: "With coffin crusher",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "8b8a9a91-1101-42a8-ad30-d9b8b9836698",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Coffin Crasher"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "4f04bd83-a396-475b-9296-1b312857725d",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              },
              {
                property: "name",
                operation: "NOT_INCLUDED_IN",
                minValue: ["Dead Ringer", "Coffin Crasher"]
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
    artist: "Ivan Fomin",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 48753,
    flavor: "Dress for the bomb you want, not the bomb you have.",
    health: 5,
    id: "BOT_511",
    mechanics: ["BATTLECRY"],
    name: "Seaforium Bomber",
    rarity: "EPIC",
    text:
      "Battlecry: Shuffle a Bomb into your opponent's deck. When drawn, it explodes for 5 damage.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329451345873.png",
    tile: "BOT_511.png",
    versions: [
      {
        name: "Shuffle stuff, then draw",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "d8527cdc-8cb9-4fa4-b059-1b03d755a7bc",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Augmented Elekk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jim Nelson",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 0,
    dbfId: 48976,
    flavor: "'Help! I've fallen and I can't get down!'",
    id: "BOT_517",
    name: "Topsy Turvy",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    text: "Swap a minion's Attack and Health.",
    type: "SPELL",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688329566235760.png",
    tile: "BOT_517.png"
  },
  {
    artist: "Jerry Mascho",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 48823,
    flavor: "'Zerek! Stay out of my lab!'",
    id: "BOT_521",
    name: "Ectomancy",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "EPIC",
    text: "Summon copies of all Demons you control.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329605359140.png",
    tile: "BOT_521.png",
    versions: [
      {
        name: "Demons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "821cbb97-eed1-4775-af02-b15c828dd9c4",
            filters: [
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
    artist: "Mike Sass",
    attack: 8,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 10,
    dbfId: 48831,
    flavor: "The latest advancement in hippo-botany.",
    health: 8,
    id: "BOT_523",
    mechanics: ["RUSH"],
    name: "Mulchmuncher",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Rush. Costs (1) less for each friendly Treant that died this game.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329652283387.png",
    tile: "BOT_523.png",
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "e490b2ac-b881-4140-9d7c-823c2e6b6703",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "treant"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Mulchmuncher"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "39a454f6-49ae-4704-b516-a985fec87a29",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Living Mana"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Brian Despain",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 49013,
    flavor:
      "Available as a bundle, along with Power Words: Detonate, Animate, Annihilate, and Paper Weight.",
    id: "BOT_529",
    name: "Power Word: Replicate",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    text: "Choose a friendly minion. Summon a 5/5 copy of it.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636688329718689071.png",
    tile: "BOT_529.png"
  },
  {
    artist: "L Chanchai",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 49263,
    flavor: "Casting with the stars.",
    health: 1,
    id: "BOT_531",
    mechanics: ["BATTLECRY"],
    name: "Celestial Emissary",
    race: "ELEMENTAL",
    rarity: "RARE",
    referencedTags: ["SPELLPOWER"],
    text: "Battlecry: Your next spell this turn has Spell Damage +2.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688329769523532.png",
    tile: "BOT_531.png",
    versions: [
      {
        name: "Cheap spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "984e5a68-1f5d-4687-926c-66d83f027d97",
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
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 49161,
    faction: "HORDE",
    flavor: "When it absolutely, positively, has to blow up overnight.",
    health: 2,
    id: "BOT_532",
    mechanics: ["BATTLECRY"],
    name: "Explodinator",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Battlecry: Summon two 0/2 Goblin Bombs.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636688329828468616.png",
    tile: "BOT_532.png"
  },
  {
    artist: "Daria Tuzova",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 49162,
    flavor: "Electra stores her elementals in the cloud.",
    health: 2,
    id: "BOT_533",
    mechanics: ["BATTLECRY"],
    name: "Menacing Nimbus",
    race: "ELEMENTAL",
    rarity: "COMMON",
    text: "Battlecry: Add a random Elemental to your hand.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["VALUE"],
    imageUrl: "636688329879943186.png",
    tile: "BOT_533.png",
    versions: [
      {
        name: "Elementals",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a1ed72a5-91c4-4b9b-82a2-8b54b684d47a",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Menacing Nimbus"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Steve Prescott",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 49163,
    faction: "ALLIANCE",
    flavor:
      "Leave them alone for two minutes and they go right into sleep mode.",
    health: 7,
    id: "BOT_534",
    mechanics: ["DIVINE_SHIELD"],
    name: "Bull Dozer",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Divine Shield",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688329931127633.png",
    tile: "BOT_534.png"
  },
  {
    artist: "Vladimir Kafanov",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 49164,
    flavor:
      "Best-selling author of 'How to Make Friends You Completely Control.'",
    health: 1,
    id: "BOT_535",
    mechanics: ["BATTLECRY"],
    name: "Microtech Controller",
    rarity: "COMMON",
    text: "Battlecry: Summon two 1/1 Microbots.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636688329986332313.png",
    tile: "BOT_535.png"
  },
  {
    artist: "James Ryman",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 49167,
    flavor:
      "They don't just find the truth. They give it a ten second head start, then hunt it down.",
    health: 5,
    id: "BOT_536",
    mechanics: ["BATTLECRY"],
    name: "Omega Agent",
    rarity: "EPIC",
    text:
      "Battlecry: If you have 10 Mana Crystals, summon  2 copies of this minion.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688330034126419.png",
    tile: "BOT_536.png"
  },
  {
    artist: "Hideaki Takamura",
    attack: 0,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 49169,
    flavor: "When you need more iron in your diet.",
    health: 5,
    id: "BOT_537",
    mechanics: ["DEATHRATTLE"],
    name: "Mechano-Egg",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Deathrattle: Summon an 8/8 Robosaur.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688330097602010.png",
    tile: "BOT_537.png",
    versions: [
      {
        name: "Magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "a183a31b-a9a5-44ee-a73c-0c38b4f20749",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "L Chanchai",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 49170,
    flavor: "He goes by Bzzzzt Aldrin.",
    health: 1,
    id: "BOT_538",
    mechanics: ["BATTLECRY"],
    name: "Spark Engine",
    race: "MECHANICAL",
    rarity: "RARE",
    referencedTags: ["RUSH"],
    text: "Battlecry: Add a  1/1 Spark with Rush to your hand.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688330206201448.png",
    tile: "BOT_538.png"
  },
  {
    artist: "James Ryman",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 49171,
    flavor: "We ran out of jars, so we started putting brains in other stuff.",
    health: 4,
    id: "BOT_539",
    mechanics: ["BATTLECRY"],
    name: "Arcane Dynamo",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    text: "Battlecry: Discover a spell that costs (5) or more.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636688330256425792.png",
    tile: "BOT_539.png"
  },
  {
    artist: "Mauricio Herrera",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49172,
    flavor:
      "'I said this looks like a job for me So everybody just follow me 'Cause we need a little E.M.P. 'Cause it feels so mechy without me…'",
    health: 3,
    id: "BOT_540",
    mechanics: ["BATTLECRY"],
    name: "E.M.P. Operative",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    rarity: "EPIC",
    targetingArrowText: "Destroy a Mech.",
    text: "Battlecry: Destroy a Mech.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688330333922751.png",
    tile: "BOT_540.png"
  },
  {
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 49175,
    flavor: "Has a side-business selling her lipstick shade, 'Omega Red.'",
    health: 3,
    id: "BOT_543",
    mechanics: ["BATTLECRY"],
    name: "Omega Mind",
    rarity: "EPIC",
    referencedTags: ["LIFESTEAL"],
    text:
      "Battlecry: If you have 10 Mana Crystals, your spells  have Lifesteal this turn.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688330422630419.png",
    tile: "BOT_543.png"
  },
  {
    artist: "Peter Stapleton",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49176,
    flavor: "You leave Deathstalker Rexxar alone in the lab for TWO minutes…",
    health: 6,
    id: "BOT_544",
    mechanics: ["BATTLECRY"],
    name: "Loose Specimen",
    race: "BEAST",
    rarity: "EPIC",
    text:
      "Battlecry: Deal 6 damage randomly split among other friendly minions.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["TEMPO", "FAST"],
    imageUrl: "636688330521338975.png",
    tile: "BOT_544.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49184,
    elite: true,
    flavor:
      "Everything but the kitchen sink. Oh wait, there's one on his back.",
    health: 2,
    id: "BOT_548",
    mechanics: ["DIVINE_SHIELD", "LIFESTEAL", "MODULAR", "RUSH", "TAUNT"],
    name: "Zilliax",
    race: "MECHANICAL",
    rarity: "LEGENDARY",
    text: "Magnetic Divine Shield, Taunt, Lifesteal, Rush",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["BUFF"],
    imageUrl: "636688330575813565.png",
    tile: "BOT_548.png",
    versions: [
      {
        name: "Mechs and magnets",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c8920898-a270-4e4d-8c98-bcbc19959257",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Zilliax"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "d75209c0-167a-4333-86a7-f5e069991ce1",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Zilliax"
              }
            ]
          }
        ]
      },
      {
        name: "Keywords",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "7f9f6c3d-3800-489b-a4d5-6a698f23c640",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Corpsetaker"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "d7f27e4f-8e23-424e-8d13-5177dbe31c7a",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Countess Ashmore"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Cicily He",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 49188,
    flavor: "Carefully assembled from two Electrowrongs.",
    health: 3,
    id: "BOT_550",
    mechanics: ["BATTLECRY"],
    name: "Electrowright",
    rarity: "COMMON",
    text:
      "Battlecry: If you're holding a spell that costs (5) or more, gain +1/+1.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688330618537372.png",
    tile: "BOT_550.png",
    versions: [
      {
        name: "Big spell",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c8d2c625-c12d-434e-9797-7a6e303b4277",
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
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "19666417-3f45-4ecc-bc65-6b6fb61d7fd6",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Spiteful Summoner"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "David Kegg",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 49195,
    flavor: "'You're a Sagittarius? Me too! Just gimme a sec.'",
    health: 7,
    id: "BOT_552",
    mechanics: ["BATTLECRY"],
    name: "Star Aligner",
    rarity: "EPIC",
    text:
      "Battlecry: If you control 3 minions with 7 Health, deal 7 damage to all enemies.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688330668131658.png",
    tile: "BOT_552.png"
  },
  {
    artist: "Konstantin Turovec",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 49201,
    elite: true,
    flavor:
      "She wanders realities, taking on many forms. One was a unicorn princess.",
    health: 6,
    id: "BOT_555",
    mechanics: ["STEALTH"],
    name: "Harbinger Celestia",
    rarity: "LEGENDARY",
    text: "Stealth After your opponent plays a minion, become a copy of it.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688330754539087.png",
    tile: "BOT_555.png"
  },
  {
    artist: "Ian Ameling",
    attack: 0,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 49265,
    flavor: "“Now I feel... REALLY icky.”",
    health: 2,
    id: "BOT_558",
    mechanics: ["DEATHRATTLE"],
    name: "Test Subject",
    rarity: "RARE",
    text:
      "Deathrattle: Return any spells you cast on this minion to your hand.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688330824775227.png",
    tile: "BOT_558.png",
    versions: [
      {
        name: "Buffs",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "121d5266-1afb-4d97-9a5c-633b05eb0355",
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
    artist: "Luca Zontini",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 49269,
    flavor: "Her friends call her 'Shuffleupugus'.",
    health: 4,
    id: "BOT_559",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Augmented Elekk",
    race: "BEAST",
    rarity: "EPIC",
    text: "Whenever you shuffle a card into a deck, shuffle in an extra copy.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688330877129875.png",
    tile: "BOT_559.png",
    versions: [
      {
        name: "Just some fast cards",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "6a21b912-fa10-4539-9132-e7e80b30f5bc",
            filters: [
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
        name: "Shuffle stuff",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "75398533-092e-494f-8a47-5f497dbe386e",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "shuffle.*deck"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Augmented Elekk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Steve Prescott",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 49233,
    faction: "HORDE",
    flavor: "It was fitting in fine until it gathered nuts <i>and</i> bolts.",
    health: 4,
    id: "BOT_562",
    mechanics: ["BATTLECRY"],
    name: "Coppertail Imposter",
    race: "MECHANICAL",
    rarity: "COMMON",
    referencedTags: ["STEALTH"],
    text: "Battlecry: Gain Stealth until your next turn.",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688330923574045.png",
    tile: "BOT_562.png",
    versions: [
      {
        name: "Magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "ec7eb1c8-3c03-43be-8080-9e815c60524f",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dave Allsop",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49356,
    flavor: "WAR! GEAR! What is it good for?",
    health: 5,
    id: "BOT_563",
    mechanics: ["MODULAR"],
    name: "Wargear",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Magnetic",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688330972808292.png",
    tile: "BOT_563.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ae8a2a31-2aff-4cc0-a736-c81a7887abbc",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Wargear"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "0f04cdf6-8cb6-402f-be89-fc0df0bac968",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Wargear"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Anton Kagounkin",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 49361,
    flavor: "'Well we HAD it contained. Then you went and gave it legs!'",
    health: 4,
    id: "BOT_565",
    mechanics: ["DEATHRATTLE"],
    name: "Blightnozzle Crawler",
    race: "MECHANICAL",
    rarity: "RARE",
    referencedTags: ["POISONOUS", "RUSH"],
    text: "Deathrattle: Summon a 1/1 Ooze with Poisonous and Rush.",
    type: "MINION",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688331027152901.png",
    tile: "BOT_565.png"
  },
  {
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 49416,
    flavor:
      "It's hard to call her reckless when it's clear she knows what she's doing.",
    health: 6,
    id: "BOT_566",
    mechanics: ["AURA", "TRIGGER_VISUAL"],
    name: "Reckless Experimenter",
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    text:
      "Deathrattle minions you play cost (3) less, but die at the end of the turn.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688331114650435.png",
    tile: "BOT_566.png",
    versions: [
      {
        name: "Cube priest",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "60643dce-7ba6-429a-80d3-946e91bd605f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Carnivorous Cube"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "8644c398-56b5-4076-a3b2-e8ceaf67a8f4",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Carnivorous Cube"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Slawomir Maniak",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 9,
    dbfId: 49421,
    elite: true,
    flavor: "Cloning can be a jarring experience.",
    id: "BOT_567",
    name: "Zerek's Cloning Gallery",
    rarity: "LEGENDARY",
    text: "Summon a 1/1 copy of each minion in your deck.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688331184106700.png",
    tile: "BOT_567.png",
    versions: [
      {
        name: "Deathrattles",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "c4dec97f-c6f3-480f-a583-93821ecf107b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Shadow Visions"
              }
            ]
          },
          {
            minCards: 10,
            maxCards: 10,
            id: "78c79f65-2441-47df-ab1d-50facaeb10ee",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "28518e21-1f8e-4474-a12a-782b713f44dd",
            filters: [
              {
                property: "referencedTags",
                operation: "INCLUDES",
                minValue: "DEATHRATTLE"
              }
            ]
          }
        ]
      },
      {
        name: "Combo otk",
        priorities: [
          {
            minCards: 12,
            maxCards: 12,
            id: "9db312bf-c8af-422f-9d52-b4de4440e60d",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: [
                  "Malygos",
                  "Radiant Elemental",
                  "Prophet Velen",
                  "Mind Blast",
                  "Holy Smite",
                  "Shadow Visions",
                  "Lesser Diamond Spellstone"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Arthur Bozonnet",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 49423,
    elite: true,
    flavor: "Worst field trip ever.",
    id: "BOT_568",
    name: "The Soularium",
    rarity: "LEGENDARY",
    text: "Draw 3 cards. At the end of your turn, discard them.",
    type: "SPELL",
    set: 13,
    rating: 4,
    activeVersion: 0,
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "636688331224750050.png",
    tile: "BOT_568.png",
    versions: [
      {
        name: "Zoo",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "dd706ba7-10e5-4c41-829e-44733468ee3a",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dany Orizio",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49447,
    elite: true,
    flavor: "The original clever girl.",
    health: 4,
    id: "BOT_573",
    mechanics: ["BATTLECRY"],
    name: "Subject 9",
    race: "BEAST",
    rarity: "LEGENDARY",
    referencedTags: ["SECRET"],
    text: "Battlecry: Draw 5 different Secrets from your deck.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["CARD_DRAW"],
    imageUrl: "636688331299796657.png",
    tile: "BOT_573.png",
    versions: [
      {
        name: "Secret deck",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "2e00dea6-74f4-483e-bb68-80a61fd9d738",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "SECRET"
              }
            ]
          },
          {
            minCards: 5,
            maxCards: 5,
            id: "bdf7b8b9-bba7-4bb3-b1f8-5350fcee5cd5",
            filters: [
              {
                property: "mechanics",
                operation: "NOT_INCLUDES",
                minValue: "SECRET"
              },
              {
                property: "referencedTags",
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
    artist: "Max Greck",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 49494,
    flavor: "You don't have to be crazy to work here, but it helps.",
    health: 4,
    id: "BOT_576",
    mechanics: ["COMBO"],
    name: "Crazed Chemist",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_FOR_COMBO: 0
    },
    rarity: "COMMON",
    targetingArrowText: "Give +4 Attack.",
    text: "Combo: Give a friendly minion +4 Attack.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["FAST", "DAMAGE"],
    imageUrl: "636688331391704723.png",
    tile: "BOT_576.png"
  },
  {
    artist: "J. Paick & K. Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 48692,
    flavor:
      "Abstract: Analyzing systemic applications of coldlight data sets vis-a-vis shuffle-related paradigms. Conclusion: Yay, cards!",
    id: "BOT_600",
    name: "Research Project",
    rarity: "COMMON",
    text: "Each player draws 2 cards.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "636688331446769385.png",
    tile: "BOT_600.png"
  },
  {
    artist: "Paul Mafayon",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 48693,
    flavor:
      "Some say the world will end in fire. Some say in ice. Why not BOTH?",
    health: 3,
    id: "BOT_601",
    mechanics: ["BATTLECRY"],
    name: "Meteorologist",
    rarity: "RARE",
    text:
      "Battlecry: For each card in your hand, deal 1 damage to a random enemy.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688331522366084.png",
    tile: "BOT_601.png",
    versions: [
      {
        name: "Hand size",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e97cc0c5-db92-49a1-8a12-de9cea67997a",
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
            maxCards: 4,
            id: "d325595b-0aed-438d-aa1e-dfaa99633d96",
            filters: [
              {
                property: "name",
                operation: "IS_INCLUDED_IN",
                minValue: ["Astromancer", "Mountain Giant"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 48890,
    flavor: "Rage alongside the machine.",
    health: 1,
    id: "BOT_603",
    mechanics: ["RUSH"],
    name: "Steel Rager",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Rush",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688331589271822.png",
    tile: "BOT_603.png"
  },
  {
    artist: "Konstantin Turovec",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 49045,
    flavor:
      "INGREDIENTS: STAR-STUFF,  BLUE #1, NATURAL AND ARTIFICIAL FLAVORS.",
    health: 3,
    id: "BOT_604",
    mechanics: ["SPELLPOWER"],
    name: "Cosmic Anomaly",
    race: "ELEMENTAL",
    rarity: "COMMON",
    spellDamage: 2,
    text: "Spell Damage +2",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688331676019320.png",
    tile: "BOT_604.png",
    versions: [
      {
        name: "Cheap spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "86168ba6-4b16-4c37-b717-18612d716b71",
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
    artist: "Tyler West Studios",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 49279,
    flavor: "More Boom for your buck.",
    health: 2,
    id: "BOT_606",
    mechanics: ["DEATHRATTLE"],
    name: "Kaboom Bot",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Deathrattle: Deal 4 damage to a random enemy minion.",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636688331728743751.png",
    tile: "BOT_606.png",
    versions: [
      {
        name: "Magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "9058baf9-1749-4729-9afb-918557491b7f",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Mike Azevedo",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 48982,
    flavor:
      "They tried for weeks to make a stealth version, but eventually decided to just let it glow.",
    health: 3,
    id: "BOT_906",
    mechanics: ["MODULAR"],
    name: "Glow-Tron",
    race: "MECHANICAL",
    rarity: "COMMON",
    text: "Magnetic",
    type: "MINION",
    set: 13,
    rating: 3,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688331786058616.png",
    tile: "BOT_906.png",
    versions: [
      {
        name: "Mechs and magnetic",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "0ae61895-85c5-4db1-bebf-b1ca363b3396",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Glow-Tron"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "17efa804-0f17-4ee2-b050-905763d077ee",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Glow-Tron"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48983,
    flavor: "Also known as a power zinc.",
    health: 2,
    id: "BOT_907",
    mechanics: ["BATTLECRY"],
    name: "Galvanizer",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Battlecry: Reduce the Cost of Mechs in your hand by (1).",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["FAST"],
    imageUrl: "636688331840573761.png",
    tile: "BOT_907.png",
    versions: [
      {
        name: "Dump your mechs",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "e56aae57-52ea-4189-bdb0-da9dc83ea73c",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "df7a5a75-e7be-4997-8974-d0471a0dbcb6",
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
    artist: "Zero",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 48984,
    flavor: "We call it the bubble machine.",
    id: "BOT_908",
    mechanics: ["SECRET"],
    name: "Autodefense Matrix",
    rarity: "COMMON",
    referencedTags: ["DIVINE_SHIELD"],
    text:
      "Secret: When one of your minions is attacked, give it Divine Shield.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688331891728229.png",
    tile: "BOT_908.png"
  },
  {
    artist: "Tyler West Studio",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 48985,
    flavor:
      "'The Light is neither a particle nor a wave. It's more of a juice, really.'",
    id: "BOT_909",
    name: "Crystology",
    rarity: "RARE",
    text: "Draw two 1-Attack minions from your deck.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["CARD_DRAW"],
    imageUrl: "636688331957363829.png",
    tile: "BOT_909.png",
    versions: [
      {
        name: "1 attack minions",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "c9bb72c5-b419-4bcf-af7e-3e3d46047cd8",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "attack", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 48989,
    flavor: "'Windell! More light!' 'I'm givin' it all she's got, Kangor!'",
    health: 4,
    id: "BOT_910",
    mechanics: ["BATTLECRY"],
    name: "Glowstone Technician",
    rarity: "EPIC",
    text: "Battlecry: Give all minions in your hand +2/+2.",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688332057842572.png",
    tile: "BOT_910.png"
  },
  {
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 48993,
    flavor: "Every ten seconds it asks if you want to update.",
    health: 4,
    id: "BOT_911",
    mechanics: ["DIVINE_SHIELD", "MODULAR", "TAUNT"],
    name: "Annoy-o-Module",
    race: "MECHANICAL",
    rarity: "RARE",
    text: "Magnetic Divine Shield Taunt",
    type: "MINION",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["BUFF"],
    imageUrl: "636688332125808420.png",
    tile: "BOT_911.png",
    versions: [
      {
        name: "Mechs",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "b12bd930-5de8-46b8-b0e3-0052ffb106d5",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MECHANICAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Annoy-o-Module"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dai Yang",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 49009,
    elite: true,
    flavor: "'That's three, Kangor. Three isn't endless.' - Countess Ashmore",
    id: "BOT_912",
    name: "Kangor's Endless Army",
    playRequirements: {
      REQ_FRIENDLY_MINIONS_OF_RACE_DIED_THIS_GAME: 17,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "LEGENDARY",
    referencedTags: ["MODULAR"],
    text: "Resurrect 3 friendly Mechs. They keep any Magnetic upgrades.",
    type: "SPELL",
    set: 13,
    rating: 2,
    activeVersion: 0,
    extra: ["GENERAL"],
    imageUrl: "636688332170422582.png",
    tile: "BOT_912.png",
    versions: [
      {
        name: "Magnetic",
        priorities: [
          {
            minCards: 7,
            maxCards: 7,
            id: "904afa3d-6431-4577-9657-6a0a46c68143",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "MODULAR"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "J. Paick & K. Turovec",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 50432,
    flavor: "Another group project where Jaraxxus doesn't do any work.",
    id: "BOT_913",
    name: "Demonic Project",
    rarity: "COMMON",
    text: "Each player transforms a random minion in their hand into a Demon.",
    type: "SPELL",
    set: 13,
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636688332227037293.png",
    tile: "BOT_913.png"
  },
  {
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50477,
    elite: true,
    flavor: "From the prestigious Westfall Wonderfuls.",
    health: 5,
    id: "BOT_914",
    name: "Whizbang the Wonderful",
    rarity: "LEGENDARY",
    text: "You start the game with one of Whizbang's Wonderful Decks!",
    type: "MINION",
    set: 13,
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636688332279181919.png",
    tile: "BOT_914.png"
  }
];
