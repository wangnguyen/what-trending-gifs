/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.js');
var open = require('open');
var { port } = require('./constant');

var app = express();
var compiler = webpack(config);

app.use('/assets', express.static(path.join(__dirname, '../src/assets')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('public'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('===> Run http://localhost:'+port+'/');
  open('http://localhost:'+port+'/');
});
