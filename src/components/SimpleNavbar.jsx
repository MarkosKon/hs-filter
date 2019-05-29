import React from 'react';
import styled from 'styled-components';

import Link from './Link';
import { Flex, Box, Text } from './Primitives';

const List = styled(Flex)`
  list-style: none;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SimpleNavbar = () => (
  <Box bg="raisinBlack" color="white" py={3}>
    <List as="ul">
      <Text as="li" mr={3}>
        <Link variant="paradisePink" to="/">
          Home
        </Link>
      </Text>
      <Text as="li" mr={3}>
        <Link variant="paradisePink" to="/help/">
          Help
        </Link>
      </Text>
      <Text as="li" mr={3}>
        <Link variant="paradisePink" to="/credits/">
          Credits
        </Link>
      </Text>
    </List>
  </Box>
);

export default SimpleNavbar;
