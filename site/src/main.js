import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import Application from "./pages/application";

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);
