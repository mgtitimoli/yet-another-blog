import articlesUpdateAction from "store/actions/articles/update";

export default {
    [ articlesUpdateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
    }),

    [ articlesUpdateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
    }),

    [ articlesUpdateAction.TYPE_SUCCEED ]: (state/*, action*/) => state.merge({
    })
};
