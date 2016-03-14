import articlesFetchAllAction from "store/actions/articles/fetch-all";

export default {
    [ articlesFetchAllAction.TYPE_SUCCEED ]: (state, action) => state.merge({
        collection: action.payload
    })
};
