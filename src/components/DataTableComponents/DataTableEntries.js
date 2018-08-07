import React from 'react';
import PropTypes from 'prop-types';
import { DataTableSelect } from 'mdbreact';

const DataTableEntries = (props) => {
  const {
    handleEntriesChange,
    entries,
    entriesArr,
    paging
  } = props;

  return (
    <div className="col-sm-12 col-md-6">
      {
        paging &&
        <DataTableSelect
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
        />
      }
    </div>
  );
};

DataTableEntries.propTypes = {
  handleEntriesChange: PropTypes.func.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  paging: PropTypes.bool.isRequired
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };