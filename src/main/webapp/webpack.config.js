var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
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
        loader: 'babel'
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },{
        test: /\.png$/,
        loader: 'file-loader'
      },{
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'assets/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': JSON.stringify('development')
    }),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new ExtractTextPlugin('css/style.css', {allChunks: true})
  ],
};
