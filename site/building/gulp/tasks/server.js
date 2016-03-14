import gulp from "gulp";
import loadPlugins from "gulp-load-plugins";

import environment from "../../lib/environment";

import localLocations from "../../locations/local";
import remoteLocations from "../../locations/remote";

const plugins = loadPlugins();

gulp.task("server", () => {

    const proxies = [
        {
            source : remoteLocations.paths.api,
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
