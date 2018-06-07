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
// 1) dokończyć stylowanie;// [v] sprawdzić metody szukania (by szukał zawartości, nie tylko pierwszego znaku)
// 3) clear Button: https://github.com/moroshko/react-autosuggest/issues/442
// http://seek-oss.github.io/seek-style-guide/autosuggest/

//przez to, że to wrapper jedynie, nie mam dostępu do inputa (atrybut type, label mdbInput, clear button etc)

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)

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
  };

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
    handleInputFocus(ev) {
    // ignore if event is a window blur
    if (document.activeElement === this.inputElRef) {
      this.setState({ isTouched: true });
    }
    // execute callback
    let fn = this.props.onBlur;
    fn && fn(ev);
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange,
    };
    const {
      className,
      placeholder,
      possibleSuggestions,
      ...attributes
    } = this.props;




class InputComponent extends React.Component {
  render() {

    return <div><input {...this.props.inputProps} /></div>;
  }
}

    // TODO: użyć MDB <Input>
    const renderInputComponent = inputProps => (
      <input
        {...inputProps}
        id={this.props.id}
        // ref={el => { this.inputElRef = el; }}
        value = {this.state.value}
        placeholder={this.props.placeholder} label={this.props.label} value={this.state.value}>

       </input>
    );


    return (
      <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestions={this.getSuggestions}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onChange={this.onChange}
                theme={theme}
                renderInputComponent={renderInputComponent}
                {...attributes}
      />

    );
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string
};

Autocomplete.defaultProps = {
  // getSuggestions: getSuggestions,
  id: 'autocomplete-1'
};

export default Autocomplete;
