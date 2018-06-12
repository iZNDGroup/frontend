import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export default class SaveButton extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "Save",
    disabled: false
  };

  render() {
    const { title, disabled, onClick } = this.props;
    return (
      <Button
        title={title}
        disabled={disabled}
        onClick={onClick}
        type="success"
        leftIcon="save"
      />
    );
  }
}
