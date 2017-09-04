const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(require('./webpack.base'), {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      },
    }),
  ],
});
