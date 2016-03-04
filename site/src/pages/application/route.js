import articlesRoute from "pages/articles/route";

import Application from "./index";

export default {
    component  : Application,
    path       : "/",
    childRoutes: [
        articlesRoute
    ],

    onEnter(nextState, replace) {

        replace("/articles");
    }
};
