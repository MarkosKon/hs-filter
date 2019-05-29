import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { DeckContext } from '../context/deck-context';
import { LiveFilterContext, initialLiveFilterGroup } from '../context/live-filter-context';
import { initialDeck } from '../context/deck-context';
import deckReducer from '../ducks/deck';
import liveFilterReducer from '../ducks/live-filters';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContainer = ({ children }) => {
  // Live filter group reducer + saved filter groups in local storage.
  const [liveFilterGroup, liveFilterGroupDispatch] = useReducer(
    liveFilterReducer,
    initialLiveFilterGroup,
  );
  const [savedFilterGroups, setSavedFilterGroups] = useLocalStorage('filterGroups', []);

  // Current deck reducer + saved decks in local storage.
  const [deck, deckDispatch] = useReducer(deckReducer, initialDeck);
  const [decks, updateDecks] = useLocalStorage('decks', []);
  return (
    <LiveFilterContext.Provider
      value={{
        liveFilterGroup: {
          liveFilterGroup,
          savedFilterGroups,
          setSavedFilterGroups,
          dispatch: liveFilterGroupDispatch,
        },
      }}
    >
      <DeckContext.Provider
        value={{
          deck,
          dispatch: deckDispatch,
          decks,
          updateDecks,
        }}
      >
        {children}
      </DeckContext.Provider>
    </LiveFilterContext.Provider>
  );
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AppContainer;
