const webpack = require('webpack');
const webpackCommon = require('./webpack.common');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs

module.exports = webpackMerge(webpackCommon, {
  devtool: 'cheap-module-source-map',

  devServer: {
    port: 9999,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__: false,
    }),
  ]
})
