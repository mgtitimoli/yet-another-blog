import gulp from "gulp";

gulp.task("dev", [
    "build:ejs",
    "watch",
    "server",
    "webpack-dev-server"
]);
