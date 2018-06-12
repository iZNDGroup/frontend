import PropTypes from "prop-types";
import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../DropdownMenu/DropdownMenuItem";

export default class SelectMenu extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    options: PropTypes.array,
    onSelect: PropTypes.func,
    onRequestClose: PropTypes.func,
    selectedOptionIndex: PropTypes.number
  };

  render() {
    const {
      open,
      options,
      onSelect,
      onRequestClose,
      selectedOptionIndex
    } = this.props;
    return (
      <DropdownMenu
        open={open}
        fullWidth
        keyNavigation
        onRequestClose={onRequestClose}
        selectedIndex={selectedOptionIndex}
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <DropdownMenuItem
              key={`item-${index}`}
              title={option.name}
              onClick={() => onSelect(option)}
            />
          ))
        ) : (
          <DropdownMenuItem title="No results found" disabled />
        )}
      </DropdownMenu>
    );
  }
}
