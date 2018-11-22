import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";
import DocsLink from "./DocsLink";

class DropdownPage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="MDBDropdown"
          href="https://mdbootstrap.com/docs/react/components/dropdowns/"
        />
        <div className="container">
          <h2>Basic example</h2>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Material dropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle caret color="danger">
              Material dropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle caret color="success">
              Material dropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Sizing</h2>
          <MDBDropdown size="lg">
            <MDBDropdownToggle caret>Large Button</MDBDropdownToggle>
            <MDBDropdownMenu basic>
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
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Separated link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Dropup variation</h2>
          <MDBDropdown dropup>
            <MDBDropdownToggle caret color="primary">
              Dropup
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Separated link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Alignment</h2>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              This dropdown&apos;s menu is right-aligned
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Menu headers</h2>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem header>MDBDropdown header</MDBDropdownItem>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Menu dividers</h2>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Separated link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <br />
          <h2>Disabled menu items</h2>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Regular link</MDBDropdownItem>
              <MDBDropdownItem disabled href="#">
                Disabled link
              </MDBDropdownItem>
              <MDBDropdownItem href="#">Another link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </MDBContainer>
    );
  }
}

export default DropdownPage;
