import { connect } from "react-redux";
import { PropTypes } from "react";

import articlesFetchAction from "store/actions/articles/fetch";
import articlesUpdateAction from "store/actions/articles/update";
import history from "lib/history";

import ArticlesEditPage from "./component";

function mapDispatchToProps(dispatch, { params }) {

    return {
        onArticleUpdated() {

            history.push("/articles/list");
        },

        onCancelled() {

            history.push("/articles/list");
        },

        getArticle() {

            return dispatch(
                articlesFetchAction(params.articleId)
            );
        },

        updateArticle(article) {

            return dispatch(
                articlesUpdateAction(article)
            );
        }
    };
}

export default Object.assign(
    connect(
        undefined,
        mapDispatchToProps
    )(ArticlesEditPage),
    {
        propTypes: {
            params: PropTypes.shape({
                articleId: PropTypes.string.isRequired
            }).isRequired
        }
    }
);

