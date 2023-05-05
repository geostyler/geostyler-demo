const path = require('path');
const packageLockJson = require('../package-lock.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.tsx'],
  module: {
    rules: [{
      test: /\.tsx?|\.jsx?$/,
      use: 'ts-loader',
      // eslint-disable-next-line
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader',
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: {
              'primary-color': '#162162',
              'link-color': '#162162'
            },
            javascriptEnabled: true,
          },
        },
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|ttf|eot)$/i,
      type: 'asset/resource'
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    fallback: {
      timers: require.resolve('timers-browserify'),
      stream: require.resolve('stream-browserify')
    },
    alias: {
      // uncomment for development with npm link
      // 'geostyler': path.resolve('node_modules', 'geostyler'),
      // 'geostyler-style': path.resolve('node_modules', 'geostyler-style'),
      // 'geostyler-sld-parser': path.resolve('node_modules', 'geostyler-sld-parser'),
      // 'ol': path.resolve('node_modules', 'ol'),
      // 'antd': path.resolve('node_modules', 'antd'),
      fs: false,
      path: false
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GEOSTYLER_VERSION': JSON.stringify(
        packageLockJson.packages['node_modules/geostyler'].version
      ),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Geostyler Demo',
      template: path.join(__dirname, '..', 'public', 'index.html'),
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
};
