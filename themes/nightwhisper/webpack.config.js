const path = require('path');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode != 'production';

  return {
    mode: argv.mode,
    devtool: devMode ? 'cheap-eval-source-map' : 'source-map',
    entry: [
      'whatwg-fetch',
      'promise-polyfill',
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
          test: /\.s?css$/,
          include: path.resolve(__dirname, 'assets'),
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'import-glob-loader',
            },
          ],
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
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
        new UglifyWebpackPlugin({ sourceMap: true })
      ],
    },
  }
}
