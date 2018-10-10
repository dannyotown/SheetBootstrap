import React, { Component } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBAvatar
} from "mdbreact";
import DocsLink from "./../DocsLink";
import "./ChatPage.css";

class ChatPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Chat"
          href="https://mdbootstrap.com/react/addons/chat/"
        />
        <MDBCard className="grey lighten-3 chat-room">
          <MDBCardBody>
            <MDBRow className="px-lg-2 px-2">
              <MDBCol md={6} xl={4} className="px-0">
                <h6 className="font-weight-bold mb-3 text-lg-left">Member</h6>
                <div className="white z-depth-1 p-3">
                  <MDBListGroup className="list-unstyled friend-list">
                    <MDBListGroupItem
                      href="#"
                      className="d-flex justify-content-between active p-2"
                    >
                      <MDBAvatar
                        tag="img"
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8"
                        alt="avatar"
                        circle
                        className="mr-2 z-depth-1"
                      />
                      <div className="text-small">
                        <strong>John Doe</strong>
                        <p className="last-message text-muted">
                          Hello, Are you there?
                        </p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Just now</p>
                        <span className="badge badge-danger float-right">
                          1
                        </span>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Danny Smith</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            5 min ago
                          </p>
                          <span className="text-muted float-right">
                            <i
                              className="fa fa-mail-reply"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Alex Steward</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            Yesterday
                          </p>
                          <span className="text-muted float-right">
                            <i
                              className="fa fa-mail-reply"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Ashley Olsen</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            Yesterday
                          </p>
                          <span className="text-muted float-right">
                            <i
                              className="fa fa-mail-reply"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Kate Moss</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            Yesterday
                          </p>
                          <span className="text-muted float-right">
                            <i
                              className="fa fa-mail-reply"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Lara Croft</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            Yesterday
                          </p>
                          <span className="text-muted float-right">
                            <i
                              className="fa fa-mail-reply"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="p-2">
                      <a href="#" className="d-flex justify-content-between">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                          alt="avatar"
                          className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                        />
                        <div className="text-small">
                          <strong>Brad Pitt</strong>
                          <p className="last-message text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                        <div className="chat-footer">
                          <p className="text-smaller text-muted mb-0">
                            5 min ago
                          </p>
                          <span className="text-muted float-right">
                            <i className="fa fa-check" aria-hidden="true" />
                          </span>
                        </div>
                      </a>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </div>
              </MDBCol>
              <div className="col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0">
                <div className="chat-message">
                  <ul className="list-unstyled chat">
                    <li className="d-flex justify-content-between mb-4">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                        alt="avatar"
                        className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"
                      />
                      <div className="chat-body white p-3 ml-2 z-depth-1">
                        <div className="header">
                          <strong className="primary-font">Brad Pitt</strong>
                          <small className="pull-right text-muted">
                            <i className="fa fa-clock-o" /> 12 mins ago
                          </small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between mb-4">
                      <div className="chat-body white p-3 z-depth-1">
                        <div className="header">
                          <strong className="primary-font">Lara Croft</strong>
                          <small className="pull-right text-muted">
                            <i className="fa fa-clock-o" /> 13 mins ago
                          </small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium.
                        </p>
                      </div>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5"
                        alt="avatar"
                        className="avatar rounded-circle mr-0 ml-3 z-depth-1"
                      />
                    </li>
                    <li className="d-flex justify-content-between mb-4 pb-3">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                        alt="avatar"
                        className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"
                      />
                      <div className="chat-body white p-3 ml-2 z-depth-1">
                        <div className="header">
                          <strong className="primary-font">Brad Pitt</strong>
                          <small className="pull-right text-muted">
                            <i className="fa fa-clock-o" /> 12 mins ago
                          </small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </li>
                    <li className="white">
                      <div className="form-group basic-textarea">
                        <textarea
                          className="form-control pl-2 my-0"
                          id="exampleFormControlTextarea2"
                          rows="3"
                          placeholder="Type your message here..."
                        />
                      </div>
                    </li>
                    <button
                      type="button"
                      className="btn btn-info btn-rounded btn-sm waves-effect waves-light float-right"
                    >
                      Send
                    </button>
                  </ul>
                </div>
              </div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <hr className="my-5" />
      </MDBContainer>
    );
  }
}

export default ChatPage;
