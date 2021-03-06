export const classic = [
  {
    name: "Fen Creeper",
    artist: "Monica Langlois",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 602,
    faction: "ALLIANCE",
    flavor:
      "He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!",
    health: 6,
    id: "CS1_069",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "476.png",
    tile: "CS1_069.png"
  },
  {
    name: "Inner Fire",
    artist: "Steve Prescott",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 376,
    flavor:
      "Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.",
    id: "CS1_129",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Change a minion's Attack to be equal to its Health.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "207.png",
    tile: "CS1_129.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "2d951f8f-1d01-408d-8feb-82d085b63bd9",
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
    name: "Blizzard",
    artist: "Chris Seaman",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 457,
    flavor: "This spell can be very Entertaining.",
    id: "CS2_028",
    mechanics: ["FREEZE"],
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Deal $2 damage to all enemy minions and Freeze them.",
    type: "SPELL",
    extra: ["AOE", "STALL"],
    imageUrl: "276.png",
    tile: "CS2_028.png"
  },
  {
    name: "Ancestral Spirit",
    artist: "Zoltan & Gabor",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 404,
    flavor: "It was just a flesh wound.",
    id: "CS2_038",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 98,
    rating: 2,
    text: "Give a minion 'Deathrattle: Resummon this minion.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "526.png",
    tile: "CS2_038.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "15f36b59-8a17-4dee-b9c2-f912964479fa",
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
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Far Sight",
    artist: "Lars Grant-West",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 818,
    flavor:
      "Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.",
    id: "CS2_053",
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Draw a card. That card costs (3) less.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "107.png",
    tile: "CS2_053.png"
  },
  {
    name: "Blood Imp",
    artist: "Bernie Kang",
    attack: 0,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 469,
    flavor: "Imps are content to hide and viciously taunt everyone nearby.",
    health: 1,
    id: "CS2_059",
    mechanics: ["STEALTH"],
    race: "DEMON",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "  Stealth. At the end of your   turn, give another random  friendly minion +1 Health.",
    type: "MINION",
    extra: ["BUFF", "FAST"],
    imageUrl: "196.png",
    tile: "CS2_059.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "70648f08-f014-483b-9f69-86f0f75b432c",
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
                property: "extra",
                operation: "INCLUDES",
                minValue: "FAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Blood Imp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Cold Blood",
    artist: "Alex Horley Orlandelli",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 268,
    flavor: "'I'm cold blooded, check it and see!'",
    id: "CS2_073",
    mechanics: ["COMBO"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Give a minion +2 Attack. Combo: +4 Attack instead.",
    type: "SPELL",
    extra: ["BUFF", "DAMAGE", "FAST"],
    imageUrl: "92.png",
    tile: "CS2_073.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "268f17ee-79d3-4743-81bf-93225658f7ac",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "charge"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Rampage",
    artist: "Jonboy Meyers",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 1108,
    flavor: "Minion get ANGRY.   Minion SMASH!",
    id: "CS2_104",
    playRequirements: {
      REQ_DAMAGED_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Give a damaged minion +3/+3.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "454.png",
    tile: "CS2_104.png"
  },
  {
    name: "Earthen Ring Farseer",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1651,
    flavor:
      "He can see really far, and he doesn't use a telescope like those filthy pirates.",
    health: 3,
    id: "CS2_117",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 3,
    targetingArrowText: "Restore 3 Health.",
    text: "Battlecry: Restore 3 Health.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "557.png",
    tile: "CS2_117.png"
  },
  {
    name: "Southsea Deckhand",
    artist: "Dan Brereton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 724,
    faction: "ALLIANCE",
    flavor: "Pirates are into this new fad called 'Planking'.",
    health: 1,
    id: "CS2_146",
    race: "PIRATE",
    rarity: "COMMON",
    referencedTags: ["CHARGE"],
    set: 98,
    rating: 3,
    text: "Has Charge while you have a weapon equipped.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "103.png",
    tile: "CS2_146.png"
  },
  {
    name: "Silver Hand Knight",
    artist: "Matt Starbuck",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 69,
    faction: "ALLIANCE",
    flavor: "It's good to be a knight.   Less so to be one's squire.",
    health: 4,
    id: "CS2_151",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Battlecry: Summon a 2/2 Squire.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "648.png",
    tile: "CS2_151.png"
  },
  {
    name: "Ravenholdt Assassin",
    artist: "Ralph Horsley",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 134,
    faction: "ALLIANCE",
    flavor:
      "Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.",
    health: 5,
    id: "CS2_161",
    mechanics: ["STEALTH"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Stealth",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "518.png",
    tile: "CS2_161.png"
  },
  {
    name: "Young Dragonhawk",
    artist: "Greg Hildebrandt",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 641,
    faction: "HORDE",
    flavor:
      "They were the inspiration for the championship Taurenball team: The Dragonhawks.",
    health: 1,
    id: "CS2_169",
    mechanics: ["WINDFURY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "629.png",
    tile: "CS2_169.png"
  },
  {
    name: "Injured Blademaster",
    artist: "Samwise",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1109,
    faction: "HORDE",
    flavor:
      "He claims it is an old war wound, but we think he just cut himself shaving.",
    health: 7,
    id: "CS2_181",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Battlecry: Deal 4 damage to HIMSELF.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "209.png",
    tile: "CS2_181.png"
  },
  {
    name: "Abusive Sergeant",
    artist: "Luca Zontini",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 242,
    faction: "ALLIANCE",
    flavor: "ADD ME TO YOUR DECK, MAGGOT!",
    health: 1,
    id: "CS2_188",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    targetingArrowText: "Grant +2 Attack.",
    text: "Battlecry: Give a minion +2 Attack this turn.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "577.png",
    tile: "CS2_188.png"
  },
  {
    name: "Ironbeak Owl",
    artist: "Trevor Jacobs",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 290,
    faction: "HORDE",
    flavor:
      "Their wings are silent but their screech is... whatever the opposite of silent is.",
    health: 1,
    id: "CS2_203",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "BEAST",
    rarity: "COMMON",
    referencedTags: ["SILENCE"],
    set: 98,
    rating: 2,
    targetingArrowText: "Silence a minion.",
    text: "Battlecry: Silence a minion.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "500.png",
    tile: "CS2_203.png"
  },
  {
    name: "Spiteful Smith",
    artist: "Justin Sweet",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 61,
    faction: "HORDE",
    flavor:
      "She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.",
    health: 6,
    id: "CS2_221",
    mechanics: ["ENRAGED"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Enrage: Your weapon has +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "627.png",
    tile: "CS2_221.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "093bbd68-96a0-4877-88ba-150c1121a100",
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
    name: "Venture Co. Mercenary",
    artist: "John Polidora",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1122,
    faction: "HORDE",
    flavor: "No Job is too big.  No fee is too big.",
    health: 6,
    id: "CS2_227",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Your minions cost (3) more.",
    type: "MINION",
    race: " ",
    extra: ["FAST", "TEMPO"],
    imageUrl: "509.png",
    tile: "CS2_227.png"
  },
  {
    name: "Wisp",
    artist: "Malcolm Davis",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 0,
    dbfId: 179,
    flavor:
      "If you hit an Eredar Lord with enough Wisps, it will explode.   But why?",
    health: 1,
    id: "CS2_231",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "273.png",
    tile: "CS2_231.png"
  },
  {
    name: "Blade Flurry",
    artist: "Hideaki Takamura",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 1064,
    flavor:
      "'Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.' - Shan, Rogue Trainer",
    id: "CS2_233",
    playRequirements: { REQ_WEAPON_EQUIPPED: 0 },
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Destroy your weapon and deal its damage to all enemy minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "244.png",
    tile: "CS2_233.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ce0a20c0-bfc5-4b21-9171-ccf8cebe318a",
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
  },
  {
    name: "Gladiator's Longbow",
    artist: "Peter C. Lee",
    attack: 5,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 311,
    durability: 2,
    flavor:
      "The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.",
    id: "DS1_188",
    rarity: "EPIC",
    referencedTags: ["IMMUNE"],
    set: 98,
    rating: 1,
    text: "Your hero is Immune while attacking.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "278.png",
    tile: "DS1_188.png"
  },
  {
    name: "Lightwarden",
    artist: "Erik Ko",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1655,
    flavor: "She’s smaller than her sisters Mediumwarden and Heavywarden.",
    health: 2,
    id: "EX1_001",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Whenever a character is healed, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "436.png",
    tile: "EX1_001.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "ed41c38b-3437-43f4-8023-225d1b6e3f64",
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
    name: "The Black Knight",
    artist: "Alex Horley Orlandelli",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 1656,
    elite: true,
    flavor:
      "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.",
    health: 5,
    id: "EX1_002",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_MUST_TARGET_TAUNTER: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 2,
    targetingArrowText: "Destroy a minion with Taunt.",
    text: "Battlecry: Destroy an enemy minion with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "396.png",
    tile: "EX1_002.png"
  },
  {
    name: "Young Priestess",
    artist: "Vance Kovacs",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1634,
    flavor: "She can't wait to learn Power Word: Fortitude Rank 2.",
    health: 1,
    id: "EX1_004",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "At the end of your turn, give another random friendly minion +1 Health.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "123.png",
    tile: "EX1_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ca0dabd7-b9a4-43fe-a6fd-61620c801618",
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
                minValue: 4
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Young Priestess"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Big Game Hunter",
    artist: "Chris Seaman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1657,
    flavor:
      "Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.",
    health: 2,
    id: "EX1_005",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_MIN_ATTACK: 7
    },
    rarity: "EPIC",
    set: 98,
    rating: 1,
    targetingArrowText: "Destroy a minion with an Attack of 7 or more.",
    text: "Battlecry: Destroy a minion with 7 or more Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "73.png",
    tile: "EX1_005.png"
  },
  {
    name: "Alarm-o-Bot",
    artist: "Sean O’Daniels",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1658,
    flavor: "WARNING.  WARNING.  WARNING.",
    health: 3,
    id: "EX1_006",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text:
      "At the start of your turn, swap this minion with a    random one in your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "425.png",
    tile: "EX1_006.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cf48d93c-e2e7-4320-81ca-f290db349b15",
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
    name: "Acolyte of Pain",
    artist: "Dave Kendall",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1659,
    flavor:
      "He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.",
    health: 3,
    id: "EX1_007",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Whenever this minion takes damage, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "428.png",
    tile: "EX1_007.png"
  },
  {
    name: "Argent Squire",
    artist: "Zoltan & Gabor",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 757,
    faction: "ALLIANCE",
    flavor:
      "'I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.' - The Argent Dawn Oath",
    health: 1,
    id: "EX1_008",
    mechanics: ["DIVINE_SHIELD"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "473.png",
    tile: "EX1_008.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "1eccf421-6083-41b9-9291-2efc6c4979a1",
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
    name: "Angry Chicken",
    artist: "Mike Sass",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 1688,
    flavor:
      "There is no beast more frightening (or ridiculous) than a fully enraged chicken.",
    health: 1,
    id: "EX1_009",
    mechanics: ["ENRAGED"],
    race: "BEAST",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Enrage: +5 Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "57.png",
    tile: "EX1_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "7342c8cb-d69f-4779-9253-11bde5bdf6d1",
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
    name: "Worgen Infiltrator",
    artist: "Raymond Swanland",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 994,
    faction: "ALLIANCE",
    flavor:
      "If you want to stop a worgen from infiltrating, just yell, 'No! Bad boy!'",
    health: 1,
    id: "EX1_010",
    mechanics: ["STEALTH"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Stealth",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "112.png",
    tile: "EX1_010.png"
  },

  {
    name: "Bloodmage Thalnos",
    artist: "Alex Horley Orlandelli",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 749,
    elite: true,
    flavor: "He's in charge of the Annual Scarlet Monastery Blood Drive!",
    health: 1,
    id: "EX1_012",
    mechanics: ["DEATHRATTLE", "SPELLPOWER"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    spellDamage: 1,
    text: "Spell Damage +1 Deathrattle: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "525.png",
    tile: "EX1_012.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9993977d-1b49-4222-ac28-1095857db0eb",
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
    name: "King Mukla",
    artist: "Sunny Gho",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1693,
    elite: true,
    flavor: "King Mukla wanders Jaguero Isle, searching for love.",
    health: 5,
    id: "EX1_014",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 98,
    rating: 2,
    text: "Battlecry: Give your opponent 2 Bananas.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "373.png",
    tile: "EX1_014.png"
  },
  {
    name: "Jungle Panther",
    artist: "Jaemin Kim",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 921,
    faction: "HORDE",
    flavor:
      "Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.",
    health: 2,
    id: "EX1_017",
    mechanics: ["STEALTH"],
    race: "BEAST",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Stealth",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "392.png",
    tile: "EX1_017.png"
  },

  {
    name: "Scarlet Crusader",
    artist: "Gonzalo Ordonez",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 642,
    faction: "ALLIANCE",
    flavor: "Never wash your whites with a Scarlet Crusader.",
    health: 1,
    id: "EX1_020",
    mechanics: ["DIVINE_SHIELD"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "475.png",
    tile: "EX1_020.png"
  },
  {
    name: "Thrallmar Farseer",
    artist: "Efrem Palacios",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 765,
    faction: "HORDE",
    flavor:
      "He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.",
    health: 3,
    id: "EX1_021",
    mechanics: ["WINDFURY"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "265.png",
    tile: "EX1_021.png"
  },
  {
    name: "Silvermoon Guardian",
    artist: "Phroilan Gardner",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 34,
    faction: "HORDE",
    flavor:
      "The first time they tried to guard Silvermoon against the scourge, it didn’t go so well…",
    health: 3,
    id: "EX1_023",
    mechanics: ["DIVINE_SHIELD"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "634.png",
    tile: "EX1_023.png"
  },

  {
    name: "Stranglethorn Tiger",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 68,
    faction: "ALLIANCE",
    flavor: "The wonderful thing about tigers is tigers are wonderful things!",
    health: 5,
    id: "EX1_028",
    mechanics: ["STEALTH"],
    race: "BEAST",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Stealth",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "338.png",
    tile: "EX1_028.png"
  },
  {
    name: "Leper Gnome",
    artist: "Glenn Rane",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 658,
    flavor:
      "He really just wants to be your friend, but the constant rejection is starting to really get to him.",
    health: 1,
    id: "EX1_029",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Deathrattle: Deal 2 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "513.png",
    tile: "EX1_029.png"
  },
  {
    name: "Sunwalker",
    artist: "Andrea Uderzo",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 759,
    faction: "ALLIANCE",
    flavor:
      "She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!",
    health: 5,
    id: "EX1_032",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Taunt Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "221.png",
    tile: "EX1_032.png"
  },
  {
    name: "Windfury Harpy",
    artist: "Luke Mancini",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 567,
    faction: "ALLIANCE",
    flavor:
      "Harpies are not pleasant sounding.  That's the nicest I can put it.",
    health: 5,
    id: "EX1_033",
    mechanics: ["WINDFURY"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "675.png",
    tile: "EX1_033.png"
  },
  {
    name: "Twilight Drake",
    artist: "Jaemin Kim",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 1037,
    flavor: "Twilight drakes feed on Mystical Energy.  And Tacos.",
    health: 1,
    id: "EX1_043",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Battlecry: Gain +1 Health for each card in your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "360.png",
    tile: "EX1_043.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "0bd6b604-8540-4e08-943e-854312f5a64c",
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
    name: "Questing Adventurer",
    artist: "Attila Adorjany",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 791,
    faction: "ALLIANCE",
    flavor: "'Does anyone have some extra Boar Pelts?'",
    health: 2,
    id: "EX1_044",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Whenever you play a card, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "157.png",
    tile: "EX1_044.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f6f86a8d-831d-4b88-a499-191ad22faac2",
            filters: [
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Ancient Watcher",
    artist: "Richard Wright",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 605,
    faction: "ALLIANCE",
    flavor: "Why do its eyes seem to follow you as you walk by?",
    health: 5,
    id: "EX1_045",
    mechanics: ["CANT_ATTACK"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Can't attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "153.png",
    tile: "EX1_045.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "5bbe997c-c965-41c2-a68c-c0056b10724c",
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
    name: "Dark Iron Dwarf",
    artist: "Scott Hampton",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 348,
    faction: "ALLIANCE",
    flavor:
      "Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.",
    health: 4,
    id: "EX1_046",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    targetingArrowText: "Give +2 Attack.",
    text: "Battlecry: Give a minion +2 Attack this turn.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "128.png",
    tile: "EX1_046.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "126dc184-71b2-4f87-9ffc-d02d2ba81cfe",
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
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spellbreaker",
    artist: "Matt Cavotta",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 754,
    faction: "HORDE",
    flavor:
      "Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.",
    health: 3,
    id: "EX1_048",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["SILENCE"],
    set: 98,
    rating: 4,
    targetingArrowText: "Silence a minion.",
    text: "Battlecry: Silence a minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "42.png",
    tile: "EX1_048.png"
  },
  {
    name: "Youthful Brewmaster",
    artist: "Wei Wang",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 415,
    faction: "ALLIANCE",
    flavor:
      "His youthful enthusiasm doesn’t always equal excellence in his brews.   Don’t drink the Mogu Stout!",
    health: 2,
    id: "EX1_049",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    targetingArrowText: "Return a minion to your hand.",
    text:
      "Battlecry: Return a friendly minion from the battlefield to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "247.png",
    tile: "EX1_049.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e6d94bfa-27a0-419d-b266-d5edc3f6558c",
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
                minValue: "Youthful Brewmaster"
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
    name: "Mana Addict",
    artist: "Hideaki Takamura",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 12,
    faction: "ALLIANCE",
    flavor:
      "She’s trying to kick the habit, but still takes some mana whenever she has a stressful day.",
    health: 3,
    id: "EX1_055",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Whenever you cast a spell, gain +2 Attack this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "67.png",
    tile: "EX1_055.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "eecc4de7-7dd7-40eb-8021-c8bba078d034",
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
    name: "Ancient Brewmaster",
    artist: "Bernie Kang",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 186,
    faction: "ALLIANCE",
    flavor:
      "Most pandaren say his brew tastes like yak.  But apparently that's a compliment.",
    health: 4,
    id: "EX1_057",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    targetingArrowText: "Return a minion to your hand.",
    text:
      "Battlecry: Return a friendly minion from the battlefield to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "572.png",
    tile: "EX1_057.png"
  },
  {
    name: "Sunfury Protector",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 891,
    faction: "ALLIANCE",
    flavor:
      "She carries a shield, but only so she can give it to someone she can stand behind.",
    health: 3,
    id: "EX1_058",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 3,
    text: "Battlecry: Give adjacent minions Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "372.png",
    tile: "EX1_058.png"
  },
  {
    name: "Crazed Alchemist",
    artist: "Tom Fleming",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 801,
    flavor:
      "'You'll <i>love</i> my new recipe!' he says... especially if you're not happy with your current number of limbs.",
    health: 2,
    id: "EX1_059",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 98,
    rating: 2,
    targetingArrowText: "Swap Attack and Health of a minion.",
    text: "Battlecry: Swap the Attack and Health of a minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "612.png",
    tile: "EX1_059.png"
  },
  {
    name: "Argent Commander",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 281,
    flavor:
      "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.",
    health: 2,
    id: "EX1_067",
    mechanics: ["CHARGE", "DIVINE_SHIELD"],
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Charge Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "463.png",
    tile: "EX1_067.png"
  },
  {
    name: "Pint-Sized Summoner",
    artist: "Ron Spears",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 37,
    faction: "ALLIANCE",
    flavor: "She's quite jealous of the Gallon-Sized Summoner.",
    health: 2,
    id: "EX1_076",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "The first minion you play each turn costs (1) less.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "54.png",
    tile: "EX1_076.png"
  },
  {
    name: "Secretkeeper",
    artist: "Gonzalo Ordonez",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 158,
    faction: "ALLIANCE",
    flavor:
      "She promises not to tell anyone about that thing you did last night with that one person.",
    health: 2,
    id: "EX1_080",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 98,
    rating: 2,
    text: "Whenever a Secret is played, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "483.png",
    tile: "EX1_080.png"
  },
  {
    name: "Mad Bomber",
    artist: "Mike Sass",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 762,
    faction: "ALLIANCE",
    flavor:
      "He's not really all that crazy, he is just not as careful with explosives as he should be.",
    health: 2,
    id: "EX1_082",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "Battlecry: Deal 3 damage randomly split between all other characters.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "80.png",
    tile: "EX1_082.png"
  },
  {
    name: "Tinkmaster Overspark",
    artist: "Tom Baxa",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 570,
    elite: true,
    faction: "ALLIANCE",
    flavor:
      "Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.",
    health: 3,
    id: "EX1_083",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 2,
    targetingArrowText: "Transform a minion into a 5/5 or a 1/1 at random.",
    text:
      "Battlecry: Transform another random minion into a 5/5 Devilsaur  or a 1/1 Squirrel.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "245.png",
    tile: "EX1_083.png"
  },

  {
    name: "Mind Control Tech",
    artist: "Leo Che",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 734,
    faction: "ALLIANCE",
    flavor:
      "Mind Control technology is getting better, but that's not saying much.",
    health: 3,
    id: "EX1_085",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 98,
    rating: 3,
    text:
      "Battlecry: If your opponent has 4 or more minions, take  control of one at random.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "368.png",
    tile: "EX1_085.png"
  },
  {
    name: "Arcane Golem",
    artist: "Sedhayu Ardian",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 466,
    flavor:
      "Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.",
    health: 4,
    id: "EX1_089",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Battlecry: Give your opponent a Mana Crystal.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "97.png",
    tile: "EX1_089.png"
  },
  {
    name: "Cabal Shadow Priest",
    artist: "Chippy",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 272,
    flavor: "You never know who may be secretly working for the Cabal....",
    health: 5,
    id: "EX1_091",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_MAX_ATTACK: 2
    },
    rarity: "EPIC",
    set: 98,
    rating: 3,
    targetingArrowText: "Steal a minion that has 2 or less Attack.",
    text:
      "Battlecry: Take control of an enemy minion that has 2 or less Attack.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "147.png",
    tile: "EX1_091.png"
  },
  {
    name: "Defender of Argus",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 763,
    faction: "ALLIANCE",
    flavor:
      "You wouldn’t think that Argus would need this much defending.  But it does.",
    health: 3,
    id: "EX1_093",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 3,
    text: "Battlecry: Give adjacent minions +1/+1 and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "542.png",
    tile: "EX1_093.png"
  },
  {
    name: "Gadgetzan Auctioneer",
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 932,
    flavor:
      "He used to run the black market auction house, but there was just too much violence and he had to move.",
    health: 4,
    id: "EX1_095",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Whenever you cast a spell, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "131.png",
    tile: "EX1_095.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "492c7da0-542d-4fd1-97db-8674841d2078",
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
    name: "Loot Hoarder",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 251,
    flavor: "Always roll need.",
    health: 1,
    id: "EX1_096",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Deathrattle: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "395.png",
    tile: "EX1_096.png"
  },
  {
    name: "Abomination",
    artist: "Alex Horley Orlandelli",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 440,
    flavor: "Abominations enjoy Fresh Meat and long walks on the beach.",
    health: 4,
    id: "EX1_097",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Taunt. Deathrattle: Deal 2 damage to ALL characters.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "597.png",
    tile: "EX1_097.png"
  },
  {
    name: "Lorewalker Cho",
    artist: "Mark Zug",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1135,
    elite: true,
    flavor:
      "Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.",
    health: 4,
    id: "EX1_100",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text:
      "Whenever a player casts a spell, put a copy into the other player’s hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "456.png",
    tile: "EX1_100.png"
  },
  {
    name: "Demolisher",
    artist: "Raymond Swanland",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 979,
    flavor:
      "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.",
    health: 4,
    id: "EX1_102",
    race: "MECHANICAL",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "At the start of your turn, deal 2 damage to a random enemy.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "212.png",
    tile: "EX1_102.png"
  },
  {
    name: "Coldlight Seer",
    artist: "Arthur Gimaldinov",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 453,
    flavor:
      "The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.",
    health: 3,
    id: "EX1_103",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Battlecry: Give your other Murlocs +2 Health.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "424.png",
    tile: "EX1_103.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "148c219b-7430-4020-8601-aa7450cfc134",
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
    name: "Mountain Giant",
    artist: "Samwise",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 12,
    dbfId: 993,
    flavor: "His mother said that he was just big boned.",
    health: 8,
    id: "EX1_105",
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text: "Costs (1) less for each other card in your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "264.png",
    tile: "EX1_105.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "2d4e76d9-7b27-4e60-9901-622dcba8e24a",
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
    name: "Cairne Bloodhoof",
    artist: "Wayne Reynolds",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 420,
    elite: true,
    faction: "ALLIANCE",
    flavor:
      "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.",
    health: 5,
    id: "EX1_110",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 4,
    text: "Deathrattle: Summon a 4/5 Baine Bloodhoof.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "498.png",
    tile: "EX1_110.png"
  },
  {
    name: "Leeroy Jenkins",
    artist: "Gabe from Penny Arcade",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 559,
    elite: true,
    faction: "ALLIANCE",
    flavor: "At least he has Angry Chicken.",
    health: 2,
    id: "EX1_116",
    mechanics: ["BATTLECRY", "CHARGE"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "Charge. Battlecry: Summon two 1/1 Whelps for your opponent.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "674.png",
    tile: "EX1_116.png"
  },
  {
    name: "Eviscerate",
    artist: "Ariel Olivetti",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 904,
    flavor:
      "There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.",
    id: "EX1_124",
    mechanics: ["COMBO"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Deal $2 damage. Combo: Deal $4 damage instead.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL", "TEMPO"],
    imageUrl: "382.png",
    tile: "EX1_124.png"
  },
  {
    name: "Betrayal",
    artist: "Lucas Graciano",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 282,
    flavor:
      "Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.",
    id: "EX1_126",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Force an enemy minion to deal its damage to the minions next to it.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HARD_REMOVAL"],
    imageUrl: "198.png",
    tile: "EX1_126.png"
  },
  {
    name: "Noble Sacrifice",
    artist: "Zoltan & Gabor",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 584,
    flavor: "We will always remember you, 'Defender!'",
    id: "EX1_130",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "Secret: When an enemy attacks, summon a 2/1 Defender as the new target.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "158.png",
    tile: "EX1_130.png"
  },
  {
    name: "Defias Ringleader",
    artist: "Dany Orizio",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 201,
    flavor:
      "He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.",
    health: 2,
    id: "EX1_131",
    mechanics: ["COMBO"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Combo: Summon a 2/1 Defias Bandit.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "417.png",
    tile: "EX1_131.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cb6f4faf-771a-4a25-acda-b95f96d9182d",
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
                property: "extra",
                operation: "INCLUDES",
                minValue: "FAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Defias Ringleader"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Eye for an Eye",
    artist: "James Ryman",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 462,
    flavor:
      "Justice sometimes takes the form of a closed fist into a soft cheek.",
    id: "EX1_132",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text:
      "Secret: When your hero takes damage, deal that much damage to the enemy hero.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "206.png",
    tile: "EX1_132.png"
  },
  {
    name: "Perdition's Blade",
    artist: "Daren Bader",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 391,
    durability: 2,
    flavor:
      "Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.",
    id: "EX1_133",
    mechanics: ["BATTLECRY", "COMBO"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "RARE",
    set: 98,
    rating: 2,
    targetingArrowText: "Deal 1 damage.  Combo: 2 instead.",
    text: "Battlecry: Deal 1 damage. Combo: Deal 2 instead.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "82.png",
    tile: "EX1_133.png"
  },
  {
    name: "SI:7 Agent",
    artist: "Chris Moeller",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 1117,
    flavor:
      "The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.",
    health: 3,
    id: "EX1_134",
    mechanics: ["COMBO"],
    playRequirements: { REQ_TARGET_FOR_COMBO: 0 },
    rarity: "RARE",
    set: 98,
    rating: 4,
    targetingArrowText: "Deal 2 damage.",
    text: "Combo: Deal 2 damage.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "286.png",
    tile: "EX1_134.png"
  },
  {
    name: "Redemption",
    artist: "Ittoku",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 140,
    flavor:
      "I am not sure how you get demptioned the first time.  It’s a mystery!",
    id: "EX1_136",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "Secret: When a friendly minion dies, return it to life with 1 Health.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "657.png",
    tile: "EX1_136.png"
  },
  {
    name: "Headcrack",
    artist: "James Zhang",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 708,
    flavor: "When all else fails, nothing beats a swift whack upside the head.",
    id: "EX1_137",
    mechanics: ["COMBO"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text:
      "Deal $2 damage to the enemy hero. Combo: Return this to your hand next turn.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "135.png",
    tile: "EX1_137.png"
  },
  {
    name: "Shadowstep",
    artist: "Graven Tung",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 0,
    dbfId: 365,
    flavor:
      "Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.",
    id: "EX1_144",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Return a friendly minion to your hand. It costs (2) less.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "550.png",
    tile: "EX1_144.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "25254e2f-8276-408c-86f4-5f909f720370",
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
                minValue: "Medivh, the Guardian"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Preparation",
    artist: "Clint Langley",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 0,
    dbfId: 1158,
    flavor: "'Be Prepared' - Rogue Motto",
    id: "EX1_145",
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "The next spell you cast this turn costs (3) less.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "364.png",
    tile: "EX1_145.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1f93c72e-fb80-4356-a1d8-5e0c832236d7",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 2
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Vanish"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Wrath",
    artist: "Raymond Swanland",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 836,
    flavor:
      "The talk around the Ratchet Inn is that this card is too good and should be a Legendary.",
    id: "EX1_154",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text:
      "Choose One - Deal $3 damage to a minion; or $1 damage and draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "CARD_DRAW"],
    imageUrl: "636440873128110708.png",
    tile: "EX1_154.png"
  },
  {
    name: "Mark of Nature",
    artist: "Clint Langley",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 151,
    flavor:
      "Druids call it the 'Mark of Nature.'  Everyone else calls it 'needing a bath.'",
    id: "EX1_155",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 1,
    text: "Choose One - Give a minion +4 Attack; or +4 Health and Taunt.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "180.png",
    tile: "EX1_155.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6d735ddd-27f9-42a2-bef6-7de70455bc16",
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
    name: "Soul of the Forest",
    artist: "Markus Erdt",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 381,
    flavor: "'Reforestation' is suddenly a terrifying word.",
    id: "EX1_158",
    rarity: "COMMON",
    referencedTags: ["DEATHRATTLE"],
    set: 98,
    rating: 1,
    text: "Give your minions 'Deathrattle: Summon a 2/2 Treant.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "311.png",
    tile: "EX1_158.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "25f04c7a-5598-4a32-a1ff-83e13939432b",
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
            id: "d929cc68-2c90-4810-8728-8eead6290f4d",
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
    name: "Power of the Wild",
    artist: "Steve Tappin",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 503,
    flavor:
      "Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.",
    id: "EX1_160",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Choose One - Give your minions +1/+1; or Summon a 3/2 Panther.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "165.png",
    tile: "EX1_160.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "f4682dd0-ff7a-4e1c-835c-480edf19e3a0",
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
            id: "ee94d386-b590-4367-98d7-3f82c6ec1af2",
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
    name: "Naturalize",
    artist: "Leo Che",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 233,
    flavor: "Another one bites the dust.",
    id: "EX1_161",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Destroy a minion. Your opponent draws 2 cards.",
    type: "SPELL",
    extra: ["STALL", "TEMPO"],
    imageUrl: "154.png",
    tile: "EX1_161.png"
  },
  {
    name: "Dire Wolf Alpha",
    artist: "John Dickenson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 985,
    flavor:
      "We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.",
    health: 2,
    id: "EX1_162",
    mechanics: ["ADJACENT_BUFF", "AURA"],
    race: "BEAST",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Adjacent minions have +1 Attack.",
    type: "MINION",
    extra: ["BUFF", "FAST"],
    imageUrl: "305.png",
    tile: "EX1_162.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0f70c32b-4045-464c-b941-a7370ed97c9a",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Dire Wolf Alpha"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Nourish",
    artist: "Terese Nielsen",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 95,
    flavor:
      "Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.",
    id: "EX1_164",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Choose One - Gain 2 Mana Crystals; or Draw 3 cards.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "120.png",
    tile: "EX1_164.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "07101726-3fc8-4edc-8e5f-0926a6fecf45",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "mana crystal"
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
    name: "Druid of the Claw",
    artist: "Luca Zontini",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 692,
    flavor: "Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!",
    health: 4,
    id: "EX1_165",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    referencedTags: ["CHARGE", "TAUNT"],
    set: 98,
    rating: 3,
    text: "Choose One - Transform into a 4/4 with Charge; or a 4/6 with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "587.png",
    tile: "EX1_165.png"
  },
  {
    name: "Keeper of the Grove",
    artist: "Gabor Szikszai",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 601,
    flavor:
      "These guys just show up and start Keeping your Groves without even asking.",
    health: 2,
    id: "EX1_166",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "RARE",
    referencedTags: ["SILENCE"],
    set: 98,
    rating: 1,
    text: "Choose One - Deal 2 damage; or Silence a minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "459.png",
    tile: "EX1_166.png"
  },

  {
    name: "Emperor Cobra",
    artist: "Lars Grant-West",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1098,
    flavor:
      "The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.",
    health: 3,
    id: "EX1_170",
    mechanics: ["POISONOUS"],
    race: "BEAST",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Poisonous",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "625.png",
    tile: "EX1_170.png"
  },

  {
    name: "Ancient of War",
    artist: "Sean O’Daniels",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 1035,
    flavor:
      "Young Night Elves love to play 'Who can get the Ancient of War to Uproot?'  You lose if you get crushed to death.",
    health: 5,
    id: "EX1_178",
    mechanics: ["CHOOSE_ONE"],
    rarity: "EPIC",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 3,
    text: "Choose One - +5 Attack; or +5 Health and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "242.png",
    tile: "EX1_178.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "ac50f726-e274-4ea3-8f15-fffa81ddb805",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "mana crystal"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lightning Bolt",
    artist: "Daarken",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 505,
    flavor: "Lightning Bolt! Lightning Bolt! Lightning Bolt!",
    id: "EX1_238",
    mechanics: ["OVERLOAD"],
    overload: 1,
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Deal $3 damage. Overload: (1)",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "10.png",
    tile: "EX1_238.png"
  },
  {
    name: "Lava Burst",
    artist: "Dan Scott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 864,
    flavor: "It's like an ocean of liquid magma in your mouth!",
    id: "EX1_241",
    mechanics: ["OVERLOAD"],
    overload: 2,
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Deal $5 damage. Overload: (2)",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "679.png",
    tile: "EX1_241.png"
  },
  {
    name: "Dust Devil",
    artist: "Raymond Swanland",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 618,
    flavor:
      "Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?",
    health: 1,
    id: "EX1_243",
    mechanics: ["OVERLOAD", "WINDFURY"],
    overload: 2,
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Windfury. Overload: (2)",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "129.png",
    tile: "EX1_243.png"
  },

  {
    name: "Earth Shock",
    artist: "Kevin Chin",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 767,
    flavor: "Earth Shock? Shouldn't it be 'Azeroth Shock'?",
    id: "EX1_245",
    mechanics: ["SILENCE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Silence a minion, then deal $1 damage to it.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "77.png",
    tile: "EX1_245.png"
  },

  {
    name: "Stormforged Axe",
    artist: "Nate Bowden",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 960,
    durability: 3,
    flavor: "Yo, that's a nice axe.",
    id: "EX1_247",
    mechanics: ["OVERLOAD"],
    overload: 1,
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Overload: (1)",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "152.png",
    tile: "EX1_247.png"
  },
  {
    name: "Feral Spirit",
    artist: "Clint Langley",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 238,
    flavor: "Spirit wolves are like regular wolves with pom-poms.",
    id: "EX1_248",
    mechanics: ["OVERLOAD"],
    overload: 2,
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 3,
    text: "Summon two 2/3 Spirit Wolves with Taunt. Overload: (2)",
    type: "SPELL",
    extra: ["MIN_GEN", "TEMPO"],
    imageUrl: "214.png",
    tile: "EX1_248.png"
  },
  {
    name: "Baron Geddon",
    artist: "Ian Ameling",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 336,
    elite: true,
    flavor:
      "Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.",
    health: 5,
    id: "EX1_249",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "At the end of your turn, deal 2 damage to ALL other characters.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "539.png",
    tile: "EX1_249.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "4390b12e-3c45-41d6-af56-b00deb29891b",
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
    name: "Earth Elemental",
    artist: "Dan Scott",
    attack: 7,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 1141,
    flavor: "Nothing beats rock.",
    health: 8,
    id: "EX1_250",
    mechanics: ["OVERLOAD", "TAUNT"],
    overload: 3,
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Taunt Overload: (3)",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "124.png",
    tile: "EX1_250.png"
  },
  {
    name: "Forked Lightning",
    artist: "Ralph Horsley",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 299,
    flavor:
      "If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.",
    id: "EX1_251",
    mechanics: ["OVERLOAD"],
    overload: 2,
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 2 },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Deal $2 damage to 2 random enemy minions. Overload: (2)",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "530.png",
    tile: "EX1_251.png"
  },
  {
    name: "Unbound Elemental",
    artist: "Matt Gaser",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 774,
    flavor:
      "Unlike bound elementals, Unbound ones really enjoy a night on the town.",
    health: 4,
    id: "EX1_258",
    race: "ELEMENTAL",
    rarity: "COMMON",
    referencedTags: ["OVERLOAD"],
    set: 98,
    rating: 3,
    text: "Whenever you play a card with Overload, gain +1/+1.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "51.png",
    tile: "EX1_258.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3ec1fe21-049d-4739-b463-12caaf3c717e",
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
    name: "Lightning Storm",
    artist: "Christopher Moeller",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 629,
    flavor: "An umbrella won't be effective, I'm afraid.",
    id: "EX1_259",
    mechanics: ["OVERLOAD"],
    overload: 2,
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Deal $2-$3 damage to all enemy minions. Overload: (2)",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "676.png",
    tile: "EX1_259.png"
  },
  {
    name: "Ethereal Arcanist",
    artist: "Michael Komarck",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 1737,
    flavor:
      "The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.",
    health: 3,
    id: "EX1_274",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 98,
    rating: 1,
    text: "If you control a Secret at the end of your turn, gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "125.png",
    tile: "EX1_274.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "11052939-69e2-4a9a-b5ab-b88f1909be61",
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
    name: "Cone of Cold",
    artist: "Leo Che",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 430,
    flavor:
      "Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.",
    id: "EX1_275",
    mechanics: ["FREEZE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "Freeze a minion and the minions next to it, and deal $1 damage to them.",
    type: "SPELL",
    extra: ["STALL"],
    imageUrl: "26.png",
    tile: "EX1_275.png"
  },

  {
    name: "Pyroblast",
    artist: "Luca Zontini",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 10,
    dbfId: 1087,
    flavor: "Take the time for an evil laugh after you draw this card.",
    id: "EX1_279",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Deal $10 damage.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "496.png",
    tile: "EX1_279.png"
  },
  {
    name: "Frost Elemental",
    artist: "Dan Scott",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 512,
    flavor:
      "When a Water elemental and an Ice elemental love each other VERY much...",
    health: 5,
    id: "EX1_283",
    mechanics: ["BATTLECRY", "FREEZE"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    targetingArrowText: "Freeze a character.",
    text: "Battlecry: Freeze a character.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "598.png",
    tile: "EX1_283.png"
  },
  {
    name: "Counterspell",
    artist: "Jason Chan",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 113,
    flavor:
      "What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.",
    id: "EX1_287",
    mechanics: ["SECRET"],
    rarity: "RARE",
    referencedTags: ["COUNTER"],
    set: 98,
    rating: 3,
    text: "Secret: When your opponent casts a spell, Counter it.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "531.png",
    tile: "EX1_287.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "15d5a23b-96a0-4ce0-ad69-f94c29673843",
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
    name: "Ice Barrier",
    artist: "Alex Garner",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 621,
    flavor: "This is Rank 1.  Rank 2 is Chocolate Milk Barrier.",
    id: "EX1_289",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Secret: When your hero is attacked, gain 8 Armor.",
    type: "SPELL",
    extra: ["SECRET", "STALL"],
    imageUrl: "672.png",
    tile: "EX1_289.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "3a5a2157-b300-458b-8bca-e901063afc01",
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
    name: "Mirror Entity",
    artist: "Raven Mimura",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 195,
    flavor: "'You go first.' - Krush'gor the Behemoth, to his pet boar.",
    id: "EX1_294",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Secret: After your opponent plays a minion, summon a copy of it.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "569.png",
    tile: "EX1_294.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "36df4fe5-dc9f-461a-b225-b09bc5896373",
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
    name: "Felguard",
    artist: "John Polidora",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 517,
    flavor: "Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.",
    health: 5,
    id: "EX1_301",
    mechanics: ["BATTLECRY", "TAUNT"],
    race: "DEMON",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Taunt Battlecry: Destroy one of your Mana Crystals.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "236.png",
    tile: "EX1_301.png"
  },

  {
    name: "Shadowflame",
    artist: "Dave Kendall",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 147,
    flavor:
      "Start with a powerful minion and stir in Shadowflame and you have a good time!",
    id: "EX1_303",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "Destroy a friendly minion and deal its Attack damage to all enemy minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "673.png",
    tile: "EX1_303.png"
  },
  {
    name: "Void Terror",
    artist: "Alexander Alexandrov",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 1221,
    flavor:
      "If you put this into your deck, you WILL lose the trust of your other minions.",
    health: 3,
    id: "EX1_304",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "Battlecry: Destroy both adjacent minions and gain  their Attack and Health.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "119.png",
    tile: "EX1_304.png"
  },

  {
    name: "Siphon Soul",
    artist: "Tyler Walpole",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 1100,
    flavor:
      "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.",
    id: "EX1_309",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Destroy a minion. Restore #3 Health to your hero.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "573.png",
    tile: "EX1_309.png"
  },
  {
    name: "Doomguard",
    artist: "Lucas Graciano",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 631,
    flavor: "Summoning a doomguard is risky. <i>Someone</i> is going to die.",
    health: 7,
    id: "EX1_310",
    mechanics: ["BATTLECRY", "CHARGE"],
    race: "DEMON",
    rarity: "RARE",
    set: 98,
    rating: 4,
    text: "Charge. Battlecry: Discard two random cards.",
    type: "MINION",
    extra: ["DAMAGE", "TEMPO", "FAST"],
    imageUrl: "507.png",
    tile: "EX1_310.png"
  },
  {
    name: "Twisting Nether",
    artist: "Dave Allsop",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 8,
    dbfId: 859,
    flavor:
      "The Twisting Nether is a formless place of magic and illusion and destroyed minions.",
    id: "EX1_312",
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Destroy all minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "398.png",
    tile: "EX1_312.png"
  },
  {
    name: "Pit Lord",
    artist: "Glenn Rane",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 783,
    flavor:
      "Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.",
    health: 6,
    id: "EX1_313",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text: "Battlecry: Deal 5 damage to your hero.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "402.png",
    tile: "EX1_313.png"
  },
  {
    name: "Summoning Portal",
    artist: "Tyler Walpole",
    attack: 0,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 969,
    flavor: "NOT LESS THAN 1!  Don't get any ideas!",
    health: 4,
    id: "EX1_315",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Your minions cost (2) less, but not less than (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "566.png",
    tile: "EX1_315.png"
  },
  {
    name: "Sense Demons",
    artist: "Raven Mimura",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 860,
    flavor:
      "Generally demons are pretty obvious and you don’t need a spell to sense them.",
    id: "EX1_317",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Draw 2 Demons from your deck.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "327.png",
    tile: "EX1_317.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "be2be025-ad8f-462a-856d-afd7f9f700d0",
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
    name: "Flame Imp",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 1090,
    flavor: "Imps like being on fire.  They just do.",
    health: 2,
    id: "EX1_319",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Battlecry: Deal 3 damage to your hero.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "85.png",
    tile: "EX1_319.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f11fc529-7f49-4a0c-8ed0-1d1734eff3ba",
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
                minValue: 4
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Flame Imp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bane of Doom",
    artist: "Raymond Swanland",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 23,
    flavor: "My advice to you is to avoid Doom, if possible.",
    id: "EX1_320",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text:
      "Deal $2 damage to a character. If that kills it, summon a random Demon.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "670.png",
    tile: "EX1_320.png"
  },
  {
    name: "Lord Jaraxxus",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 9,
    dbfId: 777,
    elite: true,
    flavor: "'TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!'",
    health: 15,
    id: "EX1_323",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "Battlecry: Destroy your hero and replace it with Lord Jaraxxus.",
    type: "MINION",
    extra: ["VALUE", "HEAL"],
    imageUrl: "482.png",
    tile: "EX1_323.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "7171a01a-35c4-48f5-8941-b75ba23bdbee",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "HEAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Lord Jaraxxus"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Silence",
    artist: "Zoltan & Gabor",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 0,
    dbfId: 1189,
    flavor:
      "Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.",
    id: "EX1_332",
    mechanics: ["SILENCE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Silence a minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "544.png",
    tile: "EX1_332.png"
  },
  {
    name: "Shadow Madness",
    artist: "Mark Gibbons",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 220,
    flavor:
      "You can rationalize it all you want, it's still a mean thing to do.",
    id: "EX1_334",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_MAX_ATTACK: 3,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 98,
    rating: 3,
    text:
      "Gain control of an enemy minion with 3 or less Attack until end of turn.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "442.png",
    tile: "EX1_334.png"
  },
  {
    name: "Lightspawn",
    artist: "Daarken",
    attack: 0,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 886,
    flavor: "Spawn of the Light? Or Pawn of the Lights?",
    health: 5,
    id: "EX1_335",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "This minion's Attack is always equal to its Health.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "192.png",
    tile: "EX1_335.png"
  },
  {
    name: "Thoughtsteal",
    artist: "Alex Garner",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 30,
    flavor:
      "'What do you get when you cast Thoughtsteal on an Orc?  Nothing!' - Tauren joke",
    id: "EX1_339",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Copy 2 cards in your opponent's deck and add them to your hand.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "62.png",
    tile: "EX1_339.png"
  },
  {
    name: "Lightwell",
    artist: "Blizzard Entertainment",
    attack: 0,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 797,
    flavor:
      "It isn't clear if people ignore the Lightwell, or if it is just invisible.",
    health: 5,
    id: "EX1_341",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text:
      "At the start of your turn, restore 3 Health to a damaged friendly character.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "117.png",
    tile: "EX1_341.png"
  },
  {
    name: "Mindgames",
    artist: "Zoltan & Gabor",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 145,
    flavor: "Sometimes it feels like this is all a game.",
    id: "EX1_345",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text:
      "Put a copy of a random minion from your opponent's deck into the battlefield.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "301.png",
    tile: "EX1_345.png"
  },
  {
    name: "Divine Favor",
    artist: "Lucas Graciano",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 679,
    flavor:
      "This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!",
    id: "EX1_349",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Draw cards until you have as many in hand as your opponent.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "581.png",
    tile: "EX1_349.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "116d259b-ec07-4809-9865-cd40705ad53a",
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
    name: "Prophet Velen",
    artist: "Wei Wang",
    attack: 7,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 9,
    elite: true,
    flavor:
      "He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.",
    health: 7,
    id: "EX1_350",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "Double the damage and healing of your spells and Hero Power.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "228.png",
    tile: "EX1_350.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "fef429ec-1402-4e42-a3d0-0f46a9a0498a",
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
    name: "Lay on Hands",
    artist: "Raymond Swanland",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 8,
    dbfId: 594,
    flavor: "A grammatically awkward life saver.",
    id: "EX1_354",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Restore #8 Health. Draw 3 cards.",
    type: "SPELL",
    extra: ["HEAL", "CARD_DRAW"],
    imageUrl: "506.png",
    tile: "EX1_354.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b8db6af3-b9bf-4bc9-977a-6ef621147aa8",
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
    name: "Blessed Champion",
    artist: "Tyler Walpole",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 1522,
    flavor: "This card causes double the trouble AND double the fun.",
    id: "EX1_355",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Double a minion's Attack.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "7.png",
    tile: "EX1_355.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "543322ee-60e6-4348-9a7e-cdcabf4919af",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Leeroy Jenkins"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Argent Protector",
    artist: "Doug Alexander",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 1022,
    flavor:
      "'I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.'",
    health: 2,
    id: "EX1_362",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["DIVINE_SHIELD"],
    set: 98,
    rating: 2,
    targetingArrowText: "Give Divine Shield.",
    text: "Battlecry: Give a friendly minion Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "191.png",
    tile: "EX1_362.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "470e144d-5f6a-4190-aec5-56ac262a3aab",
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
    name: "Blessing of Wisdom",
    artist: "Chippy",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 1373,
    flavor:
      "Apparently with wisdom comes the knowledge that you should probably be attacking every turn.",
    id: "EX1_363",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Choose a minion. Whenever it attacks, draw a card.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "100.png",
    tile: "EX1_363.png"
  },
  {
    name: "Holy Wrath",
    artist: "Justin Sweet",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 435,
    flavor: "C'mon Molten Giant!!",
    id: "EX1_365",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Draw a card and deal damage equal to its Cost.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "355.png",
    tile: "EX1_365.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "0a905f76-4156-4975-ab22-b189c2993538",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 9
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sword of Justice",
    artist: "Efrem Palacios",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 643,
    durability: 5,
    flavor: "I dub you Sir Loin of Beef!",
    id: "EX1_366",
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text:
      "After you summon a minion, give it +1/+1 and this loses 1 Durability.",
    type: "WEAPON",
    extra: ["BUFF"],
    imageUrl: "567.png",
    tile: "EX1_366.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "50e7fa9d-8177-4644-b274-86e6a3882c3a",
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
    name: "Repentance",
    artist: "Gonzalo Ordonez",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 232,
    flavor:
      "Repentance often comes in the moment before obliteration. Curious.",
    id: "EX1_379",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Secret: After your opponent plays a minion, reduce its Health to 1.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "642.png",
    tile: "EX1_379.png"
  },
  {
    name: "Aldor Peacekeeper",
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 1167,
    flavor: "The Aldor hate two things: the Scryers and smooth jazz.",
    health: 3,
    id: "EX1_382",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 98,
    rating: 4,
    targetingArrowText: "Change Attack to 1.",
    text: "Battlecry: Change an enemy minion's Attack to 1.",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL", "TEMPO"],
    imageUrl: "23.png",
    tile: "EX1_382.png"
  },
  {
    name: "Tirion Fordring",
    artist: "Brom",
    attack: 6,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 8,
    dbfId: 890,
    elite: true,
    flavor:
      "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.",
    health: 6,
    id: "EX1_383",
    mechanics: ["DEATHRATTLE", "DIVINE_SHIELD", "TAUNT"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 4,
    text: "Divine Shield, Taunt Deathrattle: Equip a 5/3 Ashbringer.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "391.png",
    tile: "EX1_383.png"
  },
  {
    name: "Avenging Wrath",
    artist: "Alex Garner",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 1174,
    flavor: "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!",
    id: "EX1_384",
    mechanics: ["ImmuneToSpellpower"],
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Deal $8 damage randomly split among all enemies.",
    type: "SPELL",
    extra: ["AOE", "DAMAGE"],
    imageUrl: "142.png",
    tile: "EX1_384.png"
  },
  {
    name: "Tauren Warrior",
    artist: "Paul Warzecha",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45,
    flavor:
      "Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.",
    health: 3,
    id: "EX1_390",
    mechanics: ["ENRAGED", "TAUNT"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Taunt Enrage: +3 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "477.png",
    tile: "EX1_390.png"
  },
  {
    name: "Slam",
    artist: "E.M. Gist",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 1074,
    flavor:
      "'Dun da dun, dun da dun': if you've heard an ogre sing this, it's too late.",
    id: "EX1_391",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Deal $2 damage to a minion. If it survives, draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "215.png",
    tile: "EX1_391.png"
  },
  {
    name: "Battle Rage",
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 400,
    flavor: "'You won't like me when I'm angry.'",
    id: "EX1_392",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Draw a card for each damaged friendly character.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "664.png",
    tile: "EX1_392.png"
  },
  {
    name: "Amani Berserker",
    artist: "Chippy",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 790,
    flavor:
      "If an Amani berserker asks 'Joo lookin' at me?!', the correct response is 'Nah, mon'.",
    health: 3,
    id: "EX1_393",
    mechanics: ["ENRAGED"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Enrage: +3 Attack",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "641.png",
    tile: "EX1_393.png"
  },
  {
    name: "Mogu'shan Warden",
    artist: "Cole Eastburn",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 700,
    flavor:
      "All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!",
    health: 7,
    id: "EX1_396",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "346.png",
    tile: "EX1_396.png"
  },
  {
    name: "Arathi Weaponsmith",
    artist: "Samwise",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 538,
    flavor: "50% off fist weapons, limited time only!",
    health: 3,
    id: "EX1_398",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Battlecry: Equip a 2/2 weapon.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "504.png",
    tile: "EX1_398.png"
  },

  {
    name: "Armorsmith",
    artist: "Greg Hildebrandt",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 596,
    flavor: "She accepts guild funds for repairs!",
    health: 4,
    id: "EX1_402",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Whenever a friendly minion takes damage, gain 1 Armor.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "644.png",
    tile: "EX1_402.png"
  },
  {
    name: "Shieldbearer",
    artist: "Carl Critchlow",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 866,
    flavor:
      "Have you seen the size of the shields in this game??  This is no easy job.",
    health: 4,
    id: "EX1_405",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "24.png",
    tile: "EX1_405.png"
  },
  {
    name: "Brawl",
    artist: "Wayne Reynolds",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 75,
    flavor: "Do you know the first rule of Brawl Club?",
    id: "EX1_407",
    playRequirements: { REQ_MINIMUM_TOTAL_MINIONS: 2 },
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Destroy all minions except one. <i>(chosen randomly)</i>",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "297.png",
    tile: "EX1_407.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "5a4e9ff5-6429-4465-8ccb-5bcf3fbff9b8",
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
    name: "Mortal Strike",
    artist: "Zoltan & Gabor",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 804,
    flavor:
      "'If you only use one ability, use Mortal Strike.' - The Warrior Code, Line 6",
    id: "EX1_408",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Deal $4 damage. If you have 12 or less Health, deal $6 instead.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "345.png",
    tile: "EX1_408.png"
  },
  {
    name: "Upgrade!",
    artist: "Matt Cavotta",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 511,
    flavor: "Easily worth 50 DKP.",
    id: "EX1_409",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "638.png",
    tile: "EX1_409.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "fab4fac7-ab2a-446d-bfbd-7abb9caadd83",
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
    name: "Shield Slam",
    artist: "Raymond Swanland",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 546,
    flavor:
      "'What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?' - The Art of Warrior, Chapter 9",
    id: "EX1_410",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 98,
    rating: 4,
    text: "Deal 1 damage to a minion for each Armor you have.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "50.png",
    tile: "EX1_410.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3fa52a95-2ac4-46fc-8856-0738c6e0528c",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gorehowl",
    artist: "Zoltan & Gabor",
    attack: 7,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 810,
    durability: 1,
    flavor:
      "Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!",
    id: "EX1_411",
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Attacking a minion costs 1 Attack instead of 1 Durability.",
    type: "WEAPON",
    extra: ["VALUE", "SMALL_REMOVAL"],
    imageUrl: "96.png",
    tile: "EX1_411.png"
  },
  {
    name: "Raging Worgen",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1155,
    flavor: "If he's raging now, just wait until he gets nerfed.",
    health: 3,
    id: "EX1_412",
    mechanics: ["ENRAGED"],
    rarity: "COMMON",
    referencedTags: ["WINDFURY"],
    set: 98,
    rating: 2,
    text: "Enrage: Windfury and +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "95.png",
    tile: "EX1_412.png"
  },
  {
    name: "Grommash Hellscream",
    artist: "Glenn Rane",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 338,
    elite: true,
    flavor:
      "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.",
    health: 9,
    id: "EX1_414",
    mechanics: ["CHARGE", "ENRAGED"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "Charge Enrage: +6 Attack",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE"],
    imageUrl: "643.png",
    tile: "EX1_414.png"
  },

  {
    name: "Murloc Warleader",
    artist: "Tim McBurnie",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1063,
    flavor:
      "Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!",
    health: 3,
    id: "EX1_507",
    mechanics: ["AURA"],
    race: "MURLOC",
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Your other Murlocs have +2 Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "222.png",
    tile: "EX1_507.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f826382b-6e4a-43d0-9d7a-d0dabdb4eb5c",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "murloc"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Murloc Warleader"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Hungry Crab"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 10,
            id: "e0abdefc-b0f5-41e6-958c-08227da846c4",
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
    name: "Murloc Tidecaller",
    artist: "Jaemin Kim",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 475,
    flavor: "This guy gets crazy strong at family reunions.",
    health: 2,
    id: "EX1_509",
    race: "MURLOC",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Whenever you summon a Murloc, gain +1 Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "420.png",
    tile: "EX1_509.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "87d364ce-4c7b-432c-87bd-9bb7fe03f189",
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
            id: "80509965-99d7-4f46-8c12-9b958df5c24e",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "murloc"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Hungry Crab"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Patient Assassin",
    artist: "Ben Olson",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 1133,
    flavor:
      "He’s not really that patient. It just takes a while for someone to walk by that he can actually reach.",
    health: 1,
    id: "EX1_522",
    mechanics: ["POISONOUS", "STEALTH"],
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Stealth  Poisonous",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL"],
    imageUrl: "14.png",
    tile: "EX1_522.png"
  },
  {
    name: "Scavenging Hyena",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 1281,
    flavor:
      "Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.",
    health: 2,
    id: "EX1_531",
    race: "BEAST",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Whenever a friendly Beast dies, gain +2/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "279.png",
    tile: "EX1_531.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "f67c2958-ea3a-43fa-ab55-742e22a95593",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Unleash the Hounds"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "2121be9f-d491-4c31-b074-4cc6fbc322a7",
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
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Misdirection",
    artist: "Daren Bader",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 1091,
    flavor:
      "Sometimes it's as simple as putting on a fake mustache and pointing at someone else.",
    id: "EX1_533",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text:
      "Secret: When an enemy attacks your hero, instead it attacks another random character.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "447.png",
    tile: "EX1_533.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "2ffae988-f55c-4b9b-b40e-ade7b6ffafa5",
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
    name: "Savannah Highmane",
    artist: "Milivoj Ceran",
    attack: 6,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 1261,
    flavor:
      "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.",
    health: 5,
    id: "EX1_534",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "RARE",
    set: 98,
    rating: 4,
    text: "Deathrattle: Summon two 2/2 Hyenas.",
    type: "MINION",
    extra: ["VALUE", "TEMPO"],
    imageUrl: "8.png",
    tile: "EX1_534.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "02397d00-36ff-4e27-a43e-5b0e6eaa5c2a",
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
    name: "Eaglehorn Bow",
    artist: "Cyril Van Der Haegen",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 1662,
    durability: 2,
    flavor: "First Lesson: Put the pointy end in the other guy.",
    id: "EX1_536",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 98,
    rating: 4,
    text: "Whenever a friendly Secret is revealed, gain +1 Durability.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "363.png",
    tile: "EX1_536.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "882d44cb-239b-43a1-ab2a-ec17dd688e16",
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
    name: "Explosive Shot",
    artist: "Tom Baxa",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 394,
    flavor: "Pull the pin, count to 5, then shoot.  Then duck.",
    id: "EX1_537",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Deal $5 damage to a minion and $2 damage to adjacent ones.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "114.png",
    tile: "EX1_537.png"
  },
  {
    name: "Unleash the Hounds",
    artist: "Linggar Bramanty",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 1243,
    flavor:
      "You must read the name of this card out loud each time you play it.",
    id: "EX1_538",
    playRequirements: {
      REQ_MINIMUM_ENEMY_MINIONS: 1,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "COMMON",
    referencedTags: ["CHARGE"],
    set: 98,
    rating: 4,
    text: "For each enemy minion, summon a 1/1 Hound with Charge.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "317.png",
    tile: "EX1_538.png"
  },

  {
    name: "King Krush",
    artist: "Alex Horley Orlandelli",
    attack: 8,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 9,
    dbfId: 1144,
    elite: true,
    flavor:
      "The best defense against King Krush is to have someone you don’t like standing in front of you.",
    health: 8,
    id: "EX1_543",
    mechanics: ["CHARGE"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Charge",
    type: "MINION",
    extra: ["DAMAGE"],
    imageUrl: "194.png",
    tile: "EX1_543.png"
  },
  {
    name: "Flare",
    artist: "Tyler Walpole",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 896,
    flavor:
      "Not only does it reveal your enemies, but it's also great for parties!",
    id: "EX1_544",
    rarity: "RARE",
    referencedTags: ["SECRET", "STEALTH"],
    set: 98,
    rating: 3,
    text: "All minions lose Stealth. Destroy all enemy Secrets. Draw a card.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "630.png",
    tile: "EX1_544.png"
  },
  {
    name: "Bestial Wrath",
    artist: "Alex Horley Orlandelli",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 903,
    flavor:
      "The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.",
    id: "EX1_549",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "EPIC",
    referencedTags: ["IMMUNE"],
    set: 98,
    rating: 1,
    text: "Give a friendly Beast +2 Attack and Immune this turn.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "304.png",
    tile: "EX1_549.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "44783110-0fce-461b-99ba-faf65b230308",
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
                minValue: 5
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Bearshark"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Snake Trap",
    artist: "Bernie Kang",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 455,
    flavor: "Why did it have to be snakes?",
    id: "EX1_554",
    mechanics: ["SECRET"],
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text:
      "Secret: When one of your minions is attacked, summon three 1/1 Snakes.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "210.png",
    tile: "EX1_554.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3abcbce2-526e-465e-af20-0d2bc39de9fa",
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
    name: "Harvest Golem",
    artist: "Brian Despain",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 778,
    flavor:
      "'Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.'",
    health: 3,
    id: "EX1_556",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Deathrattle: Summon a 2/1 Damaged Golem.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "386.png",
    tile: "EX1_556.png"
  },
  {
    name: "Nat Pagle",
    artist: "Steve Prescott",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1147,
    elite: true,
    flavor:
      "Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).",
    health: 4,
    id: "EX1_557",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text:
      "At the start of your turn, you have a 50% chance to draw an extra card.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "19.png",
    tile: "EX1_557.png"
  },
  {
    name: "Harrison Jones",
    artist: "Matt Dixon",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 912,
    elite: true,
    flavor: "“That belongs in the Hall of Explorers!”",
    health: 4,
    id: "EX1_558",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text:
      "Battlecry: Destroy your opponent's weapon and draw cards equal to its Durability.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "602.png",
    tile: "EX1_558.png"
  },
  {
    name: "Archmage Antonidas",
    artist: "Wayne Reynolds",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 1080,
    elite: true,
    flavor:
      "Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.",
    health: 7,
    id: "EX1_559",
    rarity: "LEGENDARY",
    set: 98,
    rating: 4,
    text: "Whenever you cast a spell, add a 'Fireball' spell to your hand.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "VALUE"],
    imageUrl: "220.png",
    tile: "EX1_559.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1f8f54ac-10ad-414c-b7ad-7a2795e56015",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Nozdormu",
    artist: "James Ryman",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 411,
    elite: true,
    flavor: "Time to write some flavor text.",
    health: 8,
    id: "EX1_560",
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Players only have 15 seconds to take their turns.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "285.png",
    tile: "EX1_560.png"
  },
  {
    name: "Alexstrasza",
    artist: "Raymond Swanland",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 581,
    elite: true,
    flavor:
      "Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.",
    health: 8,
    id: "EX1_561",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_HERO_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    targetingArrowText: "Set Health to 15.",
    text: "Battlecry: Set a hero's remaining Health to 15.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "303.png",
    tile: "EX1_561.png"
  },
  {
    name: "Onyxia",
    artist: "Dany Orizio",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 363,
    elite: true,
    flavor:
      "Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.",
    health: 8,
    id: "EX1_562",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 2,
    text:
      "Battlecry: Summon 1/1 Whelps until your side of the battlefield is full.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "432.png",
    tile: "EX1_562.png"
  },
  {
    name: "Malygos",
    artist: "Michael Komarck",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 436,
    elite: true,
    flavor: "Malygos hates it when mortals use magic.  He gets so mad!",
    health: 12,
    id: "EX1_563",
    mechanics: ["SPELLPOWER"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    spellDamage: 5,
    text: "Spell Damage +5",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "241.png",
    tile: "EX1_563.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "dc342c89-f73b-456d-b867-595ef4956854",
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
    name: "Faceless Manipulator",
    artist: "Raymond Swanland",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 531,
    flavor:
      "The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.",
    health: 3,
    id: "EX1_564",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 98,
    rating: 2,
    targetingArrowText: "Become a copy of a minion.",
    text: "Battlecry: Choose a minion and become a copy of it.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "450.png",
    tile: "EX1_564.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "e1d40918-d116-43eb-8101-281fc148a851",
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
    name: "Doomhammer",
    artist: "John Polidora",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 352,
    durability: 8,
    flavor:
      "Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.",
    id: "EX1_567",
    mechanics: ["OVERLOAD", "WINDFURY"],
    overload: 2,
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Windfury, Overload: (2)",
    type: "WEAPON",
    extra: ["DAMAGE"],
    imageUrl: "172.png",
    tile: "EX1_567.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "97762cdc-3051-460c-8d13-b245f516c3ce",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Rockbiter Weapon"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bite",
    artist: "Tom Baxa",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 577,
    flavor: "Chew your food!",
    id: "EX1_570",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Give your hero +4 Attack this turn. Gain 4 Armor.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "266.png",
    tile: "EX1_570.png"
  },
  {
    name: "Force of Nature",
    artist: "Trevor Jacobs",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 493,
    flavor:
      "'I think I'll just nap under these trees. Wait... AAAAAHHH!' - Blinkfizz, the Unfortunate Gnome",
    id: "EX1_571",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text: "Summon three 2/2 Treants.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "237.png",
    tile: "EX1_571.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "495178f4-fddf-4d88-ab69-f952c6882276",
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
            id: "e5c59939-e93b-4419-b7aa-46b937ecd039",
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
    name: "Ysera",
    artist: "Gabor Szikszai",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 1186,
    elite: true,
    entourage: ["DREAM_01", "DREAM_02", "DREAM_03", "DREAM_04", "DREAM_05"],
    flavor:
      "Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?",
    health: 12,
    id: "EX1_572",
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 4,
    text: "At the end of your turn, add a Dream Card to your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "495.png",
    tile: "EX1_572.png"
  },
  {
    name: "Cenarius",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 9,
    dbfId: 36,
    elite: true,
    flavor: "Yes, he's a demigod. No, he doesn't need to wear a shirt.",
    health: 8,
    id: "EX1_573",
    mechanics: ["CHOOSE_ONE"],
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 3,
    text:
      "Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "MIN_GEN", "BUFF"],
    imageUrl: "605.png",
    tile: "EX1_573.png"
  },
  {
    name: "Mana Tide Totem",
    artist: "Scott Altmann",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 513,
    flavor:
      "It is said that some shaman can say 'Floatin' totem' 10 times, fast.",
    health: 3,
    id: "EX1_575",
    race: "TOTEM",
    rarity: "RARE",
    set: 98,
    rating: 4,
    text: "At the end of your turn, draw a card.",
    type: "MINION",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "613.png",
    tile: "EX1_575.png"
  },
  {
    name: "The Beast",
    artist: "Glenn Rane",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 962,
    elite: true,
    flavor:
      "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.",
    health: 7,
    id: "EX1_577",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Deathrattle: Summon a 3/3 Finkle Einhorn for your opponent.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "179.png",
    tile: "EX1_577.png"
  },
  {
    name: "Savagery",
    artist: "Dave Rapoza",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 481,
    flavor:
      "It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.",
    id: "EX1_578",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Deal damage equal to your hero's Attack to a minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "148.png",
    tile: "EX1_578.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buff your hero",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "7f65ff71-1990-4f34-aa40-c5a2fe3d78fd",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "hero.*attack"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Savagery"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Priestess of Elune",
    artist: "Dan Scott",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 424,
    flavor: "If she threatens to 'moon' you, it's not what you think.",
    health: 4,
    id: "EX1_583",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Battlecry: Restore 4 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "138.png",
    tile: "EX1_583.png"
  },
  {
    name: "Ancient Mage",
    artist: "Howard Lyon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 915,
    flavor: "Sometimes he forgets and just wanders into someone else's game.",
    health: 5,
    id: "EX1_584",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SPELLPOWER"],
    set: 98,
    rating: 1,
    text: "Battlecry: Give adjacent minions Spell Damage +1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "176.png",
    tile: "EX1_584.png"
  },
  {
    name: "Sea Giant",
    artist: "Svetlin Velinov",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 211,
    flavor: "See?  Giant.",
    health: 8,
    id: "EX1_586",
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Costs (1) less for each other minion on the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "614.png",
    tile: "EX1_586.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "2440e94d-4aca-41ff-b4c4-3c94c0d257a9",
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
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Blood Knight",
    artist: "Trent Kaniuga",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 755,
    flavor:
      "The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.",
    health: 3,
    id: "EX1_590",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD"],
    set: 98,
    rating: 2,
    text:
      "Battlecry: All minions lose Divine Shield. Gain +3/+3 for each Shield lost.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "75.png",
    tile: "EX1_590.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "1c5db311-bb1a-452a-8d5c-3a4ba6c061ba",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "divine shield"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Auchenai Soulpriest",
    artist: "Doug Alexander",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 237,
    flavor: "The Auchenai know the end is coming, but they're not sure when.",
    health: 5,
    id: "EX1_591",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 98,
    rating: 4,
    text: "Your cards and powers that restore Health now deal damage instead.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "656.png",
    tile: "EX1_591.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "90e632cc-7dd2-4753-856c-b01d6452c873",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Circle of Healing"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Vaporize",
    artist: "Raymond Swanland",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 286,
    flavor:
      "Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.",
    id: "EX1_594",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Secret: When a minion attacks your hero, destroy it.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "160.png",
    tile: "EX1_594.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e84f4bd3-22c5-4e4f-b1ef-2a2b23171e84",
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
    name: "Cult Master",
    artist: "Raymond Swanland",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 811,
    flavor:
      "She may be an evil cult master, but she still calls her parents once a week.",
    health: 2,
    id: "EX1_595",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Whenever one of your other minions dies, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "140.png",
    tile: "EX1_595.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "1ef47bb7-829e-4b62-8a43-36938d69adce",
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
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Demonfire",
    artist: "Ben Wootten",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 1142,
    flavor:
      "Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP",
    id: "EX1_596",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text:
      "Deal $2 damage to a minion. If it’s a friendly Demon, give it +2/+2 instead.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "452.png",
    tile: "EX1_596.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "74573b97-07f6-4856-bb40-f2c1e0cb167a",
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
    name: "Imp Master",
    artist: "Mark Gibbons",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 926,
    flavor:
      "She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.",
    health: 5,
    id: "EX1_597",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "At the end of your turn, deal 1 damage to this minion  and summon a 1/1 Imp.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "178.png",
    tile: "EX1_597.png"
  },
  {
    name: "Cruel Taskmaster",
    artist: "Phroilan Gardner",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 285,
    flavor: "'I'm going to need you to come in on Sunday.' - Cruel Taskmaster",
    health: 2,
    id: "EX1_603",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 3,
    targetingArrowText: "Deal 1 damage and grant +2 Attack.",
    text: "Battlecry: Deal 1 damage to a minion and give it +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "328.png",
    tile: "EX1_603.png"
  },
  {
    name: "Frothing Berserker",
    artist: "Simon Bisley",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 654,
    flavor:
      "He used to work as an accountant before he tried his hand at Berserkering.",
    health: 4,
    id: "EX1_604",
    rarity: "RARE",
    set: 98,
    rating: 4,
    text: "Whenever a minion takes damage, gain +1 Attack.",
    type: "MINION",
    mechanics: ["ENRAGED"],
    race: " ",
    extra: ["FAST"],
    imageUrl: "69.png",
    tile: "EX1_604.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "072ea38a-869e-4192-9ce5-736fcfd70da3",
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
    name: "Inner Rage",
    artist: "Slawomir Maniak",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 0,
    dbfId: 22,
    flavor: "They're only smiling on the outside.",
    id: "EX1_607",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Deal $1 damage to a minion and give it +2 Attack.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "366.png",
    tile: "EX1_607.png"
  },
  {
    name: "Sorcerer's Apprentice",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 614,
    flavor:
      "Apprentices are great for bossing around.  'Conjure me some mana buns! And a coffee!  Make that a mana coffee!'",
    health: 2,
    id: "EX1_608",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text: "Your spells cost (1) less.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "4.png",
    tile: "EX1_608.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "52407f16-d40b-4836-920f-e2d84725ec58",
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
    name: "Snipe",
    artist: "Lorenzo Minaca",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 814,
    flavor:
      "A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.",
    id: "EX1_609",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Secret: After your opponent plays a minion, deal $4 damage to it.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "553.png",
    tile: "EX1_609.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "19c96e56-3d03-4ba2-8366-4cdf2daa4ff1",
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
    name: "Explosive Trap",
    artist: "Brandon Kitkouski",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 585,
    flavor: "It traps your food AND cooks it for you!",
    id: "EX1_610",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Secret: When your hero is attacked, deal $2 damage to all enemies.",
    type: "SPELL",
    extra: ["SECRET", "AOE", "DAMAGE"],
    imageUrl: "344.png",
    tile: "EX1_610.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e1ba393d-11d2-427f-a91b-22671c56bbf3",
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
    name: "Freezing Trap",
    artist: "Matt Gaser",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 519,
    flavor:
      "'Dang, that's cold.' - appropriate response to Freezing Trap, or a mean joke.",
    id: "EX1_611",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 98,
    rating: 4,
    text:
      "Secret: When an enemy minion attacks, return it to its owner's hand. It costs (2) more.",
    type: "SPELL",
    extra: ["SECRET", "TEMPO"],
    imageUrl: "99.png",
    tile: "EX1_611.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "38f7eac5-c1c1-44b9-9321-63757cae2134",
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
    name: "Kirin Tor Mage",
    artist: "Popo Wei",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 748,
    flavor:
      "The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.",
    health: 3,
    id: "EX1_612",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 98,
    rating: 3,
    text: "Battlecry: The next Secret you play this turn costs (0).",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "411.png",
    tile: "EX1_612.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cb0e12d9-63e7-4046-a316-a757167592b2",
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
    name: "Edwin VanCleef",
    artist: "Efrem Palacios",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 306,
    elite: true,
    flavor:
      "He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.",
    health: 2,
    id: "EX1_613",
    mechanics: ["COMBO"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 4,
    text: "Combo: Gain +2/+2 for each other card you've played this turn.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "3.png",
    tile: "EX1_613.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "893e4d70-692e-4862-9d5f-d58199893874",
            filters: [
              {
                property: "cost",
                operation: "LESS_THAN",
                minValue: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Illidan Stormrage",
    artist: "Alex Horley Orlandelli",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 556,
    elite: true,
    flavor:
      "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.",
    health: 5,
    id: "EX1_614",
    race: "DEMON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Whenever you play a card, summon a 2/1 Flame of Azzinoth.",
    type: "MINION",
    extra: ["MIN_GEN"],
    imageUrl: "203.png",
    tile: "EX1_614.png"
  },
  {
    name: "Mana Wraith",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 715,
    flavor:
      "They come out at night to eat leftover mana crystals. 'Mmmmmm,' they say.",
    health: 2,
    id: "EX1_616",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "ALL minions cost (1) more.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "197.png",
    tile: "EX1_616.png"
  },
  {
    name: "Deadly Shot",
    artist: "Steve Prescott",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 1093,
    flavor:
      "Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.",
    id: "EX1_617",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 1 },
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Destroy a random enemy minion.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "TEMPO"],
    imageUrl: "239.png",
    tile: "EX1_617.png"
  },
  {
    name: "Equality",
    artist: "Michal Ivan",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 756,
    flavor: "We are all special unique snowflakes... with 1 Health.",
    id: "EX1_619",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Change the Health of ALL minions to 1.",
    type: "SPELL",
    extra: ["AOE", "HARD_REMOVAL"],
    imageUrl: "383.png",
    tile: "EX1_619.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "c2e03bfb-dacc-4eba-9223-79bfdb81fab1",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Consecration"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Circle of Healing",
    artist: "Daarken",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 0,
    dbfId: 1362,
    flavor: "It isn't really a circle.",
    id: "EX1_621",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Restore #4 Health to ALL minions.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "38.png",
    tile: "EX1_621.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "e12551fb-8c45-41bf-b7c6-c91629c47a94",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Auchenai Soulpriest"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Temple Enforcer",
    artist: "Daren Bader",
    attack: 6,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 1364,
    flavor:
      "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.",
    health: 6,
    id: "EX1_623",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 98,
    rating: 2,
    targetingArrowText: "Give +3 Health.",
    text: "Battlecry: Give a friendly minion +3 Health.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "232.png",
    tile: "EX1_623.png"
  },
  {
    name: "Holy Fire",
    artist: "Miguel Coimbra",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 1365,
    flavor: "Often followed by Holy Smokes!",
    id: "EX1_624",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Deal $5 damage. Restore #5 Health to your hero.",
    type: "SPELL",
    extra: ["HEAL", "SMALL_REMOVAL"],
    imageUrl: "457.png",
    tile: "EX1_624.png"
  },
  {
    name: "Shadowform",
    artist: "Alex Horley Orlandelli",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 1368,
    flavor:
      "If a bright light shines on a priest in Shadowform… do they cast a shadow?",
    id: "EX1_625",
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text:
      "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "VALUE"],
    imageUrl: "421.png",
    tile: "EX1_625.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "5c3d33d7-ec5f-41cf-a5ce-233296372126",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "VALUE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shadowform"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mass Dispel",
    artist: "Sean O'Daniels",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 1366,
    flavor: "It dispels buffs, powers, hopes, and dreams.",
    id: "EX1_626",
    mechanics: ["SILENCE"],
    rarity: "RARE",
    set: 98,
    rating: 2,
    text: "Silence all enemy minions. Draw a card.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "249.png",
    tile: "EX1_626.png"
  },

  {
    name: "Kidnapper",
    artist: "Dave Allsop",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 287,
    flavor: "He just wants people to see his vacation photos.",
    health: 3,
    id: "NEW1_005",
    mechanics: ["COMBO"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_FOR_COMBO: 0
    },
    rarity: "EPIC",
    set: 98,
    rating: 1,
    targetingArrowText: "Return a minion to hand.",
    text: "Combo: Return a minion to its owner's hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "562.png",
    tile: "NEW1_005.png"
  },
  {
    name: "Starfall",
    artist: "Richard Wright",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 86,
    flavor: "Is the sky falling?  Yes.  Yes it is.",
    id: "NEW1_007",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "Choose One - Deal $5 damage to a minion; or $2 damage to all enemy minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "636444885532834189.png",
    tile: "NEW1_007.png"
  },
  {
    name: "Ancient of Lore",
    artist: "Patrik Hjelm",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 920,
    flavor: "Go ahead, carve your initials in him.",
    health: 5,
    id: "NEW1_008",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "EPIC",
    set: 98,
    rating: 1,
    text: "Choose One - Draw a card; or Restore 5 Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "34.png",
    tile: "NEW1_008.png"
  },
  {
    name: "Al'Akir the Windlord",
    artist: "Raymond Swanland",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 8,
    dbfId: 32,
    elite: true,
    flavor:
      "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
    health: 5,
    id: "NEW1_010",
    mechanics: ["CHARGE", "DIVINE_SHIELD", "TAUNT", "WINDFURY"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 98,
    rating: 3,
    text: "Charge, Divine Shield, Taunt, Windfury",
    type: "MINION",
    extra: ["DAMAGE"],
    imageUrl: "335.png",
    tile: "NEW1_010.png"
  },

  {
    name: "Mana Wyrm",
    artist: "Blizzard Cinematics",
    attack: 1,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 405,
    flavor:
      "These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.",
    health: 3,
    id: "NEW1_012",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Whenever you cast a spell, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "263.png",
    tile: "NEW1_012.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "626896ef-1b1f-46a1-b99a-c8fac455f7d8",
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
    name: "Master of Disguise",
    artist: "Ron Spencer",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 887,
    flavor:
      "She's actually a male tauren.  People don't call him 'Master of Disguise' for nothing.",
    health: 4,
    id: "NEW1_014",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    referencedTags: ["STEALTH"],
    set: 98,
    rating: 1,
    targetingArrowText: "Give Stealth.",
    text: "Battlecry: Give a friendly minion Stealth until your next turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "127.png",
    tile: "NEW1_014.png"
  },
  {
    name: "Hungry Crab",
    artist: "Jaemin Kim",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 443,
    flavor: "Murloc.  It's what's for dinner.",
    health: 2,
    id: "NEW1_017",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 14
    },
    race: "BEAST",
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text: "Battlecry: Destroy a Murloc and gain +2/+2.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "660.png",
    tile: "NEW1_017.png"
  },
  {
    name: "Bloodsail Raider",
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 999,
    flavor: "'I only plunder on days that end in 'y'.'",
    health: 3,
    id: "NEW1_018",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Battlecry: Gain Attack equal to the Attack of your weapon.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "637.png",
    tile: "NEW1_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "eaee84ec-6752-448e-98b0-5bb5d26b40aa",
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
    name: "Knife Juggler",
    artist: "Matt Cavotta",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1073,
    flavor:
      "Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.",
    health: 2,
    id: "NEW1_019",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "After you summon a minion, deal 1 damage to a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "422.png",
    tile: "NEW1_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6205c06d-164d-4e85-8b99-f9bb6352b50b",
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
    name: "Wild Pyromancer",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1014,
    flavor: "BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!",
    health: 2,
    id: "NEW1_020",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "After you cast a spell, deal 1 damage to ALL minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "25.png",
    tile: "NEW1_020.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "a4e33e2a-8a94-4c6f-8a43-88ee680c98c5",
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
    name: "Doomsayer",
    artist: "Alex Horley Orlandelli",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 138,
    flavor:
      "He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.",
    health: 7,
    id: "NEW1_021",
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "At the start of your turn, destroy ALL minions.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "467.png",
    tile: "NEW1_021.png"
  },
  {
    name: "Dread Corsair",
    artist: "Trent Kaniuga",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 878,
    flavor: "'Yarrrr' is a pirate word that means 'Greetings, milord.'",
    health: 3,
    id: "NEW1_022",
    mechanics: ["TAUNT"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 98,
    rating: 2,
    text: "Taunt Costs (1) less per Attack of your weapon.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "261.png",
    tile: "NEW1_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "5a21abc0-05c4-45d4-af3a-7b54c055d222",
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
    name: "Faerie Dragon",
    artist: "Samwise",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 609,
    flavor:
      "Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!",
    health: 2,
    id: "NEW1_023",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    race: "DRAGON",
    rarity: "COMMON",
    set: 98,
    rating: 3,
    text: "Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "213.png",
    tile: "NEW1_023.png"
  },
  {
    name: "Captain Greenskin",
    artist: "Dan Scott",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 456,
    elite: true,
    flavor:
      "He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!",
    health: 4,
    id: "NEW1_024",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Battlecry: Give your weapon +1/+1.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "267.png",
    tile: "NEW1_024.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "a2798931-34b5-4b89-9aed-aef9ed73574c",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["WEAPON", "HERO_POWER"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bloodsail Corsair",
    artist: "Randy Gallegos",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 997,
    flavor:
      "Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the 'Pirate's Code'.",
    health: 2,
    id: "NEW1_025",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text: "Battlecry: Remove 1 Durability from your opponent's weapon.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "453.png",
    tile: "NEW1_025.png"
  },
  {
    name: "Violet Teacher",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 1029,
    flavor:
      "If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.",
    health: 5,
    id: "NEW1_026",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Whenever you cast a spell, summon a 1/1 Violet Apprentice.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "523.png",
    tile: "NEW1_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b8b6023d-a5fe-42df-9863-3f8977ea20cc",
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
    name: "Southsea Captain",
    artist: "Ken Steacy",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 680,
    flavor:
      "When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.",
    health: 3,
    id: "NEW1_027",
    mechanics: ["AURA"],
    race: "PIRATE",
    rarity: "EPIC",
    set: 98,
    rating: 3,
    text: "Your other Pirates have +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "324.png",
    tile: "NEW1_027.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "3ee35df4-a738-49da-afa9-b8a484daf78e",
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
            id: "c096b090-59b1-4e51-b37d-eca5ac3772ce",
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
    name: "Millhouse Manastorm",
    artist: "Jim Nelson",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 855,
    elite: true,
    flavor: "'I'm gonna light you up, sweetcheeks!'",
    health: 4,
    id: "NEW1_029",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "Battlecry: Enemy spells cost (0) next turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "339.png",
    tile: "NEW1_029.png"
  },
  {
    name: "Deathwing",
    artist: "Bernie Kang",
    attack: 12,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 834,
    elite: true,
    flavor:
      "Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?",
    health: 12,
    id: "NEW1_030",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 98,
    rating: 2,
    text: "Battlecry: Destroy all other minions and discard your hand.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "474.png",
    tile: "NEW1_030.png"
  },

  {
    name: "Commanding Shout",
    artist: "Wayne Reynolds",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 1026,
    flavor: "'Shout! Shout! Let it all out!' - Advice to warriors-in-training",
    id: "NEW1_036",
    rarity: "RARE",
    set: 98,
    rating: 2,
    text:
      "Your minions can't be reduced below 1 Health this turn. Draw a card.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "166.png",
    tile: "NEW1_036.png"
  },
  {
    name: "Master Swordsmith",
    artist: "E.M. Gist",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 351,
    flavor:
      "He's currently trying to craft a 'flail-axe', but all the other swordsmiths say it can't be done.",
    health: 3,
    id: "NEW1_037",
    rarity: "RARE",
    set: 98,
    rating: 1,
    text:
      "At the end of your turn, give another random friendly minion +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "584.png",
    tile: "NEW1_037.png"
  },
  {
    name: "Gruul",
    artist: "Kev Walker",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 526,
    elite: true,
    flavor:
      "He's Gruul 'the Dragonkiller'.  He just wanted to cuddle them… he never meant to…",
    health: 7,
    id: "NEW1_038",
    rarity: "LEGENDARY",
    set: 98,
    rating: 1,
    text: "At the end of each turn, gain +1/+1 .",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "18.png",
    tile: "NEW1_038.png"
  },
  {
    name: "Hogger",
    artist: "Laurel D. Austin",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 640,
    elite: true,
    flavor:
      "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.",
    health: 4,
    id: "NEW1_040",
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 98,
    rating: 1,
    text: "At the end of your turn, summon a 2/2 Gnoll with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "39.png",
    tile: "NEW1_040.png"
  },
  {
    name: "Stampeding Kodo",
    artist: "Daren Bader",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1371,
    flavor: "This Kodo is so big that he can stampede by <i>himself</i>.",
    health: 5,
    id: "NEW1_041",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "RARE",
    set: 98,
    rating: 3,
    text: "Battlecry: Destroy a random enemy minion with 2 or less Attack.",
    type: "MINION",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "389.png",
    tile: "NEW1_041.png"
  },
  {
    name: "Flesheating Ghoul",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 397,
    flavor:
      "'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.",
    health: 3,
    id: "tt_004",
    rarity: "COMMON",
    set: 98,
    rating: 1,
    text: "Whenever a minion dies, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "610.png",
    tile: "tt_004.png"
  },
  {
    name: "Spellbender",
    artist: "Gonzalo Ordonez",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 366,
    flavor:
      "While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.",
    id: "tt_010",
    mechanics: ["SECRET"],
    rarity: "EPIC",
    set: 98,
    rating: 2,
    text:
      "Secret: When an enemy casts a spell on a minion, summon a 1/3 as the new target.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "309.png",
    tile: "tt_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "94f03ee1-a41f-42b3-a9fe-28716f727242",
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
    artist: "Arthur Gimaldinov",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 52255,
    flavor:
      "This may appear weak at frost glance, but it's actually a very ice spell.",
    id: "EX1_179",
    name: "Icicle",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    referencedTags: ["FREEZE"],
    set: 98,
    text: "Deal $2 damage to a minion. If it's Frozen, draw a card.",
    type: "SPELL",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636728848472452551.png",
    tile: "EX1_179.png"
  },
  {
    artist: "Derk Venneman",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 52262,
    flavor: "Just a compilation of napkins of intellect.",
    id: "EX1_180",
    name: "Tome of Intellect",
    rarity: "COMMON",
    set: 98,
    text: "Add a random Mage spell to your hand.",
    type: "SPELL",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636728849010446406.png",
    tile: "EX1_180.png"
  },
  {
    artist: "Arthur Gimaldinov",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 52263,
    flavor: "'Marco!' 'Polo!' 'Marco!' 'Who dares summon me?!'",
    id: "EX1_181",
    name: "Call of the Void",
    rarity: "COMMON",
    set: 98,
    text: "Add a random Demon to your hand.",
    type: "SPELL",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636728849515782084.png",
    tile: "EX1_181.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 52264,
    flavor: "The class is always greener on the other side of the board.",
    id: "EX1_182",
    name: "Pilfer",
    rarity: "COMMON",
    set: 98,
    text: "Add a random card to your hand <i>(from your opponent's class)</i>.",
    type: "SPELL",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636728850097131466.png",
    tile: "EX1_182.png"
  }
];
