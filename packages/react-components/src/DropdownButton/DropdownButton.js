import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import CustomPropTypes from "../customPropTypes";
import styles from "./DropdownButton.css";

export default class DropdownButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menu: CustomPropTypes.componentOfType([DropdownMenu]).isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    /** Name of a Font Awesome icon. Will be displayed to the left of the button. */
    icon: PropTypes.string,
    disabled: PropTypes.bool
  };

  state = {
    open: false
  };

  _onClick = ev => {
    this.setState({
      open: true
    });
  };

  _renderMenu = () => {
    const { menu } = this.props;
    const { open } = this.state;
    if (!menu) {
      return;
    }
    const updatedChildren = React.Children.map(
      menu.props.children,
      (child, index) =>
        React.cloneElement(child, {
          onClick: ev => {
            this.setState({
              open: false
            });
            child.props.onClick(ev);
          }
        })
    );
    const menuComponent = React.cloneElement(
      menu,
      {
        onRequestClose: ev => {
          this.setState({ open: false });
        },
        open: open
      },
      updatedChildren
    );
    return menuComponent;
  };

  render() {
    const { title, type, icon, disabled } = this.props;
    return (
      <div className={styles.dropdownButton}>
        <Button
          title={title}
          type={type}
          disabled={disabled}
          leftIcon={icon}
          onClick={this._onClick}
          rightIcon="caret-down"
        />
        {this._renderMenu()}
      </div>
    );
  }
}
