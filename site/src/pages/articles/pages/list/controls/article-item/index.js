import React, {
    Component,
    PropTypes
} from "react";

import Article from "pages/articles/controls/article";
import articlePropType from "pages/articles/lib/article-prop-type";

import styles from "./index.css";

export default class ArticleItem extends Component {

    static displayName = ArticleItem.name;

    static propTypes = {
        article: articlePropType.isRequired,
        onEdit : PropTypes.func.isRequired,
        onView : PropTypes.func.isRequired
    };

    _handleActionLinkClick(actionName) {

        this.props["on" + actionName](this.props.article);
    }

    _renderActionSeparator() {

        return (
            <span className={ styles.actionSeparator }>|</span>
        );
    }

    _renderActionLink(actionName, label = actionName) {

        const handleClick = this
            ._handleActionLinkClick
            .bind(
                this,
                actionName
            );

        return (
            <a
                className={ styles.actionLink }
                onClick={ handleClick }
            >{ label }</a>
        );
    }

    _renderActions() {

        return (
            <div className={ styles.actions }>
                { this._renderActionLink("View", "Read More") }
                { this._renderActionSeparator() }
                { this._renderActionLink("Edit") }
            </div>
        );
    }

    _renderArticle() {

        return (
            <Article
                article={ this.props.article }
                className={ styles.article }
                contentClassName={ styles.articleContent }
                contentMaxLines={ 3 }
                titleClassName={ styles.articleTitle }
                titleMaxLines={ 1 }
            />
        );
    }

    render() {

        return (
            <li className={ styles.component }>
                { this._renderActions() }
                { this._renderArticle() }
            </li>
        );
    }
}
