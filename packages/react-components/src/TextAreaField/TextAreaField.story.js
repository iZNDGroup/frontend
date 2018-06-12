import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, TextAreaField } from "../index";

storiesOf("Components/Forms", module).add(
  "TextAreaField",
  createStory(
    "`TextAreaField` should be used together with `Form`. `TextAreaField` renders a `TextArea` component but will automatically get properties such as `onChange`, `onBlur`, `value` and `error`. Instead one needs to set the `name` property to handle the data.",
    [
      {
        title: "Simple example",
        code: `
<Form
  initialValues={{ info: "" }}
  onSubmit={this._onSubmit}
>
  {props => (
    <Fragment>
      <TextAreaField name="info" />
      <p>{JSON.stringify(props.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ info: "First row...\nSecond row..." }}
            onSubmit={() => {}}
          >
            {props => (
              <Fragment>
                <TextAreaField name="info" />
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [TextAreaField, Form]
  )
);
