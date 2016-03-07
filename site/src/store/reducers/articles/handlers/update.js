import articlesUpdateAction from "store/actions/articles/update";

export default {
    [ articlesUpdateAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        processing: articlesUpdateAction.TYPE
    }),

    [ articlesUpdateAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        processing: null
    }),

    [ articlesUpdateAction.TYPE_SUCCEED ]: (state/*, action*/) => state.merge({
        processing: null
    })
};
