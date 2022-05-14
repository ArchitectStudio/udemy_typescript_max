const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    host: '127.0.0.1',
    port: '9099'
  }
});
