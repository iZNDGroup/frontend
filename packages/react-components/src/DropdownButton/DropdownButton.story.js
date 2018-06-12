import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { DropdownButton, DropdownMenu, DropdownMenuItem } from "../index";

storiesOf("Components/Buttons", module).add(
  "DropdownButton",
  createStory(
    "`DropdownButton` is a button which opens a `DropDownMenu` when clicked. It can be used for both single select and multiple select.",
    [
      {
        title: "Simple example",
        code: `
<DropdownButton
  title="Actions"
  menu={
    <DropdownMenu>
      <DropdownMenuItem title="Add" onClick={this._onAdd} />
      <DropdownMenuItem title="Move" onClick={this._onMove} />
      <DropdownMenuItem title="Ungroup" onClick={this._onUngroup} />
      <DropdownMenuItem title="Delete" onClick={this._onDelete} />
    </DropdownMenu>
  }
/>
`,
        render: () => (
          <DropdownButton
            title="Actions"
            menu={
              <DropdownMenu>
                <DropdownMenuItem title="Add" onClick={action("Add clicked")} />
                <DropdownMenuItem
                  title="Move"
                  onClick={action("Move clicked")}
                />
                <DropdownMenuItem
                  title="Ungroup"
                  onClick={action("Ungroup clicked")}
                />
                <DropdownMenuItem
                  title="Delete"
                  onClick={action("Delete clicked")}
                />
              </DropdownMenu>
            }
          />
        )
      }
    ],
    [DropdownButton, DropdownMenu, DropdownMenuItem]
  )
);
