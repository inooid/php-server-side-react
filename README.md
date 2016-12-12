PHP Server Side React with Webpack
==================================

This is an experiment to try and get the most simple possible PHP serverside rendering with React and Webpack.

Requirements
------------

* php `^5.3.3`
* composer `^1.2.0`
* node `^6.0.0`
* npm `^3.0.0`

Getting Started
---------------

```shell
$ git clone https://github.com/inooid/php-server-side-react.git
$ cd php-server-side-react
$ composer install
$ npm install  # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start    # Compile and watch for changes

# open a new terminal window
$ npm run php:start
$ open http://localhost:8000
```

How it works
------------

1. `npm start` compiles the `/src` into a `build/client.js` and `build/server.js`
2. The `index.php` checks using [PHPExecJS](https://github.com/nacmartin/phpexecjs) what the best runtime is that is available (node or php-v8js)
3. The php file will locate the `build/server.js` and [renders the components to string](https://github.com/inooid/php-server-side-react/blob/master/index.php#L26-L37) with the provided props.
4. It will then print the HTML file including the [initial props](https://github.com/inooid/php-server-side-react/blob/master/index.php#L50-L52)
5. It will then include the `build/client.js` that will pick up the initial props bound to `window.__REACT_INITIAL_PROPS` and render the client side part, including event handlers.
