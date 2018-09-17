import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';

import 'sanitize.css/sanitize.css';

import App from './App';

// Import CSS reset and Global Styles
import './common/styles/global-styles.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
