import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { DropdownMenu, DropdownMenuItem, SplitButton } from "../index";

storiesOf("Components/Buttons", module).add(
  "SplitButton",
  createStory(
    "`SplitButton` is a button which opens a `DropDownMenu` when clicked on the arrow to the right. Clicking on left side of the button will perform the most recent action again.",
    [
      {
        title: "Simple example",
        code: `
<SplitButton
  title="Geofence"
  type="primary"
  icon="plus"
  menu={
    <DropdownMenu>
      <DropdownMenuItem
        title="New circle"
        onClick={this._onNewCircle}
      />
      <DropdownMenuItem
        title="New route"
        onClick={this._onNewRoute}
      />
      <DropdownMenuItem
        title="New polygon"
        onClick={this._onNewPolygon}
      />
    </DropdownMenu>
  }
/>
`,
        render: () => (
          <SplitButton
            title="Geofence"
            type="primary"
            icon="plus"
            menu={
              <DropdownMenu>
                <DropdownMenuItem
                  title="New circle"
                  onClick={action("New circle clicked")}
                />
                <DropdownMenuItem
                  title="New route"
                  onClick={action("New route clicked")}
                />
                <DropdownMenuItem
                  title="New polygon"
                  onClick={action("New polygon clicked")}
                />
              </DropdownMenu>
            }
          />
        )
      }
    ],
    [SplitButton, DropdownMenu, DropdownMenuItem]
  )
);
