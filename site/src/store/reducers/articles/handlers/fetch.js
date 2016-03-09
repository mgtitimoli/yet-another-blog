import Immutable from "immutable";

import articlesFetchAction from "store/actions/articles/fetch";

export default {
    [ articlesFetchAction.TYPE_STARTED ]: (state/*, action*/) => state.merge({
        actionInProgress: articlesFetchAction.TYPE
    }),

    [ articlesFetchAction.TYPE_FAILED ] : (state/*, action*/) => state.merge({
        actionInProgress: null
    }),

    [ articlesFetchAction.TYPE_SUCCEED ]: (state, { payload: article }) => {

        const collection = state.get("collection");

        const articleIndex = collection.findIndex(
            curArticle => curArticle.get("id") === article.id
        );

        const immutableArticle = Immutable.fromJS(article);

        return state.merge({
            actionInProgress: null,
            collection      : articleIndex >= 0 ?
                collection.set(articleIndex, immutableArticle) :
                collection.push(immutableArticle)
        });
    }
};
