export const koboldsAndCatacombs = [
  {
    name: "Psychic Scream",
    artist: "Chris Seaman",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 43112,
    flavor: "Everybody! Hit the deck!",
    id: "LOOT_008",
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_MINION_TARGET: 0 },
    rarity: "EPIC",
    set: 11,
    rating: 4,
    text: "Shuffle all minions into your opponent's deck.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "76911.png",
    tile: "LOOT_008.png"
  },
  {
    name: "Vulgar Homunculus",
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 43121,
    flavor: "Fortunately he has an even number of fingers.",
    health: 4,
    id: "LOOT_013",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "DEMON",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Taunt Battlecry: Deal 2 damage to your hero.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76925.png",
    tile: "LOOT_013.png"
  },
  {
    name: "Kobold Librarian",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 43122,
    flavor: "Kobolds sort books using a gooey decimal system.",
    health: 1,
    id: "LOOT_014",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 4,
    text: "Battlecry: Draw a card. Deal 2 damage to your hero.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76926.png",
    tile: "LOOT_014.png"
  },
  {
    name: "Dark Pact",
    artist: "Slawomir Maniak",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 43128,
    faction: "ALLIANCE",
    flavor: "'Don't worry about the fine print. Just sign here.'",
    id: "LOOT_017",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 11,
    rating: 3,
    text: "Destroy a friendly minion. Restore #4 Health to your hero.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "76977.png",
    tile: "LOOT_017.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "d5c6cedb-a1d0-46bf-ba2a-4ef7023f9e4f",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hooked Reaver",
    artist: "A.J. Nazzaro",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 43133,
    flavor: "The hook is just an accessory. He can reave just fine without it.",
    health: 4,
    id: "LOOT_018",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 11,
    rating: 1,
    text: "Battlecry: If you have 15 or less Health, gain +3/+3 and Taunt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77010.png",
    tile: "LOOT_018.png"
  },
  {
    name: "Fal'dorei Strider",
    artist: "Tyler West Studios",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 43228,
    flavor:
      "What’s worse? Seeing the spider, or NOT seeing the spider, but knowing it’s somewhere in your deck?",
    health: 4,
    id: "LOOT_026",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text:
      "Battlecry: Shuffle 3 Ambushes into your deck. When drawn, summon a 4/4 Spider.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "76914.png",
    tile: "LOOT_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "4a586242-c92d-4e01-aa36-370401a83936",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "draw"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Fal'dorei Strider"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cavern Shinyfinder",
    artist: "Anton Magdalin",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 43237,
    flavor: "They call her the candled vandal.",
    health: 1,
    id: "LOOT_033",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Battlecry: Draw a weapon from your deck.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76984.png",
    tile: "LOOT_033.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "eaeb95dd-1c6d-4c9b-ab6b-c530cc426900",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "WEAPON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kobold Barbarian",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 43269,
    flavor:
      "What is best in life? To make candle. To keep candle. To hear lamentations of candle-takers.",
    health: 4,
    id: "LOOT_041",
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "At the start of your turn, attack a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76979.png",
    tile: "LOOT_041.png"
  },
  {
    name: "Lesser Amethyst Spellstone",
    artist: "Mike Azevedo",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 43272,
    flavor:
      "A purple stone Azari carved For dark hearts, craving, power-starved. The first to bow, the warlock Rin, Embraced the darkness, slew her kin.",
    id: "LOOT_043",
    mechanics: ["LIFESTEAL"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 11,
    rating: 3,
    text:
      "Lifesteal. Deal $3 damage to a minion. <i>(Take damage from your cards to upgrade.)</i>",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HEAL"],
    imageUrl: "76924.png",
    tile: "LOOT_043.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "48a6fc56-e860-468c-bb92-2a22a0c1bd4b",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage .* your hero"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bladed Gauntlet",
    artist: "Luca Zontini",
    attack: 0,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 43277,
    durability: 2,
    flavor: "CAUTION: DO NOT SCRATCH NOSE.",
    id: "LOOT_044",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Has Attack equal to your Armor. Can't attack heroes.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76969.png",
    tile: "LOOT_044.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4520b7af-3591-4822-b7ff-303dcfd5a96a",
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
                minValue: "Bladed Gauntlet"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Barkskin",
    artist: "Lucas Graciano",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 43282,
    flavor: "Make like a tree… and gain armor.",
    id: "LOOT_047",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Give a minion +3 Health. Gain 3 Armor.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "76997.png",
    tile: "LOOT_047.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "fd01222f-da80-429d-8e56-9241337ad3e4",
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
    name: "Ironwood Golem",
    artist: "L. Lullabi & K. Turovec",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 43284,
    flavor: "Marketed as a 'rust-proof iron golem.'",
    health: 6,
    id: "LOOT_048",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Taunt Can only attack if you have 3 or more Armor.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "76965.png",
    tile: "LOOT_048.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "8e6b8c05-62d0-4252-a536-2953e9fb54ff",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "armor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lesser Jasper Spellstone",
    artist: "Jim Nelson",
    cardClass: ["DRUID"],
    collectible: true,
    collectionText:
      "Deal $2 damage to a minion. <i>(Gain 3 Armor to upgrade.)</i>",
    cost: 1,
    dbfId: 43288,
    flavor:
      "In ancient woods, elves fought the curse The demon’s shadow to disperse But hatred raged and frail souls turned Now horned and hooved their forests burned.",
    id: "LOOT_051",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 11,
    rating: 3,
    text: "Deal $2 damage to a minion. @<i>(Gain 3 Armor to upgrade.)</i>",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "73327.png",
    tile: "LOOT_051.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b98eaea2-c3fb-42e8-9116-2485d4288bca",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "armor"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Lesser Jasper Spellstone"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Branching Paths",
    artist: "Matt Dixon",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 43294,
    entourage: ["LOOT_054d", "LOOT_054b", "LOOT_054c"],
    flavor:
      "Three paths diverged in a darkened hall, and I – I took the one less traveled by, And got eaten by a slime.",
    id: "LOOT_054",
    rarity: "EPIC",
    set: 11,
    rating: 3,
    text:
      "Choose Twice - Draw a card; Give your minions  +1 Attack; Gain 6 Armor.",
    type: "SPELL",
    extra: ["BUFF", "CARD_DRAW", "HEAL"],
    imageUrl: "76870.png",
    tile: "LOOT_054.png"
  },
  {
    name: "Astral Tiger",
    artist: "Tyler West Studios",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 43304,
    flavor: "Astral kitty litter is surprisingly hard to find.",
    health: 5,
    id: "LOOT_056",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Deathrattle: Shuffle a  copy of this minion into your deck.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76982.png",
    tile: "LOOT_056.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "eea69019-8f67-4c11-8ef6-1b11a8c7af0f",
            filters: [
              {
                property: "referencedTags",
                operation: "INCLUDES",
                minValue: "RECRUIT"
              },
              { property: "text", operation: "MATCH", minValue: 4 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Crushing Hand",
    artist: "Phil Saunders",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 43322,
    flavor: "Shamans always have the firmest handshakes.",
    id: "LOOT_060",
    mechanics: ["OVERLOAD"],
    overload: 3,
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Deal $8 damage to a minion. Overload: (3)",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "76998.png",
    tile: "LOOT_060.png"
  },
  {
    name: "Kobold Hermit",
    artist: "Dany Orizio",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 43329,
    entourage: ["CS2_052", "CS2_050", "NEW1_009", "CS2_051"],
    flavor:
      "To truly understand candles, it takes YEARS of quiet contemplation.",
    health: 1,
    id: "LOOT_062",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Choose a basic Totem. Summon it.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "76922.png",
    tile: "LOOT_062.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7d163ef9-6c4a-4052-bd9a-88718741634f",
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
    name: "Lesser Sapphire Spellstone",
    artist: "Jason Kang",
    cardClass: ["SHAMAN"],
    collectible: true,
    collectionText:
      "Summon 1 copy of a friendly minion. <i>(Overload 3 Mana Crystals to upgrade.)</i>",
    cost: 7,
    dbfId: 43331,
    flavor:
      "A stone of blue, embraced with glee By murloc lords beneath the sea Soon numberless they swarmed the shore First two, then four, then more...and more...",
    id: "LOOT_064",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    referencedTags: ["OVERLOAD"],
    set: 11,
    rating: 1,
    text:
      "Summon 1 copy of a friendly minion. @<i>(Overload 3 Mana Crystals to upgrade.)</i>",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "73330.png",
    tile: "LOOT_064.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "21359379-40f2-4c09-aaac-037854ce3b78",
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
    name: "Sewer Crawler",
    artist: "Andrew Hou",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43345,
    flavor: "His clothing is 'ratty' in more ways than one.",
    health: 1,
    id: "LOOT_069",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Summon a 2/3 Giant Rat.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "77013.png",
    tile: "LOOT_069.png"
  },
  {
    name: "Flanking Strike",
    artist: "Arthur Bozonnet",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 43357,
    flavor:
      "Wolves to the left and arrows to the right, here I am stuck in the middle with you.",
    id: "LOOT_077",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Deal $3 damage to a minion. Summon a 3/3 Wolf.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "76978.png",
    tile: "LOOT_077.png"
  },
  {
    name: "Cave Hydra",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 43358,
    flavor: "Can be upgraded into a Cave Lurker.",
    health: 4,
    id: "LOOT_078",
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Also damages the minions next to whomever this attacks.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76981.png",
    tile: "LOOT_078.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "f224153e-c947-44ce-b0cf-eb5c6aa363f9",
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
    name: "Wandering Monster",
    artist: "Trent Kaniuga",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 43359,
    flavor: "Not all who wander are lost. This one is lost though, for sure.",
    id: "LOOT_079",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 11,
    rating: 3,
    text:
      "Secret: When an enemy attacks your hero, summon a 3-Cost minion as the new target.",
    type: "SPELL",
    extra: ["SECRET", "TEMPO"],
    imageUrl: "73332.png",
    tile: "LOOT_079.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "21cc49c2-f5bf-4313-b999-47f1c6e39a89",
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
    name: "Lesser Emerald Spellstone",
    artist: "Joe Wilson",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 43363,
    flavor:
      "An emerald stone for Tauren hands Who sought its strength to save their lands Their tribes now lost, their rage released Who’s hunting now? And who’s the beast?",
    id: "LOOT_080",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 11,
    rating: 3,
    text: "Summon two 3/3 Wolves. <i>(Play a Secret to upgrade.)</i>",
    type: "SPELL",
    extra: ["TEMPO"],
    imageUrl: "76950.png",
    tile: "LOOT_080.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c85dde47-1c82-4e19-90c9-3599f3b35b74",
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
    name: "Rhok'delar",
    artist: "Trent Kaniuga",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 43369,
    durability: 2,
    elite: true,
    flavor: "Rhok'delar is ready to Rhok'de'casbah!",
    id: "LOOT_085",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text:
      "Battlecry: If your deck has no minions, fill your hand with Hunter spells.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76976.png",
    tile: "LOOT_085.png"
  },
  {
    name: "Potion of Heroism",
    artist: "Luke Mancini",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 43373,
    flavor: "Also known as 'Liquid Courage.'",
    id: "LOOT_088",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Give a minion Divine Shield. Draw a card.",
    type: "SPELL",
    extra: ["BUFF", "CARD_DRAW"],
    imageUrl: "76987.png",
    tile: "LOOT_088.png"
  },
  {
    name: "Lesser Pearl Spellstone",
    artist: "Konstantin Turovec",
    cardClass: ["PALADIN"],
    collectible: true,
    collectionText:
      "Summon a 2/2 Spirit with Taunt. <i>(Restore 3 Health to upgrade.)</i>",
    cost: 2,
    dbfId: 43382,
    flavor:
      "In ages old, when Ancients broke Azari of the Legion spoke To tempt the mortals: gems of power  The weak succumbed, their souls devoured.",
    id: "LOOT_091",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 11,
    rating: 2,
    text:
      "Summon a 2/2 Spirit with Taunt. @<i>(Restore 3 Health to upgrade.)</i>",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "76900.png",
    tile: "LOOT_091.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "2a9da813-e18d-445c-b91e-4cfc9afc76e2",
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
    name: "Call to Arms",
    artist: "Konstantin Turovec",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 43384,
    flavor: "More personal than a text to arms.",
    id: "LOOT_093",
    rarity: "EPIC",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 4,
    text: "Recruit 3 minions that  cost (2) or less.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "76919.png",
    tile: "LOOT_093.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "05807fb2-1a8c-44df-a97b-f3bb343c55f4",
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
    name: "Explosive Runes",
    artist: "Matt Dixon",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 43407,
    flavor: "Sometimes it's safer NOT to read the warning signs.",
    id: "LOOT_101",
    mechanics: ["SECRET", "ImmuneToSpellpower"],
    rarity: "RARE",
    set: 11,
    rating: 3,
    text:
      "Secret: After your opponent plays a minion, deal $6 damage to it and any excess to their hero.",
    type: "SPELL",
    extra: ["SECRET", "DAMAGE", "TEMPO"],
    imageUrl: "76906.png",
    tile: "LOOT_101.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "69f6f725-c326-4cb0-840a-b65dd8a20c2d",
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
    name: "Lesser Ruby Spellstone",
    artist: "Zoltan Boros",
    cardClass: ["MAGE"],
    collectible: true,
    collectionText:
      "Add 1 random Mage spell to your hand. <i>(Play 2 Elementals to upgrade.)</i>",
    cost: 2,
    dbfId: 43414,
    flavor:
      "The final stone undid its master Spun into wards by nameless caster Azari wailed a savage roar Now sealed in nether, evermore.",
    id: "LOOT_103",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text:
      "Add 1 random Mage spell to your hand. @<i>(Play 2 Elementals to upgrade.)</i>",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "76897.png",
    tile: "LOOT_103.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "ae469f47-d293-491c-b618-4b7c2e98531e",
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
    name: "Shifting Scroll",
    artist: "Arthur Bozonnet",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 0,
    dbfId: 43420,
    flavor: "Next turn, this is going to be AMAZING.",
    hideStats: true,
    id: "LOOT_104",
    playRequirements: { REQ_CANNOT_PLAY_THIS: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text:
      "Each turn this is in your hand, transform it into a random Mage spell.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "77017.png",
    tile: "LOOT_104.png"
  },
  {
    name: "Deck of Wonders",
    artist: "Efrem Palacios",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 43424,
    flavor:
      "'Pick a card, any card. Wait! No! Not that one!' - Last words of previous owner",
    id: "LOOT_106",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Shuffle 5 Scrolls into your deck. When drawn, cast a random spell.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "76942.png",
    tile: "LOOT_106.png"
  },
  {
    name: "Aluneth",
    artist: "Izzy Hoover",
    attack: 0,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 43426,
    durability: 3,
    elite: true,
    flavor: "PHENOMENAL ARCANE POWER…itty bitty living space.",
    id: "LOOT_108",
    mechanics: ["InvisibleDeathrattle"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 3,
    text: "At the end of your turn, draw 3 cards.",
    type: "WEAPON",
    extra: ["CARD_DRAW"],
    imageUrl: "73321.png",
    tile: "LOOT_108.png"
  },
  {
    name: "Scorp-o-matic",
    artist: "Phil Saunders",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 43453,
    flavor: "Back in my day, we had to manually scorp.",
    health: 2,
    id: "LOOT_111",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_MAX_ATTACK: 1
    },
    race: "MECHANICAL",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Battlecry: Destroy a minion with 1 or less Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77014.png",
    tile: "LOOT_111.png"
  },
  {
    name: "Wax Elemental",
    artist: "Steve Prescott",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 43463,
    flavor: "Takes double damage from wick-based weapons.",
    health: 2,
    id: "LOOT_117",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Taunt Divine Shield",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77009.png",
    tile: "LOOT_117.png"
  },
  {
    name: "Ebon Dragonsmith",
    artist: "Nicola Saviori",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 43465,
    flavor: "Having a furnace-mouth is really handy for a blacksmith.",
    health: 4,
    id: "LOOT_118",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Battlecry: Reduce the Cost of a random weapon in your hand by (2).",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76992.png",
    tile: "LOOT_118.png"
  },
  {
    name: "Corrosive Sludge",
    artist: "Luca Zontini",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 43469,
    faction: "ALLIANCE",
    flavor: "The result of centuries of terrible sanitation.",
    health: 5,
    id: "LOOT_122",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Destroy your opponent's weapon.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77002.png",
    tile: "LOOT_122.png"
  },
  {
    name: "Lone Champion",
    artist: "Jomaro Kindred",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43473,
    flavor:
      "He is a champion, with no friends. He'll keep on fighting, til the end!",
    health: 4,
    id: "LOOT_124",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    set: 11,
    rating: 2,
    text:
      "Battlecry: If you control no other minions, gain Taunt and Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "76883.png",
    tile: "LOOT_124.png"
  },
  {
    name: "Stoneskin Basilisk",
    artist: "Julian Del Rey",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43474,
    flavor: "He got that way from looking into a mirror.",
    health: 1,
    id: "LOOT_125",
    mechanics: ["DIVINE_SHIELD", "POISONOUS"],
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Divine Shield  Poisonous",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77021.png",
    tile: "LOOT_125.png"
  },
  {
    name: "Arcane Tyrant",
    artist: "Hideaki Takamura",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 43483,
    flavor: "Tyrant is such a strong word.",
    health: 4,
    id: "LOOT_130",
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Costs (0) if you've cast a spell that costs (5) or more this turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76910.png",
    tile: "LOOT_130.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "e27a5878-c285-4767-bcc9-7a92ee603eb6",
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
    name: "Green Jelly",
    artist: "Anton Kagoukin",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 43485,
    flavor: "This card really breaks out of the mold.",
    health: 3,
    id: "LOOT_131",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 11,
    rating: 1,
    text: "At the end of your turn, summon a 1/2 Ooze with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77007.png",
    tile: "LOOT_131.png"
  },
  {
    name: "Dragonslayer",
    artist: "Jim Nelson",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43486,
    flavor: "A pair of stout dwarves nearly averted the Cataclysm.",
    health: 3,
    id: "LOOT_132",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 24
    },
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Deal 6 damage to a Dragon.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "77001.png",
    tile: "LOOT_132.png"
  },
  {
    name: "Toothy Chest",
    artist: "Jakub Kasber",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43489,
    flavor: "Do you want to eat an adventurer?  I want to eat an adventurer!",
    health: 4,
    id: "LOOT_134",
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "At the start of your turn, set this minion's Attack to 4.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77016.png",
    tile: "LOOT_134.png"
  },
  {
    name: "Sneaky Devil",
    artist: "Ivan Fomin",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 43493,
    faction: "ALLIANCE",
    flavor:
      "The result of a tragic accident involving a Defias Thug, a Wand of Polymorph, and a bundle of Fel Lotus.",
    health: 2,
    id: "LOOT_136",
    mechanics: ["STEALTH"],
    race: "DEMON",
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Stealth Your other minions have +1 Attack.",
    type: "MINION",
    extra: ["BUFF"],
    imageUrl: "77019.png",
    tile: "LOOT_136.png"
  },
  {
    name: "Sleepy Dragon",
    artist: "Sean McNally",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 43494,
    flavor: "Local villagers call her 'Naps Under the Mountain.'",
    health: 12,
    id: "LOOT_137",
    mechanics: ["TAUNT"],
    race: "DRAGON",
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76980.png",
    tile: "LOOT_137.png"
  },
  {
    name: "Hoarding Dragon",
    artist: "Hideaki Takamura",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 43507,
    flavor: "Keeps his two cents to himself.",
    health: 6,
    id: "LOOT_144",
    mechanics: ["DEATHRATTLE"],
    race: "DRAGON",
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Deathrattle: Give your opponent two Coins.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76912.png",
    tile: "LOOT_144.png"
  },
  {
    name: "Corridor Creeper",
    artist: "Nick Southham",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 43515,
    flavor:
      "It likes the smell of dead things, which is curious, as it has no visible nose.",
    health: 5,
    id: "LOOT_149",
    race: "BEAST",
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Costs (1) less whenever a minion dies while this is in your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77000.png",
    tile: "LOOT_149.png"
  },
  {
    name: "Furbolg Mossbinder",
    artist: "Steve Prescott",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 43517,
    faction: "ALLIANCE",
    flavor: "Behold, the unstoppable power of MOSS!",
    health: 1,
    id: "LOOT_150",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Battlecry: Transform a friendly minion into a 6/6 Elemental.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76934.png",
    tile: "LOOT_150.png"
  },
  {
    name: "Boisterous Bard",
    artist: "Ursula Dorada",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 43523,
    faction: "ALLIANCE",
    flavor: "As a kid, she fought with rocks.  Now she fights with ROCK!",
    health: 2,
    id: "LOOT_152",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Give your other minions +1 Health.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "76999.png",
    tile: "LOOT_152.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e761c778-9f9a-4a82-99a4-8919efcf2f68",
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
    name: "Violet Wurm",
    artist: "J. Cranford",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 43526,
    flavor: "It's wurms all the way down.",
    health: 7,
    id: "LOOT_153",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Deathrattle: Summon seven 1/1 Grubs.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "77012.png",
    tile: "LOOT_153.png"
  },
  {
    name: "Gravelsnout Knight",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 43528,
    flavor: "The mole of La Mancha rides again!",
    health: 3,
    id: "LOOT_154",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Battlecry: Summon a random 1-Cost minion for your opponent.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "77006.png",
    tile: "LOOT_154.png"
  },
  {
    name: "Carnivorous Cube",
    artist: "Jakub Kasper",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 45195,
    flavor:
      "He's always grumpy unil he's eaten his first barista of the morning.",
    health: 6,
    id: "LOOT_161",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text:
      "Battlecry: Destroy a friendly minion. Deathrattle: Summon 2 copies of it.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "73325.png",
    tile: "LOOT_161.png"
  },
  {
    name: "Sonya Shadowdancer",
    artist: "J. Axer",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 45263,
    elite: true,
    flavor: "Love like you've never been hurt. Dance like a 1/1 is watching.",
    health: 2,
    id: "LOOT_165",
    rarity: "LEGENDARY",
    set: 11,
    rating: 3,
    text:
      "After a friendly minion dies, add a 1/1 copy of it to your hand. It costs (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76907.png",
    tile: "LOOT_165.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "40abc5e4-85ec-4c2e-8054-20776b15b6af",
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
    name: "Fungalmancer",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 45265,
    flavor:
      "Fungalmancy is the easy major for those who can't cut it at Waxmancy.",
    health: 2,
    id: "LOOT_167",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Give adjacent minions +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "76991.png",
    tile: "LOOT_167.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "d9a3c404-96fa-42fa-8296-54ddbdd2b795",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Raven Familiar",
    artist: "Eva Wildermann",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 45269,
    flavor: "Quoth the raven, 'Does yours cost more?'",
    health: 2,
    id: "LOOT_170",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text:
      "Battlecry: Reveal a spell in each deck. If yours costs more, draw it.",
    type: "MINION",
    extra: ["CARD_DRAW"],
    imageUrl: "76885.png",
    tile: "LOOT_170.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a4aad227-561a-4b7c-8bf6-4262270701fc",
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
    name: "Dragon's Fury",
    artist: "Andrew Hou",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 45271,
    flavor:
      "“C’mon Hucklemuck. She’ll never notice if we take just one little coin.”",
    id: "LOOT_172",
    rarity: "EPIC",
    set: 11,
    rating: 3,
    text:
      "Reveal a spell from your deck. Deal damage equal to its Cost to all minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "76963.png",
    tile: "LOOT_172.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c73d87a3-8285-4c08-8752-5fd4c9a172ad",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dragon's Fury"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Silver Vanguard",
    artist: "Alex Garner",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 45287,
    flavor: "Float like a Faerie Dragon, sting like a Hivequeen.",
    health: 3,
    id: "LOOT_184",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "Deathrattle: Recruit an 8-Cost minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76884.png",
    tile: "LOOT_184.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 5,
            id: "82f5548c-d97a-466f-9374-c48e9b285317",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 8 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Twilight's Call",
    artist: "M. Herrera & A. Miller",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 45353,
    flavor: "If you’re experiencing resurrection sickness, press 1.",
    id: "LOOT_187",
    playRequirements: { REQ_FRIENDLY_MINION_DIED_THIS_GAME: 0 },
    rarity: "RARE",
    set: 11,
    rating: 1,
    text:
      "Summon 1/1 copies of 2 friendly Deathrattle minions that died this game.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "76959.png",
    tile: "LOOT_187.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "3594b33d-0226-498b-a0ad-162f6b0c3ec2",
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
    name: "Shimmering Courser",
    artist: "Eva Wildermann",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46892,
    flavor:
      "A courser is a courser of course, of course, she's more of a unicorn than a horse...",
    health: 3,
    id: "LOOT_193",
    race: "BEAST",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Only you can target this with spells and Hero Powers.",
    type: "MINION",
    extra: ["BUFF"],
    imageUrl: "76985.png",
    tile: "LOOT_193.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "71b16a3f-9656-4b65-8e4c-5d95903fce68",
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
    name: "Lesser Mithril Spellstone",
    artist: "A.J. Nazzaro",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 45519,
    flavor:
      "To dwarves of stone the demon called With promises of might, enthralled In grasping greed they found their doom Forever bound in mithril tombs.",
    id: "LOOT_203",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Summon one 5/5 Mithril Golem. <i>(Equip a weapon to upgrade.)</i>",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "76872.png",
    tile: "LOOT_203.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "914c1297-20f7-45c9-bc04-4cb21e855005",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "WEAPON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cheat Death",
    artist: "Mauricio Herrera",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 45520,
    flavor: "Reported.",
    id: "LOOT_204",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text:
      "Secret: When a friendly minion dies, return it to your hand. It costs (2) less.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "76866.png",
    tile: "LOOT_204.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "7d74745b-0846-4024-9562-9e7885924fa0",
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
    name: "Dragon Soul",
    artist: "Tyler Walpole",
    attack: 0,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 45528,
    durability: 3,
    elite: true,
    flavor:
      "Crafted by Deathwing's goblin horde, but the dragon added the rainbow sparkles himself.",
    id: "LOOT_209",
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text: "After you cast 3 spells in a turn, summon a 5/5 Dragon.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "73322.png",
    tile: "LOOT_209.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "cc6f7db1-3a3e-471b-801b-ad911f50a348",
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
            maxCards: 4,
            id: "e124327c-2e55-421f-baf1-a5663dac2259",
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
    name: "Sudden Betrayal",
    artist: "Matt Dixon",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 45529,
    flavor:
      "You thought he was your bro-bold, but turns out he's your foe-bold.",
    id: "LOOT_210",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text:
      "Secret: When a minion attacks your hero, instead it attacks one of its neighbors.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "76865.png",
    tile: "LOOT_210.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3575c7b8-b406-4bb4-b5f6-894a38eaf68d",
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
    name: "Elven Minstrel",
    artist: "Wayne Wu",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 45531,
    flavor: "'After that gig in Hamlin went south, I swore off rats.'",
    health: 2,
    id: "LOOT_211",
    mechanics: ["COMBO"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "RARE",
    set: 11,
    rating: 4,
    text: "Combo: Draw 2 minions from your deck.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "76946.png",
    tile: "LOOT_211.png"
  },
  {
    name: "Evasion",
    artist: "Alex Horley",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 45535,
    flavor: "Works on weapons, missiles, and taxes.",
    id: "LOOT_214",
    mechanics: ["SECRET"],
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Secret: After your hero takes damage, become Immune this turn.",
    type: "SPELL",
    extra: ["SECRET", "STALL"],
    imageUrl: "76933.png",
    tile: "LOOT_214.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4e28dde2-0015-48f5-8558-e815256d6183",
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
    name: "Lynessa Sunsorrow",
    artist: "Tyler West Studios",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 45539,
    elite: true,
    flavor:
      "A diet of pure magic is great for the complexion but wreaks havoc on one's mood.",
    health: 1,
    id: "LOOT_216",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text:
      "Battlecry: Cast each spell you cast on your minions  this game on this one.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76920.png",
    tile: "LOOT_216.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "bb304657-d89f-4f08-b498-cf8fc155f139",
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
    name: "To My Side!",
    artist: "Peter Stapleton",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 45546,
    entourage: ["NEW1_032", "NEW1_033", "NEW1_034"],
    flavor: "I hunt alone.  Well, me and Misha.  And Huffer.  And Leokk.",
    id: "LOOT_217",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Summon an Animal Companion, or 2 if your deck has no minions.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "76970.png",
    tile: "LOOT_217.png"
  },
  {
    name: "Feral Gibberer",
    artist: "Anton Zemskov",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 45547,
    flavor: "It's certainly not civilized gibbering.",
    health: 1,
    id: "LOOT_218",
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "After this minion attacks a hero, add a copy of it to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "76864.png",
    tile: "LOOT_218.png"
  },
  {
    name: "Candleshot",
    artist: "Anton Magdalin",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 45537,
    durability: 3,
    flavor: "Once called Cahn’delar, Shortbow of the Ancient Whisker.",
    id: "LOOT_222",
    rarity: "COMMON",
    set: 11,
    rating: 4,
    text: "Immune while attacking.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "76994.png",
    tile: "LOOT_222.png"
  },
  {
    name: "Arcane Artificer",
    artist: "Arthur Gimaldinov",
    attack: 1,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 45590,
    flavor:
      "Ethereal armor dissipates in 6 hours which can cause extreme awkwardness for first time buyers.",
    health: 2,
    id: "LOOT_231",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Whenever you cast a spell, gain Armor equal to its Cost.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "76908.png",
    tile: "LOOT_231.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "c4d16451-9fa2-4ee8-8afe-11e7cee9b597",
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
    name: "Cursed Disciple",
    artist: "Adam Byrne",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 45594,
    flavor:
      "Politer than his brother, the cursing disciple, but far more evil.",
    health: 1,
    id: "LOOT_233",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Deathrattle: Summon a 5/1 Revenant.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76990.png",
    tile: "LOOT_233.png"
  },
  {
    name: "Dire Mole",
    artist: "Daren Bader",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 45707,
    flavor:
      "You especially don't want to make a dire mountain out of a dire mole hill.",
    health: 3,
    id: "LOOT_258",
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "76996.png",
    tile: "LOOT_258.png"
  },
  {
    name: "Unidentified Elixir",
    artist: "Dan Scott",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 45759,
    entourage: ["LOOT_278t1", "LOOT_278t2", "LOOT_278t3", "LOOT_278t4"],
    flavor:
      "'Here, taste this.' (Slurp) 'What is it?' 'I don't know, I found it in one of the labs.'",
    id: "LOOT_278",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Give a minion +2/+2. Gains a bonus effect in your hand.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "73324.png",
    tile: "LOOT_278.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "dfbfded5-1363-46ff-8ad8-e3647931aee8",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unidentified Shield",
    artist: "Dan Scott",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 45775,
    entourage: ["LOOT_285t", "LOOT_285t2", "LOOT_285t3", "LOOT_285t4"],
    flavor:
      "The kobold stared at the bundle for a long time. “Ah hah!” he said. “It’s a shield.”",
    id: "LOOT_285",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Gain 5 Armor. Gains a bonus effect in your hand.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "76935.png",
    tile: "LOOT_285.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "4248a849-dee6-4486-8831-ed05bbe7e098",
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
                minValue: "Unidentified Shield"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unidentified Maul",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 45782,
    durability: 2,
    entourage: ["LOOT_286t2", "LOOT_286t3", "LOOT_286t1", "LOOT_286t4"],
    flavor:
      "When all you have is an unidentified maul, everything else looks like an unidentified nail.",
    id: "LOOT_286",
    rarity: "RARE",
    set: 11,
    rating: 4,
    text: "Gains a bonus effect in your hand.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "BUFF"],
    imageUrl: "76886.png",
    tile: "LOOT_286.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "2a15ce84-f702-4d3a-acc8-1e780734fe13",
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
    name: "Shroom Brewer",
    artist: "Andrew Hou",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 45784,
    flavor: "Side effects guaranteed!",
    health: 4,
    id: "LOOT_291",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Battlecry: Restore 4 Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77020.png",
    tile: "LOOT_291.png"
  },
  {
    name: "Possessed Lackey",
    artist: "P. Stapleton & G. Hanna",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 45820,
    flavor:
      "If you don't keep up with your payments, it'll be a repossessed lackey.",
    health: 2,
    id: "LOOT_306",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 2,
    text: "Deathrattle: Recruit a Demon.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76948.png",
    tile: "LOOT_306.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "31a75794-c69e-471d-a3b8-1914bd2321fd",
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
    name: "Oaken Summons",
    artist: "Konstantin Turovec",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 45828,
    flavor: "The Guild used oak trees until they all turned to ash.",
    id: "LOOT_309",
    rarity: "COMMON",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 3,
    text: "Gain 6 Armor. Recruit a minion that costs (4) or less.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "76966.png",
    tile: "LOOT_309.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "775edf7c-344f-4329-909e-04ac11f2a437",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 4 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Crystal Lion",
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 45833,
    flavor:
      "Standard issue recruit gear: 1 silver sword, 1 Lordaeron insignia, 2 bags of crystal kibble.",
    health: 5,
    id: "LOOT_313",
    mechanics: ["DIVINE_SHIELD"],
    rarity: "RARE",
    set: 11,
    rating: 2,
    text:
      "Divine Shield Costs (1) less for each Silver Hand Recruit you control.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76968.png",
    tile: "LOOT_313.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "915e1dd5-877e-4059-a760-fb5c34ff574d",
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
    name: "Grizzled Guardian",
    artist: "Alexey Aparin",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 8,
    dbfId: 45835,
    flavor: "Favorite sandwich? Grizzled cheese.",
    health: 5,
    id: "LOOT_314",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "Taunt Deathrattle: Recruit 2 minions that cost (4) or less.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76894.png",
    tile: "LOOT_314.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "046a5810-2cb0-45db-a903-1a5e8dbd2c4e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 4 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Trogg Gloomeater",
    artist: "Chris Seaman",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 45837,
    flavor:
      "His breath smells like agony and despair, which is still better than most troggs.",
    health: 5,
    id: "LOOT_315",
    mechanics: ["POISONOUS", "TAUNT"],
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Taunt Poisonous",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77015.png",
    tile: "LOOT_315.png"
  },
  {
    name: "Ixlid, Fungal Lord",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 45859,
    elite: true,
    flavor: "We suggest crafting Ixlid; he'll grow on you. Literally.",
    health: 4,
    id: "LOOT_329",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 11,
    rating: 2,
    text: "After you play a minion, summon a copy of it.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76947.png",
    tile: "LOOT_329.png"
  },
  {
    name: "Level Up!",
    artist: "Wayne Reynolds",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 45877,
    flavor: "Ding! Grats.",
    id: "LOOT_333",
    rarity: "EPIC",
    referencedTags: ["TAUNT"],
    set: 11,
    rating: 1,
    text: "Give your Silver Hand Recruits +2/+2 and Taunt.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "76867.png",
    tile: "LOOT_333.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "49fe6af0-4e5c-4eb4-8353-7416c22bf1da",
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
    name: "Primal Talismans",
    artist: "Ivan Fomin",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 45905,
    flavor:
      "All that remained from the first kobold colony: a single talisman and the word 'Flamestrike.'",
    id: "LOOT_344",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "Give your minions 'Deathrattle: Summon a random basic Totem.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "76923.png",
    tile: "LOOT_344.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4533e499-5aed-4ab3-a856-4d3e162c4a68",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kobold Apprentice",
    artist: "Alex Horley",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45929,
    flavor: "Horrible secret: The Darkness is immune to Arcane Missiles.",
    health: 1,
    id: "LOOT_347",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Deal 3 damage randomly split among all enemies.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76993.png",
    tile: "LOOT_347.png"
  },
  {
    name: "Greedy Sprite",
    artist: "L. Lullabi & K. Turovec",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 45945,
    flavor: "Sparkliest of the seven deadly sprites.",
    health: 1,
    id: "LOOT_351",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "Deathrattle: Gain an empty Mana Crystal.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76972.png",
    tile: "LOOT_351.png"
  },
  {
    name: "Psionic Probe",
    artist: "Mauricio Herrera",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 45979,
    flavor: "She prefers calling it 'Psionic Tickling.'",
    id: "LOOT_353",
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Copy a spell in your opponent's deck and add it to your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "76989.png",
    tile: "LOOT_353.png"
  },
  {
    name: "Marin the Fox",
    artist: "Zoltan Boros",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 45988,
    elite: true,
    flavor: "My name is Marin the Fox. You took my treasure. Prepare to die.",
    health: 6,
    howToEarn: "Unlocked by opening a Kobolds & Catacombs pack.",
    howToEarnGolden: "Unlocked with the BlizzCon 2017 virtual ticket.",
    id: "LOOT_357",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 2,
    text:
      "Battlecry: Summon a 0/8 Treasure Chest for your opponent. <i>(Break it for awesome loot!)</i>",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "636468816086287167.png",
    tile: "LOOT_357.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "b06a899e-a37b-4f65-b89d-87ab19916c39",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "swap.*attack.*health"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grumble, Worldshaker",
    artist: "Hideaki Takamura",
    attack: 7,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 45995,
    elite: true,
    flavor:
      "The grumbling grew to a mighty rumbling, and out of the caverns the kobolds came tumbling.",
    health: 7,
    id: "LOOT_358",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 11,
    rating: 3,
    text: "Battlecry: Return your other minions to your hand. They cost (1).",
    type: "MINION",
    extra: ["VALUE", "TEMPO"],
    imageUrl: "76891.png",
    tile: "LOOT_358.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a1b95467-85f7-42f1-aa6c-ea1ff348d247",
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
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Grumble, Worldshaker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Drygulch Jailor",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 46007,
    flavor: "Hard time: 6-10 turns for candle-nappin'.",
    health: 1,
    id: "LOOT_363",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Deathrattle: Add 3 Silver Hand Recruits to your hand.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "73329.png",
    tile: "LOOT_363.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "61b9b7d9-a231-43c1-8b7b-27b6a7fbfe9e",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Knife Juggler"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Reckless Flurry",
    artist: "Arthur Gimaldinov",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 46026,
    flavor: "Look. Cautious Flurries will only get you so far in life.",
    id: "LOOT_364",
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Spend all your Armor. Deal that much damage to all minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "76945.png",
    tile: "LOOT_364.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "b877ddc1-c477-45d6-bd14-b732492e2e7e",
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
                minValue: "Reckless Flurry"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gemstudded Golem",
    artist: "Luca Zontini",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 46027,
    flavor: "Perfectly accessorized to attract adventurers.",
    health: 9,
    id: "LOOT_365",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Taunt Can only attack if you have 5 or more Armor.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77004.png",
    tile: "LOOT_365.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "145c5356-eaaf-4ecd-926e-17122859b9a5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Drywhisker Armorer",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 46031,
    flavor:
      "Kobolds use anything for armor: Pots, pans, garbage cans… even other kobolds.",
    health: 2,
    id: "LOOT_367",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Battlecry: For each enemy minion, gain 2 Armor.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "76944.png",
    tile: "LOOT_367.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5dc34ebf-d7df-4be3-8163-3e71f3122e24",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Voidlord",
    artist: "Jerry Mascho",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 9,
    dbfId: 46056,
    flavor: "Never let it hold your checkbook.",
    health: 9,
    id: "LOOT_368",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    race: "DEMON",
    rarity: "EPIC",
    set: 11,
    rating: 4,
    text: "Taunt  Deathrattle: Summon three 1/3 Demons with Taunt.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "76913.png",
    tile: "LOOT_368.png"
  },
  {
    name: "Gather Your Party",
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 46058,
    flavor:
      "Thrilling adventure! Danger guaranteed! Loot uncertain! Death optional!  Who’s with me?",
    id: "LOOT_370",
    rarity: "RARE",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "Recruit a minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "73320.png",
    tile: "LOOT_370.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8b372219-8432-4fac-b2f0-5be25cbc2fcf",
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
    name: "Healing Rain",
    artist: "Hideaki Takamura",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 46067,
    flavor: "It's filled with electrolytes!",
    id: "LOOT_373",
    mechanics: ["ImmuneToSpellpower"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Restore #12 Health randomly split among all friendly characters.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "77008.png",
    tile: "LOOT_373.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "07530be6-4134-4e0d-ba25-6ec919f1c37c",
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
    name: "Guild Recruiter",
    artist: "Arthur Bozonnet",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 46069,
    flavor: "The original telemarketer.",
    health: 4,
    id: "LOOT_375",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "Battlecry: Recruit a minion that costs (4) or less.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "73323.png",
    tile: "LOOT_375.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "544c64fe-6ad7-41b8-951b-d244280c1dfa",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 4 },
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
    name: "Woecleaver",
    artist: "Matthew O'Connor",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 46077,
    durability: 3,
    elite: true,
    flavor: "Turn that frown into TWO frowns!",
    id: "LOOT_380",
    rarity: "LEGENDARY",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 2,
    text: "After your hero attacks, Recruit a minion.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76975.png",
    tile: "LOOT_380.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f1308575-72ea-487a-a183-c83dc691ffc7",
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
    name: "Kobold Monk",
    artist: "Sam Nielsen",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46079,
    flavor: "There is no candle.",
    health: 6,
    id: "LOOT_382",
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "Your hero can't be targeted by spells or Hero Powers.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77011.png",
    tile: "LOOT_382.png"
  },
  {
    name: "Hungry Ettin",
    artist: "Dave Allsop",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 46082,
    flavor: "How can he be hungry… if he's Ettin!?",
    health: 10,
    id: "LOOT_383",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "Taunt Battlecry: Summon a random 2-Cost minion for your opponent.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "76917.png",
    tile: "LOOT_383.png"
  },
  {
    name: "Fungal Enchanter",
    artist: "Max Greck",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46087,
    flavor: "Qualifications: Born with pointy hat.",
    health: 3,
    id: "LOOT_388",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 11,
    rating: 2,
    text: "Battlecry: Restore 2 Health to all friendly characters.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "77003.png",
    tile: "LOOT_388.png"
  },
  {
    name: "Rummaging Kobold",
    artist: "Trent Kaniuga",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46088,
    flavor: "'Broken longsword is brand new shortsword.' - Kobold Proverb",
    health: 3,
    id: "LOOT_389",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Battlecry: Return one of your destroyed weapons to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76879.png",
    tile: "LOOT_389.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "4b881d6d-5371-40b3-81d3-df71305f34ef",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "WEAPON"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Twig of the World Tree",
    artist: "Alexey Aparin",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 46107,
    durability: 5,
    elite: true,
    flavor: "For druids who want to branch out.",
    id: "LOOT_392",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text: "Deathrattle: Gain 10 Mana Crystals.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76878.png",
    tile: "LOOT_392.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "aff193c7-d657-4b8f-9d9f-264b3450e447",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Medivh, the Guardian"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shrieking Shroom",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46118,
    flavor: "Auditioning for the next Fungal Idol.",
    health: 2,
    id: "LOOT_394",
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "At the end of your turn, summon a random 1-Cost minion.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "77018.png",
    tile: "LOOT_394.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ca5962f0-5d3e-4d0b-b64b-02359130f822",
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
    name: "Benevolent Djinn",
    artist: "Ware Lee",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 46258,
    flavor:
      "Wish #1: funnel cakes. Wish #2: funnel cakes. Wish #3: FUNNEL CAKES.",
    health: 4,
    id: "LOOT_398",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "At the end of your turn, restore 3 Health to your hero.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "76892.png",
    tile: "LOOT_398.png"
  },
  {
    name: "Duskbreaker",
    artist: "Alex Horley",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 45899,
    flavor: "Waking up at the break of dusk is just not as impressive.",
    health: 3,
    id: "LOOT_410",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_MINION_TARGET: 0 },
    race: "DRAGON",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text:
      "Battlecry: If you're holding a Dragon, deal 3 damage to all other minions.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "76868.png",
    tile: "LOOT_410.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "a3ed6fbb-08d4-444c-b695-b7f66ec2c495",
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
                minValue: "Duskbreaker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kobold Illusionist",
    artist: "Alex Horley",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 45936,
    faction: "ALLIANCE",
    flavor: "He can make ANYTHING look like a candle.",
    health: 3,
    id: "LOOT_412",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 11,
    rating: 1,
    text: "Deathrattle: Summon a 1/1 copy of a minion from your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "73331.png",
    tile: "LOOT_412.png"
  },
  {
    name: "Plated Beetle",
    artist: "Ian Ameling",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 45930,
    flavor:
      "'Ok, your party has defeated the beetle.' 'I put it on my head.' 'What?' 'I put it on my head. Like a hat.'",
    health: 3,
    id: "LOOT_413",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 11,
    rating: 3,
    text: "Deathrattle: Gain 3 Armor.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "76995.png",
    tile: "LOOT_413.png"
  },
  {
    name: "Grand Archivist",
    artist: "Ursula Dorada",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 46032,
    flavor: "Qualifications: Found pointy hat.",
    health: 7,
    id: "LOOT_414",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text:
      "At the end of your turn, cast a spell from your deck <i>(targets chosen randomly)</i>.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76909.png",
    tile: "LOOT_414.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "502ad8cd-7a95-4edb-85c3-c9925699f9cb",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 5
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "68617c2a-66ec-40a9-b8e6-530413d6a14e",
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
    name: "Rin, the First Disciple",
    artist: "A.J. Nazzaro",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 46040,
    elite: true,
    flavor: "Signed and sealed, she delivers oblivion.",
    health: 6,
    id: "LOOT_415",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 4,
    text: "Taunt Deathrattle: Add 'The First Seal' to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "73326.png",
    tile: "LOOT_415.png"
  },
  {
    name: "Cataclysm",
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 46286,
    flavor: "RUN FROM SKY CANDLES! THEY BURN! RUN!",
    id: "LOOT_417",
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text: "Destroy all minions. Discard your hand.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "76918.png",
    tile: "LOOT_417.png"
  },
  {
    name: "Skull of the Man'ari",
    artist: "Matthew O'Connor",
    attack: 0,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 46299,
    durability: 3,
    elite: true,
    flavor: "Don't trust the skull.",
    id: "LOOT_420",
    mechanics: ["InvisibleDeathrattle"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text: "At the start of your turn, summon a Demon from your hand.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76930.png",
    tile: "LOOT_420.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "d6e07e12-c2a5-4a21-93dd-ca51d0a66273",
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
    name: "Val'anyr",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 46263,
    durability: 2,
    elite: true,
    flavor:
      "Recently unearthed in one of the deepest kobold caves. Traded for a large candle.",
    id: "LOOT_500",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 3,
    text:
      "Deathrattle: Give a minion in your hand +4/+2. When it dies, reequip this.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76949.png",
    tile: "LOOT_500.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "887911a1-e62d-4d76-81a5-d04e059ade2f",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Doppelgangster"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "864add55-433f-4274-9021-0231b47c448c",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Saronite Chain Gang"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lesser Onyx Spellstone",
    artist: "Arthur Bozonnet",
    cardClass: ["ROGUE"],
    collectible: true,
    collectionText:
      "Destroy 1 random enemy minion. <i>(Play 3 Deathrattle cards to upgrade.)</i>",
    cost: 5,
    dbfId: 46296,
    flavor:
      "The trolls of old embraced the gift A jewel of black for daggers swift No party lasts who finds the stone Those wielding it soon stand alone.",
    id: "LOOT_503",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 1 },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 11,
    rating: 1,
    text:
      "Destroy 1 random enemy minion. @<i>(Play 3 Deathrattle cards to upgrade.)</i>",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "76953.png",
    tile: "LOOT_503.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "65ba839f-79a2-48a1-a60b-4e61c4122b92",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "deathrattle"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Unstable Evolution",
    artist: "Tooth",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 46303,
    flavor: "They grow up so fast.",
    id: "LOOT_504",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    set: 11,
    rating: 3,
    text:
      "Transform a friendly minion into one that costs (1) more. Repeatable this turn.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "76931.png",
    tile: "LOOT_504.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "db2fd45f-dd72-4c0a-aad7-8c7667da72f7",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "cast.*spell"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "opponent"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "The Runespear",
    artist: "Jakub Kasper",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 8,
    dbfId: 46305,
    durability: 3,
    elite: true,
    flavor:
      "When asked what the runes do, the tauren smith smiled: 'A little of this, a little of that...'",
    id: "LOOT_506",
    rarity: "LEGENDARY",
    set: 11,
    rating: 2,
    text:
      "After your hero attacks, Discover a spell and cast it with random targets.",
    type: "WEAPON",
    extra: ["VALUE"],
    imageUrl: "76869.png",
    tile: "LOOT_506.png"
  },
  {
    name: "Lesser Diamond Spellstone",
    artist: "Tyler West Studios",
    cardClass: ["PRIEST"],
    collectible: true,
    collectionText:
      "Resurrect 2 different friendly minions. <i>(Cast 4 spells to upgrade.)</i>",
    cost: 7,
    dbfId: 46307,
    flavor:
      "A diamond, white, this stone the eighth A precious jewel for those of faith A whispered prayer restores the lost But none among them know the cost.",
    id: "LOOT_507",
    rarity: "RARE",
    set: 11,
    rating: 1,
    text:
      "Resurrect 2 different friendly minions. @<i>(Cast 4 spells to upgrade.)</i>",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "76954.png",
    tile: "LOOT_507.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "6905d5df-ba47-4cf5-a333-e8e1e726e5ae",
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
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kathrena Winterwisp",
    artist: "Garrett Hanna",
    attack: 6,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 8,
    dbfId: 46390,
    elite: true,
    flavor:
      "She’s not one of those treehugger elves – but she does like the occasional cuddle.",
    health: 6,
    id: "LOOT_511",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "LEGENDARY",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 3,
    text: "Battlecry and Deathrattle: Recruit a Beast.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "76873.png",
    tile: "LOOT_511.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ee384c0e-6634-4774-b259-09042e29efb2",
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
    name: "Zola the Gorgon",
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46403,
    elite: true,
    flavor: "Her name seems a bit cheesy.",
    health: 2,
    id: "LOOT_516",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "LEGENDARY",
    set: 11,
    rating: 2,
    text:
      "Battlecry: Choose a friendly minion. Add a Golden copy of it to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76880.png",
    tile: "LOOT_516.png"
  },
  {
    name: "Murmuring Elemental",
    artist: "Hideaki Takamura",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 46432,
    flavor: "Déjà Dude.",
    health: 1,
    id: "LOOT_517",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 11,
    rating: 2,
    text: "Battlecry: Your next Battlecry this turn triggers twice.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76971.png",
    tile: "LOOT_517.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "acf5440e-b2ef-4de8-a761-280a9927aeb2",
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
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Murmuring Elemental"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Spellbreaker"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Medivh, the Guardian"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Windshear Stormcaller",
    artist: "Arthur Gimaldinov",
    attack: 5,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 46440,
    flavor: "Don't ever doubt Al'Akir's love for basic totems.",
    health: 5,
    id: "LOOT_518",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text:
      "Battlecry: If you control all 4 basic Totems, summon Al'Akir the Windlord.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "76921.png",
    tile: "LOOT_518.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "22e74c99-2d74-406c-8a1d-4923b2adde19",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Primal Talismans"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Geosculptor Yip",
    artist: "Mike Azevedo",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 46442,
    elite: true,
    flavor: "Once crafted a gauntlet out of earwax and pure ambition.",
    health: 8,
    id: "LOOT_519",
    rarity: "LEGENDARY",
    set: 11,
    rating: 4,
    text:
      "At the end of your turn, summon a random minion with Cost equal to your Armor <i>(up to 10)</i>.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "76929.png",
    tile: "LOOT_519.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "21013091-f346-49df-8ced-fc470b209dfd",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "armor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Seeping Oozeling",
    artist: "Anton Kagoukin",
    attack: 5,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 46445,
    flavor: "Uh, you might want to get that looked at.",
    health: 4,
    id: "LOOT_520",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 11,
    rating: 1,
    text: "Battlecry: Gain the Deathrattle of a random minion in your deck.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76882.png",
    tile: "LOOT_520.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "48cd4a78-f7cf-43fb-b45b-7f08496751a9",
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
    name: "Master Oakheart",
    artist: "Max Greck",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 46449,
    elite: true,
    flavor:
      "His adventuring party consists of Goldshire Footman, Frostwolf Grunt and Hadronox.",
    health: 5,
    id: "LOOT_521",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "Battlecry: Recruit a 1, 2, and 3-Attack minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76983.png",
    tile: "LOOT_521.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "e164f38a-6977-4a81-95f1-2a4d595fe159",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "attack", operation: "EQUALS", minValue: 1 }
            ]
          },
          {
            minCards: 2,
            maxCards: 3,
            id: "4d6f883a-8a33-4ad6-a83d-09d78b3d7dcc",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "attack", operation: "EQUALS", minValue: 2 }
            ]
          },
          {
            minCards: 2,
            maxCards: 3,
            id: "7fda29e8-8a0b-4077-b591-5ea8ac56aa06",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "attack", operation: "EQUALS", minValue: 3 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Crushing Walls",
    artist: "Trent Kaniuga",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 46450,
    flavor: "'It could be worse!' 'It's worse.'",
    id: "LOOT_522",
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Destroy your opponent's left and right-most minions.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "73319.png",
    tile: "LOOT_522.png"
  },
  {
    name: "The Darkness",
    artist: "L. Lullabi & K. Turovec",
    attack: 20,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46454,
    elite: true,
    flavor:
      "I would rather light a single candle than curse the darkness. But I'm willing to do both.",
    health: 20,
    id: "LOOT_526",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text:
      "Starts dormant. Battlecry: Shuffle 3 Candles into the enemy deck. When drawn, this awakens.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76986.png",
    tile: "LOOT_526.png"
  },
  {
    name: "Twilight Acolyte",
    artist: "Tooth",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 46460,
    flavor: "The dragons mostly keep him around as a snack.",
    health: 4,
    id: "LOOT_528",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0
    },
    rarity: "EPIC",
    set: 11,
    rating: 1,
    text:
      "Battlecry: If you're holding a Dragon, swap this minion's Attack with another minion's.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76974.png",
    tile: "LOOT_528.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "b1cbcd87-4491-47d4-b8ac-357ae4c13647",
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
    name: "Void Ripper",
    artist: "Slawomir Maniak",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46461,
    flavor:
      "You had to put the portable hole inside the bag of holding, didn't you?!",
    health: 3,
    id: "LOOT_529",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text: "Battlecry: Swap the Attack and Health of all other minions.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76973.png",
    tile: "LOOT_529.png"
  },
  {
    name: "Gilded Gargoyle",
    artist: "Erik Gist",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 46495,
    flavor:
      "You hear a coin rattling inside the slotted gargoyle...What could it mean?",
    health: 2,
    id: "LOOT_534",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 11,
    rating: 1,
    text: "Deathrattle: Add a Coin to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "77005.png",
    tile: "LOOT_534.png"
  },
  {
    name: "Dragoncaller Alanna",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 9,
    dbfId: 46499,
    elite: true,
    flavor:
      "Her secret is using a gentle voice and carrying a baggie of hotdogs.",
    health: 3,
    id: "LOOT_535",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text:
      "Battlecry: Summon a 5/5 Dragon for each spell you cast this game that costs (5) or more.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "76960.png",
    tile: "LOOT_535.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "1bef34f2-a10b-4ae2-af40-9dafe252644f",
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
    name: "Leyline Manipulator",
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 46541,
    flavor: "The shortest distance between two points is a leyline.",
    health: 5,
    id: "LOOT_537",
    mechanics: ["BATTLECRY"],
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 11,
    rating: 3,
    text:
      "Battlecry: If you're holding any cards that didn't start in your deck, reduce their Cost by (2).",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "76932.png",
    tile: "LOOT_537.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d2761591-8c23-45e3-9d11-b2da89d2f4f2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "add.*random.*spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Temporus",
    artist: "Daren Bader",
    attack: 6,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 46544,
    elite: true,
    flavor:
      "Follows adventurers, seeking the ultimate time magic: the ability to reload.",
    health: 6,
    id: "LOOT_538",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text: "Battlecry: Your opponent takes two turns. Then you take two turns.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "76893.png",
    tile: "LOOT_538.png"
  },
  {
    name: "Spiteful Summoner",
    artist: "Peter Stapleton",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46551,
    flavor: "Sometimes she'll summon a Doomsayer. Out of spite.",
    health: 4,
    id: "LOOT_539",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 11,
    rating: 2,
    text:
      "Battlecry: Reveal a spell from your deck. Summon  a random minion with the same Cost.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76881.png",
    tile: "LOOT_539.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "861715f9-09b4-42c1-a3b8-ea2b37af093a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 5
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "674cf0f2-988e-4c15-9c26-ba36fdc6d1fc",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Grand Archivist"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dragonhatcher",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 46557,
    flavor: "Which came first?  The dragon or the dragonhatcher?",
    health: 4,
    id: "LOOT_540",
    rarity: "EPIC",
    referencedTags: ["RECRUIT"],
    set: 11,
    rating: 1,
    text: "At the end of your turn, Recruit a Dragon.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76964.png",
    tile: "LOOT_540.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0940b190-53dc-49d4-ad7e-646d8148e64d",
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
    name: "King Togwaggle",
    artist: "Konstantin Turovec",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 46589,
    elite: true,
    flavor:
      "Management of the Kobold Empire requires a careful balance between a lack of social services and fiscal irresponsibility.",
    health: 5,
    id: "LOOT_541",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 1,
    text:
      "Battlecry: Swap decks with your opponent. Give them a Ransom spell to swap back.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "76895.png",
    tile: "LOOT_541.png"
  },
  {
    name: "Kingsbane",
    artist: "Evgeniy Dlinnov",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 47035,
    durability: 3,
    elite: true,
    flavor: "But it has a soft spot for emperors.",
    health: 3,
    id: "LOOT_542",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 11,
    rating: 2,
    text:
      "Deathrattle: Shuffle this into your deck. It keeps any enchantments.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "76967.png",
    tile: "LOOT_542.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "40992419-8a60-44dd-a7d7-9bb7ce29f188",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Cavern Shinyfinder"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "8aa8d51d-6474-4553-90d1-cf7d9b9b0da3",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give.*weapon"
              }
            ]
          }
        ]
      }
    ]
  }
];
