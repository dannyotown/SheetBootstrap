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
          href="https://mdbootstrap.com/react/advanced/time-picker/"
        />
        <MDBTimePicker id="timePicker" label="Pick the time!" clearable hours={0} minutes={30} hoursFormat={12} lgetValue={this.getPickerValue} />
      </Container>
    );
  }
}

export default TimePickerPage;
