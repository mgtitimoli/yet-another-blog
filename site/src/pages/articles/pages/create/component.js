import React, {
    Component,
    PropTypes
} from "react";

import ArticleEditor from "pages/articles/controls/article-editor";
// import styles from "./component.css";

export default class ArticlesCreatePage extends Component {

    static displayName = ArticlesCreatePage.name;

    static propTypes = {
        onCancelled: PropTypes.func.isRequired,
        onConfirmed: PropTypes.func.isRequired,
        onSaved    : PropTypes.func.isRequired,
        saving     : PropTypes.bool.isRequired
    };

    state = {
        newArticle: {
            title  : "",
            content: ""
        },

        saved : false,
        saving: false
    };

    componentWillMount() {

        this._receiveProps(this.props);
    }

    componentWillReceiveProps(props) {

        this._receiveProps(props);
    }

    _receiveProps(props) {

        const { saving } = props;

        const state = {
            saving
        };

        if (!saving && this.state.saving) {
            state.saved = true;
        }

        this.setState(state);
    }

    _renderArticleEditor() {

        return (
            <ArticleEditor
                article={ this.state.newArticle }
                onCancelled={ this.props.onCancelled }
                onConfirmed={ this.props.onConfirmed }
            />
        );
    }

    _renderTitle() {

        return (
            <h1>Create Article</h1>
        );
    }

    render() {

        if (this.state.saved) {
            this.props.onSaved();
        }

        return (
            <div>
                { this._renderTitle() }
                { this._renderArticleEditor() }
            </div>
        );
    }
}
