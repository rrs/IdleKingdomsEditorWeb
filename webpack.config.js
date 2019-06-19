var webpack = require('webpack');
var path = require('path');

var src = path.resolve(__dirname, 'src');
var dist = path.resolve(__dirname, 'dist');

var config = {
  entry: src +'/app.js',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test : /\.jsx?/,
        include : src,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;