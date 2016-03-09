import articlesCreateHandlers from "./create";
import articlesEditHandlers from "./edit";
import articlesEndEditionHandlers from "./end-edition";
import articlesFetchHandlers from "./fetch";
import articlesFetchAllHandlers from "./fetch-all";
import articlesUpdateHandlers from "./update";

export default Object.assign(
    {},
    articlesCreateHandlers,
    articlesEditHandlers,
    articlesEndEditionHandlers,
    articlesFetchHandlers,
    articlesFetchAllHandlers,
    articlesUpdateHandlers
);
