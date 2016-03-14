import _ from "lodash";

import articlesService from "services/articles";
import createAsyncActionCreator from "store/lib/create-async-action-creator";

export function articlesUpdate(articlesService, article) {

    return articlesService.update(article.id, _.pick(article, [
        "title",
        "content"
    ]));
}

export default createAsyncActionCreator(
    "ARTICLES/UPDATE",
    articlesUpdate.bind(undefined, articlesService)
);
