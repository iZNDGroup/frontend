import { Formik } from "formik";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Effect from "./Effect";

export default class Form extends React.Component {
  static propTypes = {
    /**
     * Render prop.
     * `function({ values, handleSubmit, isSubmitting, errors })`
     * `values: object` - Field values of the form.
     * `handleSubmit: function()` - Submit handler.
     * `isSubmitting: bool` - Submitting state. Either true or false.
     * `errors: object` - Form validation errors.
     * */
    children: PropTypes.func.isRequired,
    /** Initial field values of the form. */
    initialValues: PropTypes.object,
    /** Control whether the form should be reset if `initialValues` changes. */
    enableReinitialize: PropTypes.bool,
    /** A Yup schema. This is used for validation. See https://github.com/jquense/yup */
    validationSchema: PropTypes.object,
    /**
     * Called when the form is submitted.
     * `function({ values, setSubmitting, setErrors })`
     * `values: object` - Field values of the form.
     * `setSubmitting: function(bool)` - Set `isSubmitting`.
     * `setErrors: function(object)` - Set `errors`.
     * */
    onSubmit: PropTypes.func.isRequired,
    /**
     * Called when the dirty flag has changed.
     * `function(bool)`
     * */
    onDirtyChange: PropTypes.func
  };

  static defaultProps = {
    enableReinitialize: false
  };

  onSubmit = (values, { setSubmitting }) => {
    this.props.onSubmit({ values, setSubmitting });
  };

  getErrors = (errors, touched) => {
    return Object.keys(errors).reduce((obj, name) => {
      if (errors[name] && touched[name]) {
        obj[name] = errors[name];
      }
      return obj;
    }, {});
  };

  render() {
    const {
      children,
      initialValues,
      enableReinitialize,
      validationSchema,
      onDirtyChange
    } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        enableReinitialize={enableReinitialize}
        validationSchema={validationSchema}
        onSubmit={this.onSubmit}
      >
        {({ values, handleSubmit, isSubmitting, errors, touched }) => {
          const errorsTouched = this.getErrors(errors, touched);
          return (
            <Fragment>
              {onDirtyChange && <Effect onDirtyChange={onDirtyChange} />}
              {children({
                values,
                handleSubmit,
                isSubmitting,
                errors: errorsTouched
              })}
            </Fragment>
          );
        }}
      </Formik>
    );
  }
}
