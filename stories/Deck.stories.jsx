/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Deck from '../src/components/Deck';
import { Centered } from '../src/components/Primitives';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const DeckDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
);
storiesOf('Deck', module)
  .addDecorator(withInfo)
  .addDecorator(DeckDecorator)
  .add('default', () => <Deck />)
  .add('inside flex', () => (
    <Centered height="100vh">
      <Deck />
    </Centered>
  ));
