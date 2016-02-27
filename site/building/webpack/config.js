"use strict";

var environment = require("../lib/environment");

var localLocations  = require("../locations/local");
var remoteLocations = require("../locations/remote");

var config = {
    entry: {
        main: [
            localLocations.files.main
        ],
        vendor: [
            "react",
            "react-router-redux"
        ]
    },
    node: {
        __dirname: true
    },
    plugins: require("./plugins"),
    output : {
        path      : localLocations.dirs.dist.assets,
        publicPath: remoteLocations.paths.assets,
        filename  : "[name].bundle.js"
    },
    resolve: {
        extensions: [ "", ".js" ],
        root      : localLocations.dirs.src
    },
    module: {
        noParse: [],
        loaders: [
            {
                test   : /\.js$/,
                loaders: [
                    "babel-loader",
                    "eslint-loader"
                ],
                exclude: [
                    localLocations.dirs.deps
                ]
            },
            {
                test   : /\.json$/,
                loaders: [ "json-loader" ]
            },
            {
                test   : /\.css$/,
                // we are passing -discardComments to disable discardComments cssnano plugin
                // that is causing css-loader/lib/processCss file to incorrectly process
                // the css, and not replacing multiple occurences of "src: url()" in the same css selector
                loaders: [ "style-loader", "css-loader?-discardComments", "postcss-loader" ]
            },
            {
                test  : /\.(png|jpg)$/,
                // inline base64 URLs for <=8k images, direct URLs for the rest
                loader: "url-loader?limit=8192"
            },
            {
                test  : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/octet-stream"
            },
            {
                test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=image/svg+xml"
            }
        ]
    },
    devServer: {
        hot   : true,
        inline: true,
        stats : { colors: true }
    },

    eslint : require("./eslint"),
    postcss: require("./postcss")
};

if (environment.isDevelopment) {
    config.devtool = "inline-source-map";
}

module.exports = config;
