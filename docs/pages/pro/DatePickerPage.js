import React from 'react';
import { MDBDatePicker, Container, Fa, Row } from 'mdbreact';

class DatePickerPage extends React.Component  {
  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Date Picker</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/datepicker/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <MDBDatePicker getValue={this.getPickerValue} />
       </Container>
    );
  }
};

export default DatePickerPage;
