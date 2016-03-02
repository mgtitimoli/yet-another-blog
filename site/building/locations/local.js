"use strict";

var path = require("path");

var rootDir = path.join(__dirname, "../../..");
var siteDir = path.join(rootDir, "site");
var depsDir = path.join(rootDir, "node_modules");
var srcDir  = path.join(siteDir, "src");
var distDir = path.join(siteDir, "dist");

module.exports = {
    dirs: {
        deps: depsDir,
        src : srcDir,
        dist: {
            root  : distDir,
            assets: path.join(distDir, "assets")
        }
    },

    files: {
        main       : path.join(srcDir, "main.js"),
        packageJson: path.join(rootDir, "package.json")
    },

    globs: {
        ejs: srcDir + "/**/*.ejs"
    }
};
