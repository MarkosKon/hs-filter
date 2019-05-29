import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import memoize from 'memoize-one';
import { boxShadow } from 'styled-system';
import { toast } from 'react-toastify';
import Autosuggest from 'react-autosuggest';

import {
  Flex, Box, Heading, Centered, Text,
} from '../Primitives';
import { GridItemWithDeck } from './GridItem';
import { DeckContext } from '../../context/deck-context';
import CardDetailsModal from '../Modals/CardDetailsModal';

const Container = styled(Box)`
  position: relative;
`;

const SearchContainer = styled(Flex)`
  ${boxShadow}
  position: sticky;
  top: 60px;
  z-index: 1;
  @media screen and (min-width: 52em) {
    top: 76px;
  }
`;

const CenteredGrid = styled(Grid)`
  min-height: 100vh;
  > div {
    position: relative;
    margin: auto;
  }
`;

// Autosuggest stuff
const suggestions = [
  { name: 'cost is 0' },
  { name: 'cost is 1' },
  { name: 'cost is 2' },
  { name: 'cost is 3' },
  { name: 'cost is 4' },
  { name: 'cost is 5' },
  { name: 'cost is 6' },
  { name: 'cost is 7' },
  { name: 'cost is 8' },
  { name: 'cost is 9' },
  { name: 'cost is 10' },
  { name: 'class is NEUTRAL' },
  { name: 'class is DRUID' },
  { name: 'class is HUNTER' },
  { name: 'class is MAGE' },
  { name: 'class is PALADIN' },
  { name: 'class is PRIEST' },
  { name: 'class is ROGUE' },
  { name: 'class is SHAMAN' },
  { name: 'class is WARLOCK' },
  { name: 'class is WARRIOR' },
  { name: 'set is 0' },
  { name: 'set is 12' },
  { name: 'set is 13' },
  { name: 'set is 14' },
  { name: 'set is 15' },
  { name: 'set is 98' },
  { name: 'set is 99' },
  { name: 'type is HERO' },
  { name: 'type is MINION' },
  { name: 'type is SPELL' },
  { name: 'type is WEAPON' },
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0) return [];
  return suggestions.filter(sug => sug.name.toLowerCase().includes(inputValue));
  // return suggestions.filter(sug => sug.name.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const searchByCode = cards => (field, value) => {
  if (field === 'cost') {
    return cards.filter(card => card.cost === Number(value));
  }
  if (field === 'set') {
    return cards.filter(card => card.set === Number(value));
  }
  if (field === 'class') {
    return cards.filter(card => value.toUpperCase().includes(card.cardClass));
  }
  if (field === 'type') {
    return cards.filter(card => value.toUpperCase().includes(card.type));
  }
  throw Error('Unsupported search');
};

// Some memoization to avoid renders when itemData change.
// Atm, with the context issue the gain is negligible.
const createOpenModal = memoize(func => card => func({ open: true, card }));
const createItemData = memoize((columnCount, searchedCards, openModal) => ({
  columnCount,
  searchedCards,
  openModal,
}));

const Cards = ({ cards }) => {
  const [searchedCards, setSearchedCards] = useState(cards);
  const [searchValue, setSearchValue] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const [modalInfo, setModalInfo] = useState({ open: false, card: null });

  const errorToast = useRef();
  const { deck } = useContext(DeckContext);

  useEffect(() => {
    setSearchValue('');
    setSearchedCards(cards);
  }, [cards]);

  const handleSearch = (newValue) => {
    const value = newValue.toLowerCase();
    if (!value) {
      setSearchedCards(cards);
      return;
    }
    const weHaveAMatch = value.match(/^(cost|class|set|type) is (\S+)$/);
    if (weHaveAMatch) {
      const [, userField, userValue] = weHaveAMatch;
      try {
        const result = searchByCode(cards)(userField, userValue);
        setSearchedCards(result);
      } catch (err) {
        if (!toast.isActive(errorToast.current)) {
          errorToast.current = toast.error(`🔥 ${err.toString()}`);
        }
      }
    } else {
      const filterByName = card => card.name.toLowerCase().includes(value);
      const filterByText = card => card.text && card.text.toLowerCase().includes(value);
      const filterByRace = card => card.race && card.race.toLowerCase().includes(value);
      setSearchedCards(
        cards.filter(card => filterByName(card) || filterByText(card) || filterByRace(card)),
      );
    }
  };
  return (
    <Container bg="redishGray" color="white">
      <CardDetailsModal
        isOpen={modalInfo.open}
        onRequestClose={() => setModalInfo({ open: false, card: null })}
        card={modalInfo.card}
      />
      <SearchContainer
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        py={[2, 2, 3]}
        bg="darkRedishGray"
        boxShadow="normal"
      >
        <Heading fontSize={[2, 2, 5]}>{`${deck.size}/30`}</Heading>
        <Heading fontSize={[2, 2, 5]} mx={[2, 2, 4]}>
          {searchedCards.length}
          {' '}
cards
        </Heading>
        <Autosuggest
          suggestions={searchSuggestions}
          onSuggestionsFetchRequested={({ value }) => {
            setSearchSuggestions(getSuggestions(value));
          }}
          onSuggestionsClearRequested={() => {
            setSearchSuggestions([]);
          }}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            'aria-label': 'Search cards',
            placeholder: 'Search...',
            value: searchValue,
            onChange: (event, { newValue }) => {
              setSearchValue(newValue);
              handleSearch(newValue);
            },
          }}
        />
      </SearchContainer>
      <Box height="100vh" style={{ overflowX: 'hidden' }}>
        {searchedCards.length > 0 ? (
          <AutoSizer defaultWidth={1920} defaultHeight={1080}>
            {({ width, height }) => {
              const cardWidth = width < 500 || height < 500 ? 180 : 250;
              const cardHeight = width < 500 || height < 500 ? 250 : 345;

              const columnCount = Math.floor(width / cardWidth);
              const rowCount = Math.ceil(searchedCards.length / columnCount);

              const openModal = createOpenModal(setModalInfo);
              const itemData = createItemData(columnCount, searchedCards, openModal);
              return (
                <CenteredGrid
                  columnWidth={cardWidth}
                  columnCount={columnCount}
                  rowHeight={cardHeight}
                  rowCount={rowCount}
                  height={height}
                  width={width}
                  itemData={itemData}
                >
                  {GridItemWithDeck}
                </CenteredGrid>
              );
            }}
          </AutoSizer>
        ) : (
          <Centered minHeight="50vh">
            <Text fontSize={4}>No cards. Try different filters.</Text>
          </Centered>
        )}
      </Box>
    </Container>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
