import redirectToChildRoute from "lib/redirect-to-child-route";

import articlesRoute from "pages/articles/route";

import Application from "./index";

const THIS_PATH = "/";

export default {
    component  : Application,
    path       : THIS_PATH,
    childRoutes: [
        articlesRoute
    ],

    onEnter({ location }, replaceLocation) {

        redirectToChildRoute(
            THIS_PATH,
            articlesRoute,
            location,
            replaceLocation
        );
    }
};
