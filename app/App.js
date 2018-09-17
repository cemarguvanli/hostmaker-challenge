import React, { Fragment } from 'react';

import Header from 'components/Header';
import ErrorBoundary from 'components/ErrorBoundary';

import Routes from './routes';

const App = () => (
  <Fragment>
    <ErrorBoundary>
      <Header />
      { Routes }
    </ErrorBoundary>
  </Fragment>
);

export default App;
