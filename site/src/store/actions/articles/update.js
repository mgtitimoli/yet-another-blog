import articlesService from "services/articles";
import createAsyncActionCreator from "../lib/create-async-action-creator";

export function articlesUpdate(articlesService, article) {

    return articlesService.update(article);
}

export default createAsyncActionCreator(
    "ARTICLES:UPDATE",
    articlesUpdate.bind(undefined, articlesService)
);
