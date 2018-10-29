import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const BreadcrumbPage = props => {
  return (
    <Container>
      <DocsLink
        title="Breadcrumb"
        href="https://mdbootstrap.com/react/components/breadcrumb/"
      />
      <div className="container-fluid text-center">

        <Breadcrumb light color="default">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb light color="primary">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem  active>Library</BreadcrumbItem>
        </Breadcrumb>


        <Breadcrumb light color="secondary">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Library</BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>

      </div>
    </Container>
  );
};

export default BreadcrumbPage;
