import { connect } from "react-redux";
import { push } from "react-router-redux";

import articlesFetchAction from "store/actions/articles/fetch";
import articlesFetchAllAction from "store/actions/articles/fetch-all";
import articlesUpdateAction from "store/actions/articles/update";

import ArticlesEditPage from "./component";

function mapStateToProps(state) {

    const {
        actionInProgress,
        inEditionArticle
    } = state
        .get("articles")
        .toJS();

    return {
        article: inEditionArticle,

        fetching: 
            actionInProgress === articlesFetchAction.TYPE ||
            actionInProgress === articlesFetchAllAction.TYPE,

        saving: actionInProgress === articlesUpdateAction.TYPE
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onConfirmEdit(article) {

            dispatch(
                articlesUpdateAction(article)
            );
        },

        onCancelEdit() {

            dispatch(
                push("/articles/list")
            );
        },

        onSaved() {

            dispatch(
                push("/articles/list")
            );
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesEditPage);
