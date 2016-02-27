import getArticlesService from "services/articles";
import createAsyncActionCreator from "../lib/create-async-action-creator";

export function articlesCreate(articlesService, article) {

    return articlesService.create(article);
}

export default createAsyncActionCreator(
    "ARTICLES:CREATE",
    articlesCreate.bind(undefined, getArticlesService())
);
