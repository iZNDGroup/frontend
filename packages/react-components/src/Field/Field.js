import PropTypes from "prop-types";
import React from "react";
import { Field as FormikField } from "formik";

export default class Field extends React.Component {
  static propTypes = {
    /**
     * Render prop: `({ setValue, value, error })`
     * `setValue: function(string)`: Sets the new value of the field.
     * `value: string`: Value of the field.
     * `error: bool`: Indicates whetever field has an error.
     * */
    children: PropTypes.func.isRequired,
    /** Needs to match one of the keys in the object passed to `Form` component's `initialValues` property. */
    name: PropTypes.string.isRequired
  };

  render() {
    const { name, children } = this.props;
    return (
      <FormikField name={name}>
        {({ field, form }) => {
          const { errors, touched } = form;
          const value = field.value;
          const error = errors[name] && touched[name];
          const setValue = value => {
            form.setFieldValue(field.name, value);
            form.setFieldTouched(field.name, true);
          };
          return children({ value, setValue, error });
        }}
      </FormikField>
    );
  }
}
