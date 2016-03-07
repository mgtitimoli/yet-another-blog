import _ from "lodash";

import createApiError from "../../../lib/api-error/create";

export const createArticleNotFoundError = createApiError.bind(undefined, {
    code   : 1100,
    message: _.template("Article not found (id: <%= articleId %>)")
});

export const createInvalidArticleError = createApiError.bind(undefined, {
    code   : 1101,
    message: _.template("Invalid article: <%= errorMessage %>")
});
