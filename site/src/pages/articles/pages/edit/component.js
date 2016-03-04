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
        article : articlePropType,
        onCancel: PropTypes.func.isRequired,
        onSave  : PropTypes.func.isRequired
    };

    _renderArticleEditor() {

        return (
            <ArticleEditor
                article={ this.props.article }
                onCancel={ this.props.onCancel }
                onSave={ this.props.onSave }
            />
        );
    }

    _renderTitle() {

        return (
            <h1>Edit Article</h1>
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
