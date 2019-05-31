import React from "react";
import PropTypes from "prop-types";

const ControlledSelectInput = React.forwardRef(
  ({ value, required }, inputRef) => {
    return !required ? (
      <input
        type="text"
        ref={inputRef}
        readOnly
        value={value}
        className="select-dropdown"
      />
    ) : (
      <input
        type="text"
        ref={inputRef}
        required={required}
        defaultValue={value}
        className="select-dropdown"
        onKeyPress={e => e.preventDefault()}
      />
    );
  }
);

ControlledSelectInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string
};

ControlledSelectInput.defaultProps = {
  required: false
};

export default ControlledSelectInput;
