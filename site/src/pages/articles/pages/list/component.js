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

    _renderHeaderButtonsCreateArticle() {

        return (
            <button
                onClick={ this.props.onCreateArticle }
            >Create Article</button>
        );
    }

    _renderArticleListItems() {

        return this.props.articles.map((article, index) => (
            <ArticleItem
                article={ article }
                key={ index }
                onEdit={ this.props.onEditArticle }
            />
        ));
    }

    _renderArticlesList() {

        return (
            <ul>
                { this._renderArticleListItems() }
            </ul>
        );
    }

    _renderLoading() {

        return (
            <div>Loading</div>
        );
    }

    _renderHeaderButtons() {

        return (
            <div>
                { this._renderHeaderButtonsCreateArticle() }
            </div>
        );
    }

    _renderLoadingOrArticlesList() {

        return this.props.fetching ?
            this._renderLoading() :
            this._renderArticlesList();
    }

    _renderHeader() {

        return (
            <div>
                { this._renderHeaderButtons() }
            </div>
        );
    }

    _renderTitle() {

        return (
            <h1>Articles List</h1>
        );
    }

    render() {

        return (
            <div>
                { this._renderTitle() }
                { this._renderHeader() }
                { this._renderLoadingOrArticlesList() }
            </div>
        );
    }
}
