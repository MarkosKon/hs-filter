import React, { useRef, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { areEqual } from 'react-window';
import Img from 'gatsby-image';
import { toast } from 'react-toastify';

import { Box, Button } from '../Primitives';
import { FaSearch, FaMinus } from '../Icons';
import { addUnconditionally, validateAdd, inDeck } from '../../utils/deck';
import { DeckContext } from '../../context/deck-context';
import { addCard, removeCard } from '../../ducks/deck';

const ParentContainer = styled(Box)`
  position: relative;
  .gatsby-image-wrapper {
    overflow: visible !important;
  }
  img {
    transition: opacity 0.5s ease, transform 0.2s ease-in-out !important;
    will-change: transform, opacity;
    z-index: 1;
  }
  :hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const getQuantity = (deck, card) => {
  if (!card) return null;
  const cardInDeck = inDeck(deck, card);
  if (cardInDeck) return cardInDeck.quantity;
  return null;
};

export const GridItemWithDeck = memo(({
  columnIndex, rowIndex, style, data,
}) => {
  const { columnCount, searchedCards, openModal } = data;
  const singleColumnIndex = columnIndex + rowIndex * columnCount;
  const cardToRender = searchedCards[singleColumnIndex];

  const { deck, dispatch } = useContext(DeckContext);
  const quantity = getQuantity(deck, cardToRender);

  const errorToast = useRef();
  return (
    <ParentContainer p={2} style={style}>
      {cardToRender && (
        <>
          <GridItem
            deck={deck}
            dispatch={dispatch}
            cardToRender={cardToRender}
            image={cardToRender.image.childImageSharp.fluid}
            quantity={quantity}
            openModal={openModal}
          />
          <Button
            variant="transparent"
            aria-label={`Add ${cardToRender.name}`}
            data-microtip-position="bottom"
            role="tooltip"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: 0,
              height: '95%',
              width: '100%',
              zIndex: 1,
            }}
            onClick={() => {
              try {
                const resultingDeck = addUnconditionally(deck, cardToRender);
                validateAdd(resultingDeck, deck.ignoreSize);
                dispatch(addCard({ card: cardToRender }));
              } catch (err) {
                if (!toast.isActive(errorToast.current)) {
                  errorToast.current = toast.error(`🔥 ${err.toString()}`);
                }
              }
            }}
          />
        </>
      )}
    </ParentContainer>
  );
}, areEqual);

GridItemWithDeck.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  style: PropTypes.shape({
    height: PropTypes.number,
    left: PropTypes.number,
    position: PropTypes.string,
    top: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  data: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
    columnCount: PropTypes.number.isRequired,
    searchedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const ChildContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ActionContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  font-weight: bold;
`;

const getOpacity = (card, quantity) => {
  if (quantity === null) return 1;
  if (quantity === 1 && card.rarity !== 'LEGENDARY') return 0.6;
  return 0.3;
};

const heroColors = {
  NEUTRAL: '#9f8f7e',
  DRUID: 'rgb(116, 80, 8)',
  HUNTER: 'darkolivegreen',
  MAGE: '#7883bd',
  PALADIN: '#b3843b',
  PRIEST: '#a6b3b7',
  ROGUE: '#484245',
  SHAMAN: '#343663',
  WARLOCK: '#6d4075',
  WARRIOR: '#652523',
};

// So to recap:
// We don't render if the parent renders because
// we are a PureComponent (memo). We render if are props
// change and we determine that with a shallow
// comparison. Now in the case where the deck has
// changed because we added a card in the deck, we don't
// render if the quantity remains the same. We achive
// the last by implementing shouldComponentUpdate (areEqual).
const childAreEqual = (prev, next) => {
  if (prev.cardToRender !== next.cardToRender) return false;
  if (prev.deck !== next.deck && prev.quantity === next.quantity) return true;
  return false;
};
// eslint-disable-next-line react/no-multi-comp
const GridItem = memo(({
  dispatch, cardToRender, openModal, quantity, image,
}) => {
  const errorToast = useRef();

  // SSR for gatsby-image, see props below. Not using it because
  // of double image downloads. Because of the service worker.
  // Also because of defaultWidth and defaultHeight of react-window
  // it looks of on mobile. Maybe needs browser sniffing.
  // As a result, fuck it.

  // const buildTime = typeof window === 'undefined';
  return (
    <ChildContainer>
      <ActionContainer>
        {quantity && (
          <Button
            variant="icon"
            aria-label="Remove 1 card"
            data-microtip-position="bottom-left"
            role="tooltip"
            bg="paradisePink"
            onClick={() => {
              try {
                dispatch(removeCard({ card: cardToRender }));
              } catch (err) {
                if (!toast.isActive(errorToast.current)) {
                  errorToast.current = toast.error(`🔥 ${err.toString()}`);
                }
              }
            }}
          >
            <FaMinus />
          </Button>
        )}
        <Button
          variant="icon"
          aria-label={`${cardToRender.name} details`}
          data-microtip-position="bottom-left"
          role="tooltip"
          bg={heroColors[cardToRender.cardClass]}
          onClick={() => openModal(cardToRender)}
        >
          <FaSearch />
        </Button>
      </ActionContainer>
      <Img
        title={cardToRender.name}
        alt={cardToRender.name}
        style={{ opacity: getOpacity(cardToRender, quantity) }}
        fluid={image}
        // critical={buildTime}
        // fadeIn={!buildTime}
      />
    </ChildContainer>
  );
}, childAreEqual);

GridItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cardToRender: PropTypes.shape({
    name: PropTypes.string,
    cardClass: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  quantity: PropTypes.number,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
};
GridItem.defaultProps = {
  quantity: null,
};

export default GridItem;
