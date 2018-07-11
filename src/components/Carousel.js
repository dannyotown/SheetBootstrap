import React, { Component } from 'react';
import { CarouselControl, CarouselIndicators, CarouselIndicator } from '../';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      length: this.props.length,
      slide: this.props.slide,
      srcArray: []
    };

    this.carouselRef = React.createRef();
  }

  restartInterval = () => {
    if(this.props.interval !== false) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = setInterval(this.next, this.props.interval);
    }
  }

  next = () => {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.length) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
    this.restartInterval();
  }

  prev = () => {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.length });
    } else {
      this.setState({ activeItem: prevItem });
    }
    this.restartInterval();
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
    this.restartInterval();
  }

  componentDidMount = () => {
    if(this.props.interval === false) {
      return;
    }
    this.cycleInterval = setInterval(this.next, this.props.interval);

    // get images src atr
    if(this.props.thumbnails){
      const CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item > img');
      const srcArray = Array.prototype.map.call(CarouselItemsArray, item => item.src);
      this.setState({ srcArray });
    }
  }

  componentWillUnmount() {
    if(this.props.interval === false) {
      return;
    }
    clearInterval(this.cycleInterval);
  }

  getChildContext() {
    return {
      activeItem: this.state.activeItem,
      length: this.state.length,
      slide: this.state.slide
    };
  }

  render() {
    const {
      activeItem,
      children,
      className,
      multiItem,
      slide,
      thumbnails,
      interval,
      testimonial,
      tag: Tag,
      length,
      showControls,
      showIndicators,
      ...attributes
    } = this.props;

    let ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      'carousel-fade',
      this.props.multiItem ? 'carousel-multi-item' : '',
      this.props.thumbnails ? 'carousel-thumbnails' : '',
      this.props.testimonial ? 'testimonial-carousel' : '',
      className
    );

    const CarouselIndicatorsArray = [];
    for(let i = 1; i <= this.state.length; i++){
      CarouselIndicatorsArray.push(<CarouselIndicator img={thumbnails ? this.state.srcArray[i - 1] : null} key={i} active={this.state.activeItem === i ? true : false} onClick={() => { this.goToIndex(i); }}></CarouselIndicator>);
    }

    return (
      <Tag ref={this.carouselRef} {...attributes} className={classes} aria-label={ariaLabel}>
        {(this.props.showControls && this.props.multiItem) && (
          <div className="controls-top">
            <CarouselControl iconLeft className="btn-floating" direction="prev" role="button" onClick={this.prev}/>
            <CarouselControl iconRight className="btn-floating" direction="next" role="button" onClick={this.next}/>
          </div>
        )}
        {children}
        {(this.props.showControls && !this.props.multiItem) && (
          <React.Fragment>
            <CarouselControl direction="prev" role="button" onClick={this.prev} />
            <CarouselControl direction="next" role="button" onClick={this.next} />
          </React.Fragment>
        )}
        <CarouselIndicators>
          {this.props.showIndicators && CarouselIndicatorsArray}
        </CarouselIndicators>
      </Tag>
    );
  }
}

Carousel.propTypes = {
  activeItem: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  multiItem: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  thumbnails: PropTypes.bool,
  testimonial: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  length: PropTypes.number
};

Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true
};

Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

export default Carousel;
export { Carousel as MDBCarousel };
