/* eslint-disable react/jsx-filename-extension, react/prop-types */
import React from "react";
import { ThemeProvider } from "styled-components";

import darkTheme from "./src/layouts/dark-theme";
import AppContainer from "./src/components/AppContainer";
import GlobalStyle from "./src/layouts/GlobalStyle";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "normalize.css";
import "microtip/microtip.css";
import "typeface-playfair-display";
import "typeface-open-sans";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={darkTheme}>
    <AppContainer>
      <GlobalStyle />
      {element}
    </AppContainer>
  </ThemeProvider>
);
