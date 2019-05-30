import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";

export default class TabsDefault extends Component {
  state = {
    activeItemPills: "1",
    activeItemPillsJustified: "1",
    activeItemPillsDropdown: "1",
    activeItemPillsGradient: "1",
    activeItemPillsRounded: "1",
    activeItemPillsRounded2: "1",
    activeItemPillsRoundedGradient: "1",
    activeItemPillsRoundedGradient2: "1",
    activeItemPillsRoundedOutline: "1",
    activeItemPillsRoundedOutline2: "1",
    activeItemPillsIcons: "1",
    activeItemPillsIconsRight: "1",
    activeItemPillsWithContent: "1",
    activeItemPillsWithContentCard: "1",
    activeItemPillsColorAnimation: "1",
    activeItemPillsColorAnimationRoundedOutline: "1",
    activeItemPillsColorAnimationRounded: "1",
    activeItemPillsModal: "1",

    activeItemVerticalPills: "1",
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",

    modal1: false
  };

  togglePillsModal = tab => () => {
    if (this.state.activeItemPillsModal !== tab) {
      this.setState({
        activeItemPillsModal: tab
      });
    }
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <h2 className="mt-5">Pills within modal</h2>
        <MDBBtn rounded onClick={this.toggle(1)}>
          Launch Modal LogIn/Register
          <MDBIcon icon="eye" className="ml-1" />
        </MDBBtn>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
          <MDBModalBody>
            <MDBNav pills color="primary" className="nav-justified pt-2">
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  className={
                    this.state.activeItemPillsModal === "1" ? "active" : ""
                  }
                  onClick={this.togglePillsModal("1")}
                >
                  <MDBIcon icon="user" className="mr-1" /> Login
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  className={
                    this.state.activeItemPillsModal === "2" ? "active" : ""
                  }
                  onClick={this.togglePillsModal("2")}
                >
                  <MDBIcon icon="user-plus" className="mr-1" /> Register
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItemPillsModal}>
              <MDBTabPane tabId="1">
                <form className=" mx-3 grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <MDBCol size="12" className="text-center">
                    <MDBBtn color="primary">
                      LOG IN
                      <MDBIcon icon="sign-in-alt" className="ml-1" />
                    </MDBBtn>
                  </MDBCol>
                </form>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <form className="mx-3 grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <MDBCol size="12" className="text-center">
                    <MDBBtn color="primary">
                      SIGN IN
                      <MDBIcon icon="sign-in-alt" className="ml-1" />
                    </MDBBtn>
                  </MDBCol>
                </form>
              </MDBTabPane>
            </MDBTabContent>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBRow className="w-100 justify-content-start">
              <MDBCol size="8">
                <div id="options" className="text-right float-left">
                  <MDBTabContent
                    className="pt-1 px-0 pb-0"
                    activeItem={this.state.activeItemPillsModal}
                  >
                    <MDBTabPane tabId="1">
                      <p className="font-small">
                        Not a member?
                        <a
                          className="blue-text ml-1"
                          onClick={this.togglePillsModal("2")}
                        >
                          Sign Up
                        </a>
                      </p>
                      <p className="font-small">
                        Forgot <a className="blue-text ml-1">password?</a>
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p className="font-small">
                        Already have an account?
                        <a
                          className="blue-text ml-1"
                          onClick={this.togglePillsModal("2")}
                        >
                          LogIn
                        </a>
                      </p>
                      <p className="font-small">
                        Forgot <a className="blue-text ml-1">password?</a>
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </div>
              </MDBCol>
              <MDBCol size="4" className="float-right">
                <MDBBtn outline color="primary" onClick={this.toggle(1)}>
                  CLOSE
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
