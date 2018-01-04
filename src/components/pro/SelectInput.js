import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      children,
      value,
      triggerSelectClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-dropdown',
      className
    );
    return (
      <input type="text" readOnly value={value} {...attributes} className={classes} onClick={this.props.triggerSelectClick} />
    );
  }
}

SelectInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
  triggerSelectClick: PropTypes.func
};

export default SelectInput;
