import redirectToChildRoute from "lib/redirect-to-child-route";

import articlesCreateRoute from "./pages/create/route";
import articlesEditRoute from "./pages/edit/route";
import articlesListRoute from "./pages/list/route";
import articlesViewRoute from "./pages/view/route";

const THIS_PATH = "articles";

export default {
    path: THIS_PATH,

    childRoutes: [
        articlesCreateRoute,
        articlesEditRoute,
        articlesListRoute,
        articlesViewRoute
    ],

    onEnter({ location }, replaceLocation) {

        redirectToChildRoute(
            THIS_PATH,
            articlesListRoute,
            location,
            replaceLocation
        );
    }
};
