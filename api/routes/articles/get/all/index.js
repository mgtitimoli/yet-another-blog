import express from "express";

import db from "../../../../database";
import handler from "./handler";

export default express
    .Router()
    .get("/", handler.bind(undefined, db));

