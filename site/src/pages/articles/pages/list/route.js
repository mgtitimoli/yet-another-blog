import ArticlesListPageContainer from "./index";

import articlesFetchAllAction from "store/actions/articles/fetch-all";

import store from "store";

export default {
    path     : "list",
    component: ArticlesListPageContainer,

    onEnter() {

        const { actionInProgress } = store
            .getState("articles")
            .toJS();

        if (actionInProgress === articlesFetchAllAction.TYPE) {
            return;
        }

        store.dispatch(
            articlesFetchAllAction()
        );
    }
};
