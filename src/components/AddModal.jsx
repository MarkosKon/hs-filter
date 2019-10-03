import React, { useRef, useEffect, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Modal from "react-modal";
import ReactSelect from "react-select";
import { boxShadow } from "styled-system";
import createId from "uuid/v4";
import { Card as BaseCard } from "rebass";
import { getLuminance, lighten, darken } from "polished";

import { Button, Box, Heading, TopRight, Flex, Text } from "./Primitives";
import { FaTimes } from "./Icons";
import { add, addGroup } from "../ducks/live-filters";
import { LiveFilterContext } from "../context/live-filter-context";
import DIYFilterForm from "./DIYFilterForm";
import PredefinedFilters from "./PredefinedFilters";
import { selectStyles } from "../layouts/react-select-styles";
import { predefinedFilterGroups } from "../data/predefined-filter-groups";

const darkenOrLighten = c =>
  getLuminance(c) < 0.06 ? lighten(0.15, c) : darken(0.07, c);

const Card = styled(BaseCard)`
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: ${({ bg }) => darkenOrLighten(bg)};
  }
`;

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

const Container = styled(Box)`
  ${boxShadow}
  position: relative;
  border-radius: 4px;
`;

Modal.setAppElement("#___gatsby");

const AddModal = props => {
  const { modalInitiator, onRequestClose } = props;
  const {
    liveFilterGroup: { dispatch }
  } = useContext(LiveFilterContext);

  // eslint-disable-next-line no-use-before-define
  const data = useStaticQuery(addModalQuery);
  const {
    heroes,
    rarities,
    sets,
    races,
    mechanics,
    factions,
    costs,
    ratings,
    types,
    extras
  } = data.allJsonJson.edges[0].node;

  const predefinedFilters = [
    ...heroes,
    ...rarities,
    ...sets,
    ...races,
    ...mechanics,
    ...factions,
    ...costs,
    ...ratings,
    ...types,
    ...extras
  ];
  const groups = [
    heroes,
    rarities,
    sets,
    races,
    mechanics,
    factions,
    costs,
    ratings,
    types,
    extras
  ];

  const predefinedFilterOptions = useRef();
  useEffect(() => {
    predefinedFilterOptions.current = predefinedFilters.map(object => {
      const { field, operation, value } = object;
      return {
        label: `${field} ${operation} ${value}`,
        value,
        object
      };
    });
  }, [predefinedFilters]);
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={modalStyles}
      closeTimeoutMS={300}
      contentLabel="Add filter or filtergroups"
    >
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
          <Button
            variant="transparent"
            aria-label="close modal"
            onClick={onRequestClose}
          >
            <FaTimes size="2x" />
          </Button>
        </TopRight>
        <Box>
          <Heading as="h1" textAlign="center" pb={4}>
            Add Group or Filter
          </Heading>
          <Box py={3} mb={4}>
            <Heading as="h2" mb={4}>
              1&#41; Empty group
            </Heading>
            <Button
              variant="paradisePink"
              onClick={() => {
                const toAdd = {
                  id: createId(),
                  type: "GROUP",
                  operator: "AND",
                  children: []
                };
                dispatch(
                  add({
                    filterGroup: modalInitiator,
                    thingToAdd: toAdd
                  })
                );
                onRequestClose();
              }}
            >
              Add empty group
            </Button>
          </Box>
          <Box py={3} mb={4}>
            <Heading as="h2" mb={4}>
              2&#41; Predefined groups
            </Heading>
            <Flex flexWrap="wrap">
              {predefinedFilterGroups.map(filterGroup => (
                <Button
                  key={filterGroup.id}
                  fontWeight="normal"
                  variant="transparent"
                  style={{ padding: 0 }}
                  onClick={() => {
                    dispatch(
                      addGroup({
                        filterGroup: modalInitiator,
                        thingToAdd: filterGroup
                      })
                    );
                    onRequestClose();
                  }}
                >
                  <Card
                    fontSize={[1, "18px"]}
                    p={3}
                    boxShadow="large"
                    bg="#FFCAB1"
                    color="black"
                    m={1}
                  >
                    <Text as="strong">{filterGroup.name}</Text>
                  </Card>
                </Button>
              ))}
            </Flex>
          </Box>
          <Box py={3} mb={4}>
            <Heading as="h2" mb={4}>
              3&#41; DIY Filter
            </Heading>
            <DIYFilterForm
              handleSubmit={({ property, operation, filterValue }) => {
                const thingToAdd = {
                  type: "FILTER",
                  id: createId(),
                  field: property,
                  operation,
                  value: filterValue
                };
                dispatch(add({ filterGroup: modalInitiator, thingToAdd }));
                onRequestClose();
              }}
            >
              <Button type="submit" variant="paradisePink">
                Add DYI filter
              </Button>
            </DIYFilterForm>
          </Box>
          <Box py={3} mb={4}>
            <Heading as="h2" mb={4}>
              4&#41; Predefined Filters
            </Heading>
            <Box maxWidth="400px" color="black">
              <ReactSelect
                aria-label="Predefined filters"
                placeholder="Predefined filters"
                styles={selectStyles}
                options={predefinedFilterOptions.current}
                onChange={({ object }) => {
                  dispatch(
                    add({ filterGroup: modalInitiator, thingToAdd: object })
                  );
                  onRequestClose();
                }}
              />
            </Box>
            <PredefinedFilters
              groups={groups}
              onRequestClose={onRequestClose}
              modalInitiator={modalInitiator}
            />
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

AddModal.propTypes = {
  ...Modal.propTypes
};

const addModalQuery = graphql`
  query addModal {
    allJsonJson {
      edges {
        node {
          heroes {
            id
            field
            operation
            value
          }
          rarities {
            id
            field
            operation
            value
          }
          sets {
            id
            field
            operation
            value
          }
          races {
            id
            field
            operation
            value
          }
          mechanics {
            id
            field
            operation
            value
          }
          factions {
            id
            field
            operation
            value
          }
          costs {
            id
            field
            operation
            value
          }
          ratings {
            id
            field
            operation
            value
          }
          types {
            id
            field
            operation
            value
          }
          extras {
            id
            field
            operation
            value
          }
        }
      }
    }
  }
`;

export default AddModal;
