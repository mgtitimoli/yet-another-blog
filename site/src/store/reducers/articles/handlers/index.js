import articlesCreateHandlers from "./create";
import articlesFetchHandlers from "./fetch";
import articlesFetchAllHandlers from "./fetch-all";
import articlesUpdateHandlers from "./update";

export default Object.assign(
    {},
    articlesCreateHandlers,
    articlesFetchHandlers,
    articlesFetchAllHandlers,
    articlesUpdateHandlers
);
