import React from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { RadioButton, RadioGroup, RadioIconButton } from "../index";

storiesOf("Components/Forms", module).add(
  "RadioGroup",
  createStory(
    "Basically a radio component.",
    [
      {
        title: "RadioButton example",
        code: `
<RadioGroup
  selectedValue={this.state.size}
  onChange={size => this.setState({ size })}
>
  <RadioButton label="Small" value="S" />
  <RadioButton label="Medium" value="M" />
  <RadioButton label="Large" value="L" disabled />
</RadioGroup>
`,
        render: () => (
          <StateProvider initialState={{ size: "S" }}>
            {(state, setState) => (
              <RadioGroup
                selectedValue={state.size}
                onChange={size => setState({ size })}
              >
                <RadioButton label="Small" value="S" />
                <RadioButton label="Medium" value="M" />
                <RadioButton label="Large" value="L" disabled />
              </RadioGroup>
            )}
          </StateProvider>
        )
      },
      {
        title: "RadioIconButton example",
        code: `
<RadioGroup
  selectedValue={this.state.vehicleType}
  onChange={vehicleType => this.setState({ vehicleType })}
>
  <RadioIconButton label="bike" value="bike" icon="bicycle" />
  <RadioIconButton label="train" value="train" icon="train" />
  <RadioIconButton label="plane" value="plane" icon="plane" />
  <RadioIconButton label="bus" value="bus" icon="bus" />
  <RadioIconButton label="car" value="car" icon="car" disabled />
</RadioGroup>
`,
        render: () => (
          <StateProvider initialState={{ vehicleType: "train" }}>
            {(state, setState) => (
              <RadioGroup
                selectedValue={state.vehicleType}
                onChange={vehicleType => setState({ vehicleType })}
              >
                <RadioIconButton label="bike" value="bike" icon="bicycle" />
                <RadioIconButton label="train" value="train" icon="train" />
                <RadioIconButton label="plane" value="plane" icon="plane" />
                <RadioIconButton label="bus" value="bus" icon="bus" />
                <RadioIconButton label="car" value="car" icon="car" disabled />
              </RadioGroup>
            )}
          </StateProvider>
        )
      }
    ],
    [RadioGroup, RadioButton, RadioIconButton]
  )
);
