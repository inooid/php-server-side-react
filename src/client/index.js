import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/app';

const appNode = document.getElementById('app');

ReactDOM.render(
  React.createElement(App, window.__REACT_INITIAL_PROPS),
  appNode
);
