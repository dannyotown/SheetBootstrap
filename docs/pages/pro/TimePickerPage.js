import React from "react";
import { MDBTimePicker, Container } from "mdbreact";
import DocsLink from "../DocsLink";

class TimePickerPage extends React.Component {
  getPickerValue = value => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Time Picker"
          href="https://mdbootstrap.com/docs/react/forms/time-picker/"
        />
        <MDBTimePicker clearable getValue={this.getPickerValue} />
      </Container>
    );
  }
}

export default TimePickerPage;
