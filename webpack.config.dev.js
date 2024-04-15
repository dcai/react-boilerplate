const path = require("path");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  devtool: "eval",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: false,
    port: 6600,
  },
});
