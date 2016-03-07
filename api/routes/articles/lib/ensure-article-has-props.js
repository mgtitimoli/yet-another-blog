import ensureHasProps from "../../../lib/ensure-has-props";
import { createInvalidArticleError } from "./api-error-creators";

export default ensureHasProps.bind(undefined, {
    createError: createInvalidArticleError
});
