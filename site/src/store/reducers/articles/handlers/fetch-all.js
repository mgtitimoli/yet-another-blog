import articlesFetchAllAction from "store/actions/articles/fetch-all";

export default {
    [ articlesFetchAllAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        actionInProgress: articlesFetchAllAction.TYPE
    }),

    [ articlesFetchAllAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        actionInProgress: null
    }),

    [ articlesFetchAllAction.TYPE_SUCCEED ]: (state, action) => state.merge({
        actionInProgress: null,
        collection      : action.payload
    })
};
