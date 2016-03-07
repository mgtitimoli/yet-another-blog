import express from "express";

import * as articleProps from "../../../../interactors/article/properties";
import db from "../../../../lib/database";

import ensureArticleIsValid from "../../lib/ensure-article-is-valid";
import ensureArticleHasProps from "../../lib/ensure-article-has-props";

import ensureRequest from "./ensure-request";
import handler from "./handler";

export default express
    .Router()
    .post("/", handler.bind(undefined, {
        articleProps,
        db,
        ensureRequest: ensureRequest.bind(undefined, {
            articleProps,
            ensureArticleIsValid,
            ensureArticleHasProps,
        })
    }));
