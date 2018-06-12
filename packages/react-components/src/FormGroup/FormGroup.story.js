import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, FormGroup, FormItem, TextInputField } from "../index";

storiesOf("Components/Forms", module).add(
  "FormGroup",
  createStory(
    "Component for graphically grouping form components.",
    [
      {
        title: "Simple example",
        code: `
<Form
  initialValues={{ name: "", phone: "", mobile: "", work: "" }}
  onSubmit={this._onSubmit}
>
  {() => (
    <Fragment>
      <FormGroup>
        <FormItem label="Name">
          <TextInputField name="name" />
        </FormItem>
        <FormItem label="Phone">
          <TextInputField name="phone" />
        </FormItem>
      </FormGroup>
      <FormGroup
        title="Optional phone numbers"
        helperText="Please fill in the form below."
      >
        <FormItem label="Mobile">
          <TextInputField name="mobile" />
        </FormItem>
        <FormItem label="Work">
          <TextInputField name="work" />
        </FormItem>
      </FormGroup>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ name: "", phone: "", mobile: "", work: "" }}
            onSubmit={() => {}}
          >
            {() => (
              <Fragment>
                <FormGroup>
                  <FormItem label="Name">
                    <TextInputField name="name" />
                  </FormItem>
                  <FormItem label="Phone">
                    <TextInputField name="phone" />
                  </FormItem>
                </FormGroup>
                <FormGroup
                  title="Optional phone numbers"
                  helperText="Please fill in the form below."
                >
                  <FormItem label="Mobile">
                    <TextInputField name="mobile" />
                  </FormItem>
                  <FormItem label="Work">
                    <TextInputField name="work" />
                  </FormItem>
                </FormGroup>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [FormGroup]
  )
);
