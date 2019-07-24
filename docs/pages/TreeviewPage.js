import React, { Component } from "react";
import { MDBContainer, MDBTreeview } from "mdbreact";
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
          <MDBTreeview header="Folders" className="w-20">
            <MDBTreeview nested far icon="envelope-open" title="Mail">
              <MDBTreeview far icon="bell" title="Offers" />
              <MDBTreeview far icon="address-book" title="Contact" />
              <MDBTreeview nested far icon="calendar-alt" title="Calendar">
                <MDBTreeview far icon="clock" title="Deadlines" />
                <MDBTreeview icon="users" title="Meetings" />
                <MDBTreeview icon="basketball-ball" title="Workouts" />
                <MDBTreeview icon="mug-hot" title="Events" />
              </MDBTreeview>
            </MDBTreeview>
            <MDBTreeview far nested title="Inbox">
              <MDBTreeview far title="Admin" />
              <MDBTreeview far title="Corporate" />
              <MDBTreeview far title="Finance" />
              <MDBTreeview far title="Other" />
            </MDBTreeview>
            <MDBTreeview nested far icon="gem" title="Favourites">
              <MDBTreeview icon="pepper-hot" title="Restaurants" />
              <MDBTreeview icon="eye" title="Places" />
              <MDBTreeview icon="gamepad" title="Games" />
              <MDBTreeview icon="cocktail" title="Cocktails" />
              <MDBTreeview icon="pizza-slice" title="Food" />
            </MDBTreeview>
            <MDBTreeview far icon="comment" title="Notes" />
            <MDBTreeview icon="cog" title="Settings" />
            <MDBTreeview icon="desktop" title="Devices" />
            <MDBTreeview icon="trash-alt" title="Deleted items" />
          </MDBTreeview>
        </SectionContainer>

        <SectionContainer header="Animated">
          <MDBTreeview header="Folders" className="w-20" animated>
            <MDBTreeview nested animated far icon="envelope-open" title="Mail">
              <MDBTreeview far icon="address-book" title="Contact" />
              <MDBTreeview far icon="bell" title="Offers" />
              <MDBTreeview nested animated far icon="calendar" title="Calendar">
                <MDBTreeview far icon="clock" title="Deadlines" />
                <MDBTreeview icon="users" title="Meetings" />
                <MDBTreeview icon="basketball-ball" title="Workouts" />
                <MDBTreeview icon="mug-hot" title="Events" />
              </MDBTreeview>
            </MDBTreeview>
            <MDBTreeview far nested animated title="Inbox">
              <MDBTreeview far title="Admin" />
              <MDBTreeview far title="Corporate" />
              <MDBTreeview far title="Finance" />
              <MDBTreeview far title="Other" />
            </MDBTreeview>
            <MDBTreeview nested animated far icon="gem" title="Favourites">
              <MDBTreeview icon="pepper-hot" title="Restaurants" />
              <MDBTreeview icon="eye" title="Places" />
              <MDBTreeview icon="gamepad" title="Games" />
              <MDBTreeview icon="cocktail" title="Cocktails" />
              <MDBTreeview icon="pizza-slice" title="Food" />
            </MDBTreeview>
            <MDBTreeview far icon="comment" title="Notes" />
            <MDBTreeview icon="cog" title="Settings" />
            <MDBTreeview icon="desktop" title="Devices" />
            <MDBTreeview icon="trash-alt" title="Deleted items" />
          </MDBTreeview>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TreeviewPage;
