const webpack = require('webpack');
const path = require('path');


const browserConfig = {
  entry: './src/browser/index.js',

  //
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',

  //
  output: {
    filename: 'server.build.js',
    libraryTarget: 'commonjs2'
  },

  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
};

module.exports = [ browserConfig, serverConfig, ];