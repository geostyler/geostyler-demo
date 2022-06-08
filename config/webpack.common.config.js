const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  module: {
    rules: [{
      test: /\.tsx?|\.jsx?$/,
      use: 'ts-loader',
      // eslint-disable-next-line
      exclude: /node_modules\/(?!url-polyfill|@terrestris|query-string|strict-uri-encode|split-on-first|react-beautiful-dnd)/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: ['./node_modules']
          }
        }
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|ttf|eot)$/i,
      type: 'asset/resource'
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};
