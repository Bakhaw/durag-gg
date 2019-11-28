import React from 'react';
import { createGlobalStyle } from 'styled-components';

import UpdateApp from './components/UpdateApp';

import Router from './Router';

export default function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;
    }
  `;

  return (
    <>
      <Router />
      <UpdateApp />
      <GlobalStyle />
    </>
  );
}
