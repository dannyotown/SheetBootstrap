import React, { Component } from 'react';
import { jarallax } from 'jarallax';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.jarallax = React.createRef();
  }

  componentDidMount() {
    jarallax(this.jarallax.current, { speed: 0.2 });
  }

  componentWillUnmount() {
    jarallax(this.jarallax.current, 'destroy');
  }

  render() {
    return (
      <div className='jarallax' ref={this.jarallax}>
        <img className='jarallax-img' src={this.props.image} alt='lol' />
      </div>
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
export { Parallax as MDBParallax };

// image='https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
