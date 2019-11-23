/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    index: __dirname + '/src/index.ts',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          configFileName: 'tsconfig.json',
          loaders: {
            ts: 'ts-loader',
          },
          esModule: true,
        },
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    compress: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Page: path.resolve(__dirname, 'src/page/'),
      Routing: path.resolve(__dirname, 'src/routing/'),
      Store: path.resolve(__dirname, 'src/store'),
      Model: path.resolve(__dirname, 'src/initialize-config/model/'),
    },
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
