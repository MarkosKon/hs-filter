/**
 * We have them here in js format because I don't know how to handle
 * recursive data with GraphQL.
 */

export const predefinedPresets = [
  {
    type: 'GROUP',
    id: '0ef9a1c8-36a6-4bdd-ab2f-6125144cb856',
    operator: 'AND',
    name: 'Pirates and Weapons',
    children: [
      {
        id: 'da95d604-a424-4dbc-b1ff-99c982f5be92',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '1a0ac462-c595-428e-b6d7-185c9bef8acc',
            field: 'race',
            operation: 'equals',
            value: 'PIRATE',
          },
          {
            type: 'FILTER',
            id: '9ff82b46-d198-46b0-905d-98507277744b',
            field: 'type',
            operation: 'equals',
            value: 'WEAPON',
          },
        ],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '0591b70b-d677-4be1-8d68-dae78ca4b666',
    operator: 'OR',
    name: 'Elementals and spells',
    children: [
      {
        type: 'FILTER',
        id: '201d61ef-67fb-46ba-8ebc-c94ae2c9b7df',
        field: 'race',
        operation: 'equals',
        value: 'ELEMENTAL',
      },
      {
        type: 'FILTER',
        id: '5ac4a7bd-af37-49fe-b6bc-ea93187a6b1e',
        field: 'type',
        operation: 'equals',
        value: 'SPELL',
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'e7f25138-3e34-42b7-bbd9-a04c4f55d5d5',
    operator: 'AND',
    name: 'Druid Standard',
    children: [
      {
        id: '2a671ce2-2028-4121-a1fb-18ce4f353d20',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '8e228129-e314-4d92-b19b-fc75d60a855c',
            field: 'cardClass',
            operation: 'includes',
            value: 'DRUID',
          },
          {
            type: 'FILTER',
            id: '9b2ecfd2-39d3-4b11-9794-6260dca617e7',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '18f106ef-5632-4bc5-b3be-03f6f48fb088',
    operator: 'AND',
    name: 'Druid Wild',
    children: [
      {
        id: 'db25b5b7-9219-4268-bfbd-b2d54ca66a18',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '805c194b-c6a5-40ac-b314-a65ebcc812a8',
            field: 'cardClass',
            operation: 'includes',
            value: 'DRUID',
          },
          {
            type: 'FILTER',
            id: 'e1662d65-9ae6-479f-bd55-c82870a5ec63',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '40013f21-de5a-46ce-91b1-3265fae1462c',
    operator: 'AND',
    name: 'Druid Next rotation',
    children: [
      {
        id: 'c6730b80-39de-4757-8093-4439286c7299',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '52258aa5-d37a-469f-a33f-122a265d0b2c',
            field: 'cardClass',
            operation: 'includes',
            value: 'DRUID',
          },
          {
            type: 'FILTER',
            id: '35037355-2c52-4a47-8872-b94dea7c176d',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 14,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '1f148067-6d31-474a-8608-0b30a3d0f384',
    operator: 'AND',
    name: 'Hunter Standard',
    children: [
      {
        id: 'cdcc28eb-3624-4e0a-8d5a-8493bec05aef',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'ee6f6000-9cb5-4ad5-ae88-112541d23173',
            field: 'cardClass',
            operation: 'includes',
            value: 'HUNTER',
          },
          {
            type: 'FILTER',
            id: 'd2c89a15-ad49-4dde-823e-80e35140a979',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'd09256f8-8a9f-4007-87e9-f2500acb4fcf',
    operator: 'AND',
    name: 'Hunter Wild',
    children: [
      {
        id: '0bd38619-a714-4e95-8079-fc46d8e1d733',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '034cb9a2-3b71-4e89-bd20-a13aeb358965',
            field: 'cardClass',
            operation: 'includes',
            value: 'HUNTER',
          },
          {
            type: 'FILTER',
            id: '0507ab43-4989-478e-8756-ad1dae1abcfc',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '922a3a7a-1aaf-47bb-a389-a6dd19a60e69',
    operator: 'AND',
    name: 'Mage Standard',
    children: [
      {
        id: '620ca0d2-c7d2-4d3a-b989-e5906f4300bd',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'aeb9de51-d3f0-4d81-ae3d-bb1576da45b8',
            field: 'cardClass',
            operation: 'includes',
            value: 'MAGE',
          },
          {
            type: 'FILTER',
            id: '7ece7717-96de-408e-975b-7645bc2d9cb0',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '0abfc50c-bc8e-445a-aeb4-5b7feb0f3a82',
    operator: 'AND',
    name: 'Mage Wild',
    children: [
      {
        id: 'add5b2a5-37ce-4416-af76-64bab749f5b5',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'ff5ae2f9-2682-472a-928e-85f7fcc1f3d5',
            field: 'cardClass',
            operation: 'includes',
            value: 'MAGE',
          },
          {
            type: 'FILTER',
            id: '476182e2-f770-440d-8e8a-f0f15dfba0d8',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: '6837bd94-7e0f-4264-b883-527a1b0ac9e3',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'a53e5e02-09ed-4201-8415-4170b15a8486',
    operator: 'AND',
    name: 'Paladin Standard',
    children: [
      {
        id: '2de47d6c-9c61-488f-bf55-cce551c45093',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'aa37d7d2-8073-4b15-9194-314bc617c071',
            field: 'cardClass',
            operation: 'includes',
            value: 'PALADIN',
          },
          {
            type: 'FILTER',
            id: '2e15c93d-c5ff-489a-92cc-d00f715c7a87',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '4df6bdc0-4aff-4313-8ed7-2f9eb8d785d2',
    operator: 'AND',
    name: 'Paladin Wild',
    children: [
      {
        id: 'f71bb335-f6e6-4706-ab4f-c10b59522d68',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '841ad7df-3be5-46f9-9a16-7ce74d80b868',
            field: 'cardClass',
            operation: 'includes',
            value: 'PALADIN',
          },
          {
            type: 'FILTER',
            id: '8d8a5936-4fe7-4588-a815-c1549ab6b1a9',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: 'eecd060b-f0c9-4f2b-b43a-3a49e84c5d82',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'f89b5066-440d-416e-b4e1-f0a0d619053f',
    operator: 'AND',
    name: 'Priest Standard',
    children: [
      {
        id: '05d7b224-8c08-490a-8c82-198066ee7be4',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '5da08015-b62c-42cd-9d39-dd747619a8a9',
            field: 'cardClass',
            operation: 'includes',
            value: 'PRIEST',
          },
          {
            type: 'FILTER',
            id: 'ec801fe0-3116-44d0-bbbf-bcd6cd644bd1',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '60f2a127-d384-4f24-a531-a90152a8b69a',
    operator: 'AND',
    name: 'Priest Wild',
    children: [
      {
        id: '1cdb145a-3ce8-4c7f-803a-ab1beeee8929',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '60b6b0ce-7b2b-4733-9a75-5941a5293c68',
            field: 'cardClass',
            operation: 'includes',
            value: 'PRIEST',
          },
          {
            type: 'FILTER',
            id: 'be919a3f-28d4-4d66-8eb6-7b789ca939a1',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: '7ef350bf-c535-4337-8356-647620ab0624',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '10510a13-7f35-47ad-805f-cf667ad09a5d',
    operator: 'AND',
    name: 'Rogue Standard',
    children: [
      {
        id: '1e017bfc-f732-4707-b77e-643e28fed9c1',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '90d8e219-c50a-4699-9187-f3bc533cc14a',
            field: 'cardClass',
            operation: 'includes',
            value: 'ROGUE',
          },
          {
            type: 'FILTER',
            id: '9aa97ffb-6d41-4e33-88fa-ecff597fa487',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'd6647c2b-255b-426e-b50f-cfb22ea3e513',
    operator: 'AND',
    name: 'Rogue Wild',
    children: [
      {
        id: '4307e14b-3bd7-42e9-9565-b480ba894a99',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '4e7c056a-3549-499e-a9b4-888968d46bfe',
            field: 'cardClass',
            operation: 'includes',
            value: 'ROGUE',
          },
          {
            type: 'FILTER',
            id: '5ff81dfa-80a3-4a9f-ad1c-b8ae1db12b43',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: '0201e452-ba26-41e2-bdff-82e15a680e9e',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'f5cbc436-e8a9-4a6d-b3d8-1923426786cf',
    operator: 'AND',
    name: 'Shaman Standard',
    children: [
      {
        id: '1cc19f3e-796b-4b94-a6fe-ad0e925a2828',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '407f8371-2db6-4385-aade-c68dfaf3e9de',
            field: 'cardClass',
            operation: 'includes',
            value: 'SHAMAN',
          },
          {
            type: 'FILTER',
            id: 'd047cae2-a9d5-4d4e-ac87-039f713a9af6',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'cfc735a9-0454-44ea-92be-4d3d8a9c81c0',
    operator: 'AND',
    name: 'Shaman Wild',
    children: [
      {
        id: '5d43315e-d30d-400c-8088-402327a84560',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'b265ea77-9c94-4a17-95d6-c677e8015bd6',
            field: 'cardClass',
            operation: 'includes',
            value: 'SHAMAN',
          },
          {
            type: 'FILTER',
            id: 'acfe5975-43c7-433a-b816-375c425f9abe',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: '7dcfdfa1-9f29-4cb4-b7d8-9456385377b8',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'ad27537e-192f-4158-85aa-30c3bf422591',
    operator: 'AND',
    name: 'Warrior Standard',
    children: [
      {
        id: '088953a1-31e3-4063-9307-d022c2fc2c28',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '75e1aaa5-64d9-450d-937f-0f2e14495bb3',
            field: 'cardClass',
            operation: 'includes',
            value: 'WARRIOR',
          },
          {
            type: 'FILTER',
            id: 'a446a5a6-d7f6-4457-983d-35281b80b865',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: 'b98a7a93-d0f4-4d5b-a7d3-d33b81587025',
    operator: 'AND',
    name: 'Warrior Wild',
    children: [
      {
        id: 'b680e654-4a96-4899-ada0-54e33623df3e',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '7755bd17-56ec-4436-892e-21264d56e1ab',
            field: 'cardClass',
            operation: 'includes',
            value: 'WARRIOR',
          },
          {
            type: 'FILTER',
            id: 'b2d3e2b5-55ed-4f56-9497-cfa09af92137',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: 'b0cc596c-013f-4f9c-a89c-f07d4e0da344',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '4097d236-f72a-411a-86c3-654554d87677',
    operator: 'AND',
    name: 'Warlock Standard',
    children: [
      {
        id: '83d9b5a6-9253-4eba-be44-a6f2f742d318',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: 'a06c0f03-435c-400d-a134-894bd9a3fbad',
            field: 'cardClass',
            operation: 'includes',
            value: 'WARLOCK',
          },
          {
            type: 'FILTER',
            id: '8e1790d2-5544-4a97-bdd3-af8a64e7d44b',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        type: 'FILTER',
        id: '2134f2f3-5818-411f-a299-beb44e80fffd',
        field: 'set',
        operation: 'greater than',
        value: 11,
      },
      {
        id: 'd23f23df-9810-4495-842d-21e13fc87b15',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
  {
    type: 'GROUP',
    id: '9666aa90-1511-4df7-b0d3-e1ad614c9b87',
    operator: 'AND',
    name: 'Warlock Wild',
    children: [
      {
        id: '3bfd11c3-dea9-4ab9-bfec-70339e381f1c',
        type: 'GROUP',
        operator: 'OR',
        children: [
          {
            type: 'FILTER',
            id: '1e582477-a5ce-49c0-9d25-93cd1f7e4415',
            field: 'cardClass',
            operation: 'includes',
            value: 'WARLOCK',
          },
          {
            type: 'FILTER',
            id: '97835a89-7965-477e-9ffe-68892f3c34f3',
            field: 'cardClass',
            operation: 'includes',
            value: 'NEUTRAL',
          },
        ],
      },
      {
        id: 'e87f8cb7-3691-472f-b4d0-1e55638497ec',
        type: 'GROUP',
        operator: 'AND',
        children: [],
      },
    ],
  },
];
