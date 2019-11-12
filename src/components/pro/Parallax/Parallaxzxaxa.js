import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insideStatic: this.props.insideStatic
    };

    this.parallaxStyle = {
      speed: this.props.speed || 0,

      minWidth: this.props.width || '100%',
      height: this.props.height || '100%',

      top: this.props.top || '0%',
      bottom: this.props.bottom,
      left: this.props.left,
      right: this.props.right,

      backgroundRepeat: this.props.Repeat || 'no-repeat',
      backgroundPosition: this.props.Position || 'center',
      backgroundColor: this.props.Color || null,
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: this.props.imageSize || 'cover',

      zIndex: this.props.zIndex || '-1',

      marginTop: this.props.marginTop || '0px',

      position: this.props.position || 'absolute',

      transform: `transform(${this.props.top})` || `transform(0)`
    };

    this.parentStyle = {
      position: this.props.containerPosition || 'relative',
      overflow: this.props.overflow || 'hidden',
      height: this.props.containterHeight || '100%',
      width: this.props.containerWidth || '100%'
    };

    this.handleScroll = this.throttle(this.handleScroll.bind(this), 10);
    this.top = this.getTop();
  }

  throttle(fn, wait) {
    let time = Date.now();

    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  getTop() {
    const top = this.parallaxStyle.top;
    return top.indexOf('%') > -1
      ? window.innerHeight * (top.replace('%', '') / 10)
      : parseInt(top, 10);
  }

  handleScroll = () => {
    const { speed } = this.parallaxStyle;

    const parallaxContainer = this.refs.parentElement.getBoundingClientRect();
    const parallaxElement = this.refs.parallaxElement.getBoundingClientRect();
    const centerImagePosition =
      (parallaxElement.height - parallaxContainer.height) / 2;

    const browserHeight = window.innerHeight;

    const centerAllToWindow =
      parallaxContainer.top - browserHeight / 2 + parallaxContainer.height / 2;

    const top = this.top;
    let newTop = 0;

    if ((speed >= 0 && speed < 1) || (speed <= 0 && speed >= -1)) {
      if (browserHeight >= parallaxContainer.height) {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          Math.abs(browserHeight - parallaxContainer.height) *
            Math.abs(speed)}px`;
      } else {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          parallaxContainer.height * Math.abs(speed)}px`;
      }
    } else if (speed > 1) {
      const result = parallaxContainer.height * Math.abs(speed);
      const minus = result - parallaxContainer.height;

      if (browserHeight >= parallaxContainer.height) {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          (browserHeight + parallaxContainer.height) * Math.abs(speed)}px`;
      } else {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          Math.abs(minus) * 2}px`;
      }
    } else if (speed < -1) {
      const result = parallaxContainer.height * Math.abs(speed);
      const minus = result - parallaxContainer.height;

      if (browserHeight >= parallaxContainer.height) {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          minus * 2}px`;
      } else {
        this.refs.parallaxElement.style.height = `${parallaxContainer.height +
          minus}px`;
      }
    }

    if (speed < 0) {
      newTop = top + centerAllToWindow * Math.abs(speed);
    } else if (speed > 0) {
      newTop = top + centerAllToWindow * Math.abs(speed);
    }

    if (
      parallaxContainer.top <= browserHeight &&
      parallaxContainer.bottom >= 0
    ) {
      if (speed > 0) {
        this.refs.parallaxElement.style.top = `${-newTop -
          centerImagePosition}px`;
        // this.refs.parallaxElement.style.transform = `translateY(${-newTop -
        //   centerImagePosition}px)`;
      } else if (speed < 0) {
        this.refs.parallaxElement.style.top = `${newTop / 4 -
          centerImagePosition}px`;
        // this.refs.parallaxElement.style.transform = `translateY(${newTop +
        //   centerImagePosition}px)`;
      }
    }
  };

  render() {
    return (
      <>
        <div
          ref='parentElement'
          style={{ ...this.parentStyle }}
          className='parentClasses'
        >
          <div
            ref='parallaxElement'
            style={{ ...this.parallaxStyle }}
            className='parallaxClasses'
          >
            {this.state.insideStatic ? null : this.props.children}
          </div>
          {this.state.insideStatic ? this.props.children : null}
        </div>
      </>
    );
  }
}

Parallax.propTypes = {
  // isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // id: PropTypes.string,
  // className: PropTypes.node,
  // children: PropTypes.node,
  // navbar: PropTypes.bool,
  // delay: PropTypes.oneOfType([
  //   PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
  //   PropTypes.number
  // ]),
  // onOpened: PropTypes.func,
  // onClosed: PropTypes.func
};

Parallax.defaultProps = {
  // isOpen: '',
  // delay: DEFAULT_DELAYS,
  // onOpened: () => {},
  // onClosed: () => {}
};

export default Parallax;

// image='https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
