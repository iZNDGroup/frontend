import React from "react";
import Example from "./Example";
import Info from "./Info";
import Type from "./Type";

export default class Story extends React.Component {
  render() {
    const { context, text, examples, types } = this.props;
    return (
      <div className="markdown-body">
        <div>
          <h1>{context.story}</h1>
        </div>
        <Info text={text} />
        {examples.map((example, i) => (
          <Example key={`example-${i}`} {...example} context={context} />
        ))}
        {types.map((type, i) => (
          <Type key={`type-${i}`} {...type.__docgenInfo} />
        ))}
      </div>
    );
  }
}
