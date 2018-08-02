import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table, TableBody, DataTableHead } from 'mdbreact';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.data.columns,
      entries: 10,
      rows: props.data.rows,
      filteredRows: [],
      rowsToDisplay: [],
      search: ''
    };
  }

  componentDidMount() {
    this.filterRowsToDisplay();
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
    () => this.filterRowsToDisplay());
  }

  handleEntriesChange = (e) => {
    this.setState({ entries: e.target.value }, () => this.filterRowsToDisplay());
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value }, () => this.filterRowsToDisplay());
  }

  filterRowsToDisplay = () => {
    this.setState((prevState) => {
      const filteredRows = prevState.rows.filter(row => {
        for(let key in row) {
          if(Object.prototype.hasOwnProperty.call(row, key)) {
            const stringValue = row[key].toString();
            if(stringValue.toLowerCase().match(this.state.search.toLowerCase())) return true;
          }
        }
        return false;
      });
      
      return { filteredRows };
    },
    () => this.sliceRowsToDisplay());
  }

  sliceRowsToDisplay = () => {
    this.setState((prevState) => {
      return {
        rowsToDisplay: prevState.filteredRows.slice(0, this.state.entries)
      };
    });
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

    const entries = [10, 25, 50, 100];

    return (
      <div className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_length bs-select">
              <label>
                Show <select 
                  value={this.state.entries} 
                  onChange={this.handleEntriesChange} 
                  className="custom-select custom-select-sm form-control form-control-sm"
                >
                  {
                    entries.map(entry => <option key={entry} value={entry}>{entry}</option>)
                  }  
                </select> entries
              </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_filter">
              <label>
                Search <input 
                  value={this.state.search}
                  onChange={this.handleSearchChange}
                  type="search" 
                  className="form-control form-control-sm" 
                  placeholder="Search" 
                />
              </label>
            </div>
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
                columns={this.state.columns}
                handleSort={this.handleSort}
              />
              <TableBody
                color={tbodyColor}
                textWhite={tbodyTextWhite}
                rows={this.state.rowsToDisplay}
              />
              {children}
            </Table>
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

