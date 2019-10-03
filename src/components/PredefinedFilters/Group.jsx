import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card as BaseCard } from "rebass";
import { getLuminance, lighten, darken } from "polished";
import { color as ssColor } from "styled-system";
import createId from "uuid/v4";

import { add } from "../../ducks/live-filters";
import { LiveFilterContext } from "../../context/live-filter-context";

import { Flex, Box, Heading, Text, Button } from "../Primitives";

const darkenOrLighten = c =>
  getLuminance(c) < 0.06 ? lighten(0.15, c) : darken(0.07, c);

const Card = styled(BaseCard)`
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: ${({ bg }) => darkenOrLighten(bg)};
  }
`;

const Group = ({ group, onRequestClose, modalInitiator, bg, color }) => {
  const {
    liveFilterGroup: { dispatch }
  } = useContext(LiveFilterContext);
  return (
    <Box m={2} mb={3}>
      {group[0].field === "set" ? (
        <Heading as="h3" mb={3}>
          {group[0].field}
          <a
            href="/set-numbers-table/"
            target="_blank"
            style={{ marginLeft: "8px" }}
            color="darkTuscan"
          >
            &#40;numbers to expansion names&#41;
          </a>
        </Heading>
      ) : (
        <Heading as="h3" mb={3}>
          {group[0].field}
        </Heading>
      )}

      <Flex flexWrap="wrap">
        {group.map(filter => (
          <Button
            key={filter.id}
            fontWeight="normal"
            variant="transparent"
            style={{ padding: 0 }}
            onClick={() => {
              dispatch(
                add({
                  filterGroup: modalInitiator,
                  thingToAdd: { ...filter, id: createId() }
                })
              );
              onRequestClose();
            }}
          >
            <Card
              fontSize={[1, "18px"]}
              p={3}
              boxShadow="large"
              bg={bg}
              color={color}
              m={1}
            >
              <Text as="strong">{filter.value}</Text>
            </Card>
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

Group.propTypes = {
  ...ssColor.propTypes,
  group: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestClose: PropTypes.func.isRequired,
  modalInitiator: PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.string,
    operator: PropTypes.string,
    children: PropTypes.array
  }).isRequired
};

export default Group;
