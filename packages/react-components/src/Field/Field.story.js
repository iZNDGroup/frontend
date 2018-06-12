import React, { Fragment } from "react";
import Yup from "yup";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Field, Form } from "../index";

storiesOf("Components/Forms", module).add(
  "Field",
  createStory(
    "`Field` should be used together with `Form`. `Field` takes a render property that allows any kind rendering.",
    [
      {
        title: "Simple example",
        code: `
<Form initialValues={{ name: "Mr." }} onSubmit={this._onSubmit}>
  {formProps => (
    <Fragment>
      <Field name="name">
        {fieldProps => (
          <input
            type="text"
            value={fieldProps.value}
            onChange={ev => fieldProps.setValue(ev.target.value)}
          />
        )}
      </Field>
      <p>{JSON.stringify(formProps.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ name: "Mr." }} onSubmit={() => {}}>
            {formProps => (
              <Fragment>
                <Field name="name">
                  {fieldProps => (
                    <input
                      type="text"
                      value={fieldProps.value}
                      onChange={ev => fieldProps.setValue(ev.target.value)}
                    />
                  )}
                </Field>
                <p>{JSON.stringify(formProps.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      },
      {
        title: "Validation example",
        code: `
<Form
  initialValues={{ name: "Mr." }}
  validationSchema={Yup.object().shape({
    name: Yup.string()
      .required("Required field")
      .max(10, "Maximum 10 characters")
  })}
  onSubmit={this._onSubmit}
>
  {formProps => (
    <Fragment>
      <Field name="name">
        {fieldProps => (
          <input
            type="text"
            value={fieldProps.value}
            onChange={ev => fieldProps.setValue(ev.target.value)}
            style={{ background: fieldProps.error ? "red" : "white" }}
          />
        )}
      </Field>
      <p>{JSON.stringify(formProps.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ name: "Mr." }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required("Required field")
                .max(10, "Maximum 10 characters")
            })}
            onSubmit={() => {}}
          >
            {formProps => (
              <Fragment>
                <Field name="name">
                  {fieldProps => (
                    <input
                      type="text"
                      value={fieldProps.value}
                      onChange={ev => fieldProps.setValue(ev.target.value)}
                      style={{ background: fieldProps.error ? "red" : "white" }}
                    />
                  )}
                </Field>
                <p>{JSON.stringify(formProps.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [Field, Form]
  )
);
