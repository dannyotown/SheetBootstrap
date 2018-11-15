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

      <Alert color="danger" dismiss onClose={()=> alert('onClose event')} onClosed={()=> alert('onClosed event')}>
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </Alert>
    </Container>
  );
};

export default AlertPage;
