import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

class NotificationPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Notifications"
          href="https://mdbootstrap.com/docs/react/addons/notification/"
        />
        <h2 className="mt-5">Full functions</h2>
        <MDBNotification
          show
          fade
          labelColor="#59698d"
          title="Bootstrap"
          titleClassName="elegant-color-dark"
          titleColor="white"
          closeClassName="blue-grey-text"
          message="Hello, world! This is a toast message."
          bodyClassName="stylish-color-dark"
          bodyColor="white"
          text="11 mins ago"
          autohide={0} // by default = ∞ ms
        />
        <h2 className="mt-5">Default</h2>
        <MDBNotification
          show
          fade
          labelColor="red"
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
        />
        <h2 className="mt-5">Translucent</h2>
        <MDBContainer className="grey darken-3 p-3">
          <MDBNotification
            show
            fade
            labelColor="#007aff"
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
          />
        </MDBContainer>
        <h2 className="mt-5">Translucent</h2>
        <MDBNotification
          show
          fade
          labelColor="#007aff"
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
        />
        <MDBNotification
          show
          fade
          labelColor="#007aff"
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
        />
        <h2 className="mt-5">Placement</h2>
        <MDBContainer className="grey darken-3 p-3 mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <MDBNotification
              show
              fade
              labelColor="#007aff"
              title="Bootstrap"
              message="Hello, world! This is a toast message."
              text="11 mins ago"
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            />
          </div>
        </MDBContainer>
        <MDBContainer className="grey darken-3 p-3  mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            >
              <MDBNotification
                show
                fade
                labelColor="#007aff"
                title="Bootstrap"
                message="Hello, world! This is a toast message."
                text="11 mins ago"
              />
              <MDBNotification
                show
                fade
                labelColor="#007aff"
                title="Bootstrap"
                message="Hello, world! This is a toast message."
                text="11 mins ago"
              />
            </div>
          </div>
        </MDBContainer>
        <h2 className="mt-5" id="Accessibility">
          Accessibility
        </h2>
        <MDBNotification
          show
          fade
          labelColor="#007aff"
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
          autohide={7500}
        />
        <p className="mb-5">
          Notification with autohide! Refresh page and wait 7.5 sec
        </p>
      </MDBContainer>
    );
  }
}

export default NotificationPage;
