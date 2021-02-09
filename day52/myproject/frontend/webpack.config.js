const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "static/frontend"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "templates/frontend/"),
    compress: true,
    port: 3300,
    open: true,
  },
};
