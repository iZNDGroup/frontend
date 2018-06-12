import React from "react";
import Story from "./Story";

const createStory = (text, examples = [], types = []) => {
  return context => {
    return (
      <Story context={context} text={text} examples={examples} types={types} />
    );
  };
};

export default createStory;
