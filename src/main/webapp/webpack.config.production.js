var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: 'eslint',
        include: path.resolve(ROOT_PATH, 'app')
      }
    ],
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['react-hot','babel'],
        query: {
          stage: 0,
          plugins: []
        }
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },{
        test: /\.png$/,
        loader: 'file-loader'
      }]
  },
};
