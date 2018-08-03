import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DataTableHead = (props) => {
  const {
    color,
    columns,
    textWhite,
    handleSort,
    ...attributes
  } = props;

  const classes = classNames(
    (color !== 'dark' && color !== 'light') ? color : `thead-${color}`,
    {
      'text-white' : textWhite
    }
  );

  return (
    <thead {...attributes} className={classes}>
      <tr>
        { 
          columns.map(col => 
            <th 
              onClick={() => handleSort(col.field, col.sort)} 
              key={col.field} 
              className={col.hasOwnProperty('minimal') ? `th-${col.minimal} sorting` : 'sorting'}
            >
              {col.label}
              <i className="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
          ) 
        }
      </tr>
    </thead>
  );
};

DataTableHead.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  textWhite: PropTypes.bool
};

DataTableHead.defaultProps = {
  textWhite: false
};

export default DataTableHead;
export { DataTableHead as MDBDataTableHead };