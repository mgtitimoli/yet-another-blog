export default function ensureRequest(
    // dependencies
    {
        articleProps,
        ensureArticleHasProps,
        ensureArticleIsValid
    },
    {
        body: article
    }
) {

    ensureArticleIsValid(article);

    const validProps = [
        articleProps.TITLE,
        articleProps.CONTENT
    ];

    ensureArticleHasProps(
        validProps,
        // we are requiring all the valid props
        // since we are creating a new article
        validProps.length,
        article
    );
}
