import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import TextInput from "../TextInput/TextInput";

export default class TextInputField extends React.Component {
  static propTypes = {
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password"]),
    placeholder: PropTypes.string,
    /** Text which is placed to the right of the input. Unlike `placeholder` the text will remain when user starts typing. */
    fixedPlaceholder: PropTypes.string,
    /** Minimum width of the input. Default width is 100%. */
    minWidth: PropTypes.number,
    /** Maximum width of the input. Default width is 100%. */
    maxWidth: PropTypes.number,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool
  };

  static defaultProps = {
    type: "text",
    disabled: false,
    readonly: false
  };

  render() {
    const {
      name,
      type,
      placeholder,
      fixedPlaceholder,
      minWidth,
      maxWidth,
      disabled,
      readonly
    } = this.props;
    return (
      <Field name={name}>
        {props => (
          <TextInput
            name={name}
            value={props.value}
            error={props.error}
            onChange={props.setValue}
            onBlur={() => props.setValue(props.value)}
            type={type}
            placeholder={placeholder}
            fixedPlaceholder={fixedPlaceholder}
            minWidth={minWidth}
            maxWidth={maxWidth}
            disabled={disabled}
            readonly={readonly}
          />
        )}
      </Field>
    );
  }
}
