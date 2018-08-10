import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import Waves from './../Waves';
import classNames from 'classnames';

class ExportToCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
      data: this.props.data,
      computedData: [],
      headers: [],
      cursorPos: {}
    };
  }

  componentDidMount() {
    this.computeData();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.data != this.props.data || prevState.columns != this.props.columns) {
      this.setState({ 
        columns: this.props.columns, 
        data: this.props.data 
      });
      this.computeData();
    }
  }

  computeData = () => {
    this.setState((prevState) => ({
      computedData: [].concat.apply([], prevState.data),
      headers: prevState.columns.map(col => ({label: col.label, key: col.field}))
    }));
  }

  handleClick = (e) => {
    // Waves - Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
    e.stopPropagation();
  }

  render() {
    const {
      children,
      active,
      block,
      circle,
      className,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      ...attributes
    } = this.props;

    const classes = classNames(
      floating ? 'btn-floating' : 'btn',
      flat ? 'btn-flat' : gradient ? `${gradient}-gradient` : `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      rounded ? 'btn-rounded' : false,
      circle && 'btn-circle',
      block ? 'btn-block' : false,
      'Ripple-parent',
      className,
      { active, disabled: this.props.disabled }
    );

    return (
      <CSVLink
        data={this.state.computedData}
        headers={this.state.headers}
        filename={'table.csv'}
        className={classes}
        target="_blank"
        onTouchStart={this.handleClick}
        {...attributes}
      >
        {children}
        <Waves cursorPos={this.state.cursorPos} outline={outline} flat={flat} />
      </CSVLink>
    );
  }
}

ExportToCSV.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default ExportToCSV;
export { ExportToCSV as MDBExportToCSV };