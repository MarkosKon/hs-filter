export const meanStreetsOfGadgetzan = [
  {
    name: "Raza the Chained",
    artist: "James Ryman",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 40323,
    elite: true,
    flavor: "'Could you do me a favor and get the keys from Kazakus?'",
    health: 5,
    id: "CFM_020",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text:
      "  Battlecry: If your deck has   no duplicates, your Hero  Power costs (1) this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49702.png",
    tile: "CFM_020.png",
    deckFilters: [
      {
        id: "aa56b527-79d3-4629-8837-1565ad2dea85",
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
            id: "f1e53684-056e-4783-9f64-676bf68b74d4",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "duplicates"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "b3e14ad2-9206-4d43-902c-f4fd653e60c3",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Shadowreaper Anduin"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Freezing Potion",
    artist: "Arthur Bozonnet",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 0,
    dbfId: 40324,
    flavor: "This is delicious! Oh no. BRAIN FREEEEEEEZE!",
    id: "CFM_021",
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 8,
    rating: 1,
    text: "Freeze an enemy.",
    type: "SPELL",
    extra: ["STALL"],
    imageUrl: "49734.png",
    tile: "CFM_021.png"
  },
  {
    name: "Wind-up Burglebot",
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40337,
    flavor:
      "Don't blame the bot for his crimes...  Blame whoever keeps winding him up!",
    health: 5,
    id: "CFM_025",
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "Whenever this attacks a minion and survives, draw a card.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49647.png",
    tile: "CFM_025.png"
  },
  {
    name: "Hidden Cache",
    artist: "Dan Scott",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 40339,
    flavor:
      "There is an urban legend that the first Toxic Sewer Ooze was born because a rookie Goon stashed an open container of milk in a Hidden Cache.",
    id: "CFM_026",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 8,
    rating: 1,
    text:
      "Secret: After your opponent plays a minion, give a random minion in your hand +2/+2.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "/49736.png",
    tile: "CFM_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ff169a2d-d5b5-4e94-8be8-13d061a90350",
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
    name: "Street Trickster",
    artist: "Daria Tuzova",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40213,
    flavor: "His first trick: making your wallet disappear!",
    health: 7,
    id: "CFM_039",
    mechanics: ["SPELLPOWER"],
    race: "DEMON",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    spellDamage: 1,
    text: "Spell Damage +1",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49761.png",
    tile: "CFM_039.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "81180320-977d-45d1-bca7-fcb6a994f1df",
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
    name: "Red Mana Wyrm",
    artist: "Slawomir Maniak",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40281,
    flavor:
      "It has double the Attack.  'Go on.'  And double the Health.  'Yes??'  And its trigger has twice the effect.  'WHAT???'  And it costs…  Five times more.",
    health: 6,
    id: "CFM_060",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Whenever  you cast a spell, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49762.png",
    tile: "CFM_060.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "000aa36f-3647-4f80-a1d3-22bb29c2c744",
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
    name: "Jinyu Waterspeaker",
    artist: "Jaemin Kim",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 40285,
    flavor:
      "Waterspeakers can tell the future! So the Jade Lotus employs them to speculate on the Auction House.",
    health: 6,
    id: "CFM_061",
    mechanics: ["BATTLECRY", "OVERLOAD"],
    overload: 1,
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Battlecry: Restore 6 Health. Overload: (1)",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "49719.png",
    tile: "CFM_061.png"
  },
  {
    name: "Grimestreet Protector",
    artist: "Zoltan Boros",
    attack: 6,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 40295,
    flavor: "Some new asphalt should do the trick.",
    health: 6,
    id: "CFM_062",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 8,
    rating: 2,
    text: "Taunt Battlecry: Give adjacent  minions Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49678.png",
    tile: "CFM_062.png"
  },
  {
    name: "Kooky Chemist",
    artist: "Dave Allsop",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40289,
    flavor: "#abs",
    health: 4,
    id: "CFM_063",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Battlecry: Swap the Attack and Health of a minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49634.png",
    tile: "CFM_063.png"
  },
  {
    name: "Blubber Baron",
    artist: "Eva Widermann",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40294,
    flavor:
      "When oil, railroad, steel, robber, and red are all already taken, your options are limited.",
    health: 1,
    id: "CFM_064",
    rarity: "EPIC",
    referencedTags: ["BATTLECRY"],
    set: 8,
    rating: 1,
    text:
      "Whenever you summon a Battlecry minion while this is in your hand, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49760.png",
    tile: "CFM_064.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "afcd8eac-8a3c-485a-8ec9-4fb1eb320d1e",
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
    name: "Volcanic Potion",
    artist: "Konstantin Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 40297,
    flavor: "The secret ingredient in Kazakus's award-winning chili recipe.",
    id: "CFM_065",
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Deal $2 damage to all minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "49689.png",
    tile: "CFM_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a4bd50f7-bd00-4cb9-b0ca-b00044624b30",
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
    name: "Kabal Lackey",
    artist: "Andrew Hou",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 40299,
    flavor: "I'll tell you one thing he doesn't lack: GUMPTION.",
    health: 1,
    id: "CFM_066",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["SECRET"],
    set: 8,
    rating: 3,
    text: "Battlecry: The next Secret you play this turn costs (0).",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49692.png",
    tile: "CFM_066.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "bd5ce7ca-e449-4163-b8dd-fcb153e067e5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "secret"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Eater of Secrets"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Kezan Mystic"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Chief Inspector"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Hozen Healer",
    artist: "Sam Nielsen",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40344,
    flavor:
      "He didn't go to school for healing, but we keep losing all the good healers to Ratchet, so I guess we'll take him.",
    health: 6,
    id: "CFM_067",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Restore a minion to full Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49710.png",
    tile: "CFM_067.png"
  },
  {
    name: "Felfire Potion",
    artist: "Arthur Bozonnet",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 40517,
    flavor:
      "Kazakus has a squad of imps bottling Felfire round-the-clock and he *still* can't keep up with demand.",
    id: "CFM_094",
    rarity: "RARE",
    set: 8,
    rating: 1,
    text: "Deal $5 damage to all characters.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "49699.png",
    tile: "CFM_094.png"
  },
  {
    name: "Weasel Tunneler",
    artist: "Andrew Hou",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 40549,
    flavor: "He's the reason the First Bank of Gadgetzan has steel floors.",
    health: 1,
    id: "CFM_095",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "Deathrattle: Shuffle this minion into your opponent's deck.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49758.png",
    tile: "CFM_095.png"
  },
  {
    name: "Mistress of Mixtures",
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 41566,
    flavor: "Her favorite mixture is cola and lime.",
    health: 2,
    id: "CFM_120",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 8,
    rating: 3,
    text: "Deathrattle: Restore 4 Health to each hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "49646.png",
    tile: "CFM_120.png"
  },
  {
    name: "Public Defender",
    artist: "Alex Alexandrov",
    attack: 0,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 40364,
    flavor: "Happy to defend any public offender!",
    health: 7,
    id: "CFM_300",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49732.png",
    tile: "CFM_300.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d7f01a6d-9ec9-4745-acad-3d304d35c034",
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
    name: "Smuggler's Run",
    artist: "Alex Horley Orlandelli",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 40371,
    flavor:
      "One of the most famous busts in Gadgetzan’s history happened on Smuggler’s Run, where Sergeant Sally apprehended a cadre of Grimy Goons transporting a massive number of illegal fish heads.",
    id: "CFM_305",
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Give all minions in your hand +1/+1.",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "49676.png",
    tile: "CFM_305.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "cb667e54-721b-4617-b613-f92d24c55002",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give .* in your hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kun the Forgotten King",
    artist: "Jon Neimeister",
    attack: 7,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 10,
    dbfId: 40416,
    elite: true,
    flavor:
      "Aya siphons a bit of Kun's soul to animate each golem in her Jade army. To his credit, he's being a great sport about it.",
    health: 7,
    id: "CFM_308",
    mechanics: ["CHOOSE_ONE"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 4,
    text: "Choose One - Gain 10 Armor; or Refresh your Mana Crystals.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49628.png",
    tile: "CFM_308.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "3294b858-a7ef-45be-b5c6-92f88153c4bf",
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
    name: "Call in the Finishers",
    artist: "Mike Saas",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 40419,
    flavor:
      "When you really need a job done… but you don't really care if it gets done right.",
    id: "CFM_310",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Summon four 1/1 Murlocs.",
    type: "SPELL",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "49716.png",
    tile: "CFM_310.png"
  },
  {
    name: "Jade Chieftain",
    artist: "A.J. Nazzaro",
    attack: 5,
    cardClass: ["SHAMAN"],
    collectible: true,
    collectionText: "Battlecry: Summon a Jade Golem. Give it Taunt.",
    cost: 7,
    dbfId: 40422,
    flavor:
      "Seeing his Jade Golem grow up into the tall, handsome 6/6 standing before him was the proudest moment of his life.",
    health: 5,
    id: "CFM_312",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["JADE_GOLEM", "TAUNT"],
    set: 8,
    rating: 1,
    text: "Battlecry: Summon a{1} {0} Jade Golem. Give it Taunt.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "49720.png",
    tile: "CFM_312.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "7a1ee3c4-438c-4012-8be6-c80769a5154a",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Finders Keepers",
    artist: "Benjamin Zhang",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 40423,
    flavor: "INFINITE LOOP!",
    id: "CFM_313",
    mechanics: ["OVERLOAD"],
    overload: 1,
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 8,
    rating: 3,
    text: "Discover a card with Overload. Overload: (1)",
    type: "SPELL",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "49749.png",
    tile: "CFM_313.png"
  },
  {
    name: "Alleycat",
    artist: "Anton Zemskov",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 40426,
    flavor: "To be a cool cat in Gadgetzan, you gotta have bling.",
    health: 1,
    id: "CFM_315",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 8,
    rating: 4,
    text: "Battlecry: Summon a 1/1 Cat.",
    type: "MINION",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "49745.png",
    tile: "CFM_315.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "020c6fc7-3ce9-4d6f-9e69-357d9f9a0f15",
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
    name: "Rat Pack",
    artist: "Ozhill Studio",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 40428,
    flavor: "He's gonna do it his way.",
    health: 2,
    id: "CFM_316",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "EPIC",
    set: 8,
    rating: 4,
    text:
      "Deathrattle: Summon a number of 1/1 Rats equal  to this minion's Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49681.png",
    tile: "CFM_316.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "51bd3740-df9f-4666-8394-b602f609eed6",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give .* in your hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grimestreet Informant",
    artist: "Anton Zemskov",
    attack: 1,
    cardClass: ["HUNTER", "PALADIN", "WARRIOR"],
    classes: ["HUNTER", "PALADIN", "WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 40474,
    flavor:
      "'Naw, naw.  You're talkin' about Grime BOULEVARD.  I ain't know nuthin' 'bout that.'",
    health: 1,
    id: "CFM_321",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "GRIMY_GOONS",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 8,
    rating: 2,
    text: "Battlecry: Discover a Hunter, Paladin, or Warrior card.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49627.png",
    tile: "CFM_321.png"
  },
  {
    name: "White Eyes",
    artist: "Cole Eastburn",
    attack: 5,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 40486,
    elite: true,
    flavor: "My life for Aya!",
    health: 5,
    id: "CFM_324",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 3,
    text: "Taunt Deathrattle: Shuffle 'The Storm Guardian' into your deck.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "49726.png",
    tile: "CFM_324.png"
  },
  {
    name: "Small-Time Buccaneer",
    artist: "Paul Mafayon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 40608,
    flavor: "'Oh, I'm not serious about it.  I only pirate on the weekends.'",
    health: 1,
    id: "CFM_325",
    race: "PIRATE",
    rarity: "RARE",
    set: 8,
    rating: 1,
    text: "Has +2 Attack while you have a weapon equipped.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49759.png",
    tile: "CFM_325.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "dfc9b2e3-f4ef-4f52-8d01-19c025cc3d16",
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
            id: "3321b478-4e71-45ae-9606-d5d663d94b30",
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
    name: "Fight Promoter",
    artist: "Adam Byrne",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40617,
    flavor:
      "'Yeah, I can get you Knuckles.  No, no, he's been clean for *weeks*.'",
    health: 4,
    id: "CFM_328",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text:
      "Battlecry: If you control a minion with 6 or more  Health, draw two cards.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "49712.png",
    tile: "CFM_328.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6c7ad1e1-00ac-4017-985d-b0d9b81ec693",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "health",
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
    name: "Knuckles",
    artist: "Sam Nielsen",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 40678,
    elite: true,
    flavor:
      "When confronted with accusations of performance-enhancing bananas, Knuckles replied, 'I get my fruit from trees I knock down with my bare hands like everyone else.'",
    health: 7,
    id: "CFM_333",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text: "After this attacks a minion, it also hits the enemy hero.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49682.png",
    tile: "CFM_333.png"
  },
  {
    name: "Smuggler's Crate",
    artist: "Grace Liu",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 40679,
    flavor:
      "Are you sure these are the crates that are supposed to go to the Gadgetzan petting zoo?",
    id: "CFM_334",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Give a random Beast in your hand +2/+2.",
    type: "SPELL",
    extra: ["FAST"],
    imageUrl: "49735.png",
    tile: "CFM_334.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e9f16e28-dcce-4699-94c9-7bfa354e6e07",
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
    name: "Dispatch Kodo",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 41126,
    flavor:
      "'Crime reported at First Bank of Gadgetzan.  Huge quantities of Jade being carried away by what looks like a bunch of Hozen.  Kodo 77 can you make it over there now?'",
    health: 4,
    id: "CFM_335",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    race: "BEAST",
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Battlecry: Deal damage equal to this minion's Attack.",
    type: "MINION",
    extra: ["SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "49674.png",
    tile: "CFM_335.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7cf4debb-d972-42b8-9bcb-5a8ada7a97f1",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give .* in your hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shaky Zipgunner",
    artist: "Andrew Hou",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 40681,
    flavor:
      "The Grimy Goons can get you any weapon you want but if you want it to not explode you gotta pay extra.",
    health: 3,
    id: "CFM_336",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 8,
    rating: 4,
    text: "Deathrattle: Give a random minion in your hand +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49669.png",
    tile: "CFM_336.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "90817dce-2975-4433-8d27-32c04c47bdf5",
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
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shaky Zipgunner"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Piranha Launcher",
    artist: "Nick Southham",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 40683,
    durability: 4,
    flavor: "A great improvement over the guppy launcher.",
    id: "CFM_337",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "After your hero attacks, summon a 1/1 Piranha.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "49618.png",
    tile: "CFM_337.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "75f8df59-cccf-41ab-9bdc-c26e0b9506bf",
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
    name: "Trogg Beastrager",
    artist: "Adam Byrne",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 40684,
    flavor:
      "Still angry that the Gadgetzan Rager Club wouldn't accept him as a member.",
    health: 2,
    id: "CFM_338",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Battlecry: Give a random Beast in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49660.png",
    tile: "CFM_338.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "58b5a4d7-5f2f-443d-b282-7cc392c151c3",
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
    name: "Sergeant Sally",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 41118,
    elite: true,
    flavor:
      "'Who is she?  Where did she come from?  We don't even have a police force here in Gadgetzan!!' - Mayor Noggenfogger",
    health: 1,
    id: "CFM_341",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text:
      "Deathrattle: Deal damage equal to this minion's Attack to all enemy minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "49728.png",
    tile: "CFM_341.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b83441b0-9edd-480e-b4b5-3b373890dc03",
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
    name: "Luckydo Buccaneer",
    artist: "Mark Gibbons",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 40791,
    flavor:
      "You can't just leave a Luckydo somewhere.  You gotta keep 'em with you!  Especially in Gadgetzan!",
    health: 5,
    id: "CFM_342",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "Battlecry: If your weapon has at least 3 Attack, gain +4/+4.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49754.png",
    tile: "CFM_342.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "bae1699e-9719-4b1f-8fec-ca8d4a7d50ca",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give.*weapon"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "328ab62d-7551-427a-8d7e-ef725cfa2503",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Luckydo Buccaneer"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Jade Behemoth",
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    collectionText: "Taunt Battlecry: Summon a Jade Golem.",
    cost: 6,
    dbfId: 40797,
    flavor: "I think we should talk about the jade elephant in the room.",
    health: 6,
    id: "CFM_343",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "COMMON",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 1,
    text: "Taunt Battlecry: Summon a{1} {0} Jade Golem.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "49718.png",
    tile: "CFM_343.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "2f1dc203-3409-4e48-b755-d70f6d3b0957",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Finja, the Flying Star",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40803,
    elite: true,
    flavor: "The last true master of Finjitsu.",
    health: 4,
    id: "CFM_344",
    mechanics: ["STEALTH"],
    race: "MURLOC",
    rarity: "LEGENDARY",
    set: 8,
    rating: 3,
    text:
      "Stealth    Whenever this attacks and    kills a minion, summon 2  Murlocs from your deck.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49632.png",
    tile: "CFM_344.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "bce8ad2b-0c48-466c-aacb-8936a43330ba",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Murloc Warleader"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "1ce6f7df-29dd-4201-8b85-bb1ea17da1a3",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Bluegill Warrior"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Jade Idol",
    artist: "Matthew O'Connor",
    cardClass: ["DRUID"],
    collectible: true,
    collectionText:
      "Choose One - Summon a Jade Golem; or Shuffle 3 copies of this card into your deck.",
    cost: 1,
    dbfId: 40372,
    flavor: "Shuffle or no guts.",
    id: "CFM_602",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 1,
    text:
      "Choose One - Summon a{1} {0} Jade Golem; or Shuffle 3 copies of this card into your deck.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "49714.png",
    tile: "CFM_602.png"
  },
  {
    name: "Potion of Madness",
    artist: "Arthur Bozonnet",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 40373,
    flavor: "You'd be insane NOT to drink it!",
    id: "CFM_603",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_MAX_ATTACK: 2,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 8,
    rating: 4,
    text:
      "Gain control of an enemy minion with 2 or less Attack until end of turn.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "49630.png",
    tile: "CFM_603.png"
  },
  {
    name: "Greater Healing Potion",
    artist: "Tyler West Studios",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 40375,
    flavor: "Filled with electrolytes!",
    id: "CFM_604",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Restore #12 Health to a friendly character.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "49755.png",
    tile: "CFM_604.png"
  },
  {
    name: "Drakonid Operative",
    artist: "Zoltan Boros",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 40378,
    flavor:
      "His job is to spy on the Goons and the Jade Lotus, but he's OBVIOUSLY a dragon so it's pretty hard work.",
    health: 6,
    id: "CFM_605",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 8,
    rating: 3,
    text:
      "Battlecry: If you're holding a Dragon, Discover a card in  your opponent's deck.",
    type: "MINION",
    extra: ["TEMPO"],
    imageUrl: "49638.png",
    tile: "CFM_605.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a3465734-c899-4741-a480-553c96fd0ee4",
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
                minValue: "Drakonid Operative"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mana Geode",
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 40381,
    flavor: "Gadgetzan, where even the pet rocks have pet rocks.",
    health: 3,
    id: "CFM_606",
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text: "Whenever this minion is healed, summon a 2/2 Crystal.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49705.png",
    tile: "CFM_606.png"
  },
  {
    name: "Blastcrystal Potion",
    artist: "Zoltan Boros",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 40957,
    flavor:
      "There's a fine line between 'potion' and 'grenade'. Wait. Actually, there's not.",
    id: "CFM_608",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 8,
    rating: 3,
    text: "Destroy a minion and one of your Mana Crystals.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "TEMPO"],
    imageUrl: "49741.png",
    tile: "CFM_608.png"
  },
  {
    name: "Fel Orc Soulfiend",
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40389,
    flavor:
      "'Doc says the persistent burning sensation in my soul is probably just an ulcer.'",
    health: 7,
    id: "CFM_609",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "At the start of your turn, deal 2 damage to this minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49639.png",
    tile: "CFM_609.png"
  },
  {
    name: "Crystalweaver",
    artist: "Arthur Gimaldinov",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 40391,
    flavor: "The trick is soaking the crystals in warm milk to soften them up.",
    health: 4,
    id: "CFM_610",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Give your Demons +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "49750.png",
    tile: "CFM_610.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e5ee748d-a7fb-4138-a068-1bf0af43bb8a",
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
    name: "Bloodfury Potion",
    artist: "Raven Mimura",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 40393,
    flavor:
      "You know what really makes my blood boil? The skyrocketing price of Bloodfury potions!",
    id: "CFM_611",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 8,
    rating: 2,
    text: "Give a minion +3 Attack. If it's a Demon, also give it +3 Health.",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "49698.png",
    tile: "CFM_611.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "03b7b44c-05e3-4bc0-9fb5-53924aece3f8",
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
    name: "Mark of the Lotus",
    artist: "Wayne Reynolds",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 40397,
    flavor:
      "The mark of the Lotus is a little flower drawn in permanent marker on the ankle.",
    id: "CFM_614",
    rarity: "COMMON",
    set: 8,
    rating: 4,
    text: "Give your minions +1/+1.",
    type: "SPELL",
    extra: ["BUFF", "FAST"],
    imageUrl: "49642.png",
    tile: "CFM_614.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "9a5a0443-448c-4931-930c-e7a69496f0a4",
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
            id: "1949ead1-03ab-4ea0-a50b-f561f24e2321",
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
    name: "Pilfered Power",
    artist: "Zoltan Boros",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 40401,
    flavor:
      "The Hozen don't get paid much, but at least they get to keep any excess mana.",
    id: "CFM_616",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "Gain an empty Mana Crystal for each friendly minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "49636.png",
    tile: "CFM_616.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "5c06c58a-01d5-4856-8379-6e8c3686eb0f",
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
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "f17099a0-27e7-4f2d-897a-b3df98bcdac9",
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
                minValue: 4
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "d5bae992-05e8-43c9-99d7-5e219cb86dfc",
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
    name: "Celestial Dreamer",
    artist: "Alex Garner",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 40404,
    flavor: "If you think her job is easy, YOU try falling asleep on cue.",
    health: 3,
    id: "CFM_617",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 8,
    rating: 2,
    text:
      "Battlecry: If you control a minion with 5 or more Attack, gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49748.png",
    tile: "CFM_617.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4632d30b-221e-4360-9872-2b0343a79c53",
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
                property: "cost",
                operation: "LESS_THAN",
                minValue: 7
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kabal Chemist",
    artist: "Mike Azevedo",
    attack: 3,
    cardClass: ["MAGE", "PRIEST", "WARLOCK"],
    classes: ["MAGE", "PRIEST", "WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 40407,
    entourage: [
      "CFM_065",
      "CFM_021",
      "CFM_603",
      "CFM_604",
      "CFM_611",
      "CFM_620",
      "CFM_094",
      "CFM_661",
      "CFM_662",
      "CFM_608"
    ],
    flavor:
      "Sure you could have that Polymorph potion, but wouldn't you rather have this mystery potion?  It could be anything.  Even a Polymorph potion!",
    health: 3,
    id: "CFM_619",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "KABAL",
    rarity: "COMMON",
    set: 8,
    rating: 3,
    text: "Battlecry: Add a random Potion to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49690.png",
    tile: "CFM_619.png"
  },
  {
    name: "Potion of Polymorph",
    artist: "Arthur Bozonnet",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 40409,
    flavor: "Tastes like Baaaaananas.",
    id: "CFM_620",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 8,
    rating: 2,
    text:
      "Secret: After your opponent plays a minion, transform it into a 1/1 Sheep.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "49694.png",
    tile: "CFM_620.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "0630f098-b217-4822-a076-92ac032094bc",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "secret"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kazakus",
    artist: "Jomaro Kindred",
    attack: 3,
    cardClass: ["MAGE", "PRIEST", "WARLOCK"],
    classes: ["MAGE", "PRIEST", "WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 40408,
    elite: true,
    entourage: ["CFM_621t11", "CFM_621t12", "CFM_621t13"],
    flavor:
      "The mysterious leader of the Kabal is NOT a dragon, and does NOT deal in illegal potions.  Any public statements to the contrary will be met with litigation and Dragonfire Potions.",
    health: 3,
    id: "CFM_621",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "KABAL",
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text: "Battlecry: If your deck has no duplicates,  create a custom spell.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "AOE"],
    imageUrl: "49622.png",
    tile: "CFM_621.png",
    deckFilters: [
      {
        id: "3aca7ce9-2e0d-4d27-83b9-b2948b138472",
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
            id: "6d89dd66-231d-4895-a79f-c3f4c935efee",
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
    name: "Greater Arcane Missiles",
    artist: "Evgeniy Zaqumyenny",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 40411,
    flavor: "Wow, and I thought Arcane Missiles was great!",
    id: "CFM_623",
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text: "Shoot three missiles at random enemies that deal $3 damage each.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL"],
    imageUrl: "49740.png",
    tile: "CFM_623.png"
  },
  {
    name: "Kabal Talonpriest",
    artist: "Dave Allsop",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 40432,
    flavor: "Inkmaster Solia had to figure out how to tattoo feathers.",
    health: 4,
    id: "CFM_626",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 8,
    rating: 4,
    text: "Battlecry: Give a friendly minion +3 Health.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49620.png",
    tile: "CFM_626.png"
  },
  {
    name: "Counterfeit Coin",
    artist: "Joe Wilson",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 0,
    dbfId: 40437,
    flavor:
      "There is something funny about this coin… can't quite put my finger on it…",
    id: "CFM_630",
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Gain 1 Mana Crystal this turn only.",
    type: "SPELL",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49643.png",
    tile: "CFM_630.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 0,
            maxCards: 4,
            id: "195082e0-7131-4f14-b13c-608f1d750b28",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "whenever.*cast.*spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Brass Knuckles",
    artist: "Anton Magdalina",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 40438,
    durability: 3,
    flavor: "For the goon that wants to make a fashion statement.",
    id: "CFM_631",
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text: "After your hero attacks, give a random minion in your hand +1/+1.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "49680.png",
    tile: "CFM_631.png"
  },
  {
    name: "Lotus Assassin",
    artist: "Garrett Hanna",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 40441,
    flavor:
      "For 5000g, you can just give the Jade Lotus any name and they will assassinate and/or embarrass them.",
    health: 5,
    id: "CFM_634",
    mechanics: ["STEALTH"],
    rarity: "EPIC",
    set: 8,
    rating: 3,
    text: "Stealth. Whenever this attacks and kills a minion, gain Stealth.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49619.png",
    tile: "CFM_634.png"
  },
  {
    name: "Shadow Rager",
    artist: "Jon Neimeister",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 40464,
    flavor: "WE WENT THERE!",
    health: 1,
    id: "CFM_636",
    mechanics: ["STEALTH"],
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Stealth",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49752.png",
    tile: "CFM_636.png"
  },
  {
    name: "Patches the Pirate",
    artist: "James Ryman",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 40465,
    elite: true,
    flavor:
      "What do sailors yell when Patches steals their treasure chest full of laws and other things being transported to parliament for a vote?  'The Eyes have it!'",
    health: 1,
    id: "CFM_637",
    race: "PIRATE",
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text: "After you play a Pirate, summon this minion from your deck.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49624.png",
    tile: "CFM_637.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "4afbb267-b141-4087-9886-1c28b4803aa9",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Patches the Pirate"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grimestreet Enforcer",
    artist: "Mike Azevedo",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 40469,
    flavor: "'Sir, you don't have a permit to park your mount here.'",
    health: 4,
    id: "CFM_639",
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "At the end of your turn, give all minions in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49667.png",
    tile: "CFM_639.png"
  },
  {
    name: "Hobart Grapplehammer",
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 40482,
    elite: true,
    flavor:
      "Grapplehammer is the horrible mind behind the Automatic Piranha Launcher (banned in 7 districts)!",
    health: 2,
    id: "CFM_643",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text: "Battlecry: Give all weapons in your hand and deck +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49729.png",
    tile: "CFM_643.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7b8fb694-1919-4f32-b609-2b7f6b055006",
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
    name: "Backstreet Leper",
    artist: "Yewon Park",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40492,
    flavor:
      "Quit playing games with his heart. And his fingers. And foot. It's rude.",
    health: 1,
    id: "CFM_646",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Deathrattle: Deal 2 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49697.png",
    tile: "CFM_646.png"
  },
  {
    name: "Blowgill Sniper",
    artist: "Tyler West Studios",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 40493,
    flavor:
      "Imagine how much further his darts would go if he had lungs instead of gills!",
    health: 1,
    id: "CFM_647",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    race: "MURLOC",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Battlecry: Deal 1 damage.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49672.png",
    tile: "CFM_647.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "036fff23-f128-41ae-8ed7-d986fa37f524",
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
                minValue: "Blowgill Sniper"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Big-Time Racketeer",
    artist: "A.J. Nazzaro",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40494,
    flavor: "'It'd be a shame if someone disenchanted those Legendaries.'",
    health: 1,
    id: "CFM_648",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Summon a 6/6 Ogre.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49625.png",
    tile: "CFM_648.png"
  },
  {
    name: "Kabal Courier",
    artist: "Arthur Bozonnet",
    attack: 2,
    cardClass: ["MAGE", "PRIEST", "WARLOCK"],
    classes: ["MAGE", "PRIEST", "WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 40496,
    flavor:
      "Hey, you park your kodo under a harpy nest, you get what you deserve.",
    health: 2,
    id: "CFM_649",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "KABAL",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 8,
    rating: 4,
    text: "Battlecry: Discover a Mage, Priest, or Warlock card.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49621.png",
    tile: "CFM_649.png"
  },
  {
    name: "Grimscale Chum",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 40531,
    flavor:
      "Listen, see?  We'll take 'em to the docks, see?  And throw 'em in the sea, see?",
    health: 1,
    id: "CFM_650",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Give a random Murloc in your hand +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49685.png",
    tile: "CFM_650.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "2e866193-f850-44c9-9dec-cd3e05d39bd3",
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
    name: "Naga Corsair",
    artist: "Rafael Zanchetin",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40889,
    flavor:
      "Hook-tails are nice and all but she keeps getting stuck on things.",
    health: 4,
    id: "CFM_651",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Give your weapon +1 Attack.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "49730.png",
    tile: "CFM_651.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c8414fde-387a-4bfc-9522-44fc7d299235",
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
            id: "407f43a2-81e3-4888-822c-46d69092e182",
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
    name: "Second-Rate Bruiser",
    artist: "Trent Kaniuga",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40906,
    flavor: "He'll be a first-rate bruiser once he gets used to his contacts.",
    health: 5,
    id: "CFM_652",
    mechanics: ["TAUNT"],
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Taunt Costs (2) less if your opponent has at least three minions.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "49626.png",
    tile: "CFM_652.png"
  },
  {
    name: "Hired Gun",
    artist: "Eric Braddock",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40911,
    flavor:
      "He loves his job and would do it for free!  (But don't tell his boss!)",
    health: 3,
    id: "CFM_653",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49671.png",
    tile: "CFM_653.png"
  },
  {
    name: "Friendly Bartender",
    artist: "Jerry Mascho",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 40914,
    flavor: "'What'll it be?  A Jade Brew?  A Grimy Goose?  A Kabal Manatini?'",
    health: 3,
    id: "CFM_654",
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "At the end of your turn, restore 1 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49645.png",
    tile: "CFM_654.png"
  },
  {
    name: "Toxic Sewer Ooze",
    artist: "Anton Magdalina",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40921,
    flavor:
      "When Sergeant Sally shows up unexpectedly, DO NOT FLUSH YOUR MANA CRYSTALS DOWN THE TOILET.",
    health: 3,
    id: "CFM_655",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Remove 1 Durability from your opponent's weapon.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49701.png",
    tile: "CFM_655.png"
  },
  {
    name: "Streetwise Investigator",
    artist: "Adam Byrne",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40928,
    flavor:
      "'Hmmmm…  Call it a hunch, but I'm starting to think that there may be some kind of criminal activity going on in Gadgetzan.'",
    health: 6,
    id: "CFM_656",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["STEALTH"],
    set: 8,
    rating: 1,
    text: "Battlecry: Enemy minions lose Stealth.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49757.png",
    tile: "CFM_656.png"
  },
  {
    name: "Kabal Songstealer",
    artist: "Alex Alexandrov",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 40929,
    flavor:
      "Gadgetzan Writer’s Award goes to the player who writes the most compelling fanfic about why this Arakkoa has a golden frog in his hand!",
    health: 5,
    id: "CFM_657",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["SILENCE"],
    set: 8,
    rating: 3,
    text: "Battlecry: Silence a minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49753.png",
    tile: "CFM_657.png"
  },
  {
    name: "Backroom Bouncer",
    artist: "Paul Mafayon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40931,
    flavor: "'WHY ARE YOU IN THE BACK ROOM?  WHO IS WATCHING THE FRONT?!'",
    health: 4,
    id: "CFM_658",
    rarity: "RARE",
    set: 8,
    rating: 1,
    text: "Whenever a friendly minion dies, gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49675.png",
    tile: "CFM_658.png"
  },
  {
    name: "Gadgetzan Socialite",
    artist: "Eva Wildermann",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 40949,
    flavor:
      "Comment on her height, and she'll go from flapper to kneecapper in seconds flat.",
    health: 2,
    id: "CFM_659",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "COMMON",
    set: 8,
    rating: 1,
    targetingArrowText: "Restore 2 Health.",
    text: "Battlecry: Restore 2 Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49743.png",
    tile: "CFM_659.png"
  },
  {
    name: "Manic Soulcaster",
    artist: "J. Ejsing & E. Amundsen",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 40935,
    flavor:
      "When casting a tournament, you really have to put your soul into it!",
    health: 4,
    id: "CFM_660",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 8,
    rating: 3,
    text: "Battlecry: Choose a friendly minion. Shuffle a copy into your deck.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49637.png",
    tile: "CFM_660.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1f0dfe9a-d416-4f01-8b98-62ab2a44717c",
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
    name: "Pint-Size Potion",
    artist: "Matt Dixon",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 40936,
    flavor: "I hope you didn't disenchant your Shadow Word: Horror!",
    id: "CFM_661",
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Give all enemy minions -3 Attack this turn only.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "49644.png",
    tile: "CFM_661.png"
  },
  {
    name: "Dragonfire Potion",
    artist: "Charlene Le Scanff",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 40938,
    flavor:
      "No one was brave enough to fire the dragon in person… so they made the potion do it.",
    id: "CFM_662",
    rarity: "EPIC",
    set: 8,
    rating: 4,
    text: "Deal $5 damage to all minions except Dragons.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "49648.png",
    tile: "CFM_662.png"
  },
  {
    name: "Kabal Trafficker",
    artist: "Jon Neimeister",
    attack: 6,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 40940,
    flavor:
      "She ships illicit mana crystals around the world in packages marked: FUNNEL CAKE.",
    health: 6,
    id: "CFM_663",
    rarity: "EPIC",
    set: 8,
    rating: 3,
    text: "At the end of your turn, add a random Demon to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49742.png",
    tile: "CFM_663.png"
  },
  {
    name: "Worgen Greaser",
    artist: "Alex Alexandrov",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40950,
    flavor: "Hair products are 79% of his monthly budget.",
    health: 3,
    id: "CFM_665",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49670.png",
    tile: "CFM_665.png"
  },
  {
    name: "Grook Fu Master",
    artist: "Mike Azevedo",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40951,
    flavor: "Grook Fu, the ancient Hozen art of bashing heads with a stick.",
    health: 5,
    id: "CFM_666",
    mechanics: ["WINDFURY"],
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49658.png",
    tile: "CFM_666.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "711afbea-c71c-4b36-8555-61879d01caa7",
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
    name: "Bomb Squad",
    artist: "Mauricio Herrera",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40952,
    flavor:
      "Please don't explode!  Please don't explode!  Please don't explode!",
    health: 2,
    id: "CFM_667",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 8,
    rating: 1,
    text:
      "Battlecry: Deal 5 damage to an enemy minion. Deathrattle: Deal 5 damage to your hero.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "49696.png",
    tile: "CFM_667.png"
  },
  {
    name: "Doppelgangster",
    artist: "Zoltan Boros",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40953,
    flavor: "'Every me, get in here!'",
    health: 2,
    id: "CFM_668",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Battlecry: Summon 2 copies of this minion.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "49677.png",
    tile: "CFM_668.png"
  },
  {
    name: "Burgly Bully",
    artist: "Dan Scott",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40954,
    flavor:
      "He only burgles to pay the bills.  He is really just a bully at heart.",
    health: 6,
    id: "CFM_669",
    rarity: "EPIC",
    set: 8,
    rating: 3,
    text: "Whenever your opponent casts a spell, add a Coin to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49704.png",
    tile: "CFM_669.png"
  },
  {
    name: "Mayor Noggenfogger",
    artist: "Tooth",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 40955,
    elite: true,
    flavor:
      "This flavor text was randomly generated.  If it happens to form words and make sense, that is purely by chance.",
    health: 4,
    id: "CFM_670",
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text: "All targets are chosen randomly.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49756.png",
    tile: "CFM_670.png"
  },
  {
    name: "Cryomancer",
    artist: "Tyler West Studios",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 40988,
    flavor: "She loves Frozen. I mean who doesn't?",
    health: 5,
    id: "CFM_671",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 8,
    rating: 1,
    text: "Battlecry: If an enemy is Frozen, gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49739.png",
    tile: "CFM_671.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "999c2b87-6bcf-4b01-b390-906eebcfc333",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "freeze"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Madam Goya",
    artist: "Jakub Kasper",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 41841,
    elite: true,
    flavor:
      "She has set up her Black Market here in Gadgetzan for one purpose, to make a KILLING when Beanie Babies make their inevitable comeback.",
    health: 3,
    id: "CFM_672",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text:
      "Battlecry: Choose a friendly minion. Swap it with a minion in your deck.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49684.png",
    tile: "CFM_672.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "d948a107-12ed-428c-85d8-aac878619a36",
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
    name: "Don Han'Cho",
    artist: "Tyson Murphy",
    attack: 5,
    cardClass: ["HUNTER", "PALADIN", "WARRIOR"],
    classes: ["HUNTER", "PALADIN", "WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 40703,
    elite: true,
    flavor:
      "The brilliant mastermind of the Grimy Goons, Han sometimes thinks about ditching the idiot Cho, but that would just tear him apart.",
    health: 6,
    id: "CFM_685",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "GRIMY_GOONS",
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text: "Battlecry: Give a random minion in your hand +5/+5.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49683.png",
    tile: "CFM_685.png"
  },
  {
    name: "Inkmaster Solia",
    artist: "J. Ejsing & E. Amundsen",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 7,
    dbfId: 40701,
    elite: true,
    flavor:
      "Solia marks the Kabal with intricate tattoos that grant immense power. Also it makes it harder for other gangs to recruit from their numbers. BACK OFF, GOONS.",
    health: 5,
    id: "CFM_687",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 1,
    text:
      "Battlecry: If your deck has no duplicates, the next spell you cast this turn costs (0).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49693.png",
    tile: "CFM_687.png",
    deckFilters: [
      {
        id: "45a5c81a-d7f0-4818-9de4-5da7b6c2edf9",
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
            id: "e980b5d5-79e2-4de3-932f-dd79ecb9c8f5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "duplicates"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "b8c718da-8f69-4feb-abb0-eb141b9025c7",
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
          }
        ]
      }
    ]
  },
  {
    name: "Spiked Hogrider",
    artist: "Mike Sass",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 40700,
    flavor:
      "Did you know the Hogchoppers compete every year at the Mirage Raceway?  They do.  It's a real group.",
    health: 5,
    id: "CFM_688",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["CHARGE", "TAUNT"],
    set: 8,
    rating: 2,
    text: "Battlecry: If an enemy minion has Taunt, gain Charge.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49687.png",
    tile: "CFM_688.png"
  },
  {
    name: "Jade Shuriken",
    artist: "Izzy Hoover",
    cardClass: ["ROGUE"],
    collectible: true,
    collectionText: "Deal $2 damage. Combo: Summon a Jade Golem.",
    cost: 2,
    dbfId: 40698,
    flavor:
      "Good news is, after you remove it from your wound, you can use it to pay your medical bills!",
    id: "CFM_690",
    mechanics: ["COMBO"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["CHOOSE_ONE", "JADE_GOLEM"],
    set: 8,
    rating: 2,
    text: "Deal $2 damage. Combo: Summon a{1} {0} Jade Golem.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL", "FAST"],
    imageUrl: "49711.png",
    tile: "CFM_690.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "b27a5679-03b4-431a-9b1e-f49398b9eb3f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Jade Swarmer",
    artist: "Slawomir Maniak",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    collectionText: "Stealth Deathrattle: Summon a Jade Golem.",
    cost: 2,
    dbfId: 40697,
    flavor: "He's so good at swarming, he can swarm all by himself!",
    health: 1,
    id: "CFM_691",
    mechanics: ["DEATHRATTLE", "STEALTH"],
    rarity: "COMMON",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 2,
    text: "Stealth Deathrattle: Summon a{1} {0} Jade Golem.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49713.png",
    tile: "CFM_691.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "8e665f0d-02f9-4e47-a252-a9ecffadaa00",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Gadgetzan Ferryman",
    artist: "Zoltan Boros",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 40696,
    flavor: "Is it just me, or is there something fishy about that ferryman?",
    health: 3,
    id: "CFM_693",
    mechanics: ["COMBO"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_FOR_COMBO: 0
    },
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Combo: Return a friendly minion to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49722.png",
    tile: "CFM_693.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e715e4dd-40e0-48d1-a0ee-9332356748ee",
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
                minValue: "BATTLECRY"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadow Sensei",
    artist: "Andrew Hou",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 40695,
    flavor:
      "He used to be Aya's tutor, but she fired him for bugging her too much.",
    health: 4,
    id: "CFM_694",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_STEALTHED_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    referencedTags: ["STEALTH"],
    set: 8,
    rating: 2,
    text: "Battlecry: Give a Stealthed minion +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49725.png",
    tile: "CFM_694.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "475b7073-2451-4cd9-aef0-a96d64549335",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "stealth"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Devolve",
    artist: "Sean McNally",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 40694,
    flavor:
      "Ragnaros looked down. He looked like some kind of War Golem. 'WHAT HAVE YOU DONE TO ME,' he yelled. But all that came out was a deep grinding sound. He began to cry.",
    id: "CFM_696",
    playRequirements: { REQ_HERO_TARGET: 0 },
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Transform all enemy minions into random ones that cost (1) less.",
    type: "SPELL",
    extra: ["HARD_REMOVAL", "STALL"],
    imageUrl: "49715.png",
    tile: "CFM_696.png"
  },
  {
    name: "Lotus Illusionist",
    artist: "Luke Mancini",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 40693,
    flavor:
      "If you think her Illidan and Sylvanas cosplay is great, wait till you see her Reno Jackson!",
    health: 5,
    id: "CFM_697",
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text:
      "After this minion attacks a hero, transform it into a  random 6-Cost minion.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49751.png",
    tile: "CFM_697.png"
  },
  {
    name: "Seadevil Stinger",
    artist: "Yewon Park",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 40691,
    flavor: "Pretty harmless unless you're a Seadevil.",
    health: 2,
    id: "CFM_699",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "RARE",
    set: 8,
    rating: 1,
    text:
      "Battlecry: The next Murloc you play this turn costs  Health instead of Mana.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49695.png",
    tile: "CFM_699.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a63ec9ae-eeaf-4063-ba46-8a0f8fa71c3c",
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
    name: "Jade Lightning",
    artist: "Phil Saunders",
    cardClass: ["SHAMAN"],
    collectible: true,
    collectionText: "Deal $4 damage. Summon a Jade Golem.",
    cost: 4,
    dbfId: 40455,
    flavor: "Jade Lightning, goooo Jade Lightning!",
    id: "CFM_707",
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "COMMON",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 4,
    text: "Deal $4 damage. Summon a{1} {0} Jade Golem.",
    type: "SPELL",
    extra: ["DAMAGE", "SMALL_REMOVAL", "TEMPO", "FAST"],
    imageUrl: "49707.png",
    tile: "CFM_707.png"
  },
  {
    name: "Jade Blossom",
    artist: "Zoltan Boros",
    cardClass: ["DRUID"],
    collectible: true,
    collectionText: "Summon a Jade Golem. Gain an empty Mana Crystal.",
    cost: 3,
    dbfId: 40523,
    flavor:
      "Meditating under a jade blossom is said to grant you wisdom, unless you have a pollen allergy.",
    id: "CFM_713",
    playRequirements: { REQ_MINION_SLOT_OR_MANA_CRYSTAL_SLOT: 0 },
    rarity: "COMMON",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 4,
    text: "Summon a{1} {0} Jade Golem. Gain an empty Mana Crystal.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "49703.png",
    tile: "CFM_713.png"
  },
  {
    name: "Jade Spirit",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["DRUID", "ROGUE", "SHAMAN"],
    classes: ["DRUID", "ROGUE", "SHAMAN"],
    collectible: true,
    collectionText: "Battlecry: Summon a Jade Golem.",
    cost: 4,
    dbfId: 40527,
    flavor:
      "'He's so cute!  I just want to squeeze him, then use him for Jade Golem parts!' - Aya Blackpaw",
    health: 3,
    id: "CFM_715",
    mechanics: ["BATTLECRY", "JADE_GOLEM"],
    multiClassGroup: "JADE_LOTUS",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Battlecry: Summon a{1} {0} Jade Golem.",
    type: "MINION",
    extra: ["MIN_GEN"],
    imageUrl: "49708.png",
    tile: "CFM_715.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "e832f0b7-9181-4e9d-95a7-0bff58365d02",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sleep with the Fishes",
    artist: "James Ryman",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 41414,
    flavor:
      "If you're sleeping with the fishes, we highly suggest not bringing an electric blanket.",
    id: "CFM_716",
    rarity: "EPIC",
    set: 8,
    rating: 4,
    text: "Deal $3 damage to all damaged minions.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "49746.png",
    tile: "CFM_716.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "eeca4205-f197-4057-bc62-f4cc8b88efde",
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
    name: "Jade Claws",
    artist: "A.J. Nazzaro",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    collectionText: "Battlecry: Summon a Jade Golem. Overload: (1)",
    cost: 2,
    dbfId: 40529,
    durability: 2,
    flavor: "'Best manicure ever!' - Aya Blackpaw",
    id: "CFM_717",
    mechanics: ["BATTLECRY", "OVERLOAD"],
    overload: 1,
    rarity: "RARE",
    referencedTags: ["JADE_GOLEM"],
    set: 8,
    rating: 4,
    text: "Battlecry: Summon a{1} {0} Jade Golem. Overload: (1)",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO", "FAST"],
    imageUrl: "49724.png",
    tile: "CFM_717.png"
  },
  {
    name: "Krul the Unshackled",
    artist: "James Ryman",
    attack: 7,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 9,
    dbfId: 40537,
    elite: true,
    flavor:
      "Spicklefizz pondered his life choices as he looked at the chain around his neck. 'Become a warlock,' they said. 'You get to enslave demons,' they said.",
    health: 9,
    id: "CFM_750",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text:
      "Battlecry: If your deck has no duplicates, summon all  Demons from your hand. ",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "49744.png",
    tile: "CFM_750.png",
    deckFilters: [
      {
        id: "d150bf27-5c61-4368-a7e4-7850827bde1d",
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
            id: "a0526851-25a9-4629-9323-d7ebf33310a8",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "duplicates"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "a2ed19a7-be0c-4649-9ec4-8758f097023a",
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
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Abyssal Enforcer",
    artist: "Luke Mancini",
    attack: 6,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 7,
    dbfId: 40541,
    flavor:
      "The Kabal print this on every package of illicit Mana Crystals: WARNING - DO NOT PUT WITHIN REACH OF ABYSSALS. THIS IS NOT APPROVED FOR USE BY FLAMING DEMONS OF ANY KIND.",
    health: 6,
    id: "CFM_751",
    mechanics: ["BATTLECRY"],
    race: "DEMON",
    rarity: "COMMON",
    set: 8,
    rating: 3,
    text: "Battlecry: Deal 3 damage to all other characters.",
    type: "MINION",
    extra: ["AOE", "TEMPO"],
    imageUrl: "49691.png",
    tile: "CFM_751.png"
  },
  {
    name: "Stolen Goods",
    artist: "Mark Gibbons",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 40566,
    flavor: "It fell off a kodo, I promise!",
    id: "CFM_752",
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 8,
    rating: 1,
    text: "Give a random Taunt minion in your hand +3/+3.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "49661.png",
    tile: "CFM_752.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "2366c448-e057-4ce6-ad64-770d4bba4e31",
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
    name: "Grimestreet Outfitter",
    artist: "Peter Stapleton",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 40567,
    flavor: "If you bargain hard, he'll throw in the hat.",
    health: 1,
    id: "CFM_753",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Give all minions in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "49662.png",
    tile: "CFM_753.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e117f477-039b-4845-8e44-3f519877a10f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give .* in your hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Grimy Gadgeteer",
    artist: "Wayne Reynolds",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 40568,
    flavor: "'You look like a Gadgetgun 3000-Mark IV man, am I right?'",
    health: 3,
    id: "CFM_754",
    rarity: "COMMON",
    set: 8,
    rating: 3,
    text: "At the end of your turn, give a random minion in your hand +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49679.png",
    tile: "CFM_754.png"
  },
  {
    name: "Grimestreet Pawnbroker",
    artist: "Mauricio Herrera",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 40569,
    flavor:
      "'I don't know a lot about used GvG cards, so I'm going to have to call in an expert.'",
    health: 3,
    id: "CFM_755",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 8,
    rating: 2,
    text: "Battlecry: Give a random weapon in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49668.png",
    tile: "CFM_755.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5eb6e405-a530-4853-9abf-fae34b3d8ca6",
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
    name: "Alley Armorsmith",
    artist: "Rafael Zanchetin",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 40574,
    flavor: "The rent is cheap and she passes the savings onto YOU!",
    health: 7,
    id: "CFM_756",
    mechanics: ["TAUNT"],
    rarity: "RARE",
    set: 8,
    rating: 4,
    text: "Taunt Whenever this minion deals damage, gain that much Armor.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "49663.png",
    tile: "CFM_756.png"
  },
  {
    name: "Meanstreet Marshal",
    artist: "Richie Marella",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 40577,
    flavor:
      "Remember, submit your bribes directly to the Marshal - it's the law!",
    health: 2,
    id: "CFM_759",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text: "Deathrattle: If this minion has 2 or more Attack, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49641.png",
    tile: "CFM_759.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6737cec2-e978-43d0-ba45-37ac6b8ec11e",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give .* in your hand"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Kabal Crystal Runner",
    artist: "L. Lullabi & K. Turovec",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 40583,
    flavor:
      "'Listen, I can cut you in on a little of this premium mana, but you can't tell my boss.'",
    health: 5,
    id: "CFM_760",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 8,
    rating: 3,
    text: "Costs (2) less for each Secret you've played this game.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49700.png",
    tile: "CFM_760.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "f81a6d67-9165-4302-810e-bd4e05ca462d",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "secret"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Eater of Secrets"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Kezan Mystic"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Chief Inspector"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shaku, the Collector",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 40905,
    elite: true,
    flavor:
      "Aya even staged an intervention once, but Shaku still insists that he is not a hoarder.",
    health: 3,
    id: "CFM_781",
    mechanics: ["STEALTH"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 4,
    text:
      "Stealth. Whenever this attacks, add a random card to your hand <i>(from your opponent's class).</i>",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "49657.png",
    tile: "CFM_781.png"
  },
  {
    name: "Dirty Rat",
    artist: "Dany Orizio",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 41567,
    flavor: "It's not his fault…  Someone keeps stealing his soap!",
    health: 6,
    id: "CFM_790",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "EPIC",
    set: 8,
    rating: 3,
    text:
      "Taunt Battlecry: Your opponent summons a random minion from their hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49673.png",
    tile: "CFM_790.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 3,
            maxCards: 4,
            id: "2946ba36-a986-4ae2-8d84-3bce24a9192e",
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
    name: "Getaway Kodo",
    artist: "Rudy Siswanto",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 40587,
    flavor: "Get to da Kodo! Now!",
    id: "CFM_800",
    mechanics: ["SECRET"],
    rarity: "RARE",
    set: 8,
    rating: 3,
    text: "Secret: When a friendly minion dies, return it to your hand.",
    type: "SPELL",
    extra: ["SECRET", "FAST"],
    imageUrl: "49640.png",
    tile: "CFM_800.png"
  },
  {
    name: "Wrathion",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40603,
    elite: true,
    flavor:
      "Wrathion, son of Deathwing, is a dragon.  Why isn't he tagged as a dragon, you ask?  WHAT, ARE YOU TRYING TO BLOW HIS COVER??",
    health: 5,
    id: "CFM_806",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text:
      "Taunt. Battlecry: Draw cards until you draw one that isn't a Dragon.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW"],
    imageUrl: "49731.png",
    tile: "CFM_806.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "604021c3-1e4e-4b0b-a95c-c4dfb2a6ef03",
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
    name: "Auctionmaster Beardo",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 40605,
    elite: true,
    flavor:
      "Gadgetzan has always run an under-the-table auction house, and business has been PRETTY good for Beardo since the population explosion.  And since the explosion that destroyed the competing auction houses in the city.",
    health: 4,
    id: "CFM_807",
    rarity: "LEGENDARY",
    set: 8,
    rating: 3,
    text: "After you cast a spell, refresh your Hero Power.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49659.png",
    tile: "CFM_807.png"
  },
  {
    name: "Genzo, the Shark",
    artist: "Garrett Hanna",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40607,
    elite: true,
    flavor:
      "Infamous in the seedy underground card rooms of Gadgetzan, he got his nickname winning the coveted Shark Plushie in the city's first Hearthstone tournament.",
    health: 4,
    id: "CFM_808",
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text: "Whenever this attacks, both players draw until they have 3 cards.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "49737.png",
    tile: "CFM_808.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "f884ec58-72fb-47ef-81bb-97d9bd44bd1b",
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
    name: "Tanaris Hogchopper",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40611,
    flavor:
      "The Hogchoppers are well-known throughout Kalimdor for being a real, actual group.",
    health: 4,
    id: "CFM_809",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["CHARGE"],
    set: 8,
    rating: 1,
    text: "Battlecry: If your opponent's hand is empty, gain Charge.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49688.png",
    tile: "CFM_809.png"
  },
  {
    name: "Leatherclad Hogleader",
    artist: "Mike Sass",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40613,
    flavor:
      "The Hogchoppers, the terrors of Tanaris, can always be found at one tavern or another in Gadgetzan, refueling for totally real and legit adventures that they go on.",
    health: 6,
    id: "CFM_810",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["CHARGE"],
    set: 8,
    rating: 2,
    text:
      "Battlecry: If your opponent has 6 or more cards in hand, gain Charge.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49686.png",
    tile: "CFM_810.png"
  },
  {
    name: "Lunar Visions",
    artist: "Arthur Bozonnet",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 40615,
    flavor:
      "The true mystery of lunar visions is how there is nothing to watch when there are so many channels.",
    id: "CFM_811",
    rarity: "EPIC",
    set: 8,
    rating: 2,
    text: "Draw 2 cards. Minions drawn cost (2) less.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "49635.png",
    tile: "CFM_811.png"
  },
  {
    name: "Wickerflame Burnbristle",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 40636,
    elite: true,
    flavor:
      "Wickerflame spent years as a recruit for the Goons, never making the big-time because he always fired his chest-cannon too slowly.  'Hey,' he thought, 'maybe if I keep my beard lit on fire, I can do this faster.'  BOOM, promoted.",
    health: 2,
    id: "CFM_815",
    mechanics: ["DIVINE_SHIELD", "LIFESTEAL", "TAUNT"],
    rarity: "LEGENDARY",
    set: 8,
    rating: 4,
    text: "Divine Shield, Taunt, Lifesteal",
    type: "MINION",
    race: " ",
    extra: ["STALL", "FAST"],
    imageUrl: "49633.png",
    tile: "CFM_815.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 0,
            maxCards: 2,
            id: "2983c786-a221-448e-8059-93afb34714b7",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["MINION", "HERO", "SPELL", "WEAPON"]
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
    name: "Virmen Sensei",
    artist: "Dany Orizio",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 40641,
    flavor: "There is no carrot.",
    health: 5,
    id: "CFM_816",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "RARE",
    set: 8,
    rating: 1,
    text: "Battlecry: Give a friendly Beast +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49721.png",
    tile: "CFM_816.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "62de3019-0b6c-4647-9ac5-d55693ed813b",
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
    name: "Daring Reporter",
    artist: "Sojin Hwang",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 40741,
    flavor: "She's working on a story!  While skydiving!",
    health: 3,
    id: "CFM_851",
    rarity: "COMMON",
    set: 8,
    rating: 1,
    text: "Whenever your opponent draws a card, gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49723.png",
    tile: "CFM_851.png"
  },
  {
    name: "Lotus Agents",
    artist: "Grace Liu",
    attack: 5,
    cardClass: ["DRUID", "ROGUE", "SHAMAN"],
    classes: ["DRUID", "ROGUE", "SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 40742,
    flavor: "Mostly, they stand around and look cool.",
    health: 3,
    id: "CFM_852",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "JADE_LOTUS",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 8,
    rating: 3,
    text: "Battlecry: Discover a Druid, Rogue, or Shaman card.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "49629.png",
    tile: "CFM_852.png"
  },
  {
    name: "Grimestreet Smuggler",
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["HUNTER", "PALADIN", "WARRIOR"],
    classes: ["HUNTER", "PALADIN", "WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 40743,
    flavor:
      "She's got anything you want.  Need the latest derpinger?  No problem!",
    health: 4,
    id: "CFM_853",
    mechanics: ["BATTLECRY"],
    multiClassGroup: "GRIMY_GOONS",
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Battlecry: Give a random minion in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49664.png",
    tile: "CFM_853.png"
  },
  {
    name: "Ancient of Blossoms",
    artist: "Arthur Gimaldinov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40744,
    flavor: "His new shampoo is really working!",
    health: 8,
    id: "CFM_854",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 8,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49733.png",
    tile: "CFM_854.png"
  },
  {
    name: "Defias Cleaner",
    artist: "Gonzalo Ordonez",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 40745,
    flavor:
      "His house cleaning service is quite thorough.  Not a spot to be found... or any of your stuff!",
    health: 7,
    id: "CFM_855",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE", "SILENCE"],
    set: 8,
    rating: 2,
    text: "Battlecry: Silence a minion with Deathrattle.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "49738.png",
    tile: "CFM_855.png"
  },
  {
    name: "Unlicensed Apothecary",
    artist: "Jon Neimeister",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 40598,
    flavor:
      "Get the ingredients wrong on ONE healing potion and they take your license. What a world!",
    health: 5,
    id: "CFM_900",
    race: "DEMON",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "After you summon a minion, deal 5 damage to your hero.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "49747.png",
    tile: "CFM_900.png"
  },
  {
    name: "Aya Blackpaw",
    artist: "Glenn Rane",
    attack: 5,
    cardClass: ["DRUID", "ROGUE", "SHAMAN"],
    classes: ["DRUID", "ROGUE", "SHAMAN"],
    collectible: true,
    collectionText: " Battlecry and Deathrattle: Summon a Jade Golem.",
    cost: 6,
    dbfId: 40596,
    elite: true,
    flavor:
      "Though young, Aya took over as the leader of Jade Lotus through her charisma and strategic acumen when her predecessor was accidentally crushed by a jade golem.",
    health: 3,
    id: "CFM_902",
    mechanics: ["BATTLECRY", "DEATHRATTLE", "JADE_GOLEM"],
    multiClassGroup: "JADE_LOTUS",
    rarity: "LEGENDARY",
    set: 8,
    rating: 2,
    text: "Battlecry and Deathrattle: Summon a{1} {0} Jade Golem.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "49706.png",
    tile: "CFM_902.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "4c8f0eaf-783b-439e-a64a-ba49d40a4f49",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "Jade"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Small-Time Recruits",
    artist: "Daren Bader",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 40634,
    flavor: "Now we know why they wear tiny watches.",
    id: "CFM_905",
    rarity: "EPIC",
    set: 8,
    rating: 1,
    text: "Draw three 1-Cost minions from your deck.",
    type: "SPELL",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "49631.png",
    tile: "CFM_905.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "48b520fe-b476-4ea4-a90c-73c74bdae6af",
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
    name: "I Know a Guy",
    artist: "Kan Lui",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 40839,
    flavor: "Well… a guy who knows a guy.",
    id: "CFM_940",
    mechanics: ["DISCOVER"],
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 8,
    rating: 2,
    text: "Discover a Taunt minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "49623.png",
    tile: "CFM_940.png"
  }
];
