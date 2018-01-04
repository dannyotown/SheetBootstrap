import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class NavLink extends Component {

  render() {

    const {
      children,
      className,
      active,
      tag: Tag,
      href,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav-link',
      attributes.disabled ? 'disabled' : '',
      active ? 'active' : '',
      className
    );

    return (
      <Tag {...attributes} className={classes} href={href}>
        {children}
      </Tag>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  href: PropTypes.string
};

NavLink.defaultProps = {
  tag: 'a',
  href: '#'
};

export default NavLink;
