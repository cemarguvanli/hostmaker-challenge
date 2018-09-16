import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Properties from 'containers/Properties';
import PropertiesRoute from 'containers/PropertiesRoute';

import NotFoundPage from 'containers/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={Properties} />
    <Route exact path="/map" component={PropertiesRoute} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
