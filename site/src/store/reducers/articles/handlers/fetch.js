import Immutable from "immutable";

import articlesFetchAction from "store/actions/articles/fetch";

export default {
    [ articlesFetchAction.TYPE_SUCCEED ]:
        (state, { payload: article }) => state.update(
            "collection",
            collection => {

                const articleIndex = collection.findIndex(
                    curArticle => curArticle.get("id") === article.id
                );

                const immutableArticle = Immutable.fromJS(article);

                return articleIndex >= 0 ?
                    collection.set(articleIndex, immutableArticle) :
                    collection.push(immutableArticle);
            }
        )
};
