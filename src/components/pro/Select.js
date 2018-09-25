import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
export const SelectContext = React.createContext();

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectText: "",
      selectValue: ""
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.onClick);
  }

  componentDidUpdate(props, state) {
    if (
      state.selectValue !== this.state.selectValue &&
      typeof this.props.getValue === "function"
    ) {
      this.props.getValue(this.state.selectValue);
      this.props.getTextContent(this.state.selectText);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClick);
  }

  triggerOptionChange = (value, text) => {
    Array.isArray(text) && (text = text.join(", "));
    this.setState({ ...this.state, selectValue: value, selectText: text });
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

  render() {
    const {
      className,
      children,
      multiple,
      color,
      getTextContent,
      getValue,
      ...attributes
    } = this.props;

    const classes = classNames(
      "select-wrapper md-form",
      this.props.color ? "colorful-select dropdown-" + this.props.color : "",
      className
    );

    return (
      <SelectContext.Provider
        value={{
          state: this.state,
          multiple: this.props.multiple,
          triggerOptionChange: this.triggerOptionChange
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
      </SelectContext.Provider>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  multiple: PropTypes.bool,
  value: PropTypes.string
};

Select.defaultProps = {
  children: "div",
  className: "",
  color: "",
  getTextContent: () => {},
  getValue: () => {},
  multiple: false,
  value: ""
};

export default Select;
export { Select as MDBSelect };
