import { createContext } from 'react';

export const initialLiveFilterGroup = {
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
};
export const LiveFilterContext = createContext(initialLiveFilterGroup);
