import ArticlesListPageContainer from "./index";

import articlesFetchAllAction from "store/actions/articles/fetch-all";

import store from "store";

export default {
    path     : "list",
    component: ArticlesListPageContainer,

    onEnter() {

        const { processing } = store
            .getState("articles")
            .toJS();

        if (processing === articlesFetchAllAction.TYPE) {
            return;
        }

        store.dispatch(
            articlesFetchAllAction()
        );
    }
};
