import _ from "lodash";
import React, {
    Component,
    PropTypes
} from "react";

const inputPropTypes = {
    className: PropTypes.string,
    style    : PropTypes.object,
    type     : PropTypes.string
};

const ourPropTypes = {
    defaultValue: PropTypes.any,
    onChange    : PropTypes.func,
    formatValue : PropTypes.func,
    parseValue  : PropTypes.func
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

    static propTypes = ;

    static defaultProps = {
        defaultValue: null,
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

    getDefaultValue() {

        return this.props.defaultValue;
    }

    getFormattedValue() {

        return this.state.formattedValue;
    }

    getValue() {

        return this.state.value;
    }

    reset() {

        this._setValue(this.props.defaultValue);
    }

    setValue(value) {

        const formattedValue = this._formatValue(value);

        return this._asyncSetState({
            formattedValue,
            value
        });
    }

    _asyncSetState(state) {

        return new Promise(resolve => {

            this.setState(state, resolve);
        });
    }

    async _handleInputChange({ target: input }) {

        const inputValue = input.value;

        const value          = this.props.parseValue(inputValue);
        const formattedValue = this._formatValue(value, inputValue);

        await this._asyncSetState({
            formattedValue,
            value
        });

        const { onChange } = this.props;

        if (onChange) {
            onChange(this);
        }
    }

    _setInput(input) {

        this._input = input;
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

        return (
            <input { ...props }/>
        );
    }
}