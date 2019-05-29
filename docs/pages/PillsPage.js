import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import DocsLink from "../components/docsLink";

class PillsPage extends Component {
  state = {
    activeItemPills: "1"
  };

  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
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
            <h2>Default</h2>
              <MDBNav navPills color="secondary" className="mt-5">
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default PillsPage;
