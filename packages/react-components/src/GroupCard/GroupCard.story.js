import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import createStory from "../storybook/createStory";
import { GroupCard } from "../index";

storiesOf("Components/Cards", module).add(
  "GroupCard",
  createStory(
    "`GroupCard` can be used for wrapping content. For example it is used in *Dispatch* to separate all workers.",
    [
      {
        title: "Simple example",
        code: `<GroupCard>This is a card.</GroupCard>`,
        render: () => <GroupCard>This is a card.</GroupCard>
      },
      {
        title: "Advanced example",
        code: `
<GroupCard
  title="Worker"
  labels={[{ text: "10" }, { text: "3", color: "orange" }]}
  actions={[
    { icon: "expand", action: action("Expand clicked") },
    { icon: "cog", action: action("Cog clicked") }
  ]}
>
  Render any component here.
</GroupCard>
`,
        render: () => (
          <GroupCard
            title="Worker"
            labels={[{ text: "10" }, { text: "3", color: "orange" }]}
            actions={[
              { icon: "expand", action: action("Expand clicked") },
              { icon: "cog", action: action("Cog clicked") }
            ]}
          >
            Render any component here.
          </GroupCard>
        )
      }
    ],
    [GroupCard]
  )
);
