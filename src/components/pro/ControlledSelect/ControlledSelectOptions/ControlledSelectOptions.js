import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../../../Input';
import ControlledSelectOption from '../ControlledSelectOption';

class ControlledSelectOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: this.props.options || [],
      options: this.props.options || [],
      searchValue: ''
    };
    this.inputRef = null;
  }

  componentDidMount() {
    if (this.props.inputRef.current)
      this.inputRef = this.props.inputRef.current;
    this.inputRef.addEventListener('keydown', this.handleFocus);
  }

  componentWillUnmount() {
    this.inputRef.removeEventListener('keydown', this.handleFocus);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.props.options) {
      this.setState({
        filteredOptions: this.props.options,
        options: this.props.options
      });
    }
  }

  search = value => {
    const filteredOptions = this.state.options.filter(option => {
      if (option.text) {
        return option.text.toLowerCase().match(value.toLowerCase().trim());
      } 
        return option.value.toLowerCase().match(value.toLowerCase().trim());
      
    });

    this.props.changeFocus(null);
    this.setState({ filteredOptions }, () =>
      this.props.setFilteredOptions(this.state.filteredOptions)
    );
  };

  handleFocus = e => {
    const {
      focused,
      selectOption,
      selectAllValue,
      changeFocus,
      selectAll
    } = this.props;

    const { filteredOptions } = this.state;

    const ENTER = e.keyCode === 13;
    const ESC = e.keyCode === 27;
    const UP = e.keyCode === 38;
    const DOWN = e.keyCode === 40;

    (DOWN || UP || ENTER) && e.preventDefault();

    if (ENTER && focused !== null) {
      focused === -1
        ? selectOption(selectAllValue)
        : selectOption(filteredOptions[focused].value);
    }

    ESC && changeFocus(null);

    if (DOWN) {
      if (focused === null) {
        selectAll && filteredOptions.length !== 1
          ? changeFocus(-1)
          : changeFocus(0);
      } else {
        focused < filteredOptions.length - 1 && changeFocus(1);
      }
    }

    if (UP) {
      focused >= (selectAll ? 0 : 1) &&
        filteredOptions.length > 1 &&
        changeFocus(-1);
    }
  };

  render() {
    const {
      allChecked,
      focused,
      focusShadow,
      focusBackgroundColor,
      multiple,
      search,
      searchLabel,
      searchId,
      selected,
      selectOption,
      selectAll,
      selectAllLabel,
      selectAllValue,
      selectAllClassName
    } = this.props;

    const classes = classNames(
      'dropdown-content',
      'select-dropdown',
      'fadeElement'
    );

    return (
      <ul data-test='controlled-select-options' className={classes}>
        {search && (
          <Input
            label={searchLabel}
            id={searchId}
            getValue={this.search}
            data-search='true'
            onKeyDown={this.handleFocus}
          />
        )}
        <ControlledSelectOption
          checked={false}
          disabled
          icon={null}
          value={selected}
        />
        {selectAll && multiple && this.state.filteredOptions.length > 1 && (
          <ControlledSelectOption
            text={selectAllLabel}
            value={selectAllValue}
            selectAllClassName={selectAllClassName}
            checked={allChecked}
            multiple
            selectOption={selectOption}
            isFocused={focused === -1}
            focusShadow={focusShadow}
            focusBackgroundColor={focusBackgroundColor}
          />
        )}
        {this.state.filteredOptions.map((option, index) => (
          <ControlledSelectOption
            key={`${option.value}-${index}`}
            checked={option.checked}
            disabled={option.disabled}
            multiple={multiple}
            icon={option.icon}
            text={option.text}
            value={option.value}
            separator={option.separator}
            selectOption={selectOption}
            isFocused={index === focused}
            focusShadow={focusShadow}
            focusBackgroundColor={focusBackgroundColor}
          />
        ))}
      </ul>
    );
  }
}

ControlledSelectOptions.propTypes = {
  allChecked: PropTypes.bool,
  changeFocus: PropTypes.func,
  focused: PropTypes.number,
  focusShadow: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(
      typeof Element === 'undefined' ? function() {} : Element
    )
  }),
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      separator: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      value: PropTypes.string
    })
  ),
  selected: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string,
  selectAllClassName: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string,
  setFilteredOptions: PropTypes.func
};

ControlledSelectOptions.defaultProps = {
  focused: null,
  multiple: false,
  options: [],
  search: false,
  selectAllLabel: 'Select All',
  searchId: 'selectSearchInput',
  searchLabel: 'Search'
};

export default ControlledSelectOptions;
