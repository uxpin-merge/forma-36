const path = require('path');
const webpack = require('webpack');
const postcssOptions = require('./packages/forma-36-react-components/tools/postcss.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: { postcssOptions },
          },
        ],
      },
      {
        loader: require.resolve('babel-loader', {
          paths: ['./node_modules/@uxpin/merge-cli'],
        }),
        test: /\.js?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
            require.resolve('@babel/preset-react', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
          ],
        },
      },
    ],
  },
};
