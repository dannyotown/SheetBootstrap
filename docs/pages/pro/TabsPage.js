import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
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

class TabsPage extends Component {
  state = {
    activeItem: "1",
    activeItem2: "1",
    activeItemClassicTabs1: "1",
    activeItemClassicTabs2: "1",
    activeItemClassicTabs3: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  toggle = tab => e => {
    if (this.state.activeItem2 !== tab) {
      this.setState({
        activeItem2: tab
      });
    }
  };

  toggleClassicTabs1 = tab => e => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  };

  toggleClassicTabs2 = tab => e => {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  };

  toggleClassicTabs3 = tab => e => {
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/components/tabs/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2>Basic</h2>
              <MDBNav tabs className="nav-justified">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "1" ? "active" : ""}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    <MDBIcon icon="user" /> Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "2" ? "active" : ""}
                    onClick={this.toggle("2")}
                    role="tab"
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "3" ? "active" : ""}
                    onClick={this.toggle("3")}
                    role="tab"
                  >
                    <MDBIcon icon="envelope" /> Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItem}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
              </MDBTabContent>

              <h2 className="mt-5">With dropdown</h2>
              <MDBContainer>
                <MDBNav tabs>
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color="secondary">
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
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink disabled to="#!">
                      Disabled
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </MDBContainer>

              <h2 className="mt-5">Classic tabs</h2>
              <div className="classic-tabs">
                <MDBNav classicTabs color="cyan">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs1 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs1("1")}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs1 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs1("2")}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs1 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs1("3")}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs1 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs1("4")}
                    >
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card"
                  activeItem={this.state.activeItemClassicTabs1}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
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
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
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
              </div>

              <div className="classic-tabs">
                <MDBNav classicTabs color="cyan" className="mt-5">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs2 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs2("1")}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs2 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs2("2")}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs2 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs2("3")}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs2 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs2("4")}
                    >
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="border-right border-bottom border-left rounded-bottom bg-white"
                  activeItem={this.state.activeItemClassicTabs2}
                >
                  <MDBTabPane tabId="1">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
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
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
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
              </div>

              <div className="classic-tabs">
                <MDBNav classicTabs color="orange" className="mt-5">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs3 === "1"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs3("1")}
                    >
                      <MDBIcon icon="user" size="2x" />
                      <br />
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs3 === "2"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs3("2")}
                    >
                      <MDBIcon icon="heart" size="2x" />
                      <br />
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs3 === "3"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs3("3")}
                    >
                      <MDBIcon icon="envelope" size="2x" />
                      <br />
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={
                        this.state.activeItemClassicTabs3 === "4"
                          ? "active"
                          : ""
                      }
                      onClick={this.toggleClassicTabs3("4")}
                    >
                      <MDBIcon icon="star" size="2x" />
                      <br />
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card mb-5"
                  activeItem={this.state.activeItemClassicTabs3}
                >
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
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
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
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default TabsPage;
