import express from "express";

import db from "../../../../lib/database";
import handler from "./handler";

export default express
    .Router()
    .get("/:articleId", handler.bind(undefined, db));
