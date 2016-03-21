import redirectToChildRoute from "lib/redirect-to-child-route";

import articlesRoute from "pages/articles/route";

const THIS_PATH = "/";

export default {
    path       : THIS_PATH,
    childRoutes: [
        articlesRoute
    ],

    getComponent(location, callback) {

        require.ensure(
            [],
            require => callback(null, require("./index").default),
            "application"
        );
    },

    onEnter({ location }, replaceLocation) {

        redirectToChildRoute(
            THIS_PATH,
            articlesRoute,
            location,
            replaceLocation
        );
    }
};
