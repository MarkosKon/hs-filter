/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Heading, Text } from './Primitives';

const Debug = ({ title, children }) => (
  <Box>
    <Heading as="h2" mb={4} textAlign="center">
      {title}
    </Heading>
    <Text as="pre" bg="#e4e4d4" color="black" p={4} style={{ overflow: 'auto' }}>
      {JSON.stringify(children, null, 2)}
    </Text>
  </Box>
);

Debug.defaultProps = {
  title: 'object',
};

export default Debug;
