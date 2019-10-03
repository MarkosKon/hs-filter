import React from "react";
import PropTypes from "prop-types";

import { Flex } from "../Primitives";
import Group from "./Group";

const groupColors = [
  { bg: "#9c27b0", color: "white" },
  { bg: "#BEB2C8", color: "black" },
  { bg: "#D7D6D6", color: "black" },
  { bg: "#F8F4E3", color: "black" },
  { bg: "#bb3c5d", color: "white" },
  { bg: "#88BB92", color: "black" },
  { bg: "#197278", color: "white" },
  { bg: "#22031F", color: "white" },
  { bg: "#A5BE00", color: "black" },
  { bg: "#FFCAB1", color: "black" }
];

const PredefinedFilters = ({ onRequestClose, groups, modalInitiator }) => (
  <Flex flexWrap="wrap" mt={3}>
    {groups.map((group, index) => (
      <Group
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        group={group}
        onRequestClose={onRequestClose}
        modalInitiator={modalInitiator}
        bg={groupColors[index].bg}
        color={groupColors[index].color}
      />
    ))}
  </Flex>
);

PredefinedFilters.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.array).isRequired,
  modalInitiator: PropTypes.shape({
    type: PropTypes.string
  }).isRequired
};

export default PredefinedFilters;
