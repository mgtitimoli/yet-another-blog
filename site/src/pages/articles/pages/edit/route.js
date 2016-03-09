import articlesEditAction from "store/actions/articles/edit";
import articlesEndEditionAction from "store/actions/articles/end-edition";
import articlesFetchAction from "store/actions/articles/fetch";
import store from "store";

import ArticlesEditPageContainer from "./index";

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

        const article = await store.dispatch(
            articlesFetchAction(params.articleId)
        );

        store.dispatch(
            articlesEditAction(article)
        );
    },

    onLeave() {

        store.dispatch(
            articlesEndEditionAction()
        );
    } 
};
