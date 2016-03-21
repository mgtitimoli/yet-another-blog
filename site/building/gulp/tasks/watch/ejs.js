import gulp from "../../index";

import localLocations from "../../../locations/local";

gulp.task("watch:ejs", false, () => {

    gulp.watch(localLocations.globs.ejs, [ "build:ejs" ]);
});
