const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(require('./webpack.base'), {
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true,
        },
      },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
  }),
  ],
});
