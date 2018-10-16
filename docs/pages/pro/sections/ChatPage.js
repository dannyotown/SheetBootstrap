import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdbreact";

class ChatPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCard color="grey lighten-3" className="chat-room">
          <MDBCardBody>
            <MDBRow className="px-lg-2 px-2">
              <MDBCol md="6" xl="4" className="px-0">
                <h6 className="font-weight-bold mb-3 text-center text-lg-left">
                  Member
                </h6>
                <div className="white z-depth-1 px-3 pt-3 pb-0">
                  <ul className="list-unstyled friend-list">
                    <li className="active grey lighten-3 p-2">
                      <a href="#!" class="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8"
                          alt="avatar"
                          class="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        >
                        <div class="text-small">
                          <strong>John Doe</strong>
                          <p class="last-message text-muted">
                            Hello, Are you there?
                          </p>
                        </div>
                        <div class="chat-footer">
                          <p class="text-smaller text-muted mb-0">Just now</p>
                          <span class="badge badge-danger float-right">1</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default ChatPage;
