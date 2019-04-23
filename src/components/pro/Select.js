import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ControlledSelectInput from "./ControlledSelect/ControlledSelectInput";
import ControlledSelectOptions from "./ControlledSelect/ControlledSelectOptions";
export const SelectContext = React.createContext();

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: [],
      selectTextContent: "",
      options: this.props.options || [],
      allChecked: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.onClick);
    if (this.state.options.length) {
      this.renderPreselectedOptions();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      if (typeof this.props.getValue === "function") {
        this.props.getValue(this.state.selectValue);
      }

      if (typeof this.props.getTextContent === "function") {
        this.props.getTextContent(this.state.selectTextContent);
      }
    }

    if (this.props.options !== prevProps.options) {
      this.setState(
        {
          options: this.props.options
        },
        this.renderPreselectedOptions
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClick);
  }

  updateSelected = (value) => this.setState({ selectTextContent: value });

  computeValuesAndText = (options) => {
    let checkedOptions = options
      .filter(option => option.checked)
      .map(option => ({
        value: option.value,
        text: option.text ? option.text : option.value
      }));

    let checkedValues = checkedOptions.map(opt => opt.value);
    let checkedTexts = checkedOptions.map(opt => opt.text ? opt.text : opt.value);

    return {
      selectValue: checkedValues,
      selectTextContent: (checkedTexts.length ? checkedTexts.join(", ") : this.props.selected),
      options,
      allChecked: checkedOptions.length === this.state.options.length ? true : false
    };
  }

  renderPreselectedOptions = () => this.setState(prevState => this.computeValuesAndText([...prevState.options]));

  triggerOptionChange = (value, text) => {
    Array.isArray(text) && (text = text.join(", "));
    this.setState({
      selectValue: value,
      selectTextContent: text
    });
  };

  // close all select dropdown (unless it has multiple property or search input)
  // open nieghbour ul of clicked input
  onClick = e => {
    if (
      e.target.dataset.multiple === "true" ||
      e.target.dataset.search === "true"
    )
      return;
    this.closeDropdowns();
    e.target.nextElementSibling &&
      e.target.nextElementSibling.classList.add("fadeIn");
  };

  closeDropdowns = () => {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(
      dropdown =>
        dropdown.classList.contains("fadeIn") &&
        dropdown.classList.remove("fadeIn")
    );
  };

  selectOneOption = value => {
    this.setState(prevState => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);
      options[optionIndex].checked = true;

      options.forEach(
        (option, index) =>
          index !== optionIndex ? (option.checked = false) : false
      );

      return {
        selectValue: [options[optionIndex].value],
        selectTextContent: options[optionIndex].text ? options[optionIndex].text : options[optionIndex].value,
        options
      };
    });
  };

  selectMultipleOptions = value => {
    if (value === "0") {
      const setChecked = (option, status) => {
        option.checked = status;
        return option;
      }

      this.setState(prevState => {
        let options = [...prevState.options];
        let areSomeUnchecked = options.some(option => option.checked === false);

        areSomeUnchecked
          ? options.map(option => option.checked === false ? setChecked(option, true) : null)
          : options.map(option => setChecked(option, false))

        return this.computeValuesAndText(options);
      })

    } else {
      this.setState(prevState => {
        let options = [...prevState.options];
        const optionIndex = options.findIndex(option => option.value === value);
        options[optionIndex].checked = !prevState.options[optionIndex].checked;

        return this.computeValuesAndText(options);
      });
    }
  };

  selectOption = value => {
    if (this.props.multiple) {
      this.selectMultipleOptions(value);
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
      multiple,
      search,
      searchLabel,
      searchId,
      selected,
      selectAll,
      ...attributes
    } = this.props;

    const classes = classNames(
      "select-wrapper mdb-select md-form",
      this.props.color ? "colorful-select dropdown-" + this.props.color : "",
      className
    );

    const labelClasses = classNames(
      "mdb-main-label",
      this.state.selectTextContent && 'active'
    );

    if (!this.props.children) {
      return (
        <React.Fragment>
          <div
            {...attributes}
            data-color={color}
            data-multiple={multiple}
            className={classes}
          >
            <span className="caret">▼</span>
            <ControlledSelectInput value={this.state.selectTextContent} />
            <ControlledSelectOptions
              multiple={multiple}
              options={this.state.options}
              search={search}
              searchLabel={searchLabel}
              selected={selected}
              selectOption={this.selectOption}
              selectAll={selectAll}
              allChecked={this.state.allChecked}
            />
          </div>
          {
            label &&
            <label className={labelClasses}>{label}</label>
          }
        </React.Fragment>
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
          <div
            {...attributes}
            data-color={color}
            data-multiple={multiple}
            className={classes}
          >
            <span className="caret">▼</span>
            {children}
          </div>
          {
            label &&
            <label className={labelClasses}>{label}</label>
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
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string,
  selected: PropTypes.string
};

export default Select;
export { Select as MDBSelect };
