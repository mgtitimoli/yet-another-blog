import gulp from "../../index";
import loadPlugins from "gulp-load-plugins";

import localLocations from "../../../locations/local";
import remoteLocations from "../../../locations/remote";

const plugins = loadPlugins();

gulp.task("build:ejs", false, () => {

    const tamplatesParams = {
        bundles: [
            remoteLocations.files.vendorBundle,
            remoteLocations.files.mainBundle
        ]
    };

    const options = {
        ext: ".html"
    };

    gulp.src(localLocations.globs.ejs)
        .pipe(plugins.ejs(
            tamplatesParams,
            options
        ))
        .pipe(gulp.dest(localLocations.dirs.dist.root));
});
