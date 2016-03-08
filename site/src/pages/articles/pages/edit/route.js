import ArticlesEditPageContainer from "./index";

import articlesEditAction from "store/actions/articles/edit";
import articlesFetchAction from "store/actions/articles/edit";

import store from "store";

export default {
    path     : "edit/:articleId",
    component: ArticlesEditPageContainer,

    async onEnter({ params }) {

        const { inEditionArticle } = store
            .getState("articles")
            .toJS();

        if (inEditionArticle) {
            return;
        }

        await store.dispatch(
            articlesFetchAction(params.articleId)
        );

        store.dispatch(
            articlesEditAction(params.articleId)
        );
    }
};
