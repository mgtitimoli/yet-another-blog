import express from "express";

import * as articleProps from "../../../../interactors/article/properties";
import db from "../../../../lib/database";
import ensureIsUuid from "../../../../lib/ensure-is-uuid";

import ensureArticleIsValid from "../../lib/ensure-article-is-valid";
import ensureArticleHasProps from "../../lib/ensure-article-has-props";
import { createArticleNotFoundError } from "../../lib/api-error-creators";

import ensureRequest from "./ensure-request";
import handler from "./handler";

export default express
    .Router()
    .put("/:articleId", handler.bind(undefined, {
        articleProps,
        createArticleNotFoundError,
        db,
        ensureRequest: ensureRequest.bind(undefined, {
            articleProps,
            ensureArticleIsValid,
            ensureArticleHasProps,
            ensureIsUuid
        })
    }));
