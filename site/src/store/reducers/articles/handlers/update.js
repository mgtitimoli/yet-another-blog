import Immutable from "immutable";

import articlesUpdateAction from "store/actions/articles/update";

export default {
    [ articlesUpdateAction.TYPE_SUCCEED ]: (state, { payload: article }) =>
        state.update(
            "collection",
            collection => collection.set(
                collection.findIndex(
                    curArticle => curArticle.get("id") === article.id
                ),
                Immutable.fromJS(article)
            )
        )
};
