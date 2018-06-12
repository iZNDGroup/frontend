import React from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { TextArea } from "../index";

storiesOf("Components/Forms", module).add(
  "TextArea",
  createStory(
    "Component used for handling user input.",
    [
      {
        title: "Simple example",
        code: `
<TextArea
  value={this.state.info}
  onChange={value => this.setState({ info: value })}
/>
`,
        render: () => (
          <StateProvider initialState={{ info: "" }}>
            {(state, setState) => (
              <TextArea
                value={state.info}
                onChange={value => setState({ info: value })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Disabled example",
        code: `
<TextArea
  value={this.state.info}
  onChange={value => this.setState({ info: value })}
  disabled
/>
`,
        render: () => (
          <StateProvider initialState={{ info: "This text is disabled" }}>
            {(state, setState) => (
              <TextArea
                value={state.info}
                onChange={value => setState({ info: value })}
                disabled
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Custom height example",
        text: "The component will display 1-5 rows depending on content.",
        code: `
<TextArea
  value={this.state.info}
  onChange={value => this.setState({ info: value })}
  minRows={1}
  maxRows={5}
/>
`,
        render: () => (
          <StateProvider initialState={{ info: "" }}>
            {(state, setState) => (
              <TextArea
                value={state.info}
                onChange={value => setState({ info: value })}
                minRows={1}
                maxRows={5}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Error example",
        code: `
<TextArea
  value={this.state.info}
  onChange={value => this.setState({ info: value })}
  error
/>
`,
        render: () => (
          <StateProvider initialState={{ info: "" }}>
            {(state, setState) => (
              <TextArea
                value={state.info}
                onChange={value => setState({ info: value })}
                error
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Placeholder example",
        code: `
<TextArea
  value={this.state.info}
  onChange={value => this.setState({ info: value })}
  placeholder="Please enter a comment"
/>
`,
        render: () => (
          <StateProvider initialState={{ info: "" }}>
            {(state, setState) => (
              <TextArea
                value={state.info}
                onChange={value => setState({ info: value })}
                placeholder="Please enter a comment"
              />
            )}
          </StateProvider>
        )
      }
    ],
    [TextArea]
  )
);
