/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/index.js')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.less$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!less-loader'
          })
        )
      },
      { test: /\.png$/,    loader: "file-loader" },
      { test: /\.jpg$/,    loader: "file-loader" },
      { test: /\.gif$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css' }), // config name file of style
    new MinifyPlugin()
  ],
};
