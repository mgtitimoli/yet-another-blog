import httpStatus from "http-status-codes";

import createResponse from "../lib/create-response";

const noResultHttpStatusCodes = [
    httpStatus.NO_CONTENT,
    httpStatus.NOT_MODIFIED
];

export function handleResult(
    // dependencies
    {
        createResponse
    },
    req, res, next
) {

    if (noResultHttpStatusCodes.indexOf(res.statusCode) >= 0) {
        res.end();
    }
    else if ("result" in res) {
        res.json(createResponse(
            res.result
        ));
    }
    else {
        next();
    }
}

export default handleResult.bind(undefined, {
    createResponse
});
