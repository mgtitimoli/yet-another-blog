"use strict";

var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")();

var localLocations  = require("../../../locations/local");
var remoteLocations = require("../../../locations/remote");

gulp.task("build:ejs", function () {

    var tamplatesParams = {
        bundles: [
            remoteLocations.files.vendorBundle,
            remoteLocations.files.mainBundle
        ]
    };

    var options = {
        ext: ".html"
    };

    gulp.src(localLocations.globs.ejs)
        .pipe(plugins.ejs(
            tamplatesParams,
            options
        ))
        .pipe(gulp.dest(localLocations.dirs.dist.root));
});
