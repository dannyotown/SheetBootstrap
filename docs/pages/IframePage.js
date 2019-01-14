import React, { Component } from "react";
import { MDBContainer, MDBIframe } from "mdbreact";
import DocsLink from "./../components/docsLink";

class IframePage extends Component {
  render() {
    return (
      <MDBContainer className="text-center">
        <DocsLink
          title="Iframe"
          href="https://mdbootstrap.com/plugins/react/iframe/"
        />
        <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
      </MDBContainer>
    );
  }
}

export default IframePage;
