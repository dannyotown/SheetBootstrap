import React from "react";
import { Fa, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const FaPage = props => {
  return (
    <Container className="mt-3 text-center">
      <DocsLink
        title="Icons"
        href="https://mdbootstrap.com/docs/react/content/icons-usage/"
      />
      <div className="">
        <p>
          <Fa icon="camera-retro" />
        </p>
        <p>
          <Fa icon="camera-retro" size="lg" />
        </p>
        <p>
          <Fa icon="camera-retro" size="2x" />
        </p>
        <p>
          <Fa icon="camera-retro" size="4x" />
        </p>
        <p>
          <Fa icon="camera-retro" size="5x" />
        </p>
        <p>
          <Fa icon="camera-retro" size="10x" />
        </p>
        <p>
          <Fa icon="quote-left" size="5x" border />
        </p>
        <p>
          <Fa icon="quote-left" size="5x" border pull="right" />
        </p>
        <p>
          <Fa icon="quote-left" size="5x" border pull="left" />
        </p>
        <p>
          <Fa icon="spinner" size="5x" spin />
        </p>
        <p>
          <Fa icon="spinner" size="5x" pulse />
        </p>
        <p>
          <Fa icon="circle-notch" size="5x" spin />
        </p>
        <p>
          <Fa icon="sync" size="5x" spin />
        </p>
        <p>
          <Fa icon="camera-retro" size="5x" rotate="90" />
        </p>
        <p>
          <Fa icon="camera-retro" size="5x" flip="vertical" />
        </p>
      </div>
    </Container>
  );
};

export default FaPage;
