import React, {
    Component,
    PropTypes
} from "react";

import executeAsyncInComponent from "lib/execute-async-in-component";
import setComponentState from "lib/set-component-state";

import ArticleEditor from "pages/articles/controls/article-editor";
import cssClasses from "./component.css";

export default class ArticlesCreatePage extends Component {

    static displayName = ArticlesCreatePage.name;

    static propTypes = {
        createArticle   : PropTypes.func.isRequired,
        onArticleCreated: PropTypes.func.isRequired,
        onCancelled     : PropTypes.func.isRequired
    };

    state = {
        creating          : false,
        error             : null,
        lastCreatedArticle: null,
        newArticle        : null
    };

    componentWillMount() {

        this._handleArticleEditorConfirmed = this
            ._handleArticleEditorConfirmed
            .bind(this);

        this._setArticleEditor = this._setArticleEditor.bind(this);

        this.reset();
    }

    _articleEditor = null;

    async reset()  {

        await setComponentState(this, {
            newArticle: {
                title  : "",
                content: ""
            }
        });

        await this
            ._articleEditor
            .reset();
    }

    async _handleArticleEditorConfirmed(partialArticle) {

        const article = await executeAsyncInComponent(
            this,
            () => this.props.createArticle(partialArticle),
            {
                progress: "creating",
                result  : "lastCreatedArticle"
            }
        );

        await this.reset();

        this.props.onArticleCreated(article);
    }

    _setArticleEditor(articleEditor) {

        this._articleEditor = articleEditor;
    }

    _renderArticleEditor() {

        return (
            <ArticleEditor
                article={ this.state.newArticle }
                disabled={ this.state.creating }
                onCancelled={ this.props.onCancelled }
                onConfirmed={ this._handleArticleEditorConfirmed }
                ref={ this._setArticleEditor }
            />
        );
    }

    _renderCreating() {

        if (!this.state.creating) {
            return null;
        }

        return (
            <div>Creating...</div>
        );
    }

    _renderContent() {

        return (
            <div>
                { this._renderCreating() }
                { this._renderArticleEditor() }
            </div>
        );
    }

    _renderTitle() {

        return (
            <h1>Create Article</h1>
        );
    }

    render() {

        return (
            <div className={ cssClasses.component }>
                { this._renderTitle() }
                { this._renderContent() }
            </div>
        );
    }
}
