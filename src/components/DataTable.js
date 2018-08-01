import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table } from 'mdbreact';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {
    const {
      className,
      keyField,
      data,
      columns,
      config,
      striped,
      hover,
      pagination,
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

    const paginationConfig = paginationFactory({
      prePageText: config.prePageText || 'Previous',
      nextPageText: config.nextPageText || 'Next',
      firstPageText: config.firstPageText || 'First',
      lastPageText: config.lastPageText || 'Last',
      alwaysShowAllBtns: typeof config.alwaysShowAllBtns !== 'undefined' && config.alwaysShowAllBtns,
      showTotal: typeof config.showTotal !== 'undefined' && config.showTotal,
      hideSizePerPage: typeof config.hideSizePerPage !== 'undefined' && config.hideSizePerPage,
      paginationTotalRenderer: customTotal
    });

    let tableProps = {}
  
    if (this.props.pagination) {
      tableProps = {
        pagination: paginationConfig
      }
    }

    columns.forEach(function(entry) {
      if(entry.search) {
        entry.filter = textFilter();
      }
    });

    return (
      <div>
        <Table>
          <thead>
          </thead>
          <tbody>
          </tbody>
        </Table>
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
  config: PropTypes.object,
  pagination: PropTypes.bool
};

export default DataTable;
export { DataTable as MDBDataTable };

