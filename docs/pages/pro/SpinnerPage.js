import React from "react";
import { MDBSpinner, MDBContainer, MDBCol } from "mdbreact";
import DocsLink from "../../components/docsLink";

const SpinnerPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Loader/Spinner"
        href="https://mdbootstrap.com/docs/react/components/spinners/"
      />
      <div className="container-fluid text-center">
        <MDBCol size="3">
          <MDBSpinner green small />
        </MDBCol>
        <MDBCol size="4">
          <MDBSpinner yellow />
        </MDBCol>
        <MDBCol size="5">
          <MDBSpinner crazy big multicolor />
        </MDBCol>
      </div>
    </MDBContainer>
  );
};

export default SpinnerPage;
