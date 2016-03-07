import httpStatus from "http-status-codes";

import createRouteHandler from "../../../../lib/create-route-handler";

export async function handleRoute(
    // dependencies
    {
        articleProps,
        db,
        ensureRequest
    },
    req, res
) {

    try {
        ensureRequest(req);
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST);

        throw error;
    }

    const article = Object.assign({}, req.body, {
        [ articleProps.CREATION_TIME ]: (new Date()).toISOString()
    });

    res.status(httpStatus.CREATED);

    res.result = await db("articles").insert(article);
}

export default createRouteHandler(handleRoute);
