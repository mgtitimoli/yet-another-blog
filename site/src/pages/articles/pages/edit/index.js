import { connect } from "react-redux";

import articlesFetchAction from "store/actions/articles/fetch";
import articlesFetchAllAction from "store/actions/articles/fetch-all";
import articlesUpdateAction from "store/actions/articles/update";
import history from "lib/history";

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

        saving: actionInProgress === articlesUpdateAction.TYPE,

        onCancelled() {

            history.push("/articles/list");
        },

        onSaved() {

            history.push("/articles/list");
        }
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onConfirmed(article) {

            dispatch(
                articlesUpdateAction(article)
            );
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesEditPage);
