import articlesEditAction from "store/actions/articles/edit";

export default {
    [ articlesEditAction.TYPE ]: (state, action) => state.merge({
        inEditionArticle: action.payload
    })
};
