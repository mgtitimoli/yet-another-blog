import articlesCreateRoute from "./pages/create";
import articlesEditRoute from "./pages/edit";
import articlesListRoute from "./pages/list";

export default {
    path       : "articles",
    childRoutes: [
        articlesCreateRoute,
        articlesEditRoute,
        articlesListRoute
    ],

    onEnter(nextState, replace) {

        replace("/articles/list");
    }
};
