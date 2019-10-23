import React, { Component } from "react";
import { MDBNavItem, MDBNavLink, MDBContainer, MDBTabPane, MDBTabContent, MDBNav } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
class Pills extends Component {
  state = {
    items: {
      default: "1"
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <Router>
        <MDBContainer>
          <MDBNav pills color="secondary">
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "1"}
                onClick={this.togglePills("default", "1")}
              >
                Active
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "2"}
                onClick={this.togglePills("default", "2")}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "3"}
                onClick={this.togglePills("default", "3")}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "4"}
                onClick={this.togglePills("default", "4")}
              >
                Help
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.items["default"]}>
            <MDBTabPane tabId="1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </Router>
    );
  }
}

export default Pills;
