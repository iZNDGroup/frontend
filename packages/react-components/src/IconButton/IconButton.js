import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import styles from "./IconButton.css";

class IconButton extends React.Component {
  static propTypes = {
    /** Name of the Font Awesome icon. */
    icon: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    size: PropTypes.number,
    iconType: PropTypes.oneOf(["solid", "regular", "light"]),
    customColor: PropTypes.string,
    colorType: PropTypes.oneOf(["dark", "medium", "light"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    /** Shadow depth of the icon */
    shadowDepth: PropTypes.oneOf([0, 3])
  };

  static defaultProps = {
    size: 16,
    colorType: "medium",
    iconType: "solid",
    disabled: false
  };

  static colors = {
    light: "#868E96",
    medium: "#4B4C4D",
    dark: "#2D2D2D"
  };

  _onClick = ev => {
    ev.stopPropagation();
    const { disabled, onClick } = this.props;
    if (disabled) {
      return;
    }
    onClick(ev);
  };

  render() {
    const {
      icon,
      size,
      iconType,
      colorType,
      tooltip,
      disabled,
      shadowDepth
    } = this.props;
    const className = classNames({
      [styles.iconButton]: true,
      [styles.disabled]: disabled
    });
    const color = this.props.customColor || IconButton.colors[colorType];
    return (
      <div className={className} onClick={this._onClick}>
        <Icon
          name={icon}
          color={color}
          type={iconType}
          size={size}
          tooltip={tooltip}
          shadowDepth={shadowDepth}
        />
      </div>
    );
  }
}

export default IconButton;
