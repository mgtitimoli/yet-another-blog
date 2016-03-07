import httpStatus from "http-status-codes";

import createResponse from "../lib/create-response";
import isApiError from "../lib/api-error/is";

export function handleError(
    // dependencies
    {
        createResponse,
        isApiError
    },
    error, req, res, next // eslint-disable-line no-unused-vars
) {

    // TODO: remove it once added morgan middleware
    console.log(error.stack); // eslint-disable-line no-console

    if (isApiError(error)) {
        res.json(createResponse(
            undefined,
            error
        ));
    }
    else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR);

        res.end();
    }
}

export default handleError.bind(undefined, {
    createResponse,
    isApiError
});
