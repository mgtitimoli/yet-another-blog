import React, {
    Component,
    PropTypes
} from "react";

import articlePropType from "pages/articles/lib/article-prop-type";

import Article from "./controls/article";
// import styles from "./index.css";

export default class ArticleItem extends Component {

    static displayName = ArticleItem.name;

    static propTypes = {
        article: articlePropType.isRequired,
        onEdit : PropTypes.func.isRequired
    };

    _handleActionLinkClick(actionName) {

        this.props["on" + actionName](this.props.article);
    }

    _renderActionLink(actionName) {

        const handleClick = this
            ._handleActionLinkClick
            .bind(
                this,
                actionName
            );

        return (
            <a
                href="#"
                onClick={ handleClick }
            >{ actionName }</a>
        );
    }

    _renderActions() {

        return (
            <div>
                { this._renderActionLink("Edit") }
            </div>
        );
    }

    _renderArticle() {

        return (
            <Article article={ this.props.article }/>
        );
    }

    render() {

        return (
            <li>
                { this._renderArticle() }
                { this._renderActions() }
            </li>
        );
    }
}
