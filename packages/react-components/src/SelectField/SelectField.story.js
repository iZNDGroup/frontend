import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Form, SelectField } from "../index";

storiesOf("Components/Forms", module).add(
  "SelectField",
  createStory(
    "`SelectField` should be used together with `Form`. `SelectField` renders a `Select` component but will automatically get properties such as `onSelect`, `onRemove` and `selectedValue`. Instead one needs to set the `name` property to handle the data.",
    [
      {
        title: "Simple example",
        code: `
<Form initialValues={{ colors: ["g", "bl"] }} onSubmit={this._onSubmit}>
  {props => (
    <Fragment>
      <SelectField
        name="colors"
        options={[
          { name: "Red", value: "r" },
          { name: "Green", value: "g" },
          { name: "Blue", value: "b" },
          { name: "Yellow", value: "y" },
          { name: "Black", value: "bl" }
        ]}
        multiple={true}
        searchable={true}
      />
      <p>{JSON.stringify(props.values)}</p>
    </Fragment>
  )}
</Form>
`,
        render: () => (
          <Form initialValues={{ colors: ["g", "bl"] }} onSubmit={() => {}}>
            {props => (
              <Fragment>
                <SelectField
                  name="colors"
                  options={[
                    { name: "Red", value: "r" },
                    { name: "Green", value: "g" },
                    { name: "Blue", value: "b" },
                    { name: "Yellow", value: "y" },
                    { name: "Black", value: "bl" }
                  ]}
                  multiple={true}
                  searchable={true}
                />
                <p>{JSON.stringify(props.values)}</p>
              </Fragment>
            )}
          </Form>
        )
      }
    ],
    [SelectField, Form]
  )
);
