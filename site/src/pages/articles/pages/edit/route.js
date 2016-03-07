import ArticlesEditPageContainer from "./index";

import articlesFetchAction from "store/actions/articles/fetch-all";
import articlesFetchAllAction from "store/actions/articles/fetch-all";

import store from "store";

export default {
    path     : "edit/:articleId",
    component: ArticlesEditPageContainer,

    onEnter({ params }) {

        const { processing } = store
            .getState("articles")
            .toJS();

        if (
            processing !== articlesFetchAction.TYPE
            && processing !== articlesFetchAllAction.TYPE
        ) {
            return;
        }

        store.dispatch(
            articlesFetchAction(params.articleId)
        );
    }
};
