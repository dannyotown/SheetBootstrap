import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputRange.css';

class InputRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTransform: 0,
      thumbTop: '27px',
      thumbMarginLeft: '0px',
      input: 'input',
      oneStep: '',
      windowX: '',
      windowY: ''
    };

    this.inputRef = React.createRef();
  }

  updateDimensions() {
    let input = this.inputRef.current;
    let inputWidth = input.offsetWidth - 15;
    const oneStep = inputWidth / (this.props.max - this.props.min);
    if (
      this.state.windowX !== window.innerWidth ||
      this.state.windowY !== window.innerHeight
    ) {
      this.setState({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
        leftPosition: oneStep * this.props.value - oneStep * this.props.min,
        oneStep
      });
    }
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.setState({
      value: this.props.value
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  rangeChange = e => {
    let newValue = e.target.value;
    this.setState({
      value: newValue,
      leftPosition:
        this.state.oneStep * newValue - this.state.oneStep * this.props.min
    });
    this.props.getValue && this.props.getValue(e.target.value);
  };

  rangeFocus = () => {
    this.setState({
      thumbActive: true,
      thumbHeight: '30px',
      thumbWidth: '30px',
      thumbTop: '-27px',
      // thumbMarginLeft: '0px'
      thumbTransform: 1
    });
  };

  rangeMouseLeave = () => {
    let input = this.inputRef.current;
    input.blur();
    this.setState({
      thumbActive: false,
      // thumbHeight: 0,
      // thumbWidth: 0,
      thumbTop: '7px',
      // thumbMarginLeft: '0px'
      thumbTransform: 0
    });
  };

  render() {
    const { className, formClassName, min, max, step, tag: Tag } = this.props;

    const inputClass = classNames(className);

    const formClass = classNames('range-field', formClassName);

    const thumbClass = classNames(
      'thumb',
      this.state.thumbActive ? 'active' : false
    );

    return (
      <Tag className={formClass} data-test='input-range'>
        <input
          ref={this.inputRef}
          className={inputClass}
          min={min}
          max={max}
          step={step}
          value={this.state.value}
          type='range'
          onChange={this.rangeChange}
          onFocus={this.rangeFocus}
          onMouseUp={this.rangeMouseLeave}
        />
        <span
          className={thumbClass}
          style={{
            left: this.state.leftPosition,
            height: this.state.thumbHeight,
            width: this.state.thumbWidth,
            top: this.state.thumbTop,
            // marginLeft: this.state.thumbMarginLeft,
            overflow: 'hidden',
            transform: `rotate(-45deg) scale(${this.state.thumbTransform})`
          }}
        >
          <span className='value'>{this.state.value}</span>
        </span>
      </Tag>
    );
  }
}

InputRange.propTypes = {
  className: PropTypes.string,
  formClassName: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  step: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false,
  tag: 'div'
};

export default InputRange;
export { InputRange as MDBRangeInput };
