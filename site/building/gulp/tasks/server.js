import loadPlugins from "gulp-load-plugins";

import gulp from "../index";
import helpEnvVar from "../lib/help/env-var";
import helpLink from "../lib/help/link";
import helpMultiline from "../lib/help/multiline";
import helpPath from "../lib/help/path";

import environment from "../../lib/environment";

import localLocations from "../../locations/local";
import remoteLocations from "../../locations/remote";

const plugins = loadPlugins();

const apiServerUrl    = "http://localhost:3000";
const assetsServerUrl = "http://localhost:8001";

const serverHost = "localhost";
const serverPort = 80;
const serverUrl  = `http://${ serverHost }:${ serverPort }`;

const help = helpMultiline([
    "─┬ Starts an http server at " + helpLink(serverUrl),
    " ├─ files under " + helpPath("site/dist") + " are served directly",
    " ├─ requests to " + helpLink(serverUrl + remoteLocations.paths.api) + " are redirected to " + helpLink(apiServerUrl),
    " └┬ if " + helpEnvVar("NODE_ENV", "development"),
    "  └─ requests to " + helpLink(serverUrl + remoteLocations.paths.assets) + " are redirected to " + helpLink(assetsServerUrl)
]);

gulp.task("server", help, () => {

    const proxies = [
        {
            source : remoteLocations.paths.api,
            target : apiServerUrl
        }
    ];

    if (environment.isDevelopment) {
        proxies.push({
            source: remoteLocations.paths.assets,
            target: assetsServerUrl
        });
    }

    gulp.src(localLocations.dirs.dist.root)
        .pipe(plugins.webserver({
            fallback  : "index.html",
            livereload: true,
            path      : remoteLocations.paths.base,
            proxies   : proxies,
            host      : serverHost
        }));
});
