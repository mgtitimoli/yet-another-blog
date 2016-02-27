import articlesCreateAction from "store/actions/articles/create";

export default {
    [ articlesCreateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
    }),

    [ articlesCreateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
    }),

    [ articlesCreateAction.TYPE_SUCCEED ]: (state/*, action*/) => state.merge({
    })
};
