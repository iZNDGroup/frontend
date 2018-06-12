import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Card.css";

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    /** Text shown when hovering the card. */
    tooltip: PropTypes.string,
    borderColor: PropTypes.string,
    selected: PropTypes.bool,
    /** If card should expand to parent's full width. */
    fullWidth: PropTypes.bool,
    /** Fired when right clicking on the card. */
    onContextMenu: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    subtitle: "",
    tooltip: "",
    borderColor: "transparent",
    selected: false
  };

  _onContextMenu = ev => {
    const { onContextMenu } = this.props;
    if (onContextMenu) {
      ev.preventDefault();
      onContextMenu(ev);
    }
  };

  render() {
    const {
      title,
      subtitle,
      tooltip,
      borderColor,
      selected,
      fullWidth,
      onClick,
      onContextMenu
    } = this.props;
    const className = classNames({
      [styles.card]: true,
      [styles.fullWidth]: fullWidth,
      [styles.clickable]: !!onClick || !!onContextMenu,
      [styles.active]: selected
    });
    return (
      <div
        className={className}
        onContextMenu={this._onContextMenu}
        onClick={onClick}
        title={tooltip}
      >
        <div className={styles.content} style={{ borderColor }}>
          <div className={styles.title}>{title}</div>
          {!!subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>
    );
  }
}

export default Card;
