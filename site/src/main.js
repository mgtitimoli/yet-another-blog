import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import Application from "./controls/application";

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);
