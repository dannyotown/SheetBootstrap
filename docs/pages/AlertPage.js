import React from "react";
import { Container, Alert } from 'mdbreact';
import DocsLink from "./DocsLink";

const AlertPage = () => {

  return (
    <Container>
      <DocsLink
        title="Alerts"
        href="https://mdbootstrap.com/docs/react/advanced/alerts/"
      />

      <Alert />
    </Container>
  );
};

export default AlertPage;
