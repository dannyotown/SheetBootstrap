import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ControlledSelectInput from './ControlledSelect/ControlledSelectInput';
import ControlledSelectOptions from './ControlledSelect/ControlledSelectOptions';

export const SelectContext = React.createContext();

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: [],
      selectTextContent: '',
      options: this.props.options || [],
      allChecked: false,
      focused: null,
      filteredOptions: this.props.options || []
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick);
    if (this.state.options.length) {
      this.renderPreselectedOptions();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      if (typeof this.props.getValue === 'function') {
        this.props.getValue(this.state.selectValue);
      }

      if (typeof this.props.getTextContent === 'function') {
        this.props.getTextContent(this.state.selectTextContent);
      }
    }

    if (this.props.options !== prevProps.options) {
      this.setState(
        {
          options: this.props.options,
          filteredOptions: this.props.options
        },
        this.renderPreselectedOptions
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  updateSelected = (value) => this.setState({ selectTextContent: value });

  computeValuesAndText = (options) => {
    let checkedOptions = options.filter((option) => option.checked).map((option) => ({
      value: option.value,
      text: option.text ? option.text : option.value
    }));

    let checkedValues = checkedOptions.map((opt) => opt.value);
    let checkedTexts = checkedOptions.map((opt) => (opt.text ? opt.text : opt.value));

    return {
      selectValue: checkedValues,
      selectTextContent: checkedTexts.length ? checkedTexts.join(', ') : this.props.selected,
      allChecked: checkedOptions.length === this.state.options.length
    };
  };

  renderPreselectedOptions = () => this.setState((prevState) => this.computeValuesAndText([...prevState.options]));

  triggerOptionChange = (value, text) => {
    Array.isArray(text) && (text = text.join(', '));
    this.setState({
      selectValue: value,
      selectTextContent: text
    });
  };

  // close all select dropdown (unless it has multiple property or search input)
  // open nieghbour ul of clicked input
  onClick = (e) => {
    if (e.target.dataset.multiple === 'true' || e.target.dataset.search === 'true') {
      return;
    }

    this.closeDropdowns();
    e.target.nextElementSibling && e.target.nextElementSibling.classList.add('fadeIn');
  };

  closeDropdowns = () => {
    this.changeFocus(null);

    this.setState((prevState) => ({ opened: !prevState.opened }));
    let dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach((dropdown) => dropdown.classList.contains('fadeIn') && dropdown.classList.remove('fadeIn'));
  };

  selectOneOption = (value) => {
    this.setState((prevState) => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex((option) => option.value === value);
      options[optionIndex].checked = true;

      options.forEach((option, index) => (index !== optionIndex ? (option.checked = false) : false));

      return {
        selectValue: [options[optionIndex].value],
        selectTextContent: options[optionIndex].text ? options[optionIndex].text : options[optionIndex].value,
        options
      };
    });
  };

  setFilteredOptions = (filteredOptions) => {
    this.setState({ filteredOptions });
  };

  setOptionStatus = (option, status) => {
    option.checked = status;
    return option;
  };

  applyFilteredOptionsChanges = (options, filteredOptions) => {
    filteredOptions.forEach((filteredOption) => {
      const index = options.findIndex((option) => option.value === filteredOption.value);
      filteredOption.checked !== options[index].checked && this.setOptionStatus(options[index], filteredOption.checked);
    });
    return options;
  };

  changeFocus = (value) => {
    switch (value) {
      case null:
        this.setState({ focused: null });
        break;
      case 0:
        this.setState({ focused: 0 });
        break;
      default:
        this.setState((prevState) => ({ focused: prevState.focused + value }));
        break;
    }
  };

  selectMultipleOption = (value) => {
    this.setState((prevState) => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex((option) => option.value === value);
      this.setOptionStatus(options[optionIndex], !prevState.options[optionIndex].checked);

      return this.computeValuesAndText(options);
    });
  };

  selectAllOptions = () => {
    this.setState((prevState) => {
      let options = [...prevState.options];
      let filteredOptions = [...prevState.filteredOptions];

      let areSomeUnchecked = filteredOptions.some((option) => option.checked === false);

      areSomeUnchecked
        ? filteredOptions.map((option) => (option.checked === false ? this.setOptionStatus(option, true) : null))
        : filteredOptions.map((option) => this.setOptionStatus(option, false));

      if (filteredOptions.length !== options.length) {
        options = this.applyFilteredOptionsChanges(options, filteredOptions);
      }

      return this.computeValuesAndText(options);
    });
  };

  selectOption = (value) => {
    if (this.props.multiple) {
      value === this.props.selectAllValue ? this.selectAllOptions() : this.selectMultipleOption(value);
    } else {
      this.selectOneOption(value);
    }
  };

  returnComponentContent = () => {
    const {
      className,
      color,
      children,
      getTextContent,
      getValue,
      label,
      labelClass,
      multiple,
      outline,
      search,
      searchLabel,
      searchId,
      selected,
      selectAll,
      selectAllLabel,
      selectAllValue,
      focusShadow,
      focusBackgroundColor,
      ...attributes
    } = this.props;

    const classes = classNames(
      "select-wrapper mdb-select md-form",
      this.props.color ? "colorful-select dropdown-" + this.props.color : "",
      outline ? "md-outline" : className
    );

    const labelClasses = classNames(
      !outline && "mdb-main-label",
      this.state.selectTextContent && 'active',
      labelClass
    );

    const labelStyles = {
      top: `${outline && (this.state.selectTextContent ? '.5' : '1.35')}em`,
      fontSize: `${outline && (this.state.selectTextContent ? '11' : '14')}px`,
      zIndex: 4
    }

    if (!this.props.children) {
      return (
        <>
          <div {...attributes} data-color={color} data-multiple={multiple} className={classes}>
            <span className="caret">▼</span>
            <ControlledSelectInput value={this.state.selectTextContent} ref={this.inputRef} />
            <ControlledSelectOptions
              multiple={multiple}
              options={this.state.options}
              search={search}
              searchLabel={searchLabel}
              selected={selected}
              selectOption={this.selectOption}
              selectAll={selectAll}
              selectAllLabel={selectAllLabel}
              selectAllValue={selectAllValue}
              allChecked={this.state.allChecked}
              inputRef={this.inputRef}
              setFilteredOptions={this.setFilteredOptions}
              focused={this.state.focused}
              changeFocus={this.changeFocus}
              focusShadow={focusShadow}
              focusBackgroundColor={focusBackgroundColor}
            />
          </div>
          {
            label &&
            <label className={labelClasses} style={labelStyles}>{label}</label>
          }
        </>
      );
    } else {
      return (
        <SelectContext.Provider
          value={{
            state: this.state,
            multiple: this.props.multiple,
            triggerOptionChange: this.triggerOptionChange,
            updateSelected: this.updateSelected
          }}
        >
          <div {...attributes} data-color={color} data-multiple={multiple} className={classes}>
            <span className="caret">▼</span>
            {children}
          </div>
          {
            label &&
            <label className={labelClasses} style={labelStyles}>{label}</label>
          }
        </SelectContext.Provider>
      );
    }
  };

  render() {    
    return this.returnComponentContent();
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  focusShadow: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string, 
      text: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
      ]),
      value: PropTypes.string
    })
  ),
  outline: PropTypes.bool,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string,
  selected: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string,
};

Select.defaultProps = {
  label: "",
  labelClass: "",
  outline: false,
  selected: "",
  selectAllValue: '0'
};

export default Select;
export { Select as MDBSelect };
