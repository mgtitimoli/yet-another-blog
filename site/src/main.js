import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-redux";

import applicationRoute from "pages/application/route";

ReactDOM.render(
    <Router
        history={ history }
        routes={ applicationRoute }
    />,
    document.getElementById("app")
);
