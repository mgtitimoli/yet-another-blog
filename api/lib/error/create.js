export function createError({
    code,
    message,
    httpStatusCode = undefined
}) {

    const error = new Error(message);

    error.code = code;

    if (httpStatusCode) {
        error.httpStatusCode = httpStatusCode;
    }

    return error;
}
