import express from "express";

import db from "../../../../../lib/database";
import ensureIsUuid from "../../../../../lib/ensure-is-uuid";
import { createArticleNotFoundError } from "../../../lib/api-error-creators";

import ensureRequest from "./ensure-request";
import handler from "./handler";

export default express
    .Router()
    .get("/:articleId", handler.bind(undefined, {
        createArticleNotFoundError,
        db,
        ensureRequest: ensureRequest.bind(undefined, {
            ensureIsUuid
        })
    }));
