export default function isApiError(thing) {

    return (
        thing instanceof Error,
        typeof thing.code === "number"
    );
}
