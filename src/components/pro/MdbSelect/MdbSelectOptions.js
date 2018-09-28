import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Autocomplete from "./../Autocomplete";
import MdbSelectOption from "./MdbSelectOption";

class MdbSelectOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOptions: this.props.options || [],
      options: this.props.options || [],
      searchValue: ""
    };
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
    const filteredOptions = this.state.options.filter(option =>
      option.value.toLowerCase().match(value.toLowerCase())
    );

    this.setState({ filteredOptions });
  };

  render() {
    const { multiple, options, search, selected, selectOption } = this.props;

    const classes = classNames(
      "dropdown-content",
      "select-dropdown",
      "fadeElement"
    );

    return (
      <ul className={classes}>
        {search && (
          <Autocomplete
            data={options}
            label="Search"
            id="input"
            search={this.search}
            data-search="true"
          />
        )}
        <MdbSelectOption
          checked={false}
          disabled={true}
          icon={null}
          value={selected}
        />
        {this.state.filteredOptions.map((option, index) => (
          <MdbSelectOption
            key={`${option.value}-${index}`}
            checked={option.checked}
            disabled={option.disabled}
            multiple={multiple}
            icon={option.icon}
            value={option.value}
            selectOption={selectOption}
          />
        ))}
      </ul>
    );
  }
}

MdbSelectOptions.propTypes = {
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
  selected: PropTypes.string,
  selectOption: PropTypes.func
};

export default MdbSelectOptions;
