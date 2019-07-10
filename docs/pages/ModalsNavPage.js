import React from "react";
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const ModalsNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" className="mt-3 mx-auto">
            <MDBJumbotron>
              <h1 className="text-center">
                <MDBIcon icon="window-restore" className="mr-2" style={{ color: "#283593" }} />
                Modals
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text"><strong>FREE</strong> </h6>
                <MenuLink to="/modals/modal" title="Modal" />
                <MenuLink to="/modals/modal-form" title="Modal Form" />
                <MenuLink to="/modals/modal-examples" title="Modal Templates & Examples" />

                {/* PRO-START */}
                <h6 className="mt-3 grey-text"><strong>PRO</strong></h6>
                <MenuLink to="/modals/pro/modal-form" title="Modal Form" />
                <MenuLink to="/modals/pro/modal-examples" title="Modal Templates & Examples" />
                {/* PRO-END */}
              </ul>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default ModalsNavPage;
