import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableBody = props => {
  const { children, color, columns, rows, textWhite, ...attributes } = props;

  const classes = classNames(color, {
    'text-white': textWhite
  });

  const renderTD = (field, key, array, row) => {
    if (field === 'clickEvent') return null;

    if (field !== 'colspan') {
      return array[key + 1] !== 'colspan' ? (
        <td key={key}>{row[field]}</td>
      ) : null;
    } else {
      return (
        <td key={key} colSpan={row[key]}>
          {row[array[key - 1]]}
        </td>
      );
    }
  };

  return (
    <tbody
      data-test='table-body'
      {...attributes}
      className={classes || undefined}
    >
      {rows &&
        rows.map((row, index) => (
          <tr
            onClick={
              row.hasOwnProperty('clickEvent') ? row.clickEvent : undefined
            }
            key={index}
          >
            {columns
              ? columns.map(({ field }, key, array) =>
                  renderTD(field, key, array, row)
                )
              : Object.keys(row).map((field, key, array) =>
                  renderTD(field, key, array, row)
                )}
          </tr>
        ))}
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

TableBody.defaultProps = {
  textWhite: false
};

export default TableBody;
export { TableBody as MDBTableBody };
