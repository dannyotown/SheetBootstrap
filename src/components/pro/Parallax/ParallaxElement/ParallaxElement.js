import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jarallax, jarallaxElement } from 'jarallax';

class ParallaxElement extends Component {
  constructor(props) {
    super(props);

    this.jarallax = React.createRef();

    // this.parentStyle = {
    //   height: this.props.height || '400px',
    //   width: this.props.width || '100%'
    // };

    this.elementOptions = {
      type: 'element',
      speed: this.props.speed,
      threshold: false
    };
  }

  componentDidMount() {
    jarallax(this.jarallax.current, this.props.elementOptions);
    jarallaxElement();
  }

  componentWillUnmount() {
    jarallax(this.jarallax.current, 'destroy');
  }
  parentStyle = {};

  render() {
    const {
      className,
      tag: Tag,
      type,
      speed,
      threshold,
      children
    } = this.props;

    const parentClasses = classNames('jarallax', className);

    return (
      <>
        <Tag
          ref={this.jarallax}
          className={parentClasses}
          type={type}
          data-jarallax
          data-speed={speed}
          data-threshold={threshold}
          // style={this.parentStyle}
        >
          {children}
        </Tag>
      </>
    );
  }
}

ParallaxElement.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  keepImg: PropTypes.bool
};

ParallaxElement.defaultProps = {
  tag: 'div',
  type: 'scroll',
  keepImg: false
};

export default ParallaxElement;
export { ParallaxElement as MDBParallaxElement };
