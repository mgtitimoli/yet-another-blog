import httpStatus from "http-status-codes";

import createRouteHandler from "../../../../../lib/create-route-handler";

export function handleRoute(
    // dependencies
    {
        createArticleNotFoundError,
        ensureRequest,
        db
    },
    req, res
) {

    try {
        ensureRequest(req);
    }
    catch (apiError) {
        res.status(httpStatus.BAD_REQUEST);

        throw apiError;
    }

    const { articleId } = req.params;

    const article = db("articles").getById(articleId);

    if (!article) {
        res.status(httpStatus.NOT_FOUND);

        throw createArticleNotFoundError({
            articleId
        });
    }

    res.status(httpStatus.OK);

    res.result = article;
}

export default createRouteHandler(handleRoute);
