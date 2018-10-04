import React, { Component } from "react";
import { Container, Iframe } from "mdbreact";
import DocsLink from "./DocsLink";

class IframePage extends Component {
  render() {
    return (
      <Container className="text-center">
        <DocsLink
          title="Iframe"
          href="https://mdbootstrap.com/react/components/iframe/"
        />
        <Iframe height={500} src="https://www.youtube.com/embed/v64KOxKVLVg" />
      </Container>
    );
  }
}

export default IframePage;
