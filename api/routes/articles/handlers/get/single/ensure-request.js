export default function ensureRequest(
    // dependencies
    {
        ensureIsUuid
    },
    {
        params: {
            articleId
        }
    }
) {

    ensureIsUuid("article id", articleId);
}
