import classNames from "classnames";
import React, {
    Component,
    PropTypes
} from "react";

import ActionButton from "controls/action-button";
import InputField from "controls/input-field";
import articlePropType from "pages/articles/lib/article-prop-type";

import styles from "./index.css";

export default class ArticleEditor extends Component {

    static displayName = ArticleEditor.name;

    static propTypes = {
        article    : articlePropType,
        className  : PropTypes.string,
        disabled   : PropTypes.bool,
        onCancelled: PropTypes.func.isRequired,
        onConfirmed: PropTypes.func.isRequired
    };

    static defaultProps = {
        disabled: false
    };

    componentWillMount() {

        this._handleCancel  = this._handleCancel.bind(this);
        this._handleConfirm = this._handleConfirm.bind(this);
    }

    articleFields = {};

    reset() {

        return Promise.all(
            Object
                .values(this.articleFields)
                .map(articleField => articleField.reset())
        );
    }

    _handleConfirm(event) {

        event.preventDefault();

        this.props.onConfirmed(this._getArticle());
    }

    _handleCancel(event) {

        event.preventDefault();

        this.props.onCancelled();
    }

    _getArticle() {

        return Object.assign({}, this.props.article, Object
            .entries(this.articleFields)
            .reduce((article, [ key, articleField ]) => {

                article[key] = articleField.getValue();

                return article;
            }, {}));
    }

    _setArticleField(name, field) {

        this.articleFields[name] = field;
    }

    _renderActionsButtonCancel() {

        return (
            <ActionButton
                className={ styles.actionButtonCancel }
                onClick={ this._handleCancel }
                type={ ActionButton.TYPE_CANCEL }
            >Cancel</ActionButton>
        );
    }

    _renderActionsButtonConfirm() {

        return (
            <ActionButton
                onClick={ this._handleConfirm }
                type={ ActionButton.TYPE_ACCEPT }
            >Save</ActionButton>
        );
    }

    _renderLabeledInput(labelText, inputProps) {

        return (
            <label>
                <div className={ styles.label }>{ labelText }</div>
                <InputField { ... inputProps }/>
            </label>
        );
    }

    _renderActions() {

        return (
            <div className={ styles.actions }>
                { this._renderActionsButtonConfirm() }
                { this._renderActionsButtonCancel() }
            </div>
        );
    }

    _renderArticleContent() {

        return this._renderLabeledInput("Content", {
            className   : styles.inputContent,
            disabled    : this.props.disabled,
            initialValue: this.props.article.content,
            ref         : this._setArticleField.bind(this, "content"),
            type        : "textarea"
        });
    }

    _renderArticleTitle() {

        return this._renderLabeledInput("Title", {
            className   : styles.inputTitle,
            disabled    : this.props.disabled,
            initialValue: this.props.article.title,
            ref         : this._setArticleField.bind(this, "title")
        });
    }

    render() {

        return (
            <form
                className={ classNames(
                    styles.component,
                    this.props.className
                ) }
                onSubmit={ this._handleSave }
            >
                { this._renderArticleTitle() }
                { this._renderArticleContent() }
                { this._renderActions() }
            </form>
        );
    }
}
