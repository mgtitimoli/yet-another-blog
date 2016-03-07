import { connect } from "react-redux";
import { push } from "react-router-redux";

import articlesFetchAllAction from "store/actions/articles/fetch-all";

import ArticlesListPage from "./component";

function mapStateToProps(state) {

    const articlesState = state
        .get("articles")
        .toJS();

    return {
        articles: articlesState.collection,
        fetching: articlesState.processing === articlesFetchAllAction.TYPE
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onCreateArticle() {

            dispatch(
                push("/articles/create")
            );
        },

        onEditArticle(article) {

            dispatch(
                push("/articles/edit/" + article.id)
            );
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesListPage);
