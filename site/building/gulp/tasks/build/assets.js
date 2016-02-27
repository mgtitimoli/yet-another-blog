"use strict";

var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")();

var runWebpack = require("../../../webpack/run");

gulp.task("build:assets", function (onTaskDone) {

    runWebpack(function onWebPackDone(err, stats) {

        var gutil = plugins.util;

        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            // colors      : $.util.colors.supportsColor,
            colors      : true,
            hash        : true,
            version     : true,
            timings     : true,
            chunks      : true,
            chunkModules: true,
            cached      : true,
            cachedAssets: true
        }));

        onTaskDone();
    });
});
