import _ from "lodash";

import createApiError from "./create"; 

export const createInvalidUuidError = createApiError.bind(undefined, {
    code   : 1000,
    message: _.template(
        "Expected <%= name %> to be a uuid, " +
        "but instead got: <%= invalidType %>"
    )
});
