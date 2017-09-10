// inject bundle.js into the body of the html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const injectConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  context: path.join(__dirname, '/client'),
  // bundling all file associated in ./index.js
  entry: './index.js',
  // where the bundle files will be located
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    // loaders are used to transform es6 and other code
    //  to readable syntax
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
      // { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      //  sass-loader compiles SCSS, css-loader allows us to require the SCSS
      //  and style-loader injects it to our page.
      { test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/ },
    ],
  },
  plugins: [injectConfig],
};
