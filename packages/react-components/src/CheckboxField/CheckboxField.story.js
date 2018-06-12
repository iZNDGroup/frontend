import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { CheckboxField, Form } from "../index";

storiesOf("Components/Forms", module).add(
  "CheckboxField",
  createStory(
    "`CheckboxField` should be used together with `Form`. `CheckboxField` renders a `Checkbox` component but will automatically get properties such as `onChange` and `checked`. Instead one needs to set the `name` property to handle the data.",
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
      <CheckboxField name="one" />
      <CheckboxField name="two" />
      <CheckboxField name="three" />
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
                <CheckboxField name="one" />
                <CheckboxField name="two" />
                <CheckboxField name="three" />
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [CheckboxField, Form]
  )
);
