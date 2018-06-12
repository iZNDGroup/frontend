import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import StateProvider from "../storybook/StateProvider";
import { DropdownMenu, DropdownMenuDivider, DropdownMenuItem } from "../index";

storiesOf("Components/DropdownMenu", module).add(
  "DropdownMenu",
  createStory(
    "`DropdownMenu` can be used together with `DropdownButton` or `SplitButton` or opened when right clicking on an item.",
    [
      {
        title: "Simple example",
        code: `
<DropdownMenu open={true}>
  <DropdownMenuItem
    title="Dashboard"
    onClick={this._onShowDashboard}
  />
  <DropdownMenuItem
    title="Terminal"
    onClick={this._onShowTerminal}
  />
  <DropdownMenuItem
    title="Notes"
    onClick={this._onShowNotes}
  />
  <DropdownMenuItem
    title="Command control"
    onClick={this._onShowCommandControl}
  />
</DropdownMenu>
`,
        render: () => (
          <div style={{ position: "relative", height: 140 }}>
            <DropdownMenu open>
              <DropdownMenuItem
                title="Dashboard"
                onClick={action("Dashboard clicked")}
              />
              <DropdownMenuItem
                title="Terminal"
                onClick={action("Terminal clicked")}
              />
              <DropdownMenuItem
                title="Notes"
                onClick={action("Notes clicked")}
              />
              <DropdownMenuItem
                title="Command control"
                onClick={action("Command control clicked")}
              />
            </DropdownMenu>
          </div>
        )
      },
      {
        title: "Nested example",
        code: `
<DropdownMenu open={true}>
  <DropdownMenuItem title="A" onClick={this._onClickA} />
  <DropdownMenuItem title="B">
    <DropdownMenuItem title="B1" onClick={this._onClickB1} />
    <DropdownMenuItem title="B2">
      <DropdownMenuItem title="B2.1" onClick={this._onClickB21} />
      <DropdownMenuItem title="B2.2" onClick={this._onClickB22} />
    </DropdownMenuItem>
  </DropdownMenuItem>
</DropdownMenu>
`,
        render: () => (
          <div style={{ position: "relative", height: 80 }}>
            <DropdownMenu open>
              <DropdownMenuItem title="A" onClick={action("A clicked")} />
              <DropdownMenuItem title="B">
                <DropdownMenuItem title="B1" onClick={action("B1 clicked")} />
                <DropdownMenuItem title="B2">
                  <DropdownMenuItem
                    title="B2.1"
                    onClick={action("B2.1 clicked")}
                  />
                  <DropdownMenuItem
                    title="B2.2"
                    onClick={action("B2.2 clicked")}
                  />
                </DropdownMenuItem>
              </DropdownMenuItem>
            </DropdownMenu>
          </div>
        )
      },
      {
        title: "Key navigation example",
        text:
          "Press up/down arrows on your keyboard to navigate. Press enter to perform click event.",
        code: `
<DropdownMenu open keyNavigation selectedIndex={1}>
  <DropdownMenuItem title="One" onClick={this._onOne} />
  <DropdownMenuItem title="Two" onClick={this._onTwo} />
  <DropdownMenuItem title="Three" onClick={this._onThree} />
  <DropdownMenuItem title="Four"  onClick={this._onFour} />
</DropdownMenu>
`,
        render: () => (
          <div style={{ position: "relative", height: 140 }}>
            <DropdownMenu open keyNavigation selectedIndex={1}>
              <DropdownMenuItem title="One" onClick={action("One clicked")} />
              <DropdownMenuItem title="Two" onClick={action("Two clicked")} />
              <DropdownMenuItem
                title="Three"
                onClick={action("Three clicked")}
              />
              <DropdownMenuItem title="Four" onClick={action("Four clicked")} />
            </DropdownMenu>
          </div>
        )
      },
      {
        title: "Advanced example",
        code: `
<DropdownMenu open={state.open}>
  <DropdownMenuItem
    title="Edit user"
    onClick={this._onEditUser}
  />
  <DropdownMenuItem
    title="Manage custom fields"
    onClick={this._onManageCustomFields}
  />
  <DropdownMenuItem
    title="Generate QR code"
    onClick={this._onGenerateQRCode}
    disabled
  />
  <DropdownMenuDivider />
  <DropdownMenuItem
    title="Show empty workers"
    onClick={this._toggleEmptyWorkers}
    checked={this._showEmptyWorkers ? "checked" : null}
  />
  <DropdownMenuItem
    title="Show labels"
    onClick={this._toggleShowLabels}
    checked={this._showLabels ? "checked" : null}
  />
  <DropdownMenuDivider />
  <DropdownMenuItem
    title="Show 10 workers"
    onClick={() => this._setNumItems(10)}
    checked={this._numItems === 10 ? "radio" : null}
  />
  <DropdownMenuItem
    title="Show 25 workers"
    onClick={() => this._setNumItems(25)}
    checked={this._numItems === 25 ? "radio" : null}
  />
  <DropdownMenuItem
    title="Show 50 workers"
    onClick={() => this._setNumItems(50)}
    checked={this._numItems === 50 ? "radio" : null}
  />
</DropdownMenu>
`,
        render: () => (
          <StateProvider
            initialState={{
              open: true,
              showWorkers: true,
              showLabels: false,
              numItems: 10
            }}
          >
            {(state, setState) => (
              <div style={{ position: "relative", height: 280 }}>
                <DropdownMenu open={state.open}>
                  <DropdownMenuItem
                    title="Edit user"
                    onClick={action("Import clicked")}
                  />
                  <DropdownMenuItem
                    title="Manage custom fields"
                    onClick={action("Manage custom fields clicked")}
                  />
                  <DropdownMenuItem
                    title="Generate QR code"
                    onClick={action("Generate QR code clicked")}
                    disabled
                  />
                  <DropdownMenuDivider />
                  <DropdownMenuItem
                    title="Show empty workers"
                    onClick={() =>
                      setState(prevState => ({
                        showWorkers: !prevState.showWorkers
                      }))
                    }
                    checked={state.showWorkers ? "checked" : null}
                  />
                  <DropdownMenuItem
                    title="Show labels"
                    onClick={() =>
                      setState(prevState => ({
                        showLabels: !prevState.showLabels
                      }))
                    }
                    checked={state.showLabels ? "checked" : null}
                  />
                  <DropdownMenuDivider />
                  <DropdownMenuItem
                    title="Show 10 workers"
                    onClick={() => setState(prevState => ({ numItems: 10 }))}
                    checked={state.numItems === 10 ? "radio" : null}
                  />
                  <DropdownMenuItem
                    title="Show 25 workers"
                    onClick={() => setState(prevState => ({ numItems: 25 }))}
                    checked={state.numItems === 25 ? "radio" : null}
                  />
                  <DropdownMenuItem
                    title="Show 50 workers"
                    onClick={() => setState(prevState => ({ numItems: 50 }))}
                    checked={state.numItems === 50 ? "radio" : null}
                  />
                </DropdownMenu>
              </div>
            )}
          </StateProvider>
        )
      }
    ],
    [DropdownMenu, DropdownMenuItem, DropdownMenuDivider]
  )
);
