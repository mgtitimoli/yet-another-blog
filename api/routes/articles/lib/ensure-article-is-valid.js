import isNotValidArticle from "../../../interactors/article/is-not-valid";

import { createInvalidArticleError } from "./api-error-creators";

export function ensureArticleIsValid(
    {
        createInvalidArticleError,
        isNotValidArticle
    },
    article
) {

    const error = isNotValidArticle(article);

    if (error) {
        throw createInvalidArticleError({
            errorMessage: error.message
        });
    }
}

export default ensureArticleIsValid.bind(undefined, {
    createInvalidArticleError,
    isNotValidArticle
});
