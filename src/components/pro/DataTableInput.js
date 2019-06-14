import React from "react";
import PropTypes from "prop-types";

const DataTableInput = ({ value, onChange, label, barReverse }) => (
  <div className={`dataTables_filter md-form${ barReverse ? ' text-left' : ''}`}>
    <input
      value={value}
      onChange={onChange}
      type="search"
      className="form-control form-control-sm"
      placeholder={label || "Search"}
    />
  </div>
);

DataTableInput.propTypes = {
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
