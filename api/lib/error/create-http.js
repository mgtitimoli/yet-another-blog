import httpStatus from "http-status-codes";

import createError from "./create";

export default function createHttpError(httpStatusCode) {

    return createError({
        httpStatusCode,

        code   : httpStatusCode,
        message: httpStatus.getMessage(httpStatusCode)
    });
}
