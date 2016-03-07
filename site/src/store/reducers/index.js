import { combineReducers } from "redux-immutablejs";

import articles from "./articles";
import routing from "./routing";

export default combineReducers({
    articles,
    routing
});
