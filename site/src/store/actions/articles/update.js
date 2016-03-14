import _ from "lodash";

import articlesService from "services/articles";
import createAsyncActionCreator from "store/lib/create-async-action-creator";

export async function articlesUpdate(articlesService, article) {

    const modifiedArticle = await articlesService.update(
        article.id,
        _.pick(article, [
            "title",
            "content"
        ]
    ));

    return modifiedArticle ?
        modifiedArticle :
        article;
}

export default createAsyncActionCreator(
    "ARTICLES/UPDATE",
    articlesUpdate.bind(undefined, articlesService)
);
