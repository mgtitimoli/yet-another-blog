import { connect } from "react-redux";

import articlesCreateAction from "store/actions/articles/create";
import history from "lib/history";

import ArticlesCreatePage from "./component";

function mapDispatchToProps(dispatch) {

    return {
        createArticle(partialArticle) {

            return dispatch(
                articlesCreateAction(partialArticle)
            );
        },

        onArticleCreated() {

            history.push("/articles/list");
        },

        onCancelled() {

            history.push("/articles/list");
        }
    };
}

export default connect(
    undefined,
    mapDispatchToProps
)(ArticlesCreatePage);
