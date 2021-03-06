export const whispersOfTheOldGods = [
  {
    name: "Vilefin Inquisitor",
    artist: "Jerry Mascho",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 38227,
    flavor: "Nobody expects the Vilefin Inquisition!",
    health: 3,
    id: "OG_006",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Battlecry: Your Hero Power becomes 'Summon a   1/1 Murloc.'",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "33158.png",
    tile: "OG_006.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "f6aa46ac-bec5-4d77-a324-9ae3b7234003",
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
            maxCards: 4,
            id: "2ff9dec5-3436-4956-ba57-9ce11946b07a",
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
          }
        ]
      }
    ]
  },
  {
    name: "Primal Fusion",
    artist: "Jimmy Lo",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 38262,
    flavor:
      "Golce and Dabbana have a new line of Earth Totems available at vendors everywhere this holiday season.",
    id: "OG_023",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 1,
    text: "Give a minion +1/+1 for each of your Totems.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "35234.png",
    tile: "OG_023.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f76eec3d-4e00-4079-bdf4-bb7ce7b78b1a",
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
            minCards: 2,
            maxCards: 4,
            id: "7edb82ab-07dc-4b43-b8e5-3a36d84b2287",
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
    name: "Flamewreathed Faceless",
    artist: "E. M. Gist",
    attack: 7,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 38263,
    flavor: "He's on fire! Boomshakalaka!",
    health: 7,
    id: "OG_024",
    mechanics: ["OVERLOAD"],
    overload: 2,
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Overload: (2)",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "35226.png",
    tile: "OG_024.png"
  },
  {
    name: "Eternal Sentinel",
    artist: "J. Meyers & Nutchapol",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 38265,
    flavor: "Just try to avoid eye contact.",
    health: 2,
    id: "OG_026",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["OVERLOAD"],
    set: 6,
    rating: 3,
    text: "Battlecry: Unlock your Overloaded Mana Crystals.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35231.png",
    tile: "OG_026.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4a826673-36b1-4b93-99d9-5a82d92ca5b5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "overload"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Eternal Sentinel"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Evolve",
    artist: "Luca Zontini",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 38266,
    flavor:
      "So you say you want an evolution. Well, you know. We all want to change the board.",
    id: "OG_027",
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Transform your minions into random minions that cost (1) more.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "35232.png",
    tile: "OG_027.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7056543e-c499-48cd-ab40-ac5651321de5",
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
    name: "Thing from Below",
    artist: "Slawomir Maniak",
    attack: 5,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 38267,
    flavor:
      "Just can't resist the opportunity to hang around with a bunch of totems.",
    health: 5,
    id: "OG_028",
    mechanics: ["TAUNT"],
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Taunt Costs (1) less for each Totem you've summoned this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33159.png",
    tile: "OG_028.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "8b55a388-92d7-4273-b8be-5a7b83ac3e28",
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
    name: "Hammer of Twilight",
    artist: "James Ryman",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 38270,
    durability: 2,
    flavor: "Stop! It's Twilight Hammer time.",
    id: "OG_031",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Deathrattle: Summon a 4/2 Elemental.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE", "TEMPO"],
    imageUrl: "33163.png",
    tile: "OG_031.png"
  },
  {
    name: "Tentacles for Arms",
    artist: "Alex Konstad",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 38279,
    durability: 2,
    flavor: "That's right. Garrosh just slapped you to death with a tentacle.",
    id: "OG_033",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Deathrattle: Return this to your hand.",
    type: "WEAPON",
    extra: ["VALUE"],
    imageUrl: "33140.png",
    tile: "OG_033.png"
  },
  {
    name: "Silithid Swarmer",
    artist: "Jakub Kasber",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 38304,
    flavor: "If your hero doesn't attack, it's just 'Silithid Loner'.",
    health: 5,
    id: "OG_034",
    race: "BEAST",
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Can only attack if your hero attacked this turn.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35200.png",
    tile: "OG_034.png"
  },
  {
    name: "Y'Shaarj, Rage Unbound",
    artist: "Samwise",
    attack: 10,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38312,
    elite: true,
    flavor:
      "When he's working out, he binds all that rage back into a ponytail.",
    health: 10,
    id: "OG_042",
    rarity: "LEGENDARY",
    set: 6,
    rating: 4,
    text:
      "At the end of your turn, put a minion from your deck into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "33156.png",
    tile: "OG_042.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "49e6aafc-436a-42a6-8a4d-75bd0c85f334",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Y'Shaarj, Rage Unbound"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Fandral Staghelm",
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 38318,
    elite: true,
    flavor:
      "Always manages to mention 'Back when I was creating the World Tree…' in EVERY conversation. Sheesh! Enough already.",
    health: 5,
    id: "OG_044",
    mechanics: ["AURA"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 4,
    text: "Your Choose One cards and powers have both effects combined.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35208.png",
    tile: "OG_044.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "21e065e2-2ba7-452e-9f00-c2b2944895c1",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "choose one"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Infest",
    artist: "Anton Zemskov",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 38329,
    flavor:
      "The best part is the look on their face when you jump out of the cake! Err… corpse.",
    id: "OG_045",
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 6,
    rating: 1,
    text: "Give your minions 'Deathrattle: Add a random Beast to your hand.'",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "33146.png",
    tile: "OG_045.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d238343d-a600-4ad4-991d-7adab902122c",
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
    name: "Feral Rage",
    artist: "Alex Alexandrov",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 38334,
    flavor: "Let's be honest. One option is a lot ragier than the other.",
    id: "OG_047",
    mechanics: ["CHOOSE_ONE"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Choose One - Give your hero +4 Attack this turn; or Gain 8 Armor.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HEAL"],
    imageUrl: "35210.png",
    tile: "OG_047.png"
  },
  {
    name: "Mark of Y'Shaarj",
    artist: "Efrem Palacios",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 38337,
    flavor: "Y'Shaarj had three sons: Mark, Theodore, and Chris.",
    id: "OG_048",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Give a minion +2/+2. If it's a Beast, draw a card.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "33151.png",
    tile: "OG_048.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6f636f97-d27a-43d4-95f4-553f8caf51d4",
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
    name: "Forbidden Ancient",
    artist: "Grace Liu",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 38340,
    flavor:
      "This Ancient was banned from the local tavern after tucking a 'Dr. Boom' up its sleeve.",
    health: 1,
    id: "OG_051",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Battlecry: Spend all your Mana. Gain +1/+1 for each mana spent.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35213.png",
    tile: "OG_051.png"
  },
  {
    name: "On the Hunt",
    artist: "Zoltan Boros",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 38377,
    flavor: "The mastiff giggles if you don't hit any ducks.",
    id: "OG_061",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deal $1 damage. Summon a 1/1 Mastiff.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "35220.png",
    tile: "OG_061.png"
  },
  {
    name: "Bladed Cultist",
    artist: "Jakub Kasber",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 38391,
    flavor: "He has a poor understanding of the law of diminishing returns.",
    health: 2,
    id: "OG_070",
    mechanics: ["COMBO"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Combo: Gain +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "35198.png",
    tile: "OG_070.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "7ffeab29-32df-4c08-a69b-2ed8d1c1753e",
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
                minValue: "Bladed Cultist"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Journey Below",
    artist: "Zoltan Boros",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 38393,
    flavor: "Don't stop believing there's something below.",
    id: "OG_072",
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE", "DISCOVER"],
    set: 6,
    rating: 3,
    text: "Discover a Deathrattle card.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "35194.png",
    tile: "OG_072.png"
  },
  {
    name: "Thistle Tea",
    artist: "Matthew O'Connor",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 38395,
    flavor:
      "Aren't Thistles prickly?  Why would you drink them? I don't get Rogues.",
    id: "OG_073",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Draw a card. Add 2 extra copies of it to your hand.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "33174.png",
    tile: "OG_073.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "a4071fd7-55f4-427b-8c7f-c8c61b7ae00d",
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
    name: "Xaril, Poisoned Mind",
    artist: "Jaemin Kim",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 38403,
    elite: true,
    entourage: ["OG_080d", "OG_080e", "OG_080f", "OG_080c", "OG_080b"],
    flavor:
      "It's basically your own fault if you go around drinking weird green potions handed out by creepy mantid dudes.",
    health: 2,
    id: "OG_080",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 3,
    text: "Battlecry and Deathrattle: Add a random Toxin card to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "33139.png",
    tile: "OG_080.png"
  },
  {
    name: "Shatter",
    artist: "Trent Kaniuga",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 38407,
    flavor: "What's cooler than being cool?",
    id: "OG_081",
    playRequirements: {
      REQ_FROZEN_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 6,
    rating: 1,
    text: "Destroy a Frozen minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "35244.png",
    tile: "OG_081.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "bd322ee4-d554-4368-9b1a-9e3da44b7026",
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
    name: "Evolved Kobold",
    artist: "Genevieve Tsai & Nutchapol",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38408,
    flavor: "You no take tentacle!",
    health: 2,
    id: "OG_082",
    mechanics: ["SPELLPOWER"],
    rarity: "COMMON",
    set: 6,
    rating: 1,
    spellDamage: 2,
    text: "Spell Damage +2",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35254.png",
    tile: "OG_082.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3d0935d8-e591-48cb-9d62-5f5ad6ea0f79",
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
    name: "Twilight Flamecaller",
    artist: "Anton Zemskov",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 38409,
    flavor:
      "Make sure you summon a Twilight Marshmallowcaller too! Mmmm Mmm Mmm!!",
    health: 2,
    id: "OG_083",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Battlecry: Deal 1 damage to all enemy minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "35187.png",
    tile: "OG_083.png"
  },
  {
    name: "Demented Frostcaller",
    artist: "Arthur Gimaldinov",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 38412,
    flavor: "He prefers that you refer to him by his nickname: 'Frostwaker.'",
    health: 4,
    id: "OG_085",
    rarity: "RARE",
    referencedTags: ["FREEZE"],
    set: 6,
    rating: 1,
    text: "After you cast a spell, Freeze a random enemy.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35184.png",
    tile: "OG_085.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "dc88f885-4b3c-4a37-b331-d55613c012f3",
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
    name: "Forbidden Flame",
    artist: "Hideaki Takamura",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 0,
    dbfId: 38413,
    flavor:
      "WARNING: This flame is not to be used unless you are a licensed acolyte of the Old Gods.",
    id: "OG_086",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 6,
    rating: 2,
    text: "Spend all your Mana. Deal that much damage to a minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HARD_REMOVAL"],
    imageUrl: "33124.png",
    tile: "OG_086.png"
  },
  {
    name: "Servant of Yogg-Saron",
    artist: "Slawomir Maniak",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 38414,
    flavor:
      "Yogg-Saron always likes to complain about how he has too many servants and there are too many mouths to feed.",
    health: 4,
    id: "OG_087",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 6,
    rating: 2,
    text:
      "Battlecry: Cast a random spell that costs (5) or less <i>(targets chosen randomly)</i>.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33179.png",
    tile: "OG_087.png"
  },
  {
    name: "Cabalist's Tome",
    artist: "Milivoj Ceran",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 38418,
    flavor: "What's in there? I bet it's cookie recipes!",
    id: "OG_090",
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Add 3 random Mage spells to your hand.",
    type: "SPELL",
    extra: ["CARD_DRAW", "VALUE"],
    imageUrl: "33155.png",
    tile: "OG_090.png"
  },
  {
    name: "Power Word: Tentacles",
    artist: "Jesper Ejsing",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 38426,
    flavor: "Because you're wrapped in a protective layer of… tentacles?",
    id: "OG_094",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Give a minion +2/+6.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "35193.png",
    tile: "OG_094.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "8f7e27a0-c9fa-4f5d-9ac9-242a864fbc46",
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
    name: "Twilight Darkmender",
    artist: "Alex Garner",
    attack: 6,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 38429,
    flavor:
      "First she separates them from the lights, washes them in cold water, and hang-dries.",
    health: 5,
    id: "OG_096",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "RARE",
    set: 6,
    rating: 2,
    text:
      "Battlecry: If your C'Thun  has at least 10 Attack, restore 10 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35191.png",
    tile: "OG_096.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "a4a6d640-6058-4e2e-b161-7b51f9b8f2e0",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "3c98f823-1b1e-4df9-a8fb-5e169a60a8a1",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadow Word: Horror",
    artist: "Andrew Hou",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 38433,
    flavor: "It's more succinct than 'Shadow Word: Suck Into Vortex.'",
    id: "OG_100",
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Destroy all minions with 2 or less Attack.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "33150.png",
    tile: "OG_100.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "c14e9732-ec39-4ee3-8d70-192e98c3431d",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Pint-Size Potion"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Forbidden Shaping",
    artist: "A.J. Nazzaro",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 0,
    dbfId: 38434,
    flavor: "But the minion arrives covered in goo.",
    id: "OG_101",
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Spend all your Mana. Summon a random minion that costs that much.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "33125.png",
    tile: "OG_101.png"
  },
  {
    name: "Darkspeaker",
    artist: "Phroi Gardner",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38436,
    flavor:
      "People often think that Darkspeaker is the arch nemesis of Lightspeaker, but that title actually belongs to Heavyspeaker.",
    health: 6,
    id: "OG_102",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Battlecry: Swap stats with a friendly minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35229.png",
    tile: "OG_102.png"
  },
  {
    name: "Embrace the Shadow",
    artist: "Rafael Zanchetin",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 38439,
    flavor: "For when your Auchenai Soulpriests call in sick.",
    id: "OG_104",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "This turn, your healing effects deal damage instead.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "33176.png",
    tile: "OG_104.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "dc0a56b0-aa40-4c6e-99d4-010c6b1977e8",
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
    name: "Darkshire Librarian",
    artist: "Rafael Zanchetin",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 38447,
    flavor: "Do NOT be late with your overdue fines.",
    health: 2,
    id: "OG_109",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Battlecry: Discard a random card. Deathrattle: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35221.png",
    tile: "OG_109.png"
  },
  {
    name: "Darkshire Councilman",
    artist: "Garrett Hanna",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 38452,
    flavor: "Democracy in action!",
    health: 5,
    id: "OG_113",
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "After you summon a minion,  gain +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35224.png",
    tile: "OG_113.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "13443689-476d-4070-bd41-79994e4c1288",
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
    name: "Forbidden Ritual",
    artist: "Evgeniy Zagumennyy",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 0,
    dbfId: 38454,
    flavor: "Actually, C'Thun gives his full support for this ritual.",
    id: "OG_114",
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Spend all your Mana. Summon that many 1/1 Tentacles.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "35217.png",
    tile: "OG_114.png"
  },
  {
    name: "Spreading Madness",
    artist: "Mauricio Herrera",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 38456,
    flavor:
      "Most citizens of Darkshire wear those surgical masks to prevent spreading Madness to tourists.",
    id: "OG_116",
    mechanics: ["ImmuneToSpellpower"],
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Deal $9 damage randomly split among ALL characters.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "33169.png",
    tile: "OG_116.png"
  },
  {
    name: "Renounce Darkness",
    artist: "Dan Scott",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 38461,
    flavor: "SEE YA DARKNESS!",
    id: "OG_118",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text:
      "Replace your Hero Power and Warlock cards with another class's. The cards cost (1) less.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "33136.png",
    tile: "OG_118.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "a7bbd374-c0a5-477f-bf84-2025edb24c04",
            filters: [
              {
                property: "cardClass",
                operation: "INCLUDES",
                minValue: "WARLOCK"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Renounce Darkness"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Anomalus",
    artist: "Kan Liu",
    attack: 8,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 8,
    dbfId: 38463,
    elite: true,
    flavor: "That's short for 'Anomnomnomnomalus'.",
    health: 6,
    id: "OG_120",
    mechanics: ["DEATHRATTLE"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text: "Deathrattle: Deal 8 damage to all minions.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35230.png",
    tile: "OG_120.png"
  },
  {
    name: "Cho'gall",
    artist: "James Ryman",
    attack: 7,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 7,
    dbfId: 38464,
    elite: true,
    flavor:
      "Even after all this time, Gul'dan still makes Cho'gall go get donuts and coffee.",
    health: 7,
    id: "OG_121",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text:
      "Battlecry: The next spell you cast this turn costs Health instead of Mana.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33170.png",
    tile: "OG_121.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "9a86faf1-7c6e-44bc-93d0-011a5c5f8ca7",
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
          }
        ]
      }
    ]
  },
  {
    name: "Mukla, Tyrant of the Vale",
    artist: "Sam Nielson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 38468,
    elite: true,
    flavor: "Pro tip: DO NOT BOGART THE BANANAS.",
    health: 5,
    id: "OG_122",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 6,
    rating: 2,
    text: "Battlecry: Add 2 Bananas to your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "33149.png",
    tile: "OG_122.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "7f611bf8-fee3-4391-a8fb-9b9a9e733fb6",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "when.*cast.*spell"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shifter Zerus",
    artist: "Daria Tuzova",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 38475,
    elite: true,
    flavor: "It's like being able to play with THREE angry chickens!",
    health: 1,
    id: "OG_123",
    rarity: "LEGENDARY",
    set: 6,
    rating: 2,
    text: "Each turn this is in your hand, transform it into a random minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35190.png",
    tile: "OG_123.png"
  },
  {
    name: "Twin Emperor Vek'lor",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 38488,
    elite: true,
    flavor:
      "Do they make decisions based on age? 'I'm two minutes older therefore we burn this village.'",
    health: 6,
    id: "OG_131",
    mechanics: ["BATTLECRY", "RITUAL", "TAUNT"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 3,
    text:
      "Taunt Battlecry: If your C'Thun has at least 10 Attack, summon another Emperor.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35201.png",
    tile: "OG_131.png"
  },
  {
    name: "N'Zoth, the Corruptor",
    artist: "Tyson Murphy",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38496,
    elite: true,
    flavor:
      "Has not been able to get 'Under the Sea' out of his head for like FIVE THOUSAND YEARS.",
    health: 7,
    id: "OG_133",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 6,
    rating: 1,
    text: "Battlecry: Summon your Deathrattle minions that died this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33134.png",
    tile: "OG_133.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "cb708f32-9472-4637-bb25-c3a0fdfcca65",
            filters: [
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
    name: "Yogg-Saron, Hope's End",
    artist: "Tooth",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38505,
    elite: true,
    flavor: "I spell your doom... Y-O-U-R D-O-O-M!",
    health: 5,
    id: "OG_134",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text:
      "Battlecry: Cast a random spell for each spell you've cast this game <i>(targets chosen randomly)</i>.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33168.png",
    tile: "OG_134.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "ca9027e1-c844-44a0-9818-099e532f4255",
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
            minCards: 6,
            maxCards: 10,
            id: "e3f7be10-e08f-432c-8f00-bece035cfa8b",
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
    name: "Nerubian Prophet",
    artist: "Lars Grant-West",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 38517,
    flavor: "It’s a self-reducing prophecy.",
    health: 4,
    id: "OG_138",
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "At the start of your turn, reduce this card's Cost by (1).",
    type: "MINION",
    race: " ",
    extra: ["TEMPO"],
    imageUrl: "35233.png",
    tile: "OG_138.png"
  },
  {
    name: "Faceless Behemoth",
    artist: "Zoltan Boros",
    attack: 10,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38521,
    flavor:
      "Rejected names: Forty-Foot Faceless, Big ol' No-face, Huge Creature Sans Face, Teddy.",
    health: 10,
    id: "OG_141",
    rarity: "COMMON",
    set: 6,
    rating: 2,
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35249.png",
    tile: "OG_141.png"
  },
  {
    name: "Eldritch Horror",
    artist: "Mike Sass",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 38522,
    flavor:
      "Often wonders what path his life might have taken if he wasn't named, you know, 'Eldritch Horror'.",
    health: 10,
    id: "OG_142",
    rarity: "COMMON",
    set: 6,
    rating: 2,
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35253.png",
    tile: "OG_142.png"
  },
  {
    name: "Psych-o-Tron",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38526,
    flavor: "'Annoyinger-o-Tron' was just too unwieldy. And accurate.",
    health: 4,
    id: "OG_145",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Taunt Divine Shield",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35216.png",
    tile: "OG_145.png"
  },
  {
    name: "Corrupted Healbot",
    artist: "Jesper Esjing",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38528,
    flavor: "Not so much 'corrupted' as 'has terrible aim'.",
    health: 6,
    id: "OG_147",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Deathrattle: Restore 8 Health to the enemy hero.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "31109.png",
    tile: "OG_147.png"
  },
  {
    name: "Ravaging Ghoul",
    artist: "Dany Orizio",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 38530,
    flavor: "But goes by 'Ravishing Ghoul' when he hits the club.",
    health: 3,
    id: "OG_149",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Battlecry: Deal 1 damage to all other minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE", "TEMPO", "FAST"],
    imageUrl: "33161.png",
    tile: "OG_149.png"
  },
  {
    name: "Aberrant Berserker",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38531,
    flavor: "I berserk, therefore I am.",
    health: 5,
    id: "OG_150",
    mechanics: ["ENRAGED"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Enrage: +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35236.png",
    tile: "OG_150.png"
  },
  {
    name: "Tentacle of N'Zoth",
    artist: "J. Meyers & T. Washington",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 38532,
    flavor: "Because EVERYDAY is the Day of the Tentacle of N'zoth.",
    health: 1,
    id: "OG_151",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deathrattle: Deal 1 damage to all minions.",
    type: "MINION",
    race: " ",
    extra: ["AOE"],
    imageUrl: "33130.png",
    tile: "OG_151.png"
  },
  {
    name: "Grotesque Dragonhawk",
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 38533,
    flavor:
      "They say that 'grotesque is in the eye of the beholder,' but that's just because they've never seen a Grotesque Dragonhawk. Yikes!",
    health: 5,
    id: "OG_152",
    mechanics: ["WINDFURY"],
    race: "BEAST",
    rarity: "COMMON",
    set: 6,
    rating: 1,
    text: "Windfury",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35250.png",
    tile: "OG_152.png"
  },
  {
    name: "Bog Creeper",
    artist: "Matt Dixon",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 38534,
    flavor:
      "He's tried other things, but bog sidling, bog ambling, and bog trundling just aren't as effective as bog creeping.",
    health: 8,
    id: "OG_153",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35240.png",
    tile: "OG_153.png"
  },
  {
    name: "Bilefin Tidehunter",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 38538,
    flavor: "Bile actually makes for surprisingly sturdy fins.",
    health: 1,
    id: "OG_156",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 6,
    rating: 2,
    text: "Battlecry: Summon a 1/1 Ooze with Taunt.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35219.png",
    tile: "OG_156.png"
  },
  {
    name: "Zealous Initiate",
    artist: "Cole Eastburn",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 38541,
    flavor:
      "Ok, Initiate. You need to settle down and do your job. In this case, that means die so someone else can get a minor buff.",
    health: 1,
    id: "OG_158",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deathrattle: Give a random friendly minion +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "35222.png",
    tile: "OG_158.png"
  },
  {
    name: "Corrupted Seer",
    artist: "Ryan Metcalf",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 38545,
    flavor:
      "For seers, it's very handy to have your crystal ball hanging right in front of your face.",
    health: 3,
    id: "OG_161",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Battlecry: Deal 2 damage to all non-Murloc minions.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "35228.png",
    tile: "OG_161.png"
  },
  {
    name: "Disciple of C'Thun",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 38547,
    flavor:
      "C’Thun’s recruiting pitch involves cookies, which is why it’s the most popular Old God.",
    health: 1,
    id: "OG_162",
    mechanics: ["BATTLECRY", "RITUAL"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 6,
    rating: 2,
    text:
      "Battlecry: Deal 2 damage. Give your C'Thun +2/+2 <i>(wherever it is)</i>.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "35196.png",
    tile: "OG_162.png"
  },
  {
    name: "Blood of The Ancient One",
    artist: "A. J. Nazzaro",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 38567,
    flavor:
      "Add two cups of Blood of the Ancient One to one cup of lemon juice. Add just a dash of sugar and stir. Delicious!",
    health: 9,
    id: "OG_173",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text:
      "If you control two of these at the end of your turn, merge them into 'The Ancient One'.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33164.png",
    tile: "OG_173.png"
  },
  {
    name: "Faceless Shambler",
    artist: "Alex Alexandrov",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38569,
    flavor:
      "'What is that thing?!' 'I'm not sure, but it seems to be sort of Ysera shaped.'",
    health: 1,
    id: "OG_174",
    mechanics: ["BATTLECRY", "TAUNT"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Taunt Battlecry: Copy a friendly minion's Attack and Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33133.png",
    tile: "OG_174.png"
  },
  {
    name: "Shadow Strike",
    artist: "Dave Allsop",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 38578,
    flavor:
      "It's like a backstab, only from the front. And with two more stabs.",
    id: "OG_176",
    playRequirements: {
      REQ_TARGET_TO_PLAY: 0,
      REQ_UNDAMAGED_TARGET: 0
    },
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Deal $5 damage to an undamaged character.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "TEMPO"],
    imageUrl: "35195.png",
    tile: "OG_176.png"
  },
  {
    name: "Fiery Bat",
    artist: "Andrew Hou",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 38584,
    flavor: "He'll always be our first.",
    health: 1,
    id: "OG_179",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Deathrattle: Deal 1 damage to a random enemy.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35214.png",
    tile: "OG_179.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "39aea5cc-040a-4690-aa92-0dcb24d80ebe",
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
    name: "Klaxxi Amber-Weaver",
    artist: "Cole Eastburn",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 38621,
    flavor: "Amberweaving is a specialty course at the local trade school.",
    health: 5,
    id: "OG_188",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Battlecry: If your C'Thun has at least 10 Attack, gain +5 Health.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33121.png",
    tile: "OG_188.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "84eaaab9-280b-4669-be3c-b5d57cbfc7a8",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "ea18a226-236e-43a8-a31f-9cb82e0cbaf1",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Wisps of the Old Gods",
    artist: "Skan Srisuwan",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 38655,
    flavor:
      "They're just normal wisps, actually. The 'Of the Old Gods' bit is just marketing.",
    id: "OG_195",
    mechanics: ["CHOOSE_ONE"],
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Choose One - Summon seven 1/1 Wisps; or Give your minions +2/+2.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "33172.png",
    tile: "OG_195.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "56e9e71d-f489-40f4-b61e-a2e970cebd8e",
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
    name: "Forbidden Healing",
    artist: "Mike Franchina",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 0,
    dbfId: 38666,
    flavor:
      "No one's quite sure why it's forbidden. And yes, that should make you nervous.",
    id: "OG_198",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Spend all your Mana. Restore twice that much Health.",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "33126.png",
    tile: "OG_198.png"
  },
  {
    name: "Validated Doomsayer",
    artist: "Dan Orizio",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38669,
    flavor:
      "Really feels good about himself and is in a much better place now. But… he sure does miss piloting those shredders.",
    health: 7,
    id: "OG_200",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "At the start of your turn, set this minion's Attack to 7.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "31115.png",
    tile: "OG_200.png"
  },
  {
    name: "Mire Keeper",
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 38718,
    flavor: "'Hey.... Is that Mire for sale?'  'No.  I'm keeping it.'",
    health: 3,
    id: "OG_202",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    set: 6,
    rating: 4,
    text: "Choose One - Summon a 2/2 Slime; or Gain an empty Mana Crystal.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "33162.png",
    tile: "OG_202.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "7d3e7202-b126-4fd3-941e-39f40138783f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "mana crystal"
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
    name: "Stormcrack",
    artist: "Maurico Herrera",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 38724,
    flavor: "WARNING: DO NOT TOUCH THE PURPLE BALL OF LIGHTNING",
    id: "OG_206",
    mechanics: ["OVERLOAD"],
    overload: 1,
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deal $4 damage to a minion. Overload: (1)",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "35227.png",
    tile: "OG_206.png"
  },
  {
    name: "Faceless Summoner",
    artist: "Mark Abadier",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 38725,
    flavor: "They never get the recognition they deserve.",
    health: 5,
    id: "OG_207",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Battlecry: Summon a random 3-Cost minion.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "TEMPO"],
    imageUrl: "33178.png",
    tile: "OG_207.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "638c09d5-d330-4e2d-9b77-8f850373d610",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 3 },
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
    name: "Hallazeal the Ascended",
    artist: "Wayne Reynolds",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 38722,
    elite: true,
    flavor: "Hallazeals all your dallazamage.",
    health: 6,
    id: "OG_209",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 6,
    rating: 2,
    text:
      "Whenever your spells deal damage, restore that much Health to your hero.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "33131.png",
    tile: "OG_209.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "a7e1f003-948d-4183-bbc8-77d5b6aa272d",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "AOE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Call of the Wild",
    artist: "Peter Stapleton",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 9,
    dbfId: 38727,
    flavor:
      "'Hello. Misha, Leokk and Huffer aren't here right now, but if you leave a message we'll get back to you right away.' BEEP.",
    id: "OG_211",
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Summon all three Animal Companions.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "33167.png",
    tile: "OG_211.png"
  },
  {
    name: "Infested Wolf",
    artist: "E. Guiton & A. Bozonnet",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 38734,
    flavor: "A little flea powder will fix that right up.",
    health: 3,
    id: "OG_216",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Deathrattle: Summon two 1/1 Spiders.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35215.png",
    tile: "OG_216.png"
  },
  {
    name: "Bloodhoof Brave",
    artist: "Paul Mafayon",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 38738,
    flavor:
      "He thought the set was called 'Flippers of the Old Cods' and hungrily volunteered to be in it.  He is definitely going to get his hearing checked.",
    health: 6,
    id: "OG_218",
    mechanics: ["ENRAGED", "TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Taunt Enrage: +3 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35205.png",
    tile: "OG_218.png"
  },
  {
    name: "Malkorok",
    artist: "E. Guiton & Nutchapol",
    attack: 6,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 38739,
    elite: true,
    flavor: "Garrosh's best buddy. It's true. Look it up.",
    health: 5,
    id: "OG_220",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 2,
    text: "Battlecry: Equip a random weapon.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35207.png",
    tile: "OG_220.png"
  },
  {
    name: "Selfless Hero",
    artist: "Rafael Zanchetin",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 38740,
    flavor:
      "'Don't worry about me… I'll just be here... under these tentacles.'",
    health: 1,
    id: "OG_221",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 6,
    rating: 2,
    text: "Deathrattle: Give a random friendly minion Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35245.png",
    tile: "OG_221.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "518c0f1c-1d42-4621-bff9-80a872b7c56e",
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
    name: "Rallying Blade",
    artist: "Jeremy Cranford",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 38745,
    durability: 2,
    flavor:
      "As far as blades go, this one is pretty great in the motivation department.",
    id: "OG_222",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 6,
    rating: 3,
    text: "Battlecry: Give +1/+1 to your minions with Divine Shield.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "35246.png",
    tile: "OG_222.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5a6736c5-2c0e-499b-953c-aa24e94c89ac",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "DIVINE_SHIELD"
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
    name: "Divine Strength",
    artist: "Eva Wilderman",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 38749,
    flavor:
      "Every year a few paladins get disqualified from the Westfall weight lifting championship for using Divine Strength.",
    id: "OG_223",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Give a minion +1/+2.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "35252.png",
    tile: "OG_223.png"
  },
  {
    name: "Ragnaros, Lightlord",
    artist: "James Ryman",
    attack: 8,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 8,
    dbfId: 38758,
    elite: true,
    flavor:
      "What happens when you try and corrupt a corrupted firelord? DOUBLE NEGATIVE, INSECT!",
    health: 8,
    id: "OG_229",
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 6,
    rating: 3,
    text:
      "At the end of your turn, restore 8 Health to a damaged friendly character.",
    type: "MINION",
    extra: ["HEAL"],
    imageUrl: "33147.png",
    tile: "OG_229.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4c8e3ba2-fc50-43de-8424-58d2fb9e10e6",
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
    name: "Darkshire Alchemist",
    artist: "Chris Seaman",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 38764,
    flavor: "The secret ingredient: liquified funnel cake.",
    health: 5,
    id: "OG_234",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_NONSELF_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Battlecry: Restore 5 Health.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "35199.png",
    tile: "OG_234.png"
  },
  {
    name: "DOOM!",
    artist: "Raymond Swanland",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 10,
    dbfId: 38770,
    flavor: "We ran out of space for 'DOOOOOOOOOOOM!!!!!'",
    id: "OG_239",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Destroy all minions. Draw a card for each.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "33129.png",
    tile: "OG_239.png"
  },
  {
    name: "Possessed Villager",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 38774,
    flavor: "It's like a pinata! A lame disgusting horrific pinata.",
    health: 1,
    id: "OG_241",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Deathrattle: Summon a 1/1 Shadowbeast.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "33171.png",
    tile: "OG_241.png"
  },
  {
    name: "Twisted Worgen",
    artist: "Trent Kaniuga",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 38781,
    flavor:
      "Sometimes the Old Gods' corruptions gives you power untold, sometimes you get +1 Attack. We can’t all be winners in the Eldritch lottery.",
    health: 1,
    id: "OG_247",
    mechanics: ["STEALTH"],
    rarity: "COMMON",
    set: 6,
    rating: 1,
    text: "Stealth",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35223.png",
    tile: "OG_247.png"
  },
  {
    name: "Am'gam Rager",
    artist: "Matt Gaser",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 38782,
    flavor: "peerc rewop",
    health: 5,
    id: "OG_248",
    rarity: "COMMON",
    set: 6,
    rating: 1,
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35238.png",
    tile: "OG_248.png"
  },
  {
    name: "Infested Tauren",
    artist: "Paul Mafayon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38784,
    flavor: "The Overmind and the Old Gods are surprisingly similar.",
    health: 3,
    id: "OG_249",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Taunt Deathrattle: Summon a 2/2 Slime.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33128.png",
    tile: "OG_249.png"
  },
  {
    name: "Eater of Secrets",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38792,
    flavor:
      "You don't want to be around after it has eaten an explosive trap.  You thought Sludge Belcher was bad...",
    health: 4,
    id: "OG_254",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 6,
    rating: 1,
    text: "Battlecry: Destroy all enemy Secrets. Gain +1/+1 for each.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "31121.png",
    tile: "OG_254.png"
  },
  {
    name: "Doomcaller",
    artist: "Benjamin Zhang",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 38795,
    flavor: "'Hello, is Doom there? No? Can I leave a message?'",
    health: 9,
    id: "OG_255",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "RARE",
    set: 6,
    rating: 1,
    text:
      "Battlecry: Give your C'Thun +2/+2 <i>(wherever it is).</i> If it's dead, shuffle it into your deck.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35211.png",
    tile: "OG_255.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "4cdae42e-4f01-4c0c-9e42-cc59e896ee6b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "5f4ef7f2-21dc-4c0c-9ce3-f50376622806",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spawn of N'Zoth",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 38797,
    flavor:
      "Who's a cute widdle N'Zoth? You are! Yes you are! Yes you're the cutest widdle N'Zoth in the whole world!!!",
    health: 2,
    id: "OG_256",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deathrattle: Give your minions +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "33137.png",
    tile: "OG_256.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "afd9a93c-4b00-4701-ac25-0154bded3aa1",
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
    name: "Southsea Squidface",
    artist: "Mike Sass",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 38825,
    flavor: "Quick! Before I drown! Let me sharpen your sword for you.",
    health: 4,
    id: "OG_267",
    mechanics: ["DEATHRATTLE"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Deathrattle: Give your weapon +2 Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35241.png",
    tile: "OG_267.png"
  },
  {
    name: "Scaled Nightmare",
    artist: "Luke Mancini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 38832,
    flavor: "I like it because it scales.",
    health: 8,
    id: "OG_271",
    race: "DRAGON",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "At the start of your turn, double this minion's Attack.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "33152.png",
    tile: "OG_271.png"
  },
  {
    name: "Twilight Summoner",
    artist: "Jim Nelson",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38833,
    flavor:
      "If you strike him down, he shall become more powerful than you can possibly imagine.",
    health: 1,
    id: "OG_272",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 6,
    rating: 3,
    text: "Deathrattle: Summon a 5/5 Faceless Destroyer.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33175.png",
    tile: "OG_272.png"
  },
  {
    name: "Stand Against Darkness",
    artist: "Ralph Horsley",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 38843,
    flavor:
      "Or if you're too tired, you can just kind of lean against the darkness.",
    id: "OG_273",
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Summon five 1/1 Silver Hand Recruits.",
    type: "SPELL",
    extra: ["MIN_GEN"],
    imageUrl: "31116.png",
    tile: "OG_273.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "34e6d4fd-f139-4d10-b0fd-feb0a032c62f",
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
    name: "Blood Warriors",
    artist: "A.J. Nazzaro",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 38848,
    flavor: "They have an uneasy rivalry with the Blood Paladins.",
    id: "OG_276",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Add a copy of each damaged friendly minion to your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "33166.png",
    tile: "OG_276.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "16659734-04ba-46a8-862f-2efb0b2cb828",
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
    name: "C'Thun",
    artist: "James Ryman",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38857,
    elite: true,
    flavor: "C'Thun's least favorite Hearthstone card: Eye for an Eye.",
    health: 6,
    howToEarn: "Unlocked when opening a Whispers of the Old Gods pack.",
    howToEarnGolden:
      "Crafting unlocked after opening a Whispers of the Old Gods pack.",
    id: "OG_280",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text:
      "Battlecry: Deal damage equal to this minion's Attack randomly split among all enemies.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "31110.png",
    tile: "OG_280.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "7a4c57ec-b22b-4094-95a1-bba9c90828fa",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "RITUAL"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Beckoner of Evil",
    artist: "Eva Wilderman",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 38859,
    flavor: "Here, Evil!  C'mon boy!",
    health: 3,
    howToEarn: "Unlocked when opening a Whispers of the Old Gods pack.",
    howToEarnGolden:
      "Crafting unlocked after opening a Whispers of the Old Gods pack.",
    id: "OG_281",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Battlecry: Give your C'Thun +2/+2 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "31114.png",
    tile: "OG_281.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "aafc1b22-c6bb-4fbe-abb2-e1a2ed3f66e0",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "7f56ddbe-61ef-4862-a494-76558297a933",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Blade of C'Thun",
    artist: "Steve Prescott",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 9,
    dbfId: 38861,
    flavor: "C'Thun demands a sacrifice! Preferably a Deathwing.",
    health: 4,
    id: "OG_282",
    mechanics: ["BATTLECRY", "RITUAL"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text:
      "Battlecry: Destroy a minion. Add its Attack and Health to your C'Thun's <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["HARD_REMOVAL"],
    imageUrl: "35197.png",
    tile: "OG_282.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "a564377a-9062-4bfe-bca0-44633b2a740b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "392e5b9d-6ea6-4093-bf4c-3a50501f93a9",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "C'Thun's Chosen",
    artist: "Jesper Esjing",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38863,
    flavor: "He gave her a promise ring and everything.",
    health: 2,
    id: "OG_283",
    mechanics: ["BATTLECRY", "DIVINE_SHIELD", "RITUAL"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text:
      "Divine Shield Battlecry: Give your C'Thun +2/+2 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33123.png",
    tile: "OG_283.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "7e9015c6-36b4-4e00-af9f-4ce53774fed0",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "65680c02-34c7-4dce-bab7-80836035749a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Twilight Geomancer",
    artist: "Eric Braddock",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 38864,
    flavor: "'Ok C'Thun, repeat after me: 'Your mother was a hamster.''",
    health: 4,
    id: "OG_284",
    mechanics: ["BATTLECRY", "RITUAL", "TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 1,
    text: "Taunt Battlecry: Give your C'Thun Taunt <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35202.png",
    tile: "OG_284.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "9e75c34c-b8a3-4b12-904e-2e78f2fcdbc6",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "3c9a22df-3565-49cb-b2ef-f9e2a37fe232",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Twilight Elder",
    artist: "Tooth",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 38868,
    flavor:
      "Just doesn't understand those Twilight Youngsters any more - with their comic books and their rock music.",
    health: 4,
    id: "OG_286",
    mechanics: ["RITUAL"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text:
      "At the end of your turn, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "31112.png",
    tile: "OG_286.png"
  },
  {
    name: "Ancient Harbinger",
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 38873,
    flavor:
      "'honey, can u run down to the store and pick up some 10 cost minions? thx'",
    health: 6,
    id: "OG_290",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text:
      "At the start of your turn, put a 10-Cost minion from your deck into your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33157.png",
    tile: "OG_290.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "571002c3-e368-473b-b7c4-5d78a082ec41",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "cost", operation: "EQUALS", minValue: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadowcaster",
    artist: "J. Meyers & A. Bozonnet",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 38876,
    flavor:
      "I mean, it's not creepy if you ASK before you steal their shadow to make a small replica of them to keep on your shelf.",
    health: 4,
    id: "OG_291",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text:
      "Battlecry: Choose a friendly minion. Add a 1/1 copy to your hand that costs (1).",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33180.png",
    tile: "OG_291.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6cc48338-f2c4-4e4c-a3cb-b6b9899bb4fe",
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
    name: "Forlorn Stalker",
    artist: "Peter Stapleton",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 38875,
    flavor: "He's going to leave the dying up to you, if that's cool.",
    health: 2,
    id: "OG_292",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 6,
    rating: 2,
    text: "Battlecry: Give all Deathrattle minions in your hand +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33181.png",
    tile: "OG_292.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "495793bd-4978-4314-a641-45555665ab63",
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
    name: "Dark Arakkoa",
    artist: "Nutchapol Thitinunthakorn",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 38882,
    flavor:
      "There's a whole gradient of Arakkoa! This one is on the darker side.",
    health: 7,
    id: "OG_293",
    mechanics: ["BATTLECRY", "RITUAL", "TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text: "Taunt Battlecry: Give your C'Thun +3/+3 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35189.png",
    tile: "OG_293.png"
  },
  {
    name: "Cult Apothecary",
    artist: "Paul Mafayon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38888,
    flavor: "Cults need pharmacists too.",
    health: 4,
    id: "OG_295",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Battlecry: For each enemy minion, restore 2 Health to your hero.",
    type: "MINION",
    race: " ",
    extra: ["HEAL"],
    imageUrl: "33148.png",
    tile: "OG_295.png"
  },
  {
    name: "The Boogeymonster",
    artist: "Alex Horley Orlandelli",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 38895,
    elite: true,
    flavor:
      "Has 20 years of training in classical ballet, but ALLLLLL he ever gets asked to do is boogie.",
    health: 7,
    id: "OG_300",
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text: "Whenever this attacks and kills a minion, gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33138.png",
    tile: "OG_300.png"
  },
  {
    name: "Ancient Shieldbearer",
    artist: "Alex Konstad",
    attack: 6,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 38897,
    flavor:
      "Back in her day, each shield weighed two tons and she had to carry four of them on each arm!",
    health: 6,
    id: "OG_301",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Battlecry: If your C'Thun has at least 10 Attack, gain 10 Armor.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33122.png",
    tile: "OG_301.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "995fcb2b-0e28-4a3f-a3a0-e7adaba1762c",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "35eff481-ca49-4a98-aeab-1016df1af00b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Usher of Souls",
    artist: "Dave Allsop",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 38898,
    flavor: "Nothing unburdens your soul like a good ushing!",
    health: 6,
    id: "OG_302",
    mechanics: ["RITUAL"],
    rarity: "COMMON",
    set: 6,
    rating: 3,
    text:
      "Whenever a friendly minion dies, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "35242.png",
    tile: "OG_302.png"
  },
  {
    name: "Cult Sorcerer",
    artist: "J. Meyers & T. Washington",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 38900,
    flavor:
      "No matter how many times we tell her not to, she keeps feeding C'Thun scraps under the table.",
    health: 2,
    id: "OG_303",
    mechanics: ["RITUAL", "SPELLPOWER"],
    rarity: "RARE",
    set: 6,
    rating: 3,
    spellDamage: 1,
    text:
      "Spell Damage +1 After you cast a spell, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "25239.png",
    tile: "OG_303.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "489752c5-ad97-4815-a6f1-feae0a17a5a1",
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
    name: "Giant Sand Worm",
    artist: "Slawomir Maniak",
    attack: 8,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 8,
    dbfId: 38909,
    flavor: "Banned from every all-you-can-eat buffet on Azeroth.",
    health: 8,
    id: "OG_308",
    race: "BEAST",
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Whenever this attacks and kills a minion, it may attack again.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "31118.png",
    tile: "OG_308.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "70ff2940-f181-43d0-ae8e-6a004ef76b54",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Tundra Rhino"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Princess Huhuran",
    artist: "Jaemin Kim",
    attack: 6,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 38910,
    elite: true,
    flavor:
      "She flitters around Ahn'Qiraj dreaming of the day she will meet a sweet prince, whom she can lay thousands of eggs with.",
    health: 5,
    id: "OG_309",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    race: "BEAST",
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 6,
    rating: 1,
    text: "Battlecry: Trigger a friendly minion's Deathrattle.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35188.png",
    tile: "OG_309.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "6801ceed-5e36-4bf0-a155-73fc6a0c7f33",
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
    name: "Steward of Darkshire",
    artist: "Phroi Gardner",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 38911,
    flavor: "Turns out divine shields are way cheaper if you buy in bulk.",
    health: 3,
    id: "OG_310",
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 6,
    rating: 2,
    text: "Whenever you summon a 1-Health minion, give it Divine Shield.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "33153.png",
    tile: "OG_310.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a3eac9c6-6022-4787-b3b5-6ec4a389c1dc",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              { property: "health", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "A Light in the Darkness",
    artist: "Zoltan Boros",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 38913,
    flavor:
      "Wait, how can you have a light in the dark?  If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?",
    id: "OG_311",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 6,
    rating: 2,
    text: "Discover a minion. Give it +1/+1.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "35237.png",
    tile: "OG_311.png"
  },
  {
    name: "N'Zoth's First Mate",
    artist: "Paul Mafayon",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 38914,
    flavor:
      "Hates when N'Zoth yells 'Ahoy Matey!!', but there's not really much he can do about it.",
    health: 1,
    id: "OG_312",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "COMMON",
    set: 6,
    rating: 4,
    text: "Battlecry: Equip a 1/3 Rusty Hook.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "33132.png",
    tile: "OG_312.png"
  },
  {
    name: "Addled Grizzly",
    artist: "Andrew Hou",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 38916,
    flavor:
      "Druids who spend too long in bear form are more susceptible to the whispers of the Old Gods.  Right now they are whispering the lyrics to 'La Bamba'.",
    health: 2,
    id: "OG_313",
    race: "BEAST",
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "After you summon a minion, give it +1/+1.",
    type: "MINION",
    extra: ["BUFF"],
    imageUrl: "35235.png",
    tile: "OG_313.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "ea44aee7-13bd-4036-abdf-1e3e1ec233a5",
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
    name: "Blood To Ichor",
    artist: "Jim Nelson",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 38918,
    flavor:
      "For his next trick, he turns the ichor back to blood and stuffs it back in you.",
    id: "OG_314",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 6,
    rating: 2,
    text: "Deal $1 damage to a minion. If it survives, summon a 2/2 Slime.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "35209.png",
    tile: "OG_314.png"
  },
  {
    name: "Bloodsail Cultist",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 38920,
    flavor: "They're really just in it for the Blood Parrot.",
    health: 4,
    id: "OG_315",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "RARE",
    set: 6,
    rating: 3,
    text: "Battlecry: If you control another Pirate, give your weapon +1/+1.",
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35204.png",
    tile: "OG_315.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "dfcfb698-be05-4df7-ba9a-1eaece883a7a",
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
                minValue: "Bloodsail Cultist"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Herald Volazj",
    artist: "Luke Mancini",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 38922,
    elite: true,
    flavor: "His whole job is yelling 'Yogg-Saron comin'!'",
    health: 5,
    id: "OG_316",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text: "Battlecry: Summon a 1/1 copy of each of your other minions.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN"],
    imageUrl: "33127.png",
    tile: "OG_316.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "3b5fddfa-0ca2-41a5-826c-ec6000f5179e",
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
    name: "Deathwing, Dragonlord",
    artist: "Alex Horley Orlandelli",
    attack: 12,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 38943,
    elite: true,
    flavor:
      "To his credit, Deathwing really took to heart the feedback he was receiving that he needed to be 'more of a team player'.",
    health: 12,
    id: "OG_317",
    mechanics: ["DEATHRATTLE"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 6,
    rating: 3,
    text: "Deathrattle: Put all Dragons from your hand into the battlefield.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "33177.png",
    tile: "OG_317.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "43d8d9a1-298d-4968-a8f4-f8e006977d8d",
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
    name: "Hogger, Doom of Elwynn",
    artist: "Matt Dixon",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 38944,
    elite: true,
    flavor: "When C'thun went to sleep, he checked under his bed for Hogger.",
    health: 6,
    id: "OG_318",
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 6,
    rating: 2,
    text: "Whenever this minion takes damage, summon a 2/2 Gnoll with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "31117.png",
    tile: "OG_318.png"
  },
  {
    name: "Midnight Drake",
    artist: "Todd Lockwood",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38957,
    flavor: "Still fearsome in the daytime.",
    health: 4,
    id: "OG_320",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Battlecry: Gain +1 Attack for each other card in your hand.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35247.png",
    tile: "OG_320.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "c54ba58f-2374-46e9-8bcf-9dc1b194991b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
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
    name: "Crazed Worshipper",
    artist: "Gonzalo Ordonez",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 38958,
    flavor:
      "Every month they share a pancake breakfast with the Perfectly Rational Worshippers.",
    health: 6,
    id: "OG_321",
    mechanics: ["RITUAL", "TAUNT"],
    rarity: "EPIC",
    set: 6,
    rating: 2,
    text:
      "Taunt. Whenever this minion takes damage, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35212.png",
    tile: "OG_321.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "03a923e5-1955-4c71-8b17-82e7f76420e9",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "8ff28085-72b7-4a5c-9f03-772e1e9970dd",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Blackwater Pirate",
    artist: "Max Grecke",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38960,
    flavor:
      "'Look, they fell off the back of a ship, do you want them or not? I have a meeting with Y'Shaarj in like ten minutes.'",
    health: 5,
    id: "OG_322",
    race: "PIRATE",
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Your weapons cost (2) less.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "35203.png",
    tile: "OG_322.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "c6369134-ea7f-4ae3-a6b2-df7520dfeaf2",
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
    name: "Polluted Hoarder",
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 38961,
    flavor: "Roll ‘greed’ OR THIS COULD HAPPEN TO YOU.",
    health: 2,
    id: "OG_323",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Deathrattle: Draw a card.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "FAST"],
    imageUrl: "31111.png",
    tile: "OG_323.png"
  },
  {
    name: "Carrion Grub",
    artist: "Kan Liu",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 38985,
    flavor: "Carrion, my wayward grub.",
    health: 5,
    id: "OG_325",
    race: "BEAST",
    rarity: "COMMON",
    set: 6,
    rating: 2,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35218.png",
    tile: "OG_325.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4caa80b3-10ff-40d5-9d80-a4afd93c2e4d",
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
    name: "Duskboar",
    artist: "Samwise",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 39002,
    flavor:
      "Often excluded from dinner parties.  To be fair, he is very boaring.",
    health: 1,
    id: "OG_326",
    race: "BEAST",
    rarity: "COMMON",
    set: 6,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "35251.png",
    tile: "OG_326.png"
  },
  {
    name: "Squirming Tentacle",
    artist: "L. Lullabi & Nutchapol",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 39003,
    flavor:
      "Yeah, I think we can agree that killing the squirming tentacle first is a good idea.",
    health: 4,
    id: "OG_327",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text: "Taunt",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35243.png",
    tile: "OG_327.png"
  },
  {
    name: "Master of Evolution",
    artist: "Dan Scott",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 39008,
    flavor: "Will be really useful in the new 'Hearthémon' game.",
    health: 5,
    id: "OG_328",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 6,
    rating: 3,
    text:
      "Battlecry: Transform a friendly minion into a random one that costs (1) more.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "33160.png",
    tile: "OG_328.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "96378acb-be8e-4b23-8f47-37e73e8185dd",
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
    name: "Undercity Huckster",
    artist: "Jon Neimeister",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 39026,
    flavor: "Psst! Wanna buy a random class card (from your opponent's class)?",
    health: 2,
    id: "OG_330",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 6,
    rating: 4,
    text:
      "Deathrattle: Add a random class card to your hand <i>(from your opponent's class)</i>.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "33135.png",
    tile: "OG_330.png"
  },
  {
    name: "Hooded Acolyte",
    artist: "Adam Byrne",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 39033,
    flavor: "Wait, what kind of acolyte doesn't wear a hood?",
    health: 6,
    id: "OG_334",
    mechanics: ["RITUAL"],
    rarity: "COMMON",
    set: 6,
    rating: 2,
    text:
      "Whenever a character is healed, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "35192.png",
    tile: "OG_334.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "2f329e54-ff8c-48b8-b2a5-0eec18334340",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "0a556bda-ab6a-4c93-8d11-370f8cd642ea",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shifting Shade",
    artist: "Tyler Walpole",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 39034,
    flavor:
      "Yeah, it's cooler in the shade, but you're also more likely to get JACKED.",
    health: 3,
    id: "OG_335",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 6,
    rating: 3,
    text:
      "Deathrattle: Copy a card from your opponent's deck  and add it to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "35186.png",
    tile: "OG_335.png"
  },
  {
    name: "Cyclopian Horror",
    artist: "Garrett Hanna",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 39041,
    flavor:
      "What are the qualifications for being a 'Horror?'  Just how horrible do you have to be?",
    health: 3,
    id: "OG_337",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "EPIC",
    set: 6,
    rating: 1,
    text: "Taunt. Battlecry: Gain      +1 Health for each enemy minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35225.png",
    tile: "OG_337.png"
  },
  {
    name: "Nat, the Darkfisher",
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 39046,
    elite: true,
    flavor:
      "You can take away his humanity, but you will never take away his fishing pole.",
    health: 4,
    id: "OG_338",
    rarity: "LEGENDARY",
    set: 6,
    rating: 1,
    text:
      "At the start of your opponent's turn, they have a 50% chance to draw an extra card.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "35248.png",
    tile: "OG_338.png"
  },
  {
    name: "Skeram Cultist",
    artist: "Jaemin Kim",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 39118,
    flavor:
      "Just before he comes into play, there is an AWESOME training montage with C'Thun.",
    health: 6,
    id: "OG_339",
    mechanics: ["BATTLECRY", "RITUAL"],
    rarity: "RARE",
    set: 6,
    rating: 1,
    text: "Battlecry: Give your C'Thun +2/+2 <i>(wherever it is).</i>",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "33154.png",
    tile: "OG_339.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "1d511b91-ff14-46fb-bf79-b519e93eab55",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "C'Thun"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "df030136-1669-41c4-9979-72b2c30ccd8d",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "c'thun"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Soggoth the Slitherer",
    artist: "James Ryman",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 39119,
    elite: true,
    flavor:
      "Don't tell Soggoth, but in the future he gets totally owned by the Master's Glaive and his skull becomes a tourist attraction.",
    health: 9,
    id: "OG_340",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "TAUNT"
    ],
    rarity: "LEGENDARY",
    set: 6,
    rating: 3,
    text: "Taunt Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "33173.png",
    tile: "OG_340.png"
  }
];
