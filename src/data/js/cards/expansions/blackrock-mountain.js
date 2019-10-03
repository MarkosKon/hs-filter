export const blackrockMountain = [
  {
    name: "Solemn Vigil",
    artist: "Jaime Jones",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2274,
    flavor:
      "Each year, folk gather in front of Blackrock Mountain to mourn those who were mind-controlled into the lava.",
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_001",
    rarity: "COMMON",
    set: 3,
    rating: 4,
    text: "Draw 2 cards. Costs (1) less for each minion that died this turn.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "14453.png",
    tile: "BRM_001.png"
  },
  {
    name: "Flamewaker",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2275,
    flavor:
      "Flamewakers HATE being confused for Flamewalkers. They just wake up fire, they don’t walk on it. Walking on fire is CRAZY.",
    health: 4,
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_002",
    rarity: "RARE",
    set: 3,
    rating: 4,
    text:
      "After you cast a spell, deal 2 damage randomly split among all enemies.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "14445.png",
    tile: "BRM_002.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "66045478-5088-4191-84a8-fd2ef09d9de2",
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
    name: "Dragon's Breath",
    artist: "Mauricio Herrera",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 2284,
    flavor:
      "Dragons breathe fire, sure, but did you know they can also breathe Cotton Candy?  It's harder to give them a reason to do that, though.",
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_003",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 3,
    rating: 1,
    text: "Deal $4 damage. Costs (1) less for each minion that died this turn.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "14446.png",
    tile: "BRM_003.png"
  },
  {
    name: "Twilight Whelp",
    artist: "Sam Nielson",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 2286,
    flavor:
      "The twilight whelps are basically magic-vampires. Despite this, they are not a reference to any popular series of novels.",
    health: 1,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_004",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "COMMON",
    set: 3,
    rating: 2,
    text: "Battlecry: If you're holding a Dragon, gain +2 Health.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "14460.png",
    tile: "BRM_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e7cf7314-4545-4488-b3fa-8e0d96f55b17",
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
    name: "Demonwrath",
    artist: "Raymond Swanland",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 2301,
    flavor:
      "Demons are not angry most of the time. You have to play this card in order to really bring it out of them.",
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_005",
    rarity: "RARE",
    set: 3,
    rating: 3,
    text: "Deal $2 damage to all minions except Demons.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "14463.png",
    tile: "BRM_005.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "ddfa6688-f1fa-4a9b-a700-bc79bdc70f06",
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
    name: "Imp Gang Boss",
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 2288,
    flavor:
      "His imp gang likes to sneak into Stormwind to spraypaint 'Ragnaros Rulez' on the Mage Tower.",
    health: 4,
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_006",
    race: "DEMON",
    rarity: "COMMON",
    set: 3,
    rating: 4,
    text: "Whenever this minion takes damage, summon a 1/1 Imp.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "14443.png",
    tile: "BRM_006.png"
  },
  {
    name: "Gang Up",
    artist: "Jim Nelson",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 2304,
    flavor:
      "If you are thinking about visiting Moonbrook, you better roll deep.",
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_007",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 3,
    rating: 1,
    text: "Choose a minion. Shuffle 3 copies of it into your deck.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "14462.png",
    tile: "BRM_007.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "c27f2975-66af-4d5e-8c04-d929a1246b15",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Coldlight Oracle"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dark Iron Skulker",
    artist: "Eric Braddock",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 2291,
    flavor:
      "He loves skulking. He skulks after hours just for the joy of it, but his friends are pretty worried he'll get burnt out.",
    health: 3,
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_008",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 3,
    rating: 3,
    text: "Battlecry: Deal 2 damage to all undamaged enemy minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "14434.png",
    tile: "BRM_008.png"
  },
  {
    name: "Volcanic Lumberer",
    artist: "Trent Kaniuga",
    attack: 7,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 9,
    dbfId: 2295,
    flavor: "The roots, the roots, the roots is on fire!",
    health: 8,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_009",
    mechanics: ["TAUNT"],
    rarity: "RARE",
    set: 3,
    rating: 1,
    text: "Taunt Costs (1) less for each minion that died this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14458.png",
    tile: "BRM_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "bac7d8b6-3d7e-4e59-a495-ef5df5f24df9",
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
    name: "Druid of the Flame",
    artist: "Stanley Lau",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 2292,
    flavor:
      "Druids who fought too long in Northrend were easily seduced by Ragnaros; a mug of hot chocolate was generally all it took.",
    health: 2,
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_010",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    set: 3,
    rating: 3,
    text: "Choose One - Transform into a 5/2 minion; or a 2/5 minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "14457.png",
    tile: "BRM_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "57a8054c-1ea4-4ea9-b7e7-851bfeddd807",
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
    name: "Lava Shock",
    artist: "Zoltan Boros",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2289,
    flavor: "Chocolate lava cake is shockingly delicious.",
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_011",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["OVERLOAD"],
    set: 3,
    rating: 3,
    text: "Deal $2 damage. Unlock your Overloaded Mana Crystals.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "FAST"],
    imageUrl: "14440.png",
    tile: "BRM_011.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "c8b5b8a2-93c3-4360-86dc-9b1a134c30b2",
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
    name: "Fireguard Destroyer",
    artist: "Paul Mafayon",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2290,
    flavor:
      "Ragnaros interviews hundreds of Fire Elementals for the position of 'Destroyer' but very few have what it takes.",
    health: 6,
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_012",
    mechanics: ["BATTLECRY", "OVERLOAD"],
    overload: 1,
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 3,
    rating: 3,
    text: "Battlecry: Gain 1-4 Attack. Overload: (1)",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "14455.png",
    tile: "BRM_012.png"
  },
  {
    name: "Quick Shot",
    artist: "Jonboy Meyers",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2260,
    flavor: "Han shot first.",
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_013",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 3,
    rating: 4,
    text: "Deal $3 damage. If your hand is empty, draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "FAST"],
    imageUrl: "14459.png",
    tile: "BRM_013.png"
  },
  {
    name: "Core Rager",
    artist: "Jomaro Kindred",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 2263,
    flavor:
      "It takes a special kind of hunter to venture deep into a firey lava pit and convince a monster who lives there to come home and be a cuddly housepet.",
    health: 4,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_014",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "RARE",
    set: 3,
    rating: 1,
    text: "Battlecry: If your hand is empty, gain +3/+3.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "14444.png",
    tile: "BRM_014.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "f4f4e1be-74eb-4c90-8345-0df1e84c7498",
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
    name: "Revenge",
    artist: "Ben Olson",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 2296,
    flavor:
      "This is better than Arcane Explosion, so I guess warriors are finally getting revenge on mages for Mortal Strike being worse than Fireball.",
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_015",
    rarity: "RARE",
    set: 3,
    rating: 4,
    text:
      "Deal $1 damage to all minions. If you have 12 or less Health, deal $3 damage instead.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "14464.png",
    tile: "BRM_015.png"
  },
  {
    name: "Axe Flinger",
    artist: "Efrem Palacios",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 2297,
    flavor:
      "Once a lowly 'Stick Flinger', he's been relentless on the path to his ultimate dream: 'Tauren Flinger'.",
    health: 5,
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_016",
    rarity: "COMMON",
    set: 3,
    rating: 1,
    text: "Whenever this minion takes damage, deal 2 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14439.png",
    tile: "BRM_016.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "207eb01f-c826-42dc-a15b-a49c09a559a9",
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
    name: "Resurrect",
    artist: "Luke Mancini",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2298,
    flavor:
      "I walked into the dungeon and noticed a slain adventurer. In his final moments, he had scrawled out a message in the dust on the wall beside him. Two words: 'rez plz'",
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_017",
    playRequirements: {
      REQ_FRIENDLY_MINION_DIED_THIS_GAME: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    set: 3,
    rating: 1,
    text: "Summon a random friendly minion that died this game.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "14461.png",
    tile: "BRM_017.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "fd159a3b-c579-493f-93c6-b3372743df45",
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
          }
        ]
      }
    ]
  },
  {
    name: "Dragon Consort",
    artist: "Raymond Swanland",
    attack: 5,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2299,
    flavor:
      "Everybody wants someone to snuggle with. Even giant armored scaly draconic beasts of destruction.",
    health: 5,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_018",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "RARE",
    set: 3,
    rating: 3,
    text: "Battlecry: The next Dragon you play costs (2) less.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "14452.png",
    tile: "BRM_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ef5828e0-e3ed-4833-955e-81d0a239bb35",
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
                minValue: "Dragon Consort"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grim Patron",
    artist: "Bobby Chiu",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2279,
    flavor: "If you love getting your face punched, come to the Grim Guzzler!",
    health: 3,
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_019",
    rarity: "RARE",
    set: 3,
    rating: 1,
    text: "Whenever this minion survives damage, summon another Grim Patron.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14435.png",
    tile: "BRM_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ae33976c-d36c-4aba-8e8e-42456a7026d4",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1 damage .* all"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dragonkin Sorcerer",
    artist: "Edouard Guiton & Stuido HIVE",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2306,
    flavor:
      "Dragonkin Sorcerers be all 'I'm a wizard' and everyone else be all 'daaaaang'.",
    health: 5,
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_020",
    race: "DRAGON",
    rarity: "COMMON",
    set: 3,
    rating: 2,
    text: "Whenever you target this minion with a spell, gain +1/+1.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "14441.png",
    tile: "BRM_020.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "854253fc-25d2-42b5-80a3-6c6b9b1441a9",
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
    name: "Dragon Egg",
    artist: "Jaemin Kim",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2278,
    flavor: "Think of them as bullets for your dragon gun.",
    health: 2,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_022",
    rarity: "RARE",
    set: 3,
    rating: 1,
    text: "Whenever this minion takes damage, summon a 2/1 Whelp.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14442.png",
    tile: "BRM_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "baa1c078-0c48-4224-bdfd-765c489161ab",
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
    name: "Drakonid Crusher",
    artist: "Slawomir Maniak",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2257,
    flavor:
      "Drakonids were created to have all the bad parts of a dragon in the form of a humanoid. But, like, why?",
    health: 6,
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_024",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "COMMON",
    set: 3,
    rating: 4,
    text: "Battlecry: If your opponent has 15 or less Health, gain +3/+3.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "14449.png",
    tile: "BRM_024.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "c21000c5-3d11-47e2-9ca1-e26e8184bc65",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Volcanic Drake",
    artist: "Lucas Graciano",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2258,
    flavor:
      "Volcanic Drakes breathe lava instead of fire. The antacid vendor at Thorium Point does a brisk business with them.",
    health: 4,
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_025",
    race: "DRAGON",
    rarity: "COMMON",
    set: 3,
    rating: 1,
    text: "Costs (1) less for each minion that died this turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "14450.png",
    tile: "BRM_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0fa1a765-2ada-4622-829b-0542f75de18a",
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
    name: "Hungry Dragon",
    artist: "John Polidora",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2283,
    flavor: "Hungry Hungry Dragon is NOT a fun game.",
    health: 6,
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_026",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "COMMON",
    set: 3,
    rating: 2,
    text: "Battlecry: Summon a random 1-Cost minion for your opponent.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "14436.png",
    tile: "BRM_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "470616a8-d81d-4166-8359-04dc943d2311",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Majordomo Executus",
    artist: "Alex Horley Orlandelli",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2281,
    elite: true,
    flavor:
      "You thought Executus turned you into Ragnaros, but really Ragnaros was in you the whole time.",
    health: 7,
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_027",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 3,
    rating: 1,
    text: "Deathrattle: Replace your hero with Ragnaros, the Firelord.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14456.png",
    tile: "BRM_027.png"
  },
  {
    name: "Emperor Thaurissan",
    artist: "Wayne Reynolds",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2262,
    elite: true,
    flavor:
      "His second greatest regret is summoning an evil Firelord who enslaved his entire people.",
    health: 5,
    howToEarn:
      "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    id: "BRM_028",
    rarity: "LEGENDARY",
    set: 3,
    rating: 4,
    text:
      "At the end of your turn, reduce the Cost of cards in your hand by (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14454.png",
    tile: "BRM_028.png"
  },
  {
    name: "Rend Blackhand",
    artist: "Alex Horley",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2308,
    elite: true,
    flavor:
      "Rend believes he is the True Warchief of the Horde and he keeps editing the wikipedia page for 'Warchief of the Horde' to include his picture.",
    health: 4,
    howToEarn:
      "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    id: "BRM_029",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_LEGENDARY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0
    },
    rarity: "LEGENDARY",
    set: 3,
    rating: 1,
    targetingArrowText: "Destroy a Legend.",
    text: "Battlecry: If you're holding a Dragon, destroy a Legendary minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "14438.png",
    tile: "BRM_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "fc94b781-f4db-4f95-a0d8-9541b5f093d0",
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
    name: "Nefarian",
    artist: "Ruan Jia",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2261,
    elite: true,
    flavor:
      "They call him 'Blackwing' because he's a black dragon...... and he's got wings.",
    health: 8,
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_030",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 3,
    rating: 4,
    text:
      "Battlecry: Add 2 random spells to your hand <i>(from your opponent's class)</i>.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "14448.png",
    tile: "BRM_030.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "8843951e-2cfc-49b9-9871-8b24a889998a",
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
    name: "Chromaggus",
    artist: "Todd Lockwood",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 2280,
    elite: true,
    flavor:
      "Left head and right head can never agree about what to eat for dinner, so they always end up just eating ramen again.",
    health: 8,
    howToEarn:
      "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    id: "BRM_031",
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 3,
    rating: 4,
    text: "Whenever you draw a card, put another copy into your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "14451.png",
    tile: "BRM_031.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "66e14e13-101b-4806-a0e8-36403942cceb",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["SPELL", "MINION"]
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 3
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "draw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Blackwing Technician",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2408,
    flavor:
      "This is who you go to when your Blackwing needs a tune up. Don't go to a cut rate Blackwing tune up shop!",
    health: 4,
    howToEarn: "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    id: "BRM_033",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 3,
    rating: 1,
    text: "Battlecry: If you're holding a Dragon, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "14437.png",
    tile: "BRM_033.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "413a6c9c-16b8-4be6-a437-1f4f8e0e0fdc",
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
    name: "Blackwing Corruptor",
    artist: "Greg Staples",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2409,
    flavor:
      "He got his name when he gave Blackwing some comic books and rock & roll records.",
    health: 4,
    howToEarn:
      "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    howToEarnGolden:
      "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    id: "BRM_034",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0 },
    rarity: "COMMON",
    set: 3,
    rating: 1,
    targetingArrowText: "Deal 3 damage.",
    text: "Battlecry: If you're holding a Dragon, deal 3 damage.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "FAST"],
    imageUrl: "14447.png",
    tile: "BRM_034.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9659d558-60d8-495f-8c1d-501168abf8a2",
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
  }
];
