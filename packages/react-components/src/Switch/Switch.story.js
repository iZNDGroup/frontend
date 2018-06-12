import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { Switch } from "../index";

storiesOf("Components/Forms", module).add(
  "Switch",
  createStory(
    "Component used for having an on/off state.",
    [
      {
        title: "Simple example",
        code: `
<Switch
  checked={this.state.checked}
  onChange={checked => this.setState({ checked })}
/>
`,
        render: () => (
          <StateProvider initialState={{ checked: false }}>
            {(state, setState) => (
              <Switch
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
<Switch
  label="Show color"
  checked={this.state.checked}
  onChange={checked => this.setState({ checked })}
/>
`,
        render: () => (
          <StateProvider initialState={{ checked: false }}>
            {(state, setState) => (
              <Switch
                label="Show color"
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
<Switch
  checked={false}
  onChange={showLabel => this.setState({ showLabel })}
  disabled
/>
<Switch
  checked={true}
  onChange={showColor => this.setState({ showColor })}
  disabled
/>
`,
        render: () => (
          <Fragment>
            <Switch checked={false} onChange={ev => null} disabled />
            <Switch checked={true} onChange={ev => null} disabled />
          </Fragment>
        )
      }
    ],
    [Switch]
  )
);
