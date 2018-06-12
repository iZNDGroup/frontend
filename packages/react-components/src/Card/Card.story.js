import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { Card } from "../index";

storiesOf("Components/Cards", module).add(
  "Card",
  createStory(
    "`Card` can be used as an alternative to displaying data in a table. Works fine together with the `Carousel` component.",
    [
      {
        title: "Simple examples",
        code: `
<Card
  title="Geofence #332"
  borderColor="green"
/>
<Card title="Geofence #343" />
<Card
  title="Job #1232"
  subtitle="Gothenburg, Sweden"
  borderColor="red"
/>
`,
        render: () => (
          <Fragment>
            <Card title="Geofence #332" borderColor="green" />
            <Card title="Geofence #343" />
            <Card
              title="Job #1232"
              subtitle="Gothenburg, Sweden"
              borderColor="red"
            />
          </Fragment>
        )
      },
      {
        title: "Full width example",
        code: `
<Card
  title="Full width"
  subtitle="This card has 100% width."
  fullWidth
  borderColor="orange"
/>
`,
        render: () => (
          <Card
            title="Full width"
            subtitle="This card has 100% width."
            fullWidth
            borderColor="orange"
          />
        )
      },
      {
        title: "Selected example",
        code: `<Card title="Selected card" borderColor="green" selected />`,
        render: () => (
          <StateProvider initialState={{ selected: true }}>
            {(state, setState) => (
              <Card
                title={"Click to " + (state.selected ? "deselected" : "select")}
                selected={state.selected}
                borderColor="green"
                onClick={() =>
                  setState(prevState => ({
                    selected: !prevState.selected
                  }))
                }
              />
            )}
          </StateProvider>
        )
      },
      {
        title: "Action examples",
        code: `
<Card
  title="Click me"
  borderColor="orange"
  onClick={this._onClick}
/>
<Card
  title="Right click me"
  borderColor="purple"
  onContextMenu={this._onContextMenu}
/>
`,
        render: () => (
          <Fragment>
            <Card
              title="Click me"
              borderColor="orange"
              onClick={action("Card clicked")}
            />
            <Card
              title="Right click me"
              borderColor="purple"
              onContextMenu={action("Card right clicked")}
            />
          </Fragment>
        )
      }
    ],
    [Card]
  )
);
