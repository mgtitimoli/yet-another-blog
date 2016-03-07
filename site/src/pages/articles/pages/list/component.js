import React, {
    Component,
    PropTypes
} from "react";

import articlePropType from "pages/articles/lib/article-prop-type";

import ArticleItem from "./controls/article-item";
// import styles from "./component.css";

export default class ArticlesListPage extends Component {

    static displayName = ArticlesListPage.name;

    static propTypes = {
        articles       : PropTypes.arrayOf(articlePropType).isRequired,
        fetching       : PropTypes.bool.isRequired,
        onCreateArticle: PropTypes.func.isRequired,
        onEditArticle  : PropTypes.func.isRequired
    };

    _renderArticleItems() {

        return this.props.articles.map((article, index) => (
            <ArticleItem
                article={ article }
                key={ index }
                onEdit={ this.props.onEditArticle }
            />
        ));
    }

    render() {

        return (
            <ul>
                { this._renderArticleItems() }
            </ul>
        );
    }
}
