import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { boxShadow } from "styled-system";

import { Flex, Box, Text, Button } from "./Primitives";
import { FaTrash, FaEdit, FaTimes } from "./Icons";
import { update, remove } from "../ducks/live-filters";
import { LiveFilterContext } from "../context/live-filter-context";
import DIYFilterForm from "./DIYFilterForm";

const Container = styled(Flex)`
  ${boxShadow}
  max-width: 700px;
`;
const TextContainer = styled(Text)`
  color: #fff;
  font-family: Open Sans, sans-serif;
  font-weight: 700;
`;

const TextSpan = styled(Text)`
  padding: 8px 16px;
  border-radius: 5px;
  margin: 4px 4px;
`;

const Filter = ({ filter }) => {
  const [editable, setEditable] = useState(false);
  const {
    liveFilterGroup: { dispatch }
  } = useContext(LiveFilterContext);

  return (
    <Container
      alignItems="center"
      flexWrap="wrap"
      bg="#35232c"
      color="black"
      boxShadow="extreme"
      py={2}
      pl={[2, 3]}
      pr={3}
    >
      <TextContainer width={3 / 4} fontSize={[2, editable ? 3 : "24px"]}>
        <Flex flexWrap="wrap">
          {editable ? (
            <Text fontWeight="normal" color="black">
              <DIYFilterForm
                initialValues={{
                  property: filter.field,
                  operation: filter.operation,
                  filterValue: filter.value
                }}
                handleSubmit={({ property, operation, filterValue }) => {
                  const object = {
                    ...filter,
                    field: property,
                    operation,
                    value: filterValue
                  };
                  dispatch(update({ object }));
                  setEditable(false);
                }}
              >
                <Button type="submit" variant="purple">
                  Update
                </Button>
              </DIYFilterForm>
            </Text>
          ) : (
            <>
              <TextSpan as="span" bg="#984f5c">
                {filter.field}
              </TextSpan>
              <TextSpan as="span" bg="paradisePink">
                {filter.operation}
              </TextSpan>
              <TextSpan as="span" bg="#7b676a">
                {filter.value.toString()}
              </TextSpan>
            </>
          )}
        </Flex>
      </TextContainer>
      <Box width={1 / 4} style={{ textAlign: "right" }}>
        {editable ? (
          <Button
            variant="purple"
            mr={2}
            aria-label="Stop editing"
            data-microtip-position="bottom-left"
            role="tooltip"
            onClick={() => setEditable(!editable)}
          >
            <FaTimes />
          </Button>
        ) : (
          <Button
            variant="purple"
            m={1}
            aria-label="Edit filter"
            data-microtip-position="bottom-left"
            role="tooltip"
            onClick={() => setEditable(!editable)}
          >
            <FaEdit />
          </Button>
        )}
        <Button
          variant="purple"
          m={2}
          aria-label="Remove filter"
          data-microtip-position="bottom-left"
          role="tooltip"
          onClick={() => dispatch(remove({ object: filter }))}
        >
          <FaTrash />
        </Button>
      </Box>
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.shape({
    type: PropTypes.string,
    field: PropTypes.string,
    operation: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ])
  }).isRequired
};

export default Filter;
