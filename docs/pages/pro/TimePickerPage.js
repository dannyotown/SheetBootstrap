import React from "react";
import { MDBTimePicker, Container, Row, Col } from "mdbreact";
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
        <Row>
          <Col md="3">
            <MDBTimePicker id="timePicker" label="Pick the time!" closeOnCancel cancelable clearable hours={12} minutes={30} hoursFormat={24} getValue={this.getPickerValue} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TimePickerPage;
