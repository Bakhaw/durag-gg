import React from 'react';

import UpdateApp from './components/UpdateApp';

import { StateProvider } from './Context';
import Router from './Router';

function App() {
  return (
    <StateProvider>
      <Router />
      <UpdateApp />
    </StateProvider>
  );
}

export default App;
