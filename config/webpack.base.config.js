const webpack = require('webpack');
const merge = require("webpack-merge");

// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this in top
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;
  return merge([
      {
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.scss$/,
              use: [
                PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                  }
                },
                'sass-loader'
              ]
            },
            {
              test: /\.jpg$/,
              use: {
                loader: 'file-loader'
              }
            }
          ]
        },
        plugins: [
          new CopyWebpackPlugin([ { from: 'src/static', to: 'static' } ]),
          new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
          }),
          new webpack.DefinePlugin({
            'process.env.VERSION': JSON.stringify(env.VERSION),
            'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
          }),
        ],
    }
  ])
};