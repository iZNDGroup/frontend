import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Toolbar.css";

export default class Toolbar extends React.Component {
  static propTypes = {
    /** Content rendered to the left. Could be anything that can be rendered. */
    leftContent: PropTypes.node,
    /** Content rendered in the center. Could be anything that can be rendered. */
    centerContent: PropTypes.node,
    /** Content rendered to the right. Could be anything that can be rendered. */
    rightContent: PropTypes.node,
    /** Whether or not a border should be shown at the top or bottom of the toolbar. */
    border: PropTypes.oneOf(["top", "bottom"]),
    /** Whether or not the toolbar should display any shadow. */
    shadow: PropTypes.bool
  };

  static defaultProps = {
    shadow: false
  };

  render() {
    const {
      border,
      shadow,
      leftContent,
      centerContent,
      rightContent
    } = this.props;
    const className = classNames({
      [styles.toolbar]: true,
      [styles.borderTop]: border === "top",
      [styles.borderBottom]: border === "bottom",
      [styles.shadow]: shadow
    });
    return (
      <div className={className}>
        <div className={styles.leftContent}>{leftContent}</div>
        <div className={styles.centerContent}>{centerContent}</div>
        <div className={styles.rightContent}>{rightContent}</div>
      </div>
    );
  }
}
