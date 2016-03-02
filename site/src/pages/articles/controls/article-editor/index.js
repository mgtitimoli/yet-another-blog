import React, {
    Component,
    PropTypes
} from "react";

import InputField from "controls/input-field";
import articlePropType from "pages/articles/lib/article-prop-type";

// import cssClassNames from "./index.css";

const formPropTypes = {
    className: PropTypes.string,
    style    : PropTypes.object
};

const ourPropTypes = {
    article : articlePropType,
    onCancel: PropTypes.func.isRequired,
    onSave  : PropTypes.func.isRequired
};

export default class ArticleEditor extends Component {

    static displayName = ArticleEditor.name;

    static PropTypes = Object.assign(
        {},
        formPropTypes,
        ourPropTypes
    );

    constructor(...args) {

        super(...args);

        this.state = {
            articleFields: {}
        };
    }

    _handleActionButtonClick(actionName) {

        this.props["on" + actionName](this);
    }

    _setArticleField(name, field) {

        this.articleFields[name] = field;
    }

    _renderActionButton(actionName) {

        const handleClick = this
            ._handleActionButtonClick
            .bind(
                this,
                actionName
            );

        return (
            <button onClick={ handleClick }>
                { actionName }
            </button>
        );
    }

    _renderActions() {

        return (
            <div>
                { this._renderActionButton("Save") }
                { this._renderActionButton("Cancel") }
            </div>
        );
    }

    _renderArticleTimestamp() {
    }

    _renderArticleContent() {

        return (
            <InputField
                defaultValue={ this.props.article.content }
                ref={ this.setArticleField.bind(this, "content") }
            />
        );
    }

    _renderArticleTitle() {

        return (
            <InputField
                defaultValue={ this.props.article.title }
                ref={ this.setArticleField.bind(this, "title") }
            />
        );
    }

    render() {

        const propsWithoutOurs = _.omit(
            this.props,
            Object.keys(ourPropTypes)
        );

        const props = Object.assign(propsWithoutOurs, {
            onSubmit: this._handleSave,
        });

        return (
            <form { ...props }>
                { this._renderArticleHeader() }
                { this._renderArticleText() }
                { this._renderArticleTimestamp() }
                { this._renderButtons() }
            </form>
        );
    }
}
