import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = props => {
  const { tag: Tag, className, children, color, pill, ...attributes } = props;

  const classes = classNames(
    'badge',
    color,
    `badge-${color}`,
    pill ? 'badge-pill' : false,
    className
  );
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag data-test='badge' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};
Badge.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string
};
Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};

export default Badge;
export { Badge as MDBBadge };
