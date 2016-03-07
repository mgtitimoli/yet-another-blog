import _ from "lodash";

function ensureNoUnsupportedProps(
    // dependencies
    {
        createError
    },
    validProps,
    effectiveProps
) {

    const unsupportedProps = _.difference(
        effectiveProps,
        validProps
    );

    if (unsupportedProps.length) {
        const unsupportedPropsList = unsupportedProps.join(", ");

        throw createError({
            errorMessage: `unsupported properties (${ unsupportedPropsList })`
        });
    }
}

function ensureHasAtLeastProps(
    // dependencies
    {
        createError
    },
    validProps,
    minRequiredProps,
    effectiveProps
) {

    const missingPropsAmount = minRequiredProps - effectiveProps.length;

    if (missingPropsAmount > 0) {
        const missingPropsList = _
            .difference(validProps, effectiveProps)
            .slice(0, missingPropsAmount) // take some of the missing props
            .join(", ");

        throw createError({
            errorMessage: `missing properties (${ missingPropsList })`
        });
    }
}

export default function ensureHasProps(
    // dependencies
    {
        createError
    },
    validProps,
    minRequiredProps,
    article
) {

    const effectiveProps = Object.keys(article);

    ensureNoUnsupportedProps(
        { createError },
        validProps,
        effectiveProps
    );

    if (minRequiredProps > 0) {
        ensureHasAtLeastProps(
            { createError },
            validProps,
            minRequiredProps,
            effectiveProps
        );
    }
}
