import React, {
    Component,
    PropTypes
} from "react";

import Article from "pages/articles/controls/article";
import executeAsyncInComponent from "lib/execute-async-in-component";

import styles from "./component.css";

export default class ArticlesViewPage extends Component {

    static displayName = ArticlesViewPage.name;

    static propTypes = {
        getArticle: PropTypes.func.isRequired
    };

    state = {
        article: null,
        error  : null,
        loading: false
    };

    componentWillMount() {

        executeAsyncInComponent(
            this,
            () => this.props.getArticle(),
            {
                progress: "loading",
                result  : "article"
            }
        );
    }

    _renderNotFound() {

        return (
            <div>
                <div>Not Found</div>
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
            <Article article={ this.state.article }/>
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
            <h1 className={ styles.title }>View Article</h1>
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
