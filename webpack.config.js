const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const prodMode = process.env.NODE_ENV === 'production';

let mode = 'development';
let target = 'web';

const eslintOptions = {
  failOnError: false,
  emitWarning: true,
  overrideConfigFile: '.eslintrc.js',
  extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
  eslintPath: require.resolve('eslint'),
};

const plugins = [
  new CleanWebpackPlugin(),

  new MiniCssExtractPlugin({
    filename: !prodMode ? '[name].css' : '[name].[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico',
  }),
];

if (prodMode) {
  mode = 'production';
  target = 'browserslist'; // to fix temporary hmr problem for scss
} else {
  // only enable hot in development
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new ESLintPlugin(eslintOptions));
}

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    // this places all images processed in an image folder
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins,
  target,
  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, '../../dist/client'),
    },
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
};
