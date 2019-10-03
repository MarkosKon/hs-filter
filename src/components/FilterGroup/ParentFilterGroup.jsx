import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';
import { useTransition, animated } from 'react-spring';
import Sidebar from '../react-sidebar-custom/sidebar';

import OpenDeckModal from '../OpenDeckModal';
import {
  Button, Flex, Box, Heading, Centered,
} from '../Primitives';
import { FaFilter, FaTimes, FaEllipsisV } from '../Icons';

import CommonButtons from './CommonButtons';
import CommonContent from './CommonContent';
import Deck from '../Deck';

const Container = styled(Flex)`
  ${boxShadow}
  position: sticky;
  top: 0;
  z-index: 9;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  overflow: auto;
`;

const Overlay = styled.div`
  /* background-color: rgba(0, 0, 0, 0.58); */
  height: 100%;
`;

const AnimatedDropdown = animated(Dropdown);

const ParentFilterGroup = ({
  filterGroup, openModal, openGroupModal, allCards,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const onSetOpen = open => setSidebarOpen(open);

  const [openDeckModal, setOpenDeckModal] = useState(false);

  const [filtersVisible, setFiltersVisible] = useState(false);

  const parentTransitions = useTransition(filtersVisible, null, {
    from: { transform: 'translateY(-100%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(-110%)' },
  });
  return (
    <>
      <Container
        bg="gray"
        p={[2, 2, 3]}
        flexWrap="wrap"
        justifyContent="flex-end"
        alignItems="center"
      >
        <OpenDeckModal
          isOpen={openDeckModal}
          onRequestClose={() => setOpenDeckModal(false)}
          allCards={allCards}
        />
        <Sidebar
          sidebar={
            <Deck openModal={() => setOpenDeckModal(true)} closeSidebar={() => onSetOpen(false)} />
          }
          open={sidebarOpen}
          onSetOpen={onSetOpen}
          styles={{ sidebar: { background: '#3C3C3C', position: 'fixed', zIndex: 11 } }}
        >
          <Centered alignItems="flex-start">
            <Button
              variant="paradisePink"
              ml={2}
              aria-label="Show deck"
              data-microtip-position="right"
              role="tooltip"
              onClick={() => setSidebarOpen(true)}
            >
              Deck
            </Button>
          </Centered>
        </Sidebar>
        <Heading mr={[2, 2, 3]} color="white" fontSize={[2, 2, 5]}>
          {filterGroup.name}
        </Heading>
        <Button
          variant="paradisePink"
          aria-label="Open filters"
          data-microtip-position="bottom-left"
          role="tooltip"
          onClick={() => setFiltersVisible(!filtersVisible)}
        >
          <FaFilter />
        </Button>
      </Container>
      {parentTransitions.map(
        ({ item, key, props }) => item && (
        <AnimatedDropdown key={key} style={props} role="dialog">
          <Box bg="gray" color="white" py={2} px={[2, 3]}>
            <Flex flexWrap="wrap" my={1} px={3} alignItems="center" justifyContent="flex-end">
              <Heading mr="auto" fontSize={[4, 5]} width={[1, 'auto']} mb={[3, 0]}>
                {filterGroup.name}
              </Heading>
              <Button
                order={1}
                variant="paradisePink"
                mr={3}
                aria-label="Save or load presets"
                data-microtip-position="bottom-left"
                role="tooltip"
                onClick={openGroupModal}
              >
                <FaEllipsisV />
              </Button>
              <Button
                order={4}
                variant="paradisePink"
                aria-label="Close filters"
                data-microtip-position="bottom-left"
                role="tooltip"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                <FaTimes />
              </Button>
              <CommonButtons openModal={openModal} filterGroup={filterGroup} />
            </Flex>
            <CommonContent isParent filterGroup={filterGroup} openModal={openModal} />
          </Box>
          <Overlay onClick={() => setFiltersVisible(false)} />
        </AnimatedDropdown>
        ),
      )}
    </>
  );
};

ParentFilterGroup.propTypes = {
  filterGroup: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    operator: PropTypes.string,
    children: PropTypes.array,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  openGroupModal: PropTypes.func.isRequired,
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ParentFilterGroup;
