import React, { Fragment } from "react";
import Yup from "yup";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import {
  CheckboxField,
  Form,
  FormItem,
  SaveButton,
  TextInputField
} from "../index";

storiesOf("Components/Forms", module).add(
  "Form",
  createStory(
    'Component for handling forms. Should be used together with "Field" components such as `CheckboxField`, `RadioGroupField`, `SelectField`, `SwitchField` and `TextInputField`.',
    [
      {
        title: "Simple example",
        code: `
<Form
  initialValues={{ firstName: "Mr. ", lastName: "" }}
  onSubmit={({ values, setSubmitting }) => {
    setSubmitting(true);
    console.log("form values", values);
    setTimeout(() => setSubmitting(false), 2000);
  }}
>
  {props => {
    const { handleSubmit, isSubmitting } = props;
    return (
      <Fragment>
        <FormItem
          label="First name"
          helperText="Please use with Mr., Mrs. or Ms."
        >
          <TextInputField name="firstName" />
        </FormItem>
        <FormItem label="Last name">
          <TextInputField name="lastName" />
        </FormItem>
        <SaveButton onClick={handleSubmit} disabled={isSubmitting} />
      </Fragment>
    );
  }}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ firstName: "Mr. ", lastName: "" }}
            onSubmit={({ values, setSubmitting }) => {
              setSubmitting(true);
              action("form values")(values);
              setTimeout(() => setSubmitting(false), 2000);
            }}
          >
            {props => {
              const { handleSubmit, isSubmitting } = props;
              return (
                <Fragment>
                  <FormItem
                    label="First name"
                    helperText="Please use with Mr., Mrs. or Ms."
                  >
                    <TextInputField name="firstName" />
                  </FormItem>
                  <FormItem label="Last name">
                    <TextInputField name="lastName" />
                  </FormItem>
                  <SaveButton onClick={handleSubmit} disabled={isSubmitting} />
                </Fragment>
              );
            }}
          </Form>
        )
      },
      {
        title: "Validation example",
        code: `
<Form
  initialValues={{ fullName: "", age: "", terms: false }}
  validationSchema={Yup.object().shape({
    fullName: Yup.string()
      .required("Required field")
      .matches(/^((?!['<>]).)*$/, "Invalid characters")
      .max(64, "Maximum 64 characters"),
    age: Yup.number()
      .typeError("Must be a number")
      .required("Required field"),
    terms: Yup.boolean().equals([true], "You must accept terms")
  })}
  onSubmit={({ values }) => {
    console.log("form values", values);
  }}
>
  {props => {
    const { handleSubmit, errors } = props;
    return (
      <Fragment>
        <FormItem
          label="Your name"
          required
          helperText="Use any characters except '<>"
          errorText={errors.fullName}
        >
          <TextInputField name="fullName" />
        </FormItem>
        <FormItem label="Your age" required errorText={errors.age}>
          <TextInputField name="age" />
        </FormItem>
        <FormItem label="" errorText={errors.terms}>
          <CheckboxField name="terms" label="I accept terms and conditions />
        </FormItem>
        <SaveButton onClick={handleSubmit} />
      </Fragment>
    );
  }}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ fullName: "", age: "", terms: false }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string()
                .required("Required field")
                .matches(/^((?!['<>]).)*$/, "Invalid characters")
                .max(64, "Maximum 64 characters"),
              age: Yup.number()
                .typeError("Must be a number")
                .required("Required field"),
              terms: Yup.boolean().equals([true], "You must accept terms")
            })}
            onSubmit={({ values }) => {
              action("form values")(values);
            }}
          >
            {props => {
              const { handleSubmit, errors } = props;
              return (
                <Fragment>
                  <FormItem
                    label="Your name"
                    required
                    helperText="Use any characters except '<>"
                    errorText={errors.fullName}
                  >
                    <TextInputField name="fullName" />
                  </FormItem>
                  <FormItem label="Your age" required errorText={errors.age}>
                    <TextInputField name="age" />
                  </FormItem>
                  <FormItem label="" errorText={errors.terms}>
                    <CheckboxField
                      name="terms"
                      label="I accept terms and conditions"
                    />
                  </FormItem>
                  <SaveButton onClick={handleSubmit} />
                </Fragment>
              );
            }}
          </Form>
        )
      }
    ],
    [Form, FormItem]
  )
);
