import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon/Icon";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import SelectMenu from "./SelectMenu";
import styles from "./Select.css";

export default class Select extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
      })
    ),
    /** Should be value of selected item or an array of selected values if multiple is true. */
    selectedValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]).isRequired,
    /** Called whenever a new value is selected. Argument represented the value of the selected option. */
    onSelect: PropTypes.func.isRequired,
    /** Called whenever an option is removed. Argument represented the index of the option. */
    onRemove: PropTypes.func,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    /** Whether or not multiple values can be selected. */
    multiple: PropTypes.bool
  };

  static defaultProps = {
    options: [],
    disabled: false,
    searchable: false,
    multiple: false
  };

  constructor(props) {
    super(props);
    this._createDictionary(props.options);
  }

  state = {
    open: false,
    search: ""
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this._createDictionary(nextProps.options);
  }

  _createDictionary = options => {
    this._dictionary = {};
    options.forEach(opt => (this._dictionary[opt.value] = opt));
  };

  _showOptions = ev => {
    document.addEventListener("keydown", this._handleKeyDown);
    this.setState({ open: true }, () => {
      const { searchable } = this.props;
      if (searchable) {
        this._select.focus();
      }
    });
  };

  _hideOptions = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    document.removeEventListener("keydown", this._handleKeyDown);
    this.setState({ open: false, search: "" });
  };

  _handleKeyDown = ev => {
    const { searchable, multiple, selectedValue, onRemove } = this.props;
    const { search } = this.state;
    if (
      ev.key === "Backspace" &&
      multiple &&
      searchable &&
      search.length === 0 &&
      selectedValue.length > 0
    ) {
      const lastIndex = selectedValue.length - 1;
      onRemove(lastIndex);
    }
  };

  _selectOption = option => {
    const { onSelect, multiple, searchable } = this.props;
    onSelect(option.value);
    if (!multiple) {
      this._hideOptions();
    } else if (searchable) {
      this.setState({ search: "" });
      this._select.focus();
    }
  };

  _onChangeSearch = ev => {
    const value = ev.target.value;
    this.setState({ search: value });
  };

  _getFilteredOptions = () => {
    const { multiple, options, selectedValue } = this.props;
    const { search } = this.state;
    const filteredOptions = options.filter(option => {
      if (multiple && selectedValue.includes(option.value)) {
        return false;
      }
      return option.name.toLowerCase().includes(search.toLowerCase());
    });
    return filteredOptions;
  };

  _getSelectedOptions = () => {
    const { selectedValue } = this.props;
    const options = selectedValue.map(value => this._dictionary[value]);
    return options;
  };

  _getSelectedOption = () => {
    const { selectedValue } = this.props;
    const option = this._dictionary[selectedValue];
    return option || {};
  };

  _getSelectedOptionIndex = () => {
    const { multiple, options, selectedValue } = this.props;
    let index = 0;
    if (!multiple) {
      index = options.findIndex(element => element.value === selectedValue);
      index = index === -1 ? 0 : index;
    }
    return index;
  };

  render() {
    const { disabled, multiple, searchable, onRemove } = this.props;
    const { open, search } = this.state;
    const className = classNames({
      [styles.select]: true,
      [styles.disabled]: disabled
    });
    return (
      <div className={styles.container}>
        <div
          className={className}
          onClick={!disabled ? this._showOptions : null}
        >
          {multiple ? (
            <MultiSelect
              ref={component => {
                this._select = component;
              }}
              showSearch={searchable}
              selectedOptions={this._getSelectedOptions()}
              value={search}
              onRemove={onRemove}
              onChange={this._onChangeSearch}
            />
          ) : (
            <SingleSelect
              ref={component => {
                this._select = component;
              }}
              showSearch={searchable && open}
              selectedOption={this._getSelectedOption()}
              value={search}
              onChange={this._onChangeSearch}
            />
          )}
          <div className={styles.iconContainer}>
            <Icon
              name={open ? "caret-up" : "caret-down"}
              color="#4b4c4d"
              size={16}
              disabled={disabled}
            />
          </div>
        </div>
        <SelectMenu
          open={open}
          options={this._getFilteredOptions()}
          onSelect={this._selectOption}
          onRequestClose={this._hideOptions}
          selectedOptionIndex={this._getSelectedOptionIndex()}
        />
      </div>
    );
  }
}
