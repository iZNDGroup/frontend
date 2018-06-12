import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    leftIcon: PropTypes.string,
    /** Sets a white border between the icon and the title. */
    leftIconBorder: PropTypes.bool,
    rightIcon: PropTypes.string,
    /** Sets a white border between the icon and the title. */
    rightIconBorder: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onLeftIconClick: PropTypes.func,
    onRightIconClick: PropTypes.func
  };

  static defaultProps = {
    type: "secondary",
    disabled: false
  };

  _onClick = ev => {
    ev.stopPropagation();
    const { disabled, onClick } = this.props;
    if (disabled || !onClick) {
      return;
    }
    onClick(ev);
  };

  _onLeftIconClick = ev => {
    ev.stopPropagation();
    const { disabled, onLeftIconClick } = this.props;
    if (disabled) {
      return;
    }
    if (onLeftIconClick) {
      onLeftIconClick(ev);
    } else {
      this._onClick(ev);
    }
  };

  _onRightIconClick = ev => {
    ev.stopPropagation();
    const { disabled, onRightIconClick } = this.props;
    if (disabled) {
      return;
    }
    if (onRightIconClick) {
      onRightIconClick(ev);
    } else {
      this._onClick(ev);
    }
  };

  render() {
    const {
      title,
      leftIcon,
      leftIconBorder,
      rightIcon,
      rightIconBorder,
      type,
      disabled
    } = this.props;
    const buttonClass = classNames({
      [styles.container]: true,
      [styles.primary]: type === "primary",
      [styles.secondary]: type === "secondary",
      [styles.success]: type === "success",
      [styles.danger]: type === "danger",
      [styles.disabled]: disabled
    });
    const leftIconClass = classNames({
      [styles.icon]: true,
      [styles.leftIcon]: true,
      [styles.leftIconBordered]: leftIconBorder
    });
    const rightIconClass = classNames({
      [styles.icon]: true,
      [styles.rightIcon]: true,
      [styles.rightIconBordered]: rightIconBorder
    });
    return (
      <div className={buttonClass} onClick={this._onClick}>
        {leftIcon && (
          <div className={leftIconClass} onClick={this._onLeftIconClick}>
            <Icon name={leftIcon} color="#fff" size={14} />
          </div>
        )}
        <div className={styles.title}>{title}</div>
        {rightIcon && (
          <div className={rightIconClass} onClick={this._onRightIconClick}>
            <Icon name={rightIcon} color="#fff" size={14} />
          </div>
        )}
      </div>
    );
  }
}
