import articlesCreateHandlers from "./create";
import articlesEditHandlers from "./edit";
import articlesUpdateHandlers from "./update";

export default Object.assign(
    {},
    articlesCreateHandlers,
    articlesEditHandlers,
    articlesUpdateHandlers
);
