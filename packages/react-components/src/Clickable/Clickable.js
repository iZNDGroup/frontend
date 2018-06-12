import React from "react";
import PropTypes from "prop-types";

export default class Clickable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /** Called when clicked inside the component. */
    onClick: PropTypes.func,
    /** Called when clicked outside the component. */
    onOutsideClick: PropTypes.func
  };

  static defaultProps = {};

  componentDidMount() {
    document.addEventListener("click", this._handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleClick);
  }

  _handleClick = ev => {
    const { onClick, onOutsideClick } = this.props;
    if (this.wrapperRef) {
      if (this.wrapperRef.contains(ev.target)) {
        if (onClick) {
          onClick(ev);
        }
      } else {
        if (onOutsideClick) {
          onOutsideClick(ev);
        }
      }
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div
        ref={component => {
          this.wrapperRef = component;
        }}
      >
        {children}
      </div>
    );
  }
}
