import React from 'react';
import ReactDOMServer from 'react-dom/server';

import context from './context';
import App from 'containers/app';

const ctx = context();

ctx.LightSpeedServerRenderer = {
  render: function(props = null) {
    return ReactDOMServer.renderToString(React.createElement(App, props));
  },
};
