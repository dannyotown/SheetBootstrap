import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeader extends Component {

  render() {

    const {
      className,
      tag: Tag,
      color,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-header',
      color && color + ' white-text',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string
};

CardHeader.defaultProps = {
  tag: 'div',
  color: false
};

export default CardHeader;
