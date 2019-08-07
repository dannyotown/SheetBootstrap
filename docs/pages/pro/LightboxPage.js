import React, { Component } from "react";
import { MDBContainer, MDBLightBox } from "mdbreact";
import DocsLink from "./../../components/docsLink";
import SectionContainer from "../../components/sectionContainer";


class LightboxPage extends Component {

  state = {
     images: [
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
    ]
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Lightbox"
          href="https://mdbootstrap.com/docs/react/advanced/lightbox/"
        />
        <SectionContainer header="Basic example" className="p-4">
          <MDBLightBox images={this.state.images}/>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default LightboxPage;
