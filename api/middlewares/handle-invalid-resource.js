import httpStatus from "http-status-codes";

export default function handleInvalidResource(req, res) {

    res.status(httpStatus.NOT_FOUND);

    res.end();
}
