import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselIndicator extends Component {

  render() {
 
    let {
      active,
      children,
      className,
      ...attributes
    } = this.props;

    let classes = classNames(
      this.props.active ? 'active' : '',
      className
    );

    return (
      <li {...attributes} className={classes}>
        {children}
      </li>
    );
  }
}

export default CarouselIndicator;