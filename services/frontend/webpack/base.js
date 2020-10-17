const path = require("path")
const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { ESBuildPlugin } = require("esbuild-loader")

const paths = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist")
}

module.exports = {
    target: "node",
    entry: {
        app: path.join(paths.src, "app.js")
    },
    output: {
        filename: "[name].js",
        path: paths.dist
    },
    externals: [
        nodeExternals(),
        nodeExternals({ modulesDir: "../../node_modules" })
    ],
    stats: {
        all: false,
        version: false,
        errors: true,
        errorDetails: true,
        builtAt: true
    },
    resolve: {
        alias: {
            "~": paths.src,
            "@": paths.src
        }
    },
    plugins: [new CleanWebpackPlugin(), new ESBuildPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "esbuild-loader"
            }
        ]
    }
}
