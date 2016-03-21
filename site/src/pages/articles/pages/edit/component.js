import React, {
    Component,
    PropTypes
} from "react";

import executeAsyncInComponent from "lib/execute-async-in-component";

import ArticleEditor from "pages/articles/controls/article-editor";
import styles from "./component.css";

export default class ArticlesEditPage extends Component {

    static displayName = ArticlesEditPage.name;

    static propTypes = {
        getArticle      : PropTypes.func.isRequired,
        onArticleUpdated: PropTypes.func.isRequired,
        onCancelled     : PropTypes.func.isRequired,
        updateArticle   : PropTypes.func.isRequired
    };

    state = {
        article : null,
        error   : null,
        loading : false,
        updating: false
    };

    componentWillMount() {

        this._handleArticleEditorConfirmed = this
            ._handleArticleEditorConfirmed
            .bind(this);

        this.resetArticle();
    }

    resetArticle() {

        return executeAsyncInComponent(
            this,
            () => this.props.getArticle(),
            {
                progress: "loading",
                result  : "article"
            }
        );
    }

    async _handleArticleEditorConfirmed(article) {

        const updatedArticle = await executeAsyncInComponent(
            this,
            () => this.props.updateArticle(article),
            {
                progress: "updating",
                result  : "article"
            }
        );

        this.props.onArticleUpdated(updatedArticle);
    }

    _renderArticleEditor() {

        return (
            <ArticleEditor
                article={ this.state.article }
                disabled={ this.state.updating }
                onCancelled={ this.props.onCancelled }
                onConfirmed={ this._handleArticleEditorConfirmed }
            />
        );
    }

    _renderUpdating() {

        if (!this.state.updating) {
            return null;
        }

        return (
            <div>Updating...</div>
        );
    }

    _renderError() {

        if (!this.state.error) {
            return null;
        }

        return (
            <div>Error!</div>
        );
    }

    _renderNotFound() {

        return (
            <div>
                <div>Not Found</div>
                <a onClick={ this.props.onCancelled }>Go Back</a>
            </div>
        );
    }

    _renderLoading() {

        return (
            <div>Loading...</div>
        );
    }

    _renderContent() {

        return (
            <div>
                { this._renderError() }
                { this._renderUpdating() }
                { this._renderArticleEditor() }
            </div>
        );
    }

    _renderContentOrNotFound() {

        if (this.state.article) {
            return this._renderContent();
        }

        return this.state.loading ?
            this._renderLoading() :
            this._renderNotFound();
    }

    _renderTitle() {

        return (
            <h1 className={ styles.title }>Edit Article</h1>
        );
    }

    render() {

        return (
            <div className={ styles.component }>
                { this._renderTitle() }
                { this._renderContentOrNotFound() }
            </div>
        );
    }
}
