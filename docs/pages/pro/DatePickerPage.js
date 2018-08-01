import React from 'react';
import { MDBDatePicker, Container } from 'mdbreact';

class DatePickerPage extends React.Component  {
  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <Container className="mt-5">
        <MDBDatePicker getValue={this.getPickerValue} value={new Date(2018,4,12)} />
      </Container>
    );
  }
};

export default DatePickerPage;
