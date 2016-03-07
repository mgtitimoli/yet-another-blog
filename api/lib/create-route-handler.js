export default function createRouteHandler(focusedAsyncHandler) {

    return async function routeHandler(dependencies, req, res, next) {

        try {
            await focusedAsyncHandler(dependencies, req, res);
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
