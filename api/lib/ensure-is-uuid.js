import uuidValidate from "uuid-validate";

import { createInvalidUuidError } from "./api-error/creators";

export function ensureIsUuid(
    // dependencies
    {
        createInvalidUuidError
    },
    name, value, version = 4
) {

    if (!uuidValidate(value, version)) {
        throw createInvalidUuidError({
            name,
            invalidType: typeof value
        });
    }
}

export default ensureIsUuid.bind(undefined, {
    createInvalidUuidError
});
