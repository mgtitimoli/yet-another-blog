"use strict";

var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")();

var environment = require("../../lib/environment");

var localLocations  = require("../../locations/local");
var remoteLocations = require("../../locations/remote");

gulp.task("server", function () {

    var proxies = [
        {
            source : "/api",
            target : "http://localhost:3000"
        }
    ];

    if (environment.isDevelopment) {
        proxies.push({
            source: remoteLocations.paths.assets,
            target: "http://localhost:8001"
        });
    }

    gulp.src(localLocations.dirs.dist.root)
        .pipe(plugins.webserver({
            fallback  : "index.html",
            livereload: true,
            path      : remoteLocations.paths.base,
            proxies   : proxies,
            host      : "0.0.0.0"
        }));
});
