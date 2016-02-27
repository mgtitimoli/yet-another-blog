function handleNotFound(req, res, next) {

    const error = new Error("Not found");

    error.httpStatus = 404;

    next(error);
}

function returnError(error, req, res) {

    let httpStatus = error.httpStatus;

    let code;
    let message;

    if (httpStatus) {
        code       = error.code;
        message    = error.message;
    }
    else {
        httpStatus = 500;
        code       = 1000;
        message    = "Internal error";
    }

    res.status(httpStatus);

    res.json({
        error: {
            code,
            message
        }
    });
}

export default [
    handleNotFound,
    returnError
];
