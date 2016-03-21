import classNames from "classnames";
import React, {
    Component,
    PropTypes
} from "react";

const TYPE_ACCEPT = "accept";
const TYPE_CANCEL = "cancel";

import styles from "./index.css";

export default class ActionButton extends Component {

    static displayName = ActionButton.name;

    static propTypes = {
        children : PropTypes.node.isRequired,
        className: PropTypes.string,
        disabled : PropTypes.bool,
        onClick  : PropTypes.func.isRequired,
        type     : PropTypes.oneOf([
            TYPE_ACCEPT,
            TYPE_CANCEL
        ])
    };

    static defaultProps = {
        disabled: false
    };

    static TYPE_ACCEPT = TYPE_ACCEPT;
    static TYPE_CANCEL = TYPE_CANCEL;

    render() {

        return (
            <button
                className={ classNames(
                    styles[this.props.type],
                    this.props.className
                ) }
                disabled={ this.props.disabled }
                onClick={ this.props.onClick }
            >{ this.props.children }</button>
        );
    }
}
