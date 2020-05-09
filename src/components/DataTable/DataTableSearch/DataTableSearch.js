import React from 'react';
import PropTypes from 'prop-types';
import DataTableInput from '../DataTableInput';
import classNames from 'classnames';
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

  const classes = classNames('col-sm-12 col-md-6', wrapperSearchClasses);

  return (
    searching && (
      <div
        data-test='datatable-search'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: barReverse ? 'flex-start' : 'flex-end',
          ...wrapperSearchStyle
        }}
        className={classes}
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
