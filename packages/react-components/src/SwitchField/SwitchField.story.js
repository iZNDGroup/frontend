import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, SwitchField } from "../index";

storiesOf("Components/Forms", module).add(
  "SwitchField",
  createStory(
    "`SwitchField` should be used together with `Form`. `SwitchField` renders a `Switch` component but will automatically get properties such as `onChange` and `checked`. Instead one needs to set the `name` property to handle the data.",
    [
      {
        title: "Simple example",
        code: `
<Form
  initialValues={{ one: true, two: false, three: false }}
  onSubmit={this._onSubmit}
>
  {props => (
    <Fragment>
      <SwitchField name="one" />
      <SwitchField name="two" />
      <SwitchField name="three" />
      <p>{JSON.stringify(props.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form
            initialValues={{ one: true, two: false, three: false }}
            onSubmit={() => {}}
          >
            {props => (
              <Fragment>
                <SwitchField name="one" />
                <SwitchField name="two" />
                <SwitchField name="three" />
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [SwitchField, Form]
  )
);
