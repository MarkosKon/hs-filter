export const theWitchwood = [
  {
    artist: "Chris Seaman",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 46650,
    flavor:
      "'I'm sorry, son.  We had to send Old Howler off…to a farm…to play…'",
    health: 3,
    id: "GIL_113",
    name: "Rabid Worgen",
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    mechanics: ["RUSH"],
    rating: 2,
    imageUrl: "636588977013511710.png",
    tile: "GIL_113.png",
    text: "Rush",
    type: "MINION"
  },
  {
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 46654,
    flavor: "She sells all manner of keys: from A flat to G sharp.",
    health: 2,
    id: "GIL_116",
    mechanics: ["BATTLECRY"],
    name: "Arcane Keysmith",
    rarity: "EPIC",
    referencedTags: ["DISCOVER", "SECRET"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636587427336104490.png",
    tile: "GIL_116.png",
    text: "Battlecry: Discover a Secret. Put it into the battlefield.",
    type: "MINION"
  },
  {
    artist: "Dave Allsop",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46655,
    flavor: "Does anyone want to play dead!?",
    health: 6,
    id: "GIL_117",
    name: "Worgen Abomination",
    rarity: "EPIC",
    set: 12,
    extra: ["AOE"],
    rating: 2,
    imageUrl: "636585354163437053.png",
    tile: "GIL_117.png",
    text:
      "At the end of your turn, deal 2 damage to all other damaged minions.",
    type: "MINION"
  },
  {
    artist: "Dave Allsop",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 46656,
    flavor: "Unfortunately, his doctorate is in Murloc Literature.",
    health: 8,
    id: "GIL_118",
    mechanics: ["DEATHRATTLE"],
    name: "Deranged Doctor",
    rarity: "COMMON",
    set: 12,
    extra: ["HEAL"],
    rating: 2,
    imageUrl: "636589080424992908.png",
    tile: "GIL_118.png",
    text: "Deathrattle: Restore 8 Health to your hero.",
    type: "MINION"
  },
  {
    artist: "Luca Zontini",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 46658,
    flavor:
      "Decorating tip: Unused cauldrons can make a lovely elemental display.",
    health: 7,
    id: "GIL_119",
    mechanics: ["AURA"],
    name: "Cauldron Elemental",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 12,
    extra: ["BUFF"],
    rating: 2,
    imageUrl: "636589009801683525.png",
    tile: "GIL_119.png",
    text: "Your other Elementals have +2 Attack.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "419ec7a8-4215-40a1-a35c-ef2252cb4a14",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Cauldron Elemental"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Chris Seaman",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46659,
    flavor:
      "One head is a morning person. The other head hates morning people.",
    health: 9,
    id: "GIL_120",
    mechanics: ["TAUNT"],
    name: "Furious Ettin",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636589029299099866.png",
    tile: "GIL_120.png",
    text: "Taunt",
    type: "MINION"
  },
  {
    artist: "Grace Liu",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46660,
    flavor: "Birds of a feather Moonfire together.",
    health: 8,
    id: "GIL_121",
    mechanics: ["SPELLPOWER"],
    name: "Darkmire Moonkin",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636588975859860862.png",
    tile: "GIL_121.png",
    spellDamage: 2,
    text: "Spell Damage +2",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "b6ac2a0e-9e6c-469b-80f7-41795084c475",
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
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "b307d016-dfdf-496b-b980-8f376f114316",
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
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "deal .* damage"
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
    cost: 6,
    dbfId: 46667,
    flavor: "The hills have eyes. And teeth. Pretty bad breath, too.",
    health: 7,
    id: "GIL_124",
    mechanics: ["BATTLECRY"],
    name: "Mossy Horror",
    rarity: "EPIC",
    set: 12,
    extra: ["AOE"],
    rating: 2,
    imageUrl: "636586242796305355.png",
    tile: "GIL_124.png",
    text: "Battlecry: Destroy all other minions with 2 or less Attack.",
    type: "MINION"
  },
  {
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46674,
    flavor: "He's entirely bonkers. All the best goblins are.",
    health: 2,
    id: "GIL_125",
    mechanics: ["BATTLECRY"],
    name: "Mad Hatter",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_WITH_RACE: 11
    },
    rarity: "RARE",
    set: 12,
    extra: ["BUFF", "FAST"],
    rating: 3,
    imageUrl: "636589032527011079.png",
    tile: "GIL_125.png",
    text:
      "Battlecry: Randomly toss 3 hats to other minions. Each hat gives +1/+1.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "8673cf52-5aab-4397-a60c-e26be6c524a0",
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
    artist: "James Ryman",
    attack: 8,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 10,
    dbfId: 46678,
    elite: true,
    flavor: "Taste your world's corruption! It tastes like chicken.",
    health: 8,
    id: "GIL_128",
    mechanics: ["BATTLECRY"],
    name: "Emeriss",
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 2,
    imageUrl: "636579262361542667.png",
    tile: "GIL_128.png",
    text:
      "Battlecry: Double the Attack and Health of all minions in your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ce1c2a7a-b5ea-4bcd-b029-fffa8c765baa",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "rush"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "8e44de23-b02a-4ca5-a420-b46943692978",
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
          }
        ]
      }
    ]
  },
  {
    artist: "Jerry Mascho",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 46680,
    flavor: "Majestic. Ethereal. Still pretty down in the dumps, though.",
    health: 6,
    id: "GIL_130",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Gloom Stag",
    race: "BEAST",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636567315138924575.png",
    tile: "GIL_130.png",
    text: "Taunt Battlecry: If your deck has only odd-Cost cards, gain +2/+2.",
    type: "MINION",
    deckFilters: [
      {
        id: "38492b94-1883-4d54-a30a-771a9063b5aa",
        property: "cost",
        operation: "IS_ODD"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "67c09dce-7957-4195-8163-b13206ec3ec5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Vladimir Kafanov",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 46694,
    flavor: "For a healthier option, try Holy Water: Zero.",
    id: "GIL_134",
    name: "Holy Water",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636582927664724858.png",
    tile: "GIL_134.png",
    text:
      "Deal $4 damage to a minion. If that kills it, add a copy of it to your hand.",
    type: "SPELL"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 1,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 46706,
    elite: true,
    flavor: "He's everyone you want to be.",
    health: 1,
    id: "GIL_142",
    name: "Chameleos",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636580354591921985.png",
    tile: "GIL_142.png",
    text:
      "Each turn this is in your hand, transform it into a card your opponent is holding.",
    type: "MINION"
  },
  {
    artist: "Steve Prescott",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 46710,
    flavor: "They make wonderful pets if you're not allergic to blood loss.",
    health: 3,
    id: "GIL_143",
    mechanics: ["LIFESTEAL", "RUSH"],
    name: "Vicious Scalehide",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588949801658796.png",
    tile: "GIL_143.png",
    text: "Lifesteal Rush",
    type: "MINION"
  },
  {
    artist: "Milvoj Ceran",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 46713,
    flavor: "Weirdly, the bells stop ringing after 5.",
    id: "GIL_145",
    name: "Sound the Bells!",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    mechanics: ["ECHO"],
    rarity: "COMMON",
    set: 12,
    extra: ["BUFF"],
    rating: 3,
    imageUrl: "636579827406145784.png",
    tile: "GIL_145.png",
    text: "Echo Give a minion +1/+2.",
    type: "SPELL"
  },
  {
    artist: "Anton Zemskov",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 46715,
    flavor: "Forecast: 'Cloudy with a chance of fireballs.'",
    id: "GIL_147",
    mechanics: ["ImmuneToSpellpower"],
    name: "Cinderstorm",
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    rating: 2,
    imageUrl: "636588971521064376.png",
    tile: "GIL_147.png",
    text: "Deal $5 damage randomly split among all enemies.",
    type: "SPELL"
  },
  {
    artist: "Jason Kang",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 7,
    dbfId: 46721,
    elite: true,
    flavor:
      "The upper windows used to be for aiming. Then we thought: 'Hey! MORE cannons!'",
    health: 8,
    id: "GIL_152",
    mechanics: ["CANT_ATTACK"],
    name: "Blackhowl Gunspire",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636580209433489113.png",
    tile: "GIL_152.png",
    text:
      "Can't attack. Whenever this minion takes damage, deal 3 damage to a random enemy.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "b1817fdf-008f-43d8-b4c8-531e2add0e46",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "1.*damage"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shield Slam"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Dave Allsop",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 46725,
    flavor: "Also comes in other colors, but red's in fashion this season.",
    health: 3,
    id: "GIL_155",
    mechanics: ["ENRAGED", "RUSH"],
    name: "Redband Wasp",
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636577687687962965.png",
    tile: "GIL_155.png",
    text: "Rush Has +3 Attack while damaged.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "37084b8d-5ead-45fc-8bcd-62459f8f54e3",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Cruel Taskmaster"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Konstantin Turovec",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 46737,
    flavor:
      "These elementals, along with feldspar and mica, are often taken for granite.",
    health: 8,
    id: "GIL_156",
    name: "Quartz Elemental",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 12,
    extra: [""],
    rating: 4,
    imageUrl: "636588989731505540.png",
    tile: "GIL_156.png",
    text: "Can't attack while damaged.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1e5979d8-6364-4f9c-b224-33a41487f9f9",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "restore.*[0-9+] health"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "hero"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Luke Mancini",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 46859,
    flavor: "She's a scythe for sore eyes.",
    health: 2,
    id: "GIL_188",
    mechanics: ["CHOOSE_ONE", "RUSH"],
    name: "Druid of the Scythe",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636587858649985853.png",
    tile: "GIL_188.png",
    text: "Choose One - Transform into a 4/2 with Rush; or a 2/4 with Taunt.",
    type: "MINION"
  },
  {
    artist: "Slawomir Maniak",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 46862,
    flavor: "Everywhelp, get in here!",
    health: 9,
    id: "GIL_190",
    name: "Nightscale Matriarch",
    race: "DRAGON",
    rarity: "RARE",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636588988849514369.png",
    tile: "GIL_190.png",
    text: "Whenever a friendly minion is healed, summon a 3/3 Whelp.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "732c8016-abfc-4e43-8fe1-6fc9f4c4bfd7",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "restore.*[0-9+] health"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "hero"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Ivan Fomin",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 46864,
    flavor: "Like a knitting circle, but less evil.",
    id: "GIL_191",
    name: "Fiendish Circle",
    rarity: "COMMON",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 2,
    imageUrl: "636589028406381856.png",
    tile: "GIL_191.png",
    text: "Summon four 1/1 Imps.",
    type: "SPELL"
  },
  {
    artist: "Hideaki Takamura",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46874,
    elite: true,
    flavor: "The cards are always golden on the other side.",
    health: 3,
    id: "GIL_198",
    mechanics: ["BATTLECRY"],
    name: "Azalina Soulthief",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636564866637987669.png",
    tile: "GIL_198.png",
    text: "Battlecry: Replace your hand with a copy of your opponent's.",
    type: "MINION"
  },
  {
    artist: "Garrett Hanna",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 46596,
    flavor: "After a short paws, she's back to herself again.",
    health: 5,
    id: "GIL_200",
    mechanics: ["STEALTH"],
    name: "Duskhaven Hunter",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636580717624107961.png",
    tile: "GIL_200.png",
    text: "Stealth Each turn this is in your hand, swap its Attack and Health.",
    type: "MINION"
  },
  {
    artist: "Mike Azevedo",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46598,
    flavor: "Time to squash your opponent.",
    health: 4,
    id: "GIL_201",
    mechanics: ["LIFESTEAL"],
    name: "Pumpkin Peasant",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636564867099932333.png",
    tile: "GIL_201.png",
    text:
      "Lifesteal Each turn this is in your hand, swap its Attack and Health.",
    type: "MINION"
  },
  {
    artist: "Slawomir Maniak",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 46601,
    flavor: "Admittedly, they kind of dropped the ball with Prince Liam.",
    health: 8,
    id: "GIL_202",
    mechanics: ["DIVINE_SHIELD", "RUSH"],
    name: "Gilnean Royal Guard",
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636583650368173188.png",
    tile: "GIL_202.png",
    text:
      "Divine Shield, Rush Each turn this is in your hand, swap its Attack and Health.",
    type: "MINION"
  },
  {
    artist: "Tyler West Studio",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 46621,
    flavor: "When one buke just isn’t enough.",
    id: "GIL_203",
    name: "Rebuke",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636576876193996725.png",
    tile: "GIL_203.png",
    text: "Enemy spells cost (5) more next turn.",
    type: "SPELL"
  },
  {
    artist: "Dai Yang",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46634,
    flavor: "Recruited from the Gilnean opera house.",
    health: 4,
    id: "GIL_207",
    mechanics: ["TAUNT", "ECHO"],
    name: "Phantom Militia",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636564867782327953.png",
    tile: "GIL_207.png",
    text: "Echo Taunt",
    type: "MINION"
  },
  {
    artist: "Ben Zhang",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46661,
    flavor: "That Friends and Familiars Plan is really paying off!",
    health: 1,
    id: "GIL_212",
    mechanics: ["BATTLECRY"],
    name: "Ravencaller",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636579472078195773.png",
    tile: "GIL_212.png",
    text: "Battlecry: Add two random 1-Cost minions to your hand.",
    type: "MINION"
  },
  {
    artist: "Sean McNally",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 46665,
    flavor: "Doom!  Only doom for you!  But pay good tip, maybe less doom.",
    health: 4,
    id: "GIL_213",
    mechanics: ["BATTLECRY"],
    name: "Tanglefur Mystic",
    rarity: "COMMON",
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636588978507814983.png",
    tile: "GIL_213.png",
    text: "Battlecry: Add a random 2-Cost minion to each player's hand.",
    type: "MINION"
  },
  {
    armor: 5,
    artist: "Alex Horley Orlandelli",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 8,
    dbfId: 46887,
    elite: true,
    flavor:
      "Curse-bringer, tree-twister, mother of wretched things…Hanzo main.",
    health: 30,
    id: "GIL_504",
    mechanics: ["BATTLECRY"],
    name: "Hagatha the Witch",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE", "AOE"],
    rating: 3,
    imageUrl: "636576875552318191.png",
    tile: "GIL_504.png",
    text: "Battlecry: Deal 3 damage to all minions.",
    type: "HERO",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "fc11a2de-c3ee-441b-b341-5c4b1473338b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "ECHO"
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
    artist: "Rock Niu",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 46897,
    flavor: "50% off. Every shot must go!",
    id: "GIL_506",
    name: "Cheap Shot",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    mechanics: ["ECHO"],
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636580223241394250.png",
    tile: "GIL_506.png",
    text: "Echo  Deal $2 damage to a minion.",
    type: "SPELL"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 46903,
    flavor: "Amwitched. Beingwitched. Beenwitched.",
    health: 1,
    id: "GIL_507",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Bewitched Guardian",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588109708088558.png",
    tile: "GIL_507.png",
    text: "Taunt Battlecry: Gain +1 Health  for each card in your hand. ",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e4585bc5-ff48-474a-8525-58d5be975ff9",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "card in your hand"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Bewitched Guardian"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "75e26ff2-60db-440e-a680-68fe433b7420",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Witchwood Apple"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "96c806f3-bbfd-4558-9328-8f06384dd56a",
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
    artist: "Jiajun Tian",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 46904,
    flavor: "Happily married with two kids. It was love at first bite.",
    health: 4,
    id: "GIL_508",
    mechanics: ["BATTLECRY"],
    name: "Duskbat",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 2,
    imageUrl: "636583696918719492.png",
    tile: "GIL_508.png",
    text: "Battlecry: If your hero took damage this turn, summon two 1/1 Bats.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "224158d1-7ddd-4adc-b8e3-005e257424f0",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage .* your hero"
              },
              {
                property: "cardClass",
                operation: "INCLUDES",
                minValue: "WARLOCK"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "3b561de9-1bbf-4871-a890-ac0a7645b80d",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Lesser Amethyst Spellstone"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "d0910721-aa34-48b2-810b-af6f9a49c3b5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "took damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Phil Saunders",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 46908,
    flavor: "One little Mistwraith sitting in a tree. M-I-S-T-I-N-G.",
    health: 5,
    id: "GIL_510",
    name: "Mistwraith",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636584960393276181.png",
    tile: "GIL_510.png",
    text: "Whenever you play an Echo card, gain +1/+1.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cb7cff2e-e98e-425f-8896-35958992961c",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "ECHO"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Tyler West Studio",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 46950,
    flavor: "She simply refuses to ask for directions.",
    health: 1,
    id: "GIL_513",
    mechanics: ["DEATHRATTLE"],
    name: "Lost Spirit",
    rarity: "COMMON",
    set: 12,
    extra: ["BUFF"],
    rating: 1,
    imageUrl: "636589031059570727.png",
    tile: "GIL_513.png",
    text: "Deathrattle: Give your minions +1 Attack.",
    type: "MINION"
  },
  {
    artist: "J. Axer",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 46936,
    flavor: "He's on the hunt for Togwaggle's missing rat.",
    health: 2,
    id: "GIL_515",
    mechanics: ["BATTLECRY", "RUSH"],
    name: "Ratcatcher",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636589029757216426.png",
    tile: "GIL_515.png",
    text:
      "Rush Battlecry: Destroy a friendly minion and gain its Attack and Health.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9dc0b860-c504-4e58-beda-494695bde93e",
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
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "3a1bff8a-9cac-4597-ae4d-1a8e13bbb886",
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
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "opponent"
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
    artist: "Zoltan Boros",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 46940,
    flavor: "Emeriss uses Wing Blast.  It's super effective!",
    id: "GIL_518",
    name: "Wing Blast",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 4,
    imageUrl: "636582799056768560.png",
    tile: "GIL_518.png",
    text:
      "Deal $4 damage to a minion. If a minion died this turn, this costs (1).",
    type: "SPELL"
  },
  {
    artist: "Tyler West Studio",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 46988,
    flavor:
      "They think they're trusted guardians. Dragons think they're convenient snacks.",
    health: 11,
    id: "GIL_526",
    mechanics: ["BATTLECRY"],
    name: "Wyrmguard",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588938520300269.png",
    tile: "GIL_526.png",
    text: "Battlecry: If you're holding a Dragon, gain +1 Attack and Taunt.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c1bd4ab1-0865-435d-866b-e291f7ba4666",
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
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "cb4050be-1159-4e6e-bc2b-1ef7da89afaf",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Wyrmguard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Slawomir Maniak",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46991,
    flavor: "Everyone expects an inquisition reference.",
    health: 6,
    id: "GIL_527",
    mechanics: ["LIFESTEAL", "TAUNT"],
    name: "Felsoul Inquisitor",
    race: "DEMON",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636589030380556399.png",
    tile: "GIL_527.png",
    text: "Lifesteal Taunt",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "0e5cce41-7d5a-4dfa-9626-7dce4aaa097f",
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
    artist: "Zoltan Boros",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46992,
    flavor: "Same turn delivery - guaranteed!",
    health: 6,
    id: "GIL_528",
    name: "Swift Messenger",
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    mechanics: ["RUSH"],
    rating: 2,
    imageUrl: "636583649889785635.png",
    tile: "GIL_528.png",
    text: "Rush Each turn this is in your hand, swap its Attack and Health.",
    type: "MINION"
  },
  {
    artist: "Arthur Gimaldinov",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 46994,
    flavor: "He also goes by 'worg-lock.'",
    health: 4,
    id: "GIL_529",
    mechanics: ["SPELLPOWER"],
    name: "Spellshifter",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636583651278448259.png",
    tile: "GIL_529.png",
    spellDamage: 1,
    text:
      "Spell Damage +1 Each turn this is in your hand, swap its Attack and Health.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1714392d-1436-47c9-8e4c-a393186f78d1",
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
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 46996,
    flavor: "Makes shockingly good unagi.",
    health: 3,
    id: "GIL_530",
    mechanics: ["BATTLECRY"],
    name: "Murkspark Eel",
    playRequirements: { REQ_DRAG_TO_PLAY: 0 },
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636567316421312239.png",
    tile: "GIL_530.png",
    targetingArrowText: "Deal 2 damage.",
    text: "Battlecry: If your deck has only even-Cost cards, deal 2 damage.",
    type: "MINION",
    deckFilters: [
      {
        id: "2e65d753-0f80-4e25-81d9-c41a43d1ea9d",
        property: "cost",
        operation: "IS_EVEN"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "8a9ff52f-44ba-403f-803c-4056433309d8",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "even.*cost"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Sam Hogg",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 46998,
    flavor: "Is she a frog that became a witch, or a witch that became a frog?",
    health: 1,
    id: "GIL_531",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Witch's Apprentice",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636576876903580263.png",
    tile: "GIL_531.png",
    text: "Taunt Battlecry: Add a random Shaman spell to your hand.",
    type: "MINION"
  },
  {
    artist: "A.J. Nazzaro",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47014,
    flavor:
      "Hard time making ends meet? Hate the League of Explorers? Get a job henching!",
    health: 3,
    id: "GIL_534",
    name: "Hench-Clan Thug",
    rarity: "COMMON",
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636588986356254656.png",
    tile: "GIL_534.png",
    text: "After your hero attacks, give this minion +1/+1.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "a33c43e9-b6d3-4f4f-a397-05f2ed348c1b",
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
    artist: "Wayne Reynolds",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 47016,
    flavor: "Oh look. A Gorehowl.",
    id: "GIL_537",
    name: "Deadly Arsenal",
    rarity: "EPIC",
    set: 12,
    extra: ["AOE"],
    rating: 1,
    imageUrl: "636582629614936030.png",
    tile: "GIL_537.png",
    text: "Reveal a weapon from your deck. Deal its Attack to all minions.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "c9c707aa-14a5-477d-a2b0-b3eb8261987a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "WEAPON"
              },
              {
                property: "attack",
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
    artist: "Dan Scott",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 47033,
    flavor: "Wanted on three counts of gnomish possession.",
    id: "GIL_543",
    name: "Dark Possession",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636589139336121814.png",
    tile: "GIL_543.png",
    text: "Deal $2 damage to a friendly character. Discover a Demon.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "c5ce17fb-8b5d-435e-b368-b2d888fdfab4",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Lesser Amethyst Spellstone"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "ee2dcbd3-1c35-4198-8b23-982b27bbf296",
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
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 47051,
    flavor: "Maybe we should have called him Ghostly Rusher.",
    health: 4,
    id: "GIL_545",
    mechanics: ["DIVINE_SHIELD", "RUSH"],
    name: "Ghostly Charger",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 3,
    imageUrl: "636588953533164795.png",
    tile: "GIL_545.png",
    text: "Divine Shield Rush",
    type: "MINION"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 47053,
    elite: true,
    flavor:
      "You either die a villain, or live long enough to see yourself become the hero.",
    health: 4,
    id: "GIL_547",
    name: "Darius Crowley",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    mechanics: ["RUSH"],
    rating: 3,
    imageUrl: "636579434913127141.png",
    tile: "GIL_547.png",
    text: "Rush After this attacks and kills a minion, gain +2/+2.",
    type: "MINION"
  },
  {
    artist: "Dave Allsop",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 47054,
    flavor: "Known throughout the land as the Spooky-nomicon.",
    id: "GIL_548",
    name: "Book of Specters",
    rarity: "EPIC",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 3,
    imageUrl: "636586130057542732.png",
    tile: "GIL_548.png",
    text: "Draw 3 cards. Discard any spells drawn.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 10,
            id: "c5f1f3b1-5091-4375-9dce-11026569750c",
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
    artist: "Adam Byrne",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 47055,
    elite: true,
    flavor:
      "Just a twist to the left, one quarter turn to the right and … oops! Well, we didn’t need that timeline anyway.",
    health: 5,
    id: "GIL_549",
    mechanics: ["BATTLECRY"],
    name: "Toki, Time-Tinker",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636584511861744159.png",
    tile: "GIL_549.png",
    text:
      "Battlecry: Add a random Legendary minion from the past to your hand.",
    type: "MINION"
  },
  {
    artist: "Max Greck",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 47063,
    flavor: "We didn't actually fire the guy who named Dark Wispers.",
    id: "GIL_553",
    name: "Wispering Woods",
    rarity: "EPIC",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 2,
    imageUrl: "636576875879912843.png",
    tile: "GIL_553.png",
    text: "Summon a 1/1 Wisp for each card in your hand.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "114258c3-cdeb-4a80-9d01-a596bd6f7107",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "card in your hand"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Wispering Woods"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "9328fcda-9e55-4aa1-aee3-3751bc2b9ba8",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Witchwood Apple"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "fda890a7-6089-4866-a870-f742c77b9a65",
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
    artist: "Tyler West Studio",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 47071,
    flavor:
      "She was an ordinary castaway... until she found that cursed volleyball.",
    health: 3,
    id: "GIL_557",
    mechanics: ["DEATHRATTLE", "RUSH"],
    name: "Cursed Castaway",
    race: "PIRATE",
    rarity: "RARE",
    referencedTags: ["COMBO"],
    set: 12,
    extra: ["CARD_DRAW", "SMALL_REMOVAL"],
    rating: 3,
    imageUrl: "636580225705798428.png",
    tile: "GIL_557.png",
    text: "Rush Deathrattle: Draw a Combo card from your deck.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3251439d-a17d-48f5-99fe-6a854c913496",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "combo"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Cursed Castaway"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 47072,
    flavor: "A face only a druid could love.",
    health: 1,
    id: "GIL_558",
    mechanics: ["LIFESTEAL"],
    name: "Swamp Leech",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636589034716077198.png",
    tile: "GIL_558.png",
    text: "Lifesteal",
    type: "MINION"
  },
  {
    artist: "Ivan Fomin",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47077,
    flavor: "'Oh hi bark.'",
    health: 4,
    id: "GIL_561",
    mechanics: ["BATTLECRY"],
    name: "Blackwald Pixie",
    rarity: "COMMON",
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636578475724820822.png",
    tile: "GIL_561.png",
    text: "Battlecry: Refresh your Hero Power.",
    type: "MINION"
  },
  {
    artist: "Tyler West Studio",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 47078,
    flavor: "It aspires to be a Vilebrood Dancer, but it has eight left feet.",
    health: 3,
    id: "GIL_562",
    mechanics: ["POISONOUS", "RUSH"],
    name: "Vilebrood Skitterer",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["HARD_REMOVAL"],
    rating: 2,
    imageUrl: "636588937571022861.png",
    tile: "GIL_562.png",
    text: "Poisonous Rush",
    type: "MINION"
  },
  {
    artist: "Konstantin Turovec",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 47085,
    flavor:
      "The itsy bitsy spiders climbed up the village wall. Then came the witch and the spiders ate them all.",
    health: 6,
    id: "GIL_565",
    mechanics: ["BATTLECRY"],
    name: "Deathweb Spider",
    race: "BEAST",
    rarity: "EPIC",
    referencedTags: ["LIFESTEAL"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636583692118872996.png",
    tile: "GIL_565.png",
    text: "Battlecry: If your hero took damage this turn, gain Lifesteal.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c16f4469-3dec-4405-b8ae-ad4a8c619e42",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage .* your hero"
              },
              {
                property: "cardClass",
                operation: "INCLUDES",
                minValue: "WARLOCK"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "ca78e317-a79a-4e3f-a383-cbf005610b47",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Lesser Amethyst Spellstone"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "74c2cfb2-e386-402c-ab28-27a209a05265",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "took damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Mauricio Herrera",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 47117,
    flavor:
      "The gates to the Gilnean pet cemetary MUST remain locked at all times.",
    id: "GIL_571",
    name: "Witching Hour",
    playRequirements: {
      REQ_FRIENDLY_MINIONS_OF_RACE_DIED_THIS_GAME: 20,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636581018851532440.png",
    tile: "GIL_571.png",
    text: "Summon a random friendly Beast that died this game.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "00c658a4-8861-4e03-91cd-4b2b766e6820",
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
                minValue: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Anton Zemskov",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 47128,
    flavor: "MISSING: One giant rat. Please return to King Togwaggle.",
    id: "GIL_577",
    mechanics: ["SECRET"],
    name: "Rat Trap",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636582874914846540.png",
    tile: "GIL_577.png",
    text:
      "Secret: After your opponent plays three cards in a turn, summon a 6/6 Rat.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9909fc12-9647-4fd2-9550-073cb30f25b9",
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
    artist: "James Ryman",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 47131,
    elite: true,
    flavor:
      "'1 minion… ah, ah, ah! 2 minions… ah, ah, ah! 3 minions… ah, ah, ah!'",
    health: 6,
    id: "GIL_578",
    mechanics: ["BATTLECRY"],
    name: "Countess Ashmore",
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE", "LIFESTEAL"],
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636586241052001648.png",
    tile: "GIL_578.png",
    text:
      "Battlecry: Draw a Rush, Lifesteal, and Deathrattle card from your deck.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "1942bdd3-2368-42b8-9c3f-47cef90cf798",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "RUSH"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "69144564-4efc-4fe5-ac21-d3c0cd23ec47",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "LIFESTEAL"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "0bbe6583-2ad8-4a7d-b330-f9768636fe5c",
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
    artist: "Arthur Gimaldinov",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 47133,
    flavor: "When he was younger, he was the town crybaby.",
    health: 2,
    id: "GIL_580",
    mechanics: ["BATTLECRY"],
    name: "Town Crier",
    rarity: "EPIC",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 3,
    imageUrl: "636585519670846563.png",
    tile: "GIL_580.png",
    text: "Battlecry: Draw a Rush minion from your deck.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "96109c68-b081-4aac-ab5c-d32dacff93cf",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "RUSH"
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
    cost: 4,
    dbfId: 47134,
    flavor: "The secret is glue.",
    health: 4,
    id: "GIL_581",
    mechanics: ["BATTLECRY"],
    name: "Sandbinder",
    rarity: "EPIC",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 2,
    imageUrl: "636589027957032431.png",
    tile: "GIL_581.png",
    text: "Battlecry: Draw an Elemental from your deck.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ef70390b-6338-424c-a2fc-a5f953b78c59",
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
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 47138,
    flavor: "When regular totem hours won't cut it.",
    health: 3,
    id: "GIL_583",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Totem Cruncher",
    race: "BEAST",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636585735139490632.png",
    tile: "GIL_583.png",
    text:
      "Taunt Battlecry: Destroy your Totems. Gain +2/+2 for each destroyed.",
    type: "MINION"
  },
  {
    artist: "Ursula Dorada",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 47142,
    flavor: "She rids villages of annoying pests, like rats and children.",
    health: 3,
    id: "GIL_584",
    mechanics: ["BATTLECRY"],
    name: "Witchwood Piper",
    rarity: "RARE",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 3,
    imageUrl: "636588227156677020.png",
    tile: "GIL_584.png",
    text: "Battlecry: Draw the lowest Cost minion from your deck.",
    type: "MINION"
  },
  {
    artist: "Alex Horley Orlandelli",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 47152,
    flavor: "Or it might not.",
    id: "GIL_586",
    name: "Earthen Might",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 12,
    extra: ["BUFF"],
    rating: 3,
    imageUrl: "636588957711259286.png",
    tile: "GIL_586.png",
    text:
      "Give a minion +2/+2. If it's an Elemental, add a random Elemental to your hand.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "15ddb02d-cce1-4958-ac80-b2a4cf2dbcff",
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
    artist: "Nutchapol Thitinunthakorn",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 8,
    dbfId: 47201,
    durability: 4,
    flavor:
      "Silver’s malleability limits its utility as an edged weapon. On the other hand... SHINY!",
    id: "GIL_596",
    name: "Silver Sword",
    rarity: "RARE",
    set: 12,
    extra: ["VALUE", "BUFF"],
    rating: 3,
    imageUrl: "636584922235815768.png",
    tile: "GIL_596.png",
    text: "After your hero attacks, give your minions +1/+1.",
    type: "WEAPON",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "4b5561f9-92c8-4528-beb9-9768ca410fc9",
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
    artist: "J. Axer",
    attack: 6,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 8,
    dbfId: 47211,
    elite: true,
    flavor:
      "Those who cannot remember their card history are doomed to repeat it.",
    health: 6,
    id: "GIL_598",
    mechanics: ["BATTLECRY"],
    name: "Tess Greymane",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636586586849889058.png",
    tile: "GIL_598.png",
    text:
      "Battlecry: Replay every card from another class you've played this game <i>(targets chosen randomly)</i>.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 10,
            id: "90ff1e3e-1097-44f9-a114-c45f436a5b13",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "opponent's class|another class|non-rogue"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jason Kang",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 0,
    dbfId: 47222,
    flavor: "The material components for this spell are wool socks and a rug.",
    id: "GIL_600",
    mechanics: ["OVERLOAD"],
    name: "Zap!",
    overload: 1,
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 12,
    extra: ["TEMPO", "SMALL_REMOVAL"],
    rating: 3,
    imageUrl: "636588935428635583.png",
    tile: "GIL_600.png",
    text: "Deal $2 damage to a minion. Overload: (1)",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "46b19432-d7df-4764-bae4-0cc531e71e76",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Unbound Elemental"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 47241,
    flavor: "A popular local alternative to bananas.",
    health: 4,
    id: "GIL_601",
    mechanics: ["BATTLECRY"],
    name: "Scaleworm",
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636578471162263064.png",
    tile: "GIL_601.png",
    text: "Battlecry: If you're holding a Dragon, gain +1 Attack and Rush.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f8a6610c-9e95-488b-99da-38eec2a94155",
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
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "be15bc2a-38f4-4121-8d34-0a0d39fda880",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Scaleworm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Tyler West Studio",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 47256,
    flavor: "Not all spiders are born poisonous. That's where he comes in.",
    health: 4,
    id: "GIL_607",
    name: "Toxmonger",
    rarity: "EPIC",
    referencedTags: ["POISONOUS"],
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636581127420401546.png",
    tile: "GIL_607.png",
    text: "Whenever you play a 1-Cost minion, give it Poisonous.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "b1022184-157d-46a6-a765-dec8d2c4b4b4",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Elven Archer"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "34dded7d-45fe-4a83-958e-10081bbec5fe",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Stonetusk Boar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Konstantin Turovec",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 47930,
    flavor: "'Shh! You're going to start a howl!'",
    health: 1,
    id: "GIL_607t",
    name: "Hunting Mastiff",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    mechanics: ["ECHO", "RUSH"],
    rating: 3,
    imageUrl: "636577744776737841.png",
    tile: "GIL_607t.png",
    text: "Echo Rush",
    type: "MINION"
  },
  {
    artist: "Kerem Beyit",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 47262,
    flavor: "<i>This</i> wood imp. Stop asking!",
    health: 1,
    id: "GIL_608",
    mechanics: ["DEATHRATTLE", "STEALTH"],
    name: "Witchwood Imp",
    race: "DEMON",
    rarity: "COMMON",
    set: 12,
    extra: ["BUFF"],
    rating: 4,
    imageUrl: "636589029645212818.png",
    tile: "GIL_608.png",
    text: "Stealth Deathrattle: Give a random   friendly minion +2 Health.",
    type: "MINION"
  },
  {
    artist: "Charlene Le Scanff",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47287,
    flavor: "'Aww, I love it! It even kinda looks like me.'",
    health: 1,
    id: "GIL_614",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    name: "Voodoo Doll",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636584552544025690.png",
    tile: "GIL_614.png",
    targetingArrowText: "Curse a minion.",
    text: "Battlecry: Choose a minion. Deathrattle: Destroy the chosen minion.",
    type: "MINION"
  },
  {
    artist: "Jim Nelson",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 47292,
    flavor: "No use crying over split Festeroot,",
    health: 4,
    id: "GIL_616",
    mechanics: ["DEATHRATTLE"],
    name: "Splitting Festeroot",
    rarity: "EPIC",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 2,
    imageUrl: "636586173793820630.png",
    tile: "GIL_616.png",
    text: "Deathrattle: Summon two 2/2 Splitting Saplings.",
    type: "MINION"
  },
  {
    artist: "Jomaro Kindred",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 47295,
    elite: true,
    flavor: "Summon an unlimited* number of minions!** *Six **Wisps",
    health: 7,
    id: "GIL_618",
    mechanics: ["AURA"],
    name: "Glinda Crowskin",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636576874880937507.png",
    tile: "GIL_618.png",
    text: "Minions in your hand have Echo.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "6d0a23cb-8e9a-42ff-91bf-c278564ab036",
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
    artist: "J. Axer",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47298,
    elite: true,
    flavor:
      "The children were puzzled by the scratches covering the insides of their toy-boxes.",
    health: 6,
    id: "GIL_620",
    name: "Dollmaster Dorian",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 2,
    imageUrl: "636583789706740951.png",
    tile: "GIL_620.png",
    text: "Whenever you draw a minion, summon a 1/1 copy of it.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "11e07554-3a6e-4e30-b7ed-ea7e5874438e",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "CARD_DRAW"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "discover"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Slawomir Maniak",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 47343,
    flavor: "In a pinch, he'll also settle for Holy Water: Zero.",
    health: 3,
    id: "GIL_622",
    mechanics: ["BATTLECRY"],
    name: "Lifedrinker",
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636589030459955654.png",
    tile: "GIL_622.png",
    text:
      "Battlecry: Deal 3 damage to the enemy hero. Restore 3 Health to your hero.",
    type: "MINION"
  },
  {
    artist: "Alex Alexandrov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47346,
    flavor: "You know what they say about people with big hands? Small bears.",
    health: 12,
    id: "GIL_623",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Witchwood Grizzly",
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["STALL"],
    rating: 3,
    imageUrl: "636582626860154345.png",
    tile: "GIL_623.png",
    text:
      "Taunt Battlecry: Lose 1 Health for each card in your opponent's hand.",
    type: "MINION"
  },
  {
    artist: "Anton Zemskov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 47348,
    flavor: "Listen to the mew-sic of the night.",
    health: 3,
    id: "GIL_624",
    mechanics: ["BATTLECRY"],
    name: "Night Prowler",
    race: "BEAST",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636589035624128455.png",
    tile: "GIL_624.png",
    text:
      "Battlecry: If this is the only minion in the battlefield, gain +3/+3.",
    type: "MINION"
  },
  {
    artist: "Andrew Hou",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 47405,
    flavor: "'Who are you? Eh, none of my business.'",
    health: 4,
    id: "GIL_634",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    name: "Bellringer Sentry",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636585346097343359.png",
    tile: "GIL_634.png",
    text:
      "Battlecry and Deathrattle: Put a Secret from your deck into the battlefield.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "36baa4eb-824a-4dd3-9500-3a5a0ea55201",
            filters: [
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
    artist: "Jakub Kasper",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 47416,
    flavor: "Fly like an eagle, drop like a rock.",
    health: 2,
    id: "GIL_635",
    mechanics: ["BATTLECRY"],
    name: "Cathedral Gargoyle",
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD", "TAUNT"],
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636581596568488271.png",
    tile: "GIL_635.png",
    text:
      "Battlecry: If you're holding a Dragon, gain Taunt and Divine Shield.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "c39f8885-c140-493e-b0dd-e8ff56c8774d",
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
    artist: "Mauricio Herrera",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 47423,
    flavor: "Have you ever heard the wolf cry to the blue corn moon?",
    id: "GIL_637",
    name: "Ferocious Howl",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 12,
    extra: ["CARD_DRAW", "HEAL"],
    rating: 3,
    imageUrl: "636588110761098811.png",
    tile: "GIL_637.png",
    text: "Draw a card. Gain 1 Armor for each card in your hand.",
    type: "SPELL"
  },
  {
    artist: "Alex Konstad",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 47429,
    flavor: "Experts worry that curios are a gateway to face-collecting.",
    health: 4,
    id: "GIL_640",
    name: "Curio Collector",
    rarity: "RARE",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636588973645948206.png",
    tile: "GIL_640.png",
    text: "Whenever you draw a card, gain +1/+1.",
    type: "MINION"
  },
  {
    artist: "Konstantin Turovec",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 47438,
    flavor: "Next step: Marshmallow elementals.",
    health: 5,
    id: "GIL_645",
    mechanics: ["BATTLECRY"],
    name: "Bonfire Elemental",
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 3,
    imageUrl: "636587160100399035.png",
    tile: "GIL_645.png",
    text: "Battlecry: If you played an Elemental last turn, draw a card.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "749f7972-94fb-445a-8ba3-d1716a5e4b70",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Bonfire Elemental"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Zoltan Boros",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47439,
    flavor: "Most mechs are pretty chill, but this one is all wound up.",
    health: 4,
    id: "GIL_646",
    name: "Clockwork Automaton",
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636578479875901003.png",
    tile: "GIL_646.png",
    text: "Double the damage and healing of your Hero Power.",
    type: "MINION"
  },
  {
    artist: "Matt Dixon",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47458,
    flavor:
      "Empty your pockets, I know you’ve got a Wandering Monster in there!",
    health: 6,
    id: "GIL_648",
    mechanics: ["BATTLECRY"],
    name: "Chief Inspector",
    rarity: "RARE",
    referencedTags: ["SECRET"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636589031533761974.png",
    tile: "GIL_648.png",
    text: "Battlecry: Destroy all enemy Secrets.",
    type: "MINION"
  },
  {
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 47488,
    elite: true,
    flavor: "They’re good dogs, Tess.",
    health: 6,
    id: "GIL_650",
    mechanics: ["AURA"],
    name: "Houndmaster Shaw",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636576869146864494.png",
    tile: "GIL_650.png",
    text: "Your other minions have Rush.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "93a55299-88ef-48c8-b355-403be7d8e563",
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
                minValue: "Houndmaster Shaw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Izzy Hoover",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 47511,
    durability: 2,
    flavor: "It's a lumberjack's axe and that's ok.",
    id: "GIL_653",
    mechanics: ["DEATHRATTLE"],
    name: "Woodcutter's Axe",
    rarity: "COMMON",
    set: 12,
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    rating: 2,
    imageUrl: "636582750295760491.png",
    tile: "GIL_653.png",
    text: "Deathrattle: Give +2/+1 to a random friendly Rush minion.",
    type: "WEAPON",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6d2a8d51-dbe0-4292-a54d-31c0d8dfde6a",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "RUSH"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Phil Saunders",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 47515,
    flavor:
      "'Left, right, left, right, there's none of the enemy left… Right?'",
    id: "GIL_654",
    name: "Warpath",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 12,
    extra: ["AOE"],
    mechanics: ["ECHO"],
    rating: 3,
    imageUrl: "636573419293279200.png",
    tile: "GIL_654.png",
    text: "Echo Deal $1 damage to all minions.",
    type: "SPELL"
  },
  {
    artist: "Evgeniy Dlinnov",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 47516,
    flavor: "Tree puns arboring.",
    health: 7,
    id: "GIL_655",
    name: "Festeroot Hulk",
    rarity: "RARE",
    set: 12,
    extra: ["FAST"],
    rating: 2,
    imageUrl: "636586294749037898.png",
    tile: "GIL_655.png",
    text: "After a friendly minion attacks, gain +1 Attack.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "438671a2-ff92-4109-8cdc-8cef6caf03a4",
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
                minValue: "Festeroot Hulk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Craig Elliott",
    attack: 8,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 8,
    dbfId: 47520,
    elite: true,
    flavor: "We're going to need some bigger tweezers.",
    health: 8,
    id: "GIL_658",
    mechanics: ["BATTLECRY"],
    name: "Splintergraft",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 2,
    imageUrl: "636584554840045859.png",
    tile: "GIL_658.png",
    targetingArrowText: "Add a 10/10 copy to your hand.",
    text:
      "Battlecry: Choose a friendly minion. Add a 10/10 copy to your hand that costs (10).",
    type: "MINION"
  },
  {
    artist: "Tom Baxa",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 47549,
    flavor:
      "Taken up an octave, it's highly effective against stained glass golems.",
    id: "GIL_661",
    name: "Divine Hymn",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0
    },
    rarity: "COMMON",
    set: 12,
    extra: ["HEAL"],
    rating: 3,
    imageUrl: "636588994186295607.png",
    tile: "GIL_661.png",
    text: "Restore #6 Health to all friendly characters.",
    type: "SPELL"
  },
  {
    artist: "Vlad Botos",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 47553,
    flavor: "An apple a day keeps the worgen at bay.",
    id: "GIL_663",
    name: "Witchwood Apple",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636576874505059278.png",
    tile: "GIL_663.png",
    text: "Add three 2/2 Treants to your hand.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "744349ae-bdb2-44ae-be28-4ee3fd8e388f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "card in your hand"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "46c14e0c-6dab-4d95-90f0-4f4477f2ff97",
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
    artist: "A.J. Nazzaro",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 47554,
    flavor: "As birds of ill omen, these crows often summon Doomsayers.",
    health: 3,
    id: "GIL_664",
    name: "Vex Crow",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["MIN_GEN"],
    rating: 3,
    imageUrl: "636578473596497200.png",
    tile: "GIL_664.png",
    text: "Whenever you cast a spell, summon a random 2-Cost minion.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "cc4d51cb-15d7-454b-87e4-ac19f40a0435",
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
    artist: "Matt Dixon",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 47555,
    flavor: "Warlocks refer to this as a 'balance change.'",
    id: "GIL_665",
    name: "Curse of Weakness",
    rarity: "RARE",
    set: 12,
    extra: ["STALL"],
    mechanics: ["ECHO"],
    rating: 2,
    imageUrl: "636588930823324776.png",
    tile: "GIL_665.png",
    text: "Echo Give all enemy minions -2 Attack until your next turn.",
    type: "SPELL"
  },
  {
    artist: "Steve Prescott",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47557,
    flavor: "Key ingredient in Gilnean applesauce.",
    health: 5,
    id: "GIL_667",
    mechanics: ["DEATHRATTLE", "TAUNT"],
    name: "Rotten Applebaum",
    rarity: "COMMON",
    set: 12,
    extra: ["HEAL"],
    rating: 3,
    imageUrl: "636576870438475496.png",
    tile: "GIL_667.png",
    text: "Taunt Deathrattle: Restore 4 Health to your hero.",
    type: "MINION"
  },
  {
    artist: "Nutchapol Thitinunthakorn",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 47594,
    durability: 2,
    flavor: "So sharp it can cut through a spectral tomato!",
    id: "GIL_672",
    mechanics: ["LIFESTEAL"],
    name: "Spectral Cutlass",
    rarity: "EPIC",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 1,
    imageUrl: "636583214430166077.png",
    tile: "GIL_672.png",
    text:
      "Lifesteal Whenever you play a card from another class, gain +1 Durability.",
    type: "WEAPON",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3dc4db1b-8be9-43ac-be6a-f348519e3a4a",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "opponent's class"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "d5ce351f-0842-4ab3-817b-0b778275c7ed",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "another class"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "19fa110e-23c5-47da-8215-d1602215843d",
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
    artist: "James Ryman",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 47599,
    elite: true,
    flavor: "“I’ll trade you a Malfurion for an Anduin.”",
    health: 2,
    id: "GIL_677",
    mechanics: ["BATTLECRY", "ECHO"],
    name: "Face Collector",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636573412461495555.png",
    tile: "GIL_677.png",
    text: "Echo Battlecry: Add a random Legendary minion to your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "bfe4340b-e5cc-4200-ab7b-0aaecdca3b8c",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Shadowstep"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jason Kang",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 47600,
    flavor: "BoOooOogrglgrlgrlooOoOoo!",
    health: 2,
    id: "GIL_678",
    name: "Ghost Light Angler",
    race: "MURLOC",
    rarity: "COMMON",
    set: 12,
    extra: ["MIN_GEN"],
    mechanics: ["ECHO"],
    rating: 2,
    imageUrl: "636588932702495783.png",
    tile: "GIL_678.png",
    text: "Echo",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e61b1c76-3b34-49ee-9fe5-fe6607948548",
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
            minCards: 4,
            maxCards: 4,
            id: "9866cece-d997-4309-a312-10959d8c7fce",
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
    artist: "Ivan Fomin",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47602,
    flavor: "How do you make a walnut laugh? Crack it up!",
    health: 3,
    id: "GIL_680",
    name: "Walnut Sprite",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    mechanics: ["ECHO"],
    rating: 2,
    imageUrl: "636588996513770082.png",
    tile: "GIL_680.png",
    text: "Echo",
    type: "MINION"
  },
  {
    artist: "Andrew Hou",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 49502,
    flavor: "Be all that you can be.",
    health: 4,
    id: "GIL_681",
    name: "Nightmare Amalgam",
    race: "ALL",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 3,
    imageUrl: "636577625353690798.png",
    tile: "GIL_681.png",
    text:
      "<i>This is an Elemental, Mech, Demon, Murloc, Dragon, Beast, Pirate and Totem.</i>",
    type: "MINION"
  },
  {
    artist: "Pior Oberson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 47606,
    flavor: "You think your job mucks.",
    health: 8,
    id: "GIL_682",
    mechanics: ["BATTLECRY", "RUSH"],
    name: "Muck Hunter",
    rarity: "EPIC",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 2,
    imageUrl: "636577616667436640.png",
    tile: "GIL_682.png",
    text: "Rush Battlecry: Summon two 2/1 Mucklings for your opponent.",
    type: "MINION"
  },
  {
    artist: "Wayne Wu",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 47607,
    flavor:
      "She would have gotten away with it, if it weren't for that meddling Drakeslayer.",
    health: 4,
    id: "GIL_683",
    mechanics: ["BATTLECRY"],
    name: "Marsh Drake",
    race: "DRAGON",
    rarity: "COMMON",
    referencedTags: ["POISONOUS"],
    set: 12,
    extra: ["FAST"],
    rating: 3,
    imageUrl: "636588974579827965.png",
    tile: "GIL_683.png",
    text: "Battlecry: Summon a 2/1 Poisonous Drakeslayer for your opponent.",
    type: "MINION"
  },
  {
    artist: "James Ryman",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 47614,
    flavor: "She’s all fun and games until someone rings that stupid bell.",
    health: 5,
    id: "GIL_685",
    name: "Paragon of Light",
    rarity: "RARE",
    referencedTags: ["LIFESTEAL", "TAUNT"],
    set: 12,
    extra: ["FAST"],
    rating: 2,
    imageUrl: "636588822005893565.png",
    tile: "GIL_685.png",
    text: "While this minion has 3 or more Attack, it has Taunt and Lifesteal.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "23437ac5-35cf-4408-acd1-8c9cd3bdc922",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Konstantin Turovec",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 47625,
    flavor: "Wanted: Dead or Undead.",
    id: "GIL_687",
    name: "WANTED!",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 1,
    imageUrl: "636578293141625284.png",
    tile: "GIL_687.png",
    text:
      "Deal $3 damage to a minion. If that kills it, add a Coin to your hand.",
    type: "SPELL"
  },
  {
    artist: "James Ryman",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 47692,
    elite: true,
    flavor: "His worgen children call him Archmage AROO-OO-OO-OO-gal.",
    health: 2,
    id: "GIL_691",
    name: "Archmage Arugal",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636586708959120353.png",
    tile: "GIL_691.png",
    text: "Whenever you draw a minion, add a copy of it to your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a6640334-9149-40e8-b869-c1ebfc14ae42",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "CARD_DRAW"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "draw"
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
    artist: "Alex Horley Orlandelli",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 47693,
    elite: true,
    flavor:
      "Ever since Sylvanas killed his son, he's dreamed of getting… even.",
    health: 5,
    id: "GIL_692",
    name: "Genn Greymane",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636564866897852741.png",
    tile: "GIL_692.png",
    text:
      "Start of Game: If your deck has only even-Cost cards, your starting Hero Power costs (1).",
    type: "MINION",
    deckFilters: [
      {
        id: "2e65d753-0f80-4e25-81d9-c41a43d1ea9d",
        property: "cost",
        operation: "IS_EVEN"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "938504e6-2019-447e-b62e-2295d337c9e1",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "even.*cost"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Qinghao Wu",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 47694,
    flavor: "Like a sloppy joe for vampires.",
    health: 6,
    id: "GIL_693",
    name: "Blood Witch",
    rarity: "RARE",
    set: 12,
    extra: ["FAST"],
    rating: 2,
    imageUrl: "636583694244991716.png",
    tile: "GIL_693.png",
    text: "At the start of your turn, deal 1 damage to your hero.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "4af6b6fd-0297-4ae1-823b-3733c6f54781",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage .* your hero"
              },
              {
                property: "cardClass",
                operation: "INCLUDES",
                minValue: "WARLOCK"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "92941ef8-fa32-45d2-b66b-35c07b14f051",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Lesser Amethyst Spellstone"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "90758f4e-d14c-49ce-bd18-dbb5ff87984c",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "took damage"
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
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 47696,
    elite: true,
    flavor:
      "'I have a very particular set of skills. Skills that make me a nightmare for witches like you.'",
    health: 5,
    id: "GIL_694",
    mechanics: ["BATTLECRY"],
    name: "Prince Liam",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 2,
    imageUrl: "636588966723909148.png",
    tile: "GIL_694.png",
    text:
      "Battlecry: Transform all 1-Cost cards in your deck  into Legendary minions.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "b4e0120b-4752-4c59-92b9-cd50b6a13306",
            filters: [{ property: "cost", operation: "EQUALS", minValue: 1 }]
          }
        ]
      }
    ]
  },
  {
    artist: "Mauricio Herrera",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 47799,
    flavor:
      "He'll pick anyone's pocket, except a gnome's. He'd never stoop so low.",
    id: "GIL_696",
    name: "Pick Pocket",
    rarity: "RARE",
    set: 12,
    extra: ["VALUE"],
    mechanics: ["ECHO"],
    rating: 3,
    imageUrl: "636584656482483983.png",
    tile: "GIL_696.png",
    text:
      "Echo Add a random card to your hand <i>(from your opponent's class).</i>",
    type: "SPELL"
  },
  {
    artist: "Glenn Rane",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 47819,
    elite: true,
    flavor: "Someone called her 'Tweety'. She didn't take it well.",
    health: 7,
    id: "GIL_800",
    mechanics: ["AURA"],
    name: "Duskfallen Aviana",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636583681615852776.png",
    tile: "GIL_800.png",
    text: "On each player's turn, the first card played costs (0).",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "74e455c9-9f49-42fe-b42f-0ec95a629c75",
            filters: [
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
    artist: "Gonzalo Ordonez",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 47821,
    flavor: "Lick the ice block. I triple-double-dog-dare-you.",
    id: "GIL_801",
    name: "Snap Freeze",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636589031988304939.png",
    tile: "GIL_801.png",
    text: "Freeze a minion. If it's already Frozen, destroy it.",
    type: "SPELL"
  },
  {
    artist: "Tyler West Studio",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 47825,
    flavor: "She only needs two commands: 'Heel' and 'Sic 'em!'",
    health: 5,
    id: "GIL_803",
    mechanics: ["BATTLECRY", "RUSH"],
    name: "Militia Commander",
    rarity: "RARE",
    set: 12,
    extra: ["SMALL_REMOVAL"],
    rating: 3,
    imageUrl: "636564867573367874.png",
    tile: "GIL_803.png",
    text: "Rush Battlecry: Gain +3 Attack this turn.",
    type: "MINION"
  },
  {
    artist: "Dave Allsop",
    attack: 6,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 47836,
    flavor: "Also does weddings.",
    health: 5,
    id: "GIL_805",
    mechanics: ["DEATHRATTLE"],
    name: "Coffin Crasher",
    rarity: "RARE",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636578977260832691.png",
    tile: "GIL_805.png",
    text: "Deathrattle: Summon a Deathrattle minion from your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "9c334eb3-c5ad-4198-87e7-c03e23c57756",
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
    artist: "Jim Nelson",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 7,
    dbfId: 47873,
    flavor: "The tricky part is getting them to HOLD their shape.",
    health: 8,
    id: "GIL_807",
    name: "Bogshaper",
    race: "ELEMENTAL",
    rarity: "EPIC",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 3,
    imageUrl: "636583689102484974.png",
    tile: "GIL_807.png",
    text: "Whenever you cast a spell, draw a minion from your deck.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "42dc38e1-7c86-4847-b484-2d2c8d3f66ad",
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
    artist: "Phil Saunders",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 47895,
    flavor: "Overpowered Steambot got nerfed.",
    health: 9,
    id: "GIL_809",
    mechanics: ["TAUNT"],
    name: "Unpowered Steambot",
    race: "MECHANICAL",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636588991383477680.png",
    tile: "GIL_809.png",
    text: "Taunt",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "1bae4fad-4716-4ac8-aef2-5d2a69560bc0",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "\\+.*attack"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Zoltan Boros",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 48002,
    flavor:
      "'I… I dreamed I accidentally crafted a golden Millhouse! It was so REAL!'",
    id: "GIL_813",
    name: "Vivid Nightmare",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636576875185650707.png",
    tile: "GIL_813.png",
    text:
      "Choose a friendly minion. Summon a copy of it with 1 Health remaining.",
    type: "SPELL"
  },
  {
    artist: "Dave Allsop",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 48039,
    flavor: "He's gotten big into crypt-o-currency.",
    health: 2,
    id: "GIL_815",
    mechanics: ["BATTLECRY"],
    name: "Baleful Banker",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636588934448515293.png",
    tile: "GIL_815.png",
    targetingArrowText: "Shuffle a copy into your deck.",
    text:
      "Battlecry: Choose a friendly minion. Shuffle a copy of it into your deck.",
    type: "MINION"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 48106,
    flavor: "Would you eat them in a ditch? Would you eat them with a witch?",
    health: 3,
    id: "GIL_816",
    mechanics: ["DEATHRATTLE"],
    name: "Swamp Dragon Egg",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636588965020774673.png",
    tile: "GIL_816.png",
    text: "Deathrattle: Add a random Dragon to your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "959ed5fe-0738-4539-94b8-920549dc9c8d",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "\\+.*attack"
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
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 48107,
    elite: true,
    flavor: "She seems scary, but she's got a glass jaw.",
    health: 3,
    id: "GIL_817",
    mechanics: ["DIVINE_SHIELD"],
    name: "The Glass Knight",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636585343561651782.png",
    tile: "GIL_817.png",
    text: "Divine Shield Whenever you restore Health, gain Divine Shield.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "d2ac20ec-ed43-4a06-a5a7-6b1cdb2457e1",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "restore"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Anton Zemskov",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 48110,
    flavor: "Eye of murloc, ear of bat, foot of Fordring, fur of cat…",
    health: 4,
    id: "GIL_819",
    name: "Witch's Cauldron",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636582796059178356.png",
    tile: "GIL_819.png",
    text:
      "After a friendly minion dies, add a random Shaman spell to your hand.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "37c3c6a9-af14-408f-82d4-8609062f86db",
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
    artist: "Matt Dixon",
    attack: 6,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 9,
    dbfId: 48111,
    elite: true,
    flavor:
      "Beware the Shudderwock, my son. We're fresh out of vorpal daggers.",
    health: 6,
    id: "GIL_820",
    mechanics: ["BATTLECRY"],
    name: "Shudderwock",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["VALUE"],
    rating: 3,
    imageUrl: "636588933636160463.png",
    tile: "GIL_820.png",
    text:
      "Battlecry: Repeat all other Battlecries from cards you played this game <i>(targets chosen randomly)</i>.",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "2aac0db6-4e02-4496-89d9-1117486f66eb",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "BATTLECRY"
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "silence"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Alex Horley Orlandelli",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 7,
    dbfId: 48156,
    elite: true,
    flavor:
      "Betrayed the Alliance. Betrayed the Horde. All for 200 achievement points and a sweet, sweet hat.",
    health: 4,
    id: "GIL_825",
    mechanics: ["BATTLECRY"],
    name: "Lord Godfrey",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["AOE"],
    rating: 3,
    imageUrl: "636577612464085551.png",
    tile: "GIL_825.png",
    text:
      "Battlecry: Deal 2 damage to all other minions. If any die, repeat this Battlecry.",
    type: "MINION"
  },
  {
    artist: "James Ryman",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 48158,
    elite: true,
    flavor: "In her defense, it did look like a cookie.",
    health: 8,
    id: "GIL_826",
    name: "Baku the Mooneater",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 1,
    imageUrl: "636564866360910999.png",
    tile: "GIL_826.png",
    text:
      "Start of Game: If your deck has only odd- Cost cards, upgrade your Hero Power.",
    type: "MINION",
    deckFilters: [
      {
        id: "38492b94-1883-4d54-a30a-771a9063b5aa",
        property: "cost",
        operation: "IS_ODD"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ba64bf9d-ac1b-43b8-88b6-a8f94f019ca2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Eva Wildermann",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 48199,
    flavor: "It's like, SUPER bad at staring contests.",
    health: 3,
    id: "GIL_827",
    mechanics: ["BATTLECRY"],
    name: "Blink Fox",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["GENERAL"],
    rating: 4,
    imageUrl: "636586587868072889.png",
    tile: "GIL_827.png",
    text:
      "Battlecry: Add a random card to your hand <i>(from your opponent's class).</i>",
    type: "MINION"
  },
  {
    artist: "Efrem Palacios",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 48201,
    flavor: "It's always Huffer. And Huffer. And Huffer. And Huffer.",
    id: "GIL_828",
    name: "Dire Frenzy",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "COMMON",
    set: 12,
    extra: ["BUFF"],
    rating: 3,
    imageUrl: "636583684761490398.png",
    tile: "GIL_828.png",
    text: "Give a Beast +3/+3. Shuffle 3 copies into your deck with +3/+3.",
    type: "SPELL",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c6a8c767-812d-473a-b2eb-2c29ddf02567",
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
                property: "text",
                operation: "NOT_MATCH",
                minValue: "targeted"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Hideaki Takamura",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 48286,
    flavor: "'Just sign this waiver, and we'll be on our way.'",
    health: 6,
    id: "GIL_833",
    name: "Forest Guide",
    rarity: "RARE",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 1,
    imageUrl: "636578288268544190.png",
    tile: "GIL_833.png",
    text: "At the end of your turn, both players draw a card.",
    type: "MINION"
  },
  {
    artist: "Tyler Walpole",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 48360,
    flavor: "Everyone hail to the squashling song!",
    health: 1,
    id: "GIL_835",
    mechanics: ["BATTLECRY", "ECHO"],
    name: "Squashling",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 12,
    extra: ["HEAL"],
    rating: 2,
    imageUrl: "636588931827790931.png",
    tile: "GIL_835.png",
    text: "Echo Battlecry: Restore 2 Health.",
    type: "MINION"
  },
  {
    artist: "Dan Scott",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 48393,
    flavor: "A lot of shaman have started vaping their invocations.",
    id: "GIL_836",
    name: "Blazing Invocation",
    rarity: "RARE",
    referencedTags: ["BATTLECRY", "DISCOVER"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588956557263622.png",
    tile: "GIL_836.png",
    text: "Discover a Battlecry minion.",
    type: "SPELL"
  },
  {
    artist: "Bill Ruan",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 48444,
    flavor: "Some moths are attracted to flame. This one's attracted to disco.",
    health: 4,
    id: "GIL_837",
    mechanics: ["BATTLECRY"],
    name: "Glitter Moth",
    race: "BEAST",
    rarity: "EPIC",
    set: 12,
    extra: ["BUFF"],
    rating: 3,
    imageUrl: "636578213979978867.png",
    tile: "GIL_837.png",
    text:
      "Battlecry: If your deck has only odd-Cost cards, double the Health of your other minions.",
    type: "MINION",
    deckFilters: [
      {
        id: "38492b94-1883-4d54-a30a-771a9063b5aa",
        property: "cost",
        operation: "IS_ODD"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a6a3407a-256b-41af-a8f6-55c533257345",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jakub Kasber",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 48445,
    flavor: "She's so odd, you can't even.",
    health: 3,
    id: "GIL_838",
    mechanics: ["BATTLECRY", "SPELLPOWER"],
    name: "Black Cat",
    race: "BEAST",
    rarity: "COMMON",
    set: 12,
    extra: ["CARD_DRAW"],
    rating: 2,
    imageUrl: "636567316344953089.png",
    tile: "GIL_838.png",
    spellDamage: 1,
    text:
      "Spell Damage +1  Battlecry: If your deck has only odd-Cost cards, draw a card.",
    type: "MINION",
    deckFilters: [
      {
        id: "38492b94-1883-4d54-a30a-771a9063b5aa",
        property: "cost",
        operation: "IS_ODD"
      }
    ],
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e4eafa15-fd1a-442d-8a53-12cebd1874c2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Konstantin Turovec",
    attack: 5,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 48560,
    elite: true,
    flavor:
      "She was a lady in polka dots until the gnomish laundromat incident.",
    health: 5,
    id: "GIL_840",
    mechanics: ["BATTLECRY"],
    name: "Lady in White",
    rarity: "LEGENDARY",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636580216800589254.png",
    tile: "GIL_840.png",
    text:
      "Battlecry: Cast 'Inner Fire'  on every minion in your deck  <i>(set Attack equal to Health).</i>",
    type: "MINION",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "sdasda",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "health",
                operation: "HIGH_HEALTH_MINION",
                minValue: "whatever"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Konstantin Turovec",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 48585,
    flavor: "In life he worked as a sword swallower.",
    health: 4,
    id: "GIL_902",
    mechanics: ["COMBO"],
    name: "Cutthroat Buccaneer",
    race: "PIRATE",
    rarity: "COMMON",
    set: 12,
    extra: ["FAST"],
    rating: 2,
    imageUrl: "636589025295903147.png",
    tile: "GIL_902.png",
    text: "Combo: Give your weapon +1 Attack.",
    type: "MINION"
  },
  {
    artist: "Daria Tuzova",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 48832,
    flavor: "Find your own wisdom. Perhaps behind the couch.",
    id: "GIL_903",
    mechanics: ["SECRET"],
    name: "Hidden Wisdom",
    rarity: "EPIC",
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588958665252925.png",
    tile: "GIL_903.png",
    text:
      "Secret: After your opponent plays three cards in a turn, draw 2 cards.",
    type: "SPELL"
  },
  {
    artist: "Steve Prescott",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 48902,
    flavor: "Fits easily into overhead luggage bins.",
    health: 7,
    id: "GIL_905",
    mechanics: ["BATTLECRY"],
    name: "Carrion Drake",
    race: "DRAGON",
    rarity: "RARE",
    referencedTags: ["POISONOUS"],
    set: 12,
    extra: ["GENERAL"],
    rating: 2,
    imageUrl: "636588936646397613.png",
    tile: "GIL_905.png",
    text: "Battlecry: If a minion died this turn, gain Poisonous.",
    type: "MINION"
  }
];
