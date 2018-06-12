import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { Select } from "../index";

storiesOf("Components/Forms", module).add(
  "Select",
  createStory(
    "Component for selecting one or multiple values from a number of options.",
    [
      {
        title: "Single select example",
        code: `
<Select
  options={[
    { name: "Rob", value: "R" },
    { name: "Bob", value: "B" },
    { name: "Joe", value: "J" }
  ]}
  selectedValue={this.state.worker}
  onSelect={worker => this.setState({ worker })}
/>
`,
        render: () => (
          <StateProvider initialState={{ worker: "B" }}>
            {(state, setState) => (
              <Select
                options={[
                  { name: "Rob", value: "R" },
                  { name: "Bob", value: "B" },
                  { name: "Joe", value: "J" }
                ]}
                selectedValue={state.worker}
                onSelect={worker => setState({ worker })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Multiple select example",
        code: `
<Select
  multiple
  options={[
    { name: "Red", value: "r" },
    { name: "Green", value: "g" },
    { name: "Blue", value: "b" },
    { name: "Yellow", value: "y" },
    { name: "Black", value: "bl" }
  ]}
  selectedValue={this.state.colors}
  onSelect={color => {
    const colors = this.state.colors.concat(color);
    this.setState({ colors });
  }}
  onRemove={index => {
    const colors = this.state.colors.slice();
    colors.splice(index, 1);
    this.setState({ colors });
  }}
/>
      `,
        render: () => (
          <StateProvider initialState={{ colors: [] }}>
            {(state, setState) => (
              <Select
                multiple
                options={[
                  { name: "Red", value: "r" },
                  { name: "Green", value: "g" },
                  { name: "Blue", value: "b" },
                  { name: "Yellow", value: "y" },
                  { name: "Black", value: "bl" }
                ]}
                selectedValue={state.colors}
                onSelect={color => {
                  const colors = state.colors.concat(color);
                  setState({ colors });
                }}
                onRemove={index => {
                  const colors = state.colors.slice();
                  colors.splice(index, 1);
                  setState({ colors });
                }}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Searchable single select example",
        code: `
<Select
  searchable
  options={[
    { name: "Rob", value: "R" },
    { name: "Bob", value: "B" },
    { name: "Joe", value: "J" }
  ]}
  selectedValue={this.state.worker}
  onSelect={worker => this.setState({ worker })}
/>
`,
        render: () => (
          <StateProvider initialState={{ worker: "" }}>
            {(state, setState) => (
              <Select
                searchable
                options={[
                  { name: "Rob", value: "R" },
                  { name: "Bob", value: "B" },
                  { name: "Joe", value: "J" }
                ]}
                selectedValue={state.worker}
                onSelect={worker => setState({ worker })}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Searchable multiple select example",
        code: `
<Select
  searchable
  multiple
  options={[
    { name: "Red", value: "r" },
    { name: "Green", value: "g" },
    { name: "Blue", value: "b" },
    { name: "Yellow", value: "y" },
    { name: "Black", value: "bl" }
  ]}
  selectedValue={this.state.colors}
  onSelect={color => {
    const colors = this.state.colors.concat(color);
    this.setState({ colors });
  }}
  onRemove={index => {
    const colors = this.state.colors.slice();
    colors.splice(index, 1);
    this.setState({ colors });
  }}
/>
      `,
        render: () => (
          <StateProvider initialState={{ colors: [] }}>
            {(state, setState) => (
              <Select
                searchable
                multiple
                options={[
                  { name: "Red", value: "r" },
                  { name: "Green", value: "g" },
                  { name: "Blue", value: "b" },
                  { name: "Yellow", value: "y" },
                  { name: "Black", value: "bl" }
                ]}
                selectedValue={state.colors}
                onSelect={color => {
                  const colors = state.colors.concat(color);
                  setState({ colors });
                }}
                onRemove={index => {
                  const colors = state.colors.slice();
                  colors.splice(index, 1);
                  setState({ colors });
                }}
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Disabled select examples",
        code: `
<Select
  disabled
  multiple
  options={[
    { name: "Green", value: "g" },
    { name: "Blue", value: "b" }
  ]}
  selectedValue={this.state.colors}
  onSelect={this._onSelect}
/>

<Select
  disabled
  options={[{ name: "Rob", value: "R" }]}
  selectedValue={this.state.worker}
  onSelect={this._onSelect}
/>
      `,
        render: () => (
          <Fragment>
            <StateProvider initialState={{ colors: ["g", "b"] }}>
              {(state, setState) => (
                <Select
                  disabled
                  multiple
                  options={[
                    { name: "Green", value: "g" },
                    { name: "Blue", value: "b" }
                  ]}
                  selectedValue={state.colors}
                  onSelect={color => {}}
                />
              )}
            </StateProvider>
            <StateProvider initialState={{ worker: "R" }}>
              {(state, setState) => (
                <Select
                  disabled
                  options={[{ name: "Rob", value: "R" }]}
                  selectedValue={state.worker}
                  onSelect={worker => {}}
                />
              )}
            </StateProvider>
          </Fragment>
        )
      }
    ],
    [Select]
  )
);
