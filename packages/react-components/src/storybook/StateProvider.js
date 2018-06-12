import React from "react";

export default class StateProvider extends React.Component {
  state = this.props.initialState;

  render() {
    return this.props.children(this.state, this.setState.bind(this));
  }
}
