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
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </Alert>

      <Alert color="danger" dismiss onClose={()=> alert('This event fires immediately when the close instance method is called.')} onClosed={()=> alert('This event is fired when the alert has been closed (will wait for CSS transitions to complete).')}>
        Alert component exposes a few events for hooking into alert functionality.
      </Alert>
      <Alert color="primary" dismiss>
        A simple primary alert—check it out!
      </Alert>
      <Alert color="secondary" dismiss>
        A simple secondary alert—check it out!
      </Alert>
      <Alert color="success" dismiss>
        A simple success alert—check it out!
      </Alert>
      <Alert color="danger" dismiss>
        A simple success alert—check it out!
      </Alert>
      <Alert color="warning" dismiss>
        A simple warning alert—check it out!
      </Alert>
      <Alert color="info" dismiss>
        A simple info alert—check it out!
      </Alert>
      <Alert color="light" dismiss>
        A simple light alert—check it out!
      </Alert>
      <Alert color="dark" dismiss>
        A simple dark alert—check it out!
      </Alert>

      <Alert color="primary">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="success">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="warning">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="info">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="light">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="dark">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
    </Container>
  );
};

export default AlertPage;
