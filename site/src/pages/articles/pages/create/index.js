import { connect } from "react-redux";
import { push } from "react-router-redux";

import articlesCreateAction from "store/actions/articles/create";

import ArticlesCreatePage from "./component";

function mapStateToProps(state) {

    const {
        processing
    } = state
        .get("articles")
        .toJS();

    return {
        saving: processing === articlesCreateAction.TYPE
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onCancelCreation() {

            dispatch(
                push("/articles/list")
            );
        },

        onConfirmCreation(article) {

            dispatch(
                articlesCreateAction(article)
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
)(ArticlesCreatePage);
