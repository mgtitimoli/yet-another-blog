import express from "express";

import getRoute from "./get";
import postRoute from "./post";
import putRoute from "./put";

export default express.Router().use("/articles", [
    getRoute,
    postRoute,
    putRoute
]);

