import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { Checkbox } from "../index";

storiesOf("Components/Forms", module).add(
  "Checkbox",
  createStory(
    "Basically a checkbox component.",
    [
      {
        title: "Simple example",
        code: `
<Checkbox
  name="checked"
  checked={this.state.checked}
  onChange={checked => this.setState({ checked })}
/>
`,
        render: () => (
          <StateProvider initialState={{ checked: false }}>
            {(state, setState) => (
              <Checkbox
                name="checked"
                checked={state.checked}
                onChange={checked => setState({ checked })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Label example",
        code: `
<Checkbox
  name="checked"
  label="Click to toggle"
  checked={this.state.checked}
  onChange={checked => this.setState({ checked })}
/>
`,
        render: () => (
          <StateProvider initialState={{ checked: false }}>
            {(state, setState) => (
              <Checkbox
                name="checked"
                label="Click to toggle"
                checked={state.checked}
                onChange={checked => setState({ checked })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Disabled examples",
        code: `
<Checkbox
  name="showLabel"
  checked={false}
  onChange={showLabel => this.setState({ showLabel })}
  disabled
/>
<Checkbox
  name="showColor"
  checked={true}
  onChange={showColor => this.setState({ showColor })}
  disabled
/>
`,
        render: () => (
          <Fragment>
            <Checkbox
              name="showLabel"
              checked={false}
              onChange={ev => null}
              disabled
            />
            <Checkbox
              name="showColor"
              checked={true}
              onChange={ev => null}
              disabled
            />
          </Fragment>
        )
      }
    ],
    [Checkbox]
  )
);
