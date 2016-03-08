import { createAction } from "redux-actions";

const TYPE = "ARTICLES/EDIT";

export default Object.assign(
    createAction(TYPE),
    { TYPE }
);
