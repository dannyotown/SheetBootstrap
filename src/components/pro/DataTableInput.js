import React from 'react';
import PropTypes from 'prop-types';

const DataTableInput = ({ value, onChange }) => (
  <div className="dataTables_filter md-form">
    <input
      value={value}
      onChange={onChange}
      type="search"
      className="form-control form-control-sm"
      placeholder="Search"
    />
  </div>
);

DataTableInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };