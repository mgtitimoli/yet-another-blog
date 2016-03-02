import React, { Component } from "react";

import articlePropType from "pages/articles/lib/article-prop-type";
// import styles from "./index.css";

export default class Article extends Component {

    static displayName = Article.name;

    static propTypes = {
        article: articlePropType.isRequired
    };

    state = {
        contentCollapsed: true
    };

    _renderArticleModificationDate() {

        return null;
    }

    _renderArticleCreationDate() {

        return null;
    }

    _renderArticleContentExpanded() {

        return (
            <p>{ this.props.article.content }</p>
        );
    }

    _renderArticleContentCollapsed() {

        return (
            <p>{ this.props.article.content }</p>
        );
    }

    _renderArticleContent() {

        return this.state.contentCollapsed ?
            this._renderArticleContentCollapsed() :
            this._renderArticleContentExpanded();
    }

    _renderArticleTitle() {

        return (
            <h1>{ this.props.article.title }</h1>
        );
    }

    render() {

        return (
            <article>
                { this._renderArticleTitle() }
                { this._renderArticleContent() }
                { this._renderArticleCreationDate() }
                { this._renderArticleModificationDate() }
            </article>
        );
    }
}
