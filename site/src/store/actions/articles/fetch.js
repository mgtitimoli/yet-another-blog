import articlesService from "services/articles";
import createAsyncActionCreator from "../lib/create-async-action-creator";

export function articlesFetch(articlesService, articleId) {

    return articlesService.fetch(articleId);
}

export default createAsyncActionCreator(
    "ARTICLES/FETCH",
    articlesFetch.bind(undefined, articlesService)
);
