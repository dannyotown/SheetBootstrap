import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import selectContextHOC   from './SelectContext';

class SelectInput extends React.Component {

  componentDidMount() {
    this.props.context.triggerOptionChange(this.props.selected);
  }

  render() {
    const {
      className,
      children,
      value,
      context,
      selected,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-dropdown',
      className
    );
    return (
      <input type="text" readOnly value={ context.state.selectText ? context.state.selectText : selected  } {...attributes} className={classes} />
    );
  }
}

SelectInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string
};

SelectInput.defaultProps = {
  children: 'div',
  className: '',
  selected: 'Choose your option',
  value: ''
};

export default SelectInput = selectContextHOC(SelectInput);
export { SelectInput as MDBSelectInput };
