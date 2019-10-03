import React, { useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import createId from "uuid/v4";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

import { removeCard, clear, toggleIgnoreSize } from "../../ducks/deck";
import { DeckContext } from "../../context/deck-context";
import { Flex, Box, Heading, Text, Button, TopRight } from "../Primitives";
import CardDetail from "./CardDetail";
import { FaSave, FaCopy, FaBroom, FaTimes } from "../Icons";
import { encode } from "../../utils/enc-dec-deck";
import { validateCopy } from "../../utils/deck";

const List = styled.ul`
  max-width: 500px;
  min-width: 250px;
  margin: 0;
  box-shadow: 4px 4px 16px #000000c9;
  padding: 0;
  list-style: none;

  div::selection {
    color: black;
  }
  div::-moz-selection {
    color: black;
  }
`;

const Deck = ({ openModal, closeSidebar }) => {
  const { deck, dispatch, decks, updateDecks } = useContext(DeckContext);
  const [deckName, setDeckName] = useState("");
  const errorToast = useRef();
  const deckCopiedToast = useRef();

  // when import a deck, update the deck name in the input.
  // This way, we're ready to save with a name.
  useEffect(() => {
    setDeckName(deck.name);
  }, [deck.name]);

  return (
    <Flex bg="#gray" color="white" flexDirection="column" minHeight="100%">
      <TopRight style={{ padding: 0 }}>
        <Button
          variant="transparent"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        >
          <FaTimes size="2x" />
        </Button>
      </TopRight>
      <Box px={[3, 4]} py={3} mt={4}>
        <Heading mb={3}>
          <Text as="span">Current deck </Text>
        </Heading>
        <Flex flexWrap="wrap" mb={2}>
          <Text as="strong" mr={2}>
            Name:
          </Text>
          <Text>{deck.name}</Text>
        </Flex>
        <Flex flexWrap="wrap" mb={2}>
          <Text as="strong" mr={2}>
            Hero:
          </Text>
          <Text>{deck.hero}</Text>
        </Flex>
        <Flex flexWrap="wrap" mb={2}>
          <Text as="strong" mr={2}>
            Format:
          </Text>
          <Text>{deck.format}</Text>
        </Flex>
        <Flex flexWrap="wrap" mb={2}>
          <Text as="strong" mr={2}>
            Size:
          </Text>
          <Text>{deck.size}</Text>
        </Flex>
        <Flex flexWrap="wrap" mb={2}>
          <Text as="label" fontWeight="bold">
            Ignore size:
            <Text
              as="input"
              type="checkbox"
              ml={3}
              p={2}
              style={{ transform: "scale(1.5)" }}
              value={deck.ignoreSize}
              onChange={() => dispatch(toggleIgnoreSize())}
            />
          </Text>
        </Flex>
        <Box mb={4}>
          <Text as="small">
            &#40;Use this if you want to save a deck with more than 30 cards.
            You still can&apos;t copy the code though&#41;
          </Text>
        </Box>
        <Flex alignItems="center" flexWrap="wrap" mb={4}>
          <Flex
            as="form"
            flexWrap="wrap"
            mb={2}
            onSubmit={e => {
              e.preventDefault();
              updateDecks(
                decks.concat({ ...deck, name: deckName, uuid: createId() })
              );
              toast.success(`😎 Deck "${deckName}" saved!`, {
                autoClose: 2500
              });
            }}
          >
            <Flex as="label" alignItems="center" flexWrap="wrap">
              <Text as="strong" mr={2} mb={[2, 0]}>
                Name:
              </Text>
              <Box
                as="input"
                mr={3}
                mb={[2, 0]}
                p={2}
                placeholder="Deck name"
                aria-label="Deck name"
                required
                value={deckName}
                onChange={e => setDeckName(e.target.value)}
              />
            </Flex>
            <Button
              variant="paradisePink"
              type="submit"
              aria-label="Save deck"
              data-microtip-position="top"
              role="tooltip"
              mr={3}
              mb={[2, 0]}
            >
              <FaSave />
            </Button>
          </Flex>
          <Flex mb={2} flexWrap="wrap">
            <Button
              variant="paradisePink"
              aria-label="Clear deck"
              data-microtip-position="top"
              role="tooltip"
              mr={3}
              mb={[3, 0]}
              onClick={() => {
                dispatch(clear());
                setDeckName("");
              }}
            >
              <FaBroom />
            </Button>
            <Button
              variant="paradisePink"
              aria-label="Copy code"
              data-microtip-position="top"
              role="tooltip"
              mr={3}
              mb={[3, 0]}
              onClick={() => {
                try {
                  validateCopy(deck);
                  copy(encode(deck));
                  if (!toast.isActive(deckCopiedToast.current)) {
                    deckCopiedToast.current = toast.success("😎 Deck copied!", {
                      autoClose: 2500
                    });
                  }
                } catch (err) {
                  if (!toast.isActive(errorToast.current)) {
                    errorToast.current = toast.error(`🔥 ${err.toString()}`);
                  }
                }
              }}
            >
              <FaCopy />
            </Button>
            <Button
              variant="paradisePink"
              aria-label="import deck"
              mr={2}
              mb={[3, 0]}
              onClick={openModal}
            >
              Import
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box px={[3, 4]} py={3} mb={5} minHeight="100%">
        {deck.cards && deck.cards.length > 0 ? (
          <List>
            {deck.cards.map(({ card, quantity }) => (
              <CardDetail
                key={card.id}
                card={card}
                quantity={quantity}
                removeCard={() => dispatch(removeCard({ card }))}
              />
            ))}
          </List>
        ) : (
          <Text>No cards in deck</Text>
        )}
      </Box>
    </Flex>
  );
};

Deck.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired
};

export default Deck;
