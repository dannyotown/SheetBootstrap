import React from "react";
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const NavigationNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" className="mt-3 mx-auto">
            <MDBJumbotron>
              <h1 className="text-center">
                <MDBIcon icon="bars" className="mr-2" style={{ color: "#283593" }} />
                Navigation
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text"><strong>FREE</strong> </h6>
                <MenuLink to="/navigation/navbar" title="Navbar" />
                <MenuLink to="/navigation/breadcrumb" title="Breadcrumb" />
                <MenuLink to="/navigation/footer" title="Footer" />
                <MenuLink to="/navigation/navs" title="Navs" />
                {/* PRO-START */}
                <h6 className="mt-3 grey-text"><strong>PRO</strong> </h6>
                <MenuLink to="/navigation/pro/double" title="Double Navigation" />
                <MenuLink to="/navigation/pro/footer" title="Footer" />
                <MenuLink to="/navigation/pro/hamburger-menu" title="Hamburger Menu" />
                <MenuLink to="/navigation/pro/navs" title="Navs" />
                <MenuLink to="/navigation/pro/scrollspy" title="ScrollSpy" />
                <MenuLink to="/navigation/pro/sidenav" title="SideNav" />
                <MenuLink to="/navigation/pro/slim-sidenav" title="Slim SideNav" />
                {/* PRO-END */}
              </ul>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default NavigationNavPage;
