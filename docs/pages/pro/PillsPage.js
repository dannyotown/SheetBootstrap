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
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import DocsLink from "../../components/docsLink";
import "./PillsPage.css";

class PillsPage extends Component {
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

  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };

  togglePillsJustified = tab => () => {
    if (this.state.activeItemPillsJustified !== tab) {
      this.setState({
        activeItemPillsJustified: tab
      });
    }
  };

  togglePillsDropdown = tab => () => {
    if (this.state.activeItemPillsDropdown !== tab) {
      this.setState({
        activeItemPillsDropdown: tab
      });
    }
  };

  togglePillsGradient = tab => () => {
    if (this.state.activeItemPillsGradient !== tab) {
      this.setState({
        activeItemPillsGradient: tab
      });
    }
  };

  togglePillsRounded = tab => () => {
    if (this.state.activeItemPillsRounded !== tab) {
      this.setState({
        activeItemPillsRounded: tab
      });
    }
  };

  togglePillsRounded2 = tab => () => {
    if (this.state.activeItemPillsRounded2 !== tab) {
      this.setState({
        activeItemPillsRounded2: tab
      });
    }
  };

  togglePillsRoundedGradient = tab => () => {
    if (this.state.activeItemPillsRoundedGradient !== tab) {
      this.setState({
        activeItemPillsRoundedGradient: tab
      });
    }
  };

  togglePillsRoundedGradient2 = tab => () => {
    if (this.state.activeItemPillsRoundedGradient2 !== tab) {
      this.setState({
        activeItemPillsRoundedGradient2: tab
      });
    }
  };

  togglePillsRoundedOutline = tab => () => {
    if (this.state.activeItemPillsRoundedOutline !== tab) {
      this.setState({
        activeItemPillsRoundedOutline: tab
      });
    }
  };

  togglePillsRoundedOutline2 = tab => () => {
    if (this.state.activeItemPillsRoundedOutline2 !== tab) {
      this.setState({
        activeItemPillsRoundedOutline2: tab
      });
    }
  };

  togglePillsIcons = tab => () => {
    if (this.state.activeItemPillsIcons !== tab) {
      this.setState({
        activeItemPillsIcons: tab
      });
    }
  };

  togglePillsIconsRight = tab => () => {
    if (this.state.activeItemPillsIconsRight !== tab) {
      this.setState({
        activeItemPillsIconsRight: tab
      });
    }
  };

  togglePillsWithContent = tab => () => {
    if (this.state.activeItemPillsWithContent !== tab) {
      this.setState({
        activeItemPillsWithContent: tab
      });
    }
  };

  togglePillsWithContentCard = tab => () => {
    if (this.state.activeItemPillsWithContentCard !== tab) {
      this.setState({
        activeItemPillsWithContentCard: tab
      });
    }
  };

  togglePillsColorAnimation = tab => () => {
    if (this.state.activeItemPillsColorAnimation !== tab) {
      this.setState({
        activeItemPillsColorAnimation: tab
      });
    }
  };

  togglePillsAnimationRoundedOutline = tab => () => {
    if (this.state.activeItemPillsColorAnimationRoundedOutline !== tab) {
      this.setState({
        activeItemPillsColorAnimationRoundedOutline: tab
      });
    }
  };

  togglePillsRoundedAnimationRounded = tab => () => {
    if (this.state.activeItemPillsColorAnimationRounded !== tab) {
      this.setState({
        activeItemPillsColorAnimationRounded: tab
      });
    }
  };

  toggleVerticalPills = tab => e => {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
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
        <DocsLink
          title="Pills"
          href="https://mdbootstrap.com/docs/react/components/pills/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2 className="mt-5">Pills</h2>
              <MDBNav pills color="secondary">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPills === "1" ? "active" : ""
                    }
                    onClick={this.togglePills("1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPills === "2" ? "active" : ""
                    }
                    onClick={this.togglePills("2")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPills === "3" ? "active" : ""
                    }
                    onClick={this.togglePills("3")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPills === "4" ? "active" : ""
                    }
                    onClick={this.togglePills("4")}
                  >
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItemPills}>
                <MDBTabPane tabId="1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
              </MDBTabContent>
              <h2 className="mt-5">Pills with dropdown</h2>
              <MDBNav pills color="success" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsDropdown === "1" ? "active" : ""
                    }
                    onClick={this.togglePillsDropdown("1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret color="success">
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="success">
                      <MDBDropdownItem>Action</MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsDropdown === "3" ? "active" : ""
                    }
                    onClick={this.togglePillsDropdown("3")}
                  >
                    Link 1
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsDropdown === "4" ? "active" : ""
                    }
                    onClick={this.togglePillsDropdown("4")}
                  >
                    Link 2
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <h2 className="mt-5">Vertical Pills</h2>
              <MDBRow>
                <MDBCol md="3">
                  <MDBNav pills color="primary" className="flex-column">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemVerticalPills === "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.toggleVerticalPills("1")}
                      >
                        Downloads <MDBIcon icon="download" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemVerticalPills === "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.toggleVerticalPills("2")}
                      >
                        Orders & invoices
                        <MDBIcon icon="file-alt" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemVerticalPills === "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.toggleVerticalPills("3")}
                      >
                        Billing Details
                        <MDBIcon icon="address-card" className="ml-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>
                <MDBCol md="9">
                  <MDBTabContent
                    activeItem={this.state.activeItemVerticalPills}
                  >
                    <MDBTabPane tabId="1">
                      <MDBCardBody>
                        <MDBCardTitle>Downloads</MDBCardTitle>
                        <MDBCardText>Completely legal</MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBCardBody>
                        <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                        <MDBCardText>
                          "Hello? Is it me you're looking for?"
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <MDBCardBody>
                        <MDBCardTitle>Billing Details</MDBCardTitle>
                        <MDBCardText>
                          Time to pay{" "}
                          <MDBBtn className="ml-3" color="primary">
                            pay
                          </MDBBtn>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>
              <h2 className="mt-5">Pills with gradient</h2>
              <MDBNav pills gradient="peach" className="nav-justified">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsGradient === "1" ? "active" : ""
                    }
                    onClick={this.togglePillsGradient("1")}
                  >
                    Blogger
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsGradient === "2" ? "active" : ""
                    }
                    onClick={this.togglePillsGradient("2")}
                  >
                    Designer
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsGradient === "3" ? "active" : ""
                    }
                    onClick={this.togglePillsGradient("3")}
                  >
                    Photographer
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsGradient === "4" ? "active" : ""
                    }
                    onClick={this.togglePillsGradient("4")}
                  >
                    Model
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <h2 className="mt-5">Rounded pills</h2>
              <MDBRow>
                <MDBNav
                  pills
                  rounded
                  color="deep-purple"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  rounded
                  color="light-purple"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded2 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded2("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded2 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded2("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded2 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded2("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRounded2 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRounded2("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  rounded
                  gradient="peach"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  rounded
                  gradient="aqua"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient2 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient2("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient2 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient2("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient2 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient2("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedGradient2 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedGradient2("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  rounded
                  outline="red"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>

                <MDBNav
                  pills
                  rounded
                  outline="green"
                  className="nav-justified col-md-6"
                >
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline2 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline2("1")}
                    >
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline2 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline2("2")}
                    >
                      Link 1
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline2 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline2("3")}
                    >
                      Link 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemPillsRoundedOutline2 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.togglePillsRoundedOutline2("4")}
                    >
                      Link 3
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </MDBRow>
              <h2 className="mt-5">Pills with icons</h2>
              <MDBNav pills color="info" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIcons === "1" ? "active" : ""
                    }
                    onClick={this.togglePillsIcons("1")}
                  >
                    <MDBIcon fab icon="android" /> USA
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIcons === "2" ? "active" : ""
                    }
                    onClick={this.togglePillsIcons("2")}
                  >
                    <MDBIcon icon="leaf" /> Mexico
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIcons === "3" ? "active" : ""
                    }
                    onClick={this.togglePillsIcons("3")}
                  >
                    <MDBIcon icon="heart" /> Poland
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIcons === "4" ? "active" : ""
                    }
                    onClick={this.togglePillsIcons("4")}
                  >
                    <MDBIcon icon="futbol" /> Brazil
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBNav pills rounded outline="red" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIconsRight === "1"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsIconsRight("1")}
                  >
                    San Francisco <MDBIcon far icon="grin" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIconsRight === "2"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsIconsRight("2")}
                  >
                    Tijuana <MDBIcon icon="users" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIconsRight === "3"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsIconsRight("3")}
                  >
                    Cracow <MDBIcon icon="thumbs-up" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsIconsRight === "4"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsIconsRight("4")}
                  >
                    Rio de Janeiro <MDBIcon icon="coffee" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <h2 className="mt-5">Pills with content </h2>
              <MDBRow>
                <MDBCol md="6">
                  <MDBNav
                    pills
                    rounded
                    gradient="purple"
                    className="nav-justified"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContent === "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContent("1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContent === "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContent("2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContent === "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContent("3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContent === "4"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContent("4")}
                      >
                        Shop
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent
                    activeItem={this.state.activeItemPillsWithContent}
                  >
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
                <MDBCol md="6">
                  <MDBNav pills color="warning" className="nav-justified mb-4">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContentCard === "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContentCard("1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContentCard === "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContentCard("2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsWithContentCard === "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsWithContentCard("3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent
                    className={"card"}
                    activeItem={this.state.activeItemPillsWithContentCard}
                  >
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>

              
              <h2 className="mt-5">Colors animations</h2>
              <MDBRow>
                <MDBCol xl="8" md="10">
                  <MDBNav pills color="blue-teal" className="nav-justified">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimation === "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsColorAnimation("1")}
                      >
                        Fashion
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimation === "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsColorAnimation("2")}
                      >
                        Lifestyle
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimation === "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsColorAnimation("3")}
                      >
                        Beauty
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimation === "4"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsColorAnimation("4")}
                      >
                        Shop
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    rounded
                    outline="purple-anm"
                    className="nav-justified"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state
                            .activeItemPillsColorAnimationRoundedOutline === "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsAnimationRoundedOutline("1")}
                      >
                        Madrid
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state
                            .activeItemPillsColorAnimationRoundedOutline === "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsAnimationRoundedOutline("2")}
                      >
                        Bari
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state
                            .activeItemPillsColorAnimationRoundedOutline === "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsAnimationRoundedOutline("3")}
                      >
                        Warsaw
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state
                            .activeItemPillsColorAnimationRoundedOutline === "4"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsAnimationRoundedOutline("4")}
                      >
                        Paris
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    rounded
                    color="orange-anm"
                    className="nav-justified"
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimationRounded ===
                          "1"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsRoundedAnimationRounded("1")}
                      >
                        Features
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimationRounded ===
                          "2"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsRoundedAnimationRounded("2")}
                      >
                        Pricing
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimationRounded ===
                          "3"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsRoundedAnimationRounded("3")}
                      >
                        Gadgets
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsColorAnimationRounded ===
                          "4"
                            ? "active"
                            : ""
                        }
                        onClick={this.togglePillsRoundedAnimationRounded("4")}
                      >
                        Technology
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent
                    activeItem={this.state.activeItemPillsColorAnimationRounded}
                  >
                    <MDBTabPane tabId="1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil odit magnam minima, soluta doloribus
                        reiciendis molestiae placeat unde eos molestias.
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima.
                      </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>


              <h2 className="mt-5">Pills within modal</h2>
              <MDBBtn rounded onClick={this.toggle(1)}>
                Launch Modal LogIn/Register
                <MDBIcon icon="eye" className="ml-1" />
              </MDBBtn>
              <MDBModal
                isOpen={this.state.modal1}
                toggle={this.toggle(1)}
                centered
              >
                <MDBModalBody>
                  <MDBNav pills color="primary" className="nav-justified pt-2">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#"
                        className={
                          this.state.activeItemPillsModal === "1"
                            ? "active"
                            : ""
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
                          this.state.activeItemPillsModal === "2"
                            ? "active"
                            : ""
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
              <h2 className="mt-5">Pills within the tabs</h2>
              <MDBNav tabs className="nav-justified" color="indigo">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemOuterTabs === "1" ? "active" : ""
                    }
                    onClick={this.toggleOuterTabs("1")}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemOuterTabs === "2" ? "active" : ""
                    }
                    onClick={this.toggleOuterTabs("2")}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card mb-5"
                activeItem={this.state.activeItemOuterTabs}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={
                              this.state.activeItemInnerPills === "1"
                                ? "active"
                                : ""
                            }
                            onClick={this.toggleInnerPills("1")}
                          >
                            Downloads{" "}
                            <MDBIcon icon="download" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={
                              this.state.activeItemInnerPills === "2"
                                ? "active"
                                : ""
                            }
                            onClick={this.toggleInnerPills("2")}
                          >
                            Orders & invoices
                            <MDBIcon icon="file-alt" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to="#"
                            className={
                              this.state.activeItemInnerPills === "3"
                                ? "active"
                                : ""
                            }
                            onClick={this.toggleInnerPills("3")}
                          >
                            Billing Details
                            <MDBIcon icon="address-card" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBTabContent
                        activeItem={this.state.activeItemInnerPills}
                      >
                        <MDBTabPane tabId="1">
                          <MDBCardBody>
                            <MDBCardTitle>Downloads</MDBCardTitle>
                            <MDBCardText>Completely legal</MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                          <MDBCardBody>
                            <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                            <MDBCardText>
                              "Hello? Is it me you're looking for?"
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                          <MDBCardBody>
                            <MDBCardTitle>Billing Details</MDBCardTitle>
                            <MDBCardText>
                              Time to pay{" "}
                              <MDBBtn className="ml-3" color="secondary">
                                pay
                              </MDBBtn>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default PillsPage;
