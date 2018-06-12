import React from "react";
import InstanceOf from "./types/InstanceOf";
import Enum from "./types/Enum";
import Union from "./types/Union";
import ArrayOf from "./types/ArrayOf";
import ObjectOf from "./types/ObjectOf";
import Shape from "./types/Shape";

export default class PropertyType extends React.Component {
  constructor() {
    super();
    this.types = new Map([
      ["instanceOf", InstanceOf],
      ["enum", Enum],
      ["union", Union],
      ["arrayOf", ArrayOf],
      ["objectOf", ObjectOf],
      ["shape", Shape]
    ]);
    this.customTypes = new Map([
      [/componentOfType\(\[(.*)\]\)/, match => match[1].split(", ").join(" | ")]
    ]);
  }

  render() {
    const { name, value, raw } = this.props;
    if (this.types.has(name)) {
      const Component = this.types.get(name);
      return <Component value={value} />;
    }
    if (name === "custom" && raw) {
      for (const [regExp, transform] of this.customTypes) {
        const match = raw.match(regExp);
        if (match) {
          return transform(match);
        }
      }
    }
    return name;
  }
}
