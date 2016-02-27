"use strict";

var gulp = require("gulp");

gulp.task("build", [
    "build:ejs",
    "build:assets"
]);
