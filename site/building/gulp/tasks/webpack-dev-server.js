import loadPlugins from "gulp-load-plugins";

import gulp from "../index";

import runWebpackDevServer from "../../webpack/run-dev-server";

const plugins = loadPlugins();

gulp.task("webpack-dev-server", false, (/*onTaskDone*/) => {

    runWebpackDevServer("localhost", 8001, err => {

        const gutil = plugins.util;

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
