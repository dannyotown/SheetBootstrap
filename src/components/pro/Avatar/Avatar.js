import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = props => {
  const {
    background,
    children,
    circle,
    className,
    round,
    size,
    src,
    style,
    tag: Tag,
    ...attributes
  } = props;

  let TagType;
  let objectSize;

  src ? (TagType = 'img') : (TagType = Tag);

  size
    ? (objectSize = size)
    : src
    ? (objectSize = '48px')
    : (objectSize = '40px');

  const classes = classNames(
    'avatar',
    !src && background,
    round && 'rounded',
    circle && 'rounded-circle',
    'd-table-cell align-middle text-center font-weight-bool',
    className
  );

  const defaultStyles = {
    height: objectSize,
    width: objectSize,
    color: 'white'
  };

  return (
    <TagType
      data-test='avatar'
      {...attributes}
      className={classes}
      style={{ ...defaultStyles, ...style }}
      src={src}
    >
      {children && typeof children === 'string' ? (
        <strong>{children}</strong>
      ) : (
        children
      )}
    </TagType>
  );
};

Avatar.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  circle: PropTypes.bool,
  className: PropTypes.string,
  round: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Avatar.defaultProps = {
  background: 'grey',
  circle: false,
  round: false,
  tag: 'div'
};

export default Avatar;
export { Avatar as MDBAvatar };
