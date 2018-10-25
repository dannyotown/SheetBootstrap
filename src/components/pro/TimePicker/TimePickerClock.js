// import './clock.css';

// // Mixins
// import Colorable from './colorable';

// export default {
//   name: 'time-picker-clock',

//   mixins: [
//     Colorable
//   ],

//   data () {
//     return {
//       defaultColor: 'accent',
//       inputValue: this.value,
//       isDragging: false
//     };
//   },

//   props: {
//     allowedValues: Function,
//     double: Boolean,
//     format: {
//       type: Function,
//       default: val => val
//     },
//     max: {
//       type: Number,
//       required: true
//     },
//     min: {
//       type: Number,
//       required: true
//     },
//     scrollable: Boolean,
//     rotate: {
//       type: Number,
//       default: 0
//     },
//     size: {
//       type: [Number, String],
//       default: 270
//     },
//     step: {
//       type: Number,
//       default: 1
//     },
//     value: Number
//   },

//   computed: {
//     count () {
//       return this.max - this.min + 1;
//     },
//     innerRadius () {
//       return this.radius - Math.max(this.radius * 0.4, 48);
//     },
//     outerRadius () {
//       return this.radius - 4;
//     },
//     roundCount () {
//       return this.double ? (this.count / 2) : this.count;
//     },
//     degreesPerUnit () {
//       return 360 / this.roundCount;
//     },
//     degrees () {
//       return this.degreesPerUnit * Math.PI / 180;
//     },
//     radius () {
//       return this.size / 2;
//     },
//     displayedValue () {
//       return this.inputValue === null ? this.min : this.inputValue;
//     }
//   },

//   watch: {
//     value (value) {
//       this.inputValue = value;
//     }
//   },

//   methods: {
//     wheel (e) {
//       e.preventDefault();
//       const value = this.displayedValue + Math.sign(e.wheelDelta || 1);
//       this.update(((value - this.min + this.count) % this.count) + this.min);
//     },
//     handScale (value) {
//       return this.double && (value - this.min >= this.roundCount) ? (this.innerRadius / this.radius) : (this.outerRadius / this.radius);
//     },
//     isAllowed (value) {
//       return !this.allowedValues || this.allowedValues(value);
//     },
//     genValues () {
//       const children = [];

//       for (let value = this.min; value <= this.max; value += this.step) {
//         const classes = {
//           active: value === this.displayedValue,
//           disabled: !this.isAllowed(value)
//         };

//         children.push(this.$createElement('span', {
//           'class': this.addBackgroundColorClassChecks(classes, value === this.inputValue ? this.computedColor : null),
//           style: this.getTransform(value),
//           domProps: { innerHTML: `<span>${this.format(value)}</span>` }
//         }));
//       }

//       return children;
//     },
//     genHand () {
//       const scale = `scaleY(${this.handScale(this.displayedValue)})`;
//       const angle = this.rotate + (this.degreesPerUnit * (this.displayedValue - this.min));

//       return this.$createElement('div', {
//         staticClass: 'time-picker-clock__hand',
//         'class': this.value === null ? {} : this.addBackgroundColorClassChecks(),
//         style: {
//           transform: `rotate(${angle}deg) ${scale}`
//         }
//       });
//     },
//     getTransform (i) {
//       const { x, y } = this.getPosition(i);
//       return { transform: `translate(${x}px, ${y}px)` };
//     },
//     getPosition (value) {
//       const radius = (this.radius - 24) * this.handScale(value);
//       const rotateRadians = this.rotate * Math.PI / 180;
//       return {
//         x: Math.round(Math.sin(((value - this.min) * this.degrees) + rotateRadians) * radius),
//         y: Math.round(-Math.cos(((value - this.min) * this.degrees) + rotateRadians) * radius)
//       };
//     },
//     onMouseDown (e) {
//       e.preventDefault();
//       this.isDragging = true;
//       this.onDragMove(e);
//     },
//     onMouseUp () {
//       this.isDragging = false;
//       this.isAllowed(this.inputValue) && this.$emit('change', this.inputValue);
//     },
//     onDragMove (e) {
//       e.preventDefault();
//       if (!this.isDragging && e.type !== 'click') return;

//       const { width, top, left } = this.$refs.clock.getBoundingClientRect();
//       const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
//       const center = { x: width / 2, y: -width / 2 };
//       const coords = { x: clientX - left, y: top - clientY };
//       const handAngle = Math.round(this.angle(center, coords) - this.rotate + 360) % 360;
//       const insideClick = this.double && this.euclidean(center, coords) < ((this.outerRadius + this.innerRadius) / 2) - 16;
//       const value = Math.round(handAngle / this.degreesPerUnit) +
//         this.min + (insideClick ? this.roundCount : 0);

//       // Necessary to fix edge case when selecting left part of max value
//       if (handAngle >= (360 - (this.degreesPerUnit / 2))) {
//         this.update(insideClick ? this.max : this.min);
//       } else {
//         this.update(value);
//       }
//     },
//     update (value) {
//       if (this.inputValue !== value && this.isAllowed(value)) {
//         this.inputValue = value;
//         this.$emit('input', value);
//       }
//     },
//     euclidean (p0, p1) {
//       const dx = p1.x - p0.x;
//       const dy = p1.y - p0.y;

//       return Math.sqrt((dx * dx) + (dy * dy));
//     },
//     angle (center, p1) {
//       const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
//       return Math.abs(value * 180 / Math.PI);
//     }
//   },

//   render () {
//     const data = {
//       staticClass: 'time-picker-clock',
//       class: {
//         'time-picker-clock--indeterminate': this.value === null
//       },
//       on: {
//         mousedown: this.onMouseDown,
//         mouseup: this.onMouseUp,
//         mouseleave: () => (this.isDragging && this.onMouseUp()),
//         touchstart: this.onMouseDown,
//         touchend: this.onMouseUp,
//         mousemove: this.onDragMove,
//         touchmove: this.onDragMove
//       },
//       style: {
//         height: `${this.size}px`,
//         width: `${this.size}px`
//       },
//       ref: 'clock'
//     };

//     this.scrollable && (data.on.wheel = this.wheel);

//     return this.$createElement('div', data, [
//       this.genHand(),
//       this.genValues()
//     ]);
//   }
// };

import React, { Component } from 'react';
import classNames from 'classnames';

class TimePickerClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 12,
      max: 12,
      min: 1,
      scrollable: true,
      rotate: 30, 
      size: 270,
      step: 1,
      value: 12,
      count: 0,
      radius: 360,
      innerRadius: 0,
      outerRadius: 0,
      degreesPerUnit: 1,
      degrees: 360,
      displayedValue: 12,
      inputValue: null
    };

    this.clockRef = React.createRef();
  }

  componentDidMount() {
    const radius = this.state.size / 2;
    const count = this.state.max - this.state.min + 1;
    const roundCount = this.state.double ? (count / 2) : count;
    const degreesPerUnit = 360 / roundCount;

    this.setState({ 
      count,
      radius,
      innerRadius: radius - 4,
      outerRadius: radius - Math.max(radius * 0.4, 48),
      degreesPerUnit,
      degrees: degreesPerUnit * Math.PI / 180,
      displayedValue: this.state.inputValue === null ? this.state.min : this.state.inputValue
    });
  }

  wheel = (e) => {
    e.preventDefault();
    const value = this.state.displayedValue + Math.sign(e.wheelDelta || 1);
    this.update(((value - this.state.min + this.state.count) % this.state.count) + this.state.min);
  };

  handScale = (value) => {
    return this.state.double && (value - this.state.min >= this.state.roundCount) ? (this.state.innerRadius / this.state.radius) : (this.state.outerRadius / this.state.radius);
  };

  isAllowed = (value) => {
    return !this.state.allowedValues || this.state.allowedValues(value);
  };

  genValues = () => {
    const children = [];

    for (let value = this.state.min; value <= this.state.max; value += this.state.step) {
      const classes = classNames(
        value === this.state.displayedValue && 'active',
        !this.isAllowed(value) && 'disabled'
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

  genHand = () => {
    const scale = `scaleY(${this.handScale(this.state.displayedValue)})`;
    const angle = this.state.rotate + (this.state.degreesPerUnit * (this.state.displayedValue - this.state.min));

    return React.createElement('div', {
      className: classNames('time-picker-clock__hand'),
      style: {
        transform: `rotate(${angle}deg) ${scale}`
      }
    });
  };

  getTransform = (i) => {
    const { x, y } = this.getPosition(i);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  getPosition = (value) => {
    const radius = (this.state.radius - 24) * this.handScale(value);
    const rotateRadians = this.state.rotate * Math.PI / 180;
    const toret = {
      x: Math.round(Math.sin(((value - this.state.min) * this.state.degrees) + rotateRadians) * radius),
      y: Math.round(-Math.cos(((value - this.state.min) * this.state.degrees) + rotateRadians) * radius)
    };

    console.log(toret);
    return toret;
  };

  onMouseDown = (e) => {
    e.preventDefault();
    this.setState({ isDragging: true });
    this.onDragMove(e);
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
    const handAngle = Math.round(this.angle(center, coords) - this.state.rotate + 360) % 360;
    const insideClick = this.state.double && this.euclidean(center, coords) < ((this.state.outerRadius + this.state.innerRadius) / 2) - 16;
    const value = Math.round(handAngle / this.state.degreesPerUnit) +
      this.state.min + (insideClick ? this.state.roundCount : 0);

    // Necessary to fix edge case when selecting left part of max value
    if (handAngle >= (360 - (this.state.degreesPerUnit / 2))) {
      this.update(insideClick ? this.state.max : this.state.min);
    } else {
      this.update(value);
    }
  };

  update = (value) => {
    if (this.state.inputValue !== value && this.isAllowed(value)) {
      this.setState({ inputValue: value });
    }
  };

  euclidean = (p0, p1) => {
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;

    return Math.sqrt((dx * dx) + (dy * dy));
  };

  angle = (center, p1) => {
    const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
    return Math.abs(value * 180 / Math.PI);
  };

  render() {
    const classes = classNames(
      "time-picker-clock",
      this.state.value === null && 'time-picker-clock--indeterminate'
    );
    
    return (
      <div
        className={classes}
        style={{ height: `${this.state.size}px`, width: `${this.state.size}px` }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={() => (this.isDragging && this.onMouseUp())}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseUp}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        ref={this.clockRef}
      >
       {
         this.genHand()
       } 
       {
         this.genValues()
       }
      </div>
    );
  }
}

export default TimePickerClock;
