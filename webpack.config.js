var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public")
    },
    module : {
      rules : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        }
      ]
    }
  };
  
  module.exports = config;
  