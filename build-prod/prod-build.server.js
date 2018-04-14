/* eslint-disable */

var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin')
var config = require('./webpack.config');

var compiler = webpack(config)
compiler.apply(new ProgressPlugin((percentage, msg) => {
    console.log((percentage * 100) + '%', msg);
 }))

 compiler.run((err, stats) => {
     if (err) return reject(err);
     console.log(stats)
 })