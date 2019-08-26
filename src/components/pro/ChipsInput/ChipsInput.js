import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Chip from '../Chip';

class ChipsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipsList: this.props.chips,
      inputValue: '',
      isTouched: false,
      isReadyToDelete: false
    };
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.setState({
      isTouched: true
    });
    this.inputRef.current.focus();
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
      isReadyToDelete: false
    });
  };

  handleEnter = e => {
    // 1) get the value:
    const newChipString = this.inputRef.current.value;

    // 2) upon pressing Enter:
    if (e.which === 13) {
      // 3) if the string is empty or consists only of spaces: return
      if (/^ *$/.test(newChipString)) {
        return;
      }

      // 3.5) of the string is already in the array, delete input value and return
      if (this.state.chipsList.includes(newChipString)) {
        this.setState({
          inputValue: ''
        });
        return;
      }

      // 4) else: add the input value to the array and reset it on input:
      this.setState({
        inputValue: '',
        chipsList: [...this.state.chipsList, newChipString]
      });
    }

    // 5) in case the keyboard events caused the input to be empty, prepare to delete chips:
    if (this.state.inputValue === '') {
      this.setState({
        isReadyToDelete: true
      });
    }
  };

  handleBackspace = e => {
    //if the input is already empty (is ready to delete chips) and Backspace is pressed:
    if (this.state.isReadyToDelete && e.which === 8) {
      const { chipsList } = this.state;

      chipsList.pop();

      this.setState({
        chipsList
      });
    }
  };

  handleClose = param => {
    const { chipsList } = this.state;
    const { handleClose } = this.props;

    const index = this.state.chipsList.indexOf(param);
    const itemToDelete = chipsList[index];

    chipsList.splice(index, 1);

    this.setState(
      {
        chipsList
      },
      () => {
        handleClose && handleClose(itemToDelete);
      }
    );
  };

  handleOutsideClick = () => {
    this.setState({
      isTouched: false
    });
  };

  render() {
    const {
      className,
      tag: Tag,
      handleClose,
      placeholder,
      secondaryPlaceholder,
      chipSize,
      chipColor,
      chipText,
      chipGradient,
      chipWaves,
      ...attributes
    } = this.props;

    const renderedChips = this.state.chipsList.map(chip => {
      return (
        <Chip
          close
          handleClose={() => this.handleClose(chip)}
          key={chip.toString()}
          size={chipSize}
          bgColor={chipColor}
          text={chipText}
          gradient={chipGradient}
          waves={chipWaves}
        >
          {chip}
        </Chip>
      );
    });

    let calculatePlaceholder;
    if (this.state.chipsList.length < 1) {
      calculatePlaceholder = placeholder;
    } else {
      calculatePlaceholder = secondaryPlaceholder;
    }

    const classes = classNames(
      'chips',
      this.state.isTouched && 'focus',
      className
    );

    return (
      <Tag
        {...attributes}
        className={classes}
        onClick={this.handleClick}
        onKeyUp={this.handleBackspace}
      >
        {renderedChips}
        <input
          className='input'
          type='text'
          placeholder={calculatePlaceholder}
          ref={this.inputRef}
          onKeyUp={this.handleEnter}
          value={this.state.inputValue}
          onChange={this.handleChange}
          onBlur={this.handleOutsideClick}
        />
      </Tag>
    );
  }
}

ChipsInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  chipSize: PropTypes.string,
  chipColor: PropTypes.string,
  chipText: PropTypes.string,
  chipGradient: PropTypes.string
};

ChipsInput.defaultProps = {
  tag: 'div',
  chips: []
};

export default ChipsInput;
export { ChipsInput as MDBChipsInput };
