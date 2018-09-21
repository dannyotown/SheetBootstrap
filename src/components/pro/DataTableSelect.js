import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import SelectInput from './SelectInput';
import SelectOptions from './SelectOptions';
import SelectOption from './SelectOption';

const DataTableSelect = ({ value, onChange, entries }) => (
  <div className="dataTables_length d-flex flex-row">
    <label className="mt-4">Show entries</label>
    <Select getValue={onChange}>
      <SelectInput selected={value}></SelectInput>
      <SelectOptions>
        {
          entries.map((entry, index) => <SelectOption checked={index === 0} key={entry} value={entry}>{entry}</SelectOption>)
        }
      </SelectOptions>
    </Select>
  </div>
);

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
