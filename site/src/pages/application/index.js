import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-redux";

import store from "store";

import applicationRoute from "./route";

export default class Application extends Component {

    static displayName = Application.name;

    render() {

        return (
            <Provider store={ store }>
                <Router
                    history={ history }
                    routes={ applicationRoute }
                />
            </Provider>
        );
    }
}
