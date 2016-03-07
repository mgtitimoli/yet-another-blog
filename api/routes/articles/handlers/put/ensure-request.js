export default function ensureRequest(
    // dependencies
    {
        articleProps,
        ensureArticleHasProps,
        ensureArticleIsValid,
        ensureIsUuid
    },
    {
        body  : article,
        params: {
            articleId
        }
    }
) {

    ensureIsUuid("article id", articleId);

    ensureArticleIsValid(article);

    const validProps = [
        articleProps.TITLE,
        articleProps.CONTENT
    ];

    ensureArticleHasProps(
        validProps,
        2, // at least one prop (+ id) had to be provided to modify something
        article
    );
}
