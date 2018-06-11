import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
// import './Autocomplete.css';
import {TextField, Input, Fa } from 'mdbreact'
// import { Button } from '../../index';

const theme = {
  container:                'md-form mb-0',
  containerOpen:            'react-autosuggest__container--open',
  input:                    'mdb-autocomplete form-control',
  inputOpen:                'react-autosuggest__input--open',
  inputFocused:             'react-autosuggest__input--focused',
  suggestionsContainer:     'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList:          'mdb-autocomplete-wrap',
  suggestion:               'react-autosuggest__suggestion',
  suggestionFirst:          'react-autosuggest__suggestion--first',
  suggestionHighlighted:    'react-autosuggest__suggestion--highlighted',
  sectionContainer:         'react-autosuggest__section-container',
  sectionContainerFirst:    'react-autosuggest__section-container--first',
  sectionTitle:             'react-autosuggest__section-title'
}


// TODO:
// 1) Sprawa kliknięcia w label, czyli ref dla inputa i focus()
// 2) po wybraniu opcji - onBlur
// 2) Posprzątać
// 3) docsy


class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      isTouched: false,
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.blurCallback = this.blurCallback.bind(this);
    this.triggerFocus = this.triggerFocus.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }


  renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );
  getSuggestionValue = suggestion => suggestion;

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.blurCallback();
    // const input = document.getElementById(this.props.id);
    // input.blur();
  };

  onClick (ev) {
    this.setState({ isTouched: true });
  }

  blurCallback (ev) {
    // let currentValue = this.state.value;
    this.setState({ isTouched: false });
    const input = document.getElementById(this.props.id);

    // console.log(input);
    // ev.target.blur();
// console.log(ev.target);

  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSuggestionSelected = () => {
    this.blurCallback();
  }

  handleClear() {
    this.setState({
      value: ''
    })
  }
  getSuggestions = (value) => {
    const inputValue = value.toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.possibleSuggestions.filter(lang =>
      lang.toLowerCase().includes(inputValue)
    );
  }
  setInputRef(el) {
     this.inputElRef = el;
  }
  triggerFocus() {
    // document.getElementById("haha").focus()
    // hack to enable IE10 pointer-events shim
    // console.log(this.inputElRef)
    // console.log(this.inputElRef);
    //  this.ref.inputRef.focus();
    //  const label = document.getElementById("label");
     //  console.log(label);
     //  console.log(input);
     const input = document.getElementById(this.props.id);
     input.focus();

  }

  render() {

    const { value, suggestions } = this.state;

    const {
      className,
      placeholder,
      possibleSuggestions,
      disabled,
      label,
      labelClass,
      icon,
      iconSize,
      iconClass,
      close,
      closeClass,
      id,
      ...attributes
    } = this.props;

    if (disabled) {
      attributes.disabled = true;
    }

    // needed for rendering custom input
    const inputProps = {
      placeholder: placeholder,
      value,
      onChange: this.onChange,
      onBlur: this.blurCallback,
      onClick: this.onClick,
      onFocus: this.onFocus,
      id: this.props.id
    };


    // the main variable for classFixes
    let isNotEmpty = Boolean(this.state.value) || placeholder || this.state.isTouched;

    // classFixes:
    const labelClassFix = classNames(
      isNotEmpty && 'active',
      disabled && 'disabled',
      labelClass
    );
    const iconClassFix = classNames(
      'prefix',
      this.state.isTouched && 'active',
      iconClass,
    );
    const closeClassFix = classNames(
      closeClass
    )

    const isCloseVisible = () => {
      let hiddenOrNot = "hidden"
      if (this.state.value) {
        hiddenOrNot = "visible";
      }
      return hiddenOrNot;
    }

    // A close icon style fix:
    const closeStyleFix = {
      position: "absolute",
      zIndex: 2,
      top: ".85rem",
      right: 0,
      border: "none",
      background: "0 0",
      visibility: isCloseVisible(),
    }


    // const storeInputReference = (autosuggest) => {
    //   if (autosuggest != null) {
    //     this.input = autosuggest.input;
    //   }
    // }

    const renderInputComponent = inputProps => (

      <div className="md-form">
        {icon && <Fa icon={icon} size={iconSize} className={iconClassFix}/>}
        <input type="text" id="form1" className="form-control"
          {...inputProps}
          {...attributes}
          // id ="haha"
           value = {value}
            //  ref={el => { this.inputElRef = el; }}
            // ref={this.storeInputReference}
            // ref = {this.InputRef}
            // ref={(input) => {
            //   if (inputProps.ref) {
            //     inputProps.ref(input);
            //   }
            //   this.setInputRef(input);
            // }}

          // innerRef={inputProps.ref} ref={null}
            onClick={this.onClick}
            // onBlur={this.onBlur}
            onFocus={(ev, val) => {
            this.onClick();
            inputProps.onFocus(ev, val);}}
          />
        <label htmlFor="form1" id="label"
          onClick={this.triggerFocus}
          className={labelClassFix}
        >{label}</label>
        { close && <Fa
                      icon="close"
                      onClick={(ev, val) => {
                        this.handleClear();
                        }}
                      style={closeStyleFix}
                      className={closeClassFix}
                    />}
      </div>
    );

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestions={this.getSuggestions}
        getSuggestionValue={this.getSuggestionValue}
        onSuggestionSelected={this.blurCallback}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onChange={this.onChange}
        // onBlur={this.onBlur}
        theme={theme}
        renderInputComponent={renderInputComponent}
        // inputAttributes={{ id: 'theInputID', autoFocus: true }}
        // ref={autosuggest => autosuggest.input.select()}
        {...attributes}
      />

    );
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  // icon: PropTypes.string
};

Autocomplete.defaultProps = {
  // getSuggestions: getSuggestions,
  id: 'autocomplete-1'
};

export default Autocomplete;
