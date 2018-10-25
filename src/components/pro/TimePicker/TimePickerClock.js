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

class TimePickerClock extends Component {

  count = () => this.max - this.min + 1;

  innerRadius = () => this.radius - Math.max(this.radius * 0.4, 48);

  outerRadius = () => this.radius - 4;

  roundCount = () => this.double ? (this.count / 2) : this.count;

  degreesPerUnit = () => 360 / this.roundCount;

  degrees = () => this.degreesPerUnit * Math.PI / 180;

  radius = () => this.size / 2;

  displayedValue = () => this.inputValue === null ? this.min : this.inputValue;

  wheel = (e) => {
    e.preventDefault();
    const value = this.displayedValue + Math.sign(e.wheelDelta || 1);
    this.update(((value - this.min + this.count) % this.count) + this.min);
  };

  handScale = (value) => {
    return this.double && (value - this.min >= this.roundCount) ? (this.innerRadius / this.radius) : (this.outerRadius / this.radius);
  };

  isAllowed = (value) => {
    return !this.allowedValues || this.allowedValues(value);
  };

  genValues = () => {
    const children = [];

    for (let value = this.min; value <= this.max; value += this.step) {
      const classes = {
        active: value === this.displayedValue,
        disabled: !this.isAllowed(value)
      };

      children.push(this.$createElement('span', {
        'class': this.addBackgroundColorClassChecks(classes, value === this.inputValue ? this.computedColor : null),
        style: this.getTransform(value),
        domProps: { innerHTML: `<span>${this.format(value)}</span>` }
      }));
    }

    return children;
  };

  genHand = () => {
    const scale = `scaleY(${this.handScale(this.displayedValue)})`;
    const angle = this.rotate + (this.degreesPerUnit * (this.displayedValue - this.min));

    return this.$createElement('div', {
      staticClass: 'time-picker-clock__hand',
      'class': this.value === null ? {} : this.addBackgroundColorClassChecks(),
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
    const radius = (this.radius - 24) * this.handScale(value);
    const rotateRadians = this.rotate * Math.PI / 180;
    return {
      x: Math.round(Math.sin(((value - this.min) * this.degrees) + rotateRadians) * radius),
      y: Math.round(-Math.cos(((value - this.min) * this.degrees) + rotateRadians) * radius)
    };
  };

  onMouseDown = (e) => {
    e.preventDefault();
    this.isDragging = true;
    this.onDragMove(e);
  };

  onMouseUp = () => {
    this.isDragging = false;
    this.isAllowed(this.inputValue) && this.$emit('change', this.inputValue);
  };

  onDragMove = (e) => {
    e.preventDefault();
    if (!this.isDragging && e.type !== 'click') return;

    const { width, top, left } = this.$refs.clock.getBoundingClientRect();
    const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
    const center = { x: width / 2, y: -width / 2 };
    const coords = { x: clientX - left, y: top - clientY };
    const handAngle = Math.round(this.angle(center, coords) - this.rotate + 360) % 360;
    const insideClick = this.double && this.euclidean(center, coords) < ((this.outerRadius + this.innerRadius) / 2) - 16;
    const value = Math.round(handAngle / this.degreesPerUnit) +
      this.min + (insideClick ? this.roundCount : 0);

    // Necessary to fix edge case when selecting left part of max value
    if (handAngle >= (360 - (this.degreesPerUnit / 2))) {
      this.update(insideClick ? this.max : this.min);
    } else {
      this.update(value);
    }
  };

  update = (value) => {
    if (this.inputValue !== value && this.isAllowed(value)) {
      this.inputValue = value;
      this.$emit('input', value);
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
    return (
      <div>
        
      </div>
    );
  }
}

export default TimePickerClock;
