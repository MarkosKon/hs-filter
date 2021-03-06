export const hallOfFame = [
  {
    name: "Ice Lance",
    artist: "Alex Horley Orlandelli",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 172,
    flavor:
      "The trick is not to break the lance.  Otherwise, you have 'Ice Pieces.'  Ice Pieces aren't as effective.",
    id: "CS2_031",
    mechanics: ["FREEZE"],
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 0,
    rating: 2,
    text:
      "Freeze a character. If it was already Frozen, deal $4 damage instead.",
    type: "SPELL",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "188.png",
    tile: "CS2_031.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "6016013b-876b-4e2e-95c8-2af26b8a267b",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Frostbolt"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Sylvanas Windrunner",
    artist: "Glenn Rane",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 1721,
    elite: true,
    flavor:
      "Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.",
    health: 5,
    id: "EX1_016",
    mechanics: ["DEATHRATTLE"],
    rarity: "LEGENDARY",
    set: 0,
    rating: 4,
    text: "Deathrattle: Take control of a random enemy minion.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "33.png",
    tile: "EX1_016.png"
  },
  {
    name: "Coldlight Oracle",
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 1016,
    flavor:
      "They can see the future.   In that future both players draw more cards.   Spoooky.",
    health: 2,
    id: "EX1_050",
    mechanics: ["BATTLECRY"],
    race: "MURLOC",
    rarity: "RARE",
    set: 0,
    rating: 3,
    text: "Battlecry: Each player draws 2 cards.",
    type: "MINION",
    extra: ["CARD_DRAW"],
    imageUrl: "88.png",
    tile: "EX1_050.png"
  },
  {
    name: "Old Murk-Eye",
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 736,
    elite: true,
    flavor: "He's a legend among murlocs.  'Mrghllghghllghg!', they say.",
    health: 4,
    howToEarn: "Unlocked when you have all the Murlocs from the Classic Set.",
    howToEarnGolden:
      "Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.",
    id: "EX1_062",
    mechanics: ["CHARGE"],
    race: "MURLOC",
    rarity: "LEGENDARY",
    set: 0,
    rating: 1,
    text: "Charge. Has +1 Attack for each other Murloc on the battlefield.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "217.png",
    tile: "EX1_062.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "b4a20c76-7e6e-4f2d-8b00-66647dc12ec6",
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
    name: "Gelbin Mekkatorque",
    artist: "Ludo Lullabi",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 858,
    elite: true,
    entourage: ["Mekka1", "Mekka2", "Mekka3", "Mekka4"],
    faction: "ALLIANCE",
    flavor:
      "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.",
    health: 6,
    howToEarnGolden:
      "This was rewarded to players who helped test the Store during the Beta.",
    id: "EX1_112",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 0,
    rating: 2,
    text: "Battlecry: Summon an AWESOME invention.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "251.png",
    tile: "EX1_112.png"
  },
  {
    name: "Conceal",
    artist: "Steve Hui",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 990,
    flavor:
      "Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.",
    id: "EX1_128",
    rarity: "COMMON",
    referencedTags: ["STEALTH"],
    set: 0,
    rating: 1,
    text: "Give your minions Stealth until your next turn.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "284.png",
    tile: "EX1_128.png"
  },
  {
    name: "Ice Block",
    artist: "Carl Frank",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 192,
    flavor: "Ice is nice, and will suffice!",
    id: "EX1_295",
    mechanics: ["SECRET"],
    rarity: "EPIC",
    referencedTags: ["IMMUNE"],
    set: 0,
    rating: 3,
    text:
      "Secret: When your hero takes fatal damage, prevent it and become Immune this turn.",
    type: "SPELL",
    extra: ["SECRET", "STALL"],
    imageUrl: "28.png",
    tile: "EX1_295.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "aee1e315-6db7-4c22-8683-74f989cb6788",
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
    name: "Ragnaros the Firelord",
    artist: "Greg Staples",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 374,
    elite: true,
    flavor:
      "Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesn’t work out the way you want it to.",
    health: 8,
    id: "EX1_298",
    mechanics: ["CANT_ATTACK"],
    race: "ELEMENTAL",
    rarity: "LEGENDARY",
    set: 0,
    rating: 4,
    text:
      "Can't attack. At the end of your turn, deal 8 damage to a random enemy.",
    type: "MINION",
    extra: ["HARD_REMOVAL", "VALUE", "TEMPO", "FAST"],
    imageUrl: "503.png",
    tile: "EX1_298.png"
  },
  {
    name: "Power Overwhelming",
    artist: "Tom Baxa",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 846,
    flavor:
      "We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.",
    id: "EX1_316",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 0,
    rating: 4,
    text:
      "Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.",
    type: "SPELL",
    extra: ["DAMAGE", "TEMPO"],
    imageUrl: "170.png",
    tile: "EX1_316.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "dd7f9c20-3db4-48fa-a0f4-325167d9a9a3",
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
    name: "Molten Giant",
    artist: "Glenn Rane",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 20,
    dbfId: 1372,
    flavor: "He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.",
    health: 8,
    id: "EX1_620",
    rarity: "EPIC",
    set: 0,
    rating: 1,
    text: "Costs (1) less for each damage your hero has taken.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "94.png",
    tile: "EX1_620.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "74ac0f84-a5bb-48f0-9979-11d2bc92e0ea",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give.*taunt"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Houndmaster"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Captain's Parrot",
    artist: "Daren Bader",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 530,
    flavor: "Pirates and Parrots go together like Virmen and Carrots.",
    health: 1,
    howToEarn: "Unlocked when you have all the Pirates from the Classic Set.",
    howToEarnGolden:
      "Unlocked when you have all the Golden Pirates from the Expert Set.",
    id: "NEW1_016",
    mechanics: ["BATTLECRY"],
    race: "BEAST",
    rarity: "EPIC",
    set: 0,
    rating: 1,
    text: "Battlecry: Draw a Pirate from your deck.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "559.png",
    tile: "NEW1_016.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "3422450b-b8ef-4050-bc94-4be8667fa92f",
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
    name: "Elite Tauren Chieftain",
    artist: "Samwise Didier",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 1754,
    elite: true,
    entourage: ["PRO_001a", "PRO_001b", "PRO_001c"],
    flavor:
      "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.",
    health: 5,
    howToEarnGolden: "Awarded at BlizzCon 2013.",
    id: "PRO_001",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 0,
    rating: 2,
    text:
      "Battlecry: Give both players the power to ROCK! (with a Power Chord card)",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "682.png",
    tile: "PRO_001.png"
  },
  {
    name: "Azure Drake",
    artist: "Benjamin Zhang",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 825,
    flavor:
      "They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.",
    health: 4,
    id: "EX1_284",
    mechanics: ["BATTLECRY", "SPELLPOWER"],
    race: "DRAGON",
    rarity: "RARE",
    set: 0,
    rating: 4,
    spellDamage: 1,
    text: "Spell Damage +1 Battlecry: Draw a card.",
    type: "MINION",
    extra: ["CARD_DRAW"],
    imageUrl: "280.png",
    tile: "EX1_284.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "2aba4665-959a-4031-b909-0ae7b4605566",
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
  }
];
