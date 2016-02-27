"use strict";

var path = require("path");

var rootDir = path.join(__dirname, "../../..");
var siteDir = rootDir + "/site";
var depsDir = rootDir + "/node_modules";
var srcDir  = siteDir + "/src";
var distDir = siteDir + "/dist";

module.exports = {
    dirs: {
        deps: depsDir,
        src : srcDir,
        dist: {
            root  : distDir,
            assets: distDir + "/assets"
        }
    },

    files: {
        main       : srcDir + "/main.js",
        packageJson: rootDir + "/package.json"
    },

    globs: {
        ejs: srcDir + "/**/*.ejs"
    }
};
