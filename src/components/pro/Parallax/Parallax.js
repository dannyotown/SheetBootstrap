import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jarallax, jarallaxVideo, jarallaxElement } from 'jarallax';

class Parallax extends Component {
  constructor(props) {
    super(props);

    this.jarallax = React.createRef();

    this.parentStyle = {
      height: this.props.height || '400px',
      width: this.props.width || '100%'
    };

    const {
      imgSrc,
      imgElement,
      imgSize,
      imgPosition,
      imgRepeat,
      elementInViewport,
      zIndex,
      disableParallax,
      disableVideo,
      videoStartTime,
      videoEndTime,
      videoVolume,
      disableVideoLoop,
      disableVideoPlayOnlyVisible,
      disableVideoLazyLoading
    } = this.props;

    this.imageOptions = {
      imgSrc: imgSrc,
      imgElement: imgElement,
      imgSize: imgSize,
      imgPosition: imgPosition,
      imgRepeat: imgRepeat,
      elementInViewport: elementInViewport,
      zIndex: zIndex,
      disableParallax: disableParallax
    };

    this.videoOptions = {
      videoStartTime: videoStartTime,
      videoEndTime: videoEndTime,
      videoVolume: videoVolume,
      videoLoop: !disableVideoLoop,
      videoPlayOnlyVisible: !disableVideoPlayOnlyVisible,
      videoLazyLoading: !disableVideoLazyLoading,
      disableVideo: disableVideo
    };

    // this.elementOptions = {
    //   type: type
    // speed: this.props.speed
    // videoLazyLoading: false
    // };
  }

  componentDidMount() {
    // if (this.props.image) {
    //   jarallax(this.jarallax.current, this.imageOptions);
    // } else if (this.props.video) {
    //   jarallax(this.jarallax.current, this.videoOptions);
    //   jarallaxVideo(this.jarallax.current);
    //   jarallaxElement(this.jarallax.current);
    // } else if (this.props.element) {
    //   jarallax(this.jarallax.current);
    //   jarallaxElement(this.jarallax.current, this.elementOptions);
    // }

    jarallax(
      this.jarallax.current,
      this.props.image
        ? this.imageOptions
        : this.props.video
        ? this.videoOptions
        : this.props.element
        ? this.props.elementOptions
        : null
    );
    jarallaxVideo();
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
      alt,
      type,
      speed,
      image,
      video,
      element,
      children,
      keepImg,
      treshold
    } = this.props;

    const parentClasses = classNames(
      keepImg ? 'jarallax-keep-img' : 'jarallax',
      className
    );

    return (
      <>
        {image && (
          <Tag
            ref={this.jarallax}
            className={parentClasses}
            style={this.parentStyle}
            data-jarallax
            data-type={type}
            data-speed={speed}
          >
            {image && <img className='jarallax-img ' src={image} alt={alt} />}
            {children}
          </Tag>
        )}
        {video && (
          <Tag
            ref={this.jarallax}
            className={parentClasses}
            style={this.parentStyle}
            data-jarallax
            data-type={type}
            data-speed={speed}
            data-video-src={video}
          >
            {children}
          </Tag>
        )}
        {element && (
          <Tag
            ref={this.jarallax}
            // className={parentClasses}
            // style={this.parentStyle}
            // data-type='element'
            // data-speed={speed}
            data-jarallax-element={speed}
            // data-treshold={treshold}
          >
            {children}
          </Tag>
        )}
      </>
    );
  }
}

Parallax.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  speed: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  type: PropTypes.string,
  keepImg: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgElement: PropTypes.string,
  imgSize: PropTypes.string,
  imgPosition: PropTypes.string,
  imgRepeat: PropTypes.string,
  elementInViewport: PropTypes.node,
  zIndex: PropTypes.number,
  disableParallax: PropTypes.func,

  //  ParallaxVideo proptypes

  videoSrc: PropTypes.string,
  videoStartTime: PropTypes.number,
  videoEndTime: PropTypes.number,
  videoVolume: PropTypes.number,
  videoLoop: PropTypes.bool,
  videoPlayOnlyVisible: PropTypes.bool,
  videoLazyLoading: PropTypes.bool,
  disableVideo: PropTypes.func,
  //  ParallaxElement proptypes

  treshold: PropTypes.node
};

Parallax.defaultProps = {
  tag: 'div',
  alt: 'MDBParallax image',
  type: 'scroll',
  imgSrc: null,
  imgElement: '.jarallax-img',
  imgSize: 'cover',
  imgPosition: '50% 50%',
  imgRepeat: 'no-repeat',
  keepImg: false,
  elementInViewport: null,
  zIndex: -100,
  disableParallax: null,

  //  ParallaxVideo proptypes

  videoStartTime: 0,
  videoEndTime: 0,
  videoVolume: 0,
  videoLoop: true,
  videoPlayOnlyVisible: true,
  videoLazyLoading: true,
  disableVideo: null

  //  ParallaxElement proptypes

  // treshold: 'null null'
};

export default Parallax;
export { Parallax as MDBParallax };

// image='https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

// import React, { Component } from 'react';
// import Waves from '../../Waves';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import jarallax from 'jarallax';

// class Parallax extends Component {
//   constructor(props) {
//     super(props);
//     this.jarallax = React.createRef();

//     this.parallaxOptions = {};

//     this.parentStyle = {
//       height: this.props.containterHeight || '200px'
//     };
//   }

//   componentDidMount() {
//     jarallax(this.jarallax.current);
//   }

//   componentWillUnmount() {
//     jarallax(this.jarallax.current, 'destroy');
//   }

//   // handleClick = e => {
//   //   // Get Cursor Position
//   //   e.stopPropagation();
//   //   let cursorPos = {
//   //     top: e.clientY,
//   //     left: e.clientX,
//   //     time: Date.now()
//   //   };
//   //   setCursorPos(cursorPos);
//   // };

//   render() {
//     const {
//       className,
//       tag: Tag,
//       // alt,
//       waves,
//       children,
//       image,
//       cursorPos,
//       speed
//       // ...attributes
//       // size,
//       // bgColor,
//       // text,
//       // gradient,
//       // src,
//       // close,
//       // handleClose,
//     } = this.props;

//     // const parentClasses = classNames(
//     //   'jarallax',
//     //   waves && 'Ripple-parent',
//     //   className
//     // );

//     return (
//       <Tag
//         ref={this.jarallax}
//         className={jarallax}
//         // {...attributes}
//         data-jarallax
//         data-speed={speed}
//       >
//         {/* {waves && <Waves cursorPos={cursorPos} />} */}
//         {image && <img className='jarallax-img ' src={image} alt='lol' />}
//         {children}
//       </Tag>
//     );
//   }
// }

// Parallax.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // size: PropTypes.string,
//   // bgColor: PropTypes.string,
//   // text: PropTypes.string,
//   // gradient: PropTypes.string,
//   image: PropTypes.string,
//   alt: PropTypes.string
//   // close: PropTypes.bool,
//   // handleClose: PropTypes.func
// };

// Parallax.defaultProps = {
//   tag: 'div'
// };

// export default Parallax;
// export { Parallax as MDBParallax };

// // image='https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
