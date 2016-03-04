import React, {
    Component,
    PropTypes
} from "react";

import ArticleEditor from "pages/articles/controls/article-editor";
// import styles from "./component.css";

export default class ArticlesCreatePage extends Component {

    static displayName = ArticlesCreatePage.name;

    static propTypes = {
        onCancel: PropTypes.func.isRequired,
        onSave  : PropTypes.func.isRequired
    };

    componentWillMount() {

        this.state = {
            newArticle: {
                title  : "",
                content: ""
            }
        };
    }

    _renderArticleEditor() {

        return (
            <ArticleEditor
                article={ this.state.newArticle }
                onCancel={ this.props.onCancel }
                onSave={ this.props.onSave }
            />
        );
    }

    _renderTitle() {

        return (
            <h1>Create Article</h1>
        );
    }

    render() {

        return (
            <div>
                { this._renderTitle() }
                { this._renderArticleEditor() }
            </div>
        );
    }
}
