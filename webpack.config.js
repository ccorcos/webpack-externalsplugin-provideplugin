const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ExternalsPlugin("commonjs", ["something"]),
    new webpack.ProvidePlugin({
      require: path.join(__dirname, "require.js")
    })
  ]
};
