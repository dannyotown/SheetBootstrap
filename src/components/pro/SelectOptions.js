import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./Fade.css');

class Options extends React.Component {
  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classes = classNames(
      'dropdown-content',
      'select-dropdown',
      'fadeElement',
      className
    );
    return (
      <ul {...attributes} className={classes}>{children}</ul>
    );
  }
}

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Options;
