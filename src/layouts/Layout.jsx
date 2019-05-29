import React from 'react';
import PropTypes from 'prop-types';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Box } from '../components/Primitives';
import SimpleNavbar from '../components/SimpleNavbar';

// Prevent fontawesome from dynamically adding its css since
// we do it in gatsby-browser / gatsby-ssr.
// https://github.com/FortAwesome/react-fontawesome/issues/134
config.autoAddCss = false;

const Layout = ({ children }) => (
  <>
    <SimpleNavbar />
    <Box>{children}</Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
