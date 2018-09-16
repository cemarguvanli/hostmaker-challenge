import React from 'react';

import Header from 'components/Header';

import Routes from './routes';

const App = () => (
  <div>
    <Header />
    <div>
      { Routes }
    </div>
  </div>
);

export default App;
