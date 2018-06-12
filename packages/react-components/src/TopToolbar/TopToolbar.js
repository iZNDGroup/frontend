import PropTypes from "prop-types";
import React from "react";
import Toolbar from "../Toolbar/Toolbar";

export default class TopToolbar extends React.Component {
  static propTypes = {
    /** Content rendered to the left. Could be anything that can be rendered. */
    leftContent: PropTypes.node,
    /** Content rendered in the center. Could be anything that can be rendered. */
    centerContent: PropTypes.node,
    /** Content rendered to the right. Could be anything that can be rendered. */
    rightContent: PropTypes.node,
    /** Whether or not the toolbar should display any shadow. */
    shadow: PropTypes.bool
  };

  static defaultProps = {
    shadow: false
  };

  render() {
    const { leftContent, centerContent, rightContent, shadow } = this.props;
    return (
      <Toolbar
        leftContent={leftContent}
        centerContent={centerContent}
        rightContent={rightContent}
        border="bottom"
        shadow={shadow}
      />
    );
  }
}
