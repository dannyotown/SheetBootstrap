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
      thumbTransform: 0,
      thumbTop: '0px',
      input: 'input',
      oneStep: '',
      windowX: '',
      windowY: ''
    };

    inputRef = React.createRef();
  }
  updateDimensions() {
    let input = this.inputRef.current;
    let inputWidth = input.offsetWidth - 15.5;
    const oneStep = inputWidth / (this.props.max - this.props.min);
    if (
      this.state.windowX !== window.innerWidth ||
      this.state.windowY !== window.innerHeight
    ) {
      this.setState({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
        leftPosition: oneStep * this.state.value - oneStep * this.props.min + 1,
        oneStep
      });
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        value: this.props.value
      },
      () => this.updateDimensions()
    );

    window.addEventListener('resize', this.updateDimensions.bind(this));
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  rangeChange = e => {
    const value = e.target.value;
    const { getValue, min } = this.props;
    const { oneStep } = this.state;

    this.setState({
      value: newValue,
      leftPosition:
        this.state.oneStep * newValue - this.state.oneStep * this.props.min + 1
    });
    getValue && this.props.getValue(value);
  };

  rangeFocus = () => {
    this.setState({
      thumbActive: true,
      thumbTop: '-27px',
      thumbTransform: 1
    });
  };

  rangeMouseLeave = () => {
    const input = this.inputRef.current;
    input.blur();
    this.setState({
      thumbActive: false,

      thumbTop: '7px',
      thumbTransform: 0
    });
  };

  render() {
    const {
      thumbActive,
      value,
      leftPosition,
      thumbHeight,
      thumbWidth,
      thumbTop,
      thumbMarginLeft
    } = this.state;
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
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  value: PropTypes.number
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
