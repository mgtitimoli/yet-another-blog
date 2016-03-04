import express from "express";

import db from "../../../lib/database";
import handler from "./handler";

export default express
    .Router()
    .post(handler.bind(undefined, db));
