import createLoggerMiddleware from "redux-logger";
import devTools from "remote-redux-devtools";
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

    enhacers.push(devTools({
        // hostname: "localhost",
        // port    : 8000,
        name    : "Papa"
    }));
}

export default compose(
    applyMiddleware(...middlewares),
    ...enhacers
);
