import React from 'react';
import { Container, Autocomplete } from 'mdbreact';

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

const AutocompletePage = () => {

  return (
    <Container
      style={{marginTop: 200, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 200, paddingRight: 200}}
    >
      <Autocomplete
        possibleSuggestions = {states}
        label="Choose your favorite state"
        icon="heart"
        close
        closeClass="grey-text"
      />
    </Container>
  );
}


export default AutocompletePage;
