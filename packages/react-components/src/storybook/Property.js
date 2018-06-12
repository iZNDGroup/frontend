import React from "react";
import Markdown from "react-markdown";
import PropertyType from "./PropertyType";

export default class Property extends React.Component {
  render() {
    const name = this.props.name;
    const type = this.props.type;
    const isRequired =
      this.props.required ||
      (type.name === "custom" && /isRequired/.test(type.raw));
    const required = isRequired ? "*" : "";
    const defaultValue = this.props.defaultValue
      ? this.props.defaultValue.value
      : "";
    const description = this.props.description.split("\n").join("\n\n");
    return (
      <tr>
        <td>{name}</td>
        <td>
          <PropertyType {...type} />
        </td>
        <td>{required}</td>
        <td>{defaultValue}</td>
        <td className="property-description">
          <Markdown source={description} />
        </td>
      </tr>
    );
  }
}
