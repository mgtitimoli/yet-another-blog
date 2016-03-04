import httpStatus from "http-status-codes";

import createHttpError from "../lib/error/create-http";
import createResponse from "../lib/create-response";

function handleNotFound(req, res, next) {

    next(createHttpError(
        httpStatus.NOT_FOUND
    ));
}

function returnError(error, req, res) {

    const responseError = error.httpStatusCode ?
        error :
        createHttpError(
            httpStatus.INTERNAL_SERVER_ERROR
        );

    res.status(error.httpStatusCode);

    res.json(createResponse(
        undefined,
        responseError
    ));
}

export default [
    handleNotFound,
    returnError
];
