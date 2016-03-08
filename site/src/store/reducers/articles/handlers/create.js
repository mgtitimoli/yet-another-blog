import articlesCreateAction from "store/actions/articles/create";

export default {
    [ articlesCreateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        actionInProgress: articlesCreateAction.TYPE
    }),

    [ articlesCreateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        actionInProgress: null
    }),

    [ articlesCreateAction.TYPE_SUCCEED ]: (state, action) => state
        .set("actionInProgress", null)
        .update(
            "collection",
            collection => collection.push(action.payload)
        )
};
