export const knightsOfTheFrozenThrone = [
  {
    name: "Phantom Freebooter",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42327,
    flavor: "There's no such thing as a free boot.",
    health: 3,
    id: "ICC_018",
    mechanics: ["BATTLECRY"],
    race: "PIRATE",
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Battlecry: Gain stats equal to your weapon's.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62858.png",
    tile: "ICC_018.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "3394700b-8be9-4574-8f7a-816315373d38",
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
    name: "Skelemancer",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42328,
    flavor:
      "What do you mean there's no such thing as 'Skelemancy?' But 'Dinomancy' is ok?",
    health: 2,
    id: "ICC_019",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Deathrattle: If it's your opponent's turn, summon an 8/8 Skeleton.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62943.png",
    tile: "ICC_019.png"
  },
  {
    name: "Exploding Bloatbat",
    artist: "Dany Orizio",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 42320,
    flavor: "We've all been there after a night of one-too-many funnel cakes.",
    health: 1,
    id: "ICC_021",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Deathrattle: Deal 2 damage to all enemy minions.",
    type: "MINION",
    extra: ["AOE"],
    imageUrl: "62942.png",
    tile: "ICC_021.png"
  },
  {
    name: "Snowflipper Penguin",
    artist: "Matt Dixon",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 0,
    dbfId: 42338,
    flavor: "On land, a group of penguins is called a 'waddle.'",
    health: 1,
    id: "ICC_023",
    race: "BEAST",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    type: "MINION",
    extra: ["FAST"],
    imageUrl: "62839.png",
    tile: "ICC_023.png"
  },
  {
    name: "Rattling Rascal",
    artist: "Peter Stapleton",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42422,
    flavor: "Don't give up, skeleton!",
    health: 2,
    id: "ICC_025",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text:
      "Battlecry: Summon a 5/5 Skeleton. Deathrattle: Summon one for your opponent.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "62893.png",
    tile: "ICC_025.png"
  },
  {
    name: "Grim Necromancer",
    artist: "Dave Allsop",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42438,
    flavor: "WARNING: Skeletons will NOT explode.",
    health: 4,
    id: "ICC_026",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Battlecry: Summon two 1/1 Skeletons.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "62947.png",
    tile: "ICC_026.png"
  },
  {
    name: "Bone Drake",
    artist: "Peter Stapleton",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 42439,
    flavor:
      "The bone drake brings all the dragons to the yard. He would teach you, but you have no cards.",
    health: 5,
    id: "ICC_027",
    mechanics: ["DEATHRATTLE"],
    race: "DRAGON",
    rarity: "RARE",
    set: 10,
    rating: 3,
    text: "Deathrattle: Add a random Dragon to your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "62899.png",
    tile: "ICC_027.png"
  },
  {
    name: "Sunborne Val'kyr",
    artist: "Hideaki Takamura",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42440,
    flavor: "Bring valor to Odyn's halls, Champion!",
    health: 4,
    id: "ICC_028",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Battlecry: Give adjacent minions +2 Health.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "62855.png",
    tile: "ICC_028.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "71665665-2984-4cdc-86cd-34d26393392b",
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
    name: "Cobalt Scalebane",
    artist: "Jim Nelson",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42442,
    flavor: "You get a sword! And you get a sword! Everybody gets a sword!",
    health: 5,
    id: "ICC_029",
    race: "DRAGON",
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text:
      "At the end of your turn, give another random friendly minion +3 Attack.",
    type: "MINION",
    extra: ["BUFF", "TEMPO", "FAST"],
    imageUrl: "62851.png",
    tile: "ICC_029.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "de2502bb-33a4-4e62-b172-20bb5f1a3e79",
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
    name: "Night Howler",
    artist: "Nicola Saviori",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42445,
    flavor: "Honestly, he howls during the day, too.",
    health: 4,
    id: "ICC_031",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Whenever this minion takes damage, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62919.png",
    tile: "ICC_031.png"
  },
  {
    name: "Venomancer",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42446,
    flavor: "Eight times the death of regular-mancers.",
    health: 5,
    id: "ICC_032",
    mechanics: ["POISONOUS"],
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Poisonous",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62953.png",
    tile: "ICC_032.png"
  },
  {
    name: "Arrogant Crusader",
    artist: "Anton Zemskov",
    attack: 5,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 42462,
    flavor:
      "To be honest, he was kind of a jerk even BEFORE he was bitten by that ghoul.",
    health: 2,
    id: "ICC_034",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Deathrattle: If it's your opponent's turn, summon a 2/2 Ghoul.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62930.png",
    tile: "ICC_034.png"
  },
  {
    name: "Righteous Protector",
    artist: "Evgeniy Dlinnov",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 1,
    dbfId: 42467,
    flavor:
      "Original name was Tubular Protector, but this seems more bodacious.",
    health: 1,
    id: "ICC_038",
    mechanics: ["DIVINE_SHIELD", "TAUNT"],
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Taunt Divine Shield",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62864.png",
    tile: "ICC_038.png"
  },
  {
    name: "Dark Conviction",
    artist: "Arthur Gimalinov",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 42469,
    flavor: "In his court, Uther is judge, jury, AND executioner…",
    id: "ICC_039",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Set a minion's Attack and Health to 3.",
    type: "SPELL",
    extra: ["BUFF", "HARD_REMOVAL"],
    imageUrl: "62932.png",
    tile: "ICC_039.png"
  },
  {
    name: "Defile",
    artist: "Dave Allsop",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 42471,
    flavor:
      "This spell was originally designed to help warlocks clean up their hard drives.",
    id: "ICC_041",
    rarity: "RARE",
    set: 10,
    rating: 4,
    text: "Deal $1 damage to all minions. If any die, cast this again.",
    type: "SPELL",
    extra: ["AOE"],
    imageUrl: "62840.png",
    tile: "ICC_041.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "9944029d-38b9-4ed8-be17-aa65b2277551",
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
    name: "Fatespinner",
    artist: "Dan Scott",
    attack: 5,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 42615,
    flavor: "Her clothing? Pure silk, of course.",
    health: 3,
    id: "ICC_047",
    mechanics: ["CHOOSE_ONE"],
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 1,
    text:
      "Choose a Deathrattle (Secretly) - Deal 3 damage to all minions; or Give them +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61830.png",
    tile: "ICC_047.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "ed900566-f72e-4a2e-86dd-abbf9945e8ad",
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
    name: "Toxic Arrow",
    artist: "Zoltan Boros",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 42648,
    flavor: "What doesn't kill you makes you toxic.",
    id: "ICC_049",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    referencedTags: ["POISONOUS"],
    set: 10,
    rating: 2,
    text: "Deal $2 damage to a minion. If it survives, give it Poisonous.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL", "HARD_REMOVAL"],
    imageUrl: "62952.png",
    tile: "ICC_049.png"
  },
  {
    name: "Webweave",
    artist: "Matt Dixon",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 5,
    dbfId: 42649,
    flavor: "O, what a tangled web we weave, hoping spiders dodge the cleave.",
    id: "ICC_050",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "COMMON",
    referencedTags: ["POISONOUS"],
    set: 10,
    rating: 1,
    text: "Summon two 1/2 Poisonous Spiders.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62900.png",
    tile: "ICC_050.png"
  },
  {
    name: "Druid of the Swarm",
    artist: "Zoltan Boros",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 2,
    dbfId: 42651,
    flavor:
      "The Druid awoke from troubling dreams to find herself transformed into a giant spider.",
    health: 2,
    id: "ICC_051",
    mechanics: ["CHOOSE_ONE"],
    rarity: "RARE",
    referencedTags: ["POISONOUS", "TAUNT"],
    set: 10,
    rating: 3,
    text:
      "Choose One - Transform into a 1/2 with Poisonous; or a 1/5 with Taunt.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "62905.png",
    tile: "ICC_051.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 4,
            id: "a929eae3-0730-42a1-98b5-89ddbdb52374",
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
    name: "Play Dead",
    artist: "Peter Stapleton",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 1,
    dbfId: 42652,
    flavor: "He's a very literal dog.",
    id: "ICC_052",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_TARGET_WITH_DEATHRATTLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 1,
    text: "Trigger a friendly minion's Deathrattle.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62891.png",
    tile: "ICC_052.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "e8079fff-f63f-4f69-beaf-059ffc570ecb",
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
    name: "Spreading Plague",
    artist: "Alex Alexandrov",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 6,
    dbfId: 42656,
    flavor:
      "In the past, plagues were spread by mice or fleas. These days they're spread by elves.",
    id: "ICC_054",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 10,
    rating: 3,
    text:
      "Summon a 1/5 Scarab with Taunt. If your opponent has more minions, cast this again.",
    type: "SPELL",
    extra: ["STALL"],
    imageUrl: "62841.png",
    tile: "ICC_054.png"
  },
  {
    name: "Drain Soul",
    artist: "Kerem Beyit",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 42658,
    flavor: "Cleans even the toughest clogs with just a flick of the wrist!",
    id: "ICC_055",
    mechanics: ["LIFESTEAL"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Lifesteal Deal $2 damage to a minion.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62928.png",
    tile: "ICC_055.png"
  },
  {
    name: "Cryostasis",
    artist: "A.J. Nazzaro",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 42676,
    flavor: "We'll thaw you out when we find a cure!",
    id: "ICC_056",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 1,
    text: "Give a minion +3/+3 and Freeze it.",
    type: "SPELL",
    extra: ["BUFF"],
    imageUrl: "62846.png",
    tile: "ICC_056.png"
  },
  {
    name: "Brrrloc",
    artist: "Jaemin Kim",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 42678,
    flavor: "He may be frozen fish, but he fights fresh!",
    health: 2,
    id: "ICC_058",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    race: "MURLOC",
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 1,
    targetingArrowText: "Freeze an enemy.",
    text: "Battlecry: Freeze an enemy.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62874.png",
    tile: "ICC_058.png"
  },
  {
    name: "Mountainfire Armor",
    artist: "Ian Ameling",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 42698,
    flavor: "Excuse me. Your mountain is on fire.",
    health: 3,
    id: "ICC_062",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 10,
    rating: 3,
    text: "Deathrattle: If it's your opponent's turn, gain 6 Armor.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "61818.png",
    tile: "ICC_062.png"
  },
  {
    name: "Blood Razor",
    artist: "Joe Wilson",
    attack: 2,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 4,
    dbfId: 42700,
    durability: 2,
    flavor:
      "For the close shave that you've always wanted. Caution: Very sharp.",
    id: "ICC_064",
    mechanics: ["BATTLECRY", "DEATHRATTLE"],
    rarity: "COMMON",
    set: 10,
    rating: 4,
    text: "Battlecry and Deathrattle: Deal 1 damage to all minions.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "AOE", "TEMPO"],
    imageUrl: "61815.png",
    tile: "ICC_064.png"
  },
  {
    name: "Bone Baron",
    artist: "Brian Despain",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 5,
    dbfId: 42712,
    flavor: "'Oil,' 'Rail,' and 'Blubber' were already taken.",
    health: 5,
    id: "ICC_065",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Deathrattle: Add two 1/1 Skeletons to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62939.png",
    tile: "ICC_065.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "84778c5b-18a9-49dc-a8b1-f3069d4ae0ef",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "combo"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Vryghoul",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 42714,
    flavor: "It's pronounced VERY GHOUL. Don't let anyone tell you different.",
    health: 1,
    id: "ICC_067",
    mechanics: ["DEATHRATTLE"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Deathrattle: If it's your opponent's turn, summon a 2/2 Ghoul.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62941.png",
    tile: "ICC_067.png"
  },
  {
    name: "Ice Walker",
    artist: "James Ryman",
    attack: 1,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 2,
    dbfId: 42716,
    flavor: "Ice <i>Walker</i> you say? He doesn't have feet!",
    health: 3,
    id: "ICC_068",
    race: "ELEMENTAL",
    rarity: "RARE",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 1,
    text: "Your Hero Power also Freezes the target.",
    type: "MINION",
    extra: ["STALL"],
    imageUrl: "62848.png",
    tile: "ICC_068.png"
  },
  {
    name: "Ghastly Conjurer",
    artist: "Paul Mafayon",
    attack: 2,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 4,
    dbfId: 42718,
    flavor: "Wearing purple after the holidays? GHASTLY!",
    health: 6,
    id: "ICC_069",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Battlecry: Add a 'Mirror Image' spell to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61820.png",
    tile: "ICC_069.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "f7f770b2-f52c-4318-a449-1274d574e386",
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
    name: "Light's Sorrow",
    artist: "Ben Thompson",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 42735,
    durability: 4,
    flavor: "These sorrows cut deep.",
    id: "ICC_071",
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD"],
    set: 10,
    rating: 1,
    text: "After a friendly minion loses Divine Shield, gain +1 Attack.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "61833.png",
    tile: "ICC_071.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a5f45f88-41b7-4a52-b5a6-57ada291979e",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Despicable Dreadlord",
    artist: "Konstantin Turovec",
    attack: 4,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 42743,
    flavor: "He's deathspicable.",
    health: 5,
    id: "ICC_075",
    race: "DEMON",
    rarity: "RARE",
    set: 10,
    rating: 4,
    text: "At the end of your turn, deal 1 damage to all enemy minions.",
    type: "MINION",
    extra: ["AOE", "TEMPO", "FAST"],
    imageUrl: "62903.png",
    tile: "ICC_075.png"
  },
  {
    name: "Avalanche",
    artist: "Zoltan Boros",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 4,
    dbfId: 42747,
    flavor: "One of our more snowbally cards.",
    id: "ICC_078",
    mechanics: ["FREEZE"],
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Freeze a minion and deal $3 damage to adjacent ones.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62921.png",
    tile: "ICC_078.png"
  },
  {
    name: "Gnash",
    artist: "Phil Saunders",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 42748,
    flavor: "It's rude to gnash with your mouth open.",
    id: "ICC_079",
    playRequirements: { REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Give your hero +3 Attack this turn. Gain 3 Armor.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62955.png",
    tile: "ICC_079.png"
  },
  {
    name: "Drakkari Defender",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 42750,
    flavor: "Sometimes, the best defense is an offensive troll.",
    health: 8,
    id: "ICC_081",
    mechanics: ["OVERLOAD", "TAUNT"],
    overload: 3,
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Taunt Overload: (3)",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "62887.png",
    tile: "ICC_081.png"
  },
  {
    name: "Frozen Clone",
    artist: "Mike Sass",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 42754,
    flavor: "It's like déjà vu, times two.",
    id: "ICC_082",
    mechanics: ["SECRET"],
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text:
      "Secret: After your opponent plays a minion, add two copies of it to your hand.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "62895.png",
    tile: "ICC_082.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "495d7917-5bca-496f-97c2-9786620aed28",
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
    name: "Doomed Apprentice",
    artist: "Alex Horley Orlandelli",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 42756,
    flavor: "Jaina was never good at keeping up apprentices.",
    health: 2,
    id: "ICC_083",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Your opponent's spells cost (1) more.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62847.png",
    tile: "ICC_083.png"
  },
  {
    name: "Ultimate Infestation",
    artist: "Slawomir Maniak",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 10,
    dbfId: 42759,
    flavor: "Ghouls in the pipe, five by five.",
    id: "ICC_085",
    playRequirements: { REQ_TARGET_TO_PLAY: 0 },
    rarity: "EPIC",
    set: 10,
    rating: 4,
    text: "Deal $5 damage. Draw 5 cards. Gain 5 Armor. Summon a 5/5 Ghoul.",
    type: "SPELL",
    extra: ["VALUE", "SMALL_REMOVAL", "CARD_DRAW"],
    imageUrl: "62879.png",
    tile: "ICC_085.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "ffbccc8f-1a6c-4098-bd55-bb3cc4cd8318",
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
    name: "Glacial Mysteries",
    artist: "Evgeniy Dlinnov",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 8,
    dbfId: 42760,
    flavor: "The secret is in the frosting.",
    id: "ICC_086",
    playRequirements: { REQ_SECRET_ZONE_CAP_FOR_NON_SECRET: 0 },
    rarity: "EPIC",
    referencedTags: ["SECRET"],
    set: 10,
    rating: 1,
    text: "Put one of each Secret from your deck into the battlefield.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62869.png",
    tile: "ICC_086.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "59737102-ecd9-4b2c-a62f-e37d7d1bfffd",
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
    name: "Voodoo Hexxer",
    artist: "Sean McNally",
    attack: 2,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 42762,
    flavor:
      "The Silver Hand recruits shuddered in terror when they saw the dreaded totem of the Hexxer: A tiny little snowman, impaled with pins.",
    health: 7,
    id: "ICC_088",
    mechanics: ["FREEZE", "TAUNT"],
    rarity: "RARE",
    set: 10,
    rating: 3,
    text: "Taunt Freeze any character damaged by this minion.",
    type: "MINION",
    race: " ",
    extra: ["STALL"],
    imageUrl: "61826.png",
    tile: "ICC_088.png"
  },
  {
    name: "Ice Fishing",
    artist: "Jaemin Kim",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 2,
    dbfId: 42763,
    flavor: "Glow fish, war fish... blow fish, more fish...",
    id: "ICC_089",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Draw 2 Murlocs from your deck.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "62884.png",
    tile: "ICC_089.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 10,
            maxCards: 12,
            id: "ff9a87ed-5e30-4416-9b2a-6c836f468cae",
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
            id: "c26eacf2-a959-4d44-a097-4218c0101632",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "murloc"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Snowfury Giant",
    artist: "Steve Prescott",
    attack: 8,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 11,
    dbfId: 42765,
    flavor: "This minion goes all the way to 11!",
    health: 8,
    id: "ICC_090",
    race: "ELEMENTAL",
    rarity: "EPIC",
    referencedTags: ["OVERLOAD"],
    set: 10,
    rating: 1,
    text: "Costs (1) less for each Mana Crystal you've Overloaded this game.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62918.png",
    tile: "ICC_090.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "7c75e851-40c5-4561-8c41-762c1b1eb620",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "overload"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Snowfury Giant"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Dead Man's Hand",
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 42766,
    flavor: "I got two pair, Rags and Armorsmiths. What you got?",
    id: "ICC_091",
    rarity: "EPIC",
    set: 10,
    rating: 3,
    text: "Shuffle a copy of your hand into your deck.",
    type: "SPELL",
    extra: ["VALUE"],
    imageUrl: "62842.png",
    tile: "ICC_091.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "b3cea6d3-428e-4d17-9706-41a1a8c4466e",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["SPELL", "MINION"]
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
    name: "Acherus Veteran",
    artist: "Luke Mancini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 42773,
    flavor:
      "This is my Runeblade. There are many like it but this one is mine.",
    health: 1,
    id: "ICC_092",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Battlecry: Give a friendly minion +1 Attack.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "62948.png",
    tile: "ICC_092.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "91c75dac-bf1a-43f3-9b33-d0854d06335f",
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
                minValue: "Acherus Veteran"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tuskarr Fisherman",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 42775,
    flavor:
      "If you bring him 500 fish, he'll give you this sweet Kalu'ak Fishing Pole.",
    health: 3,
    id: "ICC_093",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["SPELLPOWER"],
    set: 10,
    rating: 2,
    text: "Battlecry: Give a friendly minion Spell Damage +1.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62937.png",
    tile: "ICC_093.png"
  },
  {
    name: "Fallen Sun Cleric",
    artist: "J. Axer",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 42777,
    flavor: "It's hard to keep a Shattered Sun Cleric down.",
    health: 1,
    id: "ICC_094",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Battlecry: Give a friendly minion +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "62888.png",
    tile: "ICC_094.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6fe9d06b-931c-4bf4-adfa-492b7a950122",
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
                minValue: "Fallen Sun Cleric"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Furnacefire Colossus",
    artist: "Steve Prescott",
    attack: 6,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 42779,
    flavor: "Smelts in his mouth, not in your hand.",
    health: 6,
    id: "ICC_096",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text: "Battlecry: Discard all weapons from your hand and gain their stats.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62924.png",
    tile: "ICC_096.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "f83c89b6-0896-4c9a-9503-4b101ab14972",
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
    name: "Grave Shambler",
    artist: "Phil Saunders",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42780,
    flavor: "I think one of the necromancers got a little carried away.",
    health: 4,
    id: "ICC_097",
    race: "ELEMENTAL",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Whenever your weapon is destroyed, gain +1/+1.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62950.png",
    tile: "ICC_097.png"
  },
  {
    name: "Tomb Lurker",
    artist: "Arthur Bozonnet",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42781,
    flavor: "She hangs out in all the tombs, but she rarely posts.",
    health: 3,
    id: "ICC_098",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 1,
    text:
      "Battlecry: Add a random Deathrattle minion that died this game to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62863.png",
    tile: "ICC_098.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "f959e268-3fff-4fce-9cfe-7aa70e4358e2",
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
    name: "Ticking Abomination",
    artist: "Mike Sass",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42782,
    flavor: "Abomination. Emphasis on the second syllable.",
    health: 6,
    id: "ICC_099",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Deathrattle: Deal 5 damage to your minions.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61811.png",
    tile: "ICC_099.png"
  },
  {
    name: "Venomstrike Trap",
    artist: "Dave Allsop",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 2,
    dbfId: 42525,
    flavor: "Snakes on a frozen plain.",
    id: "ICC_200",
    mechanics: ["SECRET"],
    rarity: "RARE",
    referencedTags: ["POISONOUS"],
    set: 10,
    rating: 2,
    text:
      "Secret: When one of your minions is attacked, summon a 2/3 Poisonous Cobra.",
    type: "SPELL",
    extra: ["SECRET"],
    imageUrl: "62837.png",
    tile: "ICC_200.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "224ef6af-99af-4986-abd4-0a45dbd728e4",
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
    name: "Roll the Bones",
    artist: "Zoltan Boros",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 2,
    dbfId: 42560,
    flavor: "Call it: Heads or Tailbone…",
    id: "ICC_201",
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 2,
    text: "Draw a card. If it has Deathrattle, cast this again.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "62885.png",
    tile: "ICC_201.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "49d1f637-9876-4f31-8aab-ca29639cce36",
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
    name: "Professor Putricide",
    artist: "Mike Sass",
    attack: 5,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 4,
    dbfId: 42563,
    elite: true,
    flavor:
      "Among his more notable inventions: A tentacle-groomer, a plague that would wipe out all life on Azeroth, and a fidget spinner.",
    health: 4,
    id: "ICC_204",
    rarity: "LEGENDARY",
    referencedTags: ["SECRET"],
    set: 10,
    rating: 2,
    text:
      "After you play a Secret, put a random Hunter Secret into the battlefield.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61819.png",
    tile: "ICC_204.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 12,
            maxCards: 14,
            id: "535988f5-5d99-428e-b811-53e01f7683e6",
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
    name: "Treachery",
    artist: "Jim Nelson",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 42565,
    flavor: "Never look a gift minion in the mouth.",
    id: "ICC_206",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text: "Choose a friendly minion and give it to your opponent.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62875.png",
    tile: "ICC_206.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 2,
            id: "36eee6f3-03c2-495a-9b19-9deb9aa1d70a",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Howlfiend"
              }
            ]
          },
          {
            minCards: 2,
            maxCards: 2,
            id: "23e53627-3c38-4f25-84a6-c8e2cb9645ec",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Defile"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Devour Mind",
    artist: "Paul Kwon",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 5,
    dbfId: 42566,
    flavor: "A mind is a terrible thing to waste. Seconds, anyone?",
    id: "ICC_207",
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Copy 3 cards in your opponent's deck and add them to your hand.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "62868.png",
    tile: "ICC_207.png"
  },
  {
    name: "Shadow Ascendant",
    artist: "Paul Kwon",
    attack: 2,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 42574,
    flavor: "When you're at the bottom, there's nowhere to ascend, but up.",
    health: 2,
    id: "ICC_210",
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "At the end of your turn, give another random friendly minion +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "62882.png",
    tile: "ICC_210.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "1bc99000-2ec4-41f0-af40-871f71ffdada",
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
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shadow Ascendant"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Acolyte of Agony",
    artist: "Brom",
    attack: 3,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 3,
    dbfId: 42596,
    flavor:
      "It takes many years of practiced study in order to fully master agony.",
    health: 3,
    id: "ICC_212",
    mechanics: ["LIFESTEAL"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Lifesteal",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62886.png",
    tile: "ICC_212.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "3595f3dc-5cd7-4363-8e3f-bd80ec4f131e",
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
    name: "Eternal Servitude",
    artist: "Zoltan Boros",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 4,
    dbfId: 42597,
    flavor: "What do you mean I don't get overtime pay for this?!",
    id: "ICC_213",
    playRequirements: {
      REQ_FRIENDLY_MINION_DIED_THIS_GAME: 0,
      REQ_NUM_MINION_SLOTS: 1
    },
    rarity: "RARE",
    referencedTags: ["DISCOVER"],
    set: 10,
    rating: 1,
    text: "Discover a friendly minion that died this game. Summon it.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "61835.png",
    tile: "ICC_213.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 7,
            id: "f32a66a6-3e8f-4297-b80d-5c7da64e60d5",
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
    name: "Obsidian Statue",
    artist: "A.J. Nazzaro",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 9,
    dbfId: 42598,
    flavor:
      "The original artist spent many hours with a fine chisel perfecting the facial expression for maximum tauntiness.",
    health: 8,
    id: "ICC_214",
    mechanics: ["DEATHRATTLE", "LIFESTEAL", "TAUNT"],
    rarity: "EPIC",
    set: 10,
    rating: 4,
    text: "Taunt, Lifesteal Deathrattle: Destroy a  random enemy minion.",
    type: "MINION",
    race: " ",
    extra: ["STALL", "VALUE"],
    imageUrl: "62870.png",
    tile: "ICC_214.png"
  },
  {
    name: "Archbishop Benedictus",
    artist: "Evgeniy Dlinnov",
    attack: 4,
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 7,
    dbfId: 42633,
    elite: true,
    flavor: "Nobody expects the Archbishop's Benediction!",
    health: 6,
    id: "ICC_215",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 2,
    text: "Battlecry: Shuffle a copy of your opponent's deck into your deck.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "62856.png",
    tile: "ICC_215.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "466f0b34-3d77-4243-82fc-fe0028b28da7",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "VALUE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Archbishop Benedictus"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Howlfiend",
    artist: "Konstantin Turovec",
    attack: 3,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 42642,
    flavor: "The problem is that he carries those cards in his mouth.",
    health: 6,
    id: "ICC_218",
    race: "DEMON",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Whenever this minion takes damage, discard a random card.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62894.png",
    tile: "ICC_218.png"
  },
  {
    name: "Deadscale Knight",
    artist: "Rafael Zanchetin",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 42663,
    flavor: "His favorite spell is Chum Explosion.",
    health: 1,
    id: "ICC_220",
    mechanics: ["LIFESTEAL"],
    race: "MURLOC",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Lifesteal",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62931.png",
    tile: "ICC_220.png"
  },
  {
    name: "Leeching Poison",
    artist: "Ben Thompson",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 42665,
    flavor: "No actual leeches were harmed in the creation of this card.",
    id: "ICC_221",
    playRequirements: { REQ_WEAPON_EQUIPPED: 0 },
    rarity: "COMMON",
    referencedTags: ["LIFESTEAL"],
    set: 10,
    rating: 1,
    text: "Give your weapon Lifesteal this turn.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "61821.png",
    tile: "ICC_221.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "3b231ed6-f67c-4d82-8d81-4f1aae7c80b3",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give.*weapon"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Leeching Poison"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "d3a2d813-7090-454d-bbf4-4e6cae142513",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Kingsbane"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Doomerang",
    artist: "L. Lullabi & K. Turovec",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 1,
    dbfId: 42801,
    flavor:
      "Guaranteed to return your weapon directly to your hand! (Wear gloves. Thick ones.)",
    id: "ICC_233",
    mechanics: ["ImmuneToSpellpower"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0,
      REQ_WEAPON_EQUIPPED: 0
    },
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text:
      "Throw your weapon at a minion. It deals its damage, then returns to your hand.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62940.png",
    tile: "ICC_233.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "a8be6db8-8b28-466b-8f27-493a397531a5",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "give.*weapon"
              }
            ]
          },
          {
            minCards: 1,
            maxCards: 1,
            id: "3e6b8d1e-9c19-4f83-835c-56809bdba84d",
            filters: [
              {
                property: "name",
                operation: "EQUALS",
                minValue: "Kingsbane"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Shadow Essence",
    artist: "Matt Dixon",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 42804,
    flavor: "Difficult to bottle up and sell. But it packs a punch.",
    id: "ICC_235",
    playRequirements: { REQ_NUM_MINION_SLOTS: 1 },
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Summon a 5/5 copy of a random minion in your deck.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62896.png",
    tile: "ICC_235.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "751dbbb7-e488-4189-a2fc-bb3e805b564a",
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
          }
        ]
      }
    ]
  },
  {
    name: "Ice Breaker",
    artist: "Konstantin Turovec",
    attack: 1,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 3,
    dbfId: 42808,
    durability: 3,
    flavor: "A great way to end a conversation.",
    id: "ICC_236",
    rarity: "RARE",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 1,
    text: "Destroy any Frozen minion damaged by this.",
    type: "WEAPON",
    extra: ["GENERAL"],
    imageUrl: "61813.png",
    tile: "ICC_236.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "126cb533-2029-403e-8876-942ff4d0957d",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "freeze"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Frozen Crusher"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Hyldnir Frostrider"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Animated Berserker",
    artist: "Konstantin Turovec",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 1,
    dbfId: 42810,
    flavor: "He'd be a lot easier to animate if he would just stand still.",
    health: 3,
    id: "ICC_238",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "After you play a minion, deal 1 damage to it.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62834.png",
    tile: "ICC_238.png"
  },
  {
    name: "Runeforge Haunter",
    artist: "Slawomir Maniak",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 42819,
    flavor: "Don't worry, he'll keep an eye on that for you.",
    health: 3,
    id: "ICC_240",
    mechanics: ["AURA"],
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "During your turn, your weapon doesn't lose Durability.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62865.png",
    tile: "ICC_240.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "85281f25-ff0b-4e68-8dd0-dc5220b02e41",
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
    name: "Corpse Widow",
    artist: "Dave Allsop",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 5,
    dbfId: 42822,
    flavor:
      "Her marriage survived death, but it decayed pretty quickly after that.",
    health: 6,
    id: "ICC_243",
    mechanics: ["AURA"],
    race: "BEAST",
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 2,
    text: "Your Deathrattle cards cost (2) less.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62867.png",
    tile: "ICC_243.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "d76d3369-1fab-4f47-9135-d528e9f9e9f4",
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
    name: "Desperate Stand",
    artist: "Grace Liu",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 2,
    dbfId: 42824,
    flavor:
      "They're grateful for the help, but most minions would prefer not dying in the first place.",
    id: "ICC_244",
    playRequirements: { REQ_MINION_TARGET: 0, REQ_TARGET_TO_PLAY: 0 },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 1,
    text: "Give a minion 'Deathrattle: Return this to life with 1 Health.'",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62880.png",
    tile: "ICC_244.png"
  },
  {
    name: "Blackguard",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 6,
    dbfId: 42825,
    flavor:
      "'Did I ever tell you the story of when I single-handedly took down a 29/29 C'thun?' - Reno Jackson",
    health: 9,
    id: "ICC_245",
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text:
      "Whenever your hero is healed, deal that much damage to a random enemy minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62907.png",
    tile: "ICC_245.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "6b645c4b-a0d5-48bf-96dd-22d502ff0c1b",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
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
    name: "Coldwraith",
    artist: "Andrew Hou",
    attack: 3,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 42836,
    flavor: "He's freezing his bones off!",
    health: 4,
    id: "ICC_252",
    mechanics: ["BATTLECRY"],
    playRequirements: { REQ_FROZEN_TARGET: 0, REQ_MINION_TARGET: 0 },
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 3,
    text: "Battlecry: If an enemy is Frozen, draw a card.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "61825.png",
    tile: "ICC_252.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "460a03f5-6fbf-4dfc-8626-38dd6dc85d8e",
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
    name: "Corpse Raiser",
    artist: "Jim Nelson",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 42909,
    flavor:
      "He was just minding his business, farming corpses, when you meddling adventurers came along.",
    health: 3,
    id: "ICC_257",
    mechanics: ["BATTLECRY", "DEATH_KNIGHT"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "RARE",
    referencedTags: ["DEATHRATTLE"],
    set: 10,
    rating: 1,
    text:
      "Battlecry: Give a friendly minion 'Deathrattle:   Resummon this minion.'",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62866.png",
    tile: "ICC_257.png"
  },
  {
    name: "Forge of Souls",
    artist: "Daria Tuzova",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 42998,
    flavor: "Powerful weaponry forged by Bronjahm, the Godfather of Souls.",
    id: "ICC_281",
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Draw 2 weapons from your deck.",
    type: "SPELL",
    extra: ["CARD_DRAW"],
    imageUrl: "62917.png",
    tile: "ICC_281.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "a355e913-70d7-41f6-bc41-1c8bdf87b3ac",
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
    name: "Moorabi",
    artist: "Mike Azevedo",
    attack: 4,
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 6,
    dbfId: 43072,
    elite: true,
    flavor:
      "Most disturbing is how Moorabi covers all those frozen minions with flavored syrup.",
    health: 4,
    id: "ICC_289",
    rarity: "LEGENDARY",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 1,
    text: "Whenever another minion is Frozen, add a copy of it to your hand.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62845.png",
    tile: "ICC_289.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "5347455c-56bb-4e80-90c5-cfb312c5b74e",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "freeze"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Frozen Crusher"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Hyldnir Frostrider"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "The Lich King",
    artist: "Glenn Rane",
    attack: 8,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 42818,
    elite: true,
    entourage: [
      "ICC_314t3",
      "ICC_314t2",
      "ICC_314t7",
      "ICC_314t4",
      "ICC_314t5",
      "ICC_314t6",
      "ICC_314t8",
      "ICC_314t1"
    ],
    flavor:
      "'All that I am: anger, cruelty, vengeance, 8 attack - I bestow upon you, my chosen knight.'",
    health: 8,
    id: "ICC_314",
    mechanics: ["TAUNT"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 4,
    text:
      "Taunt At the end of your turn, add a random Death Knight card to your hand.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "62922.png",
    tile: "ICC_314.png"
  },
  {
    name: "Rotface",
    artist: "Anton Zemskov",
    attack: 4,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 42630,
    elite: true,
    flavor: "Daddy! I think I made a Legendary!",
    health: 6,
    id: "ICC_405",
    rarity: "LEGENDARY",
    set: 10,
    rating: 3,
    text:
      "Whenever this minion survives damage, summon a random Legendary minion.",
    type: "MINION",
    race: " ",
    extra: ["VALUE"],
    imageUrl: "62898.png",
    tile: "ICC_405.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 5,
            id: "e0b77459-4fac-481e-8cf1-554ce1ee232a",
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
    name: "Gnomeferatu",
    artist: "Matt Dixon",
    attack: 2,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 2,
    dbfId: 42670,
    flavor: "She prefers the term 'Glampire.'",
    health: 3,
    id: "ICC_407",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 10,
    rating: 3,
    text: "Battlecry: Remove the top card of your opponent's deck.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62852.png",
    tile: "ICC_407.png"
  },
  {
    name: "Val'kyr Soulclaimer",
    artist: "Hideaki Takamura",
    attack: 1,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 3,
    dbfId: 42671,
    flavor: "My Ghoul friend is back and you're gonna be in trouble.",
    health: 4,
    id: "ICC_408",
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Whenever this minion survives damage, summon a 2/2 Ghoul.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62853.png",
    tile: "ICC_408.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 5,
            id: "1eafd508-7c4c-4737-9914-54c7617a1676",
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
    name: "Stitched Tracker",
    artist: "Steve Prescott",
    attack: 2,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 42707,
    flavor: "He's just exercising his right to bear arms.",
    health: 2,
    id: "ICC_415",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["DISCOVER"],
    set: 10,
    rating: 4,
    text: "Battlecry: Discover a copy of a minion in your deck.",
    type: "MINION",
    race: " ",
    extra: ["CARD_DRAW", "VALUE"],
    imageUrl: "62854.png",
    tile: "ICC_415.png"
  },
  {
    name: "Bearshark",
    artist: "Grecke",
    attack: 4,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 3,
    dbfId: 42711,
    flavor: "'Candygram.'",
    health: 3,
    id: "ICC_419",
    mechanics: [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    race: "BEAST",
    rarity: "COMMON",
    set: 10,
    rating: 4,
    text: "Can't be targeted by spells or Hero Powers.",
    type: "MINION",
    extra: ["TEMPO", "FAST"],
    imageUrl: "61827.png",
    tile: "ICC_419.png"
  },
  {
    name: "Death Revenant",
    artist: "Konstantin Turovec",
    attack: 3,
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 5,
    dbfId: 42392,
    flavor: "How's everyone doing? Hurt? Bleeding? Wounded? ... Excellent.",
    health: 3,
    id: "ICC_450",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Battlecry: Gain +1/+1 for each damaged minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62926.png",
    tile: "ICC_450.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 5,
            id: "4d72c7e6-6689-4954-a21b-a651408fc3f1",
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
    name: "Saronite Chain Gang",
    artist: "Daren Bader",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 42395,
    flavor: "Desperately needs some alone time.",
    health: 3,
    id: "ICC_466",
    mechanics: ["BATTLECRY", "TAUNT"],
    rarity: "RARE",
    set: 10,
    rating: 3,
    text: "Taunt Battlecry: Summon another Saronite Chain Gang.",
    type: "MINION",
    race: " ",
    extra: ["MIN_GEN", "FAST"],
    imageUrl: "62901.png",
    tile: "ICC_466.png"
  },
  {
    name: "Deathspeaker",
    artist: "Luca Zontini",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 42394,
    flavor: "It helps to speak really, really loud.",
    health: 4,
    id: "ICC_467",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["IMMUNE"],
    set: 10,
    rating: 2,
    text: "Battlecry: Give a friendly minion Immune this turn.",
    type: "MINION",
    race: " ",
    extra: ["BUFF"],
    imageUrl: "62892.png",
    tile: "ICC_467.png"
  },
  {
    name: "Wretched Tiller",
    artist: "J. Axer",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 1,
    dbfId: 42398,
    flavor: "If you ever tried to plow permafrost, you’d be wretched, too.",
    health: 1,
    id: "ICC_468",
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Whenever this minion attacks, deal 2 damage to the enemy hero.",
    type: "MINION",
    race: " ",
    extra: ["DAMAGE", "FAST"],
    imageUrl: "62946.png",
    tile: "ICC_468.png"
  },
  {
    name: "Unwilling Sacrifice",
    artist: "Tyler Walpole",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 3,
    dbfId: 42391,
    flavor: "Stand right... there. Perfect, perfect! Now don't move.",
    id: "ICC_469",
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Choose a friendly minion. Destroy it and a random enemy minion.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62873.png",
    tile: "ICC_469.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "58aa27c3-fb35-4218-92c7-5149040a9783",
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
    name: "Thrall, Deathseer",
    armor: 5,
    artist: "Jerry Mascho",
    cardClass: ["SHAMAN"],
    collectible: true,
    cost: 5,
    dbfId: 42987,
    elite: true,
    flavor: "'Do not be afraid. Approach. The dead will sleep… for now.'",
    health: 30,
    id: "ICC_481",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 3,
    text:
      "Battlecry: Transform your minions into random ones that cost (2) more.",
    type: "HERO",
    extra: ["BUFF"],
    imageUrl: "62861.png",
    tile: "ICC_481.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "fd887295-33d0-4402-b5e3-2ccab3777353",
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
    name: "Happy Ghoul",
    artist: "Matt Dixon",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 42783,
    flavor: "When life gives you snow…",
    health: 3,
    id: "ICC_700",
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Costs (0) if your hero was healed this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62902.png",
    tile: "ICC_700.png"
  },
  {
    name: "Skulking Geist",
    artist: "Dany Orizio",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 42784,
    flavor:
      "It's as though a million Jade Idols cried out, and were suddenly silenced.",
    health: 6,
    id: "ICC_701",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    set: 10,
    rating: 3,
    text: "Battlecry: Destroy all 1-Cost spells in both hands and decks.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62883.png",
    tile: "ICC_701.png"
  },
  {
    name: "Shallow Gravedigger",
    artist: "Izzy Hoover",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 42785,
    flavor: "It's hard to put them six feet under when you're three feet tall.",
    health: 1,
    id: "ICC_702",
    mechanics: ["DEATHRATTLE"],
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Deathrattle: Add a random Deathrattle minion to your hand.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "58720.png",
    tile: "ICC_702.png"
  },
  {
    name: "Bonemare",
    artist: "Ralph Horsely",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 8,
    dbfId: 42790,
    flavor: "Attacks her job with unbridled enthusiasm.",
    health: 5,
    id: "ICC_705",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    referencedTags: ["TAUNT"],
    set: 10,
    rating: 3,
    text: "Battlecry: Give a friendly minion +4/+4 and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["BUFF", "FAST"],
    imageUrl: "61834.png",
    tile: "ICC_705.png"
  },
  {
    name: "Nerubian Unraveler",
    artist: "Lars Grant-West",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 42791,
    flavor: "He loves a good yarn.",
    health: 5,
    id: "ICC_706",
    mechanics: ["AURA"],
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text: "Spells cost (2) more.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61817.png",
    tile: "ICC_706.png"
  },
  {
    name: "Howling Commander",
    artist: "Mike Azevedo",
    attack: 2,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 3,
    dbfId: 42948,
    flavor: "Enlistment in her battalion comes with several pairs of earplugs.",
    health: 2,
    id: "ICC_801",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["DIVINE_SHIELD"],
    set: 10,
    rating: 2,
    text: "Battlecry: Draw a Divine Shield minion from your deck.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62836.png",
    tile: "ICC_801.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "de466195-58a4-44a8-a64a-0c72464bd735",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Spirit Lash",
    artist: "Zoltan Boros",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 2,
    dbfId: 42992,
    flavor: "We've got spirit, yes we do! We've got spirit, stolen from you!",
    id: "ICC_802",
    mechanics: ["LIFESTEAL"],
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Lifesteal Deal $1 damage to all minions.",
    type: "SPELL",
    extra: ["AOE", "HEAL"],
    imageUrl: "58722.png",
    tile: "ICC_802.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 3,
            id: "c530a565-2a43-43d0-9321-0172c0fc8701",
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
                minValue: 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Strongshell Scavenger",
    artist: "James Ryman",
    attack: 2,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 4,
    dbfId: 43022,
    flavor:
      "It isn't 'grave robbing' when there's no grave. It's just scavenging…",
    health: 3,
    id: "ICC_807",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["TAUNT"],
    set: 10,
    rating: 2,
    text: "Battlecry: Give your Taunt minions +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62936.png",
    tile: "ICC_807.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "d3326f05-db36-4c41-9e41-6131a8bfd09d",
            filters: [
              {
                property: "type",
                operation: "IS_INCLUDED_IN",
                minValue: ["MINION", "WEAPON", "SPELL", "HERO"]
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "taunt"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Crypt Lord",
    artist: "Konstanin Turovec",
    attack: 1,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 3,
    dbfId: 43025,
    flavor: "The original fifth beetle!",
    health: 6,
    id: "ICC_808",
    mechanics: ["TAUNT"],
    rarity: "COMMON",
    set: 10,
    rating: 3,
    text: "Taunt After you summon a minion,  gain +1 Health.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62860.png",
    tile: "ICC_808.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "f2789bbb-1a72-4757-8aed-7f42e051aa09",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Plague Scientist",
    artist: "Dave Allsop",
    attack: 2,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 43028,
    flavor: "The excruciating pain means it's working!",
    health: 3,
    id: "ICC_809",
    mechanics: ["COMBO"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_FOR_COMBO: 0
    },
    rarity: "COMMON",
    referencedTags: ["POISONOUS"],
    set: 10,
    rating: 2,
    text: "Combo: Give a friendly minion Poisonous.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "61812.png",
    tile: "ICC_809.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "1d93c8c5-0f7c-40fb-85b3-9c7636e80480",
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
                minValue: "Plague Scientist"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Deathaxe Punisher",
    artist: "Luca Zontini",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 43029,
    flavor: "Don't fear the Arcanite Reaper.",
    health: 3,
    id: "ICC_810",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["LIFESTEAL"],
    set: 10,
    rating: 1,
    text: "Battlecry: Give a random Lifesteal minion in your hand +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62949.png",
    tile: "ICC_810.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "bbbbd135-7d10-4906-b379-3b712079a679",
            filters: [
              {
                property: "text",
                operation: "MATCH",
                minValue: "lifesteal"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Lilian Voss",
    artist: "Gonzalo Ordonez",
    attack: 4,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 4,
    dbfId: 43031,
    elite: true,
    flavor:
      "She doesn't feel pity, or remorse, or fear. And she absolutely will not stop... ever, until all necromancers are dead.",
    health: 5,
    id: "ICC_811",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 3,
    text:
      "Battlecry: Replace spells in your hand with random spells <i>(from your opponent's class).</i>",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62872.png",
    tile: "ICC_811.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "a1868e78-b368-4e7c-acde-d41bf5234c6a",
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
    name: "Meat Wagon",
    artist: "Rafael Zanchetin",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 43051,
    flavor: "Necromancers call it 'Meals on Wheels.'",
    health: 4,
    id: "ICC_812",
    mechanics: ["DEATHRATTLE"],
    race: "MECHANICAL",
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text:
      "Deathrattle: Summon a minion from your deck with less Attack than this minion.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62849.png",
    tile: "ICC_812.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "a26a5e86-ad85-4b0b-a3a7-0b9f089e1628",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "attack",
                operation: "LESS_THAN",
                minValue: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Chillblade Champion",
    artist: "Kevin Chen",
    attack: 3,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 4,
    dbfId: 43127,
    flavor:
      "It slices, it dices, it vaporizes! The Chillblade will make a Champion out of even the lowliest gnome.",
    health: 2,
    id: "ICC_820",
    mechanics: ["CHARGE", "LIFESTEAL"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Charge Lifesteal",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "58721.png",
    tile: "ICC_820.png"
  },
  {
    name: "Simulacrum",
    artist: "Raymond Swanland",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 3,
    dbfId: 43193,
    flavor: "It's like déjà vu, times two.",
    id: "ICC_823",
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text: "Copy the lowest Cost minion in your hand.",
    type: "SPELL",
    extra: ["GENERAL"],
    imageUrl: "62871.png",
    tile: "ICC_823.png"
  },
  {
    name: "Abominable Bowman",
    artist: "L. Lullabi & K. Turovec",
    attack: 6,
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 7,
    dbfId: 43245,
    flavor:
      "Frosty the Bowman... was an angry hateful soul... with a fresh hewn bow and a missing nose...",
    health: 7,
    id: "ICC_825",
    mechanics: ["DEATHRATTLE"],
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text: "Deathrattle: Summon a random friendly Beast that died this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61829.png",
    tile: "ICC_825.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "9c8040d8-d717-42f6-8685-4f64660762c4",
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
    name: "Valeera the Hollow",
    armor: 5,
    artist: "James Ryman",
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 9,
    dbfId: 43392,
    elite: true,
    flavor:
      "'Run away. Hide in your precious keeps, behind your walls and your bodyguards. Night always falls, and shadows will fill your hallowed halls. One day, one of those shadows will be me.'",
    health: 30,
    id: "ICC_827",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["STEALTH"],
    set: 10,
    rating: 3,
    text: "Battlecry: Gain Stealth until your next turn.",
    type: "HERO",
    extra: ["VALUE", "STALL"],
    imageUrl: "62876.png",
    tile: "ICC_827.png"
  },
  {
    name: "Deathstalker Rexxar",
    armor: 5,
    artist: "Jomaro Kindred",
    cardClass: ["HUNTER"],
    collectible: true,
    cost: 6,
    dbfId: 43398,
    elite: true,
    flavor:
      "'You were too slow, old friend. The hunt began long ago. And now... it will never end.'",
    health: 30,
    id: "ICC_828",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 4,
    text: "Battlecry: Deal 2 damage to all enemy minions.",
    type: "HERO",
    extra: ["AOE", "VALUE"],
    imageUrl: "58724.png",
    tile: "ICC_828.png"
  },
  {
    name: "Uther of the Ebon Blade",
    armor: 5,
    artist: "James Ryman",
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 9,
    dbfId: 43406,
    elite: true,
    flavor:
      "'Step forward. Confess! Once I was a mere servant of the Light. Now I alone stand in judgement.'",
    health: 30,
    id: "ICC_829",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["LIFESTEAL"],
    set: 10,
    rating: 3,
    text: "Battlecry: Equip a 5/3 Lifesteal weapon.",
    type: "HERO",
    extra: ["SMALL_REMOVAL", "HEAL", "VALUE"],
    imageUrl: "62906.png",
    tile: "ICC_829.png"
  },
  {
    name: "Shadowreaper Anduin",
    armor: 5,
    artist: "Wayne Reynolds",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 8,
    dbfId: 43408,
    elite: true,
    flavor:
      "'I will tell you what Velen never taught me. Whosoever stands before the Light… inevitably casts a shadow.'",
    health: 30,
    id: "ICC_830",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 4,
    text: "Battlecry: Destroy all minions with 5 or more Attack.",
    type: "HERO",
    extra: ["SMALL_REMOVAL", "HARD_REMOVAL", "VALUE"],
    imageUrl: "62889.png",
    tile: "ICC_830.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 3,
            id: "93e86f8e-e014-4299-8cbe-79974608332d",
            filters: [
              {
                property: "extra",
                operation: "INCLUDES",
                minValue: "VALUE"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Shadowreaper Anduin"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Bloodreaver Gul'dan",
    armor: 5,
    artist: "Alex Horley Orlandelli",
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 10,
    dbfId: 43415,
    elite: true,
    flavor:
      "'Still you refuse to bend your knee? None can escape death, you old fool. And in death… all will serve me…'",
    health: 30,
    id: "ICC_831",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 4,
    text: "Battlecry: Summon all friendly Demons that died this game.",
    type: "HERO",
    extra: ["VALUE"],
    imageUrl: "62934.png",
    tile: "ICC_831.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "56734025-640d-4986-812d-931b5a1146bc",
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
    name: "Malfurion the Pestilent",
    armor: 5,
    artist: "Alex Horley Orlandelli",
    cardClass: ["DRUID"],
    collectible: true,
    cost: 7,
    dbfId: 43417,
    elite: true,
    flavor:
      "'Cenarius once taught me about the precarious balance between life and death. I have come to understand: there IS no balance. Death always wins.'",
    health: 30,
    id: "ICC_832",
    mechanics: ["CHOOSE_ONE"],
    rarity: "LEGENDARY",
    referencedTags: ["POISONOUS", "TAUNT"],
    set: 10,
    rating: 4,
    text: "Choose One - Summon 2 Poisonous Spiders; or 2 Scarabs with Taunt.",
    type: "HERO",
    extra: ["HEAL", "STALL", "VALUE"],
    imageUrl: "62904.png",
    tile: "ICC_832.png"
  },
  {
    name: "Frost Lich Jaina",
    armor: 5,
    artist: "Glenn Rane",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 9,
    dbfId: 43419,
    elite: true,
    flavor:
      "'Arthas was a spoiled child, playing with toys he could neither control nor understand. Come into the cold. I will show you the true power of the Frozen Throne.'",
    health: 30,
    id: "ICC_833",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["LIFESTEAL"],
    set: 10,
    rating: 4,
    text:
      "Battlecry: Summon a 3/6 Water Elemental. Your Elementals have Lifesteal this game.",
    type: "HERO",
    extra: ["VALUE"],
    imageUrl: "61810.png",
    tile: "ICC_833.png"
  },
  {
    name: "Scourgelord Garrosh",
    armor: 5,
    artist: "Greg Staples",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 8,
    dbfId: 43423,
    elite: true,
    flavor:
      "'You dare to challenge me? Come! Draw your last breath - and then, you are mine.'",
    health: 30,
    id: "ICC_834",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 3,
    text:
      "Battlecry: Equip a 4/3 Shadowmourne that also damages adjacent minions.",
    type: "HERO",
    extra: ["AOE", "SMALL_REMOVAL"],
    imageUrl: "62927.png",
    tile: "ICC_834.png"
  },
  {
    name: "Hadronox",
    artist: "Zoltan Boros",
    attack: 3,
    cardClass: ["DRUID"],
    collectible: true,
    cost: 9,
    dbfId: 43439,
    elite: true,
    flavor:
      "The viziers of Azjol-Nerub released Hadronox as a last-ditch effort to hold back the Lich King. They did so by VERY carefully scooping him up in a LARGE newspaper and releasing him.",
    health: 7,
    id: "ICC_835",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "LEGENDARY",
    referencedTags: ["TAUNT"],
    set: 10,
    rating: 1,
    text: "Deathrattle: Summon your Taunt minions that died this game.",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "61828.png",
    tile: "ICC_835.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 8,
            maxCards: 10,
            id: "58ce7775-e51f-4f18-ba08-c2143abad902",
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
    name: "Breath of Sindragosa",
    artist: "Eric Braddock",
    cardClass: ["MAGE"],
    collectible: true,
    cost: 1,
    dbfId: 43502,
    flavor: "Is it cold in here or is it just Sindragosa?",
    id: "ICC_836",
    playRequirements: { REQ_MINIMUM_ENEMY_MINIONS: 1 },
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 2,
    text: "Deal $2 damage to a random enemy minion and Freeze it.",
    type: "SPELL",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62897.png",
    tile: "ICC_836.png"
  },
  {
    name: "Bring It On!",
    artist: "Mike Azevedo",
    cardClass: ["WARRIOR"],
    collectible: true,
    cost: 2,
    dbfId: 43505,
    flavor:
      "Brrr, it's cold in here. Let's hope she doesn't have an Auctioneer!",
    id: "ICC_837",
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text:
      "Gain 10 Armor. Reduce the Cost of minions in your opponent's hand by (2).",
    type: "SPELL",
    extra: ["HEAL"],
    imageUrl: "61824.png",
    tile: "ICC_837.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 6,
            id: "70d009aa-3349-4dbd-84ba-72c8512e1208",
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
    name: "Sindragosa",
    artist: "Alex Horley Orlandelli",
    attack: 8,
    cardClass: ["MAGE"],
    collectible: true,
    cost: 8,
    dbfId: 43506,
    elite: true,
    flavor:
      "'I recognize your effort but I think your magic still has room for improvement.' - Sindragosa after taking a class on giving constructive feedback.",
    health: 8,
    id: "ICC_838",
    mechanics: ["BATTLECRY"],
    race: "DRAGON",
    rarity: "LEGENDARY",
    set: 10,
    rating: 3,
    text: "Battlecry: Summon two 0/1 Frozen Champions.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "61822.png",
    tile: "ICC_838.png"
  },
  {
    name: "Blood-Queen Lana'thel",
    artist: "Greg Staples",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 5,
    dbfId: 43064,
    elite: true,
    flavor:
      "As a young blood-princess she learned the proper way for a lady to curtsy, how to address fellow members of royalty, and how to bite them.",
    health: 6,
    id: "ICC_841",
    mechanics: ["LIFESTEAL"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 1,
    text: "Lifesteal Has +1 Attack for each card you've discarded this game.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61814.png",
    tile: "ICC_841.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "f9eba927-c12b-4b4c-9b37-ebedaf79df83",
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
    name: "Embrace Darkness",
    artist: "A.J. Nazzaro",
    cardClass: ["PRIEST"],
    collectible: true,
    cost: 6,
    dbfId: 45308,
    flavor:
      "Once you both get comfortable, darkness is actually pretty snuggly.",
    id: "ICC_849",
    playRequirements: {
      REQ_ENEMY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_TO_PLAY: 0
    },
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text:
      "Choose an enemy minion. At the start of your turn, gain control of it.",
    type: "SPELL",
    extra: ["HARD_REMOVAL"],
    imageUrl: "62857.png",
    tile: "ICC_849.png"
  },
  {
    name: "Shadowblade",
    artist: "Matthew O'Connor",
    attack: 3,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 3,
    dbfId: 45338,
    durability: 2,
    flavor: "It's tacky to call it 'Shadeblade.'",
    id: "ICC_850",
    mechanics: ["BATTLECRY"],
    rarity: "RARE",
    referencedTags: ["IMMUNE"],
    set: 10,
    rating: 3,
    text: "Battlecry: Your hero is Immune this turn.",
    type: "WEAPON",
    extra: ["SMALL_REMOVAL", "DAMAGE"],
    imageUrl: "62838.png",
    tile: "ICC_850.png"
  },
  {
    name: "Prince Keleseth",
    artist: "Vladimir Kafanov",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 45340,
    elite: true,
    flavor:
      "Three Princes stand before you. This one wants to buff his brothers.",
    health: 2,
    id: "ICC_851",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 1,
    text:
      "Battlecry: If your deck has no 2-Cost cards, give all minions in your deck +1/+1.",
    type: "MINION",
    race: " ",
    extra: ["VALUE", "FAST"],
    imageUrl: "58723.png",
    tile: "ICC_851.png",
    deckFilters: [
      {
        id: "ff990949-71c3-4a6c-b179-64a3c70d9052",
        initiatorName: "Prince Keleseth",
        property: "cost",
        operation: "NOT_EQUALS",
        minValue: 2
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
            id: "efbd4914-31a3-4952-9a7c-9ce587cfd4c2",
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
    name: "Prince Taldaram",
    artist: "Arthur Gimaldinov",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45341,
    elite: true,
    flavor: "Three Princes stand before you. This one wants to copy others.",
    health: 3,
    id: "ICC_852",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE_AND_NO_3_COST_CARD_IN_DECK: 0
    },
    rarity: "LEGENDARY",
    set: 10,
    rating: 1,
    text:
      "Battlecry: If your deck has no 3-Cost cards, transform into a 3/3 copy of a minion.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61816.png",
    tile: "ICC_852.png",
    deckFilters: [
      {
        id: "e7d52212-a1ec-42f5-aacb-d9b67b203d57",
        initiatorName: "Prince Taldaram",
        property: "cost",
        operation: "NOT_EQUALS",
        minValue: 3
      }
    ],
    activeVersion: 0,
    versions: [{ name: "Default", priorities: [] }]
  },
  {
    name: "Prince Valanar",
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 45342,
    elite: true,
    flavor:
      "Three Princes stand before you. This one devours one after another.",
    health: 4,
    id: "ICC_853",
    mechanics: ["BATTLECRY"],
    rarity: "LEGENDARY",
    referencedTags: ["LIFESTEAL", "TAUNT"],
    set: 10,
    rating: 1,
    text:
      "Battlecry: If your deck has no 4-Cost cards, gain Lifesteal and Taunt.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62844.png",
    tile: "ICC_853.png",
    deckFilters: [
      {
        id: "515ee551-d532-4056-8611-e872b1be2089",
        initiatorName: "Prince Valanar",
        property: "cost",
        operation: "NOT_EQUALS",
        minValue: 4
      }
    ],
    activeVersion: 0,
    versions: [{ name: "Default", priorities: [] }]
  },
  {
    name: "Arfus",
    artist: "Zoltan Boros",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 45366,
    elite: true,
    entourage: [
      "ICC_314t2",
      "ICC_314t3",
      "ICC_314t4",
      "ICC_314t5",
      "ICC_314t7",
      "ICC_314t8",
      "ICC_314t6",
      "ICC_314t1"
    ],
    flavor: "There must always be a Lick King.",
    health: 2,
    id: "ICC_854",
    mechanics: ["DEATHRATTLE"],
    race: "BEAST",
    rarity: "LEGENDARY",
    set: 10,
    rating: 2,
    text: "Deathrattle: Add a random Death Knight card to your hand.",
    type: "MINION",
    extra: ["VALUE"],
    imageUrl: "62923.png",
    tile: "ICC_854.png"
  },
  {
    name: "Hyldnir Frostrider",
    artist: "Marcelo Vignali",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45377,
    flavor: "Don't be fooled, that polar bear's the one in charge.",
    health: 4,
    id: "ICC_855",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    referencedTags: ["FREEZE"],
    set: 10,
    rating: 2,
    text: "Battlecry: Freeze your other minions.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "62920.png",
    tile: "ICC_855.png"
  },
  {
    name: "Spellweaver",
    artist: "Jaemin Kim",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 45378,
    flavor: "Spells offer twice the moisture wicking of cotton.",
    health: 4,
    id: "ICC_856",
    mechanics: ["SPELLPOWER"],
    rarity: "COMMON",
    set: 10,
    rating: 1,
    spellDamage: 2,
    text: "Spell Damage +2",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62938.png",
    tile: "ICC_856.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "5af56f69-af0c-4890-9c03-374b16ee9c7a",
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
    name: "Bolvar, Fireblood",
    artist: "Tooth",
    attack: 1,
    cardClass: ["PALADIN"],
    collectible: true,
    cost: 5,
    dbfId: 45392,
    elite: true,
    flavor: "He's so hot right now.",
    health: 7,
    id: "ICC_858",
    mechanics: ["DIVINE_SHIELD"],
    rarity: "LEGENDARY",
    set: 10,
    rating: 1,
    text:
      "Divine Shield After a friendly minion loses Divine Shield, gain +2 Attack.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61831.png",
    tile: "ICC_858.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 6,
            maxCards: 8,
            id: "b3c88a37-b2d4-4a41-8e27-a89019b34e7a",
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Necrotic Geist",
    artist: "Ian Ameling",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 6,
    dbfId: 45307,
    flavor: "An eye for an eye, and a ghoul for a ghoul.",
    health: 3,
    id: "ICC_900",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Whenever one of your other minions dies, summon a 2/2 Ghoul.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62850.png",
    tile: "ICC_900.png"
  },
  {
    name: "Drakkari Enchanter",
    artist: "Steve Prescott",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45309,
    flavor:
      "Drakkari sorceresses have the irritating habit of repeating themselves at the end of every sentence. Every sentence.",
    health: 5,
    id: "ICC_901",
    mechanics: ["AURA"],
    rarity: "EPIC",
    set: 10,
    rating: 1,
    text: "Your end of turn effects trigger twice.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62929.png",
    tile: "ICC_901.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "45047103-3ee4-401a-891b-777033f0993e",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "end of .*turn"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Drakkari Enchanter"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Mindbreaker",
    artist: "Chris Rahn",
    attack: 2,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 3,
    dbfId: 45314,
    flavor:
      "He's a mind breaker, dream taker, ghoul trainer, don't you mess around with him.",
    health: 5,
    id: "ICC_902",
    rarity: "RARE",
    set: 10,
    rating: 1,
    text: "Hero Powers are disabled.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62859.png",
    tile: "ICC_902.png"
  },
  {
    name: "Sanguine Reveler",
    artist: "Arthur Bozonnet",
    attack: 1,
    cardClass: ["WARLOCK"],
    collectible: true,
    cost: 1,
    dbfId: 45321,
    flavor: "Have some! This drink is to die for!",
    health: 1,
    id: "ICC_903",
    mechanics: ["BATTLECRY"],
    playRequirements: {
      REQ_FRIENDLY_TARGET: 0,
      REQ_MINION_TARGET: 0,
      REQ_TARGET_IF_AVAILABLE: 0
    },
    rarity: "COMMON",
    set: 10,
    rating: 2,
    text: "Battlecry: Destroy a friendly minion and gain +2/+2.",
    type: "MINION",
    race: " ",
    extra: ["FAST"],
    imageUrl: "62835.png",
    tile: "ICC_903.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 4,
            id: "6963f5d4-3fc7-4cad-8b19-3d69b2d4cf94",
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
    name: "Wicked Skeleton",
    artist: "Nicola Saviori",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 45328,
    flavor:
      "It's minions like these that give normal, law-abiding skeletons a bad rap.",
    health: 1,
    id: "ICC_904",
    mechanics: ["BATTLECRY"],
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Battlecry: Gain +1/+1 for each minion that died this turn.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62944.png",
    tile: "ICC_904.png"
  },
  {
    name: "Bloodworm",
    artist: "Arthur Bozonnet",
    attack: 4,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 5,
    dbfId: 45329,
    flavor:
      "Queen Lana'thel insists on one of these, fried, every morning for breakfast.",
    health: 4,
    id: "ICC_905",
    mechanics: ["LIFESTEAL"],
    race: "BEAST",
    rarity: "COMMON",
    set: 10,
    rating: 1,
    text: "Lifesteal",
    type: "MINION",
    extra: ["GENERAL"],
    imageUrl: "62933.png",
    tile: "ICC_905.png"
  },
  {
    name: "Spectral Pillager",
    artist: "Sam Nielsen",
    attack: 5,
    cardClass: ["ROGUE"],
    collectible: true,
    cost: 6,
    dbfId: 45975,
    flavor: "It turns out you CAN take it with you.",
    health: 5,
    id: "ICC_910",
    mechanics: ["COMBO"],
    playRequirements: { REQ_TARGET_FOR_COMBO: 0 },
    rarity: "EPIC",
    set: 10,
    rating: 2,
    text:
      "Combo: Deal damage equal to the number of other cards you've played this turn.",
    type: "MINION",
    race: " ",
    extra: ["SMALL_REMOVAL"],
    imageUrl: "62945.png",
    tile: "ICC_910.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 2,
            maxCards: 4,
            id: "27991983-7469-4f27-8ba4-6271d296efc7",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "SPELL"
              },
              { property: "cost", operation: "EQUALS", minValue: 0 }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Keening Banshee",
    artist: "Jesper Esjing",
    attack: 5,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46101,
    flavor:
      "'What are your strengths?' the interviewer asked. 'Well,' she replied, 'I'm really good at keening.'",
    health: 5,
    id: "ICC_911",
    rarity: "RARE",
    set: 10,
    rating: 2,
    text: "Whenever you play a card, remove the top 3 cards of your deck.",
    type: "MINION",
    race: " ",
    extra: ["TEMPO", "FAST"],
    imageUrl: "62954.png",
    tile: "ICC_911.png"
  },
  {
    name: "Corpsetaker",
    artist: "James Ryman",
    attack: 3,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 4,
    dbfId: 46102,
    flavor:
      "Her extensive collection of corpses includes one of nearly every type.  She'd love for you to join it.",
    health: 3,
    id: "ICC_912",
    mechanics: ["BATTLECRY"],
    rarity: "EPIC",
    referencedTags: ["DIVINE_SHIELD", "LIFESTEAL", "TAUNT", "WINDFURY"],
    set: 10,
    rating: 3,
    text:
      "Battlecry: Gain Taunt if your deck has a Taunt minion. Repeat for Divine Shield, Lifesteal, Windfury.",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "61832.png",
    tile: "ICC_912.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 1,
            maxCards: 2,
            id: "e5f68490-30d0-4a08-8614-6b00772f30e9",
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
          },
          {
            minCards: 1,
            maxCards: 2,
            id: "f794ae1e-6ec9-4615-a606-b63e525f6061",
            filters: [
              {
                property: "type",
                operation: "EQUALS",
                minValue: "MINION"
              },
              {
                property: "text",
                operation: "MATCH",
                minValue: "divine shield"
              },
              {
                property: "name",
                operation: "NOT_EQUALS",
                minValue: "Corpsetaker"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Tainted Zealot",
    artist: "Jesper Esjing",
    attack: 1,
    cardClass: ["NEUTRAL"],
    collectible: true,
    cost: 2,
    dbfId: 46103,
    flavor:
      "The love she shares seems to go nowhere. Now she's lost her Light, tosses and turns, she can't sleep at night...",
    health: 1,
    id: "ICC_913",
    mechanics: ["DIVINE_SHIELD", "SPELLPOWER"],
    rarity: "COMMON",
    set: 10,
    rating: 2,
    spellDamage: 1,
    text: "Divine Shield Spell Damage +1",
    type: "MINION",
    race: " ",
    extra: ["GENERAL"],
    imageUrl: "62951.png",
    tile: "ICC_913.png",
    activeVersion: 0,
    versions: [
      {
        name: "Default",
        priorities: [
          {
            minCards: 4,
            maxCards: 6,
            id: "c7825d87-f8cb-4e48-aff6-44b0aea09cbd",
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
