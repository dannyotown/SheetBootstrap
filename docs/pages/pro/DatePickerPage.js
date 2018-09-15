import React from 'react';
import { MDBDatePicker, Container } from 'mdbreact';
import DocsLink from '../DocsLink';

class DatePickerPage extends React.Component  {
  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <Container>
        <DocsLink title="Date Picker" href="https://mdbootstrap.com/react/advanced/datepicker/" />
        <MDBDatePicker getValue={this.getPickerValue} />
       </Container>
    );
  }
};

export default DatePickerPage;
