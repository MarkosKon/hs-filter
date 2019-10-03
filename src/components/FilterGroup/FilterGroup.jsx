/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { boxShadow } from "styled-system";

import { Flex, Box, Button } from "../Primitives";
import { FaTrash } from "../Icons";
import CommonButtons from "./CommonButtons";
import CommonContent from "./CommonContent";
import { toggleOperator, remove } from "../../ducks/live-filters";
import { LiveFilterContext } from "../../context/live-filter-context";

const Container = styled(Box)`
  ${boxShadow}
  position: relative;
  color: white;
`;

const FilterGroup = ({ filterGroup, openModal }) => {
  const {
    liveFilterGroup: { dispatch }
  } = useContext(LiveFilterContext);
  return (
    <Container parent bg="raisinBlack" py={2} px={[2, 3]} boxShadow="extreme">
      <Flex
        flexWrap="wrap"
        my={1}
        px={3}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          order={5}
          variant="paradisePink"
          aria-label="Remove group"
          data-microtip-position="bottom-left"
          role="tooltip"
          onClick={() => dispatch(remove({ object: filterGroup }))}
        >
          <FaTrash />
        </Button>
        <CommonButtons
          openModal={openModal}
          filterGroup={filterGroup}
          dispatch={dispatch}
          toggleOperator={toggleOperator}
        />
      </Flex>
      <CommonContent filterGroup={filterGroup} openModal={openModal} />
    </Container>
  );
};

FilterGroup.propTypes = {
  filterGroup: PropTypes.shape({
    type: PropTypes.string,
    operator: PropTypes.string,
    children: PropTypes.array
  }).isRequired,
  openModal: PropTypes.func.isRequired
};

export default FilterGroup;
