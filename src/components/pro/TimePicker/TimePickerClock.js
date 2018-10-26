import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ClockHand from './ClockHand';

const propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  rotate: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  double: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.number
};

const defaultProps = {
  allowedValues: [],
  color: 'priamry',
  double: false,
  size: 270,
  value: 0
};

class TimePickerClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      value: 0
    };

    this.clockRef = React.createRef();
  }

  componentDidMount() {
    const { size, max, min, double } = this.props;

    const clockRadius = size / 2;
    const digitsAmount = max - min + 1;
    const digitsInRound = double ? (digitsAmount / 2) : digitsAmount;
    const degreesPerUnit = 360 / digitsInRound;
    const outerRadius = clockRadius - 4;
    const innerRadius = clockRadius - Math.max(clockRadius * 0.4, 48); // cant be lower than 48
    const degrees = degreesPerUnit * Math.PI / 180;
    const handScale = this.getHandScale(this.props.value);
    console.log(handScale)
    const handAngle = this.props.rotate + (degreesPerUnit * (this.props.value - this.props.min));

    this.setState({ 
      clockRadius,
      degrees,
      degreesPerUnit,
      digitsInRound,
      handAngle,
      handScale,
      innerRadius,
      outerRadius
    });
  }
  
  getHandScale = (value) => {
    return this.props.double && (value - this.props.min >= this.state.digitsInRound) ? (this.state.innerRadius / this.state.clockRadius) : (this.state.outerRadius / this.state.clockRadius);
  };
  
  getHandAngle = (center, p1) => {
    const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
    return Math.abs(value * 180 / Math.PI);
  };

  euclidean = (p0, p1) => {
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;

    return Math.sqrt((dx * dx) + (dy * dy));
  };

  isValueAllowed = (value) => this.props.allowedValues.length ? this.props.allowedValues.find(item => item === value) : true;

  genClockDigits = () => {
    const children = [];

    for (let value = this.props.min; value <= this.props.max; value += this.props.step) {
      const classes = classNames(
        value === this.state.value && 'active',
        !this.isValueAllowed(value) && 'disabled'
      );

      children.push(
        <span
          className={classes}
          style={this.getTransform(value)}
          key={value}
        >
          {value}
        </span>
      );
    }

    return children;
  };

  getTransform = (value) => {
    const { x, y } = this.getPosition(value);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  getPosition = (value) => {
    const radius = (this.state.clockRadius - 24) * this.getHandScale(value);
    const rotateRadians = this.props.rotate * Math.PI / 180;
    return {
      x: Math.round(Math.sin(((value - this.props.min) * this.state.degrees) + rotateRadians) * radius),
      y: Math.round(-Math.cos(((value - this.props.min) * this.state.degrees) + rotateRadians) * radius)
    };
  };

  onMouseDown = (e) => {
    e.preventDefault();
    this.setState({ isDragging: true });
  };

  onMouseUp = () => {
    this.setState({ isDragging: false });
  };

  onDragMove = (e) => {
    e.preventDefault();
    if (!this.state.isDragging && e.type !== 'click') return;

    const { width, top, left } = this.clockRef.current.getBoundingClientRect();
    const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;

    const center = { x: width / 2, y: -width / 2 };
    const coords = { x: clientX - left, y: top - clientY };
    const handAngle = Math.round(this.getHandAngle(center, coords) + 360) % 360;
    const insideClick = this.state.double && this.euclidean(center, coords) < ((this.state.outerRadius + this.state.innerRadius) / 2) - 16;
    const value = Math.round((handAngle - this.props.rotate) / this.state.degreesPerUnit) + this.props.min + (insideClick ? this.state.digitsInRound : 0);
    const handScale = this.getHandScale(value);
    
    this.setState({ handAngle, handScale });

    if (handAngle >= (360 - (this.state.degreesPerUnit / 2))) {
      this.updateValue(insideClick ? this.props.max : this.props.min);
    } else {
      this.updateValue(value);
    }
  };

  updateValue = (value) => {
    if(this.state.value !== value) {
      this.setState({ value });
      this.props.handleChange(value);
    }
  };

  render() {
    const classes = classNames(
      "time-picker-clock",
      this.state.value === null && 'time-picker-clock--indeterminate'
    );
    
    return (
      <div
        className={classes}
        style={{ height: `${this.props.size}px`, width: `${this.props.size}px` }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={() => (this.state.isDragging && this.onMouseUp())}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseUp}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        ref={this.clockRef}
      >
        <ClockHand angle={this.state.handAngle} scale={this.state.handScale} />
        {
          this.genClockDigits()
        }
      </div>
    );
  }
}

TimePickerClock.propTypes = propTypes;
TimePickerClock.defaultProps = defaultProps;

export default TimePickerClock;
