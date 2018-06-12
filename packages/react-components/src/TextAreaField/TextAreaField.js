import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import TextArea from "../TextArea/TextArea";

export default class TextAreaField extends React.Component {
  static propTypes = {
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    minRows: PropTypes.number,
    /** Only set if there should be a max height of the component. */
    maxRows: PropTypes.number,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool
  };

  static defaultProps = {
    minRows: 3,
    disabled: false,
    readonly: false
  };

  render() {
    const {
      name,
      disabled,
      placeholder,
      minRows,
      maxRows,
      readonly
    } = this.props;
    return (
      <Field name={name}>
        {props => (
          <TextArea
            name={name}
            value={props.value}
            error={props.error}
            onChange={props.setValue}
            onBlur={() => props.setValue(props.value)}
            placeholder={placeholder}
            minRows={minRows}
            maxRows={maxRows}
            disabled={disabled}
            readonly={readonly}
          />
        )}
      </Field>
    );
  }
}
