const webpack = require('webpack');
const path = require('path');

const paths = {
  src: path.resolve(__dirname, 'src'),
  server: path.resolve(__dirname, 'src/server'),
  client: path.resolve(__dirname, 'src/client'),
}

const config = {
  context: paths.src,
  entry: {
    server: paths.server,
    client: paths.client,
  },
  resolve: {
    modulesDirectories: ['client', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: paths.src,
      }
    ],
  },
};

module.exports = config;
