import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';
import Modal from 'react-modal';
import { Card } from 'rebass';
import Image from 'gatsby-image';

import {
  Button, Box, Heading, TopRight, Text, Flex,
} from '../Primitives';
import { FaTimes } from '../Icons';
import Debug from '../Debug';

const modalStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: null,
    background: 'transparent',
    padding: '0',
  },
  overlay: {
    overflow: 'auto',
    zIndex: 10, // due to tooltip
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },
};

const Container = styled(Box)`
  position: relative;
  border-radius: 4px;
  ${boxShadow}
`;

Modal.setAppElement('#___gatsby');

const expansions = [
  'Hall Of Fame',
  'Curse Of Naxxramas',
  'Goblins Vs Gnomes',
  'Blackrock Mountain',
  'The Grand Tournament',
  'The League Of Explorers',
  'Whispers Of The Old Gods',
  'One Night In Karazhan',
  'Mean Streets Of Gadgetzan',
  "Journey To Un'goro",
  'Knights Of The Frozen Throne',
  'Kobolds And Catacombs',
  'The Witchwood',
  'The Boomsday Project',
  "Rastakhan's Rumble",
  'Rise of Shadows',
];

const typeColors = [
  {
    type: 'string',
    bg: '#9c27b0',
    color: 'white',
    accent: '#FFDBB5',
  },
  {
    type: 'number',
    bg: '#D23B58',
    color: 'white',
    accent: 'black',
  },
  {
    type: 'boolean',
    bg: '#88BB92',
    color: 'black',
    accent: '#8B0000',
  },
  {
    type: 'array',
    bg: '#FFCAB1',
    color: 'black',
    accent: 'black',
  },
  {
    type: 'object',
    bg: '#22031F',
    color: 'white',
    accent: 'white',
  },
];

const getExpansionName = (number) => {
  if (number === 98) return 'Basic';
  if (number === 99) return 'Classic';
  return expansions[number];
};

const getType = value => (Array.isArray(value) ? 'array' : typeof value);

const CardDetailsModal = (props) => {
  const { onRequestClose, card } = props;
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={modalStyles}
      closeTimeoutMS={300}
      contentLabel="Add filter or filtergroups"
    >
      {card && (
        <Container
          bg="gray"
          color="white"
          my={4}
          mx={[2, 4]}
          py={6}
          px={[3, 4]}
          boxShadow="extreme"
        >
          <TopRight>
            <Button variant="transparent" aria-label="close modal" onClick={onRequestClose}>
              <FaTimes size="2x" />
            </Button>
          </TopRight>
          <Box>
            <Flex py={3} mb={[4, 5]} flexWrap="wrap" justifyContent="center">
              <Image
                title={card.name}
                alt={card.name}
                // a 'trick' to serve the original image
                fluid={{ ...card.image.childImageSharp.fluid, sizes: '290px' }}
                style={{ alignSelf: 'center', width: '286px' }}
              />
              <Flex p={[2, 4]} flexDirection="column" justifyContent="center">
                <Heading
                  fontSize={[5, '40px']}
                  as="h1"
                  textAlign={['center', 'left']}
                  mb={5}
                  mt={[4, 0]}
                >
                  {card.name}
                </Heading>
                <Box mb={2}>
                  <Text as="strong">Class:</Text>
                  <Text as="span" ml={2} fontSize={2}>
                    {card.cardClass}
                  </Text>
                </Box>
                <Box mb={2}>
                  <Text as="strong">Type:</Text>
                  <Text as="span" ml={2} fontSize={2}>
                    {card.type}
                  </Text>
                </Box>
                <Box mb={2}>
                  <Text as="strong">Set:</Text>
                  <Text as="span" ml={2} fontSize={2}>
                    {getExpansionName(card.set)}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Heading as="h2" textAlign="center" mb={3}>
              Properties
            </Heading>
            <Flex py={3} mb={5} flexWrap="wrap">
              {Object.entries(card).map(([key, value]) => {
                if (value !== null && key !== 'image') {
                  const fieldType = getType(value);
                  const { color, bg, accent } = typeColors.find(obj => obj.type === fieldType);
                  return (
                    <Card
                      fontSize={[1, '18px']}
                      key={key}
                      p={3}
                      boxShadow="large"
                      bg={bg}
                      color={color}
                      m={1}
                      style={{ overflow: 'auto' }}
                      order={fieldType === 'object' ? 1 : 'auto'}
                    >
                      <Heading as="h3" color={accent} style={{ textDecoration: 'underline' }}>
                        {key}
                      </Heading>
                      <Text mb={2} fontSize={2}>
                        &#40;
                        {fieldType}
                        &#41;
                      </Text>
                      {fieldType === 'object' ? (
                        <Text as="pre">{JSON.stringify(value, null, 2)}</Text>
                      ) : (
                        <Text as="strong">{JSON.stringify(value)}</Text>
                      )}
                    </Card>
                  );
                }
                return null;
              })}
            </Flex>
            <Debug title="Complete code">{card}</Debug>
          </Box>
        </Container>
      )}
    </Modal>
  );
};

CardDetailsModal.propTypes = {
  ...Modal.propTypes,
  card: PropTypes.shape({
    name: PropTypes.string,
  }),
};

CardDetailsModal.defaultProps = {
  card: null,
};

export default CardDetailsModal;
