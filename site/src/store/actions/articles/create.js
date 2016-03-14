import articlesService from "services/articles";
import createAsyncActionCreator from "store/lib/create-async-action-creator";

export function articlesCreate(articlesService, article) {

    return articlesService.create(article);
}

export default createAsyncActionCreator(
    "ARTICLES/CREATE",
    articlesCreate.bind(undefined, articlesService)
);
