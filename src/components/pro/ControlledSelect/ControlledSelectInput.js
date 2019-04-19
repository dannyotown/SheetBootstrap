import React from "react";
import PropTypes from "prop-types";

const ControlledSelectInput = React.forwardRef(({ value }, inputRef) => (
  <input type="text" ref={inputRef} readOnly value={value} className="select-dropdown" />
));

ControlledSelectInput.propTypes = {
  value: PropTypes.string
};

export default ControlledSelectInput;
