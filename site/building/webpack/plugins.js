"use strict";

// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require("webpack");

var environment = require("../lib/environment");
var config      = require("../config");

var plugins = [
    // new ExtractTextPlugin("bundle.css", {
    //     allChunks: true
    // }),

    new webpack.DefinePlugin({
        __config: JSON.stringify(config)
    }),

    new webpack.ProvidePlugin({
        fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
    }),

    new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name     : "vendor"
    })
];

if (environment.isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

module.exports = plugins;
