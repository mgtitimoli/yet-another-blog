"use strict";

var config = require("../config");

var basePath   = config.basePath;
var assetsPath = basePath + "/assets";

module.exports = {
    paths: {
        base  : basePath,
        assets: assetsPath
    },

    files: {
        mainBundle  : assetsPath + "/main.bundle.js",
        vendorBundle: assetsPath + "/vendor.bundle.js"
    }
};
