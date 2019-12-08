import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputRange.css';

class InputRange extends React.Component {
  state = {
    value: false,
    leftPosition: false,
    thumbActive: false,
    thumbHeight: 0,
    thumbWidth: 0,
    thumbTop: '10px',
    thumbMarginLeft: '-6px',
    input: 'input',
    oneStep: ''
  };

  inputRef = React.createRef();

  componentDidMount = () => {
    const input = this.inputRef.current;
    const inputWidth = input.offsetWidth;
    const { max, min, value } = this.props;
    const oneStep = inputWidth / (max - min);
    this.setState({
      value,
      leftPosition: oneStep * value - oneStep * min,
      oneStep
    });
  };

  rangeChange = e => {
    const value = e.target.value;
    const { getValue, min } = this.props;
    const { oneStep } = this.state;

    this.setState({
      value,
      leftPosition: oneStep * value - oneStep * min
    });
    getValue && this.props.getValue(value);
  };

  rangeFocus = () => {
    this.setState({
      thumbActive: true,
      thumbHeight: '30px',
      thumbWidth: '30px',
      thumbTop: '-20px',
      thumbMarginLeft: '-15px'
    });
  };

  rangeMouseLeave = () => {
    const input = this.inputRef.current;
    input.blur();
    this.setState({
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px'
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
    const thumbClass = classNames('thumb', thumbActive ? 'active' : false);

    return (
      <Tag className={formClass} data-test='input-range'>
        <input
          ref={this.inputRef}
          className={inputClass}
          min={min}
          max={max}
          step={step}
          value={value}
          type='range'
          onChange={this.rangeChange}
          onFocus={this.rangeFocus}
          onMouseLeave={this.rangeMouseLeave}
        />
        <span
          className={thumbClass}
          style={{
            left: leftPosition,
            height: thumbHeight,
            width: thumbWidth,
            top: thumbTop,
            marginLeft: thumbMarginLeft
          }}
        >
          <span className='value'>{value}</span>
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
