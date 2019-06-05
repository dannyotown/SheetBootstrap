import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

class NotificationPage extends Component {
  hideNotification = e => {
    let target = e.target.closest(".toast");
    target.classList.remove("show");
    setTimeout(() => {
      target.classList.add("hide");
    }, 150);
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Notifications"
          href="https://mdbootstrap.com/docs/react/addons/notification/"
        />

        <h2 className="mt-5">Default</h2>
        <MDBNotification
          show
          fade
          //autohide={3000} // by default = ∞ ms
        >
          <MDBNotification header>
            <svg
              className="rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect fill="#007aff" width="100%" height="100%" />
            </svg>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button className="ml-2 mb-1 close" onClick={this.hideNotification}>
              &times;
            </button>
          </MDBNotification>
          <MDBNotification body>
            Hello, world! This is a toast message.
          </MDBNotification>
        </MDBNotification>

        <h2 className="mt-5">Translucent</h2>
        <MDBContainer className="grey darken-3 p-3">
          <MDBNotification show fade>
            <MDBNotification header>
              <svg
                className="rounded mr-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect fill="#007aff" width="100%" height="100%" />
              </svg>
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                className="ml-2 mb-1 close"
                onClick={this.hideNotification}
              >
                &times;
              </button>
            </MDBNotification>
            <MDBNotification body>
              Hello, world! This is a toast message.
            </MDBNotification>
          </MDBNotification>
        </MDBContainer>

        <h2 className="mt-5">Translucent</h2>
        <MDBNotification show fade>
          <MDBNotification header>
            <svg
              className="rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect fill="#007aff" width="100%" height="100%" />
            </svg>
            <strong className="mr-auto">Bootstrap</strong>
            <small>just now</small>
            <button className="ml-2 mb-1 close" onClick={this.hideNotification}>
              &times;
            </button>
          </MDBNotification>
          <MDBNotification body>See? Just like this.</MDBNotification>
        </MDBNotification>
        <MDBNotification show fade>
          <MDBNotification header>
            <svg
              className="rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect fill="#007aff" width="100%" height="100%" />
            </svg>
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 second ago</small>
            <button className="ml-2 mb-1 close" onClick={this.hideNotification}>
              &times;
            </button>
          </MDBNotification>
          <MDBNotification body>
            Heads up, toasts will stack automatically
          </MDBNotification>
        </MDBNotification>

        <h2 className="mt-5">Placement</h2>
        <MDBContainer className="grey darken-3 p-3 mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <MDBNotification
              show
              fade
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            >
              <MDBNotification header>
                <svg
                  className="rounded mr-2"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                >
                  <rect fill="#007aff" width="100%" height="100%" />
                </svg>
                <strong className="mr-auto">Bootstrap</strong>
                <small>2 second ago</small>
                <button
                  className="ml-2 mb-1 close"
                  onClick={this.hideNotification}
                >
                  &times;
                </button>
              </MDBNotification>
              <MDBNotification body>
                Hello, world! This is a toast message.
              </MDBNotification>
            </MDBNotification>
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
              <MDBNotification show fade>
                <MDBNotification header>
                  <svg
                    className="rounded mr-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect fill="#007aff" width="100%" height="100%" />
                  </svg>
                  <strong className="mr-auto">Bootstrap</strong>
                  <small>just now</small>
                  <button
                    className="ml-2 mb-1 close"
                    onClick={this.hideNotification}
                  >
                    &times;
                  </button>
                </MDBNotification>
                <MDBNotification body>See? Just like this.</MDBNotification>
              </MDBNotification>
              <MDBNotification show fade>
                <MDBNotification header>
                  <svg
                    className="rounded mr-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect fill="#007aff" width="100%" height="100%" />
                  </svg>
                  <strong className="mr-auto">Bootstrap</strong>
                  <small>2 second ago</small>
                  <button
                    className="ml-2 mb-1 close"
                    onClick={this.hideNotification}
                  >
                    &times;
                  </button>
                </MDBNotification>
                <MDBNotification body>
                  Heads up, toasts will stack automatically
                </MDBNotification>
              </MDBNotification>
            </div>
          </div>
        </MDBContainer>

        <h2 className="mt-5">Accessibility</h2>
      </MDBContainer>
    );
  }
}

export default NotificationPage;
