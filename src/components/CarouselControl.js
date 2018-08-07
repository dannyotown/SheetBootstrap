import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Control extends Component {

  render() {

    let {
      direction,
      text,
      className,
      onClick,
      tag: Tag,
      iconLeft,
      iconRight,
      testimonial,
      multiItem,
      ...attributes
    } = this.props;

    if(direction === 'prev') {
      text = 'Previous';
    } else if(direction === 'next') {
      text = 'Next';
    }

    let classes = classNames(
      'carousel-control-' + direction,
      className
    );

    let caretClasses = classNames(
      'carousel-control-' + direction + '-icon'
    );

    if (testimonial) {
      const arrow = direction === "prev" ? "left" : "right"
      classes = classNames(
        'carousel-item-' + direction,
        arrow,
        'carousel-control',
        className
      );
      caretClasses = classNames(
        'icon-' + direction
      );
    }

    if (multiItem) {
      classes = classNames(
        'btn-floating'
      );
    }

    return (
      <Tag className={classes} data-slide={direction} onClick={onClick}>
        {this.props.iconLeft ? (
          <i className="fa fa-chevron-left"></i>
        ) : this.props.iconRight ? (
          <i className="fa fa-chevron-right"></i>
        ) : (
          <div>
            <span className={caretClasses} aria-hidden="true"></span>
            <span className="sr-only">{this.props.text}</span>
          </div>
        )}
      </Tag>
    );
  }
}

Control.propTypes = {
  onClick: PropTypes.any,
  text: PropTypes.string,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  testimonial: PropTypes.bool,
  multiItem: PropTypes.bool
};

Control.defaultProps = {
  tag: 'a'
};

export default Control;
export { Control as MDBControl };
