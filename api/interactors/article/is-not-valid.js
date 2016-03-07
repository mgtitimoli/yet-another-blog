import createValidator from "../../lib/create-validator";

import * as articleProps from "./properties";

const schema = {
    properties: {
        [ articleProps.ID ]: {
            type  : "string",
            format: "uuid"
        },
        [ articleProps.TITLE ]: {
            type     : "string",
            minLength: 1
        },
        [ articleProps.CONTENT ]: {
            type     : "string",
            minLength: 1
        },
        [ articleProps.CREATION_TIME ]: {
            type  : "string",
            format: "date-time"
        },
        [ articleProps.MODIFICATION_TIME ]: {
            type  : "string",
            format: "date-time"
        }
    }
};

export default createValidator(schema);
