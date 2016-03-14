import articlesCreateAction from "store/actions/articles/create";

export default {
    [ articlesCreateAction.TYPE_SUCCEED ]: (state, action) => state.update(
        "collection",
        collection => collection.push(action.payload)
    )
};
