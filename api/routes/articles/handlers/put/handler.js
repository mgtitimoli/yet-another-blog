import _ from "lodash";
import httpStatus from "http-status-codes";

import createRouteHandler from "../../../../lib/create-route-handler";

export async function handleRoute(
    // dependencies
    {
        articleProps,
        createArticleNotFoundError,
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

    const { articleId } = req.params;

    const article = req.body;

    const existingArticle = db("articles").getById(articleId);

    if (!existingArticle) {
        res.status(httpStatus.NOT_FOUND);

        throw createArticleNotFoundError({
            articleId
        });
    }

    const existingProps = _.pick(
        existingArticle,
        Object.keys(article)
    );

    // PUT is idempotent
    if (_.isEqual(existingProps, article)) {
        res.status(httpStatus.NOT_MODIFIED);
    }
    else {
        const modifiedProps = Object.assign({}, article, {
            [ articleProps.MODIFICATION_TIME ]: (new Date()).toISOString()
        });

        res.status(httpStatus.OK);

        res.result = await db("articles").updateById(
            articleId,
            modifiedProps
        );
    }
}

export default createRouteHandler(handleRoute);
