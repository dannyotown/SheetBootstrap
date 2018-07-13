import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DataTable.css';

class TableEditable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }

  addRow() {
    let newData = JSON.parse(JSON.stringify(this.state.data));
    let newDataLength = newData.length;
    let newRow = JSON.parse(JSON.stringify(newData[newDataLength - 1]));
    newData.push(newRow);
    this.setState({
      data: newData
    })
  }

  removeRow(index) {
    console.log('Remove row nr ' + index);
  }

  render() {
    const {
      className,
      small,
      bordered,
      striped,
      hover,
      data,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      ...attributes
    } = this.props;

    const classes  = classNames(
      'table',
      small && 'table-sm',
      bordered && 'table-bordered',
      striped && 'table-striped',
      hover && 'table-hover',
      className
    );

    const wrapperClasses = classNames(
      'table-editable text-center',
      responsive && 'table-responsive',
      responsiveSm && 'table-responsive-sm',
      responsiveMd && 'table-responsive-md',
      responsiveLg && 'table-responsive-lg',
      responsiveXl && 'table-responsive-xl'
    );

    return (
      <div className={wrapperClasses}>
        <span onClick={ this.addRow } className="table-add float-right mb-3 mr-2"><a href="#!" className="text-success"><i className="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
        <table {...attributes} className={classes}>
          <tbody>
            {this.state.data.map((tr, i) => {
              return (
                <tr key={i}>
                  { tr.map((td, j) => {
                    return (
                      <td key={j}>
                        { td }
                      </td>
                    );
                  })}
                  <td>
                    <span onClick={() => this.removeRow(i)} className="table-remove"><button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

TableEditable.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.node,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool
};

export default TableEditable;
export { TableEditable as MDBTableEditable };
