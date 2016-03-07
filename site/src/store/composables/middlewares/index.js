import { applyMiddleware } from "redux";

import loggerMiddleware from "./logger";
// import routerMiddleware from "./router";
import thunkMiddleware from "./thunk";

const middlewares = [
    thunkMiddleware,
    loggerMiddleware
    // routerMiddleware
].filter(Boolean);

export default applyMiddleware(...middlewares);
