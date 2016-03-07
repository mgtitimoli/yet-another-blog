import ajv from "ajv";

export default function createValidator(schema, options = undefined) {

    const ajvInstance = ajv(options);
    const ajvValidate = ajvInstance.compile(schema);

    return function isNotValid(instance) {

        return ajvValidate(instance) ?
            undefined :
            {
                entries: ajvValidate.errors,
                message: ajvInstance.errorsText(ajvValidate.errors)
            };
    };
}
