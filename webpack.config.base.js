const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.jsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "public/"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true,
      meta: {
        version: process.env.GITHUB_SHA || "",
        buildDate: new Date().toISOString(),
      },
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env": JSON.stringify({
        github: {
          commit_sha: process.env.GITHUB_SHA || "",
        },
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
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
