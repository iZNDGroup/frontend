import React from "react";
import { storiesOf } from "@storybook/react";
import createStory from "../storybook/createStory";
import { Carousel, IconButton } from "../index";

const renderItems = numItems => {
  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push(
      <div
        key={`example-${i}`}
        style={{ background: "#eee", margin: 8, padding: 8 }}
      >
        Item {i + 1}
      </div>
    );
  }
  return items;
};

storiesOf("Components/Carousel", module).add(
  "Carousel",
  createStory(
    "`Carousel` allows you to display several items with pagination.",
    [
      {
        title: "Simple example",
        code: `
<Carousel>
  <Item title="1" />
  <Item title="2" />
  <Item title="3" />
</Carousel>
`,
        render: () => <Carousel>{renderItems(3)}</Carousel>
      },
      {
        title: "Multi columns example",
        code: `
<Carousel minItemDimensions={{ width: 500 }}>
  <Item title="1" />
  <Item title="2" />
  <Item title="3" />
  <Item title="4" />
  ...
</Carousel>
`,
        render: () => (
          <Carousel minItemDimensions={{ width: 500 }}>
            {renderItems(20)}
          </Carousel>
        )
      },
      {
        title: "Multi row/columns example",
        code: `
<Carousel minItemDimensions={{ width: 500 }} rowsToShow={3}>
  <Item title="1" />
  <Item title="2" />
  ...
</Carousel>
`,
        render: () => (
          <Carousel minItemDimensions={{ width: 500 }} rowsToShow={3}>
            {renderItems(20)}
          </Carousel>
        )
      },
      {
        title: "Placeholder example",
        text:
          "Using `placeholderHeight` when you want the height of the carousel to be same at all time (even though there are not enough items to fill every row).",
        code: `
<Carousel minItemDimensions={{ width: 500 }} rowsToShow={3} placeholderHeight={46}>
  <Item title="1" />
  <Item title="2" />
  ...
</Carousel>
`,
        render: () => (
          <Carousel
            minItemDimensions={{ width: 500 }}
            rowsToShow={3}
            placeholderHeight={46}
          >
            {renderItems(13)}
          </Carousel>
        )
      },
      {
        title: "Custom navigation example",
        text:
          "Customize the navigation elements with `prevArrow` and `nextArrow`.",
        code: `
var PrevArrow = props => (
  <IconButton icon="chevron-circle-left" onClick={props.onClick} />
);
var NextArrow = props => (
  <IconButton icon="chevron-circle-right" onClick={props.onClick} />
);
<Carousel minItemDimensions={{ width: 500 }} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
  <Item title="1" />
  <Item title="2" />
  ...
</Carousel>
`,
        render: () => {
          var PrevArrow = props => (
            <IconButton icon="chevron-circle-left" onClick={props.onClick} />
          );
          var NextArrow = props => (
            <IconButton icon="chevron-circle-right" onClick={props.onClick} />
          );
          return (
            <Carousel
              minItemDimensions={{ width: 500 }}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              {renderItems(13)}
            </Carousel>
          );
        }
      }
    ],
    [Carousel]
  )
);
