export default function createResponse(
    result = undefined,
    error = undefined
) {

    if (error) {
        return {
            error: {
                code   : error.code,
                message: error.message
            }
        };
    }

    return {
        result
    };
}
