import articlesRoute from "pages/articles";

export default {
    path: "/",
    onEnter(nextState, replace) {

        replace("/articles");
    },
    childRoutes: [
        articlesRoute
    ]
};
