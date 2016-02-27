"use strict";

var gulp = require("gulp");

gulp.task("dev", [
    "build:ejs",
    "watch",
    "server",
    "webpack-dev-server"
]);
