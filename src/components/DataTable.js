import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table, TableBody, DataTableHead, DataTableInput, DataTableSelect, TableFoot, Pagination, PageLink, PageItem } from 'mdbreact';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      columns: props.data.columns,
      entries: 10,
      filteredRows: props.data.rows,
      pages: [],
      rows: props.data.rows,
      search: '',
      translateScrollHead: 0
    };

    if(this.props.paging) {
      this.paginateRowsInitialy();
    }
    else {
      this.state.pages.push(this.state.rows);
    }
  }

  componentDidMount() {
    this.props.order.length && this.handleSort(this.props.order[0], this.props.order[1]);
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
      // run default block if there is no key 'sort'
      switch (sort) {
      case 'asc':
        prevState.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        break;
      case 'desc':
        prevState.rows.sort((a, b) => (a[field] > b[field] ? -1 : 1));
        break;
      default:
        prevState.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1));
      }
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
      if (this.props.paging) {
        for(let i=1; i<=pagesAmount; i++) {
          const pageEndIndex = i*prevState.entries;
          prevState.pages.push(prevState.filteredRows.slice(pageEndIndex-prevState.entries, pageEndIndex));
        }
        prevState.activePage = prevState.activePage < prevState.pages.length ? prevState.activePage : prevState.pages.length-11;
      }
      else {
        prevState.pages.push(prevState.filteredRows);
        prevState.activePage = 0;
      }

      return {...prevState};
    });
  }

  changeActivePage = (page) => {
    this.setState({ activePage: page });
  }

  handleTableBodyScroll = (e) => {
    this.setState({ translateScrollHead: e.target.scrollLeft });
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
      info,
      maxHeight,
      order,
      paging,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      searching,
      scrollX,
      scrollY,
      small,
      sortable,
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
            {
              paging &&
              <DataTableSelect
                value={entries}
                onChange={this.handleEntriesChange}
                entries={entriesArr}
              />
            }
          </div>
          <div className="col-sm-12 col-md-6">
            {
              searching && 
              <DataTableInput
                value={search}
                onChange={this.handleSearchChange}
              />
            }
          </div>
        </div>
        {
          (!scrollY && !scrollX) &&
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
                responsive={responsive}
                responsiveSm={responsiveSm}
                responsiveMd={responsiveMd}
                responsiveLg={responsiveLg}
                responsiveXl={responsiveXl}
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
                  scrollY={scrollY}
                  sortable={sortable}
                />
                <TableBody
                  color={tbodyColor}
                  textWhite={tbodyTextWhite}
                  rows={pages[activePage]}
                />
                <TableFoot
                  color={theadColor}
                  textWhite={theadTextWhite}
                  columns={columns}
                />
                {children}
              </Table>
            </div>
          </div>
        }
        {
          (scrollY || scrollX) &&
          <div className="row">
            <div className="col-sm-12">
              <div className="dataTables_scroll">
                <div className="dataTables_scrollHead" style={{ overflow: 'hidden' }}>
                  <div className="dataTables_scrollHeadInner" style={{ position: 'relative', transform: `translateX(-${this.state.translateScrollHead}px)`, boxSizing: 'content-box', paddingRight: '15px', minWidth: `${scrollX ? columns.map(col => col.width).reduce((prev, curr) => prev + curr)+'px' : 'auto'}` }}>
                    <Table
                      autoWidth={autoWidth}
                      bordered={bordered}
                      borderless={borderless}
                      btn={btn}
                      dark={dark}
                      fixed={fixed}
                      hover={hover}
                      responsive={responsive}
                      responsiveSm={responsiveSm}
                      responsiveMd={responsiveMd}
                      responsiveLg={responsiveLg}
                      responsiveXl={responsiveXl}
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
                        scrollX={scrollX}
                        scrollY={scrollY}
                        sortable={sortable}
                      />
                    </Table>
                  </div>
                </div>

                <div className="dataTable_scrollBody" style={{ overflow: 'auto' }} onScroll={this.handleTableBodyScroll}>
                  <Table
                    style={{ minWidth: `${scrollX ? columns.map(col => col.width).reduce((prev, curr) => prev + curr)+'px' : 'auto'}` }}
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
                    <colgroup>
                      {columns.map(col => <col key={col.field} style={{ width: `${col.width}px` || 'auto', minWidth: `${col.width}px` || 'auto' }} />)}
                    </colgroup>
                    <TableBody
                      color={tbodyColor}
                      textWhite={tbodyTextWhite}
                      rows={pages[activePage]}
                    />
                    {children}
                  </Table>
                </div>
              </div>
            </div>
          </div>
        }
        {
          paging &&
          <div className="row">
            <div className="col-sm-12 col-md-5">
              {
                info &&
                <div className="dataTables_info" role="status" aria-live="polite">
                  Showing {activePage > 0 ? activePage * entries + 1 : activePage + 1} to {pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length} of {filteredRows.length} entries
                </div>
              }
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="dataTables_paginate">
                <Pagination>
                  <PageItem
                    disabled={activePage === 0}
                  >
                    <PageLink className="page-link" aria-label="Previous"
                      onClick={() => this.changeActivePage(activePage - 1)}
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
                    disabled={activePage === pages.length - 1}
                  >
                    <PageLink className="page-link" aria-label="Next"
                      onClick={() => this.changeActivePage(activePage + 1)}
                    >
                      <span>Next</span>
                    </PageLink>
                  </PageItem>
                </Pagination>
              </div>
            </div>
          </div>
        }
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
  info: PropTypes.bool,
  maxHeight: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.string),
  paging: PropTypes.bool,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  searching: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
};

DataTable.defaultProps = {
  autoWidth: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  fixed: false,
  hover: false,
  info: true,
  order: [],
  paging: true,
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};

export default DataTable;
export { DataTable as MDBDataTable };

