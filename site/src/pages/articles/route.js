import articlesCreateRoute from "./pages/create/route";
import articlesEditRoute from "./pages/edit/route";
import articlesListRoute from "./pages/list/route";

export default {
    path       : "articles",
    childRoutes: [
        articlesCreateRoute,
        articlesEditRoute,
        articlesListRoute
    ]/*,

    onEnter(nextState, replace) {

        replace("/articles/list");
    }*/
};
