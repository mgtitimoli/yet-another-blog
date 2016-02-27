"use strict";

var gulp = require("gulp");

var localLocations = require("../../../locations/local");

gulp.task("watch:ejs", function () {

    gulp.watch(localLocations.globs.ejs, [ "build:ejs" ]);
});
