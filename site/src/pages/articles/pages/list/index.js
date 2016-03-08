import { connect } from "react-redux";

import articlesFetchAllAction from "store/actions/articles/fetch-all";
import history from "lib/history";

import ArticlesListPage from "./component";

function mapStateToProps(state) {

    const {
        actionInProgress,
        collection
    } = state
        .get("articles")
        .toJS();

    return {
        articles: collection,
        fetching: actionInProgress === articlesFetchAllAction.TYPE,

        onCreateArticle() {

            history.push("/articles/create");
        },

        onEditArticle(article) {

            history.push("/articles/edit/" + article.id);
        }
    };
}

export default connect(
    mapStateToProps
)(ArticlesListPage);
