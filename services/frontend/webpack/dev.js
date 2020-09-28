const { merge } = require("webpack-merge")
const NodemonPlugin = require("nodemon-webpack-plugin")

const baseConfig = require("./base")

const devConfig = merge(baseConfig, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    watchOptions: { poll: true },
    plugins: [new NodemonPlugin({ legacyWatch: true })]
})

const entry = Object.entries(devConfig.entry).reduce((acc, [key, value]) => {
    acc[key] = ["source-map-support/register", value]
    return acc
}, {})

devConfig.entry = entry

module.exports = devConfig
