import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import {
  Button,
  CancelButton,
  DeleteButton,
  ScrollableContent,
  SaveButton,
  BottomToolbar
} from "../index";

storiesOf("Components/Toolbars", module).add(
  "BottomToolbar",
  createStory(
    "`BottomToolbar` is used to display user actions. Example is to display Save/Delete buttons in window forms or batch operations in a *panel*.",
    [
      {
        title: "Simple example",
        code: `
<BottomToolbar
  leftContent={<div>Left content</div>}
  centerContent={<div>Center content</div>}
  rightContent={<div>Right content</div>}
/>
`,
        render: () => (
          <BottomToolbar
            leftContent={<div>Left content</div>}
            centerContent={<div>Center content</div>}
            rightContent={<div>Right content</div>}
          />
        )
      },
      {
        title: "Toolbar with buttons example",
        text:
          "It is important that you use `<Fragment>` and not e.g. `<div>` to wrap the buttons. Otherwise they will not get the margin between them.",
        code: `
<BottomToolbar
  rightContent={
    <Fragment>
      <CancelButton onClick={this._onCancel} />
      <SaveButton onClick={this._onSave} />
    </Fragment>
  }
/>
`,
        render: () => (
          <BottomToolbar
            rightContent={
              <Fragment>
                <CancelButton onClick={action("Cancel clicked")} />
                <SaveButton onClick={action("Save clicked")} />
              </Fragment>
            }
          />
        )
      },
      {
        title: "Window form example",
        code: `
<ScrollableContent
  content={<div style={{ height: 500 }}>Content</div>}
  footer={
    <BottomToolbar
      rightContent={
        <Fragment>
          <CancelButton onClick={this._onCancel} />
          <DeleteButton onClick={this._onDelete} />
          <SaveButton onClick={this._onSave} />
        </Fragment>
      }
    />
  }
/>
`,
        render: () => (
          <div style={{ width: "100%", height: 200 }}>
            <ScrollableContent
              content={<div style={{ height: 500 }}>Content</div>}
              footer={
                <BottomToolbar
                  rightContent={
                    <Fragment>
                      <CancelButton onClick={action("Cancel clicked")} />
                      <DeleteButton onClick={action("Delete clicked")} />
                      <SaveButton onClick={action("Save clicked")} />
                    </Fragment>
                  }
                />
              }
            />
          </div>
        )
      },
      {
        title: "Batch operation example",
        code: `
<ScrollableContent
  content={<div style={{ height: 500 }}>Content</div>}
  footer={
    <BottomToolbar
      leftContent={
        <CancelButton onClick={this._onCancel} />
      }
      centerContent={<div>3 items selected</div>}
      rightContent={
        <Fragment>
          <Button title="Copy" onClick={this._onCopy} />
          <Button title="Move" onClick={this._onMove} />
          <Button title="Delete" onClick={this._onDelete} />
          <Button title="Ungroup" onClick={this._onUngroup} />
        </Fragment>
      }
      shadow
    />
  }
/>
`,
        render: () => (
          <div style={{ width: "100%", height: 200 }}>
            <ScrollableContent
              content={<div style={{ height: 500 }}>Content</div>}
              footer={
                <BottomToolbar
                  leftContent={
                    <CancelButton onClick={action("Cancel clicked")} />
                  }
                  centerContent={<div>3 items selected</div>}
                  rightContent={
                    <Fragment>
                      <Button title="Copy" onClick={action("Copy")} />
                      <Button title="Move" onClick={action("Move")} />
                      <Button title="Delete" onClick={action("Delete")} />
                      <Button title="Ungroup" onClick={action("Ungroup")} />
                    </Fragment>
                  }
                  shadow
                />
              }
            />
          </div>
        )
      }
    ],
    [BottomToolbar]
  )
);
