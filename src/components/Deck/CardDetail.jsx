import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "gatsby-image";

import { Flex, Box, Button } from "../Primitives";
import { FaStar, FaTrash } from "../Icons";

const Container = styled(Flex)`
  position: relative;
`;
const ImageContainer = styled(Box)`
  position: absolute;
  top: -420px;
  right: 0;
  width: 286px;
  height: 395px;
  z-index: 2;
`;

const CardDetailsContainer = styled(Box)`
  display: flex;
  grid-column: 2;
  flex-direction: row;
  align-items: stretch;
  border: 1px solid black;
  box-sizing: border-box;
  line-height: 30px;
  min-width: 150px;
  position: relative;
`;

const CardCost = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;

const CardName = styled(Box)`
  flex: 4;
  text-align: left;
  color: white;
  overflow: hidden;
  padding: 4px 8px;
  height: 34px;
  background: linear-gradient(
        to right,
        black 0%,
        black 70%,
        rgba(255, 255, 255, 0)
      )
      30%,
    url(/resources/images/${({ tile }) => tile}) top right no-repeat;
`;

const CardQuantity = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  color: sandybrown;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CardClass = styled(Box)`
  flex: 1;
  max-width: 10px;
`;

const heroColors = {
  DRUID: "rgb(116, 80, 8)",
  HUNTER: "darkolivegreen",
  MAGE: "#8f95b5",
  PALADIN: "#b3843b",
  PRIEST: "#b5bbbd",
  ROGUE: "#595255",
  SHAMAN: "#343663",
  WARLOCK: "#6d4075",
  WARRIOR: "#652523"
};

const cardRarityColors = {
  COMMON: "#7a7a7a",
  FREE: "#7a7a7a",
  RARE: "blue",
  EPIC: "purple",
  LEGENDARY: "orangered"
};

const CardDetail = ({
  card: { cost, tile, rarity, name, imageUrl, cardClass, set, image },
  quantity,
  removeCard
}) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <Container as="li">
      {isFocused && (
        <ImageContainer>
          <Image
            title={name}
            alt={name}
            // a 'trick' to serve the original image
            fluid={{ ...image.childImageSharp.fluid, sizes: "290px" }}
            style={{ alignSelf: "center", width: "286px" }}
          />
        </ImageContainer>
      )}
      <Button
        variant="transparent"
        aria-label={`${name} full image`}
        data-microtip-position="top"
        role="tooltip"
        style={{ padding: 0, width: "100%" }}
        onMouseEnter={() => !isFocused && setFocused(true)}
        onMouseLeave={() => isFocused && setFocused(false)}
        onClick={() => setFocused(true)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <CardDetailsContainer data-image-url={imageUrl}>
          <CardCost bg={cardRarityColors[rarity]}>{cost}</CardCost>
          <CardName tile={tile}>{name}</CardName>
          <CardQuantity bg={set < 9 ? "umber" : "#333"} ml="-1px">
            {rarity === "LEGENDARY" ? <FaStar size="xs" /> : quantity}
          </CardQuantity>
          <CardClass
            bg={cardClass.includes("NEUTRAL") ? "white" : heroColors[cardClass]}
          />
        </CardDetailsContainer>
      </Button>

      <Button
        variant="paradisePink"
        aria-label={`remove ${name}`}
        data-microtip-position="top-left"
        role="tooltip"
        style={{ display: "block", borderRadius: "0", padding: "8px 24px" }}
        onClick={removeCard}
      >
        <FaTrash />
      </Button>
    </Container>
  );
};

CardDetail.propTypes = {
  card: PropTypes.shape({
    cost: PropTypes.number,
    tile: PropTypes.string,
    rarity: PropTypes.string,
    name: PropTypes.string,
    set: PropTypes.number,
    imageUrl: PropTypes.string,
    cardClass: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.object.isRequired
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  removeCard: PropTypes.func.isRequired
};

export default CardDetail;
