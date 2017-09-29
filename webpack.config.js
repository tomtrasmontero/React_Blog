// inject bundle.js into the body of the html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// deletes everything in the build folder and then puts in the new build file
// vs. replacing/adding additional files to the build folder.
const injectCleanPlugin = new CleanWebpackPlugin([
  'build',
]);

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
      //  sass-loader compiles SCSS, css-loader allows us to require the SCSS
      //  and style-loader injects it to our page.
      { test: /\.html$/,
        loader: ['html-loader'] },
      { test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/ },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=8192&name=./assets/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },
  plugins: [injectConfig, injectCleanPlugin],
};
