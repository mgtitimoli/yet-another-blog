export default function createApiError(
    { code, message: messageTemplate },
    messageParams = undefined
) {

    const message = typeof messageTemplate === "function" ?
        messageTemplate(messageParams) :
        messageTemplate;

    const error = new Error(message);

    error.code = code;

    return error;
}
