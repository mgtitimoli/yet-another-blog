import _ from "lodash";
import React, {
    Component,
    PropTypes
} from "react";

import setComponentState from "lib/set-component-state";

const inputPropTypes = {
    className: PropTypes.string,
    style    : PropTypes.object
};

const ourPropTypes = {
    initialValue: PropTypes.any,
    formatValue : PropTypes.func,
    onChange    : PropTypes.func,
    parseValue  : PropTypes.func,
    type        : PropTypes.string
};

function formatStringValue(value, inputValue = undefined) {

    if (typeof inputValue === "string") {
        return inputValue;
    }

    return !value ?
        "" :
        String(value);
}

function noParse(value) {

    return value;
}

export default class InputField extends Component {

    static displayName = InputField.name;

    static propTypes = Object.assign(
        {},
        inputPropTypes,
        ourPropTypes
    );

    static defaultProps = {
        initialValue: null,
        formatValue : formatStringValue,
        parseValue  : noParse
    };

    state = {
        formattedValue: null,
        value         : null
    };

    componentWillMount() {

        this._handleInputChange = this._handleInputChange.bind(this);

        this.reset();
    }

    getInitialValue() {

        return this.props.initialValue;
    }

    getFormattedValue() {

        return this.state.formattedValue;
    }

    getValue() {

        return this.state.value;
    }

    reset() {

        return this.setValue(this.props.initialValue);
    }

    setValue(value) {

        const formattedValue = this.props.formatValue(value);

        return setComponentState(this, {
            formattedValue,
            value
        });
    }

    async _handleInputChange({ target: input }) {

        const inputValue = input.value;

        const value          = this.props.parseValue(inputValue);
        const formattedValue = this.props.formatValue(value, inputValue);

        await setComponentState(this, {
            formattedValue,
            value
        });

        const { onChange } = this.props;

        if (onChange) {
            onChange(this);
        }
    }

    _renderTextArea(props) {

        return (
            <textarea { ...props }/>
        );
    }

    _renderInput(props) {

        return (
            <input { ...props }/>
        );
    }

    render() {

        const propsWithoutOurs = _.omit(
            this.props,
            Object.keys(ourPropTypes)
        );

        const props = Object.assign(propsWithoutOurs, {
            onChange: this._handleInputChange,
            value   : this.getFormattedValue()
        });

        if (this.props.type === "textarea") {
            return this._renderTextArea(props);
        }

        props.type = this.props.type;

        return this._renderInput(props);
    }
}
