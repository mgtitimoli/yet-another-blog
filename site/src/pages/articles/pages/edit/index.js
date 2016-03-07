import { connect } from "react-redux";
import { push } from "react-router-redux";

import articlesFetchAction from "store/actions/articles/fetch";
import articlesFetchAllAction from "store/actions/articles/fetch-all";
import articlesUpdateAction from "store/actions/articles/update";

import ArticlesEditPage from "./component";

function mapStateToProps(state) {

    const {
        inEditionArticle,
        processing
    } = state
        .get("articles")
        .toJS();

    return {
        article: inEditionArticle,

        fetching: 
            processing === articlesFetchAction.TYPE ||
            processing === articlesFetchAllAction.TYPE,

        saving: processing === articlesUpdateAction.TYPE
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
