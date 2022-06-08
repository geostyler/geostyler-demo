const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
let commonWebpackConfig = commonConfig;

const delayedConf = new Promise(function(resolve) {
  commonWebpackConfig.plugins = [
    ...commonWebpackConfig.plugins || [],
    new webpack.ProgressPlugin({ profile: false }),
    new webpack.DefinePlugin({
      APP_MODE: JSON.stringify(commonConfig.TARGET)
    })
  ];

  commonWebpackConfig.devServer = {
    contentBase: '.',
    useLocalIp: false,
    disableHostCheck: true,
    host: 'localhost',
    inline: true,
    port: 9090,
    publicPath: 'http://localhost:9090/'
  };
  resolve(commonWebpackConfig);
});

module.exports = new Promise((resolve) => {
  delayedConf.then((conf) => {
    resolve(conf);
  });
});
