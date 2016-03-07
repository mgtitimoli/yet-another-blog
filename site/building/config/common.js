"use strict";

var localLocations = require("../locations/local");

var version = require(localLocations.files.packageJson).version;

module.exports = {
    basePath: "",
    apiPath : "/api",
    version : version
};
