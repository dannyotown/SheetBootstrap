import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jarallax, jarallaxVideo } from 'jarallax';

class ParallaxVideo extends Component {
  constructor(props) {
    super(props);

    this.jarallax = React.createRef();

    this.parentStyle = {
      height: this.props.height || '400px',
      width: this.props.width || '100%'
    };

    this.videoOptions = {
      type: this.props.type,
      videoLazyLoading: false
    };
  }

  componentDidMount() {
    jarallax(this.jarallax.current, this.videoOptions);
    jarallaxVideo();
  }

  componentWillUnmount() {
    jarallax(this.jarallax.current, 'destroy');
  }
  parentStyle = {};

  render() {
    const { className, tag: Tag, type, children, speed, video } = this.props;

    const parentClasses = classNames('jarallax', className);

    return (
      <>
        <Tag
          ref={this.jarallax}
          className={parentClasses}
          type={type}
          data-jarallax
          data-speed={speed}
          data-video-src={video}
          style={this.parentStyle}
        >
          {children}
        </Tag>
      </>
    );
  }
}

ParallaxVideo.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  keepImg: PropTypes.bool
};

ParallaxVideo.defaultProps = {
  tag: 'div',
  type: 'scroll',
  keepImg: false
};

export default ParallaxVideo;
export { ParallaxVideo as MDBParallaxVideo };
