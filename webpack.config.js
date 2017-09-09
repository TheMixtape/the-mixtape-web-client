const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
