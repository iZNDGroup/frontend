import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { TextInput } from "../index";

storiesOf("Components/Forms", module).add(
  "TextInput",
  createStory(
    "Component used for handling user input.",
    [
      {
        title: "Simple example",
        code: `
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
/>
`,
        render: () => (
          <StateProvider initialState={{ text: "" }}>
            {(state, setState) => (
              <TextInput
                value={state.text}
                onChange={value => setState({ text: value })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Password example",
        code: `
<TextInput
  type="password"
  value={this.state.password}
  onChange={value => this.setState({ password: value })}
/>
      `,
        render: () => (
          <StateProvider initialState={{ password: "" }}>
            {(state, setState) => (
              <TextInput
                type="password"
                value={state.password}
                onChange={value => setState({ password: value })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Controlled width example",
        text: "Minimum width is set to 200px and maximum to 400px.",
        code: `
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
  minWidth={200}
  maxWidth={400}
/>
`,
        render: () => (
          <StateProvider initialState={{ text: "" }}>
            {(state, setState) => (
              <TextInput
                value={state.text}
                onChange={value => setState({ text: value })}
                minWidth={200}
                maxWidth={400}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Disabled example",
        code: `
<TextInput
  value="This text is disabled"
  onChange={value => this.setState({ name: value })}
  disabled
/>
      `,
        render: () => (
          <StateProvider initialState={{ text: "" }}>
            {(state, setState) => (
              <TextInput
                value="This text is disabled"
                onChange={value => setState({ text: value })}
                disabled
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Error example",
        code: `
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
  error
/>
`,
        render: () => (
          <StateProvider initialState={{ text: "" }}>
            {(state, setState) => (
              <TextInput
                value={state.text}
                onChange={value => setState({ text: value })}
                error
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Placeholder examples",
        code: `
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
  placeholder="e.g. Kungsportsavenyen 3A"
/>
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
  placeholder="Please enter the speed"
  fixedPlaceholder="km/h"
/>
<TextInput
  value={this.state.name}
  onChange={value => this.setState({ name: value })}
  placeholder="Please enter the speed"
  fixedPlaceholder="km/h"
  error
/>
`,
        render: () => (
          <StateProvider initialState={{ text1: "", text2: "", text3: "" }}>
            {(state, setState) => (
              <Fragment>
                <TextInput
                  value={state.text1}
                  onChange={value => setState({ text1: value })}
                  placeholder="e.g. Kungsportsavenyen 3A"
                />
                <TextInput
                  value={state.text2}
                  onChange={value => setState({ text2: value })}
                  placeholder="Please enter the speed"
                  fixedPlaceholder="km/h"
                />
                <TextInput
                  value={state.text3}
                  onChange={value => setState({ text3: value })}
                  placeholder="Please enter the speed"
                  fixedPlaceholder="km/h"
                  error
                />
              </Fragment>
            )}
          </StateProvider>
        )
      }
    ],
    [TextInput]
  )
);
