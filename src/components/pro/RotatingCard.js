import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function RotatingCard (props) {

  const {
    className,
    tag: Tag,
    innerTag: innerTag,
    flipped,
    ...attributes
  } = props;

  const classes = classNames(
    'card-rotating effect__click',
    props.flipped && 'flipped',
    className
  );

  return (
    <Tag {...attributes} className="card-wrapper">
      <innerTag className={classes}>
        {props.children}
      </innerTag>
    </Tag>
  );
}


RotatingCard.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  flipped: PropTypes.bool
};

RotatingCard.defaultProps = {
  tag: 'div',
  innerTag: 'div',
  flipped: false
};

export default RotatingCard;
