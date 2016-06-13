var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My New Widget',
      inject: 'body',
      cache: false,
      template: `ejs!./app/templates/app.ejs`,
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  }
};
