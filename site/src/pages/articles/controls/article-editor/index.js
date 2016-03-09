import _ from "lodash";
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
    article    : articlePropType,
    onCancelled: PropTypes.func.isRequired,
    onConfirmed: PropTypes.func.isRequired
};

export default class ArticleEditor extends Component {

    static displayName = ArticleEditor.name;

    static propTypes = Object.assign(
        {},
        formPropTypes,
        ourPropTypes
    );

    componentWillMount() {

        this._handleCancel  = this._handleCancel.bind(this);
        this._handleConfirm = this._handleConfirm.bind(this);
    }

    articleFields = {};

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

    _renderActionsButton(label, handleClick) {

        return (
            <button onClick={ handleClick }>
                { label }
            </button>
        );
    }

    _renderActions() {

        return (
            <div>
                { this._renderActionsButton("Save", this._handleConfirm) }
                { this._renderActionsButton("Cancel", this._handleCancel) }
            </div>
        );
    }

    _renderArticleContent() {

        return (
            <label>
                <div>Content</div>
                <InputField
                    defaultValue={ this.props.article.content }
                    ref={ this._setArticleField.bind(this, "content") }
                    type="textarea"
                />
            </label>
        );
    }

    _renderArticleTitle() {

        return (
            <label>
                <div>Title</div>
                <InputField
                    defaultValue={ this.props.article.title }
                    ref={ this._setArticleField.bind(this, "title") }
                />
            </label>
        );
    }

    render() {

        const propsWithoutOurs = _.omit(
            this.props,
            Object.keys(ourPropTypes)
        );

        const props = Object.assign(propsWithoutOurs, {
            onSubmit: this._handleSave
        });

        return (
            <form { ...props }>
                { this._renderArticleTitle() }
                { this._renderArticleContent() }
                { this._renderActions() }
            </form>
        );
    }
}
