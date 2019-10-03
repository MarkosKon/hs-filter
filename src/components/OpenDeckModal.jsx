import React, { useState, useContext, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { boxShadow } from "styled-system";
import Modal from "react-modal";
import { toast } from "react-toastify";
import sortBy from "lodash.sortby";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { Flex, Box, Centered, Heading, Button, TopRight } from "./Primitives";
import { replace } from "../ducks/deck";
import { DeckContext } from "../context/deck-context";
import { FaTrash, FaTimes } from "./Icons";
import { decode } from "../utils/enc-dec-deck";

const modalStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    border: null,
    background: "transparent",
    padding: "0"
  },
  overlay: {
    overflow: "auto",
    zIndex: 10, // due to tooltip
    backgroundColor: "rgba(0, 0, 0, 0.58)"
  }
};

Modal.setAppElement("#___gatsby");

const Container = styled(Box)`
  ${boxShadow}
  border-radius: 4px;
  position: relative;
`;

const Item = styled.li`
  display: flex;
`;

const ItemName = styled(Button)`
  font-weight: normal;
  text-align: left;
  flex-grow: 1;
  color: black;
  padding: 16px;
  background-color: transparent;
  border-bottom: 1px solid #ada9a8;
  border-radius: 0;
  :hover {
    background-color: #c7c0bc;
  }
`;

const OpenDeckModal = props => {
  const { onRequestClose, allCards } = props;
  const [code, setCode] = useState("");
  const { dispatch, decks, updateDecks } = useContext(DeckContext);
  const errorToast = useRef();
  const deckLoadedToast = useRef();

  const sortedDecks = useMemo(() => sortBy(decks, ["name"]), [decks]);

  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={modalStyles}
      closeTimeoutMS={300}
      contentLabel="Open a deck"
    >
      <Container
        my={4}
        mx={[2, 4]}
        py={6}
        px={[3, 4]}
        bg="gray"
        color="white"
        boxShadow="extreme"
      >
        <TopRight>
          <Button
            variant="transparent"
            color="white"
            aria-label="close modal"
            onClick={onRequestClose}
          >
            <FaTimes size="2x" />
          </Button>
        </TopRight>
        <Centered>
          <Box mb={4}>
            <Heading as="h1" mb={5} textAlign="center">
              Open a deck
            </Heading>
            <Box mb={3}>
              <Heading as="h3" mb={3}>
                - Enter code
              </Heading>
              <Flex
                as="form"
                flexWrap="wrap"
                onSubmit={e => {
                  e.preventDefault();
                  try {
                    const deckFromCode = decode(allCards)(code);
                    dispatch(replace(deckFromCode));
                    setCode("");
                    if (!toast.isActive(deckLoadedToast.current)) {
                      deckLoadedToast.current = toast.success(
                        "😎 Deck loaded",
                        {
                          autoClose: 1200
                        }
                      );
                    }
                    onRequestClose();
                  } catch (err) {
                    if (!toast.isActive(errorToast.current)) {
                      errorToast.current = toast.error(
                        "🤔 The code is not valid."
                      );
                    }
                  }
                }}
              >
                <Box
                  as="input"
                  type="text"
                  name="code"
                  aria-label="paste code"
                  placeholder="paste code"
                  onClick={e => e.target.select()}
                  onChange={e => setCode(e.target.value)}
                  value={code}
                  mr={2}
                  mb={[2, 0]}
                  p={2}
                />
                <Button variant="paradisePink" type="submit">
                  Open deck
                </Button>
              </Flex>
            </Box>
            <Box py={3}>
              <Heading as="h3" mb={3}>
                - or Choose from saved
              </Heading>
              <Box
                mb={5}
                minHeight={
                  sortedDecks.length * 52 > 500
                    ? "500px"
                    : `${sortedDecks.length * 52}px`
                }
              >
                {decks && decks.length > 0 ? (
                  <AutoSizer>
                    {({ width, height }) => (
                      <FixedSizeList
                        height={height}
                        itemCount={sortedDecks.length}
                        itemSize={52}
                        width={width}
                      >
                        {({ index, style }) => (
                          <Item
                            key={sortedDecks[index].id}
                            style={{ backgroundColor: "#cec7c5", ...style }}
                          >
                            <ItemName
                              variant="transparent"
                              aria-label="open deck"
                              onClick={() => {
                                dispatch(replace(sortedDecks[index]));
                                if (!toast.isActive(deckLoadedToast.current)) {
                                  deckLoadedToast.current = toast.success(
                                    `😎 "${sortedDecks[index].name}" loaded`,
                                    {
                                      autoClose: 1200
                                    }
                                  );
                                }
                                onRequestClose();
                              }}
                            >
                              {sortedDecks[index].name}
                            </ItemName>
                            <Button
                              variant="paradisePink"
                              aria-label={`delete ${sortedDecks[index].name}`}
                              data-microtip-position="left"
                              role="tooltip"
                              style={{ display: "block", borderRadius: "0" }}
                              p={4}
                              onClick={() => {
                                updateDecks(
                                  decks.filter(
                                    d => d.uuid !== sortedDecks[index].uuid
                                  )
                                );
                                toast.success(
                                  `😎 Deck "${sortedDecks[index].name}" deleted!`,
                                  {
                                    autoClose: 2000,
                                    position: toast.POSITION.TOP_LEFT
                                  }
                                );
                              }}
                            >
                              <FaTrash />
                            </Button>
                          </Item>
                        )}
                      </FixedSizeList>
                    )}
                  </AutoSizer>
                ) : (
                  <Box p={3}>You haven&apos;t saved a deck yet!</Box>
                )}
              </Box>
            </Box>
          </Box>
        </Centered>
      </Container>
    </Modal>
  );
};

OpenDeckModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OpenDeckModal;
