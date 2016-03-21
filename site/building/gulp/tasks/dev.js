import gulp from "../index";
import helpLink from "../lib/help/link";
import helpMultiline from "../lib/help/multiline";
import helpPath from "../lib/help/path";

const help = helpMultiline([
    "┬─ Builds ejs files and outputs them to " + helpPath("site/dist"),
    "├─ Builds the assets in memory",
    "├─ Starts an http server at " + helpLink("http://localhost:8001") + " to serve the assets builded in memory",
    "├─ Run server task to serve the builded ejs files in " + helpPath("site/dist"),
    "└─ Keeps watching for file modifications and re-runs the building when a change occurs"
]);

gulp.task("dev", help, [
    "build:ejs",
    "watch",
    "server",
    "webpack-dev-server"
]);
