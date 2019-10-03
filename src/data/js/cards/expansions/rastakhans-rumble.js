export const rastakhansRumble = [
  {
    artist: "Ivan Fomin",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 49049,
    flavor: "One player's trash is another's “Best In Slot”.",
    health: 5,
    id: "TRL_010",
    mechanics: ["STEALTH"],
    name: "Half-Time Scavenger",
    rarity: "COMMON",
    set: 14,
    text: "Stealth Overkill: Gain 3 Armor.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791250131250069.png",
    tile: "TRL_010.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 49051,
    entourage: ["CS2_052", "CS2_050", "NEW1_009", "CS2_051"],
    flavor:
      "Trolls are the first group to have a totem survive atmospheric re-entry.",
    id: "TRL_012",
    name: "Totemic Smash",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Deal $2 damage. Overkill: Summon a basic Totem.",
    type: "SPELL",
    rating: 3,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791250192340529.png",
    tile: "TRL_012.png"
  },
  {
    artist: "David Kegg",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 49066,
    flavor: "Takes ten percent off the top.",
    health: 3,
    id: "TRL_015",
    name: "Ticket Scalper",
    race: "PIRATE",
    rarity: "COMMON",
    set: 14,
    text: "Overkill: Draw 2 cards.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791250252024812.png",
    tile: "TRL_015.png"
  },
  {
    artist: "Jiajun Tian",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 49088,
    flavor: "An eye for sore sights.",
    health: 4,
    id: "TRL_020",
    mechanics: ["RUSH"],
    name: "Sightless Ranger",
    rarity: "COMMON",
    set: 14,
    text: "Rush Overkill: Summon two 1/1 Bats.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791250351238193.png",
    tile: "TRL_020.png"
  },
  {
    artist: "Cicily He",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 49800,
    flavor: "When snakes get sick, they get sent to the Serpent Ward.",
    health: 2,
    id: "TRL_057",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Serpent Ward",
    race: "TOTEM",
    rarity: "RARE",
    set: 14,
    text: "At the end of your turn, deal 2 damage to the enemy hero.",
    type: "MINION",
    rating: 1,
    extra: ["DAMAGE"],
    imageUrl: "636791250527166290.png",
    tile: "TRL_057.png"
  },
  {
    artist: "Akkapoj T.",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 49802,
    flavor:
      "When you're awake at 3 AM and can't stop thinking about that time you called your teacher 'mom.'",
    id: "TRL_058",
    name: "Haunting Visions",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "The next spell you cast this turn costs (3) less. Discover a spell.",
    type: "SPELL",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791250575757429.png",
    tile: "TRL_058.png"
  },
  {
    artist: "James Ryman",
    attack: 3,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 49803,
    flavor: "It's the bane of freshly mopped floors everywhere.",
    health: 3,
    id: "TRL_059",
    mechanics: ["BATTLECRY"],
    name: "Bog Slosher",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "ELEMENTAL",
    rarity: "RARE",
    set: 14,
    targetingArrowText: "Return a minion to your hand.",
    text: "Battlecry: Return a friendly minion to your hand and give it +2/+2.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791250626389389.png",
    tile: "TRL_059.png"
  },
  {
    artist: "Konstantin Turovec",
    attack: 0,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 49804,
    flavor: "It is Wednesday, my dudes.",
    health: 3,
    id: "TRL_060",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Frog",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. Whenever you cast a spell, draw a spell from your deck that costs (1) more.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791250669346063.png",
    tile: "TRL_060.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "96567023-e567-4469-9f03-70db16014529",
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
    armor: 5,
    artist: "Alex Horley Orlandelli",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 10,
    dbfId: 49819,
    elite: true,
    flavor: "If you can dodge an axe, you can dodge a ball.",
    health: 30,
    id: "TRL_065",
    mechanics: ["BATTLECRY"],
    name: "Zul'jin",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: Cast all spells you've played this game <i>(targets chosen randomly)</i>.",
    type: "HERO",
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636788992288347869.png",
    tile: "TRL_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spell that don't target stuff",
        priorities: [
          {
            minCards: 8,
            maxCards: 12,
            id: "e725ac9c-7008-440c-9bba-ee139bfef84c",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "playRequirements.REQ_TARGET_TO_PLAY",
                operation: "IS_UNDEFINED",
                minValue: "whatever"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Patrik Bjorkstrom",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 49838,
    flavor:
      "They saw their fate a closin' Aboard a pirate ship On deck: The Howlin' Hozen About to let one rip.",
    health: 1,
    id: "TRL_071",
    mechanics: ["BATTLECRY", "RUSH"],
    name: "Bloodsail Howler",
    race: "PIRATE",
    rarity: "RARE",
    set: 14,
    text: "Rush Battlecry: Gain +1/+1 for each other Pirate you control.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791250749029353.png",
    tile: "TRL_071.png",
    activeVersion: 0,
    versions: [
      {
        name: "Pirates, lots of them",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "e34046a5-7b44-42bb-bf3a-5e33d107f7bf",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "PIRATE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Bloodsail Howler"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Grace Liu",
    attack: 1,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 49843,
    durability: 3,
    flavor: "The tooth hurts, don’t it?",
    id: "TRL_074",
    mechanics: ["DEATHRATTLE"],
    name: "Serrated Tooth",
    rarity: "COMMON",
    set: 14,
    text: "Deathrattle: Give your minions Rush.",
    type: "WEAPON",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791250791214459.png",
    tile: "TRL_074.png"
  },
  {
    artist: "Ivan Fomin",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 7,
    dbfId: 49847,
    flavor: "Throw your hands in the air! They cost (1).",
    health: 7,
    id: "TRL_077",
    mechanics: ["BATTLECRY"],
    name: "Gurubashi Hypemon",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "EPIC",
    set: 14,
    text: "Battlecry: Discover a 1/1 copy of a Battlecry minion. It costs (1).",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791250832774763.png",
    tile: "TRL_077.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 49853,
    flavor: "Murlocs practice Small Nice Voodoo.",
    id: "TRL_082",
    name: "Big Bad Voodoo",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    set: 14,
    text:
      "Give a friendly minion 'Deathrattle: Summon a random minion that costs (1) more.'",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791250873553761.png",
    tile: "TRL_082.png"
  },
  {
    artist: "Evgeniy Zagumyenny",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 49867,
    elite: true,
    flavor: "Serenity. Peace. Many frogs.",
    health: 3,
    id: "TRL_085",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Zentimo",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Whenever you target a minion with a spell, it also targets adjacent ones.",
    type: "MINION",
    rating: 4,
    extra: ["GENERAL"],
    imageUrl: "636791250917457802.png",
    tile: "TRL_085.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells that target stuff",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "fda1c757-b7b1-43cb-a00c-7a50ebcc68c7",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              {
                property: "playRequirements.REQ_TARGET_TO_PLAY",
                operation: "EQUALS",
                minValue: 0
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Ivan Fomin",
    attack: 0,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 49972,
    flavor: "It has Stealth, but its ominous theme music keeps giving it away.",
    health: 3,
    id: "TRL_092",
    mechanics: ["AURA", "STEALTH"],
    name: "Spirit of the Shark",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. Your minions' Battlecries   and Combos trigger twice. ",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791250960580260.png",
    tile: "TRL_092.png",
    activeVersion: 0,
    versions: [
      {
        name: "Battlecries and Combos",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6df5b054-2aaa-49a6-8e98-4998745d80e8",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "BATTLECRY"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 6,
            id: "a0ee280f-7889-46a1-82e4-bbcb965424f7",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "COMBO"
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
    dbfId: 50009,
    elite: true,
    flavor:
      "With Griftah in your deck, sometimes you start the game with The Coin!",
    health: 5,
    id: "TRL_096",
    mechanics: ["BATTLECRY"],
    name: "Griftah",
    rarity: "LEGENDARY",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "Battlecry: Discover two cards. Give one to your opponent at random.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791251039325703.png",
    tile: "TRL_096.png"
  },
  {
    artist: "Skan Srisuwan",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 50278,
    flavor:
      "“The spirits spoke to me.” 'What did they say?' 'You had lethal two turns ago.'",
    id: "TRL_097",
    name: "Seance",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Choose a minion. Add a copy of it to your hand.",
    type: "SPELL",
    rating: 1,
    extra: ["VALUE"],
    imageUrl: "636791251078386662.png",
    tile: "TRL_097.png"
  },
  {
    artist: "Akkapoj T.",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 50608,
    durability: 2,
    flavor: "Zul'jin's primary recruiting tool.",
    id: "TRL_111",
    mechanics: ["BATTLECRY"],
    name: "Headhunter's Hatchet",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: If you control a Beast, gain +1 Durability.",
    type: "WEAPON",
    rating: 3,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791251111822079.png",
    tile: "TRL_111.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 50644,
    flavor: "Undoes years of obedience school training.",
    id: "TRL_119",
    name: "The Beast Within",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_RACE: 20
    },
    rarity: "EPIC",
    set: 14,
    text: "Give a friendly Beast +1/+1, then it attacks a random enemy minion.",
    type: "SPELL",
    rating: 3,
    extra: ["BUFF"],
    imageUrl: "636791251150569992.png",
    tile: "TRL_119.png",
    activeVersion: 0,
    versions: [
      {
        name: "Give me beaaasts",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "913426c0-3ed1-4e19-9520-87b638a8dab8",
            filters: [
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
    artist: "Jim Nelson",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 50773,
    flavor: "And a bowl of chips. And some of those little cocktail weenies!",
    id: "TRL_124",
    mechanics: ["COMBO"],
    name: "Raiding Party",
    rarity: "RARE",
    set: 14,
    text: "Draw 2 Pirates from your deck. Combo: And a weapon.",
    type: "SPELL",
    rating: 4,
    extra: ["CARD_DRAW"],
    imageUrl: "636791251192911489.png",
    tile: "TRL_124.png",
    activeVersion: 0,
    versions: [
      {
        name: "Pirates and weapons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3e7632a4-cbb8-4009-8d4a-bcd1b8efe438",
            filters: [
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
            id: "f0f922e0-c60c-4033-978b-ed469bbaee88",
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
    artist: "Matt Dixon",
    attack: 6,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 8,
    dbfId: 50774,
    elite: true,
    flavor: "'You three! Get in the cannon!'",
    health: 3,
    id: "TRL_126",
    mechanics: ["BATTLECRY"],
    name: "Captain Hooktusk",
    race: "PIRATE",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Summon 3 Pirates from your deck. Give them Rush.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791251232909376.png",
    tile: "TRL_126.png",
    activeVersion: 0,
    versions: [
      {
        name: "Lots of pirates",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "140e8a4b-3a6f-4f33-ab1c-b11cd4c5ebc9",
            filters: [
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
    artist: "Arthur Bozonnet",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 50779,
    flavor:
      "Why fire your cannons strategically when you can fire them all at once?",
    id: "TRL_127",
    name: "Cannon Barrage",
    rarity: "EPIC",
    set: 14,
    text: "Deal $3 damage to a random enemy. Repeat for each of your Pirates.",
    type: "SPELL",
    rating: 2,
    extra: ["DAMAGE", "AOE"],
    imageUrl: "636791251277282078.png",
    tile: "TRL_127.png",
    activeVersion: 0,
    versions: [
      {
        name: "Lots of pirates",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "0e12a815-b71e-4f13-866e-f275c7cab3be",
            filters: [
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
    artist: "Arthur Bozonnet",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 0,
    dbfId: 50794,
    flavor: "Finally a cure for degenerates.",
    id: "TRL_128",
    name: "Regenerate",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Restore #3 Health.",
    type: "SPELL",
    rating: 3,
    extra: ["HEAL"],
    imageUrl: "636791259096069786.png",
    tile: "TRL_128.png"
  },
  {
    artist: "Dave Allsop",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 50315,
    flavor: "Loves long walks on the beach, raising the dead, and chocolates.",
    health: 3,
    id: "TRL_131",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Sand Drudge",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 14,
    text: "Whenever you cast a spell, summon a 1/1 Zombie with Taunt.",
    type: "MINION",
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636791251316186142.png",
    tile: "TRL_131.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some cheap spells",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "b8f7fc36-7287-47bd-9f83-8381f1530728",
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
    artist: "Peter Stapleton",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 50731,
    flavor: "The last time he saw action, Undertaker ruled the meta.",
    health: 1,
    id: "TRL_151",
    mechanics: ["BATTLECRY"],
    name: "Former Champ",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Summon a 5/5 Hotshot.",
    type: "MINION",
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636791251358058999.png",
    tile: "TRL_151.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 50749,
    flavor: "Because Thrall wouldn't <i>lend</i> me Doomhammer.",
    id: "TRL_156",
    name: "Stolen Steel",
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "Discover a weapon <i>(from another class)</i>.",
    type: "SPELL",
    rating: 2,
    extra: ["SMALL_REMOVAL", "VALUE"],
    imageUrl: "636791251394150672.png",
    tile: "TRL_156.png"
  },
  {
    artist: "Ivan Fomin",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 50766,
    flavor: "Pirates will fall for anything.",
    id: "TRL_157",
    name: "Walk the Plank",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_UNDAMAGED_TARGET: 0
    },
    rarity: "COMMON",
    set: 14,
    text: "Destroy an undamaged minion.",
    type: "SPELL",
    rating: 3,
    extra: ["HARD_REMOVAL"],
    imageUrl: "636791251430242367.png",
    tile: "TRL_157.png"
  },
  {
    artist: "Christopher Hayes",
    attack: 0,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 1,
    dbfId: 49944,
    flavor: "“Loti! LOTI! Drop it. Drop it Loti! Down! Down Loti!”",
    health: 3,
    id: "TRL_223",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Raptor",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. After your hero attacks and   kills a minion, draw a card.  ",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791251469146326.png",
    tile: "TRL_223.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buff your hero",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "4d27c150-b0c1-4766-81bf-0bab28862b83",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "hero.*attack"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Spirit of the Raptor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Luca Zontini",
    attack: 7,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 49973,
    flavor: "'Boy! Bring me my masks and skull rams.'",
    health: 7,
    id: "TRL_232",
    name: "Ironhide Direhorn",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Overkill: Summon a 5/5 Ironhide Runt.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791251505707277.png",
    tile: "TRL_232.png"
  },
  {
    artist: "Jesper Ejsing",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 49984,
    flavor: "Ruthless at tribal roasts.",
    health: 3,
    id: "TRL_240",
    mechanics: ["BATTLECRY"],
    name: "Savage Striker",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_HERO_HAS_ATTACK: 0
    },
    rarity: "COMMON",
    set: 14,
    targetingArrowText: "Deal damage equal to your Attack.",
    text:
      "Battlecry: Deal damage to an enemy minion equal to your hero's Attack.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791251592733682.png",
    tile: "TRL_240.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buff your hero",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "146737f0-be4d-411c-a5b6-ec5034af965f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "hero.*attack"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Savage Striker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Christopher Hayes",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 49985,
    elite: true,
    flavor:
      "There’s a word for Zandalari druids who refuse to pledge loyalty to Gonk: “Delicious.”",
    health: 9,
    id: "TRL_241",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Gonk, the Raptor",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text: "After your hero attacks and kills a minion, it may attack again.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791251636950118.png",
    tile: "TRL_241.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buff your hero",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "0017806e-ecc6-446b-9a22-c3fabc9aa261",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "hero.*attack"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Gonk, the Raptor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Rudy Siswanto",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 0,
    dbfId: 49990,
    flavor:
      "Comes with an overwhelming urge to jump into the nearest open box.",
    id: "TRL_243",
    name: "Pounce",
    rarity: "COMMON",
    set: 14,
    text: "Give your hero +2 Attack this turn.",
    type: "SPELL",
    rating: 3,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791251673510576.png",
    tile: "TRL_243.png"
  },
  {
    artist: "Clint Langley",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 49994,
    flavor: "Somebody’s been eating their funnel cakes.",
    id: "TRL_244",
    name: "Predatory Instincts",
    rarity: "RARE",
    set: 14,
    text: "Draw a Beast from your deck. Double its Health.",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791251713977183.png",
    tile: "TRL_244.png",
    activeVersion: 0,
    versions: [
      {
        name: "Kinda big beasts",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "508edbeb-94cf-4e7a-a594-e8c13e908b0f",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              },
              {
                property: "health",
                operation: "GREATER_THAN",
                minValue: 4
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Mauricio Herrera",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 50002,
    flavor: "The first warning sign of an oncoming warlock temper tantrum.",
    id: "TRL_245",
    name: "Shriek",
    rarity: "RARE",
    set: 14,
    text: "Discard your lowest Cost card. Deal $2 damage to all minions.",
    type: "SPELL",
    rating: 3,
    extra: ["AOE"],
    imageUrl: "636791251755537451.png",
    tile: "TRL_245.png"
  },
  {
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 8,
    dbfId: 50004,
    flavor: "“YOU SIGNED WHAT?!”",
    id: "TRL_246",
    name: "Void Contract",
    rarity: "EPIC",
    set: 14,
    text: "Destroy half of each player's deck.",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791251791472897.png",
    tile: "TRL_246.png"
  },
  {
    artist: "Alex Garner",
    attack: 6,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 6,
    dbfId: 50006,
    flavor: "Reduce, reuse, resoul.",
    health: 6,
    id: "TRL_247",
    mechanics: ["BATTLECRY"],
    name: "Soulwarden",
    rarity: "EPIC",
    set: 14,
    text: "Battlecry: Add 3 random cards you discarded this game to your hand.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791251831314534.png",
    tile: "TRL_247.png",
    activeVersion: 0,
    versions: [
      {
        name: "Discard",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "45b3567b-60e0-4da0-83e3-e7bdf5e8e064",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Skan Srisuwan",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 50012,
    flavor: "There’s no “Aiiiieeee” in “Team.”",
    id: "TRL_249",
    name: "Grim Rally",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 14,
    text: "Destroy a friendly minion. Give your minions +1/+1.",
    type: "SPELL",
    rating: 1,
    extra: ["BUFF"],
    imageUrl: "636791251867562661.png",
    tile: "TRL_249.png",
    activeVersion: 0,
    versions: [
      {
        name: "Fast stuff",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "2babab86-6433-48f7-83d1-40468ab71a09",
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
    artist: "Slawomir Maniak",
    attack: 0,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 50025,
    flavor:
      "Nah nah nah nah, nah nah nah nah, nah nah nah nah, nah nah nah nah",
    health: 3,
    id: "TRL_251",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Bat",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. After a friendly minion dies, give a minion in your hand +1/+1.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791251908185605.png",
    tile: "TRL_251.png",
    activeVersion: 0,
    versions: [
      {
        name: "Fast stuff",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "4051ea50-7580-4e42-abcb-0b8c79ec7936",
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
    artist: "James Ryman",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 4,
    dbfId: 50032,
    elite: true,
    flavor: "If you love Jeklik, set her free. YOU CAN'T GET RID OF HER.",
    health: 4,
    id: "TRL_252",
    mechanics: ["LIFESTEAL", "TAUNT", "InvisibleDeathrattle"],
    name: "High Priestess Jeklik",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Taunt, Lifesteal When you discard this, add 2 copies of it to your hand.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791251953183050.png",
    tile: "TRL_252.png",
    activeVersion: 0,
    versions: [
      {
        name: "Discard",
        priorities: [
          {
            minCards: 5,
            maxCards: 6,
            id: "71d4ff3a-ae32-455b-8cd6-52cc9b517c44",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "discard"
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
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 8,
    dbfId: 50034,
    elite: true,
    flavor: "REPEL’S EFFECT WORE OFF.",
    health: 1,
    id: "TRL_253",
    mechanics: ["BATTLECRY"],
    name: "Hir'eek, the Bat",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Fill your board with copies of this minion.",
    type: "MINION",
    rating: 1,
    extra: ["MIN_GEN"],
    imageUrl: "636791251990837177.png",
    tile: "TRL_253.png"
  },
  {
    artist: "Mauricio Herrera",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 50042,
    flavor: "Ah, yes. Mark. The mightiest Loa.",
    id: "TRL_254",
    mechanics: ["CHOOSE_ONE"],
    name: "Mark of the Loa",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    set: 14,
    text:
      "Choose One - Give a minion +2/+4 and Taunt; or Summon two 3/2 Raptors.",
    type: "SPELL",
    rating: 2,
    extra: ["BUFF", "MIN_GEN"],
    imageUrl: "636791252027397465.png",
    tile: "TRL_254.png"
  },
  {
    artist: "Andrew Hou",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 50044,
    flavor:
      "The Gurubashi Arena has an extremely permissive policy on pets in the workplace.",
    id: "TRL_255",
    name: "Stampeding Roar",
    playRequirements: {
      REQ_FRIENDLY_MINION_OF_RACE_IN_HAND: 20,
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "EPIC",
    set: 14,
    text: "Summon a random Beast from your hand and give it Rush.",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791252105362279.png",
    tile: "TRL_255.png",
    activeVersion: 0,
    versions: [
      {
        name: "High cost beasts",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "5a2aa781-e161-4308-b031-b0b6fc9b6c52",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              },
              {
                property: "cost",
                operation: "GREATER_THAN",
                minValue: 4
              },
              {
                property: "text",
                operation: "NOT_MATCH",
                minValue: "odd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Luke Mancini",
    attack: 5,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 7,
    dbfId: 50070,
    flavor:
      "Main supplier of Blood Troll Syrup to the Intercontinental Hut of Funnel Cakes.",
    health: 8,
    id: "TRL_257",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Blood Troll Sapper",
    rarity: "COMMON",
    set: 14,
    text: "After a friendly minion dies, deal 2 damage to the enemy hero.",
    type: "MINION",
    rating: 2,
    extra: ["DAMAGE"],
    imageUrl: "636791252141454038.png",
    tile: "TRL_257.png",
    activeVersion: 0,
    versions: [
      {
        name: "Zoo",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "e9eeb77f-f49e-49f4-9a86-c8faaa54438e",
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
    artist: "Vladimir Kafanov",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 50071,
    flavor: "Black Friday gets worse every year.",
    id: "TRL_258",
    name: "Mass Hysteria",
    playRequirements: { REQ_ENEMY_TARGET: 0, REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 14,
    text: "Force each minion to attack another random minion.",
    type: "SPELL",
    rating: 4,
    extra: ["AOE"],
    imageUrl: "636791252178795938.png",
    tile: "TRL_258.png"
  },
  {
    artist: "Alex Horley Ormandelli",
    attack: 7,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 8,
    dbfId: 50082,
    elite: true,
    flavor:
      "Everyone wants to be a princess, but nobody ever considers the size of the hat.",
    health: 5,
    id: "TRL_259",
    mechanics: ["BATTLECRY"],
    name: "Princess Talanji",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: Summon all minions from your hand that didn't start in your deck.",
    type: "MINION",
    rating: 1,
    extra: ["VALUE"],
    imageUrl: "636791252217543775.png",
    tile: "TRL_259.png",
    activeVersion: 0,
    versions: [
      {
        name: "Shuffle stuff",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "5e0e41b2-0f75-4936-8244-9920d6de6cd2",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: ".*shuffle.*your deck"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "James Ryman",
    attack: 7,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 50087,
    elite: true,
    flavor: "Everyone's dying to meet him.",
    health: 7,
    id: "TRL_260",
    mechanics: ["BATTLECRY"],
    name: "Bwonsamdi, the Dead",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: Draw 1-Cost minions from your deck until your hand is full.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE", "CARD_DRAW"],
    imageUrl: "636791252264259966.png",
    tile: "TRL_260.png",
    activeVersion: 0,
    versions: [
      {
        name: "1 cost minions",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "e195ec18-09ee-49ef-8ec6-2b5edd51c461",
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
    artist: "Arthur Gimaldinov",
    attack: 7,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 25,
    dbfId: 49981,
    elite: true,
    flavor:
      "On bended knee Thekal placed his weapon upon Shirvallah’s altar, whereupon she slowly knocked it off with her paw.",
    health: 5,
    id: "TRL_300",
    mechanics: ["DIVINE_SHIELD", "LIFESTEAL", "RUSH"],
    name: "Shirvallah, the Tiger",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Divine Shield, Rush, Lifesteal  Costs (1) less for each Mana you've spent on spells.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791252301289197.png",
    tile: "TRL_300.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells and Holy Wrath",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "81d084ff-8fdc-4fb8-ad24-ca01452bfbec",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "932845f9-fe41-4e76-a407-60361b68ef50",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Holy Wrath"
              }
            ]
          }
        ]
      },
      {
        name: "Spells",
        priorities: [
          {
            minCards: 6,
            maxCards: 10,
            id: "4431c047-ebc9-4979-ad57-ed2b86ad7ef5",
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
    artist: "Arthur Bozonnet",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 49999,
    flavor: "Highly effective against 3 year olds.",
    id: "TRL_302",
    name: "Time Out!",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    referencedTags: ["IMMUNE"],
    set: 14,
    text: "Your hero is Immune until your next turn.",
    type: "SPELL",
    rating: 3,
    extra: ["STALL"],
    imageUrl: "636791252339880767.png",
    tile: "TRL_302.png"
  },
  {
    artist: "M. Alvares & M. Azevedo",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 50014,
    durability: 3,
    flavor: "Only two things in life are certain: death and axes.",
    id: "TRL_304",
    name: "Farraki Battleaxe",
    rarity: "RARE",
    set: 14,
    text: "Overkill: Give a minion in your hand +2/+2.",
    type: "WEAPON",
    rating: 2,
    extra: ["SMALL_REMOVAL", "VALUE"],
    imageUrl: "636791252376910196.png",
    tile: "TRL_304.png"
  },
  {
    artist: "James Ryman",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 7,
    dbfId: 50019,
    flavor: "… Arrives? Approaches? TELL US ALREADY!",
    id: "TRL_305",
    name: "A New Challenger...",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "EPIC",
    referencedTags: ["DISCOVER", "DIVINE_SHIELD", "TAUNT"],
    set: 14,
    text: "Discover a 6-Cost minion. Summon it with Taunt and Divine Shield.",
    type: "SPELL",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791252414720581.png",
    tile: "TRL_305.png"
  },
  {
    artist: "Maria Trepalina",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 50022,
    flavor: "She protec. She attac. But most importantly, she come bac.",
    health: 3,
    id: "TRL_306",
    mechanics: ["DEATHRATTLE"],
    name: "Immortal Prelate",
    rarity: "EPIC",
    set: 14,
    text:
      "Deathrattle: Shuffle this into your deck. It keeps any enchantments.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791252455187134.png",
    tile: "TRL_306.png",
    activeVersion: 0,
    versions: [
      {
        name: "With Da Undatantekoumbo",
        priorities: [
          {
            minCards: 4,
            maxCards: 8,
            id: "064d16b4-0589-499d-8b0c-147543d5a023",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "playRequirements.REQ_TARGET_TO_PLAY",
                operation: "EQUALS",
                minValue: 0
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "6dbd9f88-7048-47fa-ba7c-26f5013be3d3",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Da Undatakah"
              }
            ]
          }
        ]
      },
      {
        name: "Buffs",
        priorities: [
          {
            minCards: 4,
            maxCards: 8,
            id: "b60cf379-d245-4c29-8790-4ed2c446c38b",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "BUFF"
              },
              {
                property: "playRequirements.REQ_TARGET_TO_PLAY",
                operation: "EQUALS",
                minValue: 0
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Zoltan Boros",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 50028,
    flavor: "Hey! No cameras allowed!",
    id: "TRL_307",
    name: "Flash of Light",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Restore #4 Health. Draw a card.",
    type: "SPELL",
    rating: 4,
    extra: ["CARD_DRAW", "HEAL"],
    imageUrl: "636791252493622633.png",
    tile: "TRL_307.png"
  },
  {
    artist: "James Ryman",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 50126,
    elite: true,
    flavor: "'…and then I beat him with 1 Health!'",
    health: 4,
    id: "TRL_308",
    mechanics: ["BATTLECRY"],
    name: "High Priest Thekal",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Convert all but 1 of your Hero's Health into Armor.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791252537682757.png",
    tile: "TRL_308.png",
    activeVersion: 0,
    versions: [
      {
        name: "Heal",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "515e4bfa-c394-4d97-a362-fecc5136d832",
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
    artist: "Arthur Gimaldinov",
    attack: 0,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 50031,
    flavor: "Less of a cantrip and more of a cat-nip.",
    health: 3,
    id: "TRL_309",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Tiger",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. After you cast a spell, summon a Tiger with stats equal to its Cost.",
    type: "MINION",
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636791252595804600.png",
    tile: "TRL_309.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "bd9bf4f1-37d2-4979-bd93-3ea356028a55",
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
    artist: "Konstantin Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 0,
    dbfId: 50120,
    flavor: "It's just lighter fluid.",
    id: "TRL_310",
    name: "Elemental Evocation",
    rarity: "COMMON",
    set: 14,
    text: "The next Elemental you play this turn costs (2) less.",
    type: "SPELL",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791252631583788.png",
    tile: "TRL_310.png",
    activeVersion: 0,
    versions: [
      {
        name: "Elementals",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "87493419-b50f-474f-b3fd-5a810965b4a1",
            filters: [
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
    artist: "Ware Lee",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 6,
    dbfId: 50121,
    flavor: "Arcane energy… finds a way.",
    health: 3,
    id: "TRL_311",
    mechanics: ["BATTLECRY"],
    name: "Arcanosaur",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 14,
    text:
      "Battlecry: If you played an Elemental last turn, deal 3 damage to all other minions.",
    type: "MINION",
    rating: 2,
    extra: ["AOE"],
    imageUrl: "636791252671737860.png",
    tile: "TRL_311.png",
    activeVersion: 0,
    versions: [
      {
        name: "Elementals",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "4426523b-aad9-4b74-a6ed-b6a67c0d2b6c",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "ELEMENTAL"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Arcanosaur"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Arthur Bozonnet",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50083,
    flavor: "But don’t ask her to use it in a sentence.",
    health: 3,
    id: "TRL_312",
    name: "Spellzerker",
    rarity: "COMMON",
    referencedTags: ["SPELLPOWER"],
    set: 14,
    text: "Has Spell Damage +2 while damaged.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791252709548442.png",
    tile: "TRL_312.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some low-cost/damage spells ",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3b0bebaf-ef57-448f-a49f-05e4e546c051",
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
    artist: "Zoltan Boros",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 50122,
    flavor: "The hoof. The hoof. The hoof is on fire.",
    id: "TRL_313",
    name: "Scorch",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 14,
    text:
      "Deal $4 damage to a minion. Costs (1) if you played an Elemental last turn.",
    type: "SPELL",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791252746733933.png",
    tile: "TRL_313.png",
    activeVersion: 0,
    versions: [
      {
        name: "Elementals",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a175f98b-41e5-4185-83af-5c01cc7591dc",
            filters: [
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
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 50084,
    flavor: "She prefers “Flammably Inclined.”",
    health: 4,
    id: "TRL_315",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Pyromaniac",
    rarity: "RARE",
    set: 14,
    text: "Whenever your Hero Power kills a minion, draw a card.",
    type: "MINION",
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636791252790012672.png",
    tile: "TRL_315.png"
  },
  {
    artist: "Jakub Kasber",
    attack: 4,
    cardClass: ["MAGE"],
    collectible: true,
    collectionText:
      "Battlecry: If your Hero Power dealt 8 damage this game, summon Ragnaros the Firelord.",
    cost: 7,
    dbfId: 50088,
    elite: true,
    flavor: "You mess with the Bird, you get the Firelord.",
    health: 4,
    id: "TRL_316",
    mechanics: ["BATTLECRY"],
    name: "Jan'alai, the Dragonhawk",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: If your Hero Power dealt 8 damage this game, summon Ragnaros the Firelord.@ <i>({0} left!)</i>@ <i>(Ready!)</i>",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791252829541823.png",
    tile: "TRL_316.png",
    activeVersion: 0,
    versions: [
      {
        name: "Odd stuff",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "22c402f3-08eb-4867-89f5-4c66feeb8fb5",
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
    artist: "J. Axer",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 5,
    dbfId: 50086,
    flavor: "If you’re burning and you know it, wave your hands!",
    id: "TRL_317",
    name: "Blast Wave",
    rarity: "EPIC",
    set: 14,
    text:
      "Deal $2 damage to all minions. Overkill: Add a random Mage spell to your hand.",
    type: "SPELL",
    rating: 2,
    extra: ["AOE"],
    imageUrl: "636791252867977469.png",
    tile: "TRL_317.png"
  },
  {
    artist: "Mike Sass",
    attack: 5,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 8,
    dbfId: 50095,
    elite: true,
    flavor: "Extremely awkward cousin of Hex Lord Malaclass.",
    health: 5,
    id: "TRL_318",
    mechanics: ["BATTLECRY"],
    name: "Hex Lord Malacrass",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: Add a copy of your opening hand to your hand <i>(except this card)</i>.",
    type: "MINION",
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636791252904694077.png",
    tile: "TRL_318.png"
  },
  {
    artist: "Jakub Kasber",
    attack: 0,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 50093,
    flavor: "Dragonhawks aren’t known for their accuracy.",
    health: 3,
    id: "TRL_319",
    mechanics: ["AURA", "STEALTH"],
    name: "Spirit of the Dragonhawk",
    rarity: "RARE",
    set: 14,
    text: "Stealth for 1 turn. Your Hero Power also targets  adjacent minions.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791252942192098.png",
    tile: "TRL_319.png"
  },
  {
    artist: "Slawomir Maniak",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 50040,
    flavor: "No thanks, I already devast-ate.",
    id: "TRL_321",
    name: "Devastate",
    playRequirements: {
      REQ_DAMAGED_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "COMMON",
    set: 14,
    text: "Deal $4 damage to a damaged minion.",
    type: "SPELL",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791252978596502.png",
    tile: "TRL_321.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some deal-1-damage cards",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "c6a25450-f45f-4dde-8cf0-842bcf0c1b2b",
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
    artist: "Alex Horley Orlandelli",
    attack: 5,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 50049,
    flavor: "The third little dragon made his armor out of adamantite.",
    health: 5,
    id: "TRL_323",
    mechanics: ["BATTLECRY"],
    name: "Emberscale Drake",
    race: "DRAGON",
    rarity: "RARE",
    set: 14,
    text: "Battlecry: If you're holding a Dragon, gain 5 Armor.",
    type: "MINION",
    rating: 4,
    extra: ["GENERAL"],
    imageUrl: "636791253020000271.png",
    tile: "TRL_323.png",
    activeVersion: 0,
    versions: [
      {
        name: "Dragons",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "2f80e41e-c96e-4686-8713-823b9aedb5bc",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Emberscale Drake"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 50054,
    flavor:
      "This metal is so heavy it will satisfy your iron requirements for the next year.",
    id: "TRL_324",
    name: "Heavy Metal!",
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    set: 14,
    text:
      "Summon a random minion with Cost equal to your Armor <i>(up to 10).</i>",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791253056717258.png",
    tile: "TRL_324.png",
    activeVersion: 0,
    versions: [
      {
        name: "Gain armor",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "35ceb1b5-d435-491d-890c-68efe296c160",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "gain.*armor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jason Kang",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 6,
    dbfId: 50056,
    durability: 4,
    flavor:
      "“Griftah here with de Sul’chop. One chop, you get four damage. Two chops, eight damage - you gonna change de way you fight.'",
    id: "TRL_325",
    name: "Sul'thraze",
    rarity: "EPIC",
    set: 14,
    text: "Overkill: You may attack again.",
    type: "WEAPON",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791253111557873.png",
    tile: "TRL_325.png"
  },
  {
    artist: "Dave Allsop",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 50059,
    flavor: "Here comes “The Smolder.”",
    health: 2,
    id: "TRL_326",
    mechanics: ["BATTLECRY"],
    name: "Smolderthorn Lancer",
    playRequirements: {
      REQ_DAMAGED_TARGET: 0,
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0
    },
    rarity: "EPIC",
    set: 14,
    targetingArrowText: "Destroy a damaged minion.",
    text:
      "Battlecry: If you're holding a Dragon, destroy a damaged enemy minion.",
    type: "MINION",
    rating: 4,
    extra: ["HARD_REMOVAL"],
    imageUrl: "636791253157336821.png",
    tile: "TRL_326.png",
    activeVersion: 0,
    versions: [
      {
        name: "Dragons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "ee09fe3d-e0fa-4dca-ac80-799703e08136",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "d40f8433-8407-4451-8639-1553b08249e5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Smolderthorn Lancer"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jim Nelson",
    attack: 0,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 52242,
    flavor: "Where did they get this preposterous hypothesis?",
    health: 3,
    id: "TRL_327",
    mechanics: ["AURA", "STEALTH"],
    name: "Spirit of the Rhino",
    rarity: "RARE",
    referencedTags: ["IMMUNE", "RUSH"],
    set: 14,
    text:
      "Stealth for 1 turn. Your Rush minions are Immune the turn they're summoned.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791253201084282.png",
    tile: "TRL_327.png",
    activeVersion: 0,
    versions: [
      {
        name: "Rush!",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "84438406-a707-483a-bf31-eab690c0192d",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "rush"
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
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 50066,
    elite: true,
    flavor: "War Master sounds cooler than Dragon Sitter.",
    health: 3,
    id: "TRL_328",
    mechanics: ["BATTLECRY"],
    name: "War Master Voone",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Copy all Dragons in your hand.",
    type: "MINION",
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636791253244988215.png",
    tile: "TRL_328.png",
    activeVersion: 0,
    versions: [
      {
        name: "Dragons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "5a40463d-a514-4d6b-b677-2424b69bbf5c",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "62dae021-6990-47fa-bdd7-ce4f09a83140",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
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
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 50074,
    elite: true,
    flavor:
      "Most trolls only get to “AAAAHHH!” and don’t make it to the “kali” part.",
    health: 5,
    id: "TRL_329",
    mechanics: ["RUSH"],
    name: "Akali, the Rhino",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text: "Rush Overkill: Draw a Rush minion from your deck. Give it +5/+5.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791253284986101.png",
    tile: "TRL_329.png"
  },
  {
    artist: "Rudy Siswanto",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 50212,
    flavor: "'Hello? Yes, this is Huffer.'",
    id: "TRL_339",
    name: "Master's Call",
    rarity: "EPIC",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "Discover a minion in your deck. If all 3 are Beasts, draw them all.",
    type: "SPELL",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791253321546602.png",
    tile: "TRL_339.png",
    activeVersion: 0,
    versions: [
      {
        name: "Lots of beasts",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "af478412-8bd1-4807-a21e-381fea3360a5",
            filters: [
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
    artist: "J. Axer",
    attack: 4,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 50356,
    flavor: "Honestly, his delivery is a little wooden.",
    health: 4,
    id: "TRL_341",
    mechanics: ["BATTLECRY"],
    name: "Treespeaker",
    rarity: "EPIC",
    set: 14,
    text: "Battlecry: Transform your Treants into 5/5 Ancients.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791253359825740.png",
    tile: "TRL_341.png",
    activeVersion: 0,
    versions: [
      {
        name: "Treants",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "1a1d1f0e-bb4e-435d-8fba-c50b93042a7c",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "treant"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "073df102-762a-4e64-8713-ce25939c9727",
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
    artist: "Zoltan Boros",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 43310,
    elite: true,
    flavor:
      "“Ravasaur!” “Pretty scary” “…Blammodax!” “Is that a thing?” “SMAXODON!” “….now you’re just making those up.”",
    health: 2,
    id: "TRL_343",
    mechanics: ["CHOOSE_ONE"],
    name: "Wardruid Loti",
    rarity: "LEGENDARY",
    set: 14,
    text: "Choose One - Transform into one of Loti's four dinosaur forms.",
    type: "MINION",
    rating: 3,
    extra: ["SMALL_REMOVAL", "FAST"],
    imageUrl: "636786831452897238.png",
    tile: "TRL_343.png"
  },
  {
    artist: "Konstantin Turovec",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 50369,
    elite: true,
    flavor:
      "Krag'wa has a ritual to honor his friends and a ritual to devour his enemies. No one can tell them apart.",
    health: 6,
    id: "TRL_345",
    mechanics: ["BATTLECRY"],
    name: "Krag'wa, the Frog",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Return all spells you played last turn to your hand.",
    type: "MINION",
    rating: 4,
    extra: ["VALUE"],
    imageUrl: "636791254151658014.png",
    tile: "TRL_345.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f90e01a1-3572-438a-958c-12a5c7fbe108",
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
    artist: "Anton Zemskov",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 50466,
    flavor: "The card is common, but the steak is rare.",
    id: "TRL_347",
    name: "Baited Arrow",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Deal $3 damage. Overkill: Summon a 5/5 Devilsaur.",
    type: "SPELL",
    rating: 2,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791254187281203.png",
    tile: "TRL_347.png"
  },
  {
    artist: "Vladimir Kafanov",
    attack: 1,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 49824,
    flavor:
      "The terrible thing about lynxes is lynxes are terrible things. Their teeth are made out of biting, their paws are made out of springs!",
    health: 1,
    id: "TRL_348",
    mechanics: ["BATTLECRY", "RUSH"],
    name: "Springpaw",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Rush Battlecry: Add a 1/1 Lynx with Rush to your hand.",
    type: "MINION",
    rating: 3,
    extra: ["MIN_GEN"],
    imageUrl: "636791254225091432.png",
    tile: "TRL_348.png"
  },
  {
    artist: "Gonzalo Ordonez",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 50471,
    flavor:
      "“Shoot them in the face” is more of a <i>tactic</i> than a <i>strategy</i>.",
    health: 4,
    id: "TRL_349",
    mechanics: ["BATTLECRY"],
    name: "Bloodscalp Strategist",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "Battlecry: If you have a weapon equipped, Discover a spell.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791254300399977.png",
    tile: "TRL_349.png",
    activeVersion: 0,
    versions: [
      {
        name: "A few weapons",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "04e2ba72-4ee5-470c-8e25-58fc4f3c8675",
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
    artist: "Cicily He",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 50547,
    flavor: "'Oh, THAT'S how she brings the warts!'",
    id: "TRL_351",
    mechanics: ["OVERLOAD"],
    name: "Rain of Toads",
    overload: 3,
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 14,
    text: "Summon three 2/4 Toads with Taunt. Overload: (3)",
    type: "SPELL",
    rating: 3,
    extra: ["MIN_GEN"],
    imageUrl: "636791254333835731.png",
    tile: "TRL_351.png"
  },
  {
    artist: "Jakub Kasber",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 50550,
    durability: 3,
    flavor: "'I double frog dare you!'",
    id: "TRL_352",
    mechanics: ["AURA"],
    name: "Likkim",
    rarity: "RARE",
    referencedTags: ["OVERLOAD"],
    set: 14,
    text: "Has +2 Attack while you have Overloaded Mana Crystals.",
    type: "WEAPON",
    rating: 4,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791254407113073.png",
    tile: "TRL_352.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some overload",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "553e5f81-44f5-48fe-a9e7-688d0a170e7b",
            filters: [
              {
                property: "mechanics",
                operation: "INCLUDES",
                minValue: "OVERLOAD"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Akkapoj T.",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 50595,
    durability: 4,
    flavor:
      "'This merit badge is for cruelty. This one's for whipping. And this one is for embroidery...'",
    id: "TRL_360",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Overlord's Whip",
    rarity: "COMMON",
    set: 14,
    text: "After you play a minion, deal 1 damage to it.",
    type: "WEAPON",
    rating: 3,
    extra: ["SMALL_REMOVAL"],
    imageUrl: "636791254441329874.png",
    tile: "TRL_360.png",
    activeVersion: 0,
    versions: [
      {
        name: "Minions that love whipping",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1d5f1f25-94be-4fa3-899d-72be6afc0177",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "takes.*damage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Slawomir Maniak",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 50602,
    flavor: "Not to be confused with Dragon Yodel.",
    id: "TRL_362",
    name: "Dragon Roar",
    rarity: "COMMON",
    set: 14,
    text: "Add 2 random Dragons to your hand.",
    type: "SPELL",
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636791254476484269.png",
    tile: "TRL_362.png"
  },
  {
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 50796,
    flavor: "Don't even think of asking for time off.",
    health: 3,
    id: "TRL_363",
    mechanics: ["DEATHRATTLE"],
    name: "Saronite Taskmaster",
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 14,
    text: "Deathrattle: Summon a 0/3 Free Agent with Taunt for your opponent.",
    type: "MINION",
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636791254512419783.png",
    tile: "TRL_363.png"
  },
  {
    artist: "Jesper Ejsing",
    attack: 1,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 50381,
    flavor: "A few hours later he DESTROYED the arena bathrooms.",
    health: 1,
    id: "TRL_390",
    mechanics: ["BATTLECRY"],
    name: "Daring Fire-Eater",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Your next Hero Power this turn deals 2 more damage.",
    type: "MINION",
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636791254591009212.png",
    tile: "TRL_390.png"
  },
  {
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 50230,
    flavor: "Sometimes you get punched so hard <i>they</i> see double.",
    id: "TRL_400",
    mechanics: ["SECRET"],
    name: "Splitting Image",
    rarity: "EPIC",
    set: 14,
    text: "Secret: When one of your minions is attacked, summon a copy of it.",
    type: "SPELL",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791254629600866.png",
    tile: "TRL_400.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some taunts",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "da748c2c-f146-4626-b85e-458feb90bced",
            filters: [
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
    artist: "E. Kenji & M. Azevedo",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 50491,
    flavor: "All it takes is a tummy rub.",
    health: 4,
    id: "TRL_405",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Untamed Beastmaster",
    rarity: "EPIC",
    set: 14,
    text: "Whenever you draw a Beast, give it +2/+2.",
    type: "MINION",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636791254669442693.png",
    tile: "TRL_405.png",
    activeVersion: 0,
    versions: [
      {
        name: "Beasts",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "62efb547-54ce-43c9-9021-441e2fbc5fa4",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              }
            ]
          },
          {
            minCards: 4,
            maxCards: 4,
            id: "b0eec429-c3cf-4741-9f66-c9f7dc08ad41",
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
    artist: "Sean McNally",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50493,
    flavor: "It's the sleeper of the set.",
    health: 4,
    id: "TRL_406",
    mechanics: ["ENRAGED"],
    name: "Dozing Marksman",
    rarity: "COMMON",
    set: 14,
    text: "Has +4 Attack while damaged.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791254705846883.png",
    tile: "TRL_406.png"
  },
  {
    artist: "Ekaterina Shapovalova",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50497,
    flavor: "100% organic troll sweat.",
    health: 1,
    id: "TRL_407",
    mechanics: ["BATTLECRY"],
    name: "Waterboy",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "RARE",
    set: 14,
    text: "Battlecry: Your next Hero Power this turn costs (0).",
    type: "MINION",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636791254755844240.png",
    tile: "TRL_407.png"
  },
  {
    artist: "Dave Allsop",
    attack: 7,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 12,
    dbfId: 50539,
    flavor:
      "Trolls can regenerate lost limbs, but this is what they do with the leftovers.",
    health: 8,
    id: "TRL_408",
    mechanics: ["TAUNT"],
    name: "Grave Horror",
    rarity: "RARE",
    set: 14,
    text: "Taunt Costs (1) less for each spell you've cast this game.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791254792404683.png",
    tile: "TRL_408.png",
    activeVersion: 0,
    versions: [
      {
        name: "Spells",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "c3f171d4-6145-4061-bd12-9e23922a14e2",
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
    artist: "Anton Zemskov",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 50775,
    elite: true,
    flavor: "“… We’re gonna need a bigger board.”",
    health: 2,
    id: "TRL_409",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    name: "Gral, the Shark",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text:
      "Battlecry: Eat a minion in your deck and gain its stats. Deathrattle: Add it to your hand.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791254836777298.png",
    tile: "TRL_409.png"
  },
  {
    artist: "Maria Trepalina",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 50282,
    flavor: "Never give up, always surrender!",
    id: "TRL_500",
    name: "Surrender to Madness",
    rarity: "EPIC",
    set: 14,
    text:
      "Destroy 3 of your Mana Crystals. Give all minions in your deck +2/+2.",
    type: "SPELL",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791254877243963.png",
    tile: "TRL_500.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some card draw",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "edb42a70-b9e0-4e4e-92eb-722b5db7aae6",
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
    artist: "Lemon Sky",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 50283,
    flavor: "“Okay kids did everyone remember to heal before we left?”",
    health: 2,
    id: "TRL_501",
    mechanics: ["BATTLECRY"],
    name: "Auchenai Phantasm",
    rarity: "EPIC",
    set: 14,
    text: "Battlecry: This turn, your healing effects deal damage instead.",
    type: "MINION",
    rating: 3,
    extra: ["FAST", "TEMPO"],
    imageUrl: "636791254916616900.png",
    tile: "TRL_501.png"
  },
  {
    artist: "James Ryman",
    attack: 0,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 1,
    dbfId: 50352,
    flavor: "Just because you’re dead doesn’t mean you’re off the team.",
    health: 3,
    id: "TRL_502",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Dead",
    rarity: "RARE",
    set: 14,
    text:
      "Stealth for 1 turn. After a friendly minion dies, shuffle a 1-Cost copy of it into your deck.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791254954739694.png",
    tile: "TRL_502.png",
    activeVersion: 0,
    versions: [
      {
        name: "With Bwonsamdi",
        priorities: [
          {
            minCards: 1,
            maxCards: 1,
            id: "f730e3a3-0c10-4099-af95-4aea796b6a1a",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Bwonsamdi, the Dead"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Jim Nelson",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50372,
    flavor:
      "They say you can’t make an omelet without AHHH THEY’RE EATING MY FACE!",
    health: 2,
    id: "TRL_503",
    mechanics: ["DEATHRATTLE"],
    name: "Scarab Egg",
    rarity: "COMMON",
    set: 14,
    text: "Deathrattle: Summon three 1/1 Scarabs.",
    type: "MINION",
    rating: 2,
    extra: ["MIN_GEN"],
    imageUrl: "636791254991925119.png",
    tile: "TRL_503.png",
    activeVersion: 0,
    versions: [
      {
        name: "Some buffs",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "3ab5be47-2bc6-4efb-9f95-9d81f978b025",
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
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50374,
    flavor: "Also makes a great librarian. She's really good at fixing books!",
    health: 3,
    id: "TRL_504",
    mechanics: ["BATTLECRY"],
    name: "Booty Bay Bookie",
    rarity: "RARE",
    set: 14,
    text: "Battlecry: Give your opponent a Coin.",
    type: "MINION",
    rating: 1,
    extra: ["FAST", "TEMPO"],
    imageUrl: "636791255033016639.png",
    tile: "TRL_504.png"
  },
  {
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 50377,
    flavor: "It can’t be all that helpful. Not wif dose widdle wings!",
    health: 1,
    id: "TRL_505",
    mechanics: ["DEATHRATTLE"],
    name: "Helpless Hatchling",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Deathrattle: Reduce the Cost of a Beast in your hand by (1).",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255073952119.png",
    tile: "TRL_505.png",
    activeVersion: 0,
    versions: [
      {
        name: "Beasts",
        priorities: [
          {
            minCards: 8,
            maxCards: 8,
            id: "fc8176c1-27eb-4023-bbfe-267d4f8303b1",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Helpless Hatchling"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Ivan Fomin",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 50380,
    flavor: "“Ya hold it by da feet, mon. Den ya THROW.”",
    health: 1,
    id: "TRL_506",
    name: "Gurubashi Chicken",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Overkill: Gain +5 Attack.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255116762199.png",
    tile: "TRL_506.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buffs",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "168b4e84-07bd-49ce-ab1f-ce654fd16c71",
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
                minValue: "demon|beast|damaged"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50383,
    flavor: "His taste in soup is criminal.",
    health: 2,
    id: "TRL_507",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Sharkfin Fan",
    race: "PIRATE",
    rarity: "COMMON",
    set: 14,
    text: "After your hero attacks, summon a 1/1 Pirate.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791255154885177.png",
    tile: "TRL_507.png"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50385,
    flavor: "Regenerates any injury except heartbreak.",
    health: 5,
    id: "TRL_508",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Regeneratin' Thug",
    rarity: "COMMON",
    set: 14,
    text: "At the start of your turn, restore #2 Health to this minion.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255232537114.png",
    tile: "TRL_508.png"
  },
  {
    artist: "Jim Nelson",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 50386,
    flavor: "You could say he has a certain appeal.",
    health: 2,
    id: "TRL_509",
    mechanics: ["BATTLECRY"],
    name: "Banana Buffoon",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Add 2 Bananas to your hand.",
    type: "MINION",
    rating: 1,
    extra: ["BUFF"],
    imageUrl: "636791255275034865.png",
    tile: "TRL_509.png"
  },
  {
    artist: "Ekaterina Shapovalova",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50391,
    flavor: "Famed hunter of the deadly Achilliosaur.",
    health: 1,
    id: "TRL_512",
    mechanics: ["BATTLECRY", "LIFESTEAL"],
    name: "Cheaty Anklebiter",
    playRequirements: { REQ_TARGET_IF_AVAILABLE: 0 },
    rarity: "COMMON",
    set: 14,
    targetingArrowText: "Deal 1 damage.",
    text: "Lifesteal Battlecry: Deal 1 damage.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791255310970063.png",
    tile: "TRL_512.png"
  },
  {
    artist: "Dan Scott",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 50392,
    flavor: "Can’t break the rules if you can’t read ‘em.",
    health: 14,
    id: "TRL_513",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    name: "Mosh'ogg Enforcer",
    rarity: "COMMON",
    set: 14,
    text: "Taunt Divine Shield",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255348785584.png",
    tile: "TRL_513.png"
  },
  {
    artist: "Brian Despain",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50393,
    flavor: "Maybe don't put this one in your garden.",
    health: 4,
    id: "TRL_514",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Belligerent Gnome",
    rarity: "RARE",
    set: 14,
    text:
      "Taunt Battlecry: If your opponent has 2 or more minions, gain +1 Attack.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791255386596698.png",
    tile: "TRL_514.png"
  },
  {
    artist: "Paul Mafayon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 50395,
    flavor: "'Shirt? Shoes!? No service!'",
    health: 7,
    id: "TRL_515",
    mechanics: ["TAUNT"],
    name: "Rabble Bouncer",
    rarity: "COMMON",
    set: 14,
    text: "Taunt Costs (1) less for each enemy minion.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255425188335.png",
    tile: "TRL_515.png"
  },
  {
    artist: "Izzy Hoover",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 50396,
    flavor:
      "For a limited time, loa blessings are on a pray-one-get-two deal (on selected sacrifices only).",
    health: 2,
    id: "TRL_516",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Gurubashi Offering",
    rarity: "EPIC",
    set: 14,
    text: "At the start of your turn, destroy this and gain 8 Armor.",
    type: "MINION",
    rating: 2,
    extra: ["HEAL"],
    imageUrl: "636791255463936087.png",
    tile: "TRL_516.png"
  },
  {
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50397,
    flavor: "Her fantasy Rumble league gives double points for dismemberment.",
    health: 3,
    id: "TRL_517",
    mechanics: ["BATTLECRY"],
    name: "Arena Fanatic",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Give all minions in your hand +1/+1.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255503933982.png",
    tile: "TRL_517.png"
  },
  {
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50402,
    flavor: "He was destined for the soup. One way or another…",
    health: 2,
    id: "TRL_520",
    mechanics: ["DEATHRATTLE"],
    name: "Murloc Tastyfin",
    race: "MURLOC",
    rarity: "RARE",
    set: 14,
    text: "Deathrattle: Draw 2 Murlocs from your deck.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791255543463070.png",
    tile: "TRL_520.png",
    activeVersion: 0,
    versions: [
      {
        name: "Murlocs",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "d6bf940a-3203-4980-9ea3-f7649edbe7c1",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "murloc"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Murloc Tastyfin"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Hungry Crab"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "5c4112ed-50b6-4a70-b5d8-e44785fb51ee",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "MURLOC"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Murloc Tastyfin"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Eric Braddock",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 50403,
    flavor: "Everybody with a ticket get in here!",
    health: 3,
    id: "TRL_521",
    name: "Arena Patron",
    rarity: "RARE",
    set: 14,
    text: "Overkill: Summon another Arena Patron.",
    type: "MINION",
    rating: 1,
    extra: ["MIN_GEN"],
    imageUrl: "636791255594554109.png",
    tile: "TRL_521.png"
  },
  {
    artist: "J. Axer",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 1,
    dbfId: 50405,
    flavor:
      "“Does she cause them with magic, or just…like have a bucket she brings with her?”",
    health: 1,
    id: "TRL_522",
    mechanics: ["BATTLECRY"],
    name: "Wartbringer",
    playRequirements: {
      REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_SPELLS_PLAYED_THIS_TURN: 2
    },
    rarity: "COMMON",
    set: 14,
    targetingArrowText: "Deal 2 damage.",
    text: "Battlecry: If you played 2 spells this turn, deal 2 damage.",
    type: "MINION",
    rating: 3,
    extra: ["DAMAGE"],
    imageUrl: "636791255633145733.png",
    tile: "TRL_522.png"
  },
  {
    artist: "Eva Widermann",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50408,
    flavor: "If your tree is on fire - stop, drop, and troll.",
    health: 2,
    id: "TRL_523",
    mechanics: ["BATTLECRY"],
    name: "Firetree Witchdoctor",
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 14,
    text: "Battlecry: If you're holding a Dragon, Discover a spell.",
    type: "MINION",
    rating: 3,
    extra: ["VALUE"],
    imageUrl: "636791255674237262.png",
    tile: "TRL_523.png",
    activeVersion: 0,
    versions: [
      {
        name: "Dragons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "9e9b1e70-0f0a-47fd-a129-7525d69f201a",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "87a6ae8d-11a3-47cc-8150-0c82911629f6",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Firetree Witchdoctor"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "David Devries",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 50410,
    flavor: "Can also break up fights, relationships, and unions.",
    health: 1,
    id: "TRL_524",
    mechanics: ["BATTLECRY"],
    name: "Shieldbreaker",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_MUST_TARGET_TAUNTER: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    referencedTags: ["SILENCE", "TAUNT"],
    set: 14,
    targetingArrowText: "Silence a minion with Taunt.",
    text: "Battlecry: Silence an enemy minion with Taunt.",
    type: "MINION",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636791255712985125.png",
    tile: "TRL_524.png"
  },
  {
    artist: "James Ryman",
    attack: 0,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50411,
    flavor: "Yeah it's great, but did you see the Arena Treasure Arms?!",
    health: 4,
    id: "TRL_525",
    mechanics: ["DEATHRATTLE"],
    name: "Arena Treasure Chest",
    rarity: "COMMON",
    set: 14,
    text: "Deathrattle: Draw 2 cards.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791255749701837.png",
    tile: "TRL_525.png",
    activeVersion: 0,
    versions: [
      {
        name: "Buffs",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "7f40429f-b939-460d-9574-cf10ecbb4067",
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
    artist: "Maurico Herrera",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 50412,
    flavor: "Caution: Contains Flammable Material",
    health: 6,
    id: "TRL_526",
    mechanics: ["BATTLECRY"],
    name: "Dragonmaw Scorcher",
    race: "DRAGON",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Deal 1 damage to all other minions.",
    type: "MINION",
    rating: 3,
    extra: ["AOE"],
    imageUrl: "636791255786887474.png",
    tile: "TRL_526.png"
  },
  {
    artist: "Cicily He",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 50414,
    flavor: "“It’s an <i>illusion</i>, Malacrass!”",
    health: 4,
    id: "TRL_527",
    mechanics: ["BATTLECRY"],
    name: "Drakkari Trickster",
    rarity: "EPIC",
    set: 14,
    text:
      "Battlecry: Give each player a copy of a random card from their opponent's deck.",
    type: "MINION",
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636791255831416230.png",
    tile: "TRL_527.png"
  },
  {
    artist: "Paul Mafayon",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 50416,
    flavor: "'Tell me if you’ve heard this one!'",
    health: 10,
    id: "TRL_528",
    name: "Linecracker",
    rarity: "EPIC",
    set: 14,
    text: "Overkill: Double this minion's Attack.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791255870476590.png",
    tile: "TRL_528.png"
  },
  {
    artist: "Alex Horley Ormandelli",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 50421,
    flavor: "Knew Mysterious Challenger back when he was a Mysterious Squire.",
    health: 4,
    id: "TRL_530",
    mechanics: ["BATTLECRY"],
    name: "Masked Contender",
    rarity: "EPIC",
    referencedTags: ["SECRET"],
    set: 14,
    text: "Battlecry: If you control a Secret, play a Secret from your deck.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791255914693088.png",
    tile: "TRL_530.png",
    activeVersion: 0,
    versions: [
      {
        name: "Secrets",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "03dd9f29-3926-4475-a44c-b1b3687e09c4",
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
    artist: "Sam Nielsen",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50427,
    flavor:
      "Rub a dub dub, three trolls in a tub. And who do you think dey be? Da Shaker, Da Breaker, and Da Undatakah. And all of dem comin' for me.",
    health: 2,
    id: "TRL_531",
    mechanics: ["DEATHRATTLE"],
    name: "Rumbletusk Shaker",
    rarity: "COMMON",
    set: 14,
    text: "Deathrattle: Summon a 3/2 Rumbletusk Breaker.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791255954065914.png",
    tile: "TRL_531.png"
  },
  {
    artist: "Steve Prescott",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 50430,
    flavor: "One's play-by-play. The other is off-color.",
    health: 5,
    id: "TRL_532",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Mosh'Ogg Announcer",
    rarity: "EPIC",
    set: 14,
    text: "Enemies attacking this have a 50% chance to attack someone else.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791256007031861.png",
    tile: "TRL_532.png"
  },
  {
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 50434,
    flavor: "I scream, you scream, we all scream when we see a Freeze Mage.",
    health: 5,
    id: "TRL_533",
    mechanics: ["BATTLECRY"],
    name: "Ice Cream Peddler",
    rarity: "EPIC",
    referencedTags: ["FREEZE"],
    set: 14,
    text: "Battlecry: If you control a Frozen minion, gain 8 Armor.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791256050466836.png",
    tile: "TRL_533.png"
  },
  {
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 50437,
    flavor: "Nonono, the <i>turtle</i> is the Shellfighter.",
    health: 8,
    id: "TRL_535",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Snapjaw Shellfighter",
    rarity: "EPIC",
    set: 14,
    text:
      "Whenever an adjacent minion takes damage, this  minion takes it instead.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791256093277131.png",
    tile: "TRL_535.png"
  },
  {
    artist: "Clint Langley",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 50443,
    elite: true,
    flavor:
      "First Deathrattle: Draw a card. Second: Draw 2 cards. Third: Throw Mon'kind off a steel cage and plummet sixteen feet through an announcer’s table.",
    health: 5,
    id: "TRL_537",
    mechanics: ["BATTLECRY"],
    name: "Da Undatakah",
    rarity: "LEGENDARY",
    referencedTags: ["DEATHRATTLE"],
    set: 14,
    text:
      "Battlecry: Gain the Deathrattle effects of 3 friendly minions that died this game.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791256134837372.png",
    tile: "TRL_537.png",
    activeVersion: 0,
    versions: [
      {
        name: "Simple deathrattles",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "2ae35dfb-c77a-4bbd-8f21-35c65c3c7c9f",
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
    artist: "Izzy Hoover",
    attack: 9,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 10,
    dbfId: 50454,
    elite: true,
    flavor:
      "ATTENTION: Do not enter any major city while infected with the Corrupted Blood!",
    health: 6,
    id: "TRL_541",
    mechanics: ["DEATHRATTLE"],
    name: "Hakkar, the Soulflayer",
    rarity: "LEGENDARY",
    set: 14,
    text: "Deathrattle: Shuffle a Corrupted Blood into each player's deck.",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791256176866443.png",
    tile: "TRL_541.png"
  },
  {
    artist: "James Ryman",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 9,
    dbfId: 50459,
    elite: true,
    flavor:
      "Adorning devilsaurs with armor and feathers is a respected job in troll culture, although it has a high turnover rate.",
    health: 7,
    id: "TRL_542",
    mechanics: ["RUSH"],
    name: "Oondasta",
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 14,
    text: "Rush Overkill: Summon a Beast from your hand.",
    type: "MINION",
    rating: 2,
    extra: ["VALUE"],
    imageUrl: "636791256286860523.png",
    tile: "TRL_542.png",
    activeVersion: 0,
    versions: [
      {
        name: "Beasts",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "995942ca-1ec7-45b4-95c8-64f5c4d9105e",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Oondasta"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Akkapoj T.",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 50512,
    durability: 2,
    flavor: "This weapon – ow! Requires a little – OWW! Finesse.",
    id: "TRL_543",
    mechanics: ["BATTLECRY"],
    name: "Bloodclaw",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Deal 5 damage to your hero.",
    type: "WEAPON",
    rating: 2,
    extra: ["SMALL_REMOVAL", "FAST", "TEMPO"],
    imageUrl: "636791256324045933.png",
    tile: "TRL_543.png"
  },
  {
    artist: "James Ryman",
    attack: 4,
    cardClass: ["PALADIN"],
    collectible: true,
    collectionText:
      "Battlecry: If you've restored 10 Health this game, gain +4/+4 and Taunt.",
    cost: 4,
    dbfId: 50514,
    flavor: "YOU WERE A TEMPLAR, JONDAR!",
    health: 4,
    id: "TRL_545",
    mechanics: ["BATTLECRY"],
    name: "Zandalari Templar",
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 14,
    text:
      "Battlecry: If you've restored 10 Health this game, gain +4/+4 and Taunt.@ <i>({0} left!)</i>@ <i>(Ready!)</i>",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791256363262522.png",
    tile: "TRL_545.png",
    activeVersion: 0,
    versions: [
      {
        name: "Heal",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "0d7b59eb-42aa-4fe6-a4e3-b11aa07810b2",
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
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 50532,
    flavor: "'Dude, where's my pizza?!'",
    health: 5,
    id: "TRL_546",
    mechanics: ["BATTLECRY"],
    name: "Ornery Tortoise",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Battlecry: Deal 5 damage to your hero.",
    type: "MINION",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636791256404822902.png",
    tile: "TRL_546.png"
  },
  {
    artist: "Vlad Botos",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 50776,
    flavor: "'I used to farm for hours! Now they just come in packs?'",
    health: 7,
    id: "TRL_550",
    mechanics: ["RUSH", "TAUNT"],
    name: "Amani War Bear",
    race: "BEAST",
    rarity: "COMMON",
    set: 14,
    text: "Rush Taunt",
    type: "MINION",
    rating: 1,
    extra: ["GENERAL"],
    imageUrl: "636791256440133346.png",
    tile: "TRL_550.png"
  },
  {
    artist: "Konstantin Turovec",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 50863,
    flavor: "'Reck less!? ME WRECK MOAR!'",
    health: 6,
    id: "TRL_551",
    mechanics: ["BATTLECRY", "TAUNT"],
    name: "Reckless Diretroll",
    rarity: "COMMON",
    set: 14,
    text: "Taunt Battlecry: Discard your lowest Cost card.",
    type: "MINION",
    rating: 2,
    extra: ["FAST"],
    imageUrl: "636791256475756494.png",
    tile: "TRL_551.png"
  },
  {
    artist: "Akkapoj T.",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 8,
    dbfId: 50991,
    flavor: "Or as it’s known in troll, “De bolt, mon.”",
    id: "TRL_555",
    name: "Demonbolt",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 14,
    text: "Destroy a minion. Costs (1) less for each minion you control.",
    type: "SPELL",
    rating: 3,
    extra: ["HARD_REMOVAL"],
    imageUrl: "636791256509660699.png",
    tile: "TRL_555.png",
    activeVersion: 0,
    versions: [
      {
        name: "ZOO",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "35735366-6f62-4ea2-b88c-6feb5fea16f2",
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
    artist: "J. Axer",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 51136,
    elite: true,
    flavor: "Sadly, she was still two credits short of her Witch Doctorate.",
    health: 5,
    id: "TRL_564",
    mechanics: ["BATTLECRY"],
    name: "Mojomaster Zihi",
    rarity: "LEGENDARY",
    set: 14,
    text: "Battlecry: Set each player to 5 Mana Crystals.",
    type: "MINION",
    rating: 3,
    extra: ["FAST"],
    imageUrl: "636791256546533626.png",
    tile: "TRL_564.png"
  },
  {
    artist: "Dave Allsop",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 51159,
    flavor: "My roommates only use Revenge of the Passive Aggressive.",
    id: "TRL_566",
    name: "Revenge of the Wild",
    playRequirements: {
      REQ_FRIENDLY_MINION_OF_RACE_DIED_THIS_TURN: 20,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    set: 14,
    text: "Summon your Beasts that died this turn.",
    type: "SPELL",
    rating: 3,
    extra: ["MIN_GEN"],
    imageUrl: "636791256583250079.png",
    tile: "TRL_566.png",
    activeVersion: 0,
    versions: [
      {
        name: "Beasts",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "fdecb7a2-6095-41b7-8d4a-80e0faf40e17",
            filters: [
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
    artist: "Mike Sass",
    attack: 7,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 7,
    dbfId: 51816,
    flavor: "Every major show has an opening act to warm up the crowd.",
    health: 4,
    id: "TRL_569",
    mechanics: ["BATTLECRY"],
    name: "Crowd Roaster",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND: 0
    },
    race: "DRAGON",
    rarity: "EPIC",
    set: 14,
    targetingArrowText: "Deal 7 damage to an enemy minion.",
    text:
      "Battlecry: If you're holding a Dragon, deal 7 damage to an enemy minion.",
    type: "MINION",
    rating: 3,
    extra: ["GENERAL"],
    imageUrl: "636791256623403896.png",
    tile: "TRL_569.png",
    activeVersion: 0,
    versions: [
      {
        name: "Dragons",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "e1ca1cf7-72c0-4ce6-9593-50c1e060f155",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "DRAGON"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Crowd Roaster"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 4,
            id: "81cb2b46-d107-4e8b-a3a9-1471bcbb039f",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "holding.*dragon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Crowd Roaster"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Sean McNally",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 52931,
    flavor: "Fresh from the floor of the arena!",
    health: 4,
    id: "TRL_570",
    mechanics: ["TRIGGER_VISUAL"],
    name: "Soup Vendor",
    rarity: "RARE",
    set: 14,
    text: "Whenever you restore 3 or more Health to your hero, draw a card.",
    type: "MINION",
    rating: 1,
    extra: ["CARD_DRAW"],
    imageUrl: "636791256709960966.png",
    tile: "TRL_570.png",
    activeVersion: 0,
    versions: [
      {
        name: "Heal",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a99472ae-0c55-4426-88be-f230622f39f8",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "HEAL"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "heal|restore"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    artist: "Arthur Bozonnet",
    attack: 3,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 50659,
    elite: true,
    flavor: "Remember, you’re only as strong as your weakest lynx.",
    health: 2,
    id: "TRL_900",
    mechanics: ["BATTLECRY"],
    name: "Halazzi, the Lynx",
    race: "BEAST",
    rarity: "LEGENDARY",
    referencedTags: ["RUSH"],
    set: 14,
    text: "Battlecry: Fill your hand with 1/1 Lynxes that have Rush.",
    type: "MINION",
    rating: 3,
    extra: ["VALUE", "SMALL_REMOVAL"],
    imageUrl: "636791256748865042.png",
    tile: "TRL_900.png"
  },
  {
    artist: "Arthur Bozonnet",
    attack: 0,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 50660,
    flavor:
      "Much of this shrine’s power lies in the can-opener noise it makes.",
    health: 3,
    id: "TRL_901",
    mechanics: ["STEALTH", "TRIGGER_VISUAL"],
    name: "Spirit of the Lynx",
    rarity: "RARE",
    set: 14,
    text: "Stealth for 1 turn. Whenever you summon a  Beast, give it +1/+1.",
    type: "MINION",
    rating: 2,
    extra: ["GENERAL"],
    imageUrl: "636791256796674605.png",
    tile: "TRL_901.png",
    activeVersion: 0,
    versions: [
      {
        name: "Unlease & 1 cost beasts",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "bf7bd318-d99b-4336-ac6d-4c3a5b9da383",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Unleash the Hounds"
              }
            ]
          },
          {
            minCards: 6,
            maxCards: 8,
            id: "f721de96-6c28-436a-b964-a1ea397a7b00",
            filters: [
              {
                property: "race",
                operation: "EQUALS",
                minValue: "BEAST"
              },
              { property: "cost", operation: "EQUALS", minValue: 1 }
            ]
          }
        ]
      }
    ]
  }
];
