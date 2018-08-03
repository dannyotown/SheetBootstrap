import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table, TableBody, DataTableHead, DataTableInput, DataTableSelect, Pagination, PageLink, PageItem } from 'mdbreact';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.data.columns,
      entries: 10,
      rows: props.data.rows,
      filteredRows: props.data.rows,
      pages: [],
      activePage: 0,
      search: ''
    };

    this.paginateRowsInitialy();
  }

  paginateRowsInitialy = () => {
    // findout how many pages there are need to be, then slice rows into pages
    const pagesAmount = Math.ceil(this.state.rows.length / this.state.entries);
    for(let i=1; i<=pagesAmount; i++) {
      const pageEndIndex = i*this.state.entries;
      this.state.pages.push(this.state.rows.slice(pageEndIndex-this.state.entries, pageEndIndex));
    }
  }
  
  handleEntriesChange = (value) => {
    this.setState({ entries: Array.isArray(value) ? value[0] : value }, () => this.paginateRows());
  }
  
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value }, () => this.filterRows());
  }
  
  handleSort = (field, sort) => {
    this.setState((prevState) => {
      sort === 'asc'
        ? prevState.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1))
        : prevState.rows.sort((a, b) => (a[field] > b[field] ? -1 : 1));
      prevState.columns[prevState.columns.findIndex(column => column.field === field)].sort = sort === 'asc' ? 'desc' : 'asc';
      return {
        rows: prevState.rows,
        columns: prevState.columns
      };
    },
    () => this.filterRows());
  }
  
  filterRows = () => {
    this.setState((prevState) => {
      const filteredRows = prevState.rows.filter(row => {
        for (let key in row) {
          if (Object.prototype.hasOwnProperty.call(row, key)) {
            const stringValue = row[key].toString();
            if (stringValue.toLowerCase().match(this.state.search.toLowerCase())) return true;
          }
        }
        return false;
      });
      return { filteredRows, activePage: 0 };
    },
    () => this.paginateRows());
  }

  paginateRows = () => {
    // findout how many pages there are need to be, then slice rows into pages
    const pagesAmount = Math.ceil(this.state.filteredRows.length / this.state.entries);
    this.setState((prevState) => {
      prevState.pages = [];
      for(let i=1; i<=pagesAmount; i++) {
        const pageEndIndex = i*prevState.entries;
        prevState.pages.push(prevState.filteredRows.slice(pageEndIndex-prevState.entries, pageEndIndex));
      }
      prevState.activePage = prevState.activePage < prevState.pages.length ? prevState.activePage : prevState.pages.length-11;
      return {...prevState};
    });
  }

  changeActivePage = (page) => {
    this.setState({ activePage: page });
  }

  render() {
    const {
      autoWidth,
      bordered,
      borderless,
      btn,
      children,
      dark,
      data,
      fixed,
      hover,
      maxHeight,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      scrollY,
      small,
      striped,
      tbodyColor,
      tbodyTextWhite,
      theadColor,
      theadTextWhite,
      ...attributes
    } = this.props;

    const {
      columns,
      entries,
      filteredRows,
      pages,
      activePage,
      search
    } = this.state;

    const entriesArr = [10, 25, 50, 100];

    return (
      <div className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <DataTableSelect
              value={entries}
              onChange={this.handleEntriesChange}
              entries={entriesArr}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <DataTableInput
              value={search}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Table
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              hover={hover}
              maxHeight={maxHeight}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              scrollY={scrollY}
              small={small}
              striped={striped}
              className="dataTable"
              {...attributes}
            >
              <DataTableHead
                color={theadColor}
                textWhite={theadTextWhite}
                columns={columns}
                handleSort={this.handleSort}
              />
              <TableBody
                color={tbodyColor}
                textWhite={tbodyTextWhite}
                rows={pages[activePage]}
              />
              {children}
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" role="status" aria-live="polite">
              Showing {activePage > 0 ? activePage*entries+1 : activePage+1} to {pages.length-1 > activePage ? pages[activePage].length*(activePage+1) : filteredRows.length} of {filteredRows.length} entries
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate">
              <Pagination>
                <PageItem 
                  disabled={activePage === 0}
                >
                  <PageLink className="page-link" aria-label="Previous" 
                    onClick={() => this.changeActivePage(activePage-1)}
                  >
                    <span>Previous</span>
                  </PageLink>
                </PageItem>
                { 
                  pages.map((page, index) =>
                    <PageItem key={index} active={index === activePage}>
                      <PageLink className="page-link"
                        onClick={() => this.changeActivePage(index)}
                      >
                        {index + 1} {index === activePage && <span className="sr-only">(current)</span>}
                      </PageLink>
                    </PageItem>
                  )   
                }
                <PageItem
                  disabled={activePage === pages.length-1}
                >
                  <PageLink className="page-link" aria-label="Next"
                    onClick={() => this.changeActivePage(activePage+1)}
                  >
                    <span>Next</span>
                  </PageLink>
                </PageItem>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  data: PropTypes.object,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  maxHeight: PropTypes.number,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
};

export default DataTable;
export { DataTable as MDBDataTable };

