'use strict'

const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: '#source-map',
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  }
}
