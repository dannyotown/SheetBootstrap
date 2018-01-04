import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends React.Component {

  render() {
    const {
      className,
      children,
      value,
      disabled,
      triggerOptionClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      disabled ? 'disabled' : '',
      'colorful-select dropdown-primary',
      className
    );
    return (
      <li {...attributes} className={classes}><span className="filtrable" onClick={this.props.triggerOptionClick}>{children}</span></li>
    );
  }
}

Option.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value:PropTypes.string,
  disabled:PropTypes.bool,
  triggerOptionClick: PropTypes.func
};

export default Option;
