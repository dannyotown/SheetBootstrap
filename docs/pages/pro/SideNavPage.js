import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
  MDBRow,
  MDBIcon
} from "mdbreact";
import DocsLink from "../DocsLink";

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftOpen: false,
      isRightOpen: false
    };
  }

  // Slide out buttons event handlers
  handleToggleClickA = () => {
    this.setState({
      isLeftOpen: !this.state.isLeftOpen
    });
  };
  handleToggleClickB = () => {
    this.setState({
      isRightOpen: !this.state.isRightOpen
    });
  };

  render() {
    // Because the toggling buttons are nearly identical, we create a function to render them:
    const createButton = (onClick, side) => {
      return (
        <div style={{ width: "50%", textAlign: "center" }}>
          <a href="#!" onClick={onClick} key={"toggleThe" + side + "SideNav"}>
            <MDBIcon icon="bars" size="5x" />
          </a>
        </div>
      );
    };

    return (
      <Router>
        <MDBContainer>
          <DocsLink
            title="Sidenav"
            href="https://mdbootstrap.com/docs/react/navigation/sidenav/"
          />
          {/* the buttons toggling visibility of SideNavs: */}
          <MDBRow style={{ height: "80vh", alignItems: "center" }}>
            {createButton(this.handleToggleClickA, "Left")}
            {createButton(this.handleToggleClickB, "Right")}
          </MDBRow>

          {/* the left SideNav: */}
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.isLeftOpen}
            breakWidth={1300}
            className="deep-purple darken-4"
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNav>
              <MDBSideNavLink to="/other-page" topLevel><MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog"
                icon="chevron-right"
              >
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction"
                icon="hand-pointer"
                href="#"
              >
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>

          {/* the right SideNav: */}
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={this.state.isRightOpen}
            className="side-nav-light"
            right
            breakWidth={1300}
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon brand icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog2"
                icon="chevron-right"
              >
                <MDBSideNavLink className="active">Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction2"
                icon="hand-pointer"
              >
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about2" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me2" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
      </Router>
    );
  }
}

export default SideNavPage;
