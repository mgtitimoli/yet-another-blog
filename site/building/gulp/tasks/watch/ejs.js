import gulp from "gulp";

import localLocations from "../../../locations/local";

gulp.task("watch:ejs", () => {

    gulp.watch(localLocations.globs.ejs, [ "build:ejs" ]);
});
