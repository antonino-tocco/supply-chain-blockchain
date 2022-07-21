const path = require("path");
const glob = require("glob");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const PolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new PolyfillWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: "./src/index.html", to: "index.html" },
            { from: "./src/style.css", to: "style.css" },
            { from: "./build/contracts/", to: "contracts/" },
        ]),
    ],
    devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
