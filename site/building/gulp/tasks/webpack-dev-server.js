"use strict";

var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")();

var runWebpackDevServer = require("../../webpack/run-dev-server");

gulp.task("webpack-dev-server", function (/*onTaskDone*/) {

    runWebpackDevServer("localhost", 8001, function onStarted(err) {

        var gutil = plugins.util;

        if (err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }

        gutil.log(
            "[webpack-dev-server]",
            "http://localhost:8001/webpack-dev-server"
        );

        // keep the server alive or continue?
        // onTaskDone();
    });
});
