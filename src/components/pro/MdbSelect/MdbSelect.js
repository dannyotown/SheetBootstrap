import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MdbSelectInput from "./MdbSelectInput";
import MdbSelectOptions from "./MdbSelectOptions";

class MdbSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: [],
      selectTextContent: "",
      options: this.props.options || []
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.onClick);
    this.renderPreselectedOptions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      if (typeof this.props.getValue === "function") {
        this.props.getValue(this.state.selectValue);
      }

      if (typeof this.props.getTextContent === "function") {
        this.props.getTextContent(this.state.selectTextContent);
      }

      if (this.state.selectValue.length === 0 && this.props.selected) {
        this.setState({
          selectTextContent: this.props.selected
        });
      }
    }

    // TODO: UPDATE LIST WHEN OPTION IS REMOVED
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

  renderPreselectedOptions = () => {
    const preselected = this.state.options
      .filter(option => option.checked)
      .map(option => option.value);
    this.setState({
      selectValue: preselected,
      selectTextContent: preselected.join(", ")
    });
  };

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
        selectTextContent: options[optionIndex].value,
        options
      };
    });
  };

  selectMultipleOptions = value => {
    this.setState(prevState => {
      let options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);
      options[optionIndex].checked = !prevState.options[optionIndex].checked;

      let checkedOptions = options
        .filter(option => option.checked)
        .map(option => option.value);

      return {
        selectValue: checkedOptions,
        selectTextContent: checkedOptions.join(", "),
        options
      };
    });
  };

  selectOption = value => {
    if (this.props.multiple) {
      this.selectMultipleOptions(value);
    } else {
      this.selectOneOption(value);
    }
  };

  render() {
    const {
      className,
      color,
      getTextContent,
      getValue,
      multiple,
      search,
      selected,
      ...attributes
    } = this.props;

    const classes = classNames(
      "select-wrapper md-form",
      this.props.color ? "colorful-select dropdown-" + this.props.color : "",
      className
    );

    return (
      <div
        {...attributes}
        data-color={color}
        data-multiple={multiple}
        className={classes}
      >
        <span className="caret">▼</span>
        <MdbSelectInput value={this.state.selectTextContent} />
        <MdbSelectOptions
          multiple={multiple}
          options={this.state.options}
          search={search}
          selected={selected}
          selectOption={this.selectOption}
        />
      </div>
    );
  }
}

MdbSelect.propTypes = {
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
      value: PropTypes.string
    })
  ),
  search: PropTypes.bool,
  selected: PropTypes.string
};

export default MdbSelect;
