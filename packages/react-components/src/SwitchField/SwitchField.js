import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import Switch from "../Switch/Switch";

export default class SwitchField extends React.Component {
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
          <Switch
            label={label}
            checked={props.value}
            onChange={props.setValue}
            disabled={disabled}
          />
        )}
      </Field>
    );
  }
}
