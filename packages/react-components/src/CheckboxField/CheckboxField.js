import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import Checkbox from "../Checkbox/Checkbox";

export default class CheckboxField extends React.Component {
  static propTypes = {
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const { name, label, disabled } = this.props;
    return (
      <Field name={name}>
        {props => (
          <Checkbox
            checked={props.value}
            onChange={props.setValue}
            label={label}
            disabled={disabled}
          />
        )}
      </Field>
    );
  }
}
