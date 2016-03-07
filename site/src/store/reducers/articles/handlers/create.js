import articlesCreateAction from "store/actions/articles/create";

export default {
    [ articlesCreateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        processing: articlesCreateAction.TYPE
    }),

    [ articlesCreateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        processing: null
    }),

    [ articlesCreateAction.TYPE_SUCCEED ]: (state/*, action*/) => state.merge({
        processing: null
    })
};
