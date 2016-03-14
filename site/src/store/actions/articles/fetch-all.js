import articlesService from "services/articles";
import createAsyncActionCreator from "store/lib/create-async-action-creator";

export function articlesFetchAll(articlesService) {

    return articlesService.fetchAll();
}

export default createAsyncActionCreator(
    "ARTICLES/FETCH_ALL",
    articlesFetchAll.bind(undefined, articlesService)
);
