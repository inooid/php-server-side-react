import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/app';

// Fixes nested objects being passed down to props as objects, instead of strings
function parseInitialProps(props) {
  const { pages } = props;

  return Object.assign({}, props, { pages: JSON.parse(pages) });
}

const appNode = document.getElementById('app');

ReactDOM.render(
  React.createElement(App, parseInitialProps(window.__REACT_INITIAL_PROPS)),
  appNode
);
