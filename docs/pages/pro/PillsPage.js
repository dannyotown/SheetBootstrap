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
  MDBDropdownItem
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
    activeItemPillsWithContent: "1",
    activeItemPillsWithContentCard: "1",
    activeItemVerticalPills: "1",
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1"
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

              <h2 className="mt-5">Pills justified</h2>
              <MDBNav pills color="pink" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "1"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("1")}
                  >
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "2"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("2")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "3"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("3")}
                  >
                    Link
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "4"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("4")}
                  >
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

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
                    <MDBDropdownMenu color="secondary">
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
                    Link
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
                    Help
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
                    Active
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
                    Link
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
                    Link
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
                    Help
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>

              <h2 className="mt-5">Rounded pills</h2>
              <MDBRow>
                <MDBCol md="6">
                  <MDBNav
                    pills
                    rounded
                    color="deep-purple"
                    className="nav-justified"
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    rounded
                    gradient="peach"
                    className="nav-justified"
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills rounded outline="red" className="nav-justified">
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>

                <MDBCol md="6">
                  <MDBNav
                    pills
                    rounded
                    color="light-purple"
                    className="nav-justified"
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    rounded
                    gradient="aqua"
                    className="nav-justified"
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBNav
                    pills
                    rounded
                    outline="green"
                    className="nav-justified"
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
                        Link
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
                        Link
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
                        Help
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>
              </MDBRow>

              <h2 className="mt-5">Pills with icons</h2>
              <MDBNav pills color="info" className="nav-justified ">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "1"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("1")}
                  >
                    <MDBIcon fab icon="android" /> USA
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "2"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("2")}
                  >
                    <MDBIcon icon="leaf" /> Mexico
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "3"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("3")}
                  >
                    <MDBIcon icon="heart" /> Poland
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "4"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("4")}
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
                      this.state.activeItemPillsJustified === "1"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("1")}
                  >
                    San Francisco <MDBIcon far icon="grin" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "2"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("2")}
                  >
                    Tijuana <MDBIcon icon="users" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "3"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("3")}
                  >
                    Cracow <MDBIcon icon="thumbs-up" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemPillsJustified === "4"
                        ? "active"
                        : ""
                    }
                    onClick={this.togglePillsJustified("4")}
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
                          this.state.activeItemPillsJWithContent === "2"
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
                  <MDBNav
                    pills
                    color="warning"
                    className="nav-justified mb-4"
                  >
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
                  <MDBTabContent className={'card'}
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
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>


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
