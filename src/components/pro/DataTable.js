import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from './DataTablePagination';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './DataTable.css';

class DataTable extends React.Component {
  render() {
    const {
      className,
      keyField,
      data,
      columns,
      config,
      striped,
      hover,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      ...attributes
    } = this.props;

    const classes = classNames(
      className
    );

    const wrapperClasses = classNames(
      responsive && 'table-responsive',
      responsiveSm && 'table-responsive-sm',
      responsiveMd && 'table-responsive-md',
      responsiveLg && 'table-responsive-lg',
      responsiveXl && 'table-responsive-xl'
    );

    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing { from } to { to + 1 } of { size } entries
      </span>
    );

    const pagination = paginationFactory({
      prePageText: config.prePageText || 'Previous',
      nextPageText: config.nextPageText || 'Next',
      firstPageText: config.firstPageText || 'First',
      lastPageText: config.lastPageText || 'Last',
      alwaysShowAllBtns: typeof config.alwaysShowAllBtns !== 'undefined' && config.alwaysShowAllBtns,
      showTotal: typeof config.showTotal !== 'undefined' && config.showTotal,
      hideSizePerPage: typeof config.hideSizePerPage !== 'undefined' && config.hideSizePerPage,
      paginationTotalRenderer: customTotal
    });

    return (
      <div className={wrapperClasses}>
        <BootstrapTable keyField={keyField} data={data} columns={columns} {...attributes} className={classes} striped={striped} hover={hover} pagination={pagination} />
      </div>
    );
  }
}

DataTable.propTypes = {
  className: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.node,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  config: PropTypes.object
};

export default DataTable;
export { DataTable as MDBDataTable };

