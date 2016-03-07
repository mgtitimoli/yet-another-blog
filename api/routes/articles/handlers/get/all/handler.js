import httpStatus from "http-status-codes";

import createRouteHandler from "../../../../../lib/create-route-handler";

export function handleRoute(
    // dependencies
    {
        db
    },
    req, res
) {

    const articles = db("articles").value();

    if (!articles.length) {
        res.status(httpStatus.NO_CONTENT);
    }
    else {
        res.status(httpStatus.OK);

        res.result = articles;
    }
}

export default createRouteHandler(handleRoute);
