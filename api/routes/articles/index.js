import express from "express";

import deleteRoute from "./delete";
import getRoute from "./get";
import postRoute from "./post";
import putRoute from "./put";

export default express.Router().use("/articles", [
    deleteRoute,
    getRoute,
    postRoute,
    putRoute
]);

