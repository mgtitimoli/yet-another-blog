import articlesRoute from "pages/articles/route";

export default {
    path: "/",
    onEnter(nextState, replace) {

        replace("/articles");
    },
    childRoutes: [
        articlesRoute
    ]
};
