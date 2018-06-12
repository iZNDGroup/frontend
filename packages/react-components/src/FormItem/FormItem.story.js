import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { CheckboxField, Form, FormItem, TextInputField } from "../index";

storiesOf("Components/Forms", module).add(
  "FormItem",
  createStory(
    "Component for displaying form components. Examples below uses a `TextInput` (that is not editable) but it can any form component or anything else.",
    [
      {
        title: "Simple example",
        code: `
<Form initialValues={{ worker: "" }} onSubmit={this._onSubmit}>
  {() => (
    <FormItem label="Worker name">
      <TextInputField name="worker" />
    </FormItem>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ worker: "" }} onSubmit={() => {}}>
            {() => (
              <FormItem label="Worker name">
                <TextInputField name="worker" />
              </FormItem>
            )}
          </Form>
        )
      },
      {
        title: "Required example",
        text: "Note that this `required` prop is only for visualization.",
        code: `
<Form initialValues={{ worker: "" }} onSubmit={this._onSubmit}>
  {() => (
    <FormItem label="Worker name" required>
      <TextInputField name="worker" />
    </FormItem>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ worker: "" }} onSubmit={() => {}}>
            {() => (
              <FormItem label="Worker name" required>
                <TextInputField name="worker" />
              </FormItem>
            )}
          </Form>
        )
      },
      {
        title: "Helper text example",
        code: `
<Form initialValues={{ worker: "" }} onSubmit={this._onSubmit}>
  {() => (
    <FormItem label="Worker name" helperText="Please enter name">
      <TextInputField name="worker" />
    </FormItem>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ worker: "" }} onSubmit={() => {}}>
            {() => (
              <FormItem label="Worker name" helperText="Please enter name">
                <TextInputField name="worker" />
              </FormItem>
            )}
          </Form>
        )
      },
      {
        title: "Label on top example",
        code: `
<Form initialValues={{ worker: "" }} onSubmit={this._onSubmit}>
  {() => (
    <FormItem
      label="Worker name"
      labelPosition="top"
      helperText="Please enter name"
    >
      <TextInputField name="worker" />
    </FormItem>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ worker: "" }} onSubmit={() => {}}>
            {() => (
              <FormItem
                label="Worker name"
                labelPosition="top"
                helperText="Please enter name"
              >
                <TextInputField name="worker" />
              </FormItem>
            )}
          </Form>
        )
      },
      {
        title: "Multiple children examples",
        code: `
<Form
  initialValues={{ one: true, ... }}
  onSubmit={() => {}}
>
  {() => (
    <Fragment>
      <FormItem label="Horizontal checkboxes">
        <CheckboxField name="one" label="One" />
        <CheckboxField name="two" label="Two" />
        <CheckboxField name="three" label="Three" />
      </FormItem>
      <FormItem label="Horizontal inputs">
        <TextInputField name="firstName" />
        <TextInputField name="lastName" />
      </FormItem>
      <FormItem
        label="Vertical checkboxes"
        childrenAlignment="vertical"
      >
        <CheckboxField name="mon" label="Monday" />
        <CheckboxField name="tue" label="Tuesday" />
        <CheckboxField name="wed" label="Wednesday" />
        <CheckboxField name="thu" label="Thursday" />
        <CheckboxField name="fri" label="Friday" />
        <CheckboxField name="sat" label="Saturday" />
        <CheckboxField name="sun" label="Sunday" />
      </FormItem>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{
              one: true,
              two: false,
              three: false,
              firstName: "",
              lastName: "",
              mon: false,
              tue: false,
              wed: false,
              thu: false,
              fri: true,
              sat: true,
              sun: false
            }}
            onSubmit={() => {}}
          >
            {() => (
              <Fragment>
                <FormItem label="Horizontal checkboxes">
                  <CheckboxField name="one" label="One" />
                  <CheckboxField name="two" label="Two" />
                  <CheckboxField name="three" label="Three" />
                </FormItem>
                <FormItem label="Horizontal inputs">
                  <TextInputField name="firstName" />
                  <TextInputField name="lastName" />
                </FormItem>
                <FormItem
                  label="Vertical checkboxes"
                  childrenAlignment="vertical"
                >
                  <CheckboxField name="mon" label="Monday" />
                  <CheckboxField name="tue" label="Tuesday" />
                  <CheckboxField name="wed" label="Wednesday" />
                  <CheckboxField name="thu" label="Thursday" />
                  <CheckboxField name="fri" label="Friday" />
                  <CheckboxField name="sat" label="Saturday" />
                  <CheckboxField name="sun" label="Sunday" />
                </FormItem>
              </Fragment>
            )}
          </Form>
        )
      },
      {
        title: "Custom example",
        code: `
<FormItem label="Custom component">
  <div style={{ background: "red", color: "white", padding: 10 }}>
    You can render anything here. It does not need to be a form
    component.
  </div>
</FormItem>
`,
        render: () => (
          <FormItem label="Custom component">
            <div style={{ background: "red", color: "white", padding: 10 }}>
              You can render anything here. It does not need to be a form
              component.
            </div>
          </FormItem>
        )
      }
    ],
    [FormItem]
  )
);
