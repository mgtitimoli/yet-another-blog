import articlesCreateRoute from "./pages/create";
import articlesEditRoute from "./pages/edit";
import articlesListRoute from "./pages/list";

export default {
    path: "articles",
    onEnter(nextState, replace) {

        replace("articles/list");
    },
    childRoutes: [
        articlesCreateRoute,
        articlesEditRoute,
        articlesListRoute
    ]
};
