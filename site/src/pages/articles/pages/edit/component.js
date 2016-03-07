import React, {
    Component,
    PropTypes
} from "react";

import ArticleEditor from "pages/articles/controls/article-editor";
import articlePropType from "pages/articles/lib/article-prop-type";
// import styles from "./component.css";

export default class ArticlesEditPage extends Component {

    static displayName = ArticlesEditPage.name;

    static propTypes = {
        article           : articlePropType.isRequired,
        fetching          : PropTypes.bool.isRequired,
        onCancelEdition   : PropTypes.func.isRequired,
        onConfirmEditition: PropTypes.func.isRequired,
        onSaved           : PropTypes.func.isRequired,
        saving            : PropTypes.bool.isRequired
    };

    state = {
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
                article={ this.props.article }
                onCancel={ this.props.onCancelEdition }
                onConfirm={ this.props.onConfirmEditition }
            />
        );
    }

    _renderTitle() {

        return (
            <h1>Edit Article</h1>
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
