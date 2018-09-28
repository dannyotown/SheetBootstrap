import React from "react";
import PropTypes from "prop-types";

const MdbSelectInput = ({ value }) => (
  <input type="text" readOnly value={value} className="select-dropdown" />
);

MdbSelectInput.propTypes = {
  value: PropTypes.string
};

export default MdbSelectInput;
