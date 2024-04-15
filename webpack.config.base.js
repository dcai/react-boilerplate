const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.jsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "public/"),
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // path to your index.html file
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env.BUILD_INFO": JSON.stringify({
        commit: process.env.CI_COMMIT_SHORT_SHA || "",
        buildDate: new Date().toISOString(),
      }),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    runtimeChunk: "single",
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
