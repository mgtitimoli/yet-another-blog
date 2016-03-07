import express from "express";

import allRoute from "./all";
import singleRoute from "./single";

export default express.Router().use([
    allRoute,
    singleRoute
]);
