import React from 'react';
import { Container, Autocomplete } from 'mdbreact';
// import Autosuggest from 'react-autosuggest';
// import Autocomplete from 'react-autocomplete';

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illnois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

// Teach Autosuggest how to calculate suggestions for any given input value.


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion;



class AutocompletePage extends React.Component {
  constructor() {
    super();

  }

  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   });
  // };
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // };

  // Autosuggest will call this function every time you need to clear suggestions.


  render() {
    // const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.


    // Finally, render it!
    return (

      <Container style={{marginTop: 200, marginLeft: 'auto', marginRight: 'auto'}}>
        <Autocomplete
        possibleSuggestions = {states}
        placeholder="sup"
        label="Choose your favorite state"
        // value = {this.state.value}
        // onChange = {this.onChange.bind(this)}
        // suggestions ={ this.state.suggestions}
          // suggestions={suggestions}
          // onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          // onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          // // getSuggestions={getSuggestions}
          // getSuggestionValue={getSuggestionValue}
          // renderSuggestion={renderSuggestion}
          // inputProps={inputProps}
        />
      </Container>
    );
  }
}

export default AutocompletePage;
