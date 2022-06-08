const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
let commonWebpackConfig = commonConfig;

commonWebpackConfig.plugins = [
  ...commonWebpackConfig.plugins || [],
  new webpack.DefinePlugin({
    APP_MODE: JSON.stringify(commonConfig.TARGET)
  })
];

commonWebpackConfig.stats = {
  errorDetails: true
};

commonWebpackConfig.devServer = {
  host: 'localhost',
  server: {
    type: 'https'
  },
  port: 9090,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

module.exports = commonWebpackConfig;
