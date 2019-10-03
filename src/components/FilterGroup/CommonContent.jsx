/* eslint-disable import/no-cycle */
import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import { Box, Text, Button } from "../Primitives";
import FilterGroup from "./FilterGroup";
import { toggleOperator } from "../../ducks/live-filters";
import { LiveFilterContext } from "../../context/live-filter-context";
import Filter from "../Filter";
import { hasAndOperator, isGroup } from "../../utils/compare";
import { FaSync } from "../Icons";

const Operator = ({ filterGroup, isParent }) => (
  <Text as="span" fontSize={5} fontWeight="bold" bg={isParent && "gray"}>
    <Box
      as="span"
      py={2}
      px={3}
      my={3}
      bg="purple"
      style={{ display: "inline-block", minWidth: "45px", borderRadius: "5px" }}
    >
      {hasAndOperator(filterGroup) ? "AND" : "OR"}
    </Box>
  </Text>
);

Operator.propTypes = {
  filterGroup: PropTypes.shape({
    type: PropTypes.string,
    operator: PropTypes.string,
    children: PropTypes.array
  }).isRequired
};

const isLastInArray = ({ index, array }) => index !== array.length - 1;

const Content = ({ filterGroup, openModal, isParent }) => {
  const {
    liveFilterGroup: { dispatch }
  } = useContext(LiveFilterContext);
  return (
    <Box color="white" m={[2, 3]}>
      {filterGroup.children.length > 0 ? (
        filterGroup.children.map((thing, index, array) => {
          if (isGroup(thing)) {
            return (
              <Fragment key={thing.id}>
                <FilterGroup filterGroup={thing} openModal={openModal} />
                {isLastInArray({ index, array }) && (
                  <>
                    <Operator isParent={isParent} filterGroup={filterGroup} />

                    <Button
                      variant="transparent"
                      order={3}
                      mx={3}
                      aria-label="Toggle operation"
                      data-microtip-position="bottom-left"
                      role="tooltip"
                      onClick={() => dispatch(toggleOperator({ filterGroup }))}
                    >
                      <FaSync />
                    </Button>
                  </>
                )}
              </Fragment>
            );
          }
          return (
            <Fragment key={thing.id}>
              <Filter filter={thing} />
              {isLastInArray({ index, array }) && (
                <>
                  <Operator isParent={isParent} filterGroup={filterGroup} />

                  <Button
                    variant="transparent"
                    order={3}
                    mx={3}
                    aria-label="Toggle operation"
                    data-microtip-position="bottom-left"
                    role="tooltip"
                    onClick={() => dispatch(toggleOperator({ filterGroup }))}
                  >
                    <FaSync />
                  </Button>
                </>
              )}
            </Fragment>
          );
        })
      ) : (
        <Text color="white" bg="raisinBlack" p={4} fontSize={3}>
          Nothing here. Try adding some filters
        </Text>
      )}
    </Box>
  );
};

Content.propTypes = {
  ...Operator.propTypes,
  openModal: PropTypes.func.isRequired,
  isParent: PropTypes.bool
};

Content.defaultProps = {
  isParent: false
};

export default Content;
