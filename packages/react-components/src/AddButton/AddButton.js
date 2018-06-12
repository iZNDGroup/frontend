import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export default class AddButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const { title, disabled, onClick } = this.props;
    return (
      <Button
        title={title}
        disabled={disabled}
        onClick={onClick}
        type="primary"
        leftIcon="plus"
      />
    );
  }
}
