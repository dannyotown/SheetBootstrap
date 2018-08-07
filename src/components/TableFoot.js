import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableFoot = (props) => {
  const {
    color,
    columns,
    textWhite,
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
        { columns.map(col => <th key={col.field} className={col.hasOwnProperty('minimal') ? `th-${col.minimal}` : ''}>{col.label}</th>) }
      </tr>
    </thead>
  );
};

TableFoot.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

TableFoot.defaultProps = {
  textWhite: false
};

export default TableFoot;
export { TableFoot as MDBTableFoot };