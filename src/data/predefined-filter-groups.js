/**
 * We have them here in js format because I don't know how to handle
 * recursive data with GraphQL.
 */

export const predefinedFilterGroups = [
  {
    name: "Murloc Deck",
    id: "89b654e8-8df4-470a-8da6-1aa2b55a37de",
    type: "GROUP",
    operator: "OR",
    children: [
      {
        id: "9bcfa5b8-0a60-4f50-a78d-2c8d751ce111",
        type: "GROUP",
        operator: "AND",
        children: [
          {
            type: "FILTER",
            id: "bc3824fe-b88d-47d4-99b2-f1f399f91e8e",
            field: "text",
            operation: "match",
            value: "murloc"
          },
          {
            type: "FILTER",
            id: "974e430c-8de9-4e16-8af1-13f6b28b0015",
            field: "race",
            operation: "not equals",
            value: "MURLOC"
          }
        ]
      },
      {
        type: "FILTER",
        id: "af862c4e-4c51-4bb6-856b-487c41fbc895",
        field: "race",
        operation: "equals",
        value: "MURLOC"
      },
      {
        type: "FILTER",
        id: "a12f899e-f15a-4783-949e-86a7d6da5652",
        field: "type",
        operation: "not equals",
        value: "MINION"
      }
    ]
  },
  {
    name: "Pirate Deck",
    id: "8a259bae-4552-4ed2-ad82-f0601f0cf31a",
    type: "GROUP",
    operator: "OR",
    children: [
      {
        type: "FILTER",
        id: "42732868-bbc3-4e57-97e7-f0a2e9227d7c",
        field: "race",
        operation: "equals",
        value: "PIRATE"
      },
      {
        type: "FILTER",
        id: "ea35ca00-9db7-4458-912c-155064f78cac",
        field: "text",
        operation: "match",
        value: "pirate"
      },
      {
        type: "FILTER",
        id: "3b898fbc-e6e9-44de-8da6-27c95ba57917",
        field: "type",
        operation: "not equals",
        value: "MINION"
      }
    ]
  },
  {
    name: "Elemental Deck",
    id: "5938523f-61e2-4aff-83a6-7b8e8f67c364",
    type: "GROUP",
    operator: "OR",
    children: [
      {
        id: "47c79952-87bd-49a9-b2ae-3e3e99a39679",
        field: "race",
        operation: "equals",
        value: "ELEMENTAL"
      },
      {
        type: "FILTER",
        id: "9a6a5490-d63f-48d1-a9e6-388bcf4c5577",
        field: "text",
        operation: "match",
        value: "elemental"
      },
      {
        type: "FILTER",
        id: "b2d96b7a-0ce2-460d-aac2-3311220f0db2",
        field: "type",
        operation: "not equals",
        value: "MINION"
      }
    ]
  },
  {
    name: "Totem Deck",
    id: "002db6bd-6864-4d63-92c2-55a62a564934",
    type: "GROUP",
    operator: "OR",
    children: [
      {
        id: "c4ee221f-8126-4b99-9f8d-4475713d29c0",
        field: "race",
        operation: "equals",
        value: "TOTEM"
      },
      {
        type: "FILTER",
        id: "b1597a79-43ac-45b6-ac88-8854fc862c70",
        field: "text",
        operation: "match",
        value: "totem"
      }
    ]
  },
  {
    name: "Damage spells",
    id: "16ed056c-fe06-411c-89fa-d6c7642ab82d",
    type: "GROUP",
    operator: "AND",
    children: [
      {
        type: "FILTER",
        id: "3473068f-ab1f-444c-aabf-37cd18d8820e",
        field: "type",
        operation: "equals",
        value: "SPELL"
      },
      {
        id: "891df469-b1f1-41dd-8e4b-55a689c41bf7",
        type: "GROUP",
        operator: "OR",
        children: [
          {
            type: "FILTER",
            id: "b50d3d8a-eabd-4d5f-ab54-6ba1f33fdc19",
            field: "text",
            operation: "match",
            value: "deal.*damage"
          },
          {
            type: "FILTER",
            id: "883888c7-5d78-440f-a3c1-7b36e72c783b",
            field: "extra",
            operation: "includes",
            value: "DAMAGE"
          }
        ]
      }
    ]
  }
];
