import React from "react";
import Markdown from "react-markdown";

export default class Info extends React.Component {
  render() {
    return <Markdown source={this.props.text} />;
  }
}
