import { connect } from "react-redux";
import { PropTypes } from "react";

import articlesFetchAction from "store/actions/articles/fetch";

import ArticlesViewPage from "./component";

function mapDispatchToProps(dispatch, { params }) {

    return {
        getArticle() {

            return dispatch(
                articlesFetchAction(params.articleId)
            );
        }
    };
}

export default Object.assign(
    connect(
        undefined,
        mapDispatchToProps
    )(ArticlesViewPage),
    {
        propTypes: {
            params: PropTypes.shape({
                articleId: PropTypes.string.isRequired
            }).isRequired
        }
    }
);

