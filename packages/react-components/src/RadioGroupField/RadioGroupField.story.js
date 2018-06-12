import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, RadioButton, RadioGroupField } from "../index";

storiesOf("Components/Forms", module).add(
  "RadioGroupField",
  createStory(
    "`RadioGroupField` should be used together with `Form`. `RadioGroupField` renders a `RadioGroup` component but will automatically get properties such as `onChange` and `selectedValue`. Instead one needs to set the `name` property to handle the data.",
    [
      {
        title: "Simple example",
        code: `
<Fragment>
  <RadioGroupField name="size">
    <RadioButton label="Small" value="S" />
    <RadioButton label="Medium" value="M" />
    <RadioButton label="Large" value="L" />
  </RadioGroupField>
  <p>{JSON.stringify(props.values)}</p>
</Fragment>
`,
        render: () => (
          <Form initialValues={{ size: "M" }} onSubmit={() => {}}>
            {props => (
              <Fragment>
                <RadioGroupField name="size">
                  <RadioButton label="Small" value="S" />
                  <RadioButton label="Medium" value="M" />
                  <RadioButton label="Large" value="L" />
                </RadioGroupField>
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [RadioGroupField, RadioButton, Form]
  )
);
