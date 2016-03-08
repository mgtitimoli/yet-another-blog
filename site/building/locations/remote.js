"use strict";

var config = require("../config");

var basePath   = config.basePath;
var apiPath    = config.apiPath;
var assetsPath = basePath + "/assets";

module.exports = {
    paths: {
        base  : basePath,
        api   : apiPath,
        assets: assetsPath
    },

    files: {
        mainBundle  : assetsPath + "/main.bundle.js",
        vendorBundle: assetsPath + "/vendor.bundle.js"
    }
};
