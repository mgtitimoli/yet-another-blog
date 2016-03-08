import articlesUpdateAction from "store/actions/articles/update";

export default {
    [ articlesUpdateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        actionInProgress: articlesUpdateAction.TYPE
    }),

    [ articlesUpdateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        actionInProgress: null
    }),

    [ articlesUpdateAction.TYPE_SUCCEED ]: (state/*, action*/) => state.merge({
        actionInProgress: null
    })
};
