import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Select extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classes = classNames(
      'select-wrapper',
      className
    );
    return (
      <div {...attributes} className={classes}>
        <span className="caret">▼</span>
        {children}
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Select;
