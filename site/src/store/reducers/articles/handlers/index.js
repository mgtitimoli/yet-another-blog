import articlesCreateHandlers from "./create";
import articlesEditHandlers from "./edit";
import articlesFetchAllHandlers from "./fetch-all";
import articlesUpdateHandlers from "./update";

export default Object.assign(
    {},
    articlesCreateHandlers,
    articlesEditHandlers,
    articlesFetchAllHandlers,
    articlesUpdateHandlers
);
