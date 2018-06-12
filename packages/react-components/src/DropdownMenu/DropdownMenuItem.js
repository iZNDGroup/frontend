import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import DropDownMenu from "./DropdownMenu";
import styles from "./DropdownMenuItem.css";

export default class DropdownMenuItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    checked: PropTypes.oneOf(["checked", "radio"]),
    active: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    active: false,
    disabled: false
  };

  state = {
    showNestedMenu: false
  };

  static leftIcon = {
    checked: {
      icon: "check",
      size: 12
    },
    radio: {
      icon: "circle",
      size: 6
    }
  };

  _onClick = ev => {
    const { children, disabled, onClick } = this.props;
    if (disabled) {
      return;
    }
    if (children) {
      this.setState({ showNestedMenu: true });
    } else if (onClick) {
      onClick(ev);
    }
  };

  _onMouseEnter = ev => {
    clearTimeout(this.closeTimer);
    const { children, onMouseEnter } = this.props;
    if (onMouseEnter) {
      onMouseEnter(ev);
    }
    if (children) {
      this.openTimer = setTimeout(() => {
        this.setState({ showNestedMenu: true });
      }, 300);
    }
  };

  _onMouseLeave = ev => {
    clearTimeout(this.openTimer);
    const { children, onMouseLeave } = this.props;
    if (onMouseLeave) {
      onMouseLeave(ev);
    }
    if (children) {
      this.closeTimer = setTimeout(() => {
        this.setState({ showNestedMenu: false });
      }, 600);
    }
  };

  render() {
    const { active, checked, disabled, children, title } = this.props;
    const { showNestedMenu } = this.state;
    const leftIcon = DropdownMenuItem.leftIcon[checked];
    const className = classNames({
      [styles.container]: true,
      [styles.active]: !disabled && active,
      [styles.disabled]: disabled
    });
    return (
      <div
        className={className}
        onClick={this._onClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        <div className={styles.icon}>
          {checked && (
            <Icon name={leftIcon.icon} color="#2D2D2D" size={leftIcon.size} />
          )}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>
          {!!children && <Icon name="caret-right" color="#2D2D2D" size={14} />}
        </div>
        {!!children && (
          <div className={styles.menu}>
            <DropDownMenu open={showNestedMenu}>{children}</DropDownMenu>
          </div>
        )}
      </div>
    );
  }
}
