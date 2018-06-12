import PropTypes from "prop-types";
import React from "react";
import Field from "../Field/Field";
import Select from "../Select/Select";

export default class SelectField extends React.Component {
  static propTypes = {
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
      })
    ),
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    /** Whether or not multiple values can be selected. */
    multiple: PropTypes.bool
  };

  static defaultProps = {
    options: [],
    disabled: false,
    searchable: false,
    multiple: false
  };

  render() {
    const { name, options, disabled, searchable, multiple } = this.props;
    return (
      <Field name={name}>
        {props => (
          <Select
            selectedValue={props.value}
            onSelect={value => {
              const newValue = multiple ? props.value.concat(value) : value;
              props.setValue(newValue);
            }}
            onRemove={index => {
              const newValues = props.value.slice();
              newValues.splice(index, 1);
              props.setValue(newValues);
            }}
            options={options}
            searchable={searchable}
            multiple={multiple}
            disabled={disabled}
          />
        )}
      </Field>
    );
  }
}
