export const basic = [
  {
    name: "Goldshire Footman",
    artist: "Donato Giancola",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 922,
    faction: "ALLIANCE",
    flavor:
      "If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.",
    health: 2,
    howToEarnGolden: "Unlocked at Paladin Level 57.",
    id: "CS1_042",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "564.png",
    tile: "CS1_042.png"
  },

  {
    name: "Holy Nova",
    artist: "Luca Zontini",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 841,
    flavor:
      "If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "CS1_112",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text:
      "Deal $2 damage to all enemies. Restore #2 Health to all friendly characters.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "671.png",
    tile: "CS1_112.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "2410c71c-4be8-4a54-bae7-7ea975e08d6a",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "match",
                minValue: "healed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mind Control",
    artist: "Sean O’Daniels",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 10,
    dbfId: 8,
    flavor:
      "Nominated as 'Spell Most Likely to Make Your Opponent Punch the Wall.'",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS1_113",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Take control of an enemy minion.",
    type: "SPELL",
    extra: ["VALUE", "HARD_REMOVAL"],
    imageUrl: "401.png",
    tile: "CS1_113.png"
  },

  {
    name: "Holy Smite",
    artist: "Steve Ellis",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 279,
    flavor:
      "It doesn't matter how pious you are.  Everyone needs a good smiting now and again.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS1_130",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $2 damage.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL", "FAST"],
    imageUrl: "409.png",
    tile: "CS1_130.png"
  },
  {
    name: "Mind Vision",
    artist: "Michael Komarck",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 1099,
    flavor: "I see what you did there.",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_003",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Put a copy of a random card in your opponent's hand into your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "438.png",
    tile: "CS2_003.png"
  },
  {
    name: "Power Word: Shield",
    artist: "Jessica Jung",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 613,
    flavor:
      "Sure the extra protection is nice, but the shield really reduces visibility.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_004",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Give a minion +2 Health. Draw a card.",
    type: "SPELL",
    extra: ["BUFF", "CARD_DRAW", "FAST"],
    imageUrl: "431.png",
    tile: "CS2_004.png"
  },
  {
    name: "Claw",
    artist: "Dany Orizio",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 1050,
    flavor: "The claw decides who will stay and who will go.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_005",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Give your hero +2 Attack this turn. Gain 2 Armor.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "532.png",
    tile: "CS2_005.png"
  },
  {
    name: "Healing Touch",
    artist: "Cyril Van Der Haegen",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 773,
    flavor: "8 Health, no waiting.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_007",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Restore #8 Health.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "258.png",
    tile: "CS2_007.png"
  },
  {
    name: "Moonfire",
    artist: "Richard Wright",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 0,
    dbfId: 467,
    flavor:
      "'Cast Moonfire, and never stop.' - How to Be a Druid, Chapter 5, Section 3",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_008",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Deal $1 damage.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "619.png",
    tile: "CS2_008.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "8769fa05-c96d-4308-a0aa-b33226752ab5",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "includes",
                minValue: "SPELLPOWER"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mark of the Wild",
    artist: "Brad Vancata",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 213,
    flavor: "Not to be confused with Jim of the Wild.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "CS2_009",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    referencedTags: ["TAUNT"],
    set: 99,
    rating: 2,
    text: "Give a minion Taunt and +2/+2.<i> (+2 Attack/+2 Health)</i>",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "480.png",
    tile: "CS2_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c2c1e129-3e01-4b24-a132-1b9d3626f447",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "includes",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Savage Roar",
    artist: "Grace Liu",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 742,
    flavor:
      "What do they roar? Nobody can quite tell, but it sounds like 'Elephant Macho Breeze'.  It's probably not that, though.",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "CS2_011",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give your characters +2 Attack this turn.",
    type: "SPELL",
    extra: ["BUFF", "DAMAGE", "FAST"],
    imageUrl: "329.png",
    tile: "CS2_011.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "93734db7-bd0f-48a6-abc8-365460632f64",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "includes",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Swipe",
    artist: "Sean O’Daniels",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 64,
    flavor:
      "When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.",
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_012",
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $4 damage to an enemy and $1 damage to all other enemies.",
    type: "SPELL",
    extra: ["AOE", "DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "620.png",
    tile: "CS2_012.png"
  },
  {
    name: "Wild Growth",
    artist: "James Ryman",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 1124,
    flavor:
      "Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS2_013",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Gain an empty Mana Crystal.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "282.png",
    tile: "CS2_013.png"
  },
  {
    name: "Polymorph",
    artist: "Vance Kovacs",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 77,
    flavor:
      "There was going to be a pun in this flavor text, but it just came out baa-d.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_022",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Transform a minion into a 1/1 Sheep.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "595.png",
    tile: "CS2_022.png"
  },
  {
    name: "Arcane Intellect",
    artist: "Dave Berggren",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 555,
    flavor:
      "Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_023",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Draw 2 cards.",
    type: "SPELL",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "489.png",
    tile: "CS2_023.png"
  },
  {
    name: "Frostbolt",
    artist: "Steve Ellis",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 662,
    flavor:
      "It is customary to yell 'Chill out!' or 'Freeze!' or 'Ice ice, baby!' when you play this card.",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_024",
    mechanics: ["FREEZE"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $3 damage to a character and Freeze it.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL", "FAST"],
    imageUrl: "177.png",
    tile: "CS2_024.png"
  },
  {
    name: "Arcane Explosion",
    artist: "Howard Lyon",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 447,
    flavor: "This spell is much better than Arcane Implosion.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "CS2_025",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $1 damage to all enemy minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "/resource.png",
    tile: "CS2_025.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "d333c338-eb93-4722-b91f-b8c0bc1b742b",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "includes",
                minValue: "SPELLPOWER"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Frost Nova",
    artist: "Josh Tallman",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 587,
    flavor: "Hey man, that's cold.  Literally and metaphorically.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS2_026",
    mechanics: ["FREEZE"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Freeze all enemy minions.",
    type: "SPELL",
    extra: ["STALL"],
    imageUrl: "49.png",
    tile: "CS2_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "ae6f24e7-ca14-4343-b74d-818a651f69e7",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Doomsayer"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mirror Image",
    artist: "Jim Nelson",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 1084,
    flavor: "Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_027",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "FREE",
    referencedTags: ["TAUNT"],
    set: 99,
    rating: 3,
    text: "Summon two 0/2 minions with Taunt.",
    type: "SPELL",
    extra: ["STALL", "TEMPO", "FAST"],
    imageUrl: "30.png",
    tile: "CS2_027.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7147ad55-bb64-44c3-9d58-0577515323af",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "match",
                minValue: "you cast .* spell"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Fireball",
    artist: "Ralph Horsley",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 315,
    flavor:
      "This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 44.",
    id: "CS2_029",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $6 damage.",
    type: "SPELL",
    extra: ["DAMAGE", "HARD_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "522.png",
    tile: "CS2_029.png"
  },
  {
    name: "Flamestrike",
    artist: "Romain De Santi",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 1004,
    flavor:
      "When the ground is on fire, you should <i>not</i> stop, drop, and roll.",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 51.",
    id: "CS2_032",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $4 damage to all enemy minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "44.png",
    tile: "CS2_032.png"
  },
  {
    name: "Water Elemental",
    artist: "John Avon",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 395,
    flavor:
      "Don't summon a water elemental at a party.  It'll dampen the mood.",
    health: 6,
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_033",
    mechanics: ["FREEZE"],
    race: "ELEMENTAL",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Freeze any character damaged by this minion.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "274.png",
    tile: "CS2_033.png"
  },
  {
    name: "Frost Shock",
    artist: "Alex Horley Orlandelli",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 971,
    flavor: "FROST SHOCK!",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_037",
    mechanics: ["FREEZE"],
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Deal $1 damage to an enemy character and Freeze it.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "233.png",
    tile: "CS2_037.png"
  },

  {
    name: "Windfury",
    artist: "Justin Sweet",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 51,
    flavor: "Windfury is like Earthfury and Firefury, but more light and airy.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS2_039",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    referencedTags: ["WINDFURY"],
    set: 99,
    rating: 1,
    text: "Give a minion Windfury.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "146.png",
    tile: "CS2_039.png"
  },
  {
    name: "Ancestral Healing",
    artist: "Dan Scott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 0,
    dbfId: 149,
    flavor:
      "I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_041",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    referencedTags: ["TAUNT"],
    set: 99,
    rating: 1,
    text: "Restore a minion to full Health and give it Taunt.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "216.png",
    tile: "CS2_041.png"
  },
  {
    name: "Fire Elemental",
    artist: "Ralph Horsley",
    attack: 6,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 189,
    flavor: "He can never take a bath. Ewww.",
    health: 5,
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_042",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    race: "ELEMENTAL",
    rarity: "FREE",
    set: 99,
    rating: 4,
    targetingArrowText: "Deal 3 damage.",
    text: "Battlecry: Deal 3 damage.",
    type: "MINION",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "636.png",
    tile: "CS2_042.png"
  },
  {
    name: "Rockbiter Weapon",
    artist: "Alex Horley Orlandelli",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 239,
    flavor: "This would be real handy if your enemy is made of rock.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_045",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give a friendly character +3 Attack this turn.",
    type: "SPELL",
    extra: ["DAMAGE", "BUFF", "SMALL_REMOVAL", "FAST"],
    imageUrl: "491.png",
    tile: "CS2_045.png"
  },
  {
    name: "Bloodlust",
    artist: "Luca Zontini",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 1171,
    flavor: "blaarghghLLGHRHARAAHAHHH!!",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_046",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give your minions +3 Attack this turn.",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "256.png",
    tile: "CS2_046.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "563bd7c9-f356-41d2-a795-2590d1a1502a",
            filters: [
              {
                property: "extra",
                operation: "includes",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Shadow Bolt",
    artist: "Dave Allsop",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 914,
    flavor:
      "It’s a Bolt.   It's made out of Shadow.   What more do you need to know!",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_057",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $4 damage to a minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "647.png",
    tile: "CS2_057.png"
  },

  {
    name: "Drain Life",
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 919,
    flavor: "'I've just sucked one year of your life away.'",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "CS2_061",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Deal $2 damage. Restore #2 Health to your hero.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "332.png",
    tile: "CS2_061.png"
  },
  {
    name: "Hellfire",
    artist: "Chippy",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 950,
    flavor:
      "It's spells like these that make it hard for Warlocks to get decent help.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_062",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $3 damage to ALL characters.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "122.png",
    tile: "CS2_062.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "7db60fe2-2b6b-4981-863c-562134eca960",
            filters: [
              {
                property: "extra",
                operation: "includes",
                minValue: "VALUE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Corruption",
    artist: "Wayne Reynolds",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 982,
    flavor:
      "It starts with stealing a pen from work, and before you know it, BOOM!  Corrupted!",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_063",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Choose an enemy minion. At the start of your turn, destroy it.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "252.png",
    tile: "CS2_063.png"
  },
  {
    name: "Dread Infernal",
    artist: "Zoltan & Gabor",
    attack: 6,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 1019,
    flavor: "'INFERNOOOOOOOOOO!' - Jaraxxus, Eredar Lord of the Burning Legion",
    health: 6,
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS2_064",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Battlecry: Deal 1 damage to ALL other characters.",
    type: "MINION",
    extra: ["AOE", "TEMPO"],
    imageUrl: "36.png",
    tile: "CS2_064.png"
  },
  {
    name: "Voidwalker",
    artist: "Alex Horley Orlandelli",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 48,
    flavor:
      "No relation to 'The Voidsteppers', the popular Void-based dance troupe.",
    health: 3,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_065",
    mechanics: ["TAUNT"],
    race: "DEMON",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Taunt",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "340.png",
    tile: "CS2_065.png"
  },
  {
    name: "Backstab",
    artist: "Michael Sutfin",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 0,
    dbfId: 180,
    flavor:
      "It's funny how often yelling 'Look over there!' gets your opponent to turn around.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_072",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_UNDAMAGED_TARGET: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $2 damage to an undamaged minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "471.png",
    tile: "CS2_072.png"
  },

  {
    name: "Deadly Poison",
    artist: "Trevor Jacobs",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 459,
    flavor:
      "Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "CS2_074",
    playRequirements: { REQ_WEAPON_EQUIPPED: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give your weapon +2 Attack.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO", "FAST"],
    imageUrl: "87.png",
    tile: "CS2_074.png"
  },
  {
    name: "Sinister Strike",
    artist: "Frank Cho",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 710,
    flavor:
      "There's something about this strike that just feels off.  Sinister, even.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_075",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $3 damage to the enemy hero.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "205.png",
    tile: "CS2_075.png"
  },
  {
    name: "Assassinate",
    artist: "Glenn Rane",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 345,
    flavor:
      "If you don't want to be assassinated, move to the Barrens and change your name. Good luck!",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_076",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Destroy an enemy minion.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "568.png",
    tile: "CS2_076.png"
  },
  {
    name: "Sprint",
    artist: "James Zhang",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 7,
    dbfId: 630,
    flavor: "Rogues are not good joggers.",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_077",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Draw 4 cards.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "90.png",
    tile: "CS2_077.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "a6d923ff-c00b-4188-af8b-f6022b5ee6c7",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Preparation"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Assassin's Blade",
    artist: "Brian Huang",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 421,
    durability: 4,
    flavor:
      "Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_080",
    rarity: "FREE",
    set: 99,
    rating: 2,
    type: "WEAPON",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "433.png",
    tile: "CS2_080.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "338b3aac-1ba9-419e-a3ff-4f6f2b42b24a",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "give.*weapon"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hunter's Mark",
    artist: "Jimmy Lo",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 141,
    flavor: "Never play 'Hide and Go Seek' with a Hunter.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_084",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Change a minion's Health to 1.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "22.png",
    tile: "CS2_084.png"
  },
  {
    name: "Blessing of Might",
    artist: "Zoltan Boros",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 70,
    flavor:
      "'As in, you MIGHT want to get out of my way.' - Toad Mackle, recently buffed.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "CS2_087",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give a minion +3 Attack.",
    type: "SPELL",
    extra: ["BUFF", "DAMAGE", "FAST"],
    imageUrl: "394.png",
    tile: "CS2_087.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6fe8282a-6b7e-45cf-9bfc-37a030390f6a",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "includes",
                minValue: "FAST"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Guardian of Kings",
    artist: "E.M. Gist",
    attack: 5,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 1068,
    flavor: "Holy beings from the beyond are so cliché!",
    health: 6,
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_088",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Battlecry: Restore 6 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "283.png",
    tile: "CS2_088.png"
  },
  {
    name: "Holy Light",
    artist: "Zoltan & Gabor",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 291,
    flavor:
      "If you are often bathed in Holy Light, you should consider wearing sunscreen.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_089",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Restore #6 Health.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "108.png",
    tile: "CS2_089.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "6f61c0da-0256-4551-8151-3b36dcabdbf1",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Blackguard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Light's Justice",
    artist: "Glenn Rane",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 383,
    durability: 4,
    flavor:
      "Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_091",
    rarity: "FREE",
    set: 99,
    rating: 2,
    type: "WEAPON",
    extra: ["TEMPO"],
    imageUrl: "250.png",
    tile: "CS2_091.png"
  },
  {
    name: "Blessing of Kings",
    artist: "Lucas Graciano",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 943,
    flavor:
      "Given the number of kings who have been assassinated, are you sure you want their blessing?",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_092",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "29.png",
    tile: "CS2_092.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "6ce13d2d-3c30-471e-8e46-759ecb6a3c66",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "includes",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Consecration",
    artist: "Vance Kovacs",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 476,
    flavor:
      "Consecrated ground glows with Holy energy.  But it smells a little, too.",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "CS2_093",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $2 damage to all enemies.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "260.png",
    tile: "CS2_093.png"
  },
  {
    name: "Hammer of Wrath",
    artist: "Efrem Palacios",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 250,
    flavor:
      "A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "CS2_094",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $3 damage. Draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "350.png",
    tile: "CS2_094.png"
  },
  {
    name: "Truesilver Champion",
    artist: "Ryan Sook",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 847,
    durability: 2,
    flavor:
      "It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_097",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Whenever your hero attacks, restore 2 Health to it.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO", "HEAL"],
    imageUrl: "293.png",
    tile: "CS2_097.png"
  },
  {
    name: "Charge",
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 344,
    flavor: "'Guys! Guys! Slow down!' - some kind of non-warrior minion",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "CS2_103",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    referencedTags: ["CHARGE"],
    set: 99,
    rating: 1,
    text: "Give a friendly minion Charge. It can't attack heroes this turn.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "646.png",
    tile: "CS2_103.png"
  },

  {
    name: "Heroic Strike",
    artist: "Jonboy Meyers",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 1007,
    flavor: "Really, if you're a hero, this is <i>every</i> strike.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "CS2_105",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Give your hero +4 Attack this turn.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "1.png",
    tile: "CS2_105.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "959808ff-9789-41a0-9ada-153564c88a1b",
            filters: [
              {
                property: "extra",
                operation: "includes",
                minValue: "DAMAGE"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Heroic Strike"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fiery War Axe",
    artist: "Lucas Graciano",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 401,
    durability: 2,
    flavor:
      "During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_106",
    rarity: "FREE",
    set: 99,
    rating: 4,
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "632.png",
    tile: "CS2_106.png"
  },
  {
    name: "Execute",
    artist: "Dany Orizio",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 785,
    flavor: "It's okay, he deserved it.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_108",
    playRequirements: {
      REQ_DAMAGED_TARGET: 0,
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Destroy a damaged enemy minion.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "SMALL_REMOVAL", "TEMPO"],
    imageUrl: "227.png",
    tile: "CS2_108.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "8f4f9d76-31a7-4770-92dd-2f5ee5ac6569",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "1.*damage.*all"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Arcanite Reaper",
    artist: "Stefan Kopinski",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 304,
    durability: 2,
    flavor: "No… actually you should fear the Reaper.",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 51.",
    id: "CS2_112",
    rarity: "FREE",
    set: 99,
    rating: 3,
    type: "WEAPON",
    extra: ["DAMAGE"],
    imageUrl: "182.png",
    tile: "CS2_112.png"
  },
  {
    name: "Cleave",
    artist: "Phroilan Gardner",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 940,
    flavor: "Hey you two…could you stand next to each other for a second…",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_114",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 2 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $2 damage to two random enemy minions.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "81.png",
    tile: "CS2_114.png"
  },

  {
    name: "Magma Rager",
    artist: "Matt Gaser",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1653,
    flavor:
      "He likes to think he is powerful, but pretty much anyone can solo Molten Core now.",
    health: 1,
    howToEarnGolden: "Unlocked at Shaman Level 51.",
    id: "CS2_118",
    race: "ELEMENTAL",
    rarity: "FREE",
    set: 99,
    rating: 1,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "362.png",
    tile: "CS2_118.png"
  },
  {
    name: "Oasis Snapjaw",
    artist: "Ittoku",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 1370,
    flavor:
      "His dreams of flying and breathing fire like his idol will never be realized.",
    health: 7,
    howToEarnGolden: "Unlocked at Druid Level 51.",
    id: "CS2_119",
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 1,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "15.png",
    tile: "CS2_119.png"
  },
  {
    name: "River Crocolisk",
    artist: "Daren Bader",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 1369,
    flavor:
      "Edward 'Lefty' Smith tried to make luggage out of a river crocolisk once.",
    health: 3,
    howToEarnGolden: "Unlocked at Druid Level 55.",
    id: "CS2_120",
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 2,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "535.png",
    tile: "CS2_120.png"
  },
  {
    name: "Frostwolf Grunt",
    artist: "Richie Marella",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41,
    flavor:
      "Grunting is what his father did and his father before that.   It's more than just a job.",
    health: 2,
    howToEarnGolden: "Unlocked at Shaman Level 57.",
    id: "CS2_121",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "663.png",
    tile: "CS2_121.png"
  },
  {
    name: "Raid Leader",
    artist: "Phill Gonzales",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1401,
    flavor: "'That's a 50 DKP minus!'",
    health: 2,
    howToEarnGolden: "Unlocked at Warrior Level 57.",
    id: "CS2_122",
    mechanics: ["AURA"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Your other minions have +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "502.png",
    tile: "CS2_122.png"
  },
  {
    name: "Wolfrider",
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 289,
    faction: "HORDE",
    flavor:
      "Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.",
    health: 1,
    howToEarnGolden: "Unlocked at Warrior Level 59.",
    id: "CS2_124",
    mechanics: ["CHARGE"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Charge",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "174.png",
    tile: "CS2_124.png"
  },
  {
    name: "Ironfur Grizzly",
    artist: "Lars Grant-West",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1182,
    flavor: "'Bear Carcass 1/10'",
    health: 3,
    howToEarnGolden: "Unlocked at Hunter Level 59.",
    id: "CS2_125",
    mechanics: ["TAUNT"],
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "519.png",
    tile: "CS2_125.png"
  },
  {
    name: "Silverback Patriarch",
    artist: "Daren Bader",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 67,
    faction: "HORDE",
    flavor:
      "He likes to act like he's in charge, but the silverback matriarch actually runs things.",
    health: 4,
    howToEarnGolden: "Unlocked at Warrior Level 53.",
    id: "CS2_127",
    mechanics: ["TAUNT"],
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "611.png",
    tile: "CS2_127.png"
  },
  {
    name: "Stormwind Knight",
    artist: "Ladronn",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 622,
    faction: "ALLIANCE",
    flavor: "They're still embarrassed about 'The Deathwing Incident'.",
    health: 5,
    howToEarnGolden: "Unlocked at Paladin Level 55.",
    id: "CS2_131",
    mechanics: ["CHARGE"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Charge",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "603.png",
    tile: "CS2_131.png"
  },
  {
    name: "Ironforge Rifleman",
    artist: "Tooth",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 339,
    faction: "ALLIANCE",
    flavor: "'Ready! Aim! Drink!'",
    health: 2,
    howToEarnGolden: "Unlocked at Mage Level 55.",
    id: "CS2_141",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 1,
    targetingArrowText: "Deal 1 damage.",
    text: "Battlecry: Deal 1 damage.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "41.png",
    tile: "CS2_141.png"
  },
  {
    name: "Kobold Geomancer",
    artist: "Gabor Szikszai",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 672,
    faction: "HORDE",
    flavor:
      "In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...",
    health: 2,
    howToEarnGolden: "Unlocked at Warlock Level 59.",
    id: "CS2_142",
    mechanics: ["SPELLPOWER"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "479.png",
    tile: "CS2_142.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a1006044-a21e-4ac8-b510-436f2ba0dfb6",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 5
              },
              {
                property: "text",
                operation: "match",
                minValue: "deal \\$[0-9]* damage"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Gnomish Inventor",
    artist: "Court Jones",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 308,
    faction: "ALLIANCE",
    flavor:
      "She's never quite sure what she's making, she just knows it's AWESOME!",
    health: 4,
    howToEarnGolden: "Unlocked at Priest Level 57.",
    id: "CS2_147",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Battlecry: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "246.png",
    tile: "CS2_147.png"
  },
  {
    name: "Stormpike Commando",
    artist: "Kev Walker",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 413,
    faction: "ALLIANCE",
    flavor:
      "The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.",
    health: 2,
    howToEarnGolden: "Unlocked at Paladin Level 51.",
    id: "CS2_150",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 1,
    targetingArrowText: "Deal 2 damage.",
    text: "Battlecry: Deal 2 damage.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "FAST"],
    imageUrl: "325.png",
    tile: "CS2_150.png"
  },

  {
    name: "Archmage",
    artist: "Steve Ellis",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 525,
    faction: "ALLIANCE",
    flavor:
      "You earn the title of Archmage when you can destroy anyone who calls you on it.",
    health: 7,
    howToEarnGolden: "Unlocked at Mage Level 57.",
    id: "CS2_155",
    mechanics: ["SPELLPOWER"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "545.png",
    tile: "CS2_155.png"
  },

  {
    name: "Lord of the Arena",
    artist: "E.M. Gist",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 157,
    faction: "ALLIANCE",
    flavor:
      "He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.",
    health: 5,
    howToEarnGolden: "Unlocked at Priest Level 59.",
    id: "CS2_162",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "414.png",
    tile: "CS2_162.png"
  },
  {
    name: "Murloc Raider",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 191,
    faction: "ALLIANCE",
    flavor:
      "Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!",
    health: 1,
    howToEarnGolden: "Unlocked at Priest Level 51.",
    id: "CS2_168",
    race: "MURLOC",
    rarity: "FREE",
    set: 99,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "55.png",
    tile: "CS2_168.png"
  },

  {
    name: "Stonetusk Boar",
    artist: "Howard Lyon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 648,
    flavor: "This card is boaring.",
    health: 1,
    howToEarnGolden: "Unlocked at Hunter Level 53.",
    id: "CS2_171",
    mechanics: ["CHARGE"],
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Charge",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "76.png",
    tile: "CS2_171.png"
  },
  {
    name: "Bloodfen Raptor",
    artist: "Dan Brereton",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 216,
    faction: "HORDE",
    flavor: "'Kill 30 raptors.' - Hemet Nesingwary",
    health: 2,
    howToEarnGolden: "Unlocked at Hunter Level 57.",
    id: "CS2_172",
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 2,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "576.png",
    tile: "CS2_172.png"
  },
  {
    name: "Bluegill Warrior",
    artist: "Jakub Kasper",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 739,
    flavor: "He just wants a hug.   A sloppy... slimy... hug.",
    health: 1,
    howToEarnGolden: "Unlocked at Paladin Level 53.",
    id: "CS2_173",
    mechanics: ["CHARGE"],
    race: "MURLOC",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Charge",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "289.png",
    tile: "CS2_173.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5cdf22b7-4e1f-4969-bc5c-d3bf857d4eda",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "MURLOC"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Bluegill Warrior"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sen'jin Shieldmasta",
    artist: "Brian Despain",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 635,
    faction: "HORDE",
    flavor: "Sen'jin Villiage is nice, if you like trolls and dust.",
    health: 5,
    howToEarnGolden: "Unlocked at Rogue Level 59.",
    id: "CS2_179",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "326.png",
    tile: "CS2_179.png"
  },

  {
    name: "Chillwind Yeti",
    artist: "Mauro Cascioli",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 90,
    flavor:
      "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.",
    health: 5,
    howToEarnGolden: "Unlocked at Warrior Level 55.",
    id: "CS2_182",
    rarity: "FREE",
    set: 99,
    rating: 3,
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "31.png",
    tile: "CS2_182.png"
  },
  {
    name: "War Golem",
    artist: "Dave Kendall",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 712,
    flavor:
      "Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?",
    health: 7,
    howToEarnGolden: "Unlocked at Rogue Level 51.",
    id: "CS2_186",
    rarity: "FREE",
    set: 99,
    rating: 1,
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "323.png",
    tile: "CS2_186.png"
  },
  {
    name: "Booty Bay Bodyguard",
    artist: "Matt Cavotta",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1140,
    faction: "HORDE",
    flavor:
      "You can hire him... until someone offers him enough gold to turn on you.",
    health: 4,
    howToEarnGolden: "Unlocked at Shaman Level 55.",
    id: "CS2_187",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "27.png",
    tile: "CS2_187.png"
  },

  {
    name: "Elven Archer",
    artist: "Steve Prescott",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 389,
    faction: "HORDE",
    flavor: "Don't bother asking her out on a date.  She'll shoot you down.",
    health: 1,
    howToEarnGolden: "Unlocked at Druid Level 57.",
    id: "CS2_189",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 1,
    targetingArrowText: "Deal 1 damage.",
    text: "Battlecry: Deal 1 damage.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "356.png",
    tile: "CS2_189.png"
  },
  {
    name: "Razorfen Hunter",
    artist: "Clint Langley",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 257,
    faction: "HORDE",
    flavor: "Someone did mess with Tuskerr once.  ONCE.",
    health: 3,
    howToEarnGolden: "Unlocked at Hunter Level 55.",
    id: "CS2_196",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Battlecry: Summon a 1/1 Boar.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "47.png",
    tile: "CS2_196.png"
  },
  {
    name: "Ogre Magi",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 995,
    flavor:
      "Training Ogres in the art of spellcasting is a questionable decision.",
    health: 4,
    howToEarnGolden: "Unlocked at Warlock Level 55.",
    id: "CS2_197",
    mechanics: ["SPELLPOWER"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "659.png",
    tile: "CS2_197.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5d9a5cb1-ce8e-4a02-a900-0e6f3b035b5e",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 5
              },
              {
                property: "text",
                operation: "match",
                minValue: "deal \\$[0-9]* damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Boulderfist Ogre",
    artist: "Brian Despain",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 1686,
    flavor: "'ME HAVE GOOD STATS FOR THE COST'",
    health: 7,
    howToEarnGolden: "Unlocked at Warlock Level 51.",
    id: "CS2_200",
    rarity: "FREE",
    set: 99,
    rating: 2,
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "60.png",
    tile: "CS2_200.png"
  },
  {
    name: "Core Hound",
    artist: "E.M. Gist",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 1687,
    flavor:
      "You don’t tame a Core Hound. You just train it to eat someone else before it eats you.",
    health: 5,
    howToEarnGolden: "Unlocked at Hunter Level 51.",
    id: "CS2_201",
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 1,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "173.png",
    tile: "CS2_201.png"
  },

  {
    name: "Reckless Rocketeer",
    artist: "John Polidora",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 445,
    faction: "HORDE",
    flavor:
      "One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.",
    health: 2,
    howToEarnGolden: "Unlocked at Shaman Level 59.",
    id: "CS2_213",
    mechanics: ["CHARGE"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Charge",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "560.png",
    tile: "CS2_213.png"
  },

  {
    name: "Stormwind Champion",
    artist: "Doug Alexander",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 753,
    faction: "ALLIANCE",
    flavor:
      "When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.",
    health: 6,
    howToEarnGolden: "Unlocked at Paladin Level 59.",
    id: "CS2_222",
    mechanics: ["AURA"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Your other minions have +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "310.png",
    tile: "CS2_222.png"
  },
  {
    name: "Frostwolf Warlord",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 496,
    faction: "HORDE",
    flavor:
      "The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.",
    health: 4,
    howToEarnGolden: "Unlocked at Shaman Level 53.",
    id: "CS2_226",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text:
      "Battlecry: Gain +1/+1 for each other friendly minion on the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "604.png",
    tile: "CS2_226.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "91b0f1d7-c111-4473-8a2b-63a7d51b3334",
            filters: [
              {
                property: "extra",
                operation: "includes",
                minValue: "MIN_GEN"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Ironbark Protector",
    artist: "Dave Allsop",
    attack: 8,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 8,
    dbfId: 205,
    flavor: "I <i>dare</i> you to attack Darnassus.",
    health: 8,
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "CS2_232",
    mechanics: ["TAUNT"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "238.png",
    tile: "CS2_232.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "e70a50bf-5e2d-4a57-a301-7af77330f51e",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "mana crystal"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Shadow Word: Pain",
    artist: "Raymond Swanland",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 1367,
    flavor:
      "A step up from a spell cast by many beginning acolytes: 'Shadow Word: Annoy'.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "CS2_234",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_MAX_ATTACK: 3,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Destroy a minion with 3 or less Attack.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "315.png",
    tile: "CS2_234.png"
  },
  {
    name: "Northshire Cleric",
    artist: "Terese Nielsen",
    attack: 1,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 1650,
    flavor:
      "They help the downtrodden and distressed.  Also they sell cookies.",
    health: 3,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "CS2_235",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Whenever a minion is healed, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "600.png",
    tile: "CS2_235.png"
  },
  {
    name: "Divine Spirit",
    artist: "Jim Pavelec",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 1361,
    flavor: "Double the trouble. Double the fun!",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "CS2_236",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Double a minion's Health.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "554.png",
    tile: "CS2_236.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "4666ab9b-ddef-47d2-9c4b-2444f91c3930",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Inner Fire"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Starving Buzzard",
    artist: "Bernie Kang",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 1241,
    flavor: "If you feed him, he loses his whole <i>identity</i>.",
    health: 2,
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "CS2_237",
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Whenever you summon a Beast, draw a card.",
    type: "MINION",
    extra: ["CARD_DRAW"],
    imageUrl: "101.png",
    tile: "CS2_237.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "40af8089-5f00-4c84-b229-a3cac370c776",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "BEAST"
              },
              { property: "cost", operation: "equals", minValue: 1 }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "21aabc9d-b384-4ec4-a534-406c7b7d0079",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Unleash the Hounds"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Darkscale Healer",
    artist: "Jesper Ejsing",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 582,
    flavor:
      "Healing is just something she does in her free time.  It's more of a hobby really.",
    health: 5,
    howToEarnGolden: "Unlocked at Priest Level 55.",
    id: "DS1_055",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Battlecry: Restore 2 Health to all friendly characters.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "84.png",
    tile: "DS1_055.png"
  },
  {
    name: "Houndmaster",
    artist: "Dan Brereton",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 1003,
    flavor: "'Who let the dogs out?' he asks.  It's rhetorical.",
    health: 3,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "DS1_070",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "FREE",
    referencedTags: ["TAUNT"],
    set: 99,
    rating: 4,
    targetingArrowText: "Give a Beast +2/+2 and Taunt.",
    text: "Battlecry: Give a friendly Beast +2/+2 and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "225.png",
    tile: "DS1_070.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "b098f4f5-611b-49fe-a8d1-569f794df591",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "BEAST"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Timber Wolf",
    artist: "Malcolm Davis",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 606,
    flavor: "Other beasts totally dig hanging out with timber wolves.",
    health: 1,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "DS1_175",
    mechanics: ["AURA"],
    race: "BEAST",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Your other Beasts have +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "86.png",
    tile: "DS1_175.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "0b9d0122-e80e-4533-82d7-27886f9f0916",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Unleash the Hounds"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "6fd3e7f8-3554-402c-b5a6-91c6215f3341",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "BEAST"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tundra Rhino",
    artist: "Lars Grant-West",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 699,
    flavor: "Tundra rhinos are often mistaken for kodos.  Or am I mistaken?",
    health: 5,
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "DS1_178",
    mechanics: ["AURA"],
    race: "BEAST",
    rarity: "FREE",
    referencedTags: ["CHARGE"],
    set: 99,
    rating: 3,
    text: "Your Beasts have Charge.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "162.png",
    tile: "DS1_178.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d100d83d-c585-4668-a972-ec365b7d1f51",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "BEAST"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Tundra Rhino"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Multi-Shot",
    artist: "Benjamin Zhang",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 292,
    flavor: "You see, it's all about <i>throughput</i>.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "DS1_183",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 2 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $3 damage to two random enemy minions.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "407.png",
    tile: "DS1_183.png"
  },
  {
    name: "Tracking",
    artist: "Mauro Cascioli",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 1047,
    flavor:
      "For the person who just cannot decide what card to put into a deck!",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "DS1_184",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text:
      "Look at the top 3 cards of your deck. Draw one and discard the others.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "163.png",
    tile: "DS1_184.png"
  },
  {
    name: "Arcane Shot",
    artist: "Luca Zontini",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 877,
    flavor:
      "Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "DS1_185",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $2 damage.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "167.png",
    tile: "DS1_185.png"
  },
  {
    name: "Mind Blast",
    artist: "Dave Allsop",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 545,
    flavor: "This spell blasts you directly in the MIND.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "DS1_233",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $5 damage to the enemy hero.",
    type: "SPELL",
    extra: ["DAMAGE"],
    imageUrl: "415.png",
    tile: "DS1_233.png"
  },
  {
    name: "Voodoo Doctor",
    artist: "Karl Richardson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 132,
    faction: "HORDE",
    flavor: "Voodoo is an oft-misunderstood art. But it <i>is</i> art.",
    health: 1,
    howToEarnGolden: "Unlocked at Rogue Level 55.",
    id: "EX1_011",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "FREE",
    set: 99,
    rating: 1,
    targetingArrowText: "Restore 2 Health.",
    text: "Battlecry: Restore 2 Health.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "410.png",
    tile: "EX1_011.png"
  },
  {
    name: "Novice Engineer",
    artist: "Karl Richardson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 284,
    faction: "ALLIANCE",
    flavor:
      "'Half of this class will not graduate… since they'll have been turned to chickens.' - Tinkmaster Overspark, teaching Gizmos 101.",
    health: 1,
    howToEarnGolden: "Unlocked at Druid Level 59.",
    id: "EX1_015",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Battlecry: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "435.png",
    tile: "EX1_015.png"
  },
  {
    name: "Shattered Sun Cleric",
    artist: "Doug Alexander",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 608,
    flavor: "They always have a spare flask of Sunwell Energy Drink™!",
    health: 2,
    howToEarnGolden: "Unlocked at Priest Level 53.",
    id: "EX1_019",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 2,
    targetingArrowText: "Give +1/+1.",
    text: "Battlecry: Give a friendly minion +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "434.png",
    tile: "EX1_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "45a5d20e-f054-484b-aba3-979394d4701a",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "extra",
                operation: "includes",
                minValue: "FAST"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dragonling Mechanic",
    artist: "Warren Mahy",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 523,
    faction: "ALLIANCE",
    flavor:
      "She is still working on installing the rocket launcher add-on for Mr. Bitey.",
    health: 4,
    howToEarnGolden: "Unlocked at Mage Level 53.",
    id: "EX1_025",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Battlecry: Summon a 2/1 Mechanical Dragonling.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "472.png",
    tile: "EX1_025.png"
  },
  {
    name: "Acidic Swamp Ooze",
    artist: "Chris Rahn",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 906,
    faction: "ALLIANCE",
    flavor: "Oozes love Flamenco.  Don't ask.",
    health: 2,
    howToEarnGolden: "Unlocked at Rogue Level 57.",
    id: "EX1_066",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Battlecry: Destroy your opponent's weapon.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "74.png",
    tile: "EX1_066.png"
  },
  {
    name: "Warsong Commander",
    artist: "Wei Wang",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 1009,
    flavor:
      "The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.",
    health: 3,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "EX1_084",
    mechanics: ["AURA"],
    rarity: "FREE",
    referencedTags: ["CHARGE"],
    set: 99,
    rating: 1,
    text: "Your Charge minions have +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "193.png",
    tile: "EX1_084.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "0be9f02a-078a-4ea7-a0ce-45b969273f71",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "includes",
                minValue: "CHARGE"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fan of Knives",
    artist: "Andrew Robinson",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 667,
    flavor: "I wouldn't say I LOVE knives, but I'm definitely a fan.",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "EX1_129",
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $1 damage to all enemy minions. Draw a card.",
    type: "SPELL",
    extra: ["AOE", "CARD_DRAW"],
    imageUrl: "378.png",
    tile: "EX1_129.png"
  },
  {
    name: "Innervate",
    artist: "Doug Alexander",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 0,
    dbfId: 254,
    flavor:
      "Some druids still have flashbacks from strangers yelling 'Innervate me!!' at them.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 36.",
    id: "EX1_169",
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Gain 1 Mana Crystal this turn only.",
    type: "SPELL",
    extra: ["TEMPO"],
    imageUrl: "548.png",
    tile: "EX1_169.png"
  },
  {
    name: "Starfire",
    artist: "Alex Horley Orlandelli",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 823,
    flavor: "Balance is important to druids.  This card is perfectly balanced.",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "EX1_173",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Deal $5 damage. Draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "667.png",
    tile: "EX1_173.png"
  },
  {
    name: "Totemic Might",
    artist: "Trent Kaniuga",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 0,
    dbfId: 830,
    flavor: "Totem-stomping is no longer recommended.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "EX1_244",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Give your Totems +2 Health.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "367.png",
    tile: "EX1_244.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "dbe1ee30-4d2a-4224-8648-8197ee769d88",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "TOTEM"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 10,
            id: "a17a73a6-dd33-43ea-8148-dd6979c8e12d",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "TOTEM"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hex",
    artist: "Steve Hui",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 766,
    flavor: "If you Hex a Murloc... it really isn't much of a change, is it?",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 47.",
    id: "EX1_246",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    referencedTags: ["TAUNT"],
    set: 99,
    rating: 3,
    text: "Transform a minion into a 0/1 Frog with Taunt.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "270.png",
    tile: "EX1_246.png"
  },
  {
    name: "Arcane Missiles",
    artist: "Warren Mahy",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 564,
    flavor:
      "You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "EX1_277",
    mechanics: ["ImmuneToSpellpower"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $3 damage randomly split among all enemies.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "589.png",
    tile: "EX1_277.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "bd35248d-304f-4e42-9ca6-7cd10572a078",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "match",
                minValue: "you cast .* spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shiv",
    artist: "Alex Garner",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 573,
    flavor: "Rogues are experts at SHIV-al-ry.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "EX1_278",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $1 damage. Draw a card.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "164.png",
    tile: "EX1_278.png"
  },
  {
    name: "Mortal Coil",
    artist: "Matt Gaser",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 1092,
    flavor:
      "If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.",
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "EX1_302",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $1 damage to a minion. If that kills it, draw a card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "CARD_DRAW"],
    imageUrl: "43.png",
    tile: "EX1_302.png"
  },
  {
    name: "Succubus",
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 592,
    flavor: "Warlocks have it pretty good.",
    health: 3,
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "EX1_306",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Battlecry: Discard a random card.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "208.png",
    tile: "EX1_306.png"
  },
  {
    name: "Soulfire",
    artist: "Raymond Swanland",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 974,
    flavor:
      "Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "EX1_308",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $4 damage. Discard a random card.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "529.png",
    tile: "EX1_308.png"
  },
  {
    name: "Humility",
    artist: "Daren Bader",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 854,
    flavor:
      "This card makes something really damp.  Oh wait.  That's 'Humidity.'",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "EX1_360",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 2,
    text: "Change a minion's Attack to 1.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "STALL"],
    imageUrl: "189.png",
    tile: "EX1_360.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "cd8d7e5a-ca5f-473a-b4a8-9bd0c82930ba",
            filters: [
              {
                property: "name",
                operation: "equals",
                minValue: "Stampeding Kodo"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hand of Protection",
    artist: "Clint Langley",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 727,
    flavor:
      "This spell has been renamed so many times, even paladins don’t know what it should be called anymore.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "EX1_371",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 99,
    rating: 1,
    text: "Give a minion Divine Shield.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "499.png",
    tile: "EX1_371.png"
  },
  {
    name: "Gurubashi Berserker",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 768,
    flavor: "No Pain, No Gain.",
    health: 7,
    howToEarnGolden: "Unlocked at Warlock Level 57.",
    id: "EX1_399",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Whenever this minion takes damage, gain +3 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "624.png",
    tile: "EX1_399.png"
  },
  {
    name: "Whirlwind",
    artist: "Jonboy Meyers",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 636,
    flavor:
      "The way to tell seasoned warriors from novice ones: the novices yell 'wheeeee' while whirlwinding.",
    howToEarn: "Unlocked at Level 6.",
    howToEarnGolden: "Unlocked at Level 32.",
    id: "EX1_400",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Deal $1 damage to ALL minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "161.png",
    tile: "EX1_400.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1bef70a1-8b0c-4b60-83d0-813128b5e028",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "damaged"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Murloc Tidehunter",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 976,
    flavor: "'Death will rise, from the tides!'",
    health: 1,
    howToEarnGolden: "Unlocked at Rogue Level 53.",
    id: "EX1_506",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Battlecry: Summon a 1/1 Murloc Scout.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "357.png",
    tile: "EX1_506.png"
  },
  {
    name: "Grimscale Oracle",
    artist: "Phil Saunders",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 510,
    flavor:
      "These are the brainy murlocs.  It turns out that doesn’t mean much.",
    health: 1,
    howToEarnGolden: "Unlocked at Warlock Level 53.",
    id: "EX1_508",
    race: "MURLOC",
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Your other Murlocs have +1 Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "510.png",
    tile: "EX1_508.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "adf6ee91-f1ba-4039-9942-ae54d61430fb",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "MURLOC"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "73811385-c91c-4e9c-9601-f56bf7e62663",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "murloc"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Hungry Crab"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kill Command",
    artist: "Gabe from Penny Arcade",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 296,
    flavor: "'Kill!', he commanded.",
    howToEarn: "Unlocked at Level 10.",
    howToEarnGolden: "Unlocked at Level 49.",
    id: "EX1_539",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Deal $3 damage. If you control a Beast, deal $5 damage instead.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "488.png",
    tile: "EX1_539.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8831d93e-37e2-41b7-b438-92c6710ccd21",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "equals",
                minValue: "BEAST"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Flametongue Totem",
    artist: "Jonathan Ryder",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 1008,
    flavor:
      "Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.",
    health: 3,
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "EX1_565",
    mechanics: ["ADJACENT_BUFF", "AURA"],
    race: "TOTEM",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Adjacent minions have +2 Attack.",
    type: "MINION",
    extra: ["DAMAGE", "BUFF", "FAST"],
    imageUrl: "390.png",
    tile: "EX1_565.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "61cc7d35-ee2c-4271-9849-84870fc889e6",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 3
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Flametongue Totem"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sap",
    artist: "Scott Altmann",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 461,
    flavor: "Rogues love sappy movies.",
    howToEarn: "Unlocked at Level 1.",
    howToEarnGolden: "Unlocked at Level 40.",
    id: "EX1_581",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Return an enemy minion to your opponent's hand.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "STALL", "TEMPO"],
    imageUrl: "385.png",
    tile: "EX1_581.png"
  },
  {
    name: "Dalaran Mage",
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 175,
    flavor: "You don't see a lot of Dalaran warriors.",
    health: 4,
    howToEarnGolden: "Unlocked at Mage Level 59.",
    id: "EX1_582",
    mechanics: ["SPELLPOWER"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "388.png",
    tile: "EX1_582.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c2e587ba-9955-47b3-9335-ac60733e8d61",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "SPELL"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 5
              },
              {
                property: "text",
                operation: "match",
                minValue: "deal \\$[0-9]* damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Windspeaker",
    artist: "Vance Kovacs",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 178,
    flavor: "Is there anything worse than a Windspeaker with halitosis?",
    health: 3,
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "EX1_587",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "FREE",
    referencedTags: ["WINDFURY"],
    set: 99,
    rating: 1,
    targetingArrowText: "Give Windfury.",
    text: "Battlecry: Give a friendly minion Windfury.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "151.png",
    tile: "EX1_587.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9d7323c9-a403-411d-abb7-56547ae705a8",
            filters: [
              {
                property: "type",
                operation: "equals",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "less than",
                minValue: 5
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Windspeaker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Nightblade",
    artist: "Raymond Swanland",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 670,
    flavor:
      "Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.",
    health: 4,
    howToEarnGolden: "Unlocked at Druid Level 53.",
    id: "EX1_593",
    mechanics: ["BATTLECRY"],
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Battlecry: Deal 3 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE"],
    imageUrl: "184.png",
    tile: "EX1_593.png"
  },
  {
    name: "Shield Block",
    artist: "Michael Komarck",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 1023,
    flavor: "Shields were invented because Face Block is USELESS.",
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 28.",
    id: "EX1_606",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Gain 5 Armor. Draw a card.",
    type: "SPELL",
    extra: ["HEAL", "CARD_DRAW"],
    imageUrl: "493.png",
    tile: "EX1_606.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "34ad041f-8722-4c1a-8531-66aa5bdeb938",
            filters: [
              {
                property: "text",
                operation: "match",
                minValue: "armor"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Plated Beetle"
              },
              {
                property: "name",
                operation: "not equals",
                minValue: "Gluttonous Ooze"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadow Word: Death",
    artist: "Raymond Swanland",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 1363,
    flavor:
      "If you miss, it leaves a lightning-bolt-shaped scar on your target.",
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 43.",
    id: "EX1_622",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_MIN_ATTACK: 5,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Destroy a minion with 5 or more Attack.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "TEMPO"],
    imageUrl: "547.png",
    tile: "EX1_622.png"
  },
  {
    name: "Sacrificial Pact",
    artist: "Jim Nelson",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 0,
    dbfId: 163,
    flavor:
      "This is the reason that Demons never really become friends with Warlocks.",
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 15.",
    id: "NEW1_003",
    playRequirements: {
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_RACE: 15
    },
    rarity: "FREE",
    set: 99,
    rating: 1,
    text: "Destroy a Demon. Restore #5 Health to your hero.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "348.png",
    tile: "NEW1_003.png"
  },
  {
    name: "Vanish",
    artist: "Sean O’Daniels",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 196,
    howToEarn: "Unlocked at Level 8.",
    howToEarnGolden: "Unlocked at Level 23.",
    id: "NEW1_004",
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Return all minions to their owner's hand.",
    type: "SPELL",
    extra: ["AOE", "STALL"],
    imageUrl: "658.png",
    tile: "NEW1_004.png"
  },
  {
    name: "Kor'kron Elite",
    artist: "Alex Horley Orlandelli",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 28,
    flavor:
      "The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.",
    health: 3,
    howToEarn: "Unlocked at Level 4.",
    howToEarnGolden: "Unlocked at Level 44.",
    id: "NEW1_011",
    mechanics: ["CHARGE"],
    rarity: "FREE",
    set: 99,
    rating: 3,
    text: "Charge",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "130.png",
    tile: "NEW1_011.png"
  },
  {
    name: "Animal Companion",
    artist: "Wei Wang",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 437,
    entourage: ["NEW1_032", "NEW1_033", "NEW1_034"],
    flavor:
      "You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.",
    howToEarn: "Unlocked at Level 2.",
    howToEarnGolden: "Unlocked at Level 45.",
    id: "NEW1_031",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "FREE",
    set: 99,
    rating: 4,
    text: "Summon a random Beast Companion.",
    type: "SPELL",
    extra: ["TEMPO"],
    imageUrl: "578.png",
    tile: "NEW1_031.png"
  }
];
