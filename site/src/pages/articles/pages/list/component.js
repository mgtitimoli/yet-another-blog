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
        articles: PropTypes
            .arrayOf(articlePropType)
            .isRequired,

        onArticleEdit: PropTypes.func.isRequired
    };

    _renderArticleItems() {

        return this.props.articles.map((article, index) => (
            <ArticleItem
                article={ article }
                key={ index }
                onEdit={ this.props.onArticleEdit }
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
