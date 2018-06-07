import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
// import './Autocomplete.css';
import {Input} from 'mdbreact'
// import { Button } from '../../index';

const theme = {
  container:                'md-form',
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

// const getSuggestions = value => {
//   const inputValue = value.toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : states.filter(lang =>
//     lang.toLowerCase().includes(inputValue)
//   );
// };

const onChange = (event, { newValue }) => {
  this.setState({
    value: newValue
  });
};
// TODO:
// 1) dokończyć stylowanie;
// [v] sprawdzić metody szukania (by szukał zawartości, nie tylko pierwszego znaku)
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

  }
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: this.props.getSuggestions(value)
  //   });
  // };

  render() {

    const {
      className,
      placeholder,
      ...attributes
    } = this.props;

    const classes = classNames(
      className
    );

    //TODO: użyć MDB <Input>
    const renderInputComponent = inputProps => (
      <input {...inputProps}/>
    );

    return (
      <Autosuggest
      {...attributes}
      theme={theme}
      renderInputComponent={renderInputComponent}
      // onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}

      className={classes} />
    );
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
};

Autocomplete.defaultProps = {
  // getSuggestions: getSuggestions,
};

export default Autocomplete;
