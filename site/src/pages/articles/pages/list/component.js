import React, {
    Component,
    PropTypes
} from "react";

import executeAsyncInComponent from "lib/execute-async-in-component";

import ArticleItem from "./controls/article-item";
// import styles from "./component.css";

export default class ArticlesListPage extends Component {

    static displayName = ArticlesListPage.name;

    static propTypes = {
        getArticles    : PropTypes.func.isRequired,
        onCreateArticle: PropTypes.func.isRequired,
        onEditArticle  : PropTypes.func.isRequired
    };

    state = {
        articles: null,
        error   : null,
        loading : false
    };

    componentWillMount() {

        this.getArticles();
    }

    getArticles() {

        return executeAsyncInComponent(
            this,
            () => this.props.getArticles(),
            {
                progress: "loading",
                result  : "articles"
            }
        );
    }

    _renderHeaderButtonsCreateArticle() {

        return (
            <button
                onClick={ this.props.onCreateArticle }
            >Create Article</button>
        );
    }

    _renderArticleListItems() {

        return this.state.articles.map((article, index) => (
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

    _renderError() {

        const textContent =
            "We could not fetch the articles right now, " +
            "please try again later";

        return (
            <div>{ textContent }</div>
        );
    }

    _renderContent() {

        return this.state.error ?
            this._renderError() :
            this._renderArticlesList();
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

    _renderLoadingOrContent() {

        return this.state.loading ?
            this._renderLoading() :
            this._renderContent();
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
                { this._renderLoadingOrContent() }
            </div>
        );
    }
}
