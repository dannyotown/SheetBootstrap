import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer } from "mdbreact";
import DocsLink from "./DocsLink";

const ListGroupPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="List Group"
        href="https://mdbootstrap.com/docs/react/components/list-group/"
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col" style={{ maxWidth: "23rem" }}>
            <MDBListGroup>
              <MDBListGroupItem
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                Link <MDBBadge pill>14</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem
                active
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                Active in <MDBBadge pill>2</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                Not link <MDBBadge pill>1</MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem
                active
                className="d-flex justify-content-between align-items-center"
              >
                Not link, but active <MDBBadge pill>1</MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
};

export default ListGroupPage;
