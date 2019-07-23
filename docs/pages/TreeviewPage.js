import React, { Component } from "react";
import { MDBContainer, MDBTreeview, MDBCol } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class TreeviewPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/components/tabs/"
        />
        <SectionContainer header="Basic example">
          <MDBCol size="4">
            <MDBTreeview header="Folders">
              <MDBTreeview item nested far icon="envelope-open" title="Mail">
                <MDBTreeview item far icon="bell" title="Offers" />
                <MDBTreeview item far icon="address-book" title="Contact" />
                <MDBTreeview
                  item
                  nested
                  far
                  icon="calendar-alt"
                  title="Calendar"
                >
                  <MDBTreeview item far icon="clock" title="Deadlines" />
                  <MDBTreeview item icon="users" title="Meetings" />
                  <MDBTreeview item icon="basketball-ball" title="Workouts" />
                  <MDBTreeview item icon="mug-hot" title="Events" />
                </MDBTreeview>
              </MDBTreeview>
              <MDBTreeview item far nested title="Inbox">
                <MDBTreeview item far title="Admin" />
                <MDBTreeview item far title="Corporate" />
                <MDBTreeview item far title="Finance" />
                <MDBTreeview item far title="Other" />
              </MDBTreeview>
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TreeviewPage;
