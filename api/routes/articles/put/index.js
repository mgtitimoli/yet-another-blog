import express from "express";

import db from "../../../lib/database";
import handler from "./handler";

export default express
    .Router()
    .put(handler.bind(undefined, db));
