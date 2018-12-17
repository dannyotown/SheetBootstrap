import React from "react";
import { Fa, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const EdgeHeaderPage = props => {
  return (
    <Container className="mt-3 text-center">
      <DocsLink
        title="Edge Header"
        href="https://mdbootstrap.com/plugins/react/edge-header/"
      />
      <div className="">
        <p>
          <Fa icon="camera-retro" />
        </p>
      </div>
    </Container>
  );
};

export default EdgeHeaderPage;
