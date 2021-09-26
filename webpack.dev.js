const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: "/\.js$/",
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: "./src/client/index.html",
      filename: "./index.html"
    }),
    // new CleanWebpackPlugin({
    //   dry: true,
    //   verbose: true,
    //   cleanStaleWebpackAssets: true,
    //   protectWebpackAssets: false
    // })
  ]
}