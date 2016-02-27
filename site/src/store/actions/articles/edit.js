import { createAction } from "redux-actions";

const TYPE = "ARTICLES:EDIT";

export default Object.assign(
    createAction(TYPE, ({ navigator, route }) => {

        navigator.push(route);

        return route;
    }),
    { TYPE }
);
