import React, {
  useState, useContext, useRef, useMemo,
} from 'react';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';
import Modal from 'react-modal';
import createId from 'uuid/v4';
import sortBy from 'lodash.sortby';
import { toast } from 'react-toastify';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import {
  Button, Flex, Box, Heading, Text, TopRight,
} from './Primitives';
import { FaTimes, FaSave, FaTrash } from './Icons';
import { replace } from '../ducks/live-filters';
import { predefinedPresets } from '../data/predefined-presets';
import { LiveFilterContext } from '../context/live-filter-context';

const sortedPresets = sortBy(predefinedPresets, ['name']);

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
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    overflow: 'auto',
    zIndex: 10, // due to tooltip
  },
};

const Container = styled(Box)`
  position: relative;
  border-radius: 4px;
  ${boxShadow}
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

Modal.setAppElement('#___gatsby');
const SaveLoadPresetModal = (props) => {
  const { onRequestClose } = props;
  const [filterGroupName, setFilterGroupName] = useState('');
  const filterGroupLoadedToast = useRef();
  const {
    liveFilterGroup: {
      liveFilterGroup, savedFilterGroups, setSavedFilterGroups, dispatch,
    },
  } = useContext(LiveFilterContext);

  // https://reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations
  // From what I read this is fair use case for the useMemo hook.
  const sorted = useMemo(() => sortBy(savedFilterGroups, ['name']), [savedFilterGroups]);

  return (
    <Modal
      {...props}
      style={modalStyles}
      closeTimeoutMS={300}
      contentLabel="Save or load filter groups"
    >
      <Container bg="gray" color="white" my={4} mx={[2, 4]} py={6} px={[3, 4]} boxShadow="extreme">
        <TopRight>
          <Button variant="transparent" aria-label="close modal" onClick={onRequestClose}>
            <FaTimes size="2x" />
          </Button>
        </TopRight>
        <Heading as="h1" textAlign="center" mb={5}>
          Save or load presets
        </Heading>
        <Box mb={5}>
          <Heading mb={4}>Save current</Heading>
          <Flex
            as="form"
            flexWrap="wrap"
            onSubmit={(e) => {
              e.preventDefault();
              setSavedFilterGroups([
                ...savedFilterGroups,
                { ...liveFilterGroup, name: filterGroupName, id: createId() },
              ]);
              toast.success(`😎 Preset "${filterGroupName}" saved!`, {
                autoClose: 1200,
                position: toast.POSITION.TOP_LEFT,
              });
            }}
          >
            <Flex as="label" alignItems="center">
              <Text as="strong" mr={2}>
                Name:
              </Text>
              <Box
                as="input"
                mr={2}
                p={2}
                placeholder="Preset name"
                aria-label="Preset name"
                required
                value={filterGroupName}
                onChange={e => setFilterGroupName(e.target.value)}
              />
            </Flex>
            <Button
              variant="paradisePink"
              type="submit"
              aria-label="Save preset"
              data-microtip-position="top"
              role="tooltip"
              mr={1}
            >
              <FaSave />
            </Button>
          </Flex>
        </Box>
        <Box mb={5}>
          <Heading mb={4}>Load from saved</Heading>
          <Box mb={5} minHeight={sorted.length * 52 > 500 ? '500px' : `${sorted.length * 52}px`}>
            {sorted && sorted.length > 0 ? (
              <AutoSizer>
                {({ width, height }) => (
                  <FixedSizeList
                    height={height}
                    itemCount={sorted.length}
                    itemSize={52}
                    width={width}
                  >
                    {({ index, style }) => (
                      <Item key={sorted[index].id} style={{ backgroundColor: '#cec7c5', ...style }}>
                        <ItemName
                          variant="transparent"
                          aria-label="Open filter group"
                          onClick={() => {
                            dispatch(replace(sorted[index]));
                            if (!toast.isActive(filterGroupLoadedToast.current)) {
                              filterGroupLoadedToast.current = toast.success(
                                `😎 Filter group "${sorted[index].name}" loaded!`,
                                {
                                  autoClose: 1200,
                                  position: toast.POSITION.TOP_LEFT,
                                },
                              );
                            }
                            onRequestClose();
                          }}
                        >
                          {sorted[index].name}
                        </ItemName>
                        <Button
                          variant="paradisePink"
                          aria-label={`delete ${sorted[index].name}`}
                          data-microtip-position="left"
                          role="tooltip"
                          style={{ display: 'block', borderRadius: 0 }}
                          p={4}
                          onClick={() => {
                            setSavedFilterGroups(
                              savedFilterGroups.filter(fg => fg.id !== sorted[index].id),
                            );
                            toast.success(`😎 Filter group "${sorted[index].name}" deleted!`, {
                              autoClose: 1200,
                              position: toast.POSITION.TOP_LEFT,
                            });
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
              <Box p={3}>You haven&apos;t saved a filter group yet!</Box>
            )}
          </Box>
        </Box>
        <Box mb={5} minHeight="90vh">
          <Heading mb={4}>Predefined Presets </Heading>
          <AutoSizer defaultWidth={400} defaultHeight={500}>
            {({ width, height }) => (
              <FixedSizeList
                height={height}
                itemCount={sortedPresets.length}
                itemSize={52}
                width={width}
                style={{ backgroundColor: '#cec7c5' }}
              >
                {({ index, style }) => (
                  <Item style={style} key={sortedPresets[index].id}>
                    <ItemName
                      variant="transparent"
                      aria-label="Open filter group"
                      onClick={() => {
                        dispatch(replace(sortedPresets[index]));
                        if (!toast.isActive(filterGroupLoadedToast.current)) {
                          filterGroupLoadedToast.current = toast.success(
                            `😎 "${sortedPresets[index].name}" loaded!`,
                            {
                              autoClose: 1200,
                              position: toast.POSITION.TOP_LEFT,
                            },
                          );
                        }
                        onRequestClose();
                      }}
                    >
                      {sortedPresets[index].name}
                    </ItemName>
                  </Item>
                )}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Box>
      </Container>
    </Modal>
  );
};

SaveLoadPresetModal.propTypes = {
  ...Modal.propTypes,
};

export default SaveLoadPresetModal;
