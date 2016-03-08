import { connect } from "react-redux";

import articlesCreateAction from "store/actions/articles/create";
import history from "lib/history";

import ArticlesCreatePage from "./component";

function mapStateToProps(state) {

    const { actionInProgress } = state
        .get("articles")
        .toJS();

    return {
        saving: actionInProgress === articlesCreateAction.TYPE,

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
                articlesCreateAction(article)
            );
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesCreatePage);
