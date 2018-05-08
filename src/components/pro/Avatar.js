import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Avatar extends Component {

  render() {

    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'avatar',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Avatar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Avatar.defaultProps = {
  tag: 'div'
};

export default Avatar;
