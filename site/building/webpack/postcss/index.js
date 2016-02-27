"use strict";

var autoPrefixer = require("autoprefixer");
var calc         = require("postcss-calc");
var customMedia  = require("postcss-custom-media");
var conditionals = require("postcss-conditionals");
var reporter     = require("postcss-reporter");
var mixins       = require("postcss-mixins");
var nested       = require("postcss-nested");
var simpleVars   = require("postcss-simple-vars");

var path = require("path");

module.exports = {
    defaults: [
        reporter({ throwError: true }),
        mixins({
            mixinsDir: path.join(__dirname, "mixins")
        }),
        nested,
        simpleVars({
            variables: require("./variables")
        }),
        calc,
        autoPrefixer,
        customMedia({
            extensions: require("./extensions")
        }),
        conditionals
    ]
};
