import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export default class DeleteButton extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "Delete",
    disabled: false
  };

  render() {
    const { title, disabled, onClick } = this.props;
    return (
      <Button
        title={title}
        disabled={disabled}
        onClick={onClick}
        type="danger"
        leftIcon="trash"
      />
    );
  }
}
