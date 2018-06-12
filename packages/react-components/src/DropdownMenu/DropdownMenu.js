import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import CustomPropTypes from "../customPropTypes";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownMenuDivider from "./DropdownMenuDivider";
import Clickable from "../Clickable/Clickable";
import styles from "./DropdownMenu.css";

export default class DropdownMenu extends React.Component {
  static propTypes = {
    children: CustomPropTypes.childrenOfType(
      CustomPropTypes.componentOfType([DropdownMenuItem, DropdownMenuDivider])
    ).isRequired,
    open: PropTypes.bool,
    /** Called when user clicks outside the menu or Escape. */
    onRequestClose: PropTypes.func,
    /** Will initially set an active item every time the menu is opened. */
    selectedIndex: PropTypes.number,
    /** If one should be able to navigate among the options with keys. */
    keyNavigation: PropTypes.bool,
    /** If the menu should be aligned to the left or right. Only suitable when used with DropdownButton or SplitButton. */
    alignment: PropTypes.oneOf(["left", "right"]),
    /** If menu should expand its width to parent's full width. */
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    open: false,
    selectedIndex: -1,
    keyNavigation: false,
    alignment: "left",
    fullWidth: false
  };

  state = {
    cursor: this.props.selectedIndex
  };

  componentDidMount() {
    if (this.props.open) {
      this._didOpen();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { open, children } = this.props;
    const { cursor } = this.state;
    if (!prevProps.open && open) {
      this._didOpen();
    } else if (prevProps.open && !open) {
      this._didClose();
    }
    if (children.length > 0 && cursor > children.length - 1) {
      this.setState({ cursor: children.length - 1 });
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      this._didClose();
    }
  }

  _didOpen = () => {
    const { keyNavigation, selectedIndex } = this.props;
    if (keyNavigation) {
      document.addEventListener("keydown", this._handleKeyDown);
    }
    if (selectedIndex) {
      this.setState({ cursor: selectedIndex });
    }
  };

  _didClose = () => {
    const { keyNavigation } = this.props;
    if (keyNavigation) {
      document.removeEventListener("keydown", this._handleKeyDown);
    }
  };

  _handleKeyDown = ev => {
    const { children, onRequestClose } = this.props;
    const { cursor } = this.state;
    let offset = 0;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      if (cursor < children.length - 1) {
        for (let i = cursor + 1; i < children.length; i++) {
          offset++;
          const child = children[i];
          if (child.type === DropdownMenuItem && !child.props.disabled) {
            break;
          }
        }
        this.setState({ cursor: cursor + offset });
      }
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      if (cursor > 0) {
        for (let i = cursor - 1; i >= 0; i--) {
          offset++;
          const child = children[i];
          if (child.type === DropdownMenuItem && !child.props.disabled) {
            break;
          }
        }
        this.setState({ cursor: cursor - offset });
      }
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      const child = children[cursor];
      if (child) {
        child.props.onClick(ev);
      }
    } else if (ev.key === "Escape") {
      ev.preventDefault();
      if (onRequestClose) {
        onRequestClose(ev);
      }
    }
  };

  render() {
    const {
      open,
      alignment,
      children,
      fullWidth,
      keyNavigation,
      onRequestClose
    } = this.props;
    const { cursor } = this.state;
    if (!open || !children) {
      return null;
    }
    const className = classNames({
      [styles.dropdownMenu]: true,
      [styles.leftAligned]: alignment === "left",
      [styles.rightAligned]: alignment === "right",
      [styles.fullWidth]: fullWidth
    });
    return (
      <Clickable onOutsideClick={onRequestClose}>
        <div className={className}>
          {React.Children.map(children, (child, index) => {
            if (
              child.type === DropdownMenuItem ||
              child.type === DropdownMenuDivider
            ) {
              return React.cloneElement(child, {
                active: index === cursor,
                onMouseEnter: () => {
                  this.setState({ cursor: index });
                },
                onMouseLeave: () => {
                  if (!keyNavigation) {
                    this.setState({ cursor: this.props.selectedIndex });
                  }
                }
              });
            }
            return null;
          })}
        </div>
      </Clickable>
    );
  }
}
