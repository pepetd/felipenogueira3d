const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './assets/javascripts/main.js',
    './assets/stylesheets/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'static', 'assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'assets'),
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'assets'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            'import-glob-loader',
          ],
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
  stats: {
    colors: true,
    modules: false,
  },
};
