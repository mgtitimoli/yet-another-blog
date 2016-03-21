import classNames from "classnames";
import React, {
    Component,
    PropTypes
} from "react";

import articlePropType from "pages/articles/lib/article-prop-type";
import TextLinesLimiter from "controls/text-lines-limiter";

import styles from "./index.css";

export default class Article extends Component {

    static displayName = Article.name;

    static propTypes = {
        article          : articlePropType.isRequired,
        className        : PropTypes.string,
        contentClassName : PropTypes.string,
        contentLineHeight: PropTypes.number,
        contentMaxLines  : PropTypes.number,
        sizeUnit         : PropTypes.string,
        titleClassName   : PropTypes.string,
        titleLineHeight  : PropTypes.number,
        titleMaxLines    : PropTypes.number
    };

    static defaultProps = {
        contentLineHeight: 1.2,
        sizeUnit         : "em",
        titleLineHeight  : 1.5
    };

    _getTextPropValue(titleOrContent, propName) {

        const textPropName = titleOrContent + propName;

        return this.props[textPropName];
    }

    _renderArticleTime(creationOrModification, labelText) {

        const isoTime = this.props.article[creationOrModification + "Time"];

        if (!isoTime) {
            return null;
        }

        const date = new Date(isoTime);

        return (
            <div>
                <span className={ styles.timeLabel }>{ labelText }</span>
                <span className={ styles.timeValue }>{ date.toLocaleString() }</span>
            </div>
        );
    }

    _renderArticleContent(className) {

        return (
            <p
                className={ classNames(
                    styles.content,
                    className
                ) }
            >{ this.props.article.content }</p>
        );
    }

    _renderArticleTitle(className) {

        return (
            <h1
                className={ classNames(
                    styles.title,
                    className
                ) }
                title={ this.props.article.title }
            >{ this.props.article.title }</h1>
        );
    }

    _renderArticleTitleOrContent(which, className) {

        const methodName =
            "_renderArticle"
            + which[0].toUpperCase()
            + which.slice(1);

        return this[methodName](className);
    }

    _renderTextLinesLimiter(titleOrContent, className) {

        const lineHeight = this._getTextPropValue(titleOrContent, "LineHeight");
        const maxLines   = this._getTextPropValue(titleOrContent, "MaxLines");

        return (
            <TextLinesLimiter
                className={ className }
                lineHeight={ lineHeight }
                markerClassName={ styles.textLimitMarker }
                maxLines={ maxLines }
                sizeUnit={ this.props.sizeUnit }
            >
                { this._renderArticleTitleOrContent(titleOrContent) }
            </TextLinesLimiter>
        );
    }

    _renderAllArticleTimes() {

        return (
            <div className={ styles.timesContainer }>
                { this._renderArticleTime("creation", "Created At:") }
                { this._renderArticleTime("modification", "Modified At:") }
            </div>
        );
    }

    _renderText(titleOrContent, titleOrContentClassName) {

        const className = classNames(
            titleOrContentClassName,
            this._getTextPropValue(titleOrContent, "ClassName")
        );

        return this._getTextPropValue(titleOrContent, "MaxLines") ?
            this._renderTextLinesLimiter(titleOrContent, className) :
            this._renderArticleTitleOrContent(titleOrContent, className);
    }

    render() {

        return (
            <article
                className={ classNames(
                    styles.component,
                    this.props.className
                ) }
            >
                { this._renderText("title") }
                { this._renderText("content", styles.contentSeparation) }
                { this._renderAllArticleTimes() }
            </article>
        );
    }
}
