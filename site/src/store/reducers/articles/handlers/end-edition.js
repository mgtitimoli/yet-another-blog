import articlesEndEditionAction from "store/actions/articles/end-edition";

export default {
    [ articlesEndEditionAction.TYPE ]: (state/*, action*/) => state.merge({
        inEditionArticle: null
    })
};
