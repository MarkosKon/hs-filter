export const theGrandTournament = [
  {
    name: "Flame Lance",
    artist: "Nutthapon Petchthai",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 2539,
    flavor:
      "It's on the rack next to ice lance, acid lance, and English muffin lance.",
    id: "AT_001",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Deal $8 damage to a minion.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "22302.png",
    tile: "AT_001.png"
  },
  {
    name: "Effigy",
    artist: "Tooth",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2541,
    flavor: "Burning man, brah.",
    id: "AT_002",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text:
      "Secret: When a friendly minion dies, summon a random minion with the same Cost.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "22267.png",
    tile: "AT_002.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "9bc9edd8-57e9-47c8-ac90-a6dbbc50710c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 3
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
    name: "Fallen Hero",
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 2545,
    flavor: "And he can't get up.",
    health: 2,
    id: "AT_003",
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Your Hero Power deals 1 extra damage.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL", "FAST"],
    imageUrl: "22268.png",
    tile: "AT_003.png"
  },
  {
    name: "Arcane Blast",
    artist: "Gabor Szikszai",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 2572,
    flavor: "Now with 100% more blast!",
    id: "AT_004",
    mechanics: ["RECEIVES_DOUBLE_SPELLDAMAGE_BONUS"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    referencedTags: ["SPELLPOWER"],
    set: 4,
    rating: 4,
    text:
      "Deal $2 damage to a minion. This spell gets double bonus from Spell Damage.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "22358.png",
    tile: "AT_004.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "b94d63c1-6bc9-4a9f-996e-7ff93d390d63",
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
    name: "Polymorph: Boar",
    artist: "Mike Sass",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2542,
    flavor: "It's always Huffer.",
    id: "AT_005",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["CHARGE"],
    set: 4,
    rating: 2,
    text: "Transform a minion into a 4/2 Boar with Charge.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "22396.png",
    tile: "AT_005.png"
  },
  {
    name: "Dalaran Aspirant",
    artist: "Dan Scott",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 2549,
    flavor: "Is he aspiring or inspiring?  Make up your mind!",
    health: 5,
    id: "AT_006",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    referencedTags: ["SPELLPOWER"],
    set: 4,
    rating: 3,
    text: "Inspire: Gain Spell Damage +1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22359.png",
    tile: "AT_006.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3541d456-1764-49c2-a11b-eab707356efe",
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
    name: "Spellslinger",
    artist: "Andrew Hou",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 2571,
    flavor:
      "Does he sling spells, or do his spells linger about.  Who can say?",
    health: 4,
    id: "AT_007",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Battlecry: Add a random spell to each player's hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22299.png",
    tile: "AT_007.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c4a19962-24e0-42e4-bed1-c4fab3a45fba",
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
    name: "Coldarra Drake",
    artist: "Christopher Moeller",
    attack: 6,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 2544,
    flavor:
      "The Grand Tournament has a 'No dragons allowed' policy, but it's rarely enforced.",
    health: 6,
    id: "AT_008",
    race: "DRAGON",
    rarity: "EPIC",
    set: 4,
    rating: 2,
    text: "You can use your Hero Power any number of times.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22261.png",
    tile: "AT_008.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "07e5dd9d-ce9f-41a5-a04a-7abfca28ddbe",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Rhonin",
    artist: "Zoltan & Gabor",
    attack: 7,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 8,
    dbfId: 2546,
    elite: true,
    flavor: "A masterless shamurai.",
    health: 7,
    id: "AT_009",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text: "Deathrattle: Add 3 copies of Arcane Missiles to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22343.png",
    tile: "AT_009.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "a876a4c5-7988-4d30-a7ec-7ef7b99dcb09",
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
    name: "Ram Wrangler",
    artist: "Brandon Kitkouski",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 2552,
    flavor: "Not getting trampled is really the trick here.",
    health: 3,
    id: "AT_010",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Battlecry: If you have a Beast, summon a random Beast.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "22344.png",
    tile: "AT_010.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ebb338e8-7abc-4826-8a5b-85c214191533",
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
    name: "Holy Champion",
    artist: "Alex Garner",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 2555,
    flavor:
      "She really likes seeing people get better.  That's why she hurts them in the first place.",
    health: 5,
    id: "AT_011",
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Whenever a character is healed, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22287.png",
    tile: "AT_011.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "9bd7070d-e59d-401a-af97-80eb3adfdf4d",
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
    name: "Spawn of Shadows",
    artist: "Dave Allsop",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 2551,
    flavor: "What did you expect to happen?  He's a Spawn.  Of Shadows.",
    health: 4,
    id: "AT_012",
    mechanics: ["INSPIRE"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Inspire: Deal 4 damage to each hero.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "22357.png",
    tile: "AT_012.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f9af331f-23cc-44e0-bd90-f98a33255fc6",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "DAMAGE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Power Word: Glory",
    artist: "Mike Sass",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 2568,
    flavor:
      "The promise of glory is a powerful tool to get minions to do your bidding.  Only slightly less powerful than the promise of an ice cream bar!",
    id: "AT_013",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 1,
    text:
      "Choose a minion. Whenever it attacks, restore 4 Health to your hero.",
    type: "SPELL",
    extra: ["BUFF", "HEAL"],
    imageUrl: "22385.png",
    tile: "AT_013.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "2e1b5499-876c-40f5-956b-966b53dbeff3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "character.*healed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadowfiend",
    artist: "Warren Mahy",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 2566,
    flavor: "Hopes to be promoted to 'Shadowfriend' someday.",
    health: 3,
    id: "AT_014",
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "Whenever you draw a card, reduce its Cost by (1).",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22356.png",
    tile: "AT_014.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "92480b1d-4f86-451c-a515-62bf162197ae",
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
    name: "Convert",
    artist: "Dan Dos Santos",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2563,
    flavor: "'Are you interested in... HEALTH benefits?!'",
    id: "AT_015",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "Put a copy of an enemy minion into your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "22379.png",
    tile: "AT_015.png"
  },
  {
    name: "Confuse",
    artist: "Sean O'Danield",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2564,
    flavor: "This minion is really powerful!",
    id: "AT_016",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Swap the Attack and Health of all minions.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "22327.png",
    tile: "AT_016.png"
  },
  {
    name: "Twilight Guardian",
    artist: "Slawomir Maniak",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2569,
    flavor:
      "A result of magical experiments carried out by the Black Dragonflight, it's not his fault that he's a vicious killer.",
    health: 6,
    id: "AT_017",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "EPIC",
    referencedTags: ["TAUNT"],
    set: 4,
    rating: 1,
    text: "Battlecry: If you're holding a Dragon, gain +1 Attack and Taunt.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22351.png",
    tile: "AT_017.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "94e28ed2-6b7c-4318-8666-14f78c8e4913",
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
    name: "Confessor Paletress",
    artist: "Chris Rahn",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 2556,
    elite: true,
    flavor:
      "She sees into your past and makes you face your fears.  Most common fear:  Getting Majordomo out of Sneed's Old Shredder.",
    health: 4,
    id: "AT_018",
    mechanics: ["INSPIRE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text: "Inspire: Summon a random Legendary minion.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22368.png",
    tile: "AT_018.png"
  },
  {
    name: "Dreadsteed",
    artist: "Alex Horley Orlandelli",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 2822,
    flavor:
      "Crescendo himself summoned this steed, riding it to victory in the Grand Tournament.  Wherever he rides, an army of riders ride behind him, supporting the legendary champion.",
    health: 1,
    id: "AT_019",
    mechanics: ["DEATHRATTLE"],
    race: "DEMON",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Deathrattle: At the end  of the turn, summon a Dreadsteed.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22337.png",
    tile: "AT_019.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "b619f96f-e3a2-4bc3-a8ac-cd44265b182c",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Power Overwhelming"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "e51150a1-141e-47f3-9a67-545f9552b16a",
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
    name: "Fearsome Doomguard",
    artist: "Anton Zemskov",
    attack: 6,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 7,
    dbfId: 2624,
    flavor:
      "They were originally called Cuddleguards, but they were not inspiring the proper amount of fear.",
    health: 8,
    id: "AT_020",
    race: "DEMON",
    rarity: "COMMON",
    set: 4,
    rating: 2,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22391.png",
    tile: "AT_020.png"
  },
  {
    name: "Tiny Knight of Evil",
    artist: "Raymond Swanland",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2777,
    flavor: "'No, no, no. I asked for a tiny JESTER of evil.'",
    health: 2,
    id: "AT_021",
    race: "DEMON",
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Whenever you discard a card, gain +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "22386.png",
    tile: "AT_021.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "1dc03d83-bb4a-413d-aa74-3e7c480f9911",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Tiny Knight of Evil"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fist of Jaraxxus",
    artist: "Matt Dixon",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 2628,
    flavor: "* Not actually Jaraxxus' fist.",
    id: "AT_022",
    mechanics: ["InvisibleDeathrattle"],
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "When you play or discard this, deal $4 damage to a random enemy.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "22332.png",
    tile: "AT_022.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "10cebcb5-45a6-48b3-84ae-3004c7e3525b",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Fist of Jaraxxus"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Void Crusher",
    artist: "Skan Srisuwan",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 2537,
    flavor: "We like to call him 'Wesley'.",
    health: 4,
    id: "AT_023",
    mechanics: ["INSPIRE"],
    race: "DEMON",
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "Inspire: Destroy a random minion for each player.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22387.png",
    tile: "AT_023.png"
  },
  {
    name: "Demonfuse",
    artist: "Kevin Chen",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2535,
    flavor: "Very dangerous when attached to a demonbomb.",
    id: "AT_024",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_RACE: 15
    },
    rarity: "COMMON",
    set: 4,
    rating: 1,
    text: "Give a Demon +3/+3. Give your opponent a Mana Crystal.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "22300.png",
    tile: "AT_024.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "df80bd94-345a-4682-b0c6-3aa59ff8a809",
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
    name: "Dark Bargain",
    artist: "Paul Mafayon",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 2632,
    flavor: "A prime example of lose-lose negotiating.",
    id: "AT_025",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 2 },
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Destroy 2 random enemy minions. Discard 2 random cards.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "SMALL_REMOVAL"],
    imageUrl: "22388.png",
    tile: "AT_025.png"
  },
  {
    name: "Wrathguard",
    artist: "Sojin Hwang",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 2623,
    flavor:
      "After playing against 5 Annoy-O-Trons, any normal guard will become a Wrathguard.",
    health: 3,
    id: "AT_026",
    race: "DEMON",
    rarity: "COMMON",
    set: 4,
    rating: 1,
    text:
      "Whenever this minion takes damage, also deal that amount to your hero.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "22304.png",
    tile: "AT_026.png"
  },
  {
    name: "Wilfred Fizzlebang",
    artist: "Tooth",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 2621,
    elite: true,
    flavor:
      "He can summon anything, even a FEARSOME DOOMGUARD*. *He's pretty sure this is going to work out.",
    health: 4,
    id: "AT_027",
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    text: "Cards you draw from your Hero Power cost (0).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22288.png",
    tile: "AT_027.png"
  },
  {
    name: "Shado-Pan Rider",
    artist: "Ryan Metcalf",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 2765,
    flavor:
      "He needed a break after that business in the Vale of Eternal Blossoms. Naturally, he chose to spend his vacation in an icy snowscape killing monsters.",
    health: 7,
    id: "AT_028",
    mechanics: ["COMBO"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Combo: Gain +3 Attack.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "22305.png",
    tile: "AT_028.png"
  },
  {
    name: "Buccaneer",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 2715,
    flavor: "The best part of buccaneering is the pants.",
    health: 1,
    id: "AT_029",
    race: "PIRATE",
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Whenever you equip a weapon, give it +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "22347.png",
    tile: "AT_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "84822a79-354d-481a-80c8-485a527b5411",
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
                minValue: "Buccaneer"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Undercity Valiant",
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 2767,
    flavor: "Almost went to play for Stormwind before signing with Undercity.",
    health: 2,
    id: "AT_030",
    mechanics: ["COMBO"],
    playRequirements: { REQ_TARGET_FOR_COMBO: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 3,
    targetingArrowText: "Deal 1 damage.",
    text: "Combo: Deal 1 damage.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22371.png",
    tile: "AT_030.png"
  },
  {
    name: "Cutpurse",
    artist: "Alex Horley Orlandelli",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 2766,
    flavor: "He has a giant collection of purses now.  One for every outfit!",
    health: 2,
    id: "AT_031",
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Whenever this minion attacks a hero, add the Coin to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22336.png",
    tile: "AT_031.png"
  },
  {
    name: "Shady Dealer",
    artist: "Tooth",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 2768,
    flavor: "I have great deal for you... for 4 damage to your face!",
    health: 3,
    id: "AT_032",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Battlecry: If you have a Pirate, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22348.png",
    tile: "AT_032.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8c39cd57-46e7-411c-870c-a071e41930db",
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
    name: "Burgle",
    artist: "Matt Dixon",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 2770,
    flavor: "Yoink!",
    id: "AT_033",
    rarity: "RARE",
    set: 4,
    rating: 2,
    text:
      "Add 2 random class cards to your hand <i>(from your opponent's class)</i>.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "22321.png",
    tile: "AT_033.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "3f8cc71f-54be-4943-ab79-c84d02b69f35",
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
            id: "ce774243-3939-4f1b-ae73-9e04b827580d",
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
            id: "2c701a60-c1d3-431f-9dd8-eebd441fcb84",
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
    name: "Poisoned Blade",
    artist: "Nutthapon Petchthai",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 2763,
    durability: 3,
    flavor:
      "How much more poisoned can a blade get?  The answer is a lot.  A lot more poisoned.",
    id: "AT_034",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text:
      "Your Hero Power gives this weapon +1 Attack instead of replacing it.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "22273.png",
    tile: "AT_034.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3721307c-954a-46dc-9b78-3529aca3a75e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Beneath the Grounds",
    artist: "Daren Bader",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 2587,
    flavor:
      "Can you hold these eggs for just a second?  I promise they're not full of giant enraged undead spider things.",
    id: "AT_035",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text:
      "Shuffle 3 Ambushes into your opponent's deck. When drawn, you summon a 4/4 Nerubian.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "22397.png",
    tile: "AT_035.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "401d6fd5-270a-4c52-81fa-aa57f41dfc67",
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
    name: "Anub'arak",
    artist: "Eric Braddock",
    attack: 8,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 9,
    dbfId: 2586,
    elite: true,
    flavor:
      "Was actually a pretty nice guy before, you know, the whole Lich King thing.",
    health: 4,
    id: "AT_036",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 2,
    text: "Deathrattle: Return this to your hand and summon a 4/4 Nerubian.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22324.png",
    tile: "AT_036.png"
  },
  {
    name: "Living Roots",
    artist: "Dan Brereton",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 2792,
    flavor: "2 out of 2 saplings recommend that you summon the saplings.",
    id: "AT_037",
    mechanics: ["CHOOSE_ONE"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Choose One - Deal $2 damage; or Summon two 1/1 Saplings.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "MIN_GEN", "FAST"],
    imageUrl: "22329.png",
    tile: "AT_037.png"
  },
  {
    name: "Darnassus Aspirant",
    artist: "Laurel Austin",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 2782,
    flavor: "She loves mana crystals, she hates mana crystals.   So fickle!",
    health: 3,
    id: "AT_038",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "RARE",
    set: 4,
    rating: 4,
    text:
      "Battlecry: Gain an empty Mana Crystal. Deathrattle: Lose a Mana Crystal.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22303.png",
    tile: "AT_038.png"
  },
  {
    name: "Savage Combatant",
    artist: "Alex Pascenko",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 2780,
    flavor:
      "Maybe if you whistle a tune it will soothe him.  Yeah...  Try that.",
    health: 4,
    id: "AT_039",
    mechanics: ["INSPIRE"],
    race: "BEAST",
    rarity: "RARE",
    set: 4,
    rating: 4,
    text: "Inspire: Give your hero +2 Attack this turn.",
    type: "MINION",
    extra: ["SMALL_REMOVAL", "FAST"],
    imageUrl: "22293.png",
    tile: "AT_039.png"
  },
  {
    name: "Wildwalker",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 2786,
    flavor:
      "She was born to be something.  She is just not quite sure what yet...",
    health: 4,
    id: "AT_040",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Battlecry: Give a friendly Beast +3 Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22361.png",
    tile: "AT_040.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3ec4657d-260d-48de-a0ea-793cf7e6aceb",
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
    name: "Knight of the Wild",
    artist: "Ralph Horsley",
    attack: 6,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 2788,
    flavor:
      "He gets a discount on the tournament entry fee because he is his own horse.",
    health: 6,
    id: "AT_041",
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "Whenever you summon a Beast, reduce the Cost of this card by (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22360.png",
    tile: "AT_041.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "c7aaaebb-b789-4934-979e-cd4d3253000e",
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
    name: "Druid of the Saber",
    artist: "Arthur Gimaldinov",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 2783,
    flavor:
      "That's saberTEETH, not like curved pirate blades.  That's a different kind of druid.  Druid of the Curved Pirate Blades.",
    health: 1,
    id: "AT_042",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    referencedTags: ["CHARGE", "STEALTH"],
    set: 4,
    rating: 4,
    text:
      "Choose One - Transform into a 2/1 with Charge; or a 3/2 with Stealth.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22307.png",
    tile: "AT_042.png"
  },
  {
    name: "Astral Communion",
    artist: "Christopher Moeller",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 2785,
    flavor: "Hey!  Moon!  Can I have some mana crystals?",
    id: "AT_043",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Gain 10 Mana Crystals. Discard your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "22334.png",
    tile: "AT_043.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "ca4aa420-08b3-4572-8e32-5fc769a7c5f2",
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
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "85f7978e-7d6c-44ae-b796-59ca23780ce4",
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
    name: "Mulch",
    artist: "Dan Scott",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 2793,
    flavor: "Is this a noun or a verb?  We will never know.",
    id: "AT_044",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 4,
    rating: 4,
    text: "Destroy a minion. Add a random minion to your opponent's hand.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "22383.png",
    tile: "AT_044.png"
  },
  {
    name: "Aviana",
    artist: "Velvet Engine",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 10,
    dbfId: 2796,
    elite: true,
    flavor: "Call her 'Tweety'.  She'll find it real funny.  I PROMISE.",
    health: 5,
    id: "AT_045",
    mechanics: ["AURA"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 2,
    text: "Your minions cost (1).",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "22325.png",
    tile: "AT_045.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3c8cdc7b-dd5c-4bf0-a2f2-46fa0cb353a3",
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
    name: "Tuskarr Totemic",
    artist: "Eva Widermann",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 2513,
    flavor: "Turns out the tuskarr aren't real choosy about their totems.",
    health: 2,
    id: "AT_046",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Battlecry: Summon a random basic Totem.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "22270.png",
    tile: "AT_046.png"
  },
  {
    name: "Draenei Totemcarver",
    artist: "RK Post",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2613,
    flavor:
      "It's nice to find a real craftsman in this day and age of mass-produced totems.",
    health: 4,
    id: "AT_047",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Battlecry: Gain +1/+1 for each friendly Totem.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22269.png",
    tile: "AT_047.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4daa760c-69fd-415f-b995-7592984f6cd3",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "TOTEM"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Healing Wave",
    artist: "Luca Zontini",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 2612,
    flavor:
      "Favored by shaman who study the art of restoration and healing, this spell would feel smug, if it had feelings.",
    id: "AT_048",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 4,
    rating: 3,
    text:
      "Restore #7 Health. Reveal a minion in each deck. If yours costs more, Restore #14 instead.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "22340.png",
    tile: "AT_048.png"
  },
  {
    name: "Thunder Bluff Valiant",
    artist: "Sean McNally",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 2615,
    flavor:
      "Allowing totems to attack is not cheating.  I mean, there isn't anything in the rule books about it.",
    health: 6,
    id: "AT_049",
    mechanics: ["INSPIRE"],
    rarity: "RARE",
    set: 4,
    rating: 4,
    text: "Inspire: Give your Totems +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "BUFF", "FAST"],
    imageUrl: "22271.png",
    tile: "AT_049.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "087cd807-5e49-4675-940e-dd2a4e970874",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "race",
                operation: "EQUALS",
                minValue: "TOTEM"
              }
            ]
          },
          {
            minCards: 8,
            maxCards: 10,
            id: "b633a1df-0a2c-4aea-a5c5-62286395f53c",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "TOTEM"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Charged Hammer",
    artist: "Peet Cooper",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 2617,
    durability: 4,
    flavor: "You can only pick it up if you are worthy.",
    id: "AT_050",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "Deathrattle: Your Hero Power becomes 'Deal 2 damage.'",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "22331.png",
    tile: "AT_050.png"
  },
  {
    name: "Elemental Destruction",
    artist: "Tyler Walpole",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 2620,
    flavor:
      "I'm not a shaman or anything, but isn't Elemental Destruction the opposite of what they want to do?",
    id: "AT_051",
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "Deal $4-$5 damage to all minions. Overload: (5)",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "22345.png",
    tile: "AT_051.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "bdc3f657-a709-4bf4-b6ec-aee7c3c2a4a5",
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
    name: "Totem Golem",
    artist: "Steve Prescott",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2610,
    flavor: "What happens when you glue a buncha totems together.",
    health: 4,
    id: "AT_052",
    mechanics: ["OVERLOAD"],
    overload: 1,
    race: "TOTEM",
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Overload: (1)",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "22265.png",
    tile: "AT_052.png"
  },
  {
    name: "Ancestral Knowledge",
    artist: "Zoltan & Gabor",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 2514,
    flavor: "MOMMMMMYYYYYYYYY!!!",
    id: "AT_053",
    mechanics: ["OVERLOAD"],
    overload: 2,
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Draw 2 cards. Overload: (2)",
    type: "SPELL",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "22319.png",
    tile: "AT_053.png"
  },
  {
    name: "The Mistcaller",
    artist: "Wei Wang",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 2618,
    elite: true,
    flavor:
      "Calling the mist doesn't sound all that great.  'Ooooh, it is slightly damp now!'",
    health: 4,
    id: "AT_054",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 2,
    text: "Battlecry: Give all minions in your hand and deck +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22349.png",
    tile: "AT_054.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "8f547cdf-1efd-4dab-8605-97d800af6b60",
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
    name: "Flash Heal",
    artist: "Marcelo Vignali",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 2582,
    flavor: "Flash!  Ahhhhhhh~",
    id: "AT_055",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Restore #5 Health.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "22328.png",
    tile: "AT_055.png"
  },
  {
    name: "Powershot",
    artist: "Jonboy Meyers",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 2638,
    flavor: "pow POW pow",
    id: "AT_056",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Deal $2 damage to a minion and the minions next to it.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "22384.png",
    tile: "AT_056.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "d681f7a0-e595-4cee-a93c-5b1328a9f3e0",
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
    name: "Stablemaster",
    artist: "Tyson Murphy",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 2639,
    flavor:
      "Takes way better care of her pets than her brother, Unstablemaster.",
    health: 2,
    id: "AT_057",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "EPIC",
    referencedTags: ["IMMUNE"],
    set: 4,
    rating: 1,
    targetingArrowText: "Grant Immune this turn.",
    text: "Battlecry: Give a friendly Beast Immune this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22365.png",
    tile: "AT_057.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6b184742-db40-433f-a50c-973fe9ea629c",
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
    name: "King's Elekk",
    artist: "James Zhang",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2635,
    flavor: "Elekk jousting is AWESOME.",
    health: 2,
    id: "AT_058",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, draw it.",
    type: "MINION",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "22370.png",
    tile: "AT_058.png"
  },
  {
    name: "Brave Archer",
    artist: "Eva Widermann",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 2642,
    flavor: "This is a 'bearly' concealed reference.",
    health: 1,
    id: "AT_059",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Inspire: If your hand is empty, deal 2 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22310.png",
    tile: "AT_059.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "b4dcac50-9112-4fdb-a0ad-d27abbbb8018",
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
    name: "Bear Trap",
    artist: "Richard Wright",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2641,
    flavor:
      "You'll never guess what's in that conveniently bear-sized, bear-smelling box.",
    id: "AT_060",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 4,
    rating: 3,
    text: "Secret: After your hero is attacked, summon a 3/3 Bear with Taunt.",
    type: "SPELL",
    extra: ["TEMPO", "FAST"],
    imageUrl: "22364.png",
    tile: "AT_060.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "28e15147-43e5-4fef-b259-a07ff7e80c51",
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
    name: "Lock and Load",
    artist: "Matt Dixon",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 2484,
    flavor:
      "Rexxar narrowed his eyes, grabbed his machine gun, and said: 'It's go time.  Lock and load.' This card pays homage to that special moment.",
    id: "AT_061",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text:
      "Each time you cast a spell this turn, add a random Hunter card to your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "22258.png",
    tile: "AT_061.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "4f91453b-6f7b-40d4-b3e9-ba72c5bfdf79",
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
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Lock and Loadsss"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Ball of Spiders",
    artist: "Skan Srisuwan",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 2483,
    flavor: "'THEY'RE EVERYWHERE GET THEM OFF!!!' - Everyone",
    id: "AT_062",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Summon three 1/1 Webspinners.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "22272.png",
    tile: "AT_062.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "453585f7-0b41-4d3d-abd7-0e3b1721a2d8",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "STALL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Acidmaw",
    artist: "Andrew Hou",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 2633,
    elite: true,
    flavor:
      "With the help of his trusty sidekick Dreadscale, the giant jormungar Acidmaw is ready to face any knight!",
    health: 2,
    id: "AT_063",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    text: "Whenever another minion takes damage, destroy it.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22393.png",
    tile: "AT_063.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "2bd0298b-7c00-4355-bc7c-754ba0e418ef",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Unleash the Hounds"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "14a7b1b3-0bdd-4c96-9af9-5f39fc679e68",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Dreadscale"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dreadscale",
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 2634,
    elite: true,
    flavor: "Let's be clear about this:  ACIDMAW is the sidekick.",
    health: 2,
    id: "AT_063t",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text: "At the end of your turn, deal 1 damage to all other minions.",
    type: "MINION",
    extra: ["AOE", "FAST"],
    imageUrl: "22389.png",
    tile: "AT_063t.png"
  },
  {
    name: "Bash",
    artist: "Dany Orizio",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2729,
    flavor:
      "You might think bashing doesn't take a lot of practice.  It doesn't.",
    id: "AT_064",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Deal $3 damage. Gain 3 Armor.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HEAL"],
    imageUrl: "22309.png",
    tile: "AT_064.png"
  },
  {
    name: "King's Defender",
    artist: "Michael Franchina",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2756,
    durability: 2,
    flavor: "'King's Attacker' is a shield.  Funny, huh?",
    id: "AT_065",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 4,
    rating: 3,
    text: "Battlecry: If you have a minion with Taunt, gain +1 Durability.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "FAST"],
    imageUrl: "22286.png",
    tile: "AT_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "59d3d2ed-8719-4948-8ab6-dec655c18b6a",
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
          }
        ]
      }
    ]
  },
  {
    name: "Orgrimmar Aspirant",
    artist: "Hideaki Takamura",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 2711,
    flavor: "'Four out of three orcs struggle with math.' - Angry Zurge",
    health: 3,
    id: "AT_066",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Inspire: Give your weapon +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22395.png",
    tile: "AT_066.png"
  },
  {
    name: "Magnataur Alpha",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 2753,
    flavor: "Playing him also gets you into the Magnataur Beta.",
    health: 3,
    id: "AT_067",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Also damages the minions next to whomever he attacks.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22376.png",
    tile: "AT_067.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "a8c6be82-836e-4d70-8e50-eec7f29acedd",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Charge"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bolster",
    artist: "Mishi McCaig",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 2754,
    flavor: "The best offense is a good defense.",
    id: "AT_068",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 4,
    rating: 1,
    text: "Give your Taunt minions +2/+2.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "22320.png",
    tile: "AT_068.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "7adeaf62-8bc1-46d8-813f-644265877187",
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
          }
        ]
      }
    ]
  },
  {
    name: "Sparring Partner",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 2733,
    flavor: "Come at me, bro.",
    health: 2,
    id: "AT_069",
    mechanics: ["BATTLECRY", "TAUNT"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 4,
    rating: 2,
    targetingArrowText: "Grant Taunt.",
    text: "Taunt Battlecry: Give a minion Taunt.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22354.png",
    tile: "AT_069.png"
  },
  {
    name: "Skycap'n Kragg",
    artist: "Alex Horley Orlandelli",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2757,
    elite: true,
    flavor:
      "What's more boss than riding a parrot with a jawbone for a shoulderpad while wielding a giant hook-lance-thing and wearing a pirate hat?  NOTHING.",
    health: 6,
    id: "AT_070",
    mechanics: ["CHARGE"],
    race: "PIRATE",
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    text: "Charrrrrge Costs (1) less for each friendly Pirate.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22260.png",
    tile: "AT_070.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "cfafbb5d-c7f9-453d-84bd-c1fc267f8409",
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
    name: "Alexstrasza's Champion",
    artist: "Evgeniy Zagumennyy",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 2758,
    flavor:
      "'Put more spikes on her.  No, more spikes.  What part of 'more spikes' do you not understand?  MORE SPIKES!' - Alexstrasza",
    health: 3,
    id: "AT_071",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["CHARGE"],
    set: 4,
    rating: 2,
    text: "Battlecry: If you're holding a Dragon, gain +1 Attack and Charge.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22333.png",
    tile: "AT_071.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d16cd577-1fa7-41a5-a2e3-54c126f62bee",
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
    name: "Varian Wrynn",
    artist: "Wei Wang",
    attack: 7,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 10,
    dbfId: 2760,
    elite: true,
    flavor:
      "Leader of the Alliance!  Father of Anduin!  Also he likes to play Arena, and he averages 12 wins.",
    health: 7,
    id: "AT_072",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text:
      "Battlecry: Draw 3 cards. Put any minions you drew directly into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "TEMPO"],
    imageUrl: "22342.png",
    tile: "AT_072.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "dbadeac6-ae21-4864-8f58-dc52f37c4be6",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
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
    name: "Competitive Spirit",
    artist: "Jim Nelson",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 2648,
    flavor:
      "Competition can be an inspiration to improve oneself.  Or kill all the competitors.",
    id: "AT_073",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Secret: When your turn starts, give your minions +1/+1.",
    type: "SPELL",
    extra: ["SECRET", "FAST"],
    imageUrl: "22363.png",
    tile: "AT_073.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "54a1c43a-887c-4969-b286-8482ba3df981",
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
    name: "Seal of Champions",
    artist: "Jonboy Meyers",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 2717,
    flavor: "'Arf! Arf! Arf!' - Seal of Champions",
    id: "AT_074",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["DIVINE_SHIELD"],
    set: 4,
    rating: 3,
    text: "Give a minion +3 Attack and Divine Shield.",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "22373.png",
    tile: "AT_074.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "d3d81621-92bc-427a-b6f7-ac7c5a02988c",
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
    name: "Warhorse Trainer",
    artist: "Zoltan & Gabor",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 2515,
    flavor: "He doesn't even get Sundays off.  Every day he's hostling.",
    health: 4,
    id: "AT_075",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Your Silver Hand Recruits have +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22330.png",
    tile: "AT_075.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "f3693573-8e74-4728-b243-98ad9184c263",
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
    name: "Murloc Knight",
    artist: "Sam Nielson",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 2655,
    flavor: "Hee hee!  Look at his cute little feet.",
    health: 4,
    id: "AT_076",
    mechanics: ["INSPIRE"],
    race: "MURLOC",
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Inspire: Summon a random Murloc.",
    type: "MINION",
    extra: ["VALUE", "MIN_GEN", "FAST"],
    imageUrl: "22362.png",
    tile: "AT_076.png"
  },
  {
    name: "Argent Lance",
    artist: "Joe Wilson",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 2720,
    durability: 2,
    flavor:
      "The stripes make it look like a candy cane, but we recommend against licking it.",
    id: "AT_077",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 4,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, +1 Durability.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "FAST"],
    imageUrl: "22316.png",
    tile: "AT_077.png"
  },
  {
    name: "Enter the Coliseum",
    artist: "Mauricio Herrera",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 2654,
    flavor:
      "You have to get past the vendors first.  So many are lost to shopping...",
    id: "AT_078",
    rarity: "EPIC",
    set: 4,
    rating: 2,
    text: "Destroy all minions except each player's highest Attack minion.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "22380.png",
    tile: "AT_078.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5fd37b86-3fcf-4353-870b-4bc9b9d65acd",
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
    name: "Mysterious Challenger",
    artist: "Zoltan Boros",
    attack: 6,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 2726,
    flavor:
      "He may sound surly and antisocial, but he's actually just really shy.",
    health: 6,
    id: "AT_079",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["SECRET"],
    set: 4,
    rating: 3,
    text:
      "Battlecry: Put one of each Secret from your deck into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22394.png",
    tile: "AT_079.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "490b3d17-6fd6-49d8-a0bc-b6462b8e78c2",
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
                  "Eater of Secrets",
                  "Kezan Mystic",
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
    name: "Garrison Commander",
    artist: "Jesper Ejsing",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2517,
    flavor:
      "He'll never admit it, but he pushes you hard because he really cares about you.",
    health: 3,
    id: "AT_080",
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "You can use your Hero Power twice a turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22274.png",
    tile: "AT_080.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "930cc451-e8a5-40fe-b343-f770734f5a19",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Eadric the Pure",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 2727,
    elite: true,
    flavor: "Nobody rocks a monocle like Eadric.",
    health: 7,
    id: "AT_081",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text: "Battlecry: Change all enemy minions' Attack to 1.",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL", "STALL"],
    imageUrl: "22313.png",
    tile: "AT_081.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "8cf1366f-caec-4ed1-b2ff-8824ae4d8854",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Stampeding Kodo"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lowly Squire",
    artist: "Ron Spears",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2486,
    flavor: "But not the lowliest!",
    health: 2,
    id: "AT_082",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Inspire: Gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22263.png",
    tile: "AT_082.png"
  },
  {
    name: "Dragonhawk Rider",
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2533,
    flavor: "Check it out.  You can do barrel rolls on this thing.",
    health: 3,
    id: "AT_083",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    referencedTags: ["WINDFURY"],
    set: 4,
    rating: 2,
    text: "Inspire: Gain Windfury this turn.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22369.png",
    tile: "AT_083.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "c5195359-e64f-4652-bb1e-704ac4c156a0",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "beast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lance Carrier",
    artist: "Tyson Murphy",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2577,
    flavor:
      "Lance Carrier is an obscure entry level position in orcish armies.  A mystery, since orcs don't generally use lances.",
    health: 2,
    id: "AT_084",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 4,
    rating: 3,
    targetingArrowText: "Give +2 Attack.",
    text: "Battlecry: Give a friendly minion +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "22335.png",
    tile: "AT_084.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8323f70a-f547-49dd-b599-2437548f25de",
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
    name: "Maiden of the Lake",
    artist: "Froilan Gardner",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2488,
    flavor: "Not a good basis for a system of government.",
    health: 6,
    id: "AT_085",
    mechanics: ["AURA"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Your Hero Power costs (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22259.png",
    tile: "AT_085.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "9d79f0ca-e968-408a-ae74-30145be02334",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Saboteur",
    artist: "Greg Staples",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2576,
    flavor: "Listen all y'all it's a saboteur!",
    health: 3,
    id: "AT_086",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 2,
    text: "Battlecry: Your opponent's Hero Power costs (5) more next turn.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22366.png",
    tile: "AT_086.png"
  },
  {
    name: "Argent Horserider",
    artist: "Evgeniy Zagumennyy",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2490,
    flavor: "His horse's name is Betsy.",
    health: 1,
    id: "AT_087",
    mechanics: ["CHARGE", "DIVINE_SHIELD"],
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Charge Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "22301.png",
    tile: "AT_087.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "165f143e-aa18-481c-b5a7-75ad2cf3f007",
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
    name: "Mogor's Champion",
    artist: "Steve Prescott",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2491,
    flavor:
      "This champion has learned from the best.  Except for his target selection.",
    health: 5,
    id: "AT_088",
    mechanics: ["FORGETFUL"],
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "50% chance to attack the wrong enemy.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22382.png",
    tile: "AT_088.png"
  },
  {
    name: "Boneguard Lieutenant",
    artist: "Slawomir Maniak",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2495,
    flavor:
      "Underneath all that impressive armor, he's just skin and bones.  Okay, maybe just bones.",
    health: 2,
    id: "AT_089",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Inspire: Gain +1 Health.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22352.png",
    tile: "AT_089.png"
  },
  {
    name: "Mukla's Champion",
    artist: "Andrew Hou",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2497,
    flavor: "An elegant gorilla, for a more civilized age.",
    health: 3,
    id: "AT_090",
    mechanics: ["INSPIRE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Inspire: Give your other minions +1/+1.",
    type: "MINION",
    extra: ["BUFF"],
    imageUrl: "22318.png",
    tile: "AT_090.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "85ad8539-9a8b-47e9-a209-263aa024472f",
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
    name: "Tournament Medic",
    artist: "Sean McNally",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2575,
    flavor:
      "The medic tournament is less entertaining than the Grand Tournament.",
    health: 8,
    id: "AT_091",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Inspire: Restore 2 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "22290.png",
    tile: "AT_091.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "60219902-38bf-44eb-b91e-5ca5e7179f69",
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
    name: "Ice Rager",
    artist: "Anton Zemskov",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2594,
    flavor: "He's a lot cooler than Magma Rager.",
    health: 2,
    id: "AT_092",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 4,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "22392.png",
    tile: "AT_092.png"
  },
  {
    name: "Frigid Snobold",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2532,
    flavor: "Ironically, the natural enemy of the snobold is THE CANDLE.",
    health: 6,
    id: "AT_093",
    mechanics: ["SPELLPOWER"],
    rarity: "COMMON",
    set: 4,
    rating: 1,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22381.png",
    tile: "AT_093.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "7f2d95fa-5f97-4a80-b4be-447375429728",
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
    name: "Flame Juggler",
    artist: "James Zhang",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2580,
    flavor:
      "At first he liked juggling chain saws, but then he thought, 'Flames are better!  Because FIRE!'",
    health: 3,
    id: "AT_094",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 4,
    rating: 4,
    text: "Battlecry: Deal 1 damage to a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "22292.png",
    tile: "AT_094.png"
  },
  {
    name: "Silent Knight",
    artist: "Esad Ribic",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2579,
    flavor: "He used to be a librarian.  Old habits die hard.",
    health: 2,
    id: "AT_095",
    mechanics: ["DIVINE_SHIELD", "STEALTH"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Stealth Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22297.png",
    tile: "AT_095.png"
  },
  {
    name: "Clockwork Knight",
    artist: "Skan Srisuwan",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2500,
    flavor: "It takes a lot to wind him up.",
    health: 5,
    id: "AT_096",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 17
    },
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 4,
    rating: 2,
    targetingArrowText: "Give +1/+1.",
    text: "Battlecry: Give a friendly Mech +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "22294.png",
    tile: "AT_096.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "12904b8a-c77e-4347-ac53-0f049ac2184c",
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
    name: "Tournament Attendee",
    artist: "Adam Byrne",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2499,
    flavor:
      "He was so excited to get season tickets to this year's Grand Tournament.  He normally doesn't get them at first and has to buy them from Ogre scalpers.",
    health: 1,
    id: "AT_097",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22350.png",
    tile: "AT_097.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "2f99e1cb-1f21-4a3a-8b9f-85832b776d02",
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
    name: "Sideshow Spelleater",
    artist: "Wayne Reynolds",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2573,
    flavor: "Hey!  Let me try that...",
    health: 5,
    id: "AT_098",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Battlecry: Copy your opponent's Hero Power.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22372.png",
    tile: "AT_098.png"
  },
  {
    name: "Kodorider",
    artist: "Ben Wootten",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2598,
    flavor: "Someone called her a Rhinorider, and she's NOT HAPPY.",
    health: 5,
    id: "AT_099",
    mechanics: ["INSPIRE"],
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "Inspire: Summon a 3/5 War Kodo.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "MIN_GEN"],
    imageUrl: "22266.png",
    tile: "AT_099.png"
  },
  {
    name: "Silver Hand Regent",
    artist: "John Polidora",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2503,
    flavor:
      "The Silver Hand is the best paladin organization.  The Argent Crusaders are super jealous.",
    health: 3,
    id: "AT_100",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Inspire: Summon a 1/1 Silver Hand Recruit.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "22275.png",
    tile: "AT_100.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7ca2c878-59a4-4202-823e-b8cc3e914d31",
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
    name: "Pit Fighter",
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2521,
    flavor: "What did the pits ever do to you?",
    health: 6,
    id: "AT_101",
    rarity: "COMMON",
    set: 4,
    rating: 3,
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "22375.png",
    tile: "AT_101.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "ef87f165-09cc-4a13-ab9e-0ffe036f6949",
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
    name: "Captured Jormungar",
    artist: "Gonzalo Ordonez",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2522,
    flavor:
      "You can keep him, but you have to promise to feed him and clean out his tank every day!",
    health: 9,
    id: "AT_102",
    race: "BEAST",
    rarity: "COMMON",
    set: 4,
    rating: 2,
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22377.png",
    tile: "AT_102.png"
  },
  {
    name: "North Sea Kraken",
    artist: "Seamus Gallagher",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2520,
    flavor: "You have no idea how tired this guy is of being released.",
    health: 7,
    id: "AT_103",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 4,
    rating: 3,
    targetingArrowText: "Deal 4 damage.",
    text: "Battlecry: Deal 4 damage.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22289.png",
    tile: "AT_103.png"
  },
  {
    name: "Tuskarr Jouster",
    artist: "Skan Srisuwan",
    attack: 5,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 2504,
    flavor: "Just could not be talked out of using his turtle for the joust...",
    health: 5,
    id: "AT_104",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, restore 7 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22315.png",
    tile: "AT_104.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d4884f5c-f9c2-4f0e-b90e-5f2079d803a5",
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
    name: "Injured Kvaldir",
    artist: "Zoltan Boros",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2502,
    flavor:
      "Don't worry.  With a little skin cream he's going to clear right up.",
    health: 4,
    id: "AT_105",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 4,
    rating: 3,
    text: "Battlecry: Deal 3 damage to this minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22322.png",
    tile: "AT_105.png"
  },
  {
    name: "Light's Champion",
    artist: "Andrea Uderzo",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2259,
    flavor:
      "When there's something strange (say, a gibbering demon) in your neighborhood, who are you going to call?",
    health: 3,
    id: "AT_106",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 15
    },
    rarity: "RARE",
    referencedTags: ["SILENCE"],
    set: 4,
    rating: 2,
    targetingArrowText: "Silence a Demon.",
    text: "Battlecry: Silence a Demon.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22341.png",
    tile: "AT_106.png"
  },
  {
    name: "Armored Warhorse",
    artist: "Edouard Guiton & Tony Washington",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2627,
    flavor: "Yep.  It's a horse... wearing armor... going to war.",
    health: 3,
    id: "AT_108",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["CHARGE"],
    set: 4,
    rating: 1,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, gain Charge.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22312.png",
    tile: "AT_108.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "69359a5d-c477-4557-a591-b19c76420f49",
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
    name: "Argent Watchman",
    artist: "Benjamin Zhang",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 2505,
    flavor: "Who argent watches the Argent Watchman?",
    health: 4,
    id: "AT_109",
    mechanics: ["CANT_ATTACK", "INSPIRE"],
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "Can't attack. Inspire: Can attack as normal this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22298.png",
    tile: "AT_109.png"
  },
  {
    name: "Coliseum Manager",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2585,
    flavor: "Meets monthly with the gladiators to discuss career goals.",
    health: 5,
    id: "AT_110",
    mechanics: ["INSPIRE"],
    rarity: "RARE",
    set: 4,
    rating: 1,
    text: "Inspire: Return this minion to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22291.png",
    tile: "AT_110.png"
  },
  {
    name: "Refreshment Vendor",
    artist: "Ron Spears",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2704,
    flavor:
      "Menu:  Funnel cakes, carrots, popcorn, jormungar steaks.  It's hard serving a diverse clientele.",
    health: 5,
    id: "AT_111",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 4,
    rating: 3,
    text: "Battlecry: Restore 4 Health to each hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "22374.png",
    tile: "AT_111.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "fbef2f33-e48e-4cce-97bf-d3f71e64f248",
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
    name: "Master Jouster",
    artist: "Penny Arcade",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2507,
    flavor:
      "Needs just a few more ratings points to become Grandmaster Jouster.",
    health: 6,
    id: "AT_112",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    set: 4,
    rating: 2,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, gain Taunt and Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22317.png",
    tile: "AT_112.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "445b495b-f318-4f86-aa83-4b4aab05db9a",
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
    name: "Recruiter",
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2509,
    flavor:
      "Join the Argent Crusade!  We have attractive tabards and you get to carry really nice swords!",
    health: 4,
    id: "AT_113",
    mechanics: ["INSPIRE"],
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Inspire: Add a 2/2 Squire to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22367.png",
    tile: "AT_113.png"
  },
  {
    name: "Evil Heckler",
    artist: "Dan Scott",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2752,
    flavor: "To be honest, heckling is not the most effective form of evil.",
    health: 4,
    id: "AT_114",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22390.png",
    tile: "AT_114.png"
  },
  {
    name: "Fencing Coach",
    artist: "Howard Lyon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2581,
    flavor: "Good fencers make good neighbors, right?",
    health: 2,
    id: "AT_115",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 4,
    rating: 1,
    text:
      "Battlecry: The next time you use your Hero Power, it costs (2) less.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22378.png",
    tile: "AT_115.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "16c04499-d17b-4aa5-ba7d-f67dd4afee18",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Wyrmrest Agent",
    artist: "Jeff Easley",
    attack: 1,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 2596,
    flavor:
      "Keeping tabs on the Grand Tournament is priority #1 for the five mighty Dragonflights!",
    health: 4,
    id: "AT_116",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 4,
    rating: 1,
    text: "Battlecry: If you're holding a Dragon, gain +1 Attack and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22398.png",
    tile: "AT_116.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "35fda88c-ddc6-4aa8-a422-fa244ead63d5",
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
    name: "Master of Ceremonies",
    artist: "Jesper Ejsing",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2493,
    flavor: "Goes by 'MC ElfyElf'.",
    health: 2,
    id: "AT_117",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Battlecry: If you have a minion with Spell Damage, gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22306.png",
    tile: "AT_117.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1be50699-f881-46f5-a611-1ce727b84997",
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
    name: "Grand Crusader",
    artist: "Todd Lockwood",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2510,
    flavor:
      "A veteran of a number of crusades, she is a force for light and goodness.  Her latest crusade is against goblin telemarketers.",
    health: 5,
    id: "AT_118",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "Battlecry: Add a random Paladin card to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22326.png",
    tile: "AT_118.png"
  },
  {
    name: "Kvaldir Raider",
    artist: "Trent Kaniuga",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2511,
    flavor: "Coming soon... to a tuskarr village near you!",
    health: 4,
    id: "AT_119",
    mechanics: ["INSPIRE"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text: "Inspire: Gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22355.png",
    tile: "AT_119.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "9d01288f-831f-46d1-8e7c-96777767344b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Frost Giant",
    artist: "Greg Staples",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 2512,
    flavor: "Don't ask him about the beard.  JUST DON'T.",
    health: 8,
    id: "AT_120",
    rarity: "EPIC",
    set: 4,
    rating: 1,
    text: "Costs (1) less for each time you used your Hero Power this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22262.png",
    tile: "AT_120.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "005c5dbc-80c8-4cf1-9faa-adede00c3033",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "INSPIRE"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "8ede3796-99c6-4feb-9a5d-ab85ecafe0ce",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Justicar Trueheart"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Crowd Favorite",
    artist: "Jakub Kasper",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2518,
    flavor: "The crowd ALWAYS yells lethal.",
    health: 4,
    id: "AT_121",
    rarity: "EPIC",
    referencedTags: ["BATTLECRY"],
    set: 4,
    rating: 1,
    text: "Whenever you play a card with Battlecry, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22308.png",
    tile: "AT_121.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4015822a-887e-4ff5-bb97-382ffdf36422",
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
    name: "Gormok the Impaler",
    artist: "Nutthapon Petchthai",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 2724,
    elite: true,
    flavor:
      "Gormok has been giving impaling lessons in a small tent near the tournament grounds.  For only 25g you too could learn the fine art of impaling!",
    health: 4,
    id: "AT_122",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_MINIONS: 4
    },
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    targetingArrowText: "Deal 4 damage.",
    text: "Battlecry: If you have at least 4 other minions, deal 4 damage.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22323.png",
    tile: "AT_122.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "11f46876-7251-4b23-a0d2-39ef1d79bee7",
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
    name: "Chillmaw",
    artist: "Raymond Swanland",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 2682,
    elite: true,
    flavor:
      "Chillmaw keeps trying to ruin the Grand Tournament, and she would've done it too, if it weren't for those dang kids!",
    health: 6,
    id: "AT_123",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 4,
    rating: 2,
    text:
      "Taunt Deathrattle: If you're holding a Dragon, deal 3 damage to all minions.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "22353.png",
    tile: "AT_123.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4929e074-5e20-4c21-b89c-2c8f67e158af",
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
    name: "Bolf Ramshield",
    artist: "Wayne Reynolds",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2595,
    elite: true,
    flavor:
      "Bolf keeps coming in 2nd at the Grand Tournament.  It might be his year this year, if Lebron doesn't enter.",
    health: 9,
    id: "AT_124",
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    text: "Whenever your hero takes damage, this minion takes it instead.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22346.png",
    tile: "AT_124.png"
  },
  {
    name: "Icehowl",
    artist: "John Polidora",
    attack: 10,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 2725,
    elite: true,
    flavor:
      "This massive yeti just closes his eyes and charges at the nearest target.  The nearest Target is a couple blocks away and has sick deals on skateboards.",
    health: 10,
    id: "AT_125",
    mechanics: ["CHARGE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 2,
    text: "Charge Can't attack heroes.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22338.png",
    tile: "AT_125.png"
  },
  {
    name: "Nexus-Champion Saraad",
    artist: "Marcleo Vignali",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 2683,
    elite: true,
    flavor:
      "The ethereals have their own jousting tournament, and Saraad is the reigning champion.  Also he won the ethereal hot dog eating contest.",
    health: 5,
    id: "AT_127",
    mechanics: ["INSPIRE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text: "Inspire: Add a random spell to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22264.png",
    tile: "AT_127.png"
  },
  {
    name: "The Skeleton Knight",
    artist: "Mike Sass",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2681,
    elite: true,
    flavor: "Apparently it really was just a flesh wound.",
    health: 4,
    id: "AT_128",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 4,
    rating: 1,
    text:
      "Deathrattle: Reveal a minion in each deck. If yours costs more, return this to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "22314.png",
    tile: "AT_128.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ac703fd0-4112-4a0d-ba00-7aedde77072d",
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
    name: "Fjola Lightbane",
    artist: "Mark Zug",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2748,
    elite: true,
    flavor: "LOVES being called 'the wonder twins'.",
    health: 4,
    id: "AT_129",
    rarity: "LEGENDARY",
    referencedTags: ["DIVINE_SHIELD"],
    set: 4,
    rating: 3,
    text: "Whenever you target this minion with a spell, gain Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22296.png",
    tile: "AT_129.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "35d65441-31b8-40a8-87a9-85bded355f24",
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
    name: "Sea Reaver",
    artist: "James Ryman",
    attack: 6,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 2723,
    flavor: "A little better than Sea Minus Reaver.",
    health: 7,
    id: "AT_130",
    mechanics: ["TOPDECK"],
    rarity: "EPIC",
    set: 4,
    rating: 3,
    text: "When you draw this, deal 1 damage to your minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "22339.png",
    tile: "AT_130.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "8fd12ed3-0ada-4cde-b03d-ebaf397a21b5",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "whenever.*takes.*damage"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Bittertide Hydra"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Eydis Darkbane",
    artist: "Ben Thompson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 2519,
    elite: true,
    flavor: "HATES being called 'the wonder twins'.",
    health: 4,
    id: "AT_131",
    rarity: "LEGENDARY",
    set: 4,
    rating: 3,
    text:
      "Whenever you target this minion with a spell, deal 3 damage to a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22295.png",
    tile: "AT_131.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7a3af677-c85d-42c2-807a-55a15acd1475",
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
    name: "Justicar Trueheart",
    artist: "Jomaro Kindred",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 2736,
    elite: true,
    flavor:
      "It's like putting racing stripes and a giant spoiler on your hero power.",
    health: 3,
    id: "AT_132",
    rarity: "LEGENDARY",
    set: 4,
    rating: 4,
    text: "Battlecry: Replace your starting Hero Power with a better one.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "22276.png",
    tile: "AT_132.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "2d63767c-980f-4279-93b9-ca17d5baea03",
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
    name: "Gadgetzan Jouster",
    artist: "Skan Srisuwan",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 2818,
    flavor:
      "It's not HER fault you didn't put a spinning saw blade on your horse.",
    health: 2,
    id: "AT_133",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 4,
    rating: 2,
    text:
      "Battlecry: Reveal a minion in each deck. If yours costs more, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "22311.png",
    tile: "AT_133.png"
  }
];
