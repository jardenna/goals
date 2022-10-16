const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const prodMode = process.env.NODE_ENV === 'production';

let mode = 'development';
let target = 'web';

const eslintOptions = {
  failOnError: false,
  failOnWarning: false,
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
  plugins.push(new ESLintPlugin(eslintOptions));
  plugins.push(new ReactRefreshPlugin());
}

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    // output path is required for `clean-webpack-plugin`'
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    // this places all images processed in an image folder
    assetModuleFilename: 'images/[name][ext]',
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
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
};
