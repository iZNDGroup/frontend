import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, TextInputField } from "../index";

storiesOf("Components/Forms", module).add(
  "TextInputField",
  createStory(
    "`TextInputField` should be used together with `Form`. `TextInputField` renders a `TextInput` component but will automatically get properties such as `onChange`, `onBlur`, `value` and `error`. Instead one needs to set the `name` property to handle the data.",
    [
      {
        title: "Simple example",
        code: `
<Form
  initialValues={{ firstName: "Mr.", lastName: "" }}
  onSubmit={this._onSubmit}
>
  {props => (
    <Fragment>
      <TextInputField name="firstName" />
      <TextInputField name="lastName" />
      <p>{JSON.stringify(props.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ firstName: "Mr.", lastName: "" }}
            onSubmit={() => {}}
          >
            {props => (
              <Fragment>
                <TextInputField name="firstName" />
                <TextInputField name="lastName" />
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [TextInputField, Form]
  )
);
