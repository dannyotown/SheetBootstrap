import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jarallax } from 'jarallax';

class Parallax extends Component {
  constructor(props) {
    super(props);

    this.jarallax = React.createRef();

    this.parallaxOptions = {};

    this.parentStyle = {
      height: this.props.containterHeight || '200px'
    };
  }

  componentDidMount() {
    jarallax(this.jarallax.current);
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
      waves,
      children,
      image,
      speed
    } = this.props;

    const parentClasses = classNames(
      'jarallax',
      waves && 'Ripple-parent',
      className
    );
    return (
      <Tag
        ref={this.jarallax}
        className={parentClasses}
        data-jarallax
        data-speed={speed}
        style={{ ...this.parentStyle }}
        // {...attributes}
      >
        {image && (
          <img className='jarallax-img ' src={image} alt={alt || 'lol'} />
        )}
        {children}
      </Tag>
    );
  }
}

Parallax.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string
};

Parallax.defaultProps = {
  tag: 'div'
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
