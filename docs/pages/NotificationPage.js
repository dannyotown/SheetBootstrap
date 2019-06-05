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
          role="alert"

          labelColor="#59698d"
          title="Bootstrap"
          titleColor="elegant-color-dark"
          titleTextColor='white'
          closeClassName="blue-grey-text"

          body="Hello, world! This is a toast message."
          bodyColor="stylish-color-dark"
          bodyTextColor="white"

          time="11 mins ago"
          autohide={0} // by default = ∞ ms

        />
        <h2 className="mt-5">Default</h2>
        <MDBNotification
          show
          fade
          role="alert"
          labelColor="red"
          title="Bootstrap"
          body="Hello, world! This is a toast message."
          time="11 mins ago"
          //autohide={3000} // by default = ∞ ms
        />
        <h2 className="mt-5">Translucent</h2>
        <MDBContainer className="grey darken-3 p-3">
          <MDBNotification
            show
            fade
            role="alert"
            labelColor="#007aff"
            title="Bootstrap"
            body="Hello, world! This is a toast message."
            time="11 mins ago"
          />
        </MDBContainer>
        <h2 className="mt-5">Translucent</h2>
        <MDBNotification
          show
          fade
          role="alert"
          labelColor="#007aff"
          title="Bootstrap"
          body="Hello, world! This is a toast message."
          time="11 mins ago"
        />
        <MDBNotification
          show
          fade
          role="alert"
          labelColor="#007aff"
          title="Bootstrap"
          body="Hello, world! This is a toast message."
          time="11 mins ago"
        />
        <h2 className="mt-5">Placement</h2>
        <MDBContainer className="grey darken-3 p-3 mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <MDBNotification
              show
              fade
              role="alert"
              labelColor="#007aff"
              title="Bootstrap"
              body="Hello, world! This is a toast message."
              time="11 mins ago"
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
                role="alert"
                labelColor="#007aff"
                title="Bootstrap"
                body="Hello, world! This is a toast message."
                time="11 mins ago"
              />
              <MDBNotification
                show
                fade
                role="alert"
                labelColor="#007aff"
                title="Bootstrap"
                body="Hello, world! This is a toast message."
                time="11 mins ago"
              />
            </div>
          </div>
        </MDBContainer>
        <h2 className="mt-5" id="Accessibility">
          Accessibility
        </h2>
        <p>
          Toasts are intended to be small interruptions to your visitors or
          users, so to help those with screen readers and similar assistive
          technologies, you should wrap your toasts in an aria-live region.
          Changes to live regions (such as injecting/updating a toast component)
          are automatically announced by screen readers without needing to move
          the user’s focus or otherwise interrupt the user. Additionally,
          include aria-atomic="true" to ensure that the entire toast is always
          announced as a single (atomic) unit, rather than announcing what was
          changed (which could lead to problems if you only update part of the
          toast’s content, or if displaying the same toast content at a later
          point in time). If the information needed is important for the
          process, e.g. for a list of errors in a form, then use the alert
          component instead of toast. Note that the live region needs to be
          present in the markup before the toast is generated or updated. If you
          dynamically generate both at the same time and inject them into the
          page, they will generally not be announced by assistive technologies.
          You also need to adapt the role and aria-live level depending on the
          content. If it’s an important message like an error, use role="alert"
          aria-live="assertive", otherwise use role="status" aria-live="polite"
          attributes. As the content you’re displaying changes, be sure to
          update the delay timeout to ensure people have enough time to read the
          toast.
        </p>
        <MDBNotification
          show
          fade
          role="alert"
          labelColor="#007aff"
          title="Bootstrap"
          body="Hello, world! This is a toast message."
          time="11 mins ago"
          autohide={7500}
          aria-live="assertive"
          aria-atomic="true"
        />
        <p className="mb-5">
          Notification with autohide! Refresh and wait 7.5 sec
        </p>
      </MDBContainer>
    );
  }
}

export default NotificationPage;
