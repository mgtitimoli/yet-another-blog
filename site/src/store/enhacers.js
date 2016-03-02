import createLoggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {
    applyMiddleware,
    compose
} from "redux";

import * as environment from "../lib/environment";

// import { Iterable } from "immutable";

let middlewares = [
    thunkMiddleware
];

let enhacers = [];

if (environment.isDevelopment()) {
    middlewares.push(createLoggerMiddleware({
        stateTransformer(state) {

            return state.toJS();

            // return Iterable.isIterable(state) ?
            //     state.toJS() :
            //     state;
        }
    }));

    if (window.devToolsExtension) {
        enhacers.push(window.devToolsExtension);
    }
}

export default compose(
    applyMiddleware(...middlewares),
    ...enhacers
);
