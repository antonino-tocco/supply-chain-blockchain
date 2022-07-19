const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }, { from: "./src/style.css", to: "style.css" }]),
    ],
    devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};