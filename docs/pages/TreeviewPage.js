import React, { Component } from "react";
import {
  MDBContainer,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem,
  MDBCol
} from "mdbreact";
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
          <MDBCol md="4">
            <MDBTreeview
              header="Folders"
              className="w-20"
              getActive={e => console.log(e)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox" far>
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Animated">
          <MDBCol md="4">
            <MDBTreeview
              theme="animated"
              header="Folders"
              className="w-20"
              getActive={e => console.log(e)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox" far>
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Colorful">
          <MDBCol md="4">
            <MDBTreeview
              theme="colorful"
              header="Folders"
              className="border-secondary w-20 "
              getActive={e => console.log(e)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox" far>
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TreeviewPage;
