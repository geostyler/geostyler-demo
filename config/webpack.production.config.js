const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');

let commonWebpackConfig = commonConfig;

commonWebpackConfig.plugins = [
  ...commonWebpackConfig.plugins || [],
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    },
    APP_MODE: JSON.stringify(commonConfig.TARGET)
  }),
  new webpack.ProgressPlugin({ profile: false })
];

commonWebpackConfig.mode = 'production';

module.exports = commonWebpackConfig;
