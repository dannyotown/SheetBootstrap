import React from 'react';
import { MDBTimePicker, Container } from 'mdbreact';

class TimePickerPage extends React.Component  {
  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <Container className="mt-5">
        <MDBTimePicker clearable getValue={this.getPickerValue} />
      </Container>
    );
  }
};

export default TimePickerPage;
