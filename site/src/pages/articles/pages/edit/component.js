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
        article    : articlePropType,
        fetching   : PropTypes.bool.isRequired,
        onCancelled: PropTypes.func.isRequired,
        onConfirmed: PropTypes.func.isRequired,
        onSaved    : PropTypes.func.isRequired,
        saving     : PropTypes.bool.isRequired
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
                onCancelled={ this.props.onCancelled }
                onConfirmed={ this.props.onConfirmed }
            />
        );
    }

    _renderLoading() {

        return (
            <div>Loading</div>
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

    _renderContentOrNotFound() {

        if (this.props.article) {
            return this._renderArticleEditor();
        }

        return this.props.fetching ?
            this._renderLoading() :
            this._renderNotFound();
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
                { this._renderContentOrNotFound() }
            </div>
        );
    }
}
