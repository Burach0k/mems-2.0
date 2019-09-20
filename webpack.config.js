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
    // globalObject: 'this',
    // chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // configFileName: 'tsconfig.json',
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js/,
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
      Page: path.resolve(__dirname, 'src/Page/'),
    },
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin(),
  ]
};
