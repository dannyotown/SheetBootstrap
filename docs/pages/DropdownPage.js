import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const DropdownPage = () => {
  return (
    <MDBContainer>
      <DocsLink title="MDBDropdown" href="https://mdbootstrap.com/docs/react/components/dropdowns/" />

      <SectionContainer header="Basic example">
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="default">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="default">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="secondary">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="secondary">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="success">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="success">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="dark">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="dark">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="danger">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="danger">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="info">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="info">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="warning">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="warning">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle caret color="ins">
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu color="ins">
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Sizing">
        <MDBDropdown size="lg">
          <MDBDropdownToggle caret>Large Button</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown size="sm">
          <MDBDropdownToggle caret color="primary">
            Small Button
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Dropup variation">
        <MDBDropdown dropup>
          <MDBDropdownToggle caret color="primary">
            Dropup
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Alignment">
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            This dropdown&apos;s menu is right-aligned
          </MDBDropdownToggle>
          <MDBDropdownMenu right>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Menu headers">
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem header>MDBDropdown header</MDBDropdownItem>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Menu dividers">
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>

      <SectionContainer header="Disabled menu items">
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>Regular link</MDBDropdownItem>
            <MDBDropdownItem disabled href="#">
              Disabled link
            </MDBDropdownItem>
            <MDBDropdownItem href="#">Another link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </SectionContainer>
    </MDBContainer>
  );
};

export default DropdownPage;
