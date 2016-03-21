import { connect } from "react-redux";

import articlesFetchAllAction from "store/actions/articles/fetch-all";
import history from "lib/history";

import ArticlesListPage from "./component";

function mapDispatchToProps(dispatch) {

    return {
        getArticles() {

            return dispatch(
                articlesFetchAllAction()
            );
        },

        onCreateArticle() {

            history.push("/articles/create");
        },

        onEditArticle(article) {

            history.push("/articles/edit/" + article.id);
        },

        onViewArticle(article) {

            history.push("/articles/view/" + article.id);
        }
    };
}

export default connect(
    undefined,
    mapDispatchToProps
)(ArticlesListPage);
