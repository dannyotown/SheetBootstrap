import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBInput, MDBIcon } from 'mdbreact';
import classNames from 'classnames';
import './Autocomplete.css';

class Autocomplete extends Component {
  state = {
    focused: false,
    initialValue: ''
  };

  inputOnChangeHandler = e => {
    let initialValue = e.target.value;

    this.setState({ initialValue });
  };
  test = e => {
    return <li>{this.props.dataOption(e)}</li>;
  };

  render() {
    const {
      clear,
      clearClass,
      data,
      everyTimeShowContent,
      dataOption = x => x,
      heightItem,
      labelClass,
      labelStyles,
      noSuggestion,
      placeholder,
      visibleOptions,
      whichData,
      ...attributes
    } = this.props;

    const { focused, initialValue } = this.state;

    const labelClasses = classNames(labelClass, 'text-ellipsis-label');
    const inputClasses = classNames(placeholder, 'text-ellipsis-input');
    const btnClearClasses = classNames(
      clearClass,
      focused && 'autocomplete-btn-svg',
      'mdb-autocomplete-clear visible'
    );
    console.log(dataOption());
    return (
      <>
        <MDBInput
          className={inputClasses}
          hint={placeholder}
          inputRef={ref => (this.autoInputRef = ref)}
          labelClass={labelClasses}
          labelStyles={{ width: '200px', ...labelStyles }}
          onBlur={() => this.toggleFocusToClearBtn(false)}
          onChange={this.inputOnChangeHandler}
          onClick={() => this.setSuggestions(initialValue)}
          onContextMenu={e => e.preventDefault()}
          onFocus={() => this.toggleFocusToClearBtn(true)}
          onKeyDown={this.keyDownHandler}
          value={initialValue}
          {...attributes}
        >
          {clear && (
            <button onClick={this.handleClear} className={btnClearClasses}>
              <MDBIcon icon='times' style={{ color: focused && '#4285F4' }} />
            </button>
          )}
        </MDBInput>
        <ul></ul>
      </>
    );
  }
}

Autocomplete.propTypes = {};

Autocomplete.defaultProps = {};

export default Autocomplete;
export { Autocomplete as MDBAutocomplete };
export { Autocomplete as MDBAuto };
