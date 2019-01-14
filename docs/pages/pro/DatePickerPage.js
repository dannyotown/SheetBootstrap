import React, { Component } from "react";
import { MDBDatePicker, MDBContainer } from "mdbreact";
import DocsLink from "./../../components/docsLink";

class DatePickerPage extends Component {

  getPickerValue = value => {
    console.log(value);
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Date Picker"
          href="https://mdbootstrap.com/docs/react/forms/date-picker/"
        />
        <MDBDatePicker clearable value={null} emptyLabel="Select Date" getValue={this.getPickerValue} />
        <MDBDatePicker clearable value={null} emptyLabel="Select Date"
          getValue={this.getPickerValue}
          theme={{
            palette: {
              primary: {
                main: '#ffbb33',
              },
              secondary: {
                main: '#FF8800',
                contrastText: '#ffcc00',
              },
            }
          }}
        />
        <MDBDatePicker getValue={this.getPickerValue} />
      </MDBContainer>
    );
  }
}

export default DatePickerPage;
