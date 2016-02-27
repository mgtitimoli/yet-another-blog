import { createStore } from "redux";

import combinedReducers from "./reducers";
import composedEnhacers from "./enhacers";
import initialState from "./initial-state";

export default createStore(
    combinedReducers,
    initialState,
    composedEnhacers
);
