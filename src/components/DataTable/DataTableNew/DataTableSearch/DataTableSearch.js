import React from 'react';
import PropTypes from 'prop-types';
import DataTableInput from '../DataTableInput';

/*
// PRO-END
import DataTableInput from '../DataTableInput';
// PRO-START
*/
// FREE-END
// PRO-END

const DataTableSearch = props => {
  const {
    handleSearchChange,
    search,
    searching,
    label,
    barReverse,
    wrapperSearchStyle,
    wrapperSearchClasses,
    ...attributes
  } = props;

  return (
    searching && (
      <div
        data-test='datatable-search'
        style={{ display: 'flex', alignItems: 'center', ...wrapperSearchStyle }}
        className={wrapperSearchClasses}
      >
        <DataTableInput
          value={search}
          onChange={handleSearchChange}
          label={label}
          barReverse={barReverse}
          {...attributes}
        />
      </div>
    )
  );
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string
};

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
