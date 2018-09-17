import React, { Fragment } from 'react';

import Header from 'components/Header';

import Routes from './routes';

const App = () => (
  <Fragment>
    <Header />
    { Routes }
  </Fragment>
);

export default App;
