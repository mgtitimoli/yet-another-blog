import { createAction } from "redux-actions";

const TYPE = "ARTICLES/END_EDITION";

export default Object.assign(
    createAction(TYPE),
    { TYPE }
);
